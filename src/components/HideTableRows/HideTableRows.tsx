import React, { useEffect, useRef } from 'react';

interface HideTableRowsProps {
  rows?: string[];
  children: React.ReactNode;
}

/** A row's name: its first cell's text without &nbsp;, [collapsed], a leading arrow or ::, or wrapping underscores. */
function rowName(row: HTMLTableRowElement): string {
  return (row.cells[0]?.textContent ?? '')
    .replace(/\u00a0/g, ' ')
    .trim()
    .replace(/\s*\[collapsed\]$/, '')
    .replace(/^(↳|::)\s*/, '')
    .replace(/^_+|_+$/g, '')
    .trim();
}

/** Hides the table rows under it whose first cell names one of `rows`; never un-hides a row it did not hide. */
export default function HideTableRows({ rows, children }: HideTableRowsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hiddenByUs = useRef(new WeakSet<HTMLTableRowElement>());
  const key = (rows ?? []).join('\n');

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    const names = new Set(key ? key.split('\n') : []);
    const apply = () => {
      root.querySelectorAll('tr').forEach((row) => {
        if (names.has(rowName(row))) {
          if (!row.hidden) row.hidden = true;
          hiddenByUs.current.add(row);
        } else if (hiddenByUs.current.has(row)) {
          row.hidden = false;
          hiddenByUs.current.delete(row);
        }
      });
    };
    apply();
    if (names.size === 0) return undefined;

    const observer = new MutationObserver(apply);
    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    return () => observer.disconnect();
  }, [key]);

  return (
    <div ref={ref} style={{ display: 'contents' }}>
      {children}
    </div>
  );
}
