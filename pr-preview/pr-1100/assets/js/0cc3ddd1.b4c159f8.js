"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[47243],{

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ 40338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-5-29275cf4e3754ec31e17167f92c9439c.webp");

/***/ }),

/***/ 305995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2025_10_20_apps_of_the_future_building_without_the_chaos_index_md_0cc_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2025_10_20_apps_of_the_future_building_without_the_chaos_index_md_0cc_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(833121);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'apps-of-the-future-building-without-the-chaos',
	title: 'Apps of the Future - Building without the Chaos',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Apps of the Future - Building without the Chaos',
	text: 'Crypto has matured. The next generation of apps need to compete and build with finesse.',
	tags: [
		'Deployathon',
		'Donut Testnet',
		'Early Access',
		'Universal Apps',
		'Shared App Experience',
		'Shared State Blockchain',
		'Universal Smart Contracts'
	],
	twitterId: '1981300141622804664'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(413373)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Every app starts with a vision. Every interop patch starts with regret.",
  "id": "every-app-starts-with-a-vision-every-interop-patch-starts-with-regret",
  "level": 4
}, {
  "value": "Apps died not because users left → but because infra took over.",
  "id": "apps-died-not-because-users-left--but-because-infra-took-over",
  "level": 4
}, {
  "value": "We stopped solving interop <i>above</i> the chain.",
  "id": "we-stopped-solving-interop-above-the-chain",
  "level": 4
}, {
  "value": "Instead we solved it <i>inside</i> the chain.",
  "id": "instead-we-solved-it-inside-the-chain",
  "level": 4
}, {
  "value": "Because the future of apps isn’t about managing chaos — it’s about removing it.",
  "id": "because-the-future-of-apps-isnt-about-managing-chaos--its-about-removing-it",
  "level": 4
}, {
  "value": "The Hidden Cost of “Just Make It Work”",
  "id": "the-hidden-cost-of-just-make-it-work",
  "level": 2
}, {
  "value": "That’s where the hidden cost begins. The moment when “just make it work” becomes your full-time job.",
  "id": "thats-where-the-hidden-cost-begins-the-moment-when-just-make-it-work-becomes-your-full-time-job",
  "level": 4
}, {
  "value": "By the time the app does work across chains, it’s no longer fun to build… or delightful to use.",
  "id": "by-the-time-the-app-does-work-across-chains-its-no-longer-fun-to-build-or-delightful-to-use",
  "level": 4
}, {
  "value": "1️⃣ Infrastructure Eats Creativity",
  "id": "1️⃣-infrastructure-eats-creativity",
  "level": 3
}, {
  "value": "Multiple Interop Protocols",
  "id": "multiple-interop-protocols",
  "level": 4
}, {
  "value": "Endless custom state-sync logic",
  "id": "endless-custom-state-sync-logic",
  "level": 4
}, {
  "value": "Constant patching across chains",
  "id": "constant-patching-across-chains",
  "level": 4
}, {
  "value": "2️⃣ Fragmented Contracts = Fragmented Apps",
  "id": "2️⃣-fragmented-contracts--fragmented-apps",
  "level": 3
}, {
  "value": "You have 5 isolated instances that share a logo and a dream.",
  "id": "you-have-5-isolated-instances-that-share-a-logo-and-a-dream",
  "level": 4
}, {
  "value": "3️⃣ Multi-VM = exponential complexity, delays &amp; audit costs 🚧",
  "id": "3️⃣-multi-vm--exponential-complexity-delays--audit-costs-",
  "level": 3
}, {
  "value": "4️⃣ The Gas Fee Dilemma",
  "id": "4️⃣-the-gas-fee-dilemma",
  "level": 3
}, {
  "value": "5️⃣ The UX Nobody Talks About 😩",
  "id": "5️⃣-the-ux-nobody-talks-about-",
  "level": 3
}, {
  "value": "The Future for Apps - Universal Blockchain that natively supports every chain",
  "id": "the-future-for-apps---universal-blockchain-that-natively-supports-every-chain",
  "level": 2
}, {
  "value": "🧠 Let’s return to Fundamentals",
  "id": "-lets-return-to-fundamentals",
  "level": 4
}, {
  "value": "Universal Smart Contracts 🌌",
  "id": "universal-smart-contracts-",
  "level": 4
}, {
  "value": "Same Tooling + Push Unified SDK ⚙️",
  "id": "same-tooling--push-unified-sdk-️",
  "level": 4
}, {
  "value": "Universal Fee Abstraction ⚡️",
  "id": "universal-fee-abstraction-️",
  "level": 4
}, {
  "value": "Users are finally treated as Consumers 🧑‍🤝‍🧑",
  "id": "users-are-finally-treated-as-consumers-",
  "level": 4
}, {
  "value": "Interop that is invisible = Push. ✨",
  "id": "interop-that-is-invisible--push-",
  "level": 4
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Apps of the Future - Building without the Chaos",
        src: (__webpack_require__(326854)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Crypto has matured. The next generation of apps need to compete and build with finesse.\nIt’s no longer acceptable to have an app that only works if the user is a web3 expert. Yet time and again, we see the same pattern repeat:\nWe start by building apps around great features but soon… those features become secondary to survival.\nInstead of focusing on what made them popular, apps end up wrestling with infrastructure, juggling bridge protocols, and rewriting logic for every new chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The dream of “expanding” turns into the nightmare of maintenance."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
          id: "every-app-starts-with-a-vision-every-interop-patch-starts-with-regret",
          children: "Every app starts with a vision. Every interop patch starts with regret."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
          id: "apps-died-not-because-users-left--but-because-infra-took-over",
          children: "Apps died not because users left → but because infra took over."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We’ve seen this play out a thousand times. So we asked ourselves, what if interop wasn’t something apps had to build…\nbut something the chain itself handled? That’s how ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: "Push Chain"
      }), " reimagines interoperability… but something the chain itself handled?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h4, {
      id: "we-stopped-solving-interop-above-the-chain",
      children: ["We stopped solving interop ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
        children: "above"
      }), " the chain."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h4, {
      id: "instead-we-solved-it-inside-the-chain",
      children: ["Instead we solved it ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
        children: "inside"
      }), " the chain."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "because-the-future-of-apps-isnt-about-managing-chaos--its-about-removing-it",
      children: "Because the future of apps isn’t about managing chaos — it’s about removing it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "the-hidden-cost-of-just-make-it-work",
      children: "The Hidden Cost of “Just Make It Work”"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Expanding beyond one chain should feel like growth, not grief."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["But in web3 today, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: "the moment you go cross-chain, you trade innovation for exhaustion."
      }), "\nEach decision; to bridge, to redeploy, to patch adds friction that compounds across teams, audits, and user experiences."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
          id: "thats-where-the-hidden-cost-begins-the-moment-when-just-make-it-work-becomes-your-full-time-job",
          children: "That’s where the hidden cost begins. The moment when “just make it work” becomes your full-time job."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
          id: "by-the-time-the-app-does-work-across-chains-its-no-longer-fun-to-build-or-delightful-to-use",
          children: "By the time the app does work across chains, it’s no longer fun to build… or delightful to use."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This isn’t a problem of bad code. It’s a problem of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: "architecture."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Interop today forces developers to rebuild their app again and again for every chain, wallet, and fee system, turning builders into network engineers instead of creators."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Let’s look at the hacker’s current reality, and what needs to change so no one goes through these nightmares again."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "1️⃣-infrastructure-eats-creativity",
      children: "1️⃣ Infrastructure Eats Creativity"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Apps of the Future - Building without the Chaos",
        src: (__webpack_require__(961070)/* ["default"] */ .A) + "",
        width: "1999",
        height: "1094"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Every developer dreams of focusing on features. Yet, most spend 70% of their time patching infra across chains."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["With the current broken reality of web3, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: "every chain you add doubles your overhead."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Infra eats your week before you ship a feature."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "multiple-interop-protocols",
      children: "Multiple Interop Protocols"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Interop protocols of today support either X chain or Y chain forcing you to manage multiple interop solutions to create the feature that you have in mind for your user."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "endless-custom-state-sync-logic",
      children: "Endless custom state-sync logic"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Your app is forced to adapt to custom state to manage the states of these interops and the fragmented smart contracts that have been deployed."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "constant-patching-across-chains",
      children: "Constant patching across chains"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Even if you make it work, you are forced to constantly patch or “hack” UX for your users. One interop solution in this current reality is difficult to handle, leave alone multiple ones."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The end result is a bloated app that has a band-aid slapped to make it work and that band-aid requires constant attention."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Every time a dev fixes a bridge, a feature dies."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Building your app was your passion and it should be fun. In the end, you wonder how you started as an app company but are more of a devops company."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "2️⃣-fragmented-contracts--fragmented-apps",
      children: "2️⃣ Fragmented Contracts = Fragmented Apps"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Apps of the Future - Building without the Chaos",
        src: (__webpack_require__(520367)/* ["default"] */ .A) + "",
        width: "1999",
        height: "1083"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Today's smart contracts are inherently chain-specific. When you deploy on 5 chains today, you don’t have one app."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "you-have-5-isolated-instances-that-share-a-logo-and-a-dream",
      children: "You have 5 isolated instances that share a logo and a dream."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Every fix, every feature is now multiplied. This is not scaling, it’s cloning chaos and multiplying maintenance."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "When did “deploy everywhere” start meaning “maintain forever”?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "And the problem doesn’t even stop here…"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "3️⃣-multi-vm--exponential-complexity-delays--audit-costs-",
      children: "3️⃣ Multi-VM = exponential complexity, delays & audit costs 🚧"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Apps of the Future - Building without the Chaos",
        src: (__webpack_require__(363148)/* ["default"] */ .A) + "",
        width: "1999",
        height: "1094"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Supporting both EVM and non-EVM chains (like Solana or Sui) usually means rewriting everything in new languages: Rust, Go, Move, etc."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The result? You are now killing your momentum as you struggle with:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Hiring new engineers to create the same features"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Bloating your team for no additional use cases"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Introducing delays and slowing momentum as your engineers rewrite the same contracts"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Adding auditing bills that will climb faster than TVL charts"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "But, let’s say you are brave enough to do it once."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "And then? be prepared to do it all over again once you want to add a new feature."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Every new VM you add isn’t just new code. it's a new risk, new audits, new delays."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "And the worst part? None of this adds new value… just new overhead."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "While we struggle with these horrors, your users are not getting the best treatment as well cause you have introduced for them."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "4️⃣-the-gas-fee-dilemma",
      children: "4️⃣ The Gas Fee Dilemma"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "“Buy X token on Y chain to use Z app.” - The last famous word from an ex-user of web3."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Think about this, is this onboarding.. No, that’s homework."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Users need ETH for Ethereum, SOL for Solana, POL for Polygon and countless other things… just to use one cross-chain app they like."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Does it make sense 🤷‍♂️"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Is this onboarding? Or is this friction on day one?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "5️⃣-the-ux-nobody-talks-about-",
      children: "5️⃣ The UX Nobody Talks About 😩"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Even the best apps fall apart when users face:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Do multiple transactions just to use a feature or an action"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "New wallets or learn"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Different wallet standards (EVM vs Solana addresses 🤯)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Bridges or protocols that they have to understand"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Ask yourself, are they users at this point, or have we converted them to testers?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "These issues are the reason apps of web3 don’t attract users like web2."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "No one wants to learn just to try a feature."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "It should just work."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "The future belongs to apps that feel like magic — not manuals."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is not a story that you are going through. While building one of the first consumer apps of crypto, we went through these pain points and the reason we created Push Chain – The universal blockchain where developers focus on apps and users use the features."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "the-future-for-apps---universal-blockchain-that-natively-supports-every-chain",
      children: "The Future for Apps - Universal Blockchain that natively supports every chain"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Apps of the Future - Building without the Chaos",
        src: (__webpack_require__(591677)/* ["default"] */ .A) + "",
        width: "1999",
        height: "1085"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "-lets-return-to-fundamentals",
      children: "🧠 Let’s return to Fundamentals"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We reimagined interop so that devs are able to focus their energy on what matters most, which is the app and the features of the app that got them popular."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "universal-smart-contracts-",
      children: "Universal Smart Contracts 🌌"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We created universal smart contracts that ensure the developer only writes one smart contract that once deployed is instantly compatible with every chain (even different L1s)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is our best innovation yet and for developers it simply means:\n– Write once in solidity and deploy\n– Your app is instantly accessible to users + wallets on every chain\n– No redeployments\n– No reaudits\n– No duplicated logic"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["All with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: "zero on-chain code changes."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "One deployment. Global presence. 🌐"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "same-tooling--push-unified-sdk-️",
      children: "Same Tooling + Push Unified SDK ⚙️"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "You never have to re-work the app. You simply deploy your EVM app on Push Chain and it’s good to go."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["– Ethers, Viem or any of your favorite EVM tooling simply works\n– The only thing you replace is the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: "sendTransaction"
      }), " with universal transaction\n– Here’s a snippet of the code that you use to now send a transaction from any chain"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Apps of the Future - Building without the Chaos",
        src: (__webpack_require__(40338)/* ["default"] */ .A) + "",
        width: "1814",
        height: "436"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "Deploy once. Reach every chain. That’s the Push way."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "universal-fee-abstraction-️",
      children: "Universal Fee Abstraction ⚡️"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Developers don’t need to handle gas or wallet abstraction."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "For gas, the user can:\n– Pay in native token of their choice\n– Use any other token to fund their transaction\n– All of this, without leaving the chain they are on 🎸"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "users-are-finally-treated-as-consumers-",
      children: "Users are finally treated as Consumers 🧑‍🤝‍🧑"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "At Push, users are treated like consumers. They stay in full control.\n– Users keep their existing wallets. MetaMask, Phantom, Rabby etc., anything they already use\n– New to web3? Sign in with socials\n– Every transaction takes one click, no matter where or from what chain it starts\n– Zero learning curve, the source-chain wallet controls the interaction\n– Every app feels native to the user, regardless of the chain they come from"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push abstracts the chaos, so builders can rediscover creativity… and users rediscover joy."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "TL;DR 🦦"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Developers Get"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Users Get"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "✅ Single Deployment"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "✅ Any wallet"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "✅ Universal Smart Contracts"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "✅ Any token"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "✅ Universal Fee & Wallet Abstraction"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "✅ One-click transactions"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "✅ Single Unified SDK < 5 line of code to cook"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "✅App that always feels native to them no matter the chain"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "interop-that-is-invisible--push-",
      children: "Interop that is invisible = Push. ✨"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Cross-chain shouldn’t mean cross-chaos."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push Chain makes interoperability invisible. So apps, wallets, and users can finally move like one network."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We believe the future of web3 isn’t about where your app lives."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["It’s about how freely it can flow.\nWelcome to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: "Apps of the Future."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Let’s build Universal Apps 💪."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "The apps of the future won’t call themselves cross-chain."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "They’ll just call themselves apps."
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 326854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d0c078bfcd337b03238b0581a595afea.webp");

/***/ }),

/***/ 363148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-3-e422c55225c26c63457442e5d1c543bb.webp");

/***/ }),

/***/ 413373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d0c078bfcd337b03238b0581a595afea.webp");

/***/ }),

/***/ 520367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-e017cc826fa43e6dd9bda06591285dcc.webp");

/***/ }),

/***/ 591677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-4-15b4287b7717361e2401266121517343.webp");

/***/ }),

/***/ 833121:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1100/blog/apps-of-the-future-building-without-the-chaos","source":"@site/blog/2025-10-20-apps-of-the-future-building-without-the-chaos/index.md","title":"Apps of the Future - Building without the Chaos","description":"Apps of the Future - Building without the Chaos","date":"2025-10-20T00:00:00.000Z","tags":[{"inline":true,"label":"Deployathon","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/deployathon"},{"inline":true,"label":"Donut Testnet","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/donut-testnet"},{"inline":true,"label":"Early Access","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/early-access"},{"inline":true,"label":"Universal Apps","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/universal-apps"},{"inline":true,"label":"Shared App Experience","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/shared-app-experience"},{"inline":true,"label":"Shared State Blockchain","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/shared-state-blockchain"},{"inline":true,"label":"Universal Smart Contracts","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/universal-smart-contracts"}],"readingTime":5.03,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1100/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1100/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"apps-of-the-future-building-without-the-chaos","title":"Apps of the Future - Building without the Chaos","authors":["push"],"image":"./cover-image.webp","description":"Apps of the Future - Building without the Chaos","text":"Crypto has matured. The next generation of apps need to compete and build with finesse.","tags":["Deployathon","Donut Testnet","Early Access","Universal Apps","Shared App Experience","Shared State Blockchain","Universal Smart Contracts"],"twitterId":"1981300141622804664"},"unlisted":false,"nextItem":{"title":"Announcing Project G.U.D — Go Universal & Deploy on Push Chain, Win $5,000","permalink":"/push-chain-website/pr-preview/pr-1100/blog/announcing-project-gud-go-universal-and-deploy"}}');

/***/ }),

/***/ 961070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-1eae3ca64362065bbc56479a2be82110.webp");

/***/ })

}]);