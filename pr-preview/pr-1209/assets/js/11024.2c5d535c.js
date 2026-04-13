(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[11024],{

/***/ 911024
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ CodeBlockEnhancer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(992303);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/usePrismTheme.js
var usePrismTheme = __webpack_require__(426058);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(117559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/node_modules/clsx/dist/clsx.mjs
var dist_clsx = __webpack_require__(15066);
// EXTERNAL MODULE: ./node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(518426);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(689532);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const codeBlockTitleRegex=/title=(?<quote>["'])(?<title>.*?)\1/;const metastringLinesRangeRegex=/\{(?<range>[\d,-]+)\}/;// Supported types of highlight comments
const popularCommentPatterns={js:{start:'\\/\\/',end:''},jsBlock:{start:'\\/\\*',end:'\\*\\/'},jsx:{start:'\\{\\s*\\/\\*',end:'\\*\\/\\s*\\}'},bash:{start:'#',end:''},html:{start:'<!--',end:'-->'}};const commentPatterns={...popularCommentPatterns,// shallow copy is sufficient
// minor comment styles
lua:{start:'--',end:''},wasm:{start:'\\;\\;',end:''},tex:{start:'%',end:''},vb:{start:"['‘’]",end:''},vbnet:{start:"(?:_\\s*)?['‘’]",end:''},// Visual Studio 2019 or later
rem:{start:'[Rr][Ee][Mm]\\b',end:''},f90:{start:'!',end:''},// Free format only
ml:{start:'\\(\\*',end:'\\*\\)'},cobol:{start:'\\*>',end:''}// Free format only
};const popularCommentTypes=Object.keys(popularCommentPatterns);function getCommentPattern(languages,magicCommentDirectives){// To be more reliable, the opening and closing comment must match
const commentPattern=languages.map(lang=>{const{start,end}=commentPatterns[lang];return`(?:${start}\\s*(${magicCommentDirectives.flatMap(d=>{var _d$block,_d$block2;return[d.line,(_d$block=d.block)===null||_d$block===void 0?void 0:_d$block.start,(_d$block2=d.block)===null||_d$block2===void 0?void 0:_d$block2.end].filter(Boolean);}).join('|')})\\s*${end})`;}).join('|');// White space is allowed, but otherwise it should be on it's own line
return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);}/**
 * Select comment styles based on language
 */function getAllMagicCommentDirectiveStyles(lang,magicCommentDirectives){switch(lang){case'js':case'javascript':case'ts':case'typescript':return getCommentPattern(['js','jsBlock'],magicCommentDirectives);case'jsx':case'tsx':return getCommentPattern(['js','jsBlock','jsx'],magicCommentDirectives);case'html':return getCommentPattern(['js','jsBlock','html'],magicCommentDirectives);case'python':case'py':case'bash':return getCommentPattern(['bash'],magicCommentDirectives);case'markdown':case'md':// Text uses HTML, front matter uses bash
return getCommentPattern(['html','jsx','bash'],magicCommentDirectives);case'tex':case'latex':case'matlab':return getCommentPattern(['tex'],magicCommentDirectives);case'lua':case'haskell':return getCommentPattern(['lua'],magicCommentDirectives);case'sql':return getCommentPattern(['lua','jsBlock'],magicCommentDirectives);case'wasm':return getCommentPattern(['wasm'],magicCommentDirectives);case'vb':case'vba':case'visual-basic':return getCommentPattern(['vb','rem'],magicCommentDirectives);case'vbnet':return getCommentPattern(['vbnet','rem'],magicCommentDirectives);case'batch':return getCommentPattern(['rem'],magicCommentDirectives);case'basic':// https://github.com/PrismJS/prism/blob/master/components/prism-basic.js#L3
return getCommentPattern(['rem','f90'],magicCommentDirectives);case'fsharp':return getCommentPattern(['js','ml'],magicCommentDirectives);case'ocaml':case'sml':return getCommentPattern(['ml'],magicCommentDirectives);case'fortran':return getCommentPattern(['f90'],magicCommentDirectives);case'cobol':return getCommentPattern(['cobol'],magicCommentDirectives);default:// All popular comment types
return getCommentPattern(popularCommentTypes,magicCommentDirectives);}}function parseCodeBlockTitle(metastring){var _metastring$match$gro,_metastring$match;return(_metastring$match$gro=metastring===null||metastring===void 0||(_metastring$match=metastring.match(codeBlockTitleRegex))===null||_metastring$match===void 0?void 0:_metastring$match.groups.title)!==null&&_metastring$match$gro!==void 0?_metastring$match$gro:'';}function getMetaLineNumbersStart(metastring){const showLineNumbersMeta=metastring===null||metastring===void 0?void 0:metastring.split(' ').find(str=>str.startsWith('showLineNumbers'));if(showLineNumbersMeta){if(showLineNumbersMeta.startsWith('showLineNumbers=')){const value=showLineNumbersMeta.replace('showLineNumbers=','');return parseInt(value,10);}return 1;}return undefined;}function getLineNumbersStart(_ref){let{showLineNumbers,metastring}=_ref;const defaultStart=1;if(typeof showLineNumbers==='boolean'){return showLineNumbers?defaultStart:undefined;}if(typeof showLineNumbers==='number'){return showLineNumbers;}return getMetaLineNumbersStart(metastring);}// TODO Docusaurus v4: remove, only kept for internal retro-compatibility
//  See https://github.com/facebook/docusaurus/pull/11153
function containsLineNumbers(metastring){return Boolean(metastring===null||metastring===void 0?void 0:metastring.includes('showLineNumbers'));}function parseCodeLinesFromMetastring(code,_ref2){let{metastring,magicComments}=_ref2;// Highlighted lines specified in props: don't parse the content
if(metastring&&metastringLinesRangeRegex.test(metastring)){const linesRange=metastring.match(metastringLinesRangeRegex).groups.range;if(magicComments.length===0){throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${metastring}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);}const metastringRangeClassName=magicComments[0].className;const lines=parse_numeric_range_default()(linesRange).filter(n=>n>0).map(n=>[n-1,[metastringRangeClassName]]);return{lineClassNames:Object.fromEntries(lines),code};}return null;}function parseCodeLinesFromContent(code,params){const{language,magicComments}=params;if(language===undefined){return{lineClassNames:{},code};}const directiveRegex=getAllMagicCommentDirectiveStyles(language,magicComments);// Go through line by line
const lines=code.split(/\r?\n/);const blocks=Object.fromEntries(magicComments.map(d=>[d.className,{start:0,range:''}]));const lineToClassName=Object.fromEntries(magicComments.filter(d=>d.line).map(_ref3=>{let{className,line}=_ref3;return[line,className];}));const blockStartToClassName=Object.fromEntries(magicComments.filter(d=>d.block).map(_ref4=>{let{className,block}=_ref4;return[block.start,className];}));const blockEndToClassName=Object.fromEntries(magicComments.filter(d=>d.block).map(_ref5=>{let{className,block}=_ref5;return[block.end,className];}));for(let lineNumber=0;lineNumber<lines.length;){const line=lines[lineNumber];const match=line.match(directiveRegex);if(!match){// Lines without directives are unchanged
lineNumber+=1;continue;}const directive=match.slice(1).find(item=>item!==undefined);if(lineToClassName[directive]){blocks[lineToClassName[directive]].range+=`${lineNumber},`;}else if(blockStartToClassName[directive]){blocks[blockStartToClassName[directive]].start=lineNumber;}else if(blockEndToClassName[directive]){blocks[blockEndToClassName[directive]].range+=`${blocks[blockEndToClassName[directive]].start}-${lineNumber-1},`;}lines.splice(lineNumber,1);}const lineClassNames={};Object.entries(blocks).forEach(_ref6=>{let[className,{range}]=_ref6;parse_numeric_range_default()(range).forEach(l=>{lineClassNames[l]??=[];lineClassNames[l].push(className);});});return{code:lines.join('\n'),lineClassNames};}/**
 * Parses the code content, strips away any magic comments, and returns the
 * clean content and the highlighted lines marked by the comments or metastring.
 *
 * If the metastring contains a range, the `content` will be returned as-is
 * without any parsing. The returned `lineClassNames` will be a map from that
 * number range to the first magic comment config entry (which _should_ be for
 * line highlight directives.)
 */function parseLines(code,params){var _parseCodeLinesFromMe;// Historical behavior: we remove last line break
const newCode=code.replace(/\r?\n$/,'');// Historical behavior: we try one strategy after the other
// we don't support mixing metastring ranges + magic comments
return(_parseCodeLinesFromMe=parseCodeLinesFromMetastring(newCode,{...params}))!==null&&_parseCodeLinesFromMe!==void 0?_parseCodeLinesFromMe:parseCodeLinesFromContent(newCode,{...params});}/**
 * Gets the language name from the class name (set by MDX).
 * e.g. `"language-javascript"` => `"javascript"`.
 * Returns undefined if there is no language class name.
 */function parseClassNameLanguage(className){if(!className){return undefined;}const languageClassName=className.split(' ').find(str=>str.startsWith('language-'));return languageClassName===null||languageClassName===void 0?void 0:languageClassName.replace(/language-/,'');}// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language){return language===null||language===void 0?void 0:language.toLowerCase();}function getLanguage(params){var _normalizeLanguage,_ref7,_params$language;return(_normalizeLanguage=normalizeLanguage((_ref7=(_params$language=params.language)!==null&&_params$language!==void 0?_params$language:parseClassNameLanguage(params.className))!==null&&_ref7!==void 0?_ref7:params.defaultLanguage))!==null&&_normalizeLanguage!==void 0?_normalizeLanguage:'text';// There's always a language, required by Prism;
}/**
 * This ensures that we always have the code block language as className
 * For MDX code blocks this is provided automatically by MDX
 * For JSX code blocks, the language gets added by this function
 * This ensures both cases lead to a consistent HTML output
 */function ensureLanguageClassName(_ref8){let{className,language}=_ref8;return (0,dist_clsx/* default */.A)(className,language&&!(className!==null&&className!==void 0&&className.includes(`language-${language}`))&&`language-${language}`);}function createCodeBlockMetadata(params){const language=getLanguage({language:params.language,defaultLanguage:params.defaultLanguage,className:params.className});const{lineClassNames,code}=parseLines(params.code,{metastring:params.metastring,magicComments:params.magicComments,language});const className=ensureLanguageClassName({className:params.className,language});const title=parseCodeBlockTitle(params.metastring)||params.title;const lineNumbersStart=getLineNumbersStart({showLineNumbers:params.showLineNumbers,metastring:params.metastring});return{codeInput:params.code,code,className,language,title,lineNumbersStart,lineClassNames};}function getPrismCssVariables(prismTheme){const mapping={color:'--prism-color',backgroundColor:'--prism-background-color'};const properties={};Object.entries(prismTheme.plain).forEach(_ref9=>{let[key,value]=_ref9;const varName=mapping[key];if(varName&&typeof value==='string'){properties[varName]=value;}});return properties;}const CodeBlockContext=/*#__PURE__*/(0,react.createContext)(null);function CodeBlockContextProvider(_ref0){let{metadata,wordWrap,children}=_ref0;// Should we optimize this in 2 contexts?
// Unlike metadata, wordWrap is stateful and likely to trigger re-renders
const value=(0,react.useMemo)(()=>{return{metadata,wordWrap};},[metadata,wordWrap]);return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockContext.Provider,{value:value,children:children});}function useCodeBlockContext(){const value=(0,react.useContext)(CodeBlockContext);if(value===null){throw new reactUtils/* ReactContextError */.dV('CodeBlockContextProvider');}return value;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/styles.module.css
var styles_module = __webpack_require__(290260);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockContainer(_ref){let{as:As,...props}=_ref;const prismTheme=(0,usePrismTheme/* usePrismTheme */.A)();const prismCssVariables=getPrismCssVariables(prismTheme);return/*#__PURE__*/(0,jsx_runtime.jsx)(As// Polymorphic components are hard to type, without `oneOf` generics
,{...props,style:prismCssVariables,className:(0,clsx/* default */.A)(props.className,styles_module/* default */.A.codeBlockContainer,ThemeClassNames/* ThemeClassNames */.G.common.codeBlock)});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/styles.module.css
var Content_styles_module = __webpack_require__(617562);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/Element.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO Docusaurus v4: move this component at the root?
// This component only handles a rare edge-case: <pre><MyComp/></pre> in MDX
// <pre> tags in markdown map to CodeBlocks. They may contain JSX children.
// When children is not a simple string, we just return a styled block without
// actually highlighting.
function CodeBlockJSX(_ref){let{children,className}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockContainer,{as:"pre",tabIndex:0,className:(0,clsx/* default */.A)(Content_styles_module/* default */.A.codeBlockStandalone,'thin-scrollbar',className),children:/*#__PURE__*/(0,jsx_runtime.jsx)("code",{className:Content_styles_module/* default */.A.codeBlockLines,children:children})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(406342);
;// ./node_modules/@docusaurus/theme-common/lib/hooks/useMutationObserver.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const DefaultOptions={attributes:true,characterData:true,childList:true,subtree:true};function useMutationObserver(target,callback,options){if(options===void 0){options=DefaultOptions;}const stableCallback=(0,reactUtils/* useEvent */._q)(callback);// MutationObserver options are not nested much
// so this should be to memo options in 99%
// TODO handle options.attributeFilter array
const stableOptions=(0,reactUtils/* useShallowMemoObject */.Be)(options);(0,react.useEffect)(()=>{const observer=new MutationObserver(stableCallback);if(target){observer.observe(target,stableOptions);}return()=>observer.disconnect();},[target,stableCallback,stableOptions]);}
;// ./node_modules/@docusaurus/theme-common/lib/hooks/useCodeWordWrap.js
// Callback fires when the "hidden" attribute of a tabpanel changes
// See https://github.com/facebook/docusaurus/pull/7485
function useTabBecameVisibleCallback(codeBlockRef,callback){const[hiddenTabElement,setHiddenTabElement]=(0,react.useState)();const updateHiddenTabElement=(0,react.useCallback)(()=>{var _codeBlockRef$current;// No need to observe non-hidden tabs
// + we want to force a re-render when a tab becomes visible
setHiddenTabElement((_codeBlockRef$current=codeBlockRef.current)===null||_codeBlockRef$current===void 0?void 0:_codeBlockRef$current.closest('[role=tabpanel][hidden]'));},[codeBlockRef,setHiddenTabElement]);(0,react.useEffect)(()=>{updateHiddenTabElement();},[updateHiddenTabElement]);useMutationObserver(hiddenTabElement,mutations=>{mutations.forEach(mutation=>{if(mutation.type==='attributes'&&mutation.attributeName==='hidden'){callback();updateHiddenTabElement();}});},{attributes:true,characterData:false,childList:false,subtree:false});}function useCodeWordWrap(){const[isEnabled,setIsEnabled]=(0,react.useState)(false);const[isCodeScrollable,setIsCodeScrollable]=(0,react.useState)(false);const codeBlockRef=(0,react.useRef)(null);const toggle=(0,react.useCallback)(()=>{const codeElement=codeBlockRef.current.querySelector('code');if(isEnabled){codeElement.removeAttribute('style');}else{codeElement.style.whiteSpace='pre-wrap';// When code wrap is enabled, we want to avoid a scrollbar in any case
// Ensure that very very long words/strings/tokens still wrap
codeElement.style.overflowWrap='anywhere';}setIsEnabled(value=>!value);},[codeBlockRef,isEnabled]);const updateCodeIsScrollable=(0,react.useCallback)(()=>{const{scrollWidth,clientWidth}=codeBlockRef.current;const isScrollable=scrollWidth>clientWidth||codeBlockRef.current.querySelector('code').hasAttribute('style');setIsCodeScrollable(isScrollable);},[codeBlockRef]);useTabBecameVisibleCallback(codeBlockRef,updateCodeIsScrollable);(0,react.useEffect)(()=>{updateCodeIsScrollable();},[isEnabled,updateCodeIsScrollable]);(0,react.useEffect)(()=>{window.addEventListener('resize',updateCodeIsScrollable,{passive:true});return()=>{window.removeEventListener('resize',updateCodeIsScrollable);};},[updateCodeIsScrollable]);return{codeBlockRef,isEnabled,isCodeScrollable,toggle};}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Title/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Just a pass-through component that users can swizzle and customize
function CodeBlockTitle(_ref){let{children}=_ref;return children;}
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.mjs + 1 modules
var dist = __webpack_require__(878181);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/Token/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Pass-through components that users can swizzle and customize
function CodeBlockLineToken(_ref){let{line,token,...props}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{...props});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/styles.module.css
var Line_styles_module = __webpack_require__(993029);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// This <br/ seems useful when the line has no content to prevent collapsing.
// For code blocks with "diff" languages, this makes the empty lines collapse to
// zero height lines, which is undesirable.
// See also https://github.com/facebook/docusaurus/pull/11565
function LineBreak(){return/*#__PURE__*/(0,jsx_runtime.jsx)("br",{});}// Replaces single lines with '\n' by '' so that we don't end up with
// duplicate line breaks (the '\n' + the artificial <br/> above)
// see also https://github.com/facebook/docusaurus/pull/11565
function fixLineBreak(line){const singleLineBreakToken=line.length===1&&line[0].content==='\n'?line[0]:undefined;if(singleLineBreakToken){return[{...singleLineBreakToken,content:''}];}return line;}function CodeBlockLine(_ref){let{line:lineProp,classNames,showLineNumbers,getLineProps,getTokenProps}=_ref;const line=fixLineBreak(lineProp);const lineProps=getLineProps({line,className:(0,clsx/* default */.A)(classNames,showLineNumbers&&Line_styles_module/* default */.A.codeLine)});const lineTokens=line.map((token,key)=>{const tokenProps=getTokenProps({token});return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockLineToken,{...tokenProps,line:line,token:token,children:tokenProps.children},key);});return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{...lineProps,children:[showLineNumbers?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Line_styles_module/* default */.A.codeLineNumber}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Line_styles_module/* default */.A.codeLineContent,children:lineTokens})]}):lineTokens,/*#__PURE__*/(0,jsx_runtime.jsx)(LineBreak,{})]});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO Docusaurus v4: remove useless forwardRef
const Pre=/*#__PURE__*/react.forwardRef((props,ref)=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("pre",{ref:ref/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */,tabIndex:0,...props,className:(0,clsx/* default */.A)(props.className,Content_styles_module/* default */.A.codeBlock,'thin-scrollbar')});});function Code(props){const{metadata}=useCodeBlockContext();return/*#__PURE__*/(0,jsx_runtime.jsx)("code",{...props,className:(0,clsx/* default */.A)(props.className,Content_styles_module/* default */.A.codeBlockLines,metadata.lineNumbersStart!==undefined&&Content_styles_module/* default */.A.codeBlockLinesWithNumbering),style:{...props.style,counterReset:metadata.lineNumbersStart===undefined?undefined:`line-count ${metadata.lineNumbersStart-1}`}});}function CodeBlockContent(_ref){let{className:classNameProp}=_ref;const{metadata,wordWrap}=useCodeBlockContext();const prismTheme=(0,usePrismTheme/* usePrismTheme */.A)();const{code,language,lineNumbersStart,lineClassNames}=metadata;return/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Highlight */.f4,{theme:prismTheme,code:code,language:language,children:_ref2=>{let{className,style,tokens:lines,getLineProps,getTokenProps}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)(Pre,{ref:wordWrap.codeBlockRef,className:(0,clsx/* default */.A)(classNameProp,className),style:style,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Code,{children:lines.map((line,i)=>/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockLine,{line:line,getLineProps:getLineProps,getTokenProps:getTokenProps,classNames:lineClassNames[i],showLineNumbers:lineNumbersStart!==undefined},i))})});}});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/BrowserOnly.js
var BrowserOnly = __webpack_require__(978478);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(721312);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/Button/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockButton(_ref){let{className,...props}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button",...props,className:(0,clsx/* default */.A)('clean-btn',className)});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Copy/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconCopy(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Success/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconSuccess(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/CopyButton/styles.module.css
var CopyButton_styles_module = __webpack_require__(519942);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/CopyButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function title(){return (0,Translate/* translate */.T)({id:'theme.CodeBlock.copy',message:'Copy',description:'The copy button label on code blocks'});}function ariaLabel(isCopied){return isCopied?(0,Translate/* translate */.T)({id:'theme.CodeBlock.copied',message:'Copied',description:'The copied button label on code blocks'}):(0,Translate/* translate */.T)({id:'theme.CodeBlock.copyButtonAriaLabel',message:'Copy code to clipboard',description:'The ARIA label for copy code blocks button'});}async function copyToClipboard(text){// The clipboard API is only defined in secure contexts (HTTPS / localhost).
// See https://developer.mozilla.org/en-US/docs/Web/API/Clipboard
if(navigator.clipboard){return navigator.clipboard.writeText(text);}// Fall back to copy-text-to-clipboard for non-secure contexts (e.g. HTTP
// on a local network). The fallback is lazily loaded to avoid bundle
// overhead for the common HTTPS case.
const{default:copy}=await __webpack_require__.e(/* import() */ 33436).then(__webpack_require__.bind(__webpack_require__, 933436));return copy(text);}function useCopyButton(){const{metadata:{code}}=useCodeBlockContext();const[isCopied,setIsCopied]=(0,react.useState)(false);const copyTimeout=(0,react.useRef)(undefined);const copyCode=(0,react.useCallback)(()=>{copyToClipboard(code).then(()=>{setIsCopied(true);copyTimeout.current=window.setTimeout(()=>{setIsCopied(false);},1000);});// Errors are intentionally not caught so they remain unhandled and can
// be captured by observability tools (e.g. Sentry, PostHog).
},[code]);(0,react.useEffect)(()=>()=>window.clearTimeout(copyTimeout.current),[]);return{copyCode,isCopied};}function CopyButton(_ref){let{className}=_ref;const{copyCode,isCopied}=useCopyButton();return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockButton,{"aria-label":ariaLabel(isCopied),title:title(),className:(0,clsx/* default */.A)(className,CopyButton_styles_module/* default */.A.copyButton,isCopied&&CopyButton_styles_module/* default */.A.copyButtonCopied),onClick:copyCode,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:CopyButton_styles_module/* default */.A.copyButtonIcons,"aria-hidden":"true",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconCopy,{className:CopyButton_styles_module/* default */.A.copyButtonIcon}),/*#__PURE__*/(0,jsx_runtime.jsx)(IconSuccess,{className:CopyButton_styles_module/* default */.A.copyButtonSuccessIcon})]})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/WordWrap/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconWordWrap(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/WordWrapButton/styles.module.css
var WordWrapButton_styles_module = __webpack_require__(902053);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/WordWrapButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function WordWrapButton(_ref){let{className}=_ref;const{wordWrap}=useCodeBlockContext();const canShowButton=wordWrap.isEnabled||wordWrap.isCodeScrollable;if(!canShowButton){return false;}const title=(0,Translate/* translate */.T)({id:'theme.CodeBlock.wordWrapToggle',message:'Toggle word wrap',description:'The title attribute for toggle word wrapping button of code block lines'});return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockButton,{onClick:()=>wordWrap.toggle(),className:(0,clsx/* default */.A)(className,wordWrap.isEnabled&&WordWrapButton_styles_module/* default */.A.wordWrapButtonEnabled),"aria-label":title,title:title,children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconWordWrap,{className:WordWrapButton_styles_module/* default */.A.wordWrapButtonIcon,"aria-hidden":"true"})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/styles.module.css
var Buttons_styles_module = __webpack_require__(225454);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Code block buttons are not server-rendered on purpose
// Adding them to the initial HTML is useless and expensive (due to JSX SVG)
// They are hidden by default and require React  to become interactive
function CodeBlockButtons(_ref){let{className}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(BrowserOnly/* default */.A,{children:()=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(className,Buttons_styles_module/* default */.A.buttonGroup),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(WordWrapButton,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(CopyButton,{})]})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Layout/styles.module.css
var Layout_styles_module = __webpack_require__(764157);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockLayout(_ref){let{className}=_ref;const{metadata}=useCodeBlockContext();return/*#__PURE__*/(0,jsx_runtime.jsxs)(CodeBlockContainer,{as:"div",className:(0,clsx/* default */.A)(className,metadata.className),children:[metadata.title&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Layout_styles_module/* default */.A.codeBlockTitle,children:/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockTitle,{children:metadata.title})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Layout_styles_module/* default */.A.codeBlockContent,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockContent,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockButtons,{})]})]});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/String.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useCodeBlockMetadata(props){const{prism}=(0,useThemeConfig/* useThemeConfig */.p)();return createCodeBlockMetadata({code:props.children,className:props.className,metastring:props.metastring,magicComments:prism.magicComments,defaultLanguage:prism.defaultLanguage,language:props.language,title:props.title,showLineNumbers:props.showLineNumbers});}// TODO Docusaurus v4: move this component at the root?
function CodeBlockString(props){const metadata=useCodeBlockMetadata(props);const wordWrap=useCodeWordWrap();return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockContextProvider,{metadata:metadata,wordWrap:wordWrap,children:/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockLayout,{})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */function maybeStringifyChildren(children){if(react.Children.toArray(children).some(el=>/*#__PURE__*/(0,react.isValidElement)(el))){return children;}// The children is now guaranteed to be one/more plain strings
return Array.isArray(children)?children.join(''):children;}function CodeBlock(_ref){let{children:rawChildren,...props}=_ref;// The Prism theme on SSR is always the default theme but the site theme can
// be in a different mode. React hydration doesn't update DOM styles that come
// from SSR. Hence force a re-render after mounting to apply the current
// relevant styles.
const isBrowser=(0,useIsBrowser/* default */.A)();const children=maybeStringifyChildren(rawChildren);const CodeBlockComp=typeof children==='string'?CodeBlockString:CodeBlockJSX;return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockComp,{...props,children:children},String(isBrowser));}
// EXTERNAL MODULE: ./src/theme/Playground/index.js
var Playground = __webpack_require__(247991);
// EXTERNAL MODULE: ./src/theme/ReactLiveScope/index.js
var ReactLiveScope = __webpack_require__(351433);
;// ./node_modules/@docusaurus/theme-live-codeblock/lib/theme/LiveCodeBlock/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LiveCodeBlock(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(Playground/* default */.A,{scope:ReactLiveScope/* default */.A,...props});}
;// ./node_modules/@docusaurus/theme-live-codeblock/lib/theme/CodeBlock/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isLiveCodeBlock(props){return!!props.live&&(typeof props.children==='undefined'||typeof props.children==='string');}function CodeBlockEnhancer(props){return isLiveCodeBlock(props)?/*#__PURE__*/(0,jsx_runtime.jsx)(LiveCodeBlock,{...props}):/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlock,{...props});}

/***/ },

/***/ 519942
(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"copyButtonCopied":"copyButtonCopied_Vdqa","copyButtonIcons":"copyButtonIcons_IEyt","copyButtonIcon":"copyButtonIcon_TrPX","copyButtonSuccessIcon":"copyButtonSuccessIcon_cVMy"});
    if(true) {
      (function() {
        var localsJsonString = "{\"copyButtonCopied\":\"copyButtonCopied_Vdqa\",\"copyButtonIcons\":\"copyButtonIcons_IEyt\",\"copyButtonIcon\":\"copyButtonIcon_TrPX\",\"copyButtonSuccessIcon\":\"copyButtonSuccessIcon_cVMy\"}";
        // 1776120132432
        var cssReload = __webpack_require__(129140)(module.id, {"esModule":true});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ },

/***/ 902053
(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wordWrapButtonIcon":"wordWrapButtonIcon_b1P5","wordWrapButtonEnabled":"wordWrapButtonEnabled_uzNF"});
    if(true) {
      (function() {
        var localsJsonString = "{\"wordWrapButtonIcon\":\"wordWrapButtonIcon_b1P5\",\"wordWrapButtonEnabled\":\"wordWrapButtonEnabled_uzNF\"}";
        // 1776120132430
        var cssReload = __webpack_require__(129140)(module.id, {"esModule":true});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ },

/***/ 225454
(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"buttonGroup":"buttonGroup_M5ko"});
    if(true) {
      (function() {
        var localsJsonString = "{\"buttonGroup\":\"buttonGroup_M5ko\"}";
        // 1776120124287
        var cssReload = __webpack_require__(129140)(module.id, {"esModule":true});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ },

/***/ 290260
(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"codeBlockContainer":"codeBlockContainer_Ckt0"});
    if(true) {
      (function() {
        var localsJsonString = "{\"codeBlockContainer\":\"codeBlockContainer_Ckt0\"}";
        // 1776120101413
        var cssReload = __webpack_require__(129140)(module.id, {"esModule":true});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ },

/***/ 617562
(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"codeBlock":"codeBlock_bY9V","codeBlockStandalone":"codeBlockStandalone_MEMb","codeBlockLines":"codeBlockLines_e6Vv","codeBlockLinesWithNumbering":"codeBlockLinesWithNumbering_o6Pm"});
    if(true) {
      (function() {
        var localsJsonString = "{\"codeBlock\":\"codeBlock_bY9V\",\"codeBlockStandalone\":\"codeBlockStandalone_MEMb\",\"codeBlockLines\":\"codeBlockLines_e6Vv\",\"codeBlockLinesWithNumbering\":\"codeBlockLinesWithNumbering_o6Pm\"}";
        // 1776120101211
        var cssReload = __webpack_require__(129140)(module.id, {"esModule":true});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ },

/***/ 764157
(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"codeBlockContent":"codeBlockContent_QJqH","codeBlockTitle":"codeBlockTitle_OeMC","codeBlock":"codeBlock_a8dz"});
    if(true) {
      (function() {
        var localsJsonString = "{\"codeBlockContent\":\"codeBlockContent_QJqH\",\"codeBlockTitle\":\"codeBlockTitle_OeMC\",\"codeBlock\":\"codeBlock_a8dz\"}";
        // 1776120101405
        var cssReload = __webpack_require__(129140)(module.id, {"esModule":true});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ },

/***/ 993029
(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"codeLine":"codeLine_lJS_","codeLineNumber":"codeLineNumber_Tfdd","codeLineContent":"codeLineContent_feaV"});
    if(true) {
      (function() {
        var localsJsonString = "{\"codeLine\":\"codeLine_lJS_\",\"codeLineNumber\":\"codeLineNumber_Tfdd\",\"codeLineContent\":\"codeLineContent_feaV\"}";
        // 1776120129668
        var cssReload = __webpack_require__(129140)(module.id, {"esModule":true});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ },

/***/ 518426
(module, exports) {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


/***/ }

}]);