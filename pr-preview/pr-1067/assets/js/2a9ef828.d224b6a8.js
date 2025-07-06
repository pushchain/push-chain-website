"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[38478],{

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

/***/ 487543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-32261b327ae42b6215953296e28cb54a.webp");

/***/ }),

/***/ 640898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'oportunidades-de-desarrollo-profesional-con-push-protocol-en-latinoamerica',
	title: 'Oportunidades de desarrollo profesional con Push Protocol en Latinoamérica🌎💜',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'A medida que el ecosistema avanza es importante democratizar los esfuerzos de los proyectos a nivel global para garantizar que todas las regiones tengan acceso y la oportunidad de desarrollar con la tecnología.',
	tags: [
		'Push Protocol',
		'Latam'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/oportunidades-de-desarrollo-profesional-con-push-protocol-en-latinoamerica",
  "source": "@site/blog/2023-06-26-push-en-espanol/index.md",
  "title": "Oportunidades de desarrollo profesional con Push Protocol en Latinoamérica🌎💜",
  "description": "Cover image of Oportunidades de desarrollo profesional con Push Protocol en Latinoamérica🌎💜",
  "date": "2023-06-26T00:00:00.000Z",
  "formattedDate": "June 26, 2023",
  "tags": [
    {
      "label": "Push Protocol",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-protocol"
    },
    {
      "label": "Latam",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/latam"
    }
  ],
  "readingTime": 1.8233333333333333,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Push Protocol",
      "url": "https://x.com/PushChain",
      "imageURL": "/assets/blog/authors/authorpush.png",
      "key": "push"
    }
  ],
  "frontMatter": {
    "slug": "oportunidades-de-desarrollo-profesional-con-push-protocol-en-latinoamerica",
    "title": "Oportunidades de desarrollo profesional con Push Protocol en Latinoamérica🌎💜",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "A medida que el ecosistema avanza es importante democratizar los esfuerzos de los proyectos a nivel global para garantizar que todas las regiones tengan acceso y la oportunidad de desarrollar con la tecnología.",
    "tags": [
      "Push Protocol",
      "Latam"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "How Push Protocol Can Revolutionize Data-Driven Decision Making📊",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/how-push-protocol-can-revolutionize-data-driven-decision-making"
  },
  "nextItem": {
    "title": "Transforming Decentralized Communication With Push & AI🤖",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/transforming-decentralized-communication-with-push-and-ai"
  }
};
const assets = {
"image": (__webpack_require__(987736)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
      alt: "Cover image of Oportunidades de desarrollo profesional con Push Protocol en Latinoamérica🌎💜",
      src: (__webpack_require__(487543)/* ["default"] */ .A) + "",
      width: "1400",
      height: "735"
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 987736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-32261b327ae42b6215953296e28cb54a.webp");

/***/ })

}]);