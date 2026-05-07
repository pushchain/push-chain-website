"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[44217,66598,88979],{

/***/ 644217
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhArrowRight: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_reactive_element_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(394687);
/* harmony import */ var _node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76058);
/* harmony import */ var _node_modules_pnpm_lit_element_4_0_6_node_modules_lit_element_lit_element_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(215375);
/* harmony import */ var _node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_custom_element_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3588);
/* harmony import */ var _node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_property_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(431409);
/* harmony import */ var _node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_css_tag_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(111893);






var u = Object.defineProperty, w = Object.getOwnPropertyDescriptor, s = (o, l, p, a) => {
  for (var r = a > 1 ? void 0 : a ? w(l, p) : l, h = o.length - 1, n; h >= 0; h--)
    (n = o[h]) && (r = (a ? n(l, p, r) : n(r)) || r);
  return a && r && u(l, p, r), r;
};
let t = class extends _node_modules_pnpm_lit_element_4_0_6_node_modules_lit_element_lit_element_mjs__WEBPACK_IMPORTED_MODULE_2__/* .LitElement */ .WF {
  constructor() {
    super(...arguments), this.size = "1em", this.weight = "regular", this.color = "currentColor", this.mirrored = !1;
  }
  render() {
    var o;
    return (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .html */ .qy)`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored ? "scale(-1, 1)" : null}
    >
      ${t.weightsMap.get((o = this.weight) != null ? o : "regular")}
    </svg>`;
  }
};
t.weightsMap = /* @__PURE__ */ new Map([
  [
    "thin",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"/>`
  ],
  [
    "light",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"/>`
  ],
  [
    "regular",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>`
  ],
  [
    "bold",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"/>`
  ],
  [
    "fill",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"/>`
  ],
  [
    "duotone",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M216,128l-72,72V56Z" opacity="0.2"/><path d="M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"/>`
  ]
]);
t.styles = (0,_node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_css_tag_mjs__WEBPACK_IMPORTED_MODULE_5__/* .css */ .AH)`
    :host {
      display: contents;
    }
  `;
s([
  (0,_node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_property_mjs__WEBPACK_IMPORTED_MODULE_4__/* .property */ .M)({ type: String, reflect: !0 })
], t.prototype, "size", 2);
s([
  (0,_node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_property_mjs__WEBPACK_IMPORTED_MODULE_4__/* .property */ .M)({ type: String, reflect: !0 })
], t.prototype, "weight", 2);
s([
  (0,_node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_property_mjs__WEBPACK_IMPORTED_MODULE_4__/* .property */ .M)({ type: String, reflect: !0 })
], t.prototype, "color", 2);
s([
  (0,_node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_property_mjs__WEBPACK_IMPORTED_MODULE_4__/* .property */ .M)({ type: Boolean, reflect: !0 })
], t.prototype, "mirrored", 2);
t = s([
  (0,_node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_custom_element_mjs__WEBPACK_IMPORTED_MODULE_3__/* .customElement */ .E)("ph-arrow-right")
], t);



/***/ }

}]);