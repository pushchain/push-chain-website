"use strict";
exports.id = 1634;
exports.ids = [1634];
exports.modules = {

/***/ 3588:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ s)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s = (e) => (t, n) => {
  n !== void 0 ? n.addInitializer(() => {
    customElements.define(e, t);
  }) : customElements.define(e, t);
};



/***/ }),

/***/ 76058:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JW: () => (/* binding */ tt),
/* harmony export */   XX: () => (/* binding */ et),
/* harmony export */   c0: () => (/* binding */ N),
/* harmony export */   qy: () => (/* binding */ Y)
/* harmony export */ });
/* unused harmony export nothing */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y = globalThis, S = y.trustedTypes, I = S ? S.createPolicy("lit-html", { createHTML: (h) => h }) : void 0, W = "$lit$", p = `lit$${Math.random().toFixed(9).slice(2)}$`, k = "?" + p, F = `<${k}>`, v = document, x = () => v.createComment(""), H = (h) => h === null || typeof h != "object" && typeof h != "function", D = Array.isArray, Z = (h) => D(h) || typeof (h == null ? void 0 : h[Symbol.iterator]) == "function", w = `[ 	
\f\r]`, m = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, B = /-->/g, P = />/g, u = RegExp(`>|${w}(?:([^\\s"'>=/]+)(${w}*=${w}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), R = /'/g, U = /"/g, V = /^(?:script|style|textarea|title)$/i, O = (h) => (t, ...e) => ({ _$litType$: h, strings: t, values: e }), Y = O(1), tt = O(2), N = Symbol.for("lit-noChange"), _ = Symbol.for("lit-nothing"), j = /* @__PURE__ */ new WeakMap(), g = v.createTreeWalker(v, 129);
function z(h, t) {
  if (!Array.isArray(h) || !h.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return I !== void 0 ? I.createHTML(t) : t;
}
const q = (h, t) => {
  const e = h.length - 1, s = [];
  let i, o = t === 2 ? "<svg>" : "", n = m;
  for (let A = 0; A < e; A++) {
    const r = h[A];
    let a, $, l = -1, c = 0;
    for (; c < r.length && (n.lastIndex = c, $ = n.exec(r), $ !== null); ) c = n.lastIndex, n === m ? $[1] === "!--" ? n = B : $[1] !== void 0 ? n = P : $[2] !== void 0 ? (V.test($[2]) && (i = RegExp("</" + $[2], "g")), n = u) : $[3] !== void 0 && (n = u) : n === u ? $[0] === ">" ? (n = i != null ? i : m, l = -1) : $[1] === void 0 ? l = -2 : (l = n.lastIndex - $[2].length, a = $[1], n = $[3] === void 0 ? u : $[3] === '"' ? U : R) : n === U || n === R ? n = u : n === B || n === P ? n = m : (n = u, i = void 0);
    const d = n === u && h[A + 1].startsWith("/>") ? " " : "";
    o += n === m ? r + F : l >= 0 ? (s.push(a), r.slice(0, l) + W + r.slice(l) + p + d) : r + p + (l === -2 ? A : d);
  }
  return [z(h, o + (h[e] || "<?>") + (t === 2 ? "</svg>" : "")), s];
};
class T {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let o = 0, n = 0;
    const A = t.length - 1, r = this.parts, [a, $] = q(t, e);
    if (this.el = T.createElement(a, s), g.currentNode = this.el.content, e === 2) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (i = g.nextNode()) !== null && r.length < A; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const l of i.getAttributeNames()) if (l.endsWith(W)) {
          const c = $[n++], d = i.getAttribute(l).split(p), C = /([.?@])?(.*)/.exec(c);
          r.push({ type: 1, index: o, name: C[2], strings: d, ctor: C[1] === "." ? J : C[1] === "?" ? K : C[1] === "@" ? Q : M }), i.removeAttribute(l);
        } else l.startsWith(p) && (r.push({ type: 6, index: o }), i.removeAttribute(l));
        if (V.test(i.tagName)) {
          const l = i.textContent.split(p), c = l.length - 1;
          if (c > 0) {
            i.textContent = S ? S.emptyScript : "";
            for (let d = 0; d < c; d++) i.append(l[d], x()), g.nextNode(), r.push({ type: 2, index: ++o });
            i.append(l[c], x());
          }
        }
      } else if (i.nodeType === 8) if (i.data === k) r.push({ type: 2, index: o });
      else {
        let l = -1;
        for (; (l = i.data.indexOf(p, l + 1)) !== -1; ) r.push({ type: 7, index: o }), l += p.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const s = v.createElement("template");
    return s.innerHTML = t, s;
  }
}
function f(h, t, e = h, s) {
  var n, A, r;
  if (t === N) return t;
  let i = s !== void 0 ? (n = e._$Co) == null ? void 0 : n[s] : e._$Cl;
  const o = H(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== o && ((A = i == null ? void 0 : i._$AO) == null || A.call(i, !1), o === void 0 ? i = void 0 : (i = new o(h), i._$AT(h, e, s)), s !== void 0 ? ((r = e._$Co) != null ? r : e._$Co = [])[s] = i : e._$Cl = i), i !== void 0 && (t = f(h, i._$AS(h, t.values), i, s)), t;
}
class G {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var a;
    const { el: { content: e }, parts: s } = this._$AD, i = ((a = t == null ? void 0 : t.creationScope) != null ? a : v).importNode(e, !0);
    g.currentNode = i;
    let o = g.nextNode(), n = 0, A = 0, r = s[0];
    for (; r !== void 0; ) {
      if (n === r.index) {
        let $;
        r.type === 2 ? $ = new b(o, o.nextSibling, this, t) : r.type === 1 ? $ = new r.ctor(o, r.name, r.strings, this, t) : r.type === 6 && ($ = new X(o, this, t)), this._$AV.push($), r = s[++A];
      }
      n !== (r == null ? void 0 : r.index) && (o = g.nextNode(), n++);
    }
    return g.currentNode = v, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class b {
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) == null ? void 0 : t._$AU) != null ? e : this._$Cv;
  }
  constructor(t, e, s, i) {
    var o;
    this.type = 2, this._$AH = _, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (o = i == null ? void 0 : i.isConnected) != null ? o : !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = f(this, t, e), H(t) ? t === _ || t == null || t === "" ? (this._$AH !== _ && this._$AR(), this._$AH = _) : t !== this._$AH && t !== N && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Z(t) ? this.k(t) : this._(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  _(t) {
    this._$AH !== _ && H(this._$AH) ? this._$AA.nextSibling.data = t : this.T(v.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var o;
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = T.createElement(z(s.h, s.h[0]), this.options)), s);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === i) this._$AH.p(e);
    else {
      const n = new G(i, this), A = n.u(this.options);
      n.p(e), this.T(A), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = j.get(t.strings);
    return e === void 0 && j.set(t.strings, e = new T(t)), e;
  }
  k(t) {
    D(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const o of t) i === e.length ? e.push(s = new b(this.S(x()), this.S(x()), this, this.options)) : s = e[i], s._$AI(o), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class M {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, o) {
    this.type = 1, this._$AH = _, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = _;
  }
  _$AI(t, e = this, s, i) {
    const o = this.strings;
    let n = !1;
    if (o === void 0) t = f(this, t, e, 0), n = !H(t) || t !== this._$AH && t !== N, n && (this._$AH = t);
    else {
      const A = t;
      let r, a;
      for (t = o[0], r = 0; r < o.length - 1; r++) a = f(this, A[s + r], e, r), a === N && (a = this._$AH[r]), n || (n = !H(a) || a !== this._$AH[r]), a === _ ? t = _ : t !== _ && (t += (a != null ? a : "") + o[r + 1]), this._$AH[r] = a;
    }
    n && !i && this.j(t);
  }
  j(t) {
    t === _ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t != null ? t : "");
  }
}
class J extends M {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === _ ? void 0 : t;
  }
}
class K extends M {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== _);
  }
}
class Q extends M {
  constructor(t, e, s, i, o) {
    super(t, e, s, i, o), this.type = 5;
  }
  _$AI(t, e = this) {
    var n;
    if ((t = (n = f(this, t, e, 0)) != null ? n : _) === N) return;
    const s = this._$AH, i = t === _ && s !== _ || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== _ && (s === _ || i);
    i && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (e = this.options) == null ? void 0 : e.host) != null ? s : this.element, t) : this._$AH.handleEvent(t);
  }
}
class X {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    f(this, t);
  }
}
const E = y.litHtmlPolyfillSupport;
var L;
E == null || E(T, b), ((L = y.litHtmlVersions) != null ? L : y.litHtmlVersions = []).push("3.1.4");
const et = (h, t, e) => {
  var o, n;
  const s = (o = e == null ? void 0 : e.renderBefore) != null ? o : t;
  let i = s._$litPart$;
  if (i === void 0) {
    const A = (n = e == null ? void 0 : e.renderBefore) != null ? n : null;
    s._$litPart$ = i = new b(t.insertBefore(x(), A), A, void 0, e != null ? e : {});
  }
  return i._$AI(h), i;
};



/***/ }),

/***/ 111893:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AH: () => (/* binding */ p),
/* harmony export */   Rf: () => (/* binding */ d),
/* harmony export */   sk: () => (/* binding */ y)
/* harmony export */ });
/* unused harmony exports CSSResult, supportsAdoptingStyleSheets, unsafeCSS */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r = globalThis, c = r.ShadowRoot && (r.ShadyCSS === void 0 || r.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, a = Symbol(), i = /* @__PURE__ */ new WeakMap();
class l {
  constructor(s, t, o) {
    if (this._$cssResult$ = !0, o !== a) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = s, this.t = t;
  }
  get styleSheet() {
    let s = this.o;
    const t = this.t;
    if (c && s === void 0) {
      const o = t !== void 0 && t.length === 1;
      o && (s = i.get(t)), s === void 0 && ((this.o = s = new CSSStyleSheet()).replaceSync(this.cssText), o && i.set(t, s));
    }
    return s;
  }
  toString() {
    return this.cssText;
  }
}
const h = (e) => new l(typeof e == "string" ? e : e + "", void 0, a), p = (e, ...s) => {
  const t = e.length === 1 ? e[0] : s.reduce((o, S, u) => o + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(S) + e[u + 1], e[0]);
  return new l(t, e, a);
}, d = (e, s) => {
  if (c) e.adoptedStyleSheets = s.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of s) {
    const o = document.createElement("style"), S = r.litNonce;
    S !== void 0 && o.setAttribute("nonce", S), o.textContent = t.cssText, e.appendChild(o);
  }
}, y = c ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((s) => {
  let t = "";
  for (const o of s.cssRules) t += o.cssText;
  return h(t);
})(e) : e;



/***/ }),

/***/ 215375:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WF: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_2_0_4_node_modules_lit_reactive_element_reactive_element_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(394687);
/* harmony import */ var _lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76058);




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class n extends _lit_reactive_element_2_0_4_node_modules_lit_reactive_element_reactive_element_mjs__WEBPACK_IMPORTED_MODULE_0__/* .ReactiveElement */ .mN {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, r;
    const e = super.createRenderRoot();
    return (r = (t = this.renderOptions).renderBefore) != null || (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = (0,_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .render */ .XX)(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return _lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .noChange */ .c0;
  }
}
var o;
n._$litElement$ = !0, n.finalized = !0, (o = globalThis.litElementHydrateSupport) == null || o.call(globalThis, { LitElement: n });
const s = globalThis.litElementPolyfillSupport;
s == null || s({ LitElement: n });
var i;
((i = globalThis.litElementVersions) != null ? i : globalThis.litElementVersions = []).push("4.0.6");



/***/ }),

/***/ 394687:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ec: () => (/* binding */ y),
/* harmony export */   W3: () => (/* binding */ d),
/* harmony export */   mN: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _css_tag_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111893);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: b, defineProperty: v, getOwnPropertyDescriptor: S, getOwnPropertyNames: U, getOwnPropertySymbols: w, getPrototypeOf: A } = Object, a = globalThis, f = a.trustedTypes, O = f ? f.emptyScript : "", p = a.reactiveElementPolyfillSupport, l = (o, t) => o, d = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? O : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, t) {
  let e = o;
  switch (t) {
    case Boolean:
      e = o !== null;
      break;
    case Number:
      e = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(o);
      } catch (s) {
        e = null;
      }
  }
  return e;
} }, y = (o, t) => !b(o, t), E = { attribute: !0, type: String, converter: d, reflect: !1, hasChanged: y };
var _, $;
(_ = Symbol.metadata) != null || (Symbol.metadata = Symbol("metadata")), ($ = a.litPropertyMetadata) != null || (a.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class c extends HTMLElement {
  static addInitializer(t) {
    var e;
    this._$Ei(), ((e = this.l) != null ? e : this.l = []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = E) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && v(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    var r;
    const { get: i, set: n } = (r = S(this.prototype, t)) != null ? r : { get() {
      return this[e];
    }, set(h) {
      this[e] = h;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(h) {
      const g = i == null ? void 0 : i.call(this);
      n.call(this, h), this.requestUpdate(t, g, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    var e;
    return (e = this.elementProperties.get(t)) != null ? e : E;
  }
  static _$Ei() {
    if (this.hasOwnProperty(l("elementProperties"))) return;
    const t = A(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(l("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(l("properties"))) {
      const e = this.properties, s = [...U(e), ...w(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift((0,_css_tag_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getCompatibleStyle */ .sk)(i));
    } else t !== void 0 && e.push((0,_css_tag_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getCompatibleStyle */ .sk)(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e, s;
    ((e = this._$EO) != null ? e : this._$EO = /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && ((s = t.hostConnected) == null || s.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    var e;
    const t = (e = this.shadowRoot) != null ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return (0,_css_tag_mjs__WEBPACK_IMPORTED_MODULE_0__/* .adoptStyles */ .Rf)(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t, e;
    (t = this.renderRoot) != null || (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostConnected) == null ? void 0 : i.call(s);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EC(t, e) {
    var n;
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const r = (((n = s.converter) == null ? void 0 : n.toAttribute) !== void 0 ? s.converter : d).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(i) : this.setAttribute(i, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var n;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const r = s.getPropertyOptions(i), h = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((n = r.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? r.converter : d;
      this._$Em = i, this[i] = h.fromAttribute(e, r.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    var i;
    if (t !== void 0) {
      if (s != null || (s = this.constructor.getPropertyOptions(t)), !((i = s.hasChanged) != null ? i : y)(this[t], e)) return;
      this.P(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, s) {
    var i;
    this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$Em !== t && ((i = this._$Ej) != null ? i : this._$Ej = /* @__PURE__ */ new Set()).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s, i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if ((s = this.renderRoot) != null || (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, h] of this._$Ep) this[r] = h;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [r, h] of n) h.wrapped !== !0 || this._$AL.has(r) || this[r] === void 0 || this.P(r, this[r], h);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (i = this._$EO) == null || i.forEach((n) => {
        var r;
        return (r = n.hostUpdate) == null ? void 0 : r.call(n);
      }), this.update(e)) : this._$EU();
    } catch (n) {
      throw t = !1, this._$EU(), n;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
var m;
c.elementStyles = [], c.shadowRootOptions = { mode: "open" }, c[l("elementProperties")] = /* @__PURE__ */ new Map(), c[l("finalized")] = /* @__PURE__ */ new Map(), p == null || p({ ReactiveElement: c }), ((m = a.reactiveElementVersions) != null ? m : a.reactiveElementVersions = []).push("2.0.4");



/***/ }),

/***/ 431409:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ O)
/* harmony export */ });
/* unused harmony export standardProperty */
/* harmony import */ var _reactive_element_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(394687);
var h = Object.defineProperty, f = Object.defineProperties;
var y = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var d = (e, t, r) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, l = (e, t) => {
  for (var r in t || (t = {}))
    g.call(t, r) && d(e, r, t[r]);
  if (p)
    for (var r of p(t))
      P.call(t, r) && d(e, r, t[r]);
  return e;
}, u = (e, t) => f(e, y(t));

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const b = { attribute: !0, type: String, converter: _reactive_element_mjs__WEBPACK_IMPORTED_MODULE_0__/* .defaultConverter */ .W3, reflect: !1, hasChanged: _reactive_element_mjs__WEBPACK_IMPORTED_MODULE_0__/* .notEqual */ .Ec }, w = (e = b, t, r) => {
  const { kind: n, metadata: s } = r;
  let a = globalThis.litPropertyMetadata.get(s);
  if (a === void 0 && globalThis.litPropertyMetadata.set(s, a = /* @__PURE__ */ new Map()), a.set(r.name, e), n === "accessor") {
    const { name: o } = r;
    return { set(i) {
      const c = t.get.call(this);
      t.set.call(this, i), this.requestUpdate(o, c, e);
    }, init(i) {
      return i !== void 0 && this.P(o, void 0, e), i;
    } };
  }
  if (n === "setter") {
    const { name: o } = r;
    return function(i) {
      const c = this[o];
      t.call(this, i), this.requestUpdate(o, c, e);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function O(e) {
  return (t, r) => typeof r == "object" ? w(e, t, r) : ((n, s, a) => {
    const o = s.hasOwnProperty(a);
    return s.constructor.createProperty(a, o ? u(l({}, n), { wrapped: !0 }) : n), o ? Object.getOwnPropertyDescriptor(s, a) : void 0;
  })(e, t, r);
}



/***/ }),

/***/ 601634:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhPlus: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_reactive_element_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(394687);
/* harmony import */ var _node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76058);
/* harmony import */ var _node_modules_pnpm_lit_element_4_0_6_node_modules_lit_element_lit_element_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(215375);
/* harmony import */ var _node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_custom_element_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3588);
/* harmony import */ var _node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_property_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(431409);
/* harmony import */ var _node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_css_tag_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(111893);






var c = Object.defineProperty, f = Object.getOwnPropertyDescriptor, s = (a, o, i, h) => {
  for (var r = h > 1 ? void 0 : h ? f(o, i) : o, l = a.length - 1, n; l >= 0; l--)
    (n = a[l]) && (r = (h ? n(o, i, r) : n(r)) || r);
  return h && r && c(o, i, r), r;
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
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"/>`
  ],
  [
    "light",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"/>`
  ],
  [
    "regular",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"/>`
  ],
  [
    "bold",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"/>`
  ],
  [
    "fill",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"/>`
  ],
  [
    "duotone",
    (0,_node_modules_pnpm_lit_html_3_1_4_node_modules_lit_html_lit_html_mjs__WEBPACK_IMPORTED_MODULE_1__/* .svg */ .JW)`<path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2"/><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"/>`
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
  (0,_node_modules_pnpm_lit_reactive_element_2_0_4_node_modules_lit_reactive_element_decorators_custom_element_mjs__WEBPACK_IMPORTED_MODULE_3__/* .customElement */ .E)("ph-plus")
], t);



/***/ })

};
;