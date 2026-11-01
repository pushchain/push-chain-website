"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[26617],{

/***/ 147421
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_03_build_06_agentic_marketplace_06_marketplace_evaluator_mdx_275_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-06-agentic-marketplace-06-marketplace-evaluator-mdx-275.json
const site_docs_chain_03_build_06_agentic_marketplace_06_marketplace_evaluator_mdx_275_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/agentic-marketplace/docs-chain-build-marketplace-evaluator","title":"Advanced PRE/POST Evaluators","description":"Advanced PRE/POST Evaluators | Build | Push Chain Docs","source":"@site/docs/chain/03-build/06-agentic-marketplace/06-marketplace-evaluator.mdx","sourceDirName":"chain/03-build/06-agentic-marketplace","slug":"/chain/build/marketplace-evaluator","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/marketplace-evaluator","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/06-agentic-marketplace/06-marketplace-evaluator.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"docs-chain-build-marketplace-evaluator","title":"Advanced PRE/POST Evaluators","hide_title":false,"slug":"/chain/build/marketplace-evaluator","displayed_sidebar":"pushChainSidebar","sidebar_position":6,"image":"/assets/docs/previews/docs_chain_build_marketplace_evaluator--advanced_pre/post_evaluators.png"},"sidebar":"pushChainSidebar","previous":{"title":"Paid Criteria Previews","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/marketplace-previews"},"next":{"title":"Marketplace Troubleshooting","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/marketplace-troubleshooting"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/chain/03-build/06-agentic-marketplace/06-marketplace-evaluator.mdx


const frontMatter = {
	id: 'docs-chain-build-marketplace-evaluator',
	title: 'Advanced PRE/POST Evaluators',
	hide_title: false,
	slug: '/chain/build/marketplace-evaluator',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 6,
	image: '/assets/docs/previews/docs_chain_build_marketplace_evaluator--advanced_pre/post_evaluators.png'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Default evaluation and custom deployments",
  "id": "default-evaluation-and-custom-deployments",
  "level": 2
}, {
  "value": "Configure a separate compatible stack",
  "id": "configure-a-separate-compatible-stack",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        children: "Advanced PRE/POST Evaluators | Build | Push Chain Docs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "SDK checkpoint",
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "These examples target the Marketplace 2.1 SDK APIs in the 6.0.27-alpha.9 release. Confirm your installed package version before using them."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "default-evaluation-and-custom-deployments",
      children: "Default evaluation and custom deployments"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Marketplace 2.1 uses the compatible PRE/POST evaluator by default. Evaluation checks the authored criteria; a passing criterion does not by itself establish that an investment strategy succeeded."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "client.job.withEvaluator({ profile: 'pre-post-v1', evaluator, hook, kernel?, startBlock? })"
      }), " creates a scoped job namespace. It verifies code and matching wiring; it does not mutate the original client. A different kernel disables default marketplace mappings. Custom deployments must use the same reviewed PRE/POST format and compatible fund payload. Mutable replacement proposals remain unsupported by the SDK write flow."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Job lists return snapshot state and evaluator facts without scanning submission history for each row. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "job.status"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "job.watch"
      }), " for deliverables. Unsupported criteria are reported as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "evaluation.available = false"
      }), ", reason ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UNSUPPORTED_JOB_SPEC"
      }), ", with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jobSpecDecodeError"
      }), "; writes still refuse unsupported formats."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Donut eUSD is the demo E2EPaymentToken with open test minting. It is not a routed USDC asset or a requirement to swap PC. Fund only the amounts needed for test escrow; production token behavior must be checked independently."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configure-a-separate-compatible-stack",
      children: "Configure a separate compatible stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        children: "import { PushChain, type JobEvaluatorConfig, type PrePostJobSpec } from '@pushchain/core';\nimport { keccak256 } from 'viem';\n\nasync function fundCustom(client: PushChain, deployment: JobEvaluatorConfig,\n  jobId: bigint, rulesId: `0x${string}`, spec: PrePostJobSpec,\n  expectedBudget: bigint, maxReadFee: bigint) {\n  const jobs = client.job.withEvaluator(deployment);\n  const expectedSpecHash = keccak256(PushChain.utils.job.encodeJobSpec(spec));\n  return jobs.fund(jobId, {\n    rulesId, expectedBudget, evaluation: { expectedSpecHash, maxReadFee },\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "profile: 'pre-post-v1'"
      }), ", verified evaluator/hook addresses, and optionally ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kernel"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "startBlock"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "evaluatorCodeHash"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hookCodeHash"
      }), ". Check wiring and code before signing. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "utils.job.prePost"
      }), " and canonical ", (0,jsx_runtime.jsx)(_components.code, {
        children: "utils.job"
      }), " use the same format. Old timing-first encodings are incompatible; do not convert signed bytes implicitly."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Funding requires the reviewed criteria hash and budget. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "maxReadFee"
      }), " bounds the observed quote and additional PC sent, not future spending from existing prepaid balances. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prefundAmount"
      }), " may add explicit headroom within the cap. Gas and later retries are separate."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "submit({ deliverable, executionBlocks })"
      }), " can guard against untracked or stale POST observations. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EXECUTION_BLOCK_NOT_TRACKED"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TRACKED_HEIGHT_STALE"
      }), " fail before signing. This guard does not add multi-rule funding support. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "verify"
      }), " selects snapshot recovery, evaluation retry or settlement; explicit actions are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "retrySnapshot"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "retryEvaluation"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "settle"
      }), ". Additional PC requires explicit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "maxReadFee"
      }), "."]
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