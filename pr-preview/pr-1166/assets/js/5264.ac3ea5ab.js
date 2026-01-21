"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[5264],{

/***/ 105264
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhPaperPlaneRight: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_reactive_element_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(394687);
/* harmony import */ var _node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76058);
/* harmony import */ var _node_modules_pnpm_lit_element_4_0_6_node_modules_lit_element_lit_element_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(215375);
/* harmony import */ var _node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_custom_element_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3588);
/* harmony import */ var _node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_property_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(431409);
/* harmony import */ var _node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_css_tag_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(111893);






var c = Object.defineProperty, f = Object.getOwnPropertyDescriptor, l = (a, o, i, s) => {
  for (var e = s > 1 ? void 0 : s ? f(o, i) : o, h = a.length - 1, n; h >= 0; h--)
    (n = a[h]) && (e = (s ? n(o, i, e) : n(e)) || e);
  return s && e && c(o, i, e), e;
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
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M229.89,117.43l-168-95.88A12,12,0,0,0,44.7,36l31.08,92L44.71,220A12,12,0,0,0,56,236a12.13,12.13,0,0,0,5.93-1.57l167.94-96.08a12,12,0,0,0,0-20.92Zm-4,14L58,227.47a4,4,0,0,1-5.72-4.83l0-.07L82.87,132H144a4,4,0,0,0,0-8H82.87L52.26,33.37A3.89,3.89,0,0,1,53.44,29,4.13,4.13,0,0,1,56,28a3.88,3.88,0,0,1,1.93.54l168,95.87a4,4,0,0,1,0,7Z"/>`
  ],
  [
    "light",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M230.88,115.69l-168-95.88a14,14,0,0,0-20,16.87L73.66,128,42.81,219.33A14,14,0,0,0,56,238a14.15,14.15,0,0,0,6.93-1.83L230.84,140.1a14,14,0,0,0,0-24.41Zm-5.95,14L57,225.73a2,2,0,0,1-2.86-2.42.42.42,0,0,0,0-.1L84.3,134H144a6,6,0,0,0,0-12H84.3L54.17,32.8a.3.3,0,0,0,0-.1,1.87,1.87,0,0,1,.6-2.2A1.85,1.85,0,0,1,57,30.25l168,95.89a1.93,1.93,0,0,1,1,1.74A2,2,0,0,1,224.93,129.66Z"/>`
  ],
  [
    "regular",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z"/>`
  ],
  [
    "bold",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M233.86,110.48,65.8,14.58A20,20,0,0,0,37.15,38.64L67.33,128,37.15,217.36A20,20,0,0,0,56,244a20.1,20.1,0,0,0,9.81-2.58l.09-.06,168-96.07a20,20,0,0,0,0-34.81ZM63.19,215.26,88.61,140H144a12,12,0,0,0,0-24H88.61L63.18,40.72l152.76,87.17Z"/>`
  ],
  [
    "fill",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M240,127.89a16,16,0,0,1-8.18,14L63.9,237.9A16.15,16.15,0,0,1,56,240a16,16,0,0,1-15-21.33l27-79.95A4,4,0,0,1,71.72,136H144a8,8,0,0,0,8-8.53,8.19,8.19,0,0,0-8.26-7.47h-72a4,4,0,0,1-3.79-2.72l-27-79.94A16,16,0,0,1,63.84,18.07l168,95.89A16,16,0,0,1,240,127.89Z"/>`
  ],
  [
    "duotone",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M227.91,134.86,59.93,231a8,8,0,0,1-11.44-9.67L80,128,48.49,34.72a8,8,0,0,1,11.44-9.67l168,95.85A8,8,0,0,1,227.91,134.86Z" opacity="0.2"/><path d="M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z"/>`
  ]
]);
t.styles = (0,_node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_css_tag_mjs__WEBPACK_IMPORTED_MODULE_5__/* .css */ .AH)`
    :host {
      display: contents;
    }
  `;
l([
  (0,_node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_property_mjs__WEBPACK_IMPORTED_MODULE_4__/* .property */ .M)({ type: String, reflect: !0 })
], t.prototype, "size", 2);
l([
  (0,_node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_property_mjs__WEBPACK_IMPORTED_MODULE_4__/* .property */ .M)({ type: String, reflect: !0 })
], t.prototype, "weight", 2);
l([
  (0,_node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_property_mjs__WEBPACK_IMPORTED_MODULE_4__/* .property */ .M)({ type: String, reflect: !0 })
], t.prototype, "color", 2);
l([
  (0,_node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_property_mjs__WEBPACK_IMPORTED_MODULE_4__/* .property */ .M)({ type: Boolean, reflect: !0 })
], t.prototype, "mirrored", 2);
t = l([
  (0,_node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_custom_element_mjs__WEBPACK_IMPORTED_MODULE_3__/* .customElement */ .E)("ph-paper-plane-right")
], t);



/***/ }

}]);