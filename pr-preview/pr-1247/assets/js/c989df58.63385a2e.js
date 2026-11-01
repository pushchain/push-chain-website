"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[93423],{

/***/ 549241
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_03_build_06_agentic_marketplace_05_marketplace_previews_mdx_c98_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-06-agentic-marketplace-05-marketplace-previews-mdx-c98.json
const site_docs_chain_03_build_06_agentic_marketplace_05_marketplace_previews_mdx_c98_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/agentic-marketplace/docs-chain-build-marketplace-previews","title":"Paid Criteria Previews","description":"Paid Criteria Previews | Build | Push Chain Docs","source":"@site/docs/chain/03-build/06-agentic-marketplace/05-marketplace-previews.mdx","sourceDirName":"chain/03-build/06-agentic-marketplace","slug":"/chain/build/marketplace-previews","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/marketplace-previews","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/06-agentic-marketplace/05-marketplace-previews.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"docs-chain-build-marketplace-previews","title":"Paid Criteria Previews","hide_title":false,"slug":"/chain/build/marketplace-previews","displayed_sidebar":"pushChainSidebar","sidebar_position":5,"image":"/assets/docs/previews/docs_chain_build_marketplace_previews--paid_criteria_previews.png"},"sidebar":"pushChainSidebar","previous":{"title":"Fund, Track and Cancel Jobs","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/marketplace-jobs"},"next":{"title":"Advanced PRE/POST Evaluators","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/marketplace-evaluator"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/chain/03-build/06-agentic-marketplace/05-marketplace-previews.mdx


const frontMatter = {
	id: 'docs-chain-build-marketplace-previews',
	title: 'Paid Criteria Previews',
	hide_title: false,
	slug: '/chain/build/marketplace-previews',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 5,
	image: '/assets/docs/previews/docs_chain_build_marketplace_previews--paid_criteria_previews.png'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Paid observations",
  "id": "paid-observations",
  "level": 2
}, {
  "value": "Recover without paying again",
  "id": "recover-without-paying-again",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: "Paid Criteria Previews | Build | Push Chain Docs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "SDK checkpoint",
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "These examples target the Marketplace 2.1 SDK APIs in the 6.0.27-alpha.9 release. Confirm your installed package version before using them."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "paid-observations",
      children: "Paid observations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "PushChain.utils.job.previewJobSpec"
      }), " uses the canonical timing-free PRE/POST format. It prepares paid Universal Reads, enforces a total read-fee cap and returns values, checks, request IDs and fee evidence. Transaction gas is separate. A preview is an observation, not a job evaluator verdict."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        children: "import { PushChain, type JobSpecTemplate } from '@pushchain/core';\nimport type { Address } from 'viem';\n\nasync function previewCriteria(client: PushChain, template: JobSpecTemplate,\n  wallet: Address, principal: bigint, blockNumbers: Record<number, bigint>) {\n  return PushChain.utils.job.previewJobSpec(template, {\n    client, wallet, principal, blockNumbers,\n    maxTotalFee: 10n ** 16n,\n    advanced: { timeout: 120_000 },\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Provide the reviewed historical block number for each PRE read, keyed by read index. POST reads default to a current observation. A present-day read cannot silently replace the baseline. Template wallet markers resolve to destination CEAs, not the AGW's Push address. Explicit accounts must identify the correct chain."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "pass"
      }), " and checks can be true, false or unknown. Missing/unreadable results cannot establish success. Percentage evaluation uses exact cross-multiplication; nonpositive denominators fail. Criteria use summed left/right read indexes and do not contain execution timing fields."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recover-without-paying-again",
      children: "Recover without paying again"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "PREVIEW_INCOMPLETE"
      }), " retains known request IDs and transaction hashes. Inspect uncertain submissions before retrying. Pass ", (0,jsx_runtime.jsx)(_components.code, {
        children: "resume: requestIds"
      }), " in read order to reuse requests; the SDK authenticates their destinations, calls and measurement requirements. Recovery accepts ", (0,jsx_runtime.jsx)(_components.code, {
        children: "maxTotalFee: 0n"
      }), ", reports ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fees.newlyPaid"
      }), " as zero, and retains original deposits in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fees.paid"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/track-universal-read/",
        children: "Track Universal Read"
      }), " for saved requests. A local timeout does not cancel the request."]
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