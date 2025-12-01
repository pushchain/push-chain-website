"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[7457],{

/***/ 5619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-5-cf8b168598104f83f447fa57ac9c158d.webp");

/***/ }),

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

/***/ 92078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-e4176ed66e54acbfc4cba7b3f8fba8c8.webp");

/***/ }),

/***/ 263732:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1149/blog/epns-at-nft-nyc-2022-all-set-for-the-nft-verse","source":"@site/blog/2022-06-21-epns-at-nft-nyc-2022/index.md","title":"EPNS at NFT NYC 2022: All set for the NFTVerse","description":"Cover Image of EPNS at NFT NYC 2022: All set for the NFTVerse","date":"2022-06-21T00:00:00.000Z","tags":[{"inline":true,"label":"Nft","permalink":"/push-chain-website/pr-preview/pr-1149/blog/tags/nft"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1149/blog/tags/ethereum"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1149/blog/tags/blockchain"},{"inline":true,"label":"Cryptocurrency","permalink":"/push-chain-website/pr-preview/pr-1149/blog/tags/cryptocurrency"},{"inline":true,"label":"Crypto","permalink":"/push-chain-website/pr-preview/pr-1149/blog/tags/crypto"}],"readingTime":4.01,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1149/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1149/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-at-nft-nyc-2022-all-set-for-the-nft-verse","title":"EPNS at NFT NYC 2022: All set for the NFTVerse","authors":["push"],"image":"./cover-image.webp","text":"We’re all set and headed to the biggest NFT Party in the world! Touted as the Superbowl of the NFTs and the new CES for NFTs by our frens at Coinbase and Ledger respectively, hsow can we miss this event!","tags":["Nft","Ethereum","Blockchain","Cryptocurrency","Crypto"]},"unlisted":false,"prevItem":{"title":"ETHNewYork: BUIDL the future of Web3 comm with EPNS 🗽🚀🔔","permalink":"/push-chain-website/pr-preview/pr-1149/blog/eth-new-york-buidl-the-future-of-web3-comm-with-epns"},"nextItem":{"title":"EPNS + Graph Hackathon 2022 Winners Announced!","permalink":"/push-chain-website/pr-preview/pr-1149/blog/epns-graph-hackathon-2022-winners-announced"}}');

/***/ }),

/***/ 610873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-3-df77f025292bf1a98c35cd6d82db770f.jpeg");

/***/ }),

/***/ 643388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_06_21_epns_at_nft_nyc_2022_index_md_45a_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_06_21_epns_at_nft_nyc_2022_index_md_45a_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(263732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-at-nft-nyc-2022-all-set-for-the-nft-verse',
	title: 'EPNS at NFT NYC 2022: All set for the NFTVerse',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'We’re all set and headed to the biggest NFT Party in the world! Touted as the Superbowl of the NFTs and the new CES for NFTs by our frens at Coinbase and Ledger respectively, hsow can we miss this event!',
	tags: [
		'Nft',
		'Ethereum',
		'Blockchain',
		'Cryptocurrency',
		'Crypto'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(935942)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "Lastly, What’s #MYNFTStory",
  "id": "lastly-whats-mynftstory",
  "level": 4
}, {
  "value": "You might be an NFTHODLer",
  "id": "you-might-be-an-nfthodler",
  "level": 4
}, {
  "value": "An NFT Artist!",
  "id": "an-nft-artist",
  "level": 4
}, {
  "value": "Founder of an NFTProject",
  "id": "founder-of-an-nftproject",
  "level": 4
}, {
  "value": "Or just part of NFT Projects and eager to get in",
  "id": "or-just-part-of-nft-projects-and-eager-to-get-in",
  "level": 4
}, {
  "value": "Participate in this campaign of ours!",
  "id": "participate-in-this-campaign-of-ours",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h4: "h4",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover Image of EPNS at NFT NYC 2022: All set for the NFTVerse",
        src: (__webpack_require__(744059)/* ["default"] */ .A) + "",
        width: "1400",
        height: "700"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We’re all set and headed to the biggest NFT Party in the world! Touted as the Superbowl of the NFTs and the new CES for NFTs by our frens at Coinbase and Ledger respectively, hsow can we miss this event!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["So excited to be part of this ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: "4th Annual NFT Industry Event"
      }), " in person and the EPNS Team is going to be doing some really exciting things while we’re at NFT NYC!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Here’s a little bit about what we’re up to at ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
      children: "Catch up the EPNS Team over a coffee"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Push Team 1 Image",
        src: (__webpack_require__(651375)/* ["default"] */ .A) + "",
        width: "1400",
        height: "1050"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__/* .ImageText */ .Lv, {
        children: "From L-R — Fabio, Richa & Jaf (EPNS Team at NFT NYC)"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "As excited as we are about a ton of things we’re doing at NFT NYC, we’re truly excited to meet new frens, and the community at this amazing event!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["You can drop by and say hello at the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: "Barista Coffee Cart on June 22 - Marriott 7th floor!"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "If you’re a channel, marketplace, developer or an NFT artist, there’s a ton of opportunities for us to sync up on! So we’d really love to meet up irl!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Feel free to reach out to our team members ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "http://twitter.com/riijo/",
        children: "Richa"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://twitter.com/jafetsc",
        children: "Jaf"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://twitter.com/learn4life6",
        children: "Fabio"
      }), " on Twitter!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Oh and of course you’d also get to grab some of our cool EPNS Merch while you’re there!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Push Swags-1 Image",
        src: (__webpack_require__(92078)/* ["default"] */ .A) + "",
        width: "1400",
        height: "1050"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__/* .ImageText */ .Lv, {
        children: "Come say hello when you’re at NFT NYC"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Push swags-2 Image",
        src: (__webpack_require__(610873)/* ["default"] */ .A) + "",
        width: "1170",
        height: "649"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__/* .ImageText */ .Lv, {
        children: "A closer look at our EPNS Swag Tees!"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
      children: "Launch of Rockstars of EPNS V2"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Rockstars of EPNS V2 Image",
        src: (__webpack_require__(839883)/* ["default"] */ .A) + "",
        width: "1400",
        height: "400"
      }), "\nAlmost about a year ago, EPNS did a really awesome activity for our amazing community!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We kicked off ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://medium.com/ethereum-push-notification-service/the-first-nft-collection-from-epns-677e23173c95",
        children: "The Rockstars of EPNS"
      }), ", our first collection of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://opensea.io/collection/rockstars-of-epns",
        children: "NFTS"
      }), " which we dropped to celebrate the launch of $PUSH!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe", {
      src: "https://cdn.embedly.com/widgets/media.html?type=text%2Fhtml&key=a19fcc184b9711e1b4764040d3dc5c07&schema=twitter&url=https%3A//twitter.com/epnsproject/status/1519367021695172615&image=https%3A//i.embed.ly/1/image%3Furl%3Dhttps%253A%252F%252Fabs.twimg.com%252Ferrors%252Flogo46x38.png%26key%3Da19fcc184b9711e1b4764040d3dc5c07",
      allowfullscreen: "",
      frameborder: "0",
      height: "689",
      width: "680",
      title: "EPNS | $PUSH on Twitter: \"1/ And just like that, this amazing ride of 52 weeks of #RockstarsOfEpns has come to an end🥺We've never felt so loved!💕Thank you everyone for all the love & support over these past 52 weeks & more!✨But what next?👀 Dive in to learn what's coming!👇https://t.co/azt3vlmUhN pic.twitter.com/9nc6ebO376 / Twitter\"",
      class: "ek n fc dx bg",
      scrolling: "no"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "At EPNS we are huge fans of the NFT space and the emerging creator economy and we were so thrilled to be witnessing a wave of adoption among creators and artists."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "So, we decided to throw our hat in the ring by supporting artists, celebrating our origins, and giving back to the community along the way. And that was just in time for the $PUSH token sale and the EPNS mainnet launch! 🙌"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["And guess what? Just in time for NFT NYC, we’re super excited and thrilled to announce the launch of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: "The Rockstars of EPNS V2."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "And of course you’ll get to know how you could partake in collecting these NFTs, pretty soon."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Stay tuned for more updates on our social media for that one!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "NFT Communication Image",
        src: (__webpack_require__(5619)/* ["default"] */ .A) + "",
        width: "1400",
        height: "700"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["While we’re there, on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: "22nd of June 2022"
      }), ", our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: "Co-Founder Richa Joshi"
      }), " will be doing an interesting talk about Building the communication layer for NFTs which would focus on:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The what and why web3 communication is important for NFTs. Use cases of web3 communication across NFTs, DeFi, Gaming, Content and How to Notify using EPNS across the NFTverse."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "Title:"
        }), " Why NFT Communication Matters"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "Speaker 💬:"
        }), " Richa Joshi — Co-Founder EPNS"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "Time ⏲️:"
        }), " 10:30 AM"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "Date 📅:"
        }), " Wed 6/22/2022"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "Location📍:"
        }), " Tron DAO Theatre at the Marriott Marquis (7th Floor)"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Speaking of NFTVerse, you might want to check out our latest blog we wrote on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: "Why engaging with your users within the NFTVerse matters!"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe", {
      src: "https://cdn.embedly.com/widgets/media.html?type=text%2Fhtml&key=a19fcc184b9711e1b4764040d3dc5c07&schema=twitter&url=https%3A//twitter.com/epnsproject/status/1537480225256136704&image=https%3A//i.embed.ly/1/image%3Furl%3Dhttps%253A%252F%252Fabs.twimg.com%252Ferrors%252Flogo46x38.png%26key%3Da19fcc184b9711e1b4764040d3dc5c07",
      allowfullscreen: "",
      frameborder: "0",
      height: "689",
      width: "680",
      title: "EPNS | $PUSH on Twitter: \"As we approach #NFTNYC2022 & the #NFTVerse grows we feel a strong need for a native communication layer to accelerate growth! 🌱In our latest blog we share exactly Why Engaging with Users Within the NFTVerse Matters & how #Web3Comm will help! 👩🏾‍🤝‍👩🏻🤝📰👉 https://t.co/w7URfE6Pkz pic.twitter.com/LCWGkk55jh / Twitter\"",
      class: "ek n fc dx bg",
      scrolling: "no"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "lastly-whats-mynftstory",
      children: "Lastly, What’s #MYNFTStory"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__/* .VideoContainer */ .bC, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe", {
        width: "100%",
        height: "100%",
        style: {
          borderRadius: "32px"
        },
        src: "https://www.youtube.com/embed/rPtUvV_1hW0",
        title: "At @NFTNYC we ask you \"What's #MyNFTStory\"",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowfullscreen: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Since NFT NYC is also one of the biggest NFT Parties across the world, we were like, almost certain that a bunch of us frens would share a ton of #NFTStories as conversation starters, icebreakers and what not!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "And that’s when we struck this idea of launching a really cool campaign where you ask yourselves"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["‘Whats ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: "#MYNFTStory?’"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
          id: "you-might-be-an-nfthodler",
          children: "You might be an NFTHODLer"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
          id: "an-nft-artist",
          children: "An NFT Artist!"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
          id: "founder-of-an-nftproject",
          children: "Founder of an NFTProject"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
          id: "or-just-part-of-nft-projects-and-eager-to-get-in",
          children: "Or just part of NFT Projects and eager to get in"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A chance to share your NFTStory and heck, even WIN something BIG!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "participate-in-this-campaign-of-ours",
      children: "Participate in this campaign of ours!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe", {
      src: "https://cdn.embedly.com/widgets/media.html?type=text%2Fhtml&key=a19fcc184b9711e1b4764040d3dc5c07&schema=twitter&url=https%3A//twitter.com/epnsproject/status/1538873089945006080&image=https%3A//i.embed.ly/1/image%3Furl%3Dhttps%253A%252F%252Fabs.twimg.com%252Ferrors%252Flogo46x38.png%26key%3Da19fcc184b9711e1b4764040d3dc5c07",
      allowfullscreen: "",
      frameborder: "0",
      height: "600",
      width: "680",
      title: "EPNS | $PUSH on Twitter: \"Ok, NFT Time! In 250 chars or less, tell us about your favorite NFT story by replying below 👇 and we might drop something! LFG!!!! #MyNFTStory #NFTNYC2022 @NFT_NYC pic.twitter.com/EObxYvSzJi / Twitter\"",
      class: "ek n fc dx bg",
      scrolling: "no"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Go to our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://twitter.com/epnsproject/status/1538873089945006080",
          children: "#MyNFTStory Twitter Campaign"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Reply to this tweet with a story of your first or your favorite NFT"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Use #MYNFTStory #NFTNYC2022"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "And you might WIN one of our Rockstars Of EPNS NFT & 2400 $PUSH"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "With so many awesome happenings at this great event, we’re really looking forward to being part of them and interacting with all you community members! Given that it’s been a while since we’ve been to an IRL event post ETHAmsterdam."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Speaking of which, post NFT NYC, we’ll also be doing a Hackathon as part of ETHGLobal’s ETHNYC! So stay tuned for more details on that one soon."
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

/***/ 651375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-9aa1ccff856a8ecae25a4b6e9167e1d3.webp");

/***/ }),

/***/ 744059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-80763427e42df1b65438f58f2cf9b9ac.webp");

/***/ }),

/***/ 839883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-4-6a3d38ad943964b7ae28d90c5140abec.png");

/***/ }),

/***/ 935942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-80763427e42df1b65438f58f2cf9b9ac.webp");

/***/ })

}]);