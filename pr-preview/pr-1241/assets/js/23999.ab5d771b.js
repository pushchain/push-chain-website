"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[1618,23999,79237],{

/***/ 279237
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhQuestionMark: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_reactive_element_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(394687);
/* harmony import */ var _node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76058);
/* harmony import */ var _node_modules_pnpm_lit_element_4_0_6_node_modules_lit_element_lit_element_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(215375);
/* harmony import */ var _node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_custom_element_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3588);
/* harmony import */ var _node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_property_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(431409);
/* harmony import */ var _node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_css_tag_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(111893);






var f = Object.defineProperty, V = Object.getOwnPropertyDescriptor, s = (a, o, c, i) => {
  for (var r = i > 1 ? void 0 : i ? V(o, c) : o, l = a.length - 1, h; l >= 0; l--)
    (h = a[l]) && (r = (i ? h(o, c, r) : h(r)) || r);
  return i && r && f(o, c, r), r;
};
let t = class extends _node_modules_pnpm_lit_element_4_0_6_node_modules_lit_element_lit_element_mjs__WEBPACK_IMPORTED_MODULE_2__/* .LitElement */ .WF {
  constructor() {
    super(...arguments), this.size = "1em", this.weight = "regular", this.color = "currentColor", this.mirrored = !1;
  }
  render() {
    var a;
    return (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .html */ .qy)`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${this.size}"
      height="${this.size}"
      fill="${this.color}"
      viewBox="0 0 256 256"
      transform=${this.mirrored ? "scale(-1, 1)" : null}
    >
      ${t.weightsMap.get((a = this.weight) != null ? a : "regular")}
    </svg>`;
  }
};
t.weightsMap = /* @__PURE__ */ new Map([
  [
    "thin",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M188,96c0,27.51-24.77,50.09-56,51.89V160a4,4,0,0,1-8,0V144a4,4,0,0,1,4-4c28.67,0,52-19.74,52-44s-23.33-44-52-44S76,71.74,76,96a4,4,0,0,1-8,0c0-28.67,26.92-52,60-52S188,67.33,188,96ZM128,196a12,12,0,1,0,12,12A12,12,0,0,0,128,196Z"/>`
  ],
  [
    "light",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M190,96c0,28-24.62,51.11-56,53.75V160a6,6,0,0,1-12,0V144a6,6,0,0,1,6-6c27.57,0,50-18.84,50-42s-22.43-42-50-42S78,72.84,78,96a6,6,0,0,1-12,0c0-29.78,27.81-54,62-54S190,66.22,190,96Zm-62,98a14,14,0,1,0,14,14A14,14,0,0,0,128,194Z"/>`
  ],
  [
    "regular",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M192,96c0,28.51-24.47,52.11-56,55.56V160a8,8,0,0,1-16,0V144a8,8,0,0,1,8-8c26.47,0,48-17.94,48-40s-21.53-40-48-40S80,73.94,80,96a8,8,0,0,1-16,0c0-30.88,28.71-56,64-56S192,65.12,192,96Zm-64,96a16,16,0,1,0,16,16A16,16,0,0,0,128,192Z"/>`
  ],
  [
    "bold",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M196,96c0,29.47-24.21,54.05-56,59.06V156a12,12,0,0,1-24,0V144a12,12,0,0,1,12-12c24.26,0,44-16.15,44-36s-19.74-36-44-36S84,76.15,84,96a12,12,0,0,1-24,0c0-33.08,30.5-60,68-60S196,62.92,196,96Zm-68,92a20,20,0,1,0,20,20A20,20,0,0,0,128,188Z"/>`
  ],
  [
    "fill",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM136,143.28V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.23,139.93,136,143.28ZM140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"/>`
  ],
  [
    "duotone",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" opacity="0.2"/><path d="M192,96c0,28.51-24.47,52.11-56,55.56V160a8,8,0,0,1-16,0V144a8,8,0,0,1,8-8c26.47,0,48-17.94,48-40s-21.53-40-48-40S80,73.94,80,96a8,8,0,0,1-16,0c0-30.88,28.71-56,64-56S192,65.12,192,96Zm-64,96a16,16,0,1,0,16,16A16,16,0,0,0,128,192Z"/>`
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
  (0,_node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_custom_element_mjs__WEBPACK_IMPORTED_MODULE_3__/* .customElement */ .E)("ph-question-mark")
], t);



/***/ }

}]);