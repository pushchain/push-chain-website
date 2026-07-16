"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[33653],{

/***/ 940820
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_05_07_introducing_chain_executor_account_index_md_f02_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_05_07_introducing_chain_executor_account_index_md_f02_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(442538);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_components_BlogTweet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(281981);


const frontMatter = {
	slug: 'introducing-chain-executor-account',
	title: 'Introducing Chain Executor Accounts (CEAs)',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'This is one of our biggest security upgrades to date. Must read if you\'re a cross-chain user or a dev.',
	text: 'This is one of our biggest security upgrades to date. Must read if you\'re a cross-chain user or a dev.',
	tags: [
		'Technical',
		'Deep Dives'
	],
	twitterId: '2052399062838923372'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(107738)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
      alt: "Cover Image of Introducing Chain Executor Accounts (CEAs)",
      src: (__webpack_require__(378947)/* ["default"] */ .A) + "",
      width: "1600",
      height: "900"
    })
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



/***/ },

/***/ 281981
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(395293);
/* harmony import */ var react_tweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(274609);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(309751);
/* harmony import */ var _site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61530);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(474848);
const BlogTweet=_ref=>{let id=_ref.id;const _useColorMode=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useColorMode */ .G)(),colorMode=_useColorMode.colorMode;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TweetWrapper,{isDark:colorMode==='dark',children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:colorMode,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tweet__WEBPACK_IMPORTED_MODULE_2__/* .Tweet */ .Y,{id:id})})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogTweet);const TweetWrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({displayName:"BlogTweet__TweetWrapper",componentId:"sc-19ovpm5-0"})(["border:1px solid var(--ifm-color-tweet-border);border-radius:12px;overflow:hidden;position:relative;min-height:200px;max-width:550px;margin:1.5rem 0;transition:all 0.3s ease;svg{display:inline-block;fill:currentColor;width:1.25em;height:1.25em;vertical-align:text-bottom;}.verified_node_modules-react-tweet-dist-twitter-theme-icons-icons-module{fill:var(--ifm-color-tweet-icon);width:20px;height:20px;}.twitterIcon_node_modules-react-tweet-dist-twitter-theme-tweet-header-module{fill:var(--ifm-color-tweet-icon);width:20px;height:20px;}.likeIcon_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module{fill:var(--ifm-color-tweet-like);width:20px;height:20px;}.replyIcon_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module,.copyIcon_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module{fill:var(--ifm-color-tweet-icon);width:20px;height:20px;}.infoIcon_node_modules-react-tweet-dist-twitter-theme-tweet-info-module{fill:var(--ifm-color-tweet-icon);width:16px;height:16px;}.reply_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module{display:none;}.info_node_modules-react-tweet-dist-twitter-theme-tweet-info-module{font-size:0.75em;}.actions_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module{margin-top:10px;border-top:1px solid #ffffff33;justify-content:end;}.copy_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module{margin-right:0px;}.link_node_modules-react-tweet-dist-twitter-theme-tweet-replies-module{border:1px solid #ffffff33;&:hover{border-color:var(--ifm-link-color);}}&:hover{border-color:var(--ifm-link-color);transform:translateY(-2px);box-shadow:0 8px 25px rgba(170,57,188,0.15);}@media ","{max-width:100%;}"],_site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__/* .device */ .jO.mobileL);

/***/ },

/***/ 107738
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-ab35d52d60c69631162fb1d4ed340828.webp");

/***/ },

/***/ 378947
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-ab35d52d60c69631162fb1d4ed340828.webp");

/***/ },

/***/ 442538
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1229/blog/introducing-chain-executor-account","source":"@site/blog/2026-05-07-introducing-chain-executor-account/index.md","title":"Introducing Chain Executor Accounts (CEAs)","description":"This is one of our biggest security upgrades to date. Must read if you\'re a cross-chain user or a dev.","date":"2026-05-07T00:00:00.000Z","tags":[{"inline":true,"label":"Technical","permalink":"/push-chain-website/pr-preview/pr-1229/blog/tags/technical"},{"inline":true,"label":"Deep Dives","permalink":"/push-chain-website/pr-preview/pr-1229/blog/tags/deep-dives"}],"readingTime":2.72,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1229/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1229/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"introducing-chain-executor-account","title":"Introducing Chain Executor Accounts (CEAs)","authors":["push"],"image":"./cover-image.webp","description":"This is one of our biggest security upgrades to date. Must read if you\'re a cross-chain user or a dev.","text":"This is one of our biggest security upgrades to date. Must read if you\'re a cross-chain user or a dev.","tags":["Technical","Deep Dives"],"twitterId":"2052399062838923372"},"unlisted":false,"prevItem":{"title":"Introducing Multihop on Push Chain","permalink":"/push-chain-website/pr-preview/pr-1229/blog/introducing-multihop-on-push-chain"},"nextItem":{"title":"WTF Happened to Chain Abstraction?","permalink":"/push-chain-website/pr-preview/pr-1229/blog/wtf-happened-to-chain-abstraction"}}');

/***/ }

}]);