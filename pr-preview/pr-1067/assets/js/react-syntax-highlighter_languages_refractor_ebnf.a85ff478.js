"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[16829],{

/***/ 884771:
/***/ ((module) => {



module.exports = ebnf
ebnf.displayName = 'ebnf'
ebnf.aliases = []
function ebnf(Prism) {
  Prism.languages.ebnf = {
    comment: /\(\*[\s\S]*?\*\)/,
    string: {
      pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
      greedy: true
    },
    special: {
      pattern: /\?[^?\r\n]*\?/,
      greedy: true,
      alias: 'class-name'
    },
    definition: {
      pattern: /^([\t ]*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,
      lookbehind: true,
      alias: ['rule', 'keyword']
    },
    rule: /\b[a-z]\w*(?:[ \t]+[a-z]\w*)*\b/i,
    punctuation: /\([:/]|[:/]\)|[.,;()[\]{}]/,
    operator: /[-=|*/!]/
  }
}


/***/ })

}]);