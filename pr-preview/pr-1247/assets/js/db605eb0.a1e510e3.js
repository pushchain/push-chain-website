"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[70279],{

/***/ 909652
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_03_build_06_agentic_marketplace_03_marketplace_opening_mdx_db6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-06-agentic-marketplace-03-marketplace-opening-mdx-db6.json
const site_docs_chain_03_build_06_agentic_marketplace_03_marketplace_opening_mdx_db6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/agentic-marketplace/docs-chain-build-marketplace-opening","title":"Discover, Review and Open Jobs","description":"Discover, Review and Open Jobs | Build | Push Chain Docs","source":"@site/docs/chain/03-build/06-agentic-marketplace/03-marketplace-opening.mdx","sourceDirName":"chain/03-build/06-agentic-marketplace","slug":"/chain/build/marketplace-opening","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/marketplace-opening","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/06-agentic-marketplace/03-marketplace-opening.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"docs-chain-build-marketplace-opening","title":"Discover, Review and Open Jobs","hide_title":false,"slug":"/chain/build/marketplace-opening","displayed_sidebar":"pushChainSidebar","sidebar_position":3,"image":"/assets/docs/previews/docs_chain_build_marketplace_opening--discover,_review_and_open_jobs.png"},"sidebar":"pushChainSidebar","previous":{"title":"AgentCards and JobSpec Templates","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/marketplace-cards"},"next":{"title":"Fund, Track and Cancel Jobs","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/marketplace-jobs"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./src/components/PushAPIReference/PushAPIReference.tsx
var PushAPIReference = __webpack_require__(303547);
;// ./docs/chain/03-build/06-agentic-marketplace/03-marketplace-opening.mdx


const frontMatter = {
	id: 'docs-chain-build-marketplace-opening',
	title: 'Discover, Review and Open Jobs',
	hide_title: false,
	slug: '/chain/build/marketplace-opening',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 3,
	image: '/assets/docs/previews/docs_chain_build_marketplace_opening--discover,_review_and_open_jobs.png'
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Discover and inspect",
  "id": "discover-and-inspect",
  "level": 2
}, {
  "value": "Preview and open",
  "id": "preview-and-open",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: "Discover, Review and Open Jobs | Build | Push Chain Docs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "SDK checkpoint",
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "These examples target the Marketplace 2.1 SDK APIs in the 6.0.27-alpha.9 release. Confirm your installed package version before using them."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "discover-and-inspect",
      children: "Discover and inspect"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "client.market.cards({ chain?, provider?, active? })"
      }), " for summaries and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "client.market.card(cardId)"
      }), " for full rules and criteria. Review every chain, token address, permission, fee and condition. A verified flag applies to a particular card version."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preview-and-open",
      children: "Preview and open"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        children: "import { PushChain, type JobPlan } from '@pushchain/core';\nasync function previewJob(owner: PushChain, cardId: bigint) {\n  const plan = await owner.market.preview(cardId, {\n    principal: 100_000_000n,\n    expiredAt: Math.floor(Date.now() / 1000) + 7200,\n  });\n  return plan;\n}\n// Invoke only after the saved plan has been reviewed.\nasync function openReviewed(owner: PushChain, plan: JobPlan) {\n  return owner.market.openJob(plan);\n}\nasync function recoverOpening(owner: PushChain, plan: JobPlan, hash: string) {\n  const tx = await owner.universal.trackTransaction(hash);\n  return owner.market.openJob(plan, { resume: tx });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Opening deploys or reuses an AGW and executes an owner-signed batch: each permission grant followed by kernel job creation. It transfers no principal or escrow. The SDK independently compares the batch, criteria, CEA derivations and signature domain, then simulates the signed request. External EVM owners need a deployed UEA and typed-data signing support. Contract/delegated owners need compatible signature verification."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Results contain ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jobId"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "wallet"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rulesIds"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tx"
      }), ". Preserve the original plan and transaction hash if confirmation is uncertain. Recovery validates mined input, event content, wallet ownership and kernel/marketplace mappings without signing again."]
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      showRequiredNotice: false,
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Preview input"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Meaning"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "principal"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "required bigint"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Principal asset raw units. 100,000,000 means 100 only for a six-decimal token."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "expiredAt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "required number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Unix seconds; validated against duration bounds."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "params"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "optional bigint array"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Template parameter values."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "walletIndex"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "deadline"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "label"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "optional"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Wallet selection, signature deadline and label."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The plan includes ordered ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sessions"
      }), ", resolved criteria, deposit estimates, intent and readable ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mayDo"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mayMove"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "judgedBy"
      }), " and expiry entries. Display all entries and criteria logic before signing. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "executeBy"
      }), " is not an input. Multi-rule previews do not authorize multi-rule execution: opening rejects those plans under the current hook."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ },

/***/ 303547
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PushAPIReference)
/* harmony export */ });
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(486025);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(296540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(309751);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(474848);
const BRANCH_MARKER='↳';// the arrow that opens a branch header row
const CHILD_MARKER=' ';// rows indented with &nbsp; (U+00A0) belong to the branch above
const SECTION_MARKER='::';// full-width section label row, or a thin end row when empty
const COLLAPSED_MARKER='[collapsed]';// trailing marker on a branch or section header: start collapsed
const ROW_ATTR='data-api-row';// set on every row once enhanced: branch | child | section | end | sectionChild | plain
const BRANCH_CLASS='api-branch-row';const CHILD_CLASS='api-branch-child';const COLLAPSED_CLASS='api-branch-collapsed';const SECTION_CLASS='api-section-row';const SECTION_END_CLASS='api-section-end';const SECTION_CHILD_CLASS='api-section-child';// indented row outside a branch: padding only
const SECTION_TOGGLE_CLASS='api-section-collapsible';// :: label row with indented rows below it: toggles them
const TOGGLE_HINT_CLASS='api-toggle-hint';// span appended to a group header's first cell: label + chevron
/** The toggle hint span this component appended to `cell`, if any. */function findToggleHint(cell){return cell.querySelector(":scope > span."+TOGGLE_HINT_CLASS);}/** The authored text of a cell, without the appended toggle hint label. */function cellText(cell){var _cell$textContent,_hint$textContent;if(!cell)return'';const text=(_cell$textContent=cell.textContent)!==null&&_cell$textContent!==void 0?_cell$textContent:'';const hint=findToggleHint(cell);const hintText=(_hint$textContent=hint===null||hint===void 0?void 0:hint.textContent)!==null&&_hint$textContent!==void 0?_hint$textContent:'';return hint&&hintText&&text.endsWith(hintText)?text.slice(0,text.length-hintText.length):text;}function firstCellText(row){return cellText(row.cells[0]);}/** Writes 'Collapse' or 'Expand' to the header's hint; skips the write when it already matches. */function updateToggleHint(header,open){const cell=header.cells[0];const hint=cell?findToggleHint(cell):null;const label=open?'Collapse':'Expand';if(hint&&hint.textContent!==label)hint.textContent=label;}/**
 * Appends the toggle hint span at the end of the header's first cell, once
 * (never moving React-owned nodes), then syncs its label to aria-expanded.
 */function ensureToggleHint(header){const cell=header.cells[0];if(!cell)return;if(!findToggleHint(cell)){const hint=document.createElement('span');hint.className=TOGGLE_HINT_CLASS;hint.setAttribute('aria-hidden','true');cell.appendChild(hint);}updateToggleHint(header,header.getAttribute('aria-expanded')!=='false');}/**
 * Removes `marker` from the first text node inside `cell` that contains it
 * (the last one when `fromEnd` is set), along with the whitespace next to it.
 * Safe to call repeatedly: it does nothing once the marker is gone.
 */function stripMarker(cell,marker,fromEnd){if(fromEnd===void 0){fromEnd=false;}const walker=document.createTreeWalker(cell,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);if(fromEnd)nodes.reverse();for(const node of nodes){const idx=fromEnd?node.data.lastIndexOf(marker):node.data.indexOf(marker);if(idx!==-1){const before=node.data.slice(0,idx);const after=node.data.slice(idx+marker.length);node.data=fromEnd?before.replace(/\s+$/,'')+after:before+after.replace(/^\s+/,'');return;}}}function isChildRow(row){return row instanceof HTMLTableRowElement&&firstCellText(row).startsWith(CHILD_MARKER);}/**
 * The rows a group header (a branch header or a collapsible section label) controls:
 * the indented rows directly below it, up to the next non-indented row.
 * Read from the live DOM every time.
 */function getGroupChildren(header){const children=[];let next=header.nextElementSibling;while(next&&isChildRow(next)){children.push(next);next=next.nextElementSibling;}return children;}/** True for raw `:: Label` text (a section label), false for the bare `::` end row. */function isSectionLabelText(text){const trimmed=text.trim();return trimmed.startsWith(SECTION_MARKER)&&trimmed.slice(SECTION_MARKER.length).trim()!=='';}/**
 * A tbody row is a group header if it was enhanced as one, or still carries the raw markup
 * for one: the arrow (branch header), or a `:: Label` with indented rows below it.
 */function isGroupHeader(row){var _row$parentElement;if(((_row$parentElement=row.parentElement)===null||_row$parentElement===void 0?void 0:_row$parentElement.tagName)!=='TBODY')return false;if(row.classList.contains(BRANCH_CLASS)||row.classList.contains(SECTION_TOGGLE_CLASS))return true;const text=firstCellText(row).trim();if(text.startsWith(BRANCH_MARKER))return true;return isSectionLabelText(text)&&getGroupChildren(row).length>0;}function isGroupOpen(header,children){const expanded=header.getAttribute('aria-expanded');if(expanded!==null)return expanded!=='false';return!children.some(child=>child.hidden||child.classList.contains(COLLAPSED_CLASS));}/** Writes the open state to the header and its children; skips nodes already in that state. */function setGroupOpen(header,open){const value=String(open);if(header.getAttribute('aria-expanded')!==value)header.setAttribute('aria-expanded',value);updateToggleHint(header,open);getGroupChildren(header).forEach(child=>{if(child.hidden!==!open)child.hidden=!open;if(child.classList.contains(COLLAPSED_CLASS)!==!open)child.classList.toggle(COLLAPSED_CLASS,!open);});}function toggleGroup(header){setGroupOpen(header,!isGroupOpen(header,getGroupChildren(header)));}/**
 * Makes `row` an interactive group header (role, focus, aria-expanded, toggle hint).
 * On the first pass the open state comes from the [collapsed] marker; later passes keep it.
 */function initGroupHeader(row,firstPass,startCollapsed){if(row.getAttribute('role')!=='button')row.setAttribute('role','button');if(row.tabIndex!==0)row.tabIndex=0;if(firstPass){row.setAttribute('aria-expanded',String(!startCollapsed));}else if(!row.hasAttribute('aria-expanded')){row.setAttribute('aria-expanded','true');}ensureToggleHint(row);}/** Resolves an event target to the group header row (branch or section) it belongs to, or null. */function groupHeaderFromTarget(target,container){if(!(target instanceof Element))return null;// Links inside the header keep working without toggling.
if(target.closest('a'))return null;const row=target.closest('tr');if(!row||!container.contains(row))return null;return isGroupHeader(row)?row:null;}/**
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
 */function enhanceTables(root){root.querySelectorAll('table').forEach(table=>{const headerRow=table.querySelector('thead tr');const columnCount=headerRow?headerRow.children.length:1;// Let the first cell span the full row and hide the empty sibling cells
// (hidden, not removed, because React owns these nodes).
const spanFullRow=(row,cell)=>{if(cell.colSpan!==columnCount)cell.colSpan=columnCount;Array.from(row.cells).slice(1).forEach(sibling=>{if(!sibling.hidden)sibling.hidden=true;});};let inGroup=false;table.querySelectorAll('tbody tr').forEach(row=>{const cell=row.cells[0];if(!cell){inGroup=false;return;}const done=row.getAttribute(ROW_ATTR);const raw=cellText(cell);const text=raw.trim();if(done==='branch'||!done&&text.startsWith(BRANCH_MARKER)){inGroup=true;const startCollapsed=!done&&text.endsWith(COLLAPSED_MARKER);if(text.startsWith(BRANCH_MARKER))stripMarker(cell,BRANCH_MARKER);if(text.endsWith(COLLAPSED_MARKER))stripMarker(cell,COLLAPSED_MARKER,true);row.classList.add(BRANCH_CLASS);initGroupHeader(row,!done,startCollapsed);spanFullRow(row,cell);if(!done)row.setAttribute(ROW_ATTR,'branch');return;}if(done==='section'||done==='end'||!done&&text.startsWith(SECTION_MARKER)){inGroup=false;const kind=done!==null&&done!==void 0?done:text.slice(SECTION_MARKER.length).trim()?'section':'end';if(text.startsWith(SECTION_MARKER))stripMarker(cell,SECTION_MARKER);row.classList.add(kind==='section'?SECTION_CLASS:SECTION_END_CLASS);if(kind==='end'&&row.getAttribute('aria-hidden')!=='true')row.setAttribute('aria-hidden','true');spanFullRow(row,cell);if(!done)row.setAttribute(ROW_ATTR,kind);if(kind==='section'){const startCollapsed=!done&&text.endsWith(COLLAPSED_MARKER);if(text.endsWith(COLLAPSED_MARKER))stripMarker(cell,COLLAPSED_MARKER,true);if(getGroupChildren(row).length>0){row.classList.add(SECTION_TOGGLE_CLASS);initGroupHeader(row,!done,startCollapsed);}else if(row.classList.contains(SECTION_TOGGLE_CLASS)){var _findToggleHint;row.classList.remove(SECTION_TOGGLE_CLASS);row.removeAttribute('role');row.removeAttribute('tabindex');row.removeAttribute('aria-expanded');(_findToggleHint=findToggleHint(cell))===null||_findToggleHint===void 0||_findToggleHint.remove();}}return;}if(done==='child'||!done&&inGroup&&raw.startsWith(CHILD_MARKER)){row.classList.add(CHILD_CLASS);if(!done)row.setAttribute(ROW_ATTR,'child');return;}if(done==='sectionChild'||!done&&raw.startsWith(CHILD_MARKER)){row.classList.add(SECTION_CHILD_CLASS);if(!done)row.setAttribute(ROW_ATTR,'sectionChild');return;}inGroup=false;if(!done)row.setAttribute(ROW_ATTR,'plain');});// Re-apply each header's state to its children, so rows React re-rendered
// (which lose `hidden` and our classes) come back in the right state.
table.querySelectorAll("tbody tr."+BRANCH_CLASS+", tbody tr."+SECTION_TOGGLE_CLASS).forEach(header=>{setGroupOpen(header,header.getAttribute('aria-expanded')!=='false');});});}/**
 * PushAPIReference component for rendering API documentation with consistent styling.
 * Tables inside it support collapsible branch and section rows (see enhanceTables).
 *
 * @param children - The content to display within the API reference section
 * @param showRequiredNotice - Whether to show the required notice (default: true)
 * @param className - Additional CSS classes to apply
 */function PushAPIReference(_ref){let children=_ref.children,_ref$showRequiredNoti=_ref.showRequiredNotice,showRequiredNotice=_ref$showRequiredNoti===void 0?true:_ref$showRequiredNoti,_ref$className=_ref.className,className=_ref$className===void 0?'':_ref$className;const containerRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);// Static assets are served from the site root at runtime, so resolve the caret
// through useBaseUrl instead of a source-relative path (styled-components CSS
// is not processed by the webpack css loader).
const caretUrl=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)('/assets/website/header/newCaretDown.svg');// Cosmetics: run once after mount, then again (debounced to one frame) whenever
// React or a theme component changes the subtree, e.g. after hydration or HMR.
(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{const root=containerRef.current;if(!root)return undefined;enhanceTables(root);let frame=0;const observer=new MutationObserver(()=>{if(frame)return;frame=window.requestAnimationFrame(()=>{frame=0;enhanceTables(root);});});observer.observe(root,{childList:true,subtree:true,characterData:true});return()=>{observer.disconnect();if(frame)window.cancelAnimationFrame(frame);};},[]);// Behavior: one delegated handler on the container for both branch (arrow) and
// section (::) headers. The header and its children are
// resolved from the live DOM at event time, so nothing is lost if rows re-render.
const handleClick=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(event=>{const header=groupHeaderFromTarget(event.target,event.currentTarget);if(header)toggleGroup(header);},[]);const handleKeyDown=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(event=>{if(event.key!=='Enter'&&event.key!==' ')return;const header=groupHeaderFromTarget(event.target,event.currentTarget);if(!header)return;event.preventDefault();toggleGroup(header);},[]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ReferenceContainer,{ref:containerRef,className:className,$caretUrl:caretUrl,onClick:handleClick,onKeyDown:handleKeyDown,children:[showRequiredNotice&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(RequiredNotice,{hasNotice:showRequiredNotice,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p",{children:["These\xA0",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code",{children:"Arguments"}),"\xA0are mandatory"]})}),children]});}const ReferenceContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"PushAPIReference__ReferenceContainer",componentId:"sc-1g1yayv-0"})(["table tbody tr[hidden],table tbody tr.api-branch-collapsed,table tbody td[hidden]{display:none !important;}table tbody tr.api-branch-row > td,table tbody tr.api-section-collapsible > td{cursor:pointer;user-select:none;}table tbody tr.api-branch-row > td{background:var(--ifm-table-header-bg);color:var(--ifm-table-header-textcolor);font-weight:600;}table tbody tr > td > .api-toggle-hint{display:inline-flex;align-items:center;gap:4px;margin-left:10px;margin-top:-3px;margin-bottom:-3px;padding:2px 6px 2px 10px;border-radius:999px;background-color:#f0f0f0;color:#17181b;font-size:0.7rem;font-weight:600;line-height:1;letter-spacing:0.04em;text-transform:uppercase;vertical-align:middle;}table tbody tr > td > .api-toggle-hint::after{content:'';display:inline-block;flex:none;width:14px;height:14px;background-image:url('","');background-size:12px 12px;background-position:center;background-repeat:no-repeat;transform-origin:center center;transition:transform 0.3s ease;}table tbody tr[aria-expanded='true'] > td > .api-toggle-hint::after{transform:rotate(90deg);}table tbody tr.api-branch-row:focus-visible,table tbody tr.api-section-collapsible:focus-visible{outline:2px solid var(--ifm-color-primary);outline-offset:-2px;}table tbody tr.api-section-row > td{background:var(--ifm-table-header-bg);border-top:1px solid var(--ifm-table-section-bar);color:var(--ifm-table-header-textcolor);font-size:0.75rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;line-height:1.4;padding-top:6px;padding-bottom:6px;}table tbody tr.api-section-end > td{background:var(--ifm-table-section-bar);height:2px;padding:0;font-size:0;line-height:0;}table tbody tr.api-branch-child > td:first-child,table tbody tr.api-section-child > td:first-child{padding-left:1.5rem;white-space:nowrap;}"],props=>props.$caretUrl);const RequiredNotice=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"PushAPIReference__RequiredNotice",componentId:"sc-1g1yayv-1"})(["border-radius:var(--ifm-global-radius);margin-bottom:-8px;padding:12px 12px 20px 12px;text-align:end;border-bottom-left-radius:0;border-bottom-right-radius:0px;color:var(--ifm-navbar-dropdown-subtext);font-size:0.875rem;font-weight:400;line-height:188.571%;code{background:transparent;padding:2px 9px;display:inline-block !important;border-radius:12px;border:1px solid var(--ifm-sidebar-activetext-color);color:var(--ifm-color-primary-text);font-family:'Fira Code';font-weight:600;line-height:165%;margin:0px 4px;}"]);

/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);