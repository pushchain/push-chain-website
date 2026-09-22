import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface PushAPIReferenceProps {
  children: React.ReactNode;
  className?: string;
  showRequiredNotice?: boolean;
}

const BRANCH_MARKER = '↳'; // the arrow that opens a branch header row
const CHILD_MARKER = ' '; // rows indented with &nbsp; (U+00A0) belong to the branch above
const SECTION_MARKER = '::'; // full-width section label row, or a thin end row when empty
const COLLAPSED_MARKER = '[collapsed]'; // trailing marker on a branch or section header: start collapsed

const ROW_ATTR = 'data-api-row'; // set on every row once enhanced: branch | child | section | end | sectionChild | plain
const BRANCH_CLASS = 'api-branch-row';
const CHILD_CLASS = 'api-branch-child';
const COLLAPSED_CLASS = 'api-branch-collapsed';
const SECTION_CLASS = 'api-section-row';
const SECTION_END_CLASS = 'api-section-end';
const SECTION_CHILD_CLASS = 'api-section-child'; // indented row outside a branch: padding only
const SECTION_TOGGLE_CLASS = 'api-section-collapsible'; // :: label row with indented rows below it: toggles them
const TOGGLE_HINT_CLASS = 'api-toggle-hint'; // span appended to a group header's first cell: label + chevron

type RowKind = 'branch' | 'child' | 'section' | 'end' | 'sectionChild' | 'plain';

/** The toggle hint span this component appended to `cell`, if any. */
function findToggleHint(cell: HTMLTableCellElement): HTMLSpanElement | null {
  return cell.querySelector<HTMLSpanElement>(`:scope > span.${TOGGLE_HINT_CLASS}`);
}

/** The authored text of a cell, without the appended toggle hint label. */
function cellText(cell: HTMLTableCellElement | undefined): string {
  if (!cell) return '';
  const text = cell.textContent ?? '';
  const hint = findToggleHint(cell);
  const hintText = hint?.textContent ?? '';
  return hint && hintText && text.endsWith(hintText) ? text.slice(0, text.length - hintText.length) : text;
}

function firstCellText(row: HTMLTableRowElement): string {
  return cellText(row.cells[0]);
}

/** Writes 'Collapse' or 'Expand' to the header's hint; skips the write when it already matches. */
function updateToggleHint(header: HTMLTableRowElement, open: boolean): void {
  const cell = header.cells[0];
  const hint = cell ? findToggleHint(cell) : null;
  const label = open ? 'Collapse' : 'Expand';
  if (hint && hint.textContent !== label) hint.textContent = label;
}

/**
 * Appends the toggle hint span at the end of the header's first cell, once
 * (never moving React-owned nodes), then syncs its label to aria-expanded.
 */
function ensureToggleHint(header: HTMLTableRowElement): void {
  const cell = header.cells[0];
  if (!cell) return;
  if (!findToggleHint(cell)) {
    const hint = document.createElement('span');
    hint.className = TOGGLE_HINT_CLASS;
    hint.setAttribute('aria-hidden', 'true');
    cell.appendChild(hint);
  }
  updateToggleHint(header, header.getAttribute('aria-expanded') !== 'false');
}

/**
 * Removes `marker` from the first text node inside `cell` that contains it
 * (the last one when `fromEnd` is set), along with the whitespace next to it.
 * Safe to call repeatedly: it does nothing once the marker is gone.
 */
function stripMarker(cell: HTMLElement, marker: string, fromEnd = false): void {
  const walker = document.createTreeWalker(cell, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  if (fromEnd) nodes.reverse();
  for (const node of nodes) {
    const idx = fromEnd ? node.data.lastIndexOf(marker) : node.data.indexOf(marker);
    if (idx !== -1) {
      const before = node.data.slice(0, idx);
      const after = node.data.slice(idx + marker.length);
      node.data = fromEnd ? before.replace(/\s+$/, '') + after : before + after.replace(/^\s+/, '');
      return;
    }
  }
}

function isChildRow(row: Element): row is HTMLTableRowElement {
  return row instanceof HTMLTableRowElement && firstCellText(row).startsWith(CHILD_MARKER);
}

/**
 * The rows a group header (a branch header or a collapsible section label) controls:
 * the indented rows directly below it, up to the next non-indented row.
 * Read from the live DOM every time.
 */
function getGroupChildren(header: HTMLTableRowElement): HTMLTableRowElement[] {
  const children: HTMLTableRowElement[] = [];
  let next = header.nextElementSibling;
  while (next && isChildRow(next)) {
    children.push(next);
    next = next.nextElementSibling;
  }
  return children;
}

/** True for raw `:: Label` text (a section label), false for the bare `::` end row. */
function isSectionLabelText(text: string): boolean {
  const trimmed = text.trim();
  return trimmed.startsWith(SECTION_MARKER) && trimmed.slice(SECTION_MARKER.length).trim() !== '';
}

/**
 * A tbody row is a group header if it was enhanced as one, or still carries the raw markup
 * for one: the arrow (branch header), or a `:: Label` with indented rows below it.
 */
function isGroupHeader(row: HTMLTableRowElement): boolean {
  if (row.parentElement?.tagName !== 'TBODY') return false;
  if (row.classList.contains(BRANCH_CLASS) || row.classList.contains(SECTION_TOGGLE_CLASS)) return true;
  const text = firstCellText(row).trim();
  if (text.startsWith(BRANCH_MARKER)) return true;
  return isSectionLabelText(text) && getGroupChildren(row).length > 0;
}

function isGroupOpen(header: HTMLTableRowElement, children: HTMLTableRowElement[]): boolean {
  const expanded = header.getAttribute('aria-expanded');
  if (expanded !== null) return expanded !== 'false';
  return !children.some((child) => child.hidden || child.classList.contains(COLLAPSED_CLASS));
}

/** Writes the open state to the header and its children; skips nodes already in that state. */
function setGroupOpen(header: HTMLTableRowElement, open: boolean): void {
  const value = String(open);
  if (header.getAttribute('aria-expanded') !== value) header.setAttribute('aria-expanded', value);
  updateToggleHint(header, open);
  getGroupChildren(header).forEach((child) => {
    if (child.hidden !== !open) child.hidden = !open;
    if (child.classList.contains(COLLAPSED_CLASS) !== !open) child.classList.toggle(COLLAPSED_CLASS, !open);
  });
}

function toggleGroup(header: HTMLTableRowElement): void {
  setGroupOpen(header, !isGroupOpen(header, getGroupChildren(header)));
}

/**
 * Makes `row` an interactive group header (role, focus, aria-expanded, toggle hint).
 * On the first pass the open state comes from the [collapsed] marker; later passes keep it.
 */
function initGroupHeader(row: HTMLTableRowElement, firstPass: boolean, startCollapsed: boolean): void {
  if (row.getAttribute('role') !== 'button') row.setAttribute('role', 'button');
  if (row.tabIndex !== 0) row.tabIndex = 0;
  if (firstPass) {
    row.setAttribute('aria-expanded', String(!startCollapsed));
  } else if (!row.hasAttribute('aria-expanded')) {
    row.setAttribute('aria-expanded', 'true');
  }
  ensureToggleHint(row);
}

/** Resolves an event target to the group header row (branch or section) it belongs to, or null. */
function groupHeaderFromTarget(target: EventTarget | null, container: HTMLElement): HTMLTableRowElement | null {
  if (!(target instanceof Element)) return null;
  // Links inside the header keep working without toggling.
  if (target.closest('a')) return null;
  const row = target.closest('tr');
  if (!row || !container.contains(row)) return null;
  return isGroupHeader(row) ? row : null;
}

/**
 * Cosmetic enhancement of the markdown tables inside `root`.
 *
 * Authoring convention (plain GFM rows):
 * - Section label row: first cell starts with `::` followed by the label, other cells empty.
 *   A bare `::` renders a thin end bar that closes a conditional block. When indented rows
 *   follow the label, it becomes a collapsible header for them (caret, no arrow), and
 *   ending the label with ` [collapsed]` starts it collapsed.
 * - Branch header row: first cell starts with the arrow followed by the condition text,
 *   other cells empty. Ending the first cell with ` [collapsed]` starts the group collapsed.
 * - Child rows: first cell starts with &nbsp; before the argument name.
 *   A child row belongs to the nearest preceding branch header or section label row, which
 *   hides and shows it.
 * - Any other row ends the group.
 *
 * Only attributes, classes, colSpan and marker text are touched, plus one toggle hint span
 * appended at the end of each group header's first cell; React-owned nodes are never moved
 * (the chevron is a CSS pseudo-element on the hint). Every step is
 * idempotent, so this can re-run after any re-render; rows already enhanced carry ROW_ATTR.
 * Toggling itself does not depend on this function (see the delegated handlers).
 */
function enhanceTables(root: HTMLElement): void {
  root.querySelectorAll<HTMLTableElement>('table').forEach((table) => {
    const headerRow = table.querySelector('thead tr');
    const columnCount = headerRow ? headerRow.children.length : 1;

    // Let the first cell span the full row and hide the empty sibling cells
    // (hidden, not removed, because React owns these nodes).
    const spanFullRow = (row: HTMLTableRowElement, cell: HTMLTableCellElement) => {
      if (cell.colSpan !== columnCount) cell.colSpan = columnCount;
      Array.from(row.cells)
        .slice(1)
        .forEach((sibling) => {
          if (!sibling.hidden) sibling.hidden = true;
        });
    };

    let inGroup = false;
    table.querySelectorAll<HTMLTableRowElement>('tbody tr').forEach((row) => {
      const cell = row.cells[0];
      if (!cell) {
        inGroup = false;
        return;
      }
      const done = row.getAttribute(ROW_ATTR) as RowKind | null;
      const raw = cellText(cell);
      const text = raw.trim();

      if (done === 'branch' || (!done && text.startsWith(BRANCH_MARKER))) {
        inGroup = true;
        const startCollapsed = !done && text.endsWith(COLLAPSED_MARKER);
        if (text.startsWith(BRANCH_MARKER)) stripMarker(cell, BRANCH_MARKER);
        if (text.endsWith(COLLAPSED_MARKER)) stripMarker(cell, COLLAPSED_MARKER, true);
        row.classList.add(BRANCH_CLASS);
        initGroupHeader(row, !done, startCollapsed);
        spanFullRow(row, cell);
        if (!done) row.setAttribute(ROW_ATTR, 'branch');
        return;
      }

      if (done === 'section' || done === 'end' || (!done && text.startsWith(SECTION_MARKER))) {
        inGroup = false;
        const kind: RowKind = done ?? (text.slice(SECTION_MARKER.length).trim() ? 'section' : 'end');
        if (text.startsWith(SECTION_MARKER)) stripMarker(cell, SECTION_MARKER);
        row.classList.add(kind === 'section' ? SECTION_CLASS : SECTION_END_CLASS);
        if (kind === 'end' && row.getAttribute('aria-hidden') !== 'true') row.setAttribute('aria-hidden', 'true');
        spanFullRow(row, cell);
        if (!done) row.setAttribute(ROW_ATTR, kind);
        if (kind === 'section') {
          const startCollapsed = !done && text.endsWith(COLLAPSED_MARKER);
          if (text.endsWith(COLLAPSED_MARKER)) stripMarker(cell, COLLAPSED_MARKER, true);
          if (getGroupChildren(row).length > 0) {
            row.classList.add(SECTION_TOGGLE_CLASS);
            initGroupHeader(row, !done, startCollapsed);
          } else if (row.classList.contains(SECTION_TOGGLE_CLASS)) {
            row.classList.remove(SECTION_TOGGLE_CLASS);
            row.removeAttribute('role');
            row.removeAttribute('tabindex');
            row.removeAttribute('aria-expanded');
            findToggleHint(cell)?.remove();
          }
        }
        return;
      }

      if (done === 'child' || (!done && inGroup && raw.startsWith(CHILD_MARKER))) {
        row.classList.add(CHILD_CLASS);
        if (!done) row.setAttribute(ROW_ATTR, 'child');
        return;
      }

      if (done === 'sectionChild' || (!done && raw.startsWith(CHILD_MARKER))) {
        row.classList.add(SECTION_CHILD_CLASS);
        if (!done) row.setAttribute(ROW_ATTR, 'sectionChild');
        return;
      }

      inGroup = false;
      if (!done) row.setAttribute(ROW_ATTR, 'plain');
    });

    // Re-apply each header's state to its children, so rows React re-rendered
    // (which lose `hidden` and our classes) come back in the right state.
    table
      .querySelectorAll<HTMLTableRowElement>(`tbody tr.${BRANCH_CLASS}, tbody tr.${SECTION_TOGGLE_CLASS}`)
      .forEach((header) => {
        setGroupOpen(header, header.getAttribute('aria-expanded') !== 'false');
      });
  });
}

/**
 * PushAPIReference component for rendering API documentation with consistent styling.
 * Tables inside it support collapsible branch and section rows (see enhanceTables).
 *
 * @param children - The content to display within the API reference section
 * @param showRequiredNotice - Whether to show the required notice (default: true)
 * @param className - Additional CSS classes to apply
 */
export default function PushAPIReference({
  children,
  showRequiredNotice = true,
  className = '',
}: PushAPIReferenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Static assets are served from the site root at runtime, so resolve the caret
  // through useBaseUrl instead of a source-relative path (styled-components CSS
  // is not processed by the webpack css loader).
  const caretUrl = useBaseUrl('/assets/website/header/newCaretDown.svg');

  // Cosmetics: run once after mount, then again (debounced to one frame) whenever
  // React or a theme component changes the subtree, e.g. after hydration or HMR.
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return undefined;
    enhanceTables(root);

    let frame = 0;
    const observer = new MutationObserver(() => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        enhanceTables(root);
      });
    });
    observer.observe(root, { childList: true, subtree: true, characterData: true });

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Behavior: one delegated handler on the container for both branch (arrow) and
  // section (::) headers. The header and its children are
  // resolved from the live DOM at event time, so nothing is lost if rows re-render.
  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const header = groupHeaderFromTarget(event.target, event.currentTarget);
    if (header) toggleGroup(header);
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const header = groupHeaderFromTarget(event.target, event.currentTarget);
    if (!header) return;
    event.preventDefault();
    toggleGroup(header);
  }, []);

  return (
    <ReferenceContainer
      ref={containerRef}
      className={className}
      $caretUrl={caretUrl}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {showRequiredNotice && (
        <RequiredNotice hasNotice={showRequiredNotice}>
          <p>
            These&nbsp;<code>Arguments</code>&nbsp;are mandatory
          </p>
        </RequiredNotice>
      )}
      {children}
    </ReferenceContainer>
  );
}

const ReferenceContainer = styled.div<{ $caretUrl: string }>`
  /* Infima and custom.css style tr/td, which can beat the bare hidden attribute. */
  table tbody tr[hidden],
  table tbody tr.api-branch-collapsed,
  table tbody td[hidden] {
    display: none !important;
  }

  table tbody tr.api-branch-row > td,
  table tbody tr.api-section-collapsible > td {
    cursor: pointer;
    user-select: none;
  }

  table tbody tr.api-branch-row > td {
    background: var(--ifm-table-header-bg);
    color: var(--ifm-table-header-textcolor);
    font-weight: 600;
  }

  /* Toggle hint: one pill holding the 'Collapse' / 'Expand' label and the chevron,
     appended by the enhancer at the end of a group header's first cell so it sits right
     after the text. Mirrors the caret chip used by .alert--minimal summaries in custom.css:
     the SVG strokes with currentColor, which renders black as a background-image, so the
     pill stays light (with dark text) in dark mode too. */
  table tbody tr > td > .api-toggle-hint {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-left: 10px;
    margin-top: -3px;
    margin-bottom: -3px;
    padding: 2px 6px 2px 10px;
    border-radius: 999px;
    background-color: #f0f0f0;
    color: #17181b;
    font-size: 0.7rem;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    vertical-align: middle;
  }

  /* The chevron inside the pill: icon only, no chip of its own. */
  table tbody tr > td > .api-toggle-hint::after {
    content: '';
    display: inline-block;
    flex: none;
    width: 14px;
    height: 14px;
    background-image: url('${(props) => props.$caretUrl}');
    background-size: 12px 12px;
    background-position: center;
    background-repeat: no-repeat;
    transform-origin: center center;
    transition: transform 0.3s ease;
  }

  table tbody tr[aria-expanded='true'] > td > .api-toggle-hint::after {
    transform: rotate(90deg);
  }

  table tbody tr.api-branch-row:focus-visible,
  table tbody tr.api-section-collapsible:focus-visible {
    outline: 2px solid var(--ifm-color-primary);
    outline-offset: -2px;
  }

  /* Section label row (:: Label): small caps bold on the header background, with the
     same bar as the end row drawn above it, so a conditional block opens and closes
     with matching bars. */
  table tbody tr.api-section-row > td {
    background: var(--ifm-table-header-bg);
    border-top: 1px solid var(--ifm-table-section-bar);
    color: var(--ifm-table-header-textcolor);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    line-height: 1.4;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  /* Bare :: row: a thin bar that closes the conditional block. */
  table tbody tr.api-section-end > td {
    background: var(--ifm-table-section-bar);
    height: 2px;
    padding: 0;
    font-size: 0;
    line-height: 0;
  }

  /* Child names never wrap: table code chips are inline-block, so a squeezed first column
     would break between the leading &nbsp; run and the chip, dropping the name to the
     start of the next line and losing its nested indent. */
  table tbody tr.api-branch-child > td:first-child,
  table tbody tr.api-section-child > td:first-child {
    padding-left: 1.5rem;
    white-space: nowrap;
  }
`;

const RequiredNotice = styled.div<{ hasNotice?: boolean }>`
  border-radius: var(--ifm-global-radius);
  margin-bottom: -8px;
  padding: 12px 12px 20px 12px;
  text-align: end;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0px;
  color: var(--ifm-navbar-dropdown-subtext);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 188.571%;

  code {
    background: transparent;
    padding: 2px 9px;
    display: inline-block !important;
    border-radius: 12px;
    border: 1px solid var(--ifm-sidebar-activetext-color);
    color: var(--ifm-color-primary-text);
    font-family: 'Fira Code';
    font-weight: 600;
    line-height: 165%;
    margin: 0px 4px;
  }
`;
