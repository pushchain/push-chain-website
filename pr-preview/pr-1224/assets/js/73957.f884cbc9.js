"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[73957],{

/***/ 430228
(module) {



var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ },

/***/ 950172
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XX: () => (/* binding */ B),
/* harmony export */   fF: () => (/* binding */ l),
/* harmony export */   h: () => (/* binding */ _),
/* harmony export */   n: () => (/* binding */ _)
/* harmony export */ });
/* unused harmony exports Component, Fragment, cloneElement, createContext, createRef, hydrate, isValidElement, toChildArray */
var n,l,u,t,i,o,r,f,e,c,s,a,h={},v=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y=Array.isArray;function d(n,l){for(var u in l)n[u]=l[u];return n}function w(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function _(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g(l,f,i,o,null)}function g(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u:r,__i:-1,__u:0};return null==r&&null!=l.vnode&&l.vnode(f),f}function m(){return{current:null}}function b(n){return n.children}function k(n,l){this.props=n,this.context=l}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?x(n):null}function C(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!P.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(P)}function P(){var n,u,t,o,r,e,c,s;for(i.sort(f);n=i.shift();)n.__d&&(u=i.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d({},r)).__v=r.__v+1,l.vnode&&l.vnode(o),O(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j(c,o,s),o.__e!=e&&C(o)),i.length>u&&i.sort(f));P.__r=0}function S(n,l,u,t,i,o,r,f,e,c,s){var a,p,y,d,w,_=t&&t.__k||v,g=l.length;for(u.__d=e,$(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&(p=-1===y.__i?h:_[y.__i]||h,y.__i=a,O(n,y,p,i,o,r,f,e,c,s),d=y.__e,y.ref&&p.ref!=y.ref&&(p.ref&&N(p.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||p.__k===y.__k?e=I(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w}function $(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)null!=(i=l[t])&&"boolean"!=typeof i&&"function"!=typeof i?(r=t+a,(i=n.__k[t]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g(null,i,null,null,null):y(i)?g(b,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=n,i.__b=n.__b+1,o=null,-1!==(f=i.__i=L(i,u,r,s))&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f==r-1?a--:f==r+1?a++:(f>r?a--:a++,i.__u|=65536))):i=n.__k[t]=null;if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o))}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=x(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8===l.nodeType);return l}function H(n,l){return l=l||[],null==n||"boolean"==typeof n||(y(n)?n.some(function(n){H(n,l)}):l.push(n)),l}function L(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++}}return-1}function T(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||p.test(l)?u:u+"px"}function A(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e,n.addEventListener(l,o?s:c,o)):n.removeEventListener(l,o?s:c,o);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u))}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e++;else if(u.t<t.u)return;return t(l.event?l.event(u):u)}}}function O(n,u,t,i,o,r,f,e,c,s){var a,h,v,p,w,_,g,m,x,C,M,P,$,I,H,L,T=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l.__b)&&a(u);n:if("function"==typeof T)try{if(m=u.props,x="prototype"in T&&T.prototype.render,C=(a=T.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:(x?u.__c=h=new T(m,M):(u.__c=h=new k(m,M),h.constructor=T,h.render=q),C&&C.sub(h),h.props=m,h.state||(h.state={}),h.context=M,h.__n=i,v=h.__d=!0,h.__h=[],h._sb=[]),x&&null==h.__s&&(h.__s=h.state),x&&null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,T.getDerivedStateFromProps(m,h.__s))),p=h.props,w=h.state,h.__v=u,v)x&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),x&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(x&&null==T.getDerivedStateFromProps&&m!==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,M)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u)}),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,M),x&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(p,w,_)})}if(h.context=M,h.props=m,h.__P=n,h.__e=!1,$=l.__r,I=0,x){for(h.state=h.__s,h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++I<25);h.state=h.__s,null!=h.getChildContext&&(i=d(d({},i),h.getChildContext())),x&&!v&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(p,w)),S(n,y(L=null!=a&&a.type===b&&null==a.key?a.props.children:a)?L:[L],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null)}catch(n){if(u.__v=null,c||null!=r){for(u.__u|=c?160:32;e&&8===e.nodeType&&e.nextSibling;)e=e.nextSibling;r[r.indexOf(e)]=null,u.__e=e}else u.__e=t.__e,u.__k=t.__k;l.__e(n,u,t)}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z(t.__e,u,t,i,o,r,f,c,s);(a=l.diffed)&&a(u)}function j(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function z(u,t,i,o,r,f,e,c,s){var a,v,p,d,_,g,m,b=i.props,k=t.props,C=t.type;if("svg"===C?r="http://www.w3.org/2000/svg":"math"===C?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),null!=f)for(a=0;a<f.length;a++)if((_=f[a])&&"setAttribute"in _==!!C&&(C?_.localName===C:3===_.nodeType)){u=_,f[a]=null;break}if(null==u){if(null===C)return document.createTextNode(k);u=document.createElementNS(r,C,k.is&&k),c&&(l.__m&&l.__m(t,f),c=!1),f=null}if(null===C)b===k||c&&u.data===k||(u.data=k);else{if(f=f&&n.call(u.childNodes),b=i.props||h,!c&&null!=f)for(b={},a=0;a<u.attributes.length;a++)b[(_=u.attributes[a]).name]=_.value;for(a in b)if(_=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)p=_;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;A(u,a,null,_,r)}for(a in k)_=k[a],"children"==a?d=_:"dangerouslySetInnerHTML"==a?v=_:"value"==a?g=_:"checked"==a?m=_:c&&"function"!=typeof _||b[a]===_||A(u,a,_,b[a],r);if(v)c||p&&(v.__html===p.__html||v.__html===u.innerHTML)||(u.innerHTML=v.__html),t.__k=[];else if(p&&(u.innerHTML=""),S(u,y(d)?d:[d],t,i,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":r,f,e,f?f[0]:i.__k&&x(i,0),c,s),null!=f)for(a=f.length;a--;)w(f[a]);c||(a="value","progress"===C&&null==g?u.removeAttribute("value"):void 0!==g&&(g!==u[a]||"progress"===C&&!g||"option"===C&&g!==b[a])&&A(u,a,g,b[a],r),a="checked",void 0!==m&&m!==u[a]&&A(u,a,m,b[a],r))}return u}function N(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u))}else n.current=u}catch(n){l.__e(n,t)}}function V(n,u,t){var i,o;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,u)}i.base=i.__P=null}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],u,t||"function"!=typeof n.type);t||w(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function q(n,l,u){return this.constructor(n,u)}function B(u,t,i){var o,r,f,e;l.__&&l.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],O(t,u=(!o&&i||t).__k=_(b,null,[u]),r||h,h,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j(f,u,e)}function D(n,l){B(n,l,D)}function E(l,u,t){var i,o,r,f,e=d({},l.props);for(r in l.type&&l.type.defaultProps&&(f=l.type.defaultProps),u)"key"==r?i=u[r]:"ref"==r?o=u[r]:e[r]=void 0===u[r]&&void 0!==f?f[r]:u[r];return arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),g(l.type,e,i||l.key,o||l.ref,null)}function G(n,l){var u={__c:l="__cC"+a++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,M(n)})},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=v.slice,l={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l}throw n}},u=0,t=function(n){return null!=n&&null==n.constructor},k.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof n&&(n=n(d({},u),this.props)),n&&d(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this))},k.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this))},k.prototype.render=b,i=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},P.__r=0,e=0,c=F(!1),s=F(!0),a=0;
//# sourceMappingURL=preact.module.js.map


/***/ },

/***/ 45994
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J0: () => (/* binding */ h),
/* harmony export */   Kr: () => (/* binding */ T),
/* harmony export */   vJ: () => (/* binding */ y)
/* harmony export */ });
/* unused harmony exports useCallback, useContext, useDebugValue, useErrorBoundary, useId, useImperativeHandle, useLayoutEffect, useReducer, useRef */
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(950172);
var t,r,u,i,o=0,f=[],c=preact__WEBPACK_IMPORTED_MODULE_0__/* .options */ .fF,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function d(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function h(n){return o=1,p(D,n)}function p(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return!!n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u}e&&e.call(this,n,t,r)},r.shouldComponentUpdate=f}return o.__N||o.__}function y(n,u){var i=d(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i))}function _(n,u){var i=d(t++,4);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__h.push(i))}function A(n){return o=5,T(function(){return{current:n}},[])}function F(n,t,r){o=6,_(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n))}function T(n,r){var u=d(t++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q(n,t){return o=8,T(function(){return n},t)}function x(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function P(n,t){c.useDebugValue&&c.useDebugValue(t?t(n):n)}function b(n){var u=d(t++,10),i=h();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function g(){var n=d(t++,11);if(!n.__){for(var u=r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[]}catch(t){n.__H.__h=[],c.__e(t,n.__v)}}c.__b=function(n){r=null,e&&e(n)},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t)},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),u=r=null},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return!n.__||B(n)})}catch(r){t.some(function(n){n.__h&&(n.__h=[])}),t=[],c.__e(r,n.__v)}}),l&&l(n,t)},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n)}catch(n){t=n}}),r.__H=void 0,t&&c.__e(t,r.__v))};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r))}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function B(n){var t=r;n.__c=n.__(),r=t}function C(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ },

/***/ 974486
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* reexport default export from named module */ _index_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* unused harmony import specifier */ var EventEmitter;
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(430228);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (EventEmitter)));


/***/ },

/***/ 274756
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ toSmartAccount)
});

// EXTERNAL MODULE: ./node_modules/viem/node_modules/abitype/dist/esm/human-readable/parseAbi.js + 11 modules
var parseAbi = __webpack_require__(905657);
// EXTERNAL MODULE: ./node_modules/viem/_esm/actions/public/getCode.js
var getCode = __webpack_require__(67309);
// EXTERNAL MODULE: ./node_modules/viem/_esm/actions/public/readContract.js
var readContract = __webpack_require__(426724);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/getAction.js
var getAction = __webpack_require__(863692);
// EXTERNAL MODULE: ./node_modules/viem/_esm/actions/public/getTransactionCount.js
var getTransactionCount = __webpack_require__(167755);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/lru.js
var lru = __webpack_require__(676447);
;// ./node_modules/viem/_esm/utils/nonceManager.js


/**
 * Creates a nonce manager for auto-incrementing transaction nonces.
 *
 * - Docs: https://viem.sh/docs/accounts/createNonceManager
 *
 * @example
 * ```ts
 * const nonceManager = createNonceManager({
 *   source: jsonRpc(),
 * })
 * ```
 */
function createNonceManager(parameters) {
    const { source } = parameters;
    const deltaMap = new Map();
    const nonceMap = new lru/* LruMap */.A(8192);
    const promiseMap = new Map();
    const getKey = ({ address, chainId }) => `${address}.${chainId}`;
    const resetCache = (key) => {
        deltaMap.delete(key);
        promiseMap.delete(key);
    };
    return {
        async consume({ address, chainId, client }) {
            const key = getKey({ address, chainId });
            const promise = this.get({ address, chainId, client });
            this.increment({ address, chainId });
            const nonce = await promise;
            await source.set({ address, chainId }, nonce);
            nonceMap.set(key, nonce);
            return nonce;
        },
        async increment({ address, chainId }) {
            const key = getKey({ address, chainId });
            const delta = deltaMap.get(key) ?? 0;
            deltaMap.set(key, delta + 1);
        },
        async get({ address, chainId, client }) {
            const key = getKey({ address, chainId });
            let promise = promiseMap.get(key);
            if (!promise) {
                promise = (async () => {
                    try {
                        const nonce = await source.get({ address, chainId, client });
                        const previousNonce = nonceMap.get(key) ?? 0;
                        if (previousNonce > 0 && nonce <= previousNonce)
                            return previousNonce + 1;
                        nonceMap.delete(key);
                        return nonce;
                    }
                    finally {
                        resetCache(key);
                    }
                })();
                promiseMap.set(key, promise);
            }
            const delta = deltaMap.get(key) ?? 0;
            return delta + (await promise);
        },
        reset({ address, chainId }) {
            const key = getKey({ address, chainId });
            nonceMap.delete(key);
            resetCache(key);
        },
    };
}
/** JSON-RPC source for a nonce manager. */
function jsonRpc() {
    return {
        async get(parameters) {
            const { address, client } = parameters;
            return (0,getTransactionCount/* getTransactionCount */.y)(client, {
                address,
                blockTag: 'pending',
            });
        },
        set() { },
    };
}
////////////////////////////////////////////////////////////////////////////////////////////
// Default
/** Default Nonce Manager with a JSON-RPC source. */
const nonceManager = /*#__PURE__*/ createNonceManager({
    source: jsonRpc(),
});
//# sourceMappingURL=nonceManager.js.map
;// ./node_modules/viem/_esm/constants/bytes.js
const erc6492MagicBytes = '0x6492649264926492649264926492649264926492649264926492649264926492';
const zeroHash = '0x0000000000000000000000000000000000000000000000000000000000000000';
//# sourceMappingURL=bytes.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
var encodeAbiParameters = __webpack_require__(794531);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/concat.js
var concat = __webpack_require__(825419);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toBytes.js
var toBytes = __webpack_require__(644706);
;// ./node_modules/viem/_esm/utils/signature/serializeErc6492Signature.js




/**
 * @description Serializes a ERC-6492 flavoured signature into hex format.
 *
 * @param signature ERC-6492 signature in object format.
 * @returns ERC-6492 signature in hex format.
 *
 * @example
 * serializeSignature({ address: '0x...', data: '0x...', signature: '0x...' })
 * // '0x000000000000000000000000cafebabecafebabecafebabecafebabecafebabe000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000004deadbeef000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041a461f509887bd19e312c0c58467ce8ff8e300d3c1a90b608a760c5b80318eaf15fe57c96f9175d6cd4daad4663763baa7e78836e067d0163e9a2ccf2ff753f5b1b000000000000000000000000000000000000000000000000000000000000006492649264926492649264926492649264926492649264926492649264926492'
 */
function serializeErc6492Signature(parameters) {
    const { address, data, signature, to = 'hex' } = parameters;
    const signature_ = (0,concat/* concatHex */.aP)([
        (0,encodeAbiParameters/* encodeAbiParameters */.h)([{ type: 'address' }, { type: 'bytes' }, { type: 'bytes' }], [address, data, signature]),
        erc6492MagicBytes,
    ]);
    if (to === 'hex')
        return signature_;
    return (0,toBytes/* hexToBytes */.aT)(signature_);
}
//# sourceMappingURL=serializeErc6492Signature.js.map
;// ./node_modules/viem/_esm/account-abstraction/accounts/toSmartAccount.js






/**
 * @description Creates a Smart Account with a provided account implementation.
 *
 * @param parameters - {@link ToSmartAccountParameters}
 * @returns A Smart Account. {@link ToSmartAccountReturnType}
 */
async function toSmartAccount(implementation) {
    const { extend, nonceKeyManager = createNonceManager({
        source: {
            get() {
                return Date.now();
            },
            set() { },
        },
    }), ...rest } = implementation;
    let deployed = false;
    const address = await implementation.getAddress();
    return {
        ...extend,
        ...rest,
        address,
        async getFactoryArgs() {
            if ('isDeployed' in this && (await this.isDeployed()))
                return { factory: undefined, factoryData: undefined };
            return implementation.getFactoryArgs();
        },
        async getNonce(parameters) {
            const key = parameters?.key ??
                BigInt(await nonceKeyManager.consume({
                    address,
                    chainId: implementation.client.chain.id,
                    client: implementation.client,
                }));
            if (implementation.getNonce)
                return await implementation.getNonce({ ...parameters, key });
            const nonce = await (0,readContract/* readContract */.J)(implementation.client, {
                abi: (0,parseAbi/* parseAbi */.U)([
                    'function getNonce(address, uint192) pure returns (uint256)',
                ]),
                address: implementation.entryPoint.address,
                functionName: 'getNonce',
                args: [address, key],
            });
            return nonce;
        },
        async isDeployed() {
            if (deployed)
                return true;
            const code = await (0,getAction/* getAction */.T)(implementation.client, getCode/* getCode */.Q, 'getCode')({
                address,
            });
            deployed = Boolean(code);
            return deployed;
        },
        ...(implementation.sign
            ? {
                async sign(parameters) {
                    const [{ factory, factoryData }, signature] = await Promise.all([
                        this.getFactoryArgs(),
                        implementation.sign(parameters),
                    ]);
                    if (factory && factoryData)
                        return serializeErc6492Signature({
                            address: factory,
                            data: factoryData,
                            signature,
                        });
                    return signature;
                },
            }
            : {}),
        async signMessage(parameters) {
            const [{ factory, factoryData }, signature] = await Promise.all([
                this.getFactoryArgs(),
                implementation.signMessage(parameters),
            ]);
            if (factory && factoryData && factory !== '0x7702')
                return serializeErc6492Signature({
                    address: factory,
                    data: factoryData,
                    signature,
                });
            return signature;
        },
        async signTypedData(parameters) {
            const [{ factory, factoryData }, signature] = await Promise.all([
                this.getFactoryArgs(),
                implementation.signTypedData(parameters),
            ]);
            if (factory && factoryData && factory !== '0x7702')
                return serializeErc6492Signature({
                    address: factory,
                    data: factoryData,
                    signature,
                });
            return signature;
        },
        type: 'smart',
    };
}
//# sourceMappingURL=toSmartAccount.js.map

/***/ },

/***/ 380032
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ createBundlerClient)
});

// EXTERNAL MODULE: ./node_modules/viem/_esm/clients/createClient.js
var createClient = __webpack_require__(492864);
// EXTERNAL MODULE: ./node_modules/viem/_esm/actions/public/getChainId.js
var public_getChainId = __webpack_require__(509798);
// EXTERNAL MODULE: ./node_modules/viem/_esm/accounts/utils/parseAccount.js
var parseAccount = __webpack_require__(413033);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/account.js
var errors_account = __webpack_require__(544337);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/getAction.js
var getAction = __webpack_require__(863692);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/stateOverride.js
var utils_stateOverride = __webpack_require__(865547);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/base.js + 1 modules
var base = __webpack_require__(345765);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/contract.js + 1 modules
var contract = __webpack_require__(453513);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/decodeErrorResult.js
var decodeErrorResult = __webpack_require__(815462);
;// ./node_modules/viem/_esm/account-abstraction/errors/bundler.js

class AccountNotDeployedError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('Smart Account is not deployed.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- No `factory`/`factoryData` or `initCode` properties are provided for Smart Account deployment.',
                '- An incorrect `sender` address is provided.',
            ],
            name: 'AccountNotDeployedError',
        });
    }
}
Object.defineProperty(AccountNotDeployedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa20/
});
class ExecutionRevertedError extends base/* BaseError */.C {
    constructor({ cause, data, message, } = {}) {
        const reason = message
            ?.replace('execution reverted: ', '')
            ?.replace('execution reverted', '');
        super(`Execution reverted ${reason ? `with reason: ${reason}` : 'for an unknown reason'}.`, {
            cause,
            name: 'ExecutionRevertedError',
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
}
Object.defineProperty(ExecutionRevertedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32521
});
Object.defineProperty(ExecutionRevertedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /execution reverted/
});
class FailedToSendToBeneficiaryError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('Failed to send funds to beneficiary.', {
            cause,
            name: 'FailedToSendToBeneficiaryError',
        });
    }
}
Object.defineProperty(FailedToSendToBeneficiaryError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa91/
});
class GasValuesOverflowError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('Gas value overflowed.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- one of the gas values exceeded 2**120 (uint120)',
            ].filter(Boolean),
            name: 'GasValuesOverflowError',
        });
    }
}
Object.defineProperty(GasValuesOverflowError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa94/
});
class HandleOpsOutOfGasError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('The `handleOps` function was called by the Bundler with a gas limit too low.', {
            cause,
            name: 'HandleOpsOutOfGasError',
        });
    }
}
Object.defineProperty(HandleOpsOutOfGasError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa95/
});
class InitCodeFailedError extends base/* BaseError */.C {
    constructor({ cause, factory, factoryData, initCode, }) {
        super('Failed to simulate deployment for Smart Account.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- Invalid `factory`/`factoryData` or `initCode` properties are present',
                '- Smart Account deployment execution ran out of gas (low `verificationGasLimit` value)',
                '- Smart Account deployment execution reverted with an error\n',
                factory && `factory: ${factory}`,
                factoryData && `factoryData: ${factoryData}`,
                initCode && `initCode: ${initCode}`,
            ].filter(Boolean),
            name: 'InitCodeFailedError',
        });
    }
}
Object.defineProperty(InitCodeFailedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa13/
});
class InitCodeMustCreateSenderError extends base/* BaseError */.C {
    constructor({ cause, factory, factoryData, initCode, }) {
        super('Smart Account initialization implementation did not create an account.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- `factory`/`factoryData` or `initCode` properties are invalid',
                '- Smart Account initialization implementation is incorrect\n',
                factory && `factory: ${factory}`,
                factoryData && `factoryData: ${factoryData}`,
                initCode && `initCode: ${initCode}`,
            ].filter(Boolean),
            name: 'InitCodeMustCreateSenderError',
        });
    }
}
Object.defineProperty(InitCodeMustCreateSenderError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa15/
});
class InitCodeMustReturnSenderError extends base/* BaseError */.C {
    constructor({ cause, factory, factoryData, initCode, sender, }) {
        super('Smart Account initialization implementation does not return the expected sender.', {
            cause,
            metaMessages: [
                'This could arise when:',
                'Smart Account initialization implementation does not return a sender address\n',
                factory && `factory: ${factory}`,
                factoryData && `factoryData: ${factoryData}`,
                initCode && `initCode: ${initCode}`,
                sender && `sender: ${sender}`,
            ].filter(Boolean),
            name: 'InitCodeMustReturnSenderError',
        });
    }
}
Object.defineProperty(InitCodeMustReturnSenderError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa14/
});
class InsufficientPrefundError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('Smart Account does not have sufficient funds to execute the User Operation.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the Smart Account does not have sufficient funds to cover the required prefund, or',
                '- a Paymaster was not provided',
            ].filter(Boolean),
            name: 'InsufficientPrefundError',
        });
    }
}
Object.defineProperty(InsufficientPrefundError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa21/
});
class InternalCallOnlyError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('Bundler attempted to call an invalid function on the EntryPoint.', {
            cause,
            name: 'InternalCallOnlyError',
        });
    }
}
Object.defineProperty(InternalCallOnlyError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa92/
});
class InvalidAggregatorError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('Bundler used an invalid aggregator for handling aggregated User Operations.', {
            cause,
            name: 'InvalidAggregatorError',
        });
    }
}
Object.defineProperty(InvalidAggregatorError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa96/
});
class InvalidAccountNonceError extends base/* BaseError */.C {
    constructor({ cause, nonce, }) {
        super('Invalid Smart Account nonce used for User Operation.', {
            cause,
            metaMessages: [nonce && `nonce: ${nonce}`].filter(Boolean),
            name: 'InvalidAccountNonceError',
        });
    }
}
Object.defineProperty(InvalidAccountNonceError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa25/
});
class InvalidBeneficiaryError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('Bundler has not set a beneficiary address.', {
            cause,
            name: 'InvalidBeneficiaryError',
        });
    }
}
Object.defineProperty(InvalidBeneficiaryError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa90/
});
class InvalidFieldsError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('Invalid fields set on User Operation.', {
            cause,
            name: 'InvalidFieldsError',
        });
    }
}
Object.defineProperty(InvalidFieldsError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32602
});
class InvalidPaymasterAndDataError extends base/* BaseError */.C {
    constructor({ cause, paymasterAndData, }) {
        super('Paymaster properties provided are invalid.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `paymasterAndData` property is of an incorrect length\n',
                paymasterAndData && `paymasterAndData: ${paymasterAndData}`,
            ].filter(Boolean),
            name: 'InvalidPaymasterAndDataError',
        });
    }
}
Object.defineProperty(InvalidPaymasterAndDataError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa93/
});
class PaymasterDepositTooLowError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('Paymaster deposit for the User Operation is too low.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the Paymaster has deposited less than the expected amount via the `deposit` function',
            ].filter(Boolean),
            name: 'PaymasterDepositTooLowError',
        });
    }
}
Object.defineProperty(PaymasterDepositTooLowError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32508
});
Object.defineProperty(PaymasterDepositTooLowError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa31/
});
class PaymasterFunctionRevertedError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('The `validatePaymasterUserOp` function on the Paymaster reverted.', {
            cause,
            name: 'PaymasterFunctionRevertedError',
        });
    }
}
Object.defineProperty(PaymasterFunctionRevertedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa33/
});
class PaymasterNotDeployedError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('The Paymaster contract has not been deployed.', {
            cause,
            name: 'PaymasterNotDeployedError',
        });
    }
}
Object.defineProperty(PaymasterNotDeployedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa30/
});
class PaymasterRateLimitError extends base/* BaseError */.C {
    constructor({ cause }) {
        super('UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.', {
            cause,
            name: 'PaymasterRateLimitError',
        });
    }
}
Object.defineProperty(PaymasterRateLimitError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32504
});
class PaymasterStakeTooLowError extends base/* BaseError */.C {
    constructor({ cause }) {
        super('UserOperation rejected because paymaster (or signature aggregator) stake or unstake-delay is too low.', {
            cause,
            name: 'PaymasterStakeTooLowError',
        });
    }
}
Object.defineProperty(PaymasterStakeTooLowError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32505
});
class PaymasterPostOpFunctionRevertedError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('Paymaster `postOp` function reverted.', {
            cause,
            name: 'PaymasterPostOpFunctionRevertedError',
        });
    }
}
Object.defineProperty(PaymasterPostOpFunctionRevertedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa50/
});
class SenderAlreadyConstructedError extends base/* BaseError */.C {
    constructor({ cause, factory, factoryData, initCode, }) {
        super('Smart Account has already been deployed.', {
            cause,
            metaMessages: [
                'Remove the following properties and try again:',
                factory && '`factory`',
                factoryData && '`factoryData`',
                initCode && '`initCode`',
            ].filter(Boolean),
            name: 'SenderAlreadyConstructedError',
        });
    }
}
Object.defineProperty(SenderAlreadyConstructedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa10/
});
class SignatureCheckFailedError extends base/* BaseError */.C {
    constructor({ cause }) {
        super('UserOperation rejected because account signature check failed (or paymaster signature, if the paymaster uses its data as signature).', {
            cause,
            name: 'SignatureCheckFailedError',
        });
    }
}
Object.defineProperty(SignatureCheckFailedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32507
});
class SmartAccountFunctionRevertedError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('The `validateUserOp` function on the Smart Account reverted.', {
            cause,
            name: 'SmartAccountFunctionRevertedError',
        });
    }
}
Object.defineProperty(SmartAccountFunctionRevertedError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa23/
});
class UnsupportedSignatureAggregatorError extends base/* BaseError */.C {
    constructor({ cause }) {
        super('UserOperation rejected because account specified unsupported signature aggregator.', {
            cause,
            name: 'UnsupportedSignatureAggregatorError',
        });
    }
}
Object.defineProperty(UnsupportedSignatureAggregatorError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32506
});
class UserOperationExpiredError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('User Operation expired.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `validAfter` or `validUntil` values returned from `validateUserOp` on the Smart Account are not satisfied',
            ].filter(Boolean),
            name: 'UserOperationExpiredError',
        });
    }
}
Object.defineProperty(UserOperationExpiredError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa22/
});
class UserOperationPaymasterExpiredError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('Paymaster for User Operation expired.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `validAfter` or `validUntil` values returned from `validatePaymasterUserOp` on the Paymaster are not satisfied',
            ].filter(Boolean),
            name: 'UserOperationPaymasterExpiredError',
        });
    }
}
Object.defineProperty(UserOperationPaymasterExpiredError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa32/
});
class UserOperationSignatureError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('Signature provided for the User Operation is invalid.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Smart Account',
            ].filter(Boolean),
            name: 'UserOperationSignatureError',
        });
    }
}
Object.defineProperty(UserOperationSignatureError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa24/
});
class UserOperationPaymasterSignatureError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('Signature provided for the User Operation is invalid.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Paymaster',
            ].filter(Boolean),
            name: 'UserOperationPaymasterSignatureError',
        });
    }
}
Object.defineProperty(UserOperationPaymasterSignatureError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa34/
});
class UserOperationRejectedByEntryPointError extends base/* BaseError */.C {
    constructor({ cause }) {
        super("User Operation rejected by EntryPoint's `simulateValidation` during account creation or validation.", {
            cause,
            name: 'UserOperationRejectedByEntryPointError',
        });
    }
}
Object.defineProperty(UserOperationRejectedByEntryPointError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32500
});
class UserOperationRejectedByPaymasterError extends base/* BaseError */.C {
    constructor({ cause }) {
        super("User Operation rejected by Paymaster's `validatePaymasterUserOp`.", {
            cause,
            name: 'UserOperationRejectedByPaymasterError',
        });
    }
}
Object.defineProperty(UserOperationRejectedByPaymasterError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32501
});
class UserOperationRejectedByOpCodeError extends base/* BaseError */.C {
    constructor({ cause }) {
        super('User Operation rejected with op code validation error.', {
            cause,
            name: 'UserOperationRejectedByOpCodeError',
        });
    }
}
Object.defineProperty(UserOperationRejectedByOpCodeError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32502
});
class UserOperationOutOfTimeRangeError extends base/* BaseError */.C {
    constructor({ cause }) {
        super('UserOperation out of time-range: either wallet or paymaster returned a time-range, and it is already expired (or will expire soon).', {
            cause,
            name: 'UserOperationOutOfTimeRangeError',
        });
    }
}
Object.defineProperty(UserOperationOutOfTimeRangeError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32503
});
class UnknownBundlerError extends base/* BaseError */.C {
    constructor({ cause }) {
        super(`An error occurred while executing user operation: ${cause?.shortMessage}`, {
            cause,
            name: 'UnknownBundlerError',
        });
    }
}
class VerificationGasLimitExceededError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('User Operation verification gas limit exceeded.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the gas used for verification exceeded the `verificationGasLimit`',
            ].filter(Boolean),
            name: 'VerificationGasLimitExceededError',
        });
    }
}
Object.defineProperty(VerificationGasLimitExceededError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa40/
});
class VerificationGasLimitTooLowError extends base/* BaseError */.C {
    constructor({ cause, }) {
        super('User Operation verification gas limit is too low.', {
            cause,
            metaMessages: [
                'This could arise when:',
                '- the `verificationGasLimit` is too low to verify the User Operation',
            ].filter(Boolean),
            name: 'VerificationGasLimitTooLowError',
        });
    }
}
Object.defineProperty(VerificationGasLimitTooLowError, "message", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /aa41/
});
//# sourceMappingURL=bundler.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/transaction.js
var transaction = __webpack_require__(148990);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/unit/formatGwei.js
var formatGwei = __webpack_require__(579670);
;// ./node_modules/viem/_esm/account-abstraction/errors/userOperation.js



class UserOperationExecutionError extends base/* BaseError */.C {
    constructor(cause, { callData, callGasLimit, docsPath, factory, factoryData, initCode, maxFeePerGas, maxPriorityFeePerGas, nonce, paymaster, paymasterAndData, paymasterData, paymasterPostOpGasLimit, paymasterVerificationGasLimit, preVerificationGas, sender, signature, verificationGasLimit, }) {
        const prettyArgs = (0,transaction/* prettyPrint */.aO)({
            callData,
            callGasLimit,
            factory,
            factoryData,
            initCode,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' &&
                `${(0,formatGwei/* formatGwei */.Q)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' &&
                `${(0,formatGwei/* formatGwei */.Q)(maxPriorityFeePerGas)} gwei`,
            nonce,
            paymaster,
            paymasterAndData,
            paymasterData,
            paymasterPostOpGasLimit,
            paymasterVerificationGasLimit,
            preVerificationGas,
            sender,
            signature,
            verificationGasLimit,
        });
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...(cause.metaMessages ? [...cause.metaMessages, ' '] : []),
                'Request Arguments:',
                prettyArgs,
            ].filter(Boolean),
            name: 'UserOperationExecutionError',
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cause = cause;
    }
}
class UserOperationReceiptNotFoundError extends base/* BaseError */.C {
    constructor({ hash }) {
        super(`User Operation receipt with hash "${hash}" could not be found. The User Operation may not have been processed yet.`, { name: 'UserOperationReceiptNotFoundError' });
    }
}
class UserOperationNotFoundError extends base/* BaseError */.C {
    constructor({ hash }) {
        super(`User Operation with hash "${hash}" could not be found.`, {
            name: 'UserOperationNotFoundError',
        });
    }
}
class WaitForUserOperationReceiptTimeoutError extends base/* BaseError */.C {
    constructor({ hash }) {
        super(`Timed out while waiting for User Operation with hash "${hash}" to be confirmed.`, { name: 'WaitForUserOperationReceiptTimeoutError' });
    }
}
//# sourceMappingURL=userOperation.js.map
;// ./node_modules/viem/_esm/account-abstraction/utils/errors/getBundlerError.js

const bundlerErrors = [
    ExecutionRevertedError,
    InvalidFieldsError,
    PaymasterDepositTooLowError,
    PaymasterRateLimitError,
    PaymasterStakeTooLowError,
    SignatureCheckFailedError,
    UnsupportedSignatureAggregatorError,
    UserOperationOutOfTimeRangeError,
    UserOperationRejectedByEntryPointError,
    UserOperationRejectedByPaymasterError,
    UserOperationRejectedByOpCodeError,
];
function getBundlerError(err, args) {
    const message = (err.details || '').toLowerCase();
    if (AccountNotDeployedError.message.test(message))
        return new AccountNotDeployedError({
            cause: err,
        });
    if (FailedToSendToBeneficiaryError.message.test(message))
        return new FailedToSendToBeneficiaryError({
            cause: err,
        });
    if (GasValuesOverflowError.message.test(message))
        return new GasValuesOverflowError({
            cause: err,
        });
    if (HandleOpsOutOfGasError.message.test(message))
        return new HandleOpsOutOfGasError({
            cause: err,
        });
    if (InitCodeFailedError.message.test(message))
        return new InitCodeFailedError({
            cause: err,
            factory: args.factory,
            factoryData: args.factoryData,
            initCode: args.initCode,
        });
    if (InitCodeMustCreateSenderError.message.test(message))
        return new InitCodeMustCreateSenderError({
            cause: err,
            factory: args.factory,
            factoryData: args.factoryData,
            initCode: args.initCode,
        });
    if (InitCodeMustReturnSenderError.message.test(message))
        return new InitCodeMustReturnSenderError({
            cause: err,
            factory: args.factory,
            factoryData: args.factoryData,
            initCode: args.initCode,
            sender: args.sender,
        });
    if (InsufficientPrefundError.message.test(message))
        return new InsufficientPrefundError({
            cause: err,
        });
    if (InternalCallOnlyError.message.test(message))
        return new InternalCallOnlyError({
            cause: err,
        });
    if (InvalidAccountNonceError.message.test(message))
        return new InvalidAccountNonceError({
            cause: err,
            nonce: args.nonce,
        });
    if (InvalidAggregatorError.message.test(message))
        return new InvalidAggregatorError({
            cause: err,
        });
    if (InvalidBeneficiaryError.message.test(message))
        return new InvalidBeneficiaryError({
            cause: err,
        });
    if (InvalidPaymasterAndDataError.message.test(message))
        return new InvalidPaymasterAndDataError({
            cause: err,
        });
    if (PaymasterDepositTooLowError.message.test(message))
        return new PaymasterDepositTooLowError({
            cause: err,
        });
    if (PaymasterFunctionRevertedError.message.test(message))
        return new PaymasterFunctionRevertedError({
            cause: err,
        });
    if (PaymasterNotDeployedError.message.test(message))
        return new PaymasterNotDeployedError({
            cause: err,
        });
    if (PaymasterPostOpFunctionRevertedError.message.test(message))
        return new PaymasterPostOpFunctionRevertedError({
            cause: err,
        });
    if (SmartAccountFunctionRevertedError.message.test(message))
        return new SmartAccountFunctionRevertedError({
            cause: err,
        });
    if (SenderAlreadyConstructedError.message.test(message))
        return new SenderAlreadyConstructedError({
            cause: err,
            factory: args.factory,
            factoryData: args.factoryData,
            initCode: args.initCode,
        });
    if (UserOperationExpiredError.message.test(message))
        return new UserOperationExpiredError({
            cause: err,
        });
    if (UserOperationPaymasterExpiredError.message.test(message))
        return new UserOperationPaymasterExpiredError({
            cause: err,
        });
    if (UserOperationPaymasterSignatureError.message.test(message))
        return new UserOperationPaymasterSignatureError({
            cause: err,
        });
    if (UserOperationSignatureError.message.test(message))
        return new UserOperationSignatureError({
            cause: err,
        });
    if (VerificationGasLimitExceededError.message.test(message))
        return new VerificationGasLimitExceededError({
            cause: err,
        });
    if (VerificationGasLimitTooLowError.message.test(message))
        return new VerificationGasLimitTooLowError({
            cause: err,
        });
    const error = err.walk((e) => bundlerErrors.some((error) => error.code === e.code));
    if (error) {
        if (error.code === ExecutionRevertedError.code)
            return new ExecutionRevertedError({
                cause: err,
                data: error.data,
                message: error.details,
            });
        if (error.code === InvalidFieldsError.code)
            return new InvalidFieldsError({
                cause: err,
            });
        if (error.code === PaymasterDepositTooLowError.code)
            return new PaymasterDepositTooLowError({
                cause: err,
            });
        if (error.code === PaymasterRateLimitError.code)
            return new PaymasterRateLimitError({
                cause: err,
            });
        if (error.code === PaymasterStakeTooLowError.code)
            return new PaymasterStakeTooLowError({
                cause: err,
            });
        if (error.code === SignatureCheckFailedError.code)
            return new SignatureCheckFailedError({
                cause: err,
            });
        if (error.code === UnsupportedSignatureAggregatorError.code)
            return new UnsupportedSignatureAggregatorError({
                cause: err,
            });
        if (error.code === UserOperationOutOfTimeRangeError.code)
            return new UserOperationOutOfTimeRangeError({
                cause: err,
            });
        if (error.code === UserOperationRejectedByEntryPointError.code)
            return new UserOperationRejectedByEntryPointError({
                cause: err,
            });
        if (error.code === UserOperationRejectedByPaymasterError.code)
            return new UserOperationRejectedByPaymasterError({
                cause: err,
            });
        if (error.code === UserOperationRejectedByOpCodeError.code)
            return new UserOperationRejectedByOpCodeError({
                cause: err,
            });
    }
    return new UnknownBundlerError({
        cause: err,
    });
}
//# sourceMappingURL=getBundlerError.js.map
;// ./node_modules/viem/_esm/account-abstraction/utils/errors/getUserOperationError.js






function getUserOperationError(err, { calls, docsPath, ...args }) {
    const cause = (() => {
        const cause = getBundlerError(err, args);
        if (calls && cause instanceof ExecutionRevertedError) {
            const revertData = getRevertData(cause);
            const contractCalls = calls?.filter((call) => call.abi);
            if (revertData && contractCalls.length > 0)
                return getContractError({ calls: contractCalls, revertData });
        }
        return cause;
    })();
    return new UserOperationExecutionError(cause, {
        docsPath,
        ...args,
    });
}
/////////////////////////////////////////////////////////////////////////////////
function getRevertData(error) {
    let revertData;
    error.walk((e) => {
        const error = e;
        if (typeof error.data === 'string' ||
            typeof error.data?.revertData === 'string' ||
            (!(error instanceof base/* BaseError */.C) && typeof error.message === 'string')) {
            const match = (error.data?.revertData ||
                error.data ||
                error.message).match?.(/(0x[A-Za-z0-9]*)/);
            if (match) {
                revertData = match[1];
                return true;
            }
        }
        return false;
    });
    return revertData;
}
function getContractError(parameters) {
    const { calls, revertData } = parameters;
    const { abi, functionName, args, to } = (() => {
        const contractCalls = calls?.filter((call) => Boolean(call.abi));
        if (contractCalls.length === 1)
            return contractCalls[0];
        const compatContractCalls = contractCalls.filter((call) => {
            try {
                return Boolean((0,decodeErrorResult/* decodeErrorResult */.W)({
                    abi: call.abi,
                    data: revertData,
                }));
            }
            catch {
                return false;
            }
        });
        if (compatContractCalls.length === 1)
            return compatContractCalls[0];
        return {
            abi: [],
            functionName: contractCalls.reduce((acc, call) => `${acc ? `${acc} | ` : ''}${call.functionName}`, ''),
            args: undefined,
            to: undefined,
        };
    })();
    const cause = (() => {
        if (revertData === '0x')
            return new contract/* ContractFunctionZeroDataError */.rR({ functionName });
        return new contract/* ContractFunctionRevertedError */.M({
            abi,
            data: revertData,
            functionName,
        });
    })();
    return new contract/* ContractFunctionExecutionError */.bG(cause, {
        abi,
        args,
        contractAddress: to,
        functionName,
    });
}
//# sourceMappingURL=getUserOperationError.js.map
;// ./node_modules/viem/_esm/account-abstraction/utils/formatters/userOperationGas.js
function formatUserOperationGas(parameters) {
    const gas = {};
    if (parameters.callGasLimit)
        gas.callGasLimit = BigInt(parameters.callGasLimit);
    if (parameters.preVerificationGas)
        gas.preVerificationGas = BigInt(parameters.preVerificationGas);
    if (parameters.verificationGasLimit)
        gas.verificationGasLimit = BigInt(parameters.verificationGasLimit);
    if (parameters.paymasterPostOpGasLimit)
        gas.paymasterPostOpGasLimit = BigInt(parameters.paymasterPostOpGasLimit);
    if (parameters.paymasterVerificationGasLimit)
        gas.paymasterVerificationGasLimit = BigInt(parameters.paymasterVerificationGasLimit);
    return gas;
}
//# sourceMappingURL=userOperationGas.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toHex.js
var toHex = __webpack_require__(584192);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/pad.js
var pad = __webpack_require__(540586);
;// ./node_modules/viem/_esm/account-abstraction/utils/formatters/userOperationRequest.js


function formatUserOperationRequest(request) {
    const rpcRequest = {};
    if (typeof request.callData !== 'undefined')
        rpcRequest.callData = request.callData;
    if (typeof request.callGasLimit !== 'undefined')
        rpcRequest.callGasLimit = (0,toHex/* numberToHex */.cK)(request.callGasLimit);
    if (typeof request.factory !== 'undefined')
        rpcRequest.factory = request.factory;
    if (typeof request.factoryData !== 'undefined')
        rpcRequest.factoryData = request.factoryData;
    if (typeof request.initCode !== 'undefined')
        rpcRequest.initCode = request.initCode;
    if (typeof request.maxFeePerGas !== 'undefined')
        rpcRequest.maxFeePerGas = (0,toHex/* numberToHex */.cK)(request.maxFeePerGas);
    if (typeof request.maxPriorityFeePerGas !== 'undefined')
        rpcRequest.maxPriorityFeePerGas = (0,toHex/* numberToHex */.cK)(request.maxPriorityFeePerGas);
    if (typeof request.nonce !== 'undefined')
        rpcRequest.nonce = (0,toHex/* numberToHex */.cK)(request.nonce);
    if (typeof request.paymaster !== 'undefined')
        rpcRequest.paymaster = request.paymaster;
    if (typeof request.paymasterAndData !== 'undefined')
        rpcRequest.paymasterAndData = request.paymasterAndData || '0x';
    if (typeof request.paymasterData !== 'undefined')
        rpcRequest.paymasterData = request.paymasterData;
    if (typeof request.paymasterPostOpGasLimit !== 'undefined')
        rpcRequest.paymasterPostOpGasLimit = (0,toHex/* numberToHex */.cK)(request.paymasterPostOpGasLimit);
    if (typeof request.paymasterSignature !== 'undefined')
        rpcRequest.paymasterSignature = request.paymasterSignature;
    if (typeof request.paymasterVerificationGasLimit !== 'undefined')
        rpcRequest.paymasterVerificationGasLimit = (0,toHex/* numberToHex */.cK)(request.paymasterVerificationGasLimit);
    if (typeof request.preVerificationGas !== 'undefined')
        rpcRequest.preVerificationGas = (0,toHex/* numberToHex */.cK)(request.preVerificationGas);
    if (typeof request.sender !== 'undefined')
        rpcRequest.sender = request.sender;
    if (typeof request.signature !== 'undefined')
        rpcRequest.signature = request.signature;
    if (typeof request.verificationGasLimit !== 'undefined')
        rpcRequest.verificationGasLimit = (0,toHex/* numberToHex */.cK)(request.verificationGasLimit);
    if (typeof request.authorization !== 'undefined')
        rpcRequest.eip7702Auth = formatAuthorization(request.authorization);
    return rpcRequest;
}
function formatAuthorization(authorization) {
    return {
        address: authorization.address,
        chainId: (0,toHex/* numberToHex */.cK)(authorization.chainId),
        nonce: (0,toHex/* numberToHex */.cK)(authorization.nonce),
        r: authorization.r
            ? (0,toHex/* numberToHex */.cK)(BigInt(authorization.r), { size: 32 })
            : (0,pad/* pad */.eV)('0x', { size: 32 }),
        s: authorization.s
            ? (0,toHex/* numberToHex */.cK)(BigInt(authorization.s), { size: 32 })
            : (0,pad/* pad */.eV)('0x', { size: 32 }),
        yParity: authorization.yParity
            ? (0,toHex/* numberToHex */.cK)(authorization.yParity, { size: 1 })
            : (0,pad/* pad */.eV)('0x', { size: 32 }),
    };
}
//# sourceMappingURL=userOperationRequest.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/address/isAddressEqual.js
var isAddressEqual = __webpack_require__(732589);
// EXTERNAL MODULE: ./node_modules/viem/_esm/actions/public/getTransactionCount.js
var getTransactionCount = __webpack_require__(167755);
;// ./node_modules/viem/_esm/actions/wallet/prepareAuthorization.js






/**
 * Prepares an [EIP-7702 Authorization](https://eips.ethereum.org/EIPS/eip-7702) object for signing.
 * This Action will fill the required fields of the Authorization object if they are not provided (e.g. `nonce` and `chainId`).
 *
 * With the prepared Authorization object, you can use [`signAuthorization`](https://viem.sh/docs/eip7702/signAuthorization) to sign over the Authorization object.
 *
 * @param client - Client to use
 * @param parameters - {@link PrepareAuthorizationParameters}
 * @returns The prepared Authorization object. {@link PrepareAuthorizationReturnType}
 *
 * @example
 * import { createClient, http } from 'viem'
 * import { privateKeyToAccount } from 'viem/accounts'
 * import { mainnet } from 'viem/chains'
 * import { prepareAuthorization } from 'viem/experimental'
 *
 * const client = createClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const authorization = await prepareAuthorization(client, {
 *   account: privateKeyToAccount('0x..'),
 *   contractAddress: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 * })
 *
 * @example
 * // Account Hoisting
 * import { createClient, http } from 'viem'
 * import { privateKeyToAccount } from 'viem/accounts'
 * import { mainnet } from 'viem/chains'
 * import { prepareAuthorization } from 'viem/experimental'
 *
 * const client = createClient({
 *   account: privateKeyToAccount('0x…'),
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const authorization = await prepareAuthorization(client, {
 *   contractAddress: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 * })
 */
async function prepareAuthorization(client, parameters) {
    const { account: account_ = client.account, chainId, nonce } = parameters;
    if (!account_)
        throw new errors_account/* AccountNotFoundError */.T({
            docsPath: '/docs/eip7702/prepareAuthorization',
        });
    const account = (0,parseAccount/* parseAccount */.J)(account_);
    const executor = (() => {
        if (!parameters.executor)
            return undefined;
        if (parameters.executor === 'self')
            return parameters.executor;
        return (0,parseAccount/* parseAccount */.J)(parameters.executor);
    })();
    const authorization = {
        address: parameters.contractAddress ?? parameters.address,
        chainId,
        nonce,
    };
    if (typeof authorization.chainId === 'undefined')
        authorization.chainId =
            client.chain?.id ??
                (await (0,getAction/* getAction */.T)(client, public_getChainId/* getChainId */.T, 'getChainId')({}));
    if (typeof authorization.nonce === 'undefined') {
        authorization.nonce = await (0,getAction/* getAction */.T)(client, getTransactionCount/* getTransactionCount */.y, 'getTransactionCount')({
            address: account.address,
            blockTag: 'pending',
        });
        if (executor === 'self' ||
            (executor?.address && (0,isAddressEqual/* isAddressEqual */.h)(executor.address, account.address)))
            authorization.nonce += 1;
    }
    return authorization;
}
//# sourceMappingURL=prepareAuthorization.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/actions/public/estimateFeesPerGas.js
var estimateFeesPerGas = __webpack_require__(331989);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeFunctionData.js + 1 modules
var encodeFunctionData = __webpack_require__(277330);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/concat.js
var concat = __webpack_require__(825419);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/fromHex.js
var fromHex = __webpack_require__(6675);
;// ./node_modules/viem/_esm/account-abstraction/actions/paymaster/getPaymasterData.js



/**
 * Retrieves paymaster-related User Operation properties to be used for sending the User Operation.
 *
 * - Docs: https://viem.sh/account-abstraction/actions/paymaster/getPaymasterData
 *
 * @param client - Client to use
 * @param parameters - {@link GetPaymasterDataParameters}
 * @returns Paymaster-related User Operation properties. {@link GetPaymasterDataReturnType}
 *
 * @example
 * import { http } from 'viem'
 * import { createPaymasterClient, getPaymasterData } from 'viem/account-abstraction'
 *
 * const paymasterClient = createPaymasterClient({
 *   transport: http('https://...'),
 * })
 *
 * const userOperation = { ... }
 *
 * const values = await getPaymasterData(paymasterClient, {
 *   chainId: 1,
 *   entryPointAddress: '0x...',
 *   ...userOperation,
 * })
 */
async function getPaymasterData_getPaymasterData(client, parameters) {
    const { chainId, entryPointAddress, context, ...userOperation } = parameters;
    const request = formatUserOperationRequest(userOperation);
    const { paymasterPostOpGasLimit, paymasterVerificationGasLimit, ...rest } = await client.request({
        method: 'pm_getPaymasterData',
        params: [
            {
                ...request,
                callGasLimit: request.callGasLimit ?? '0x0',
                verificationGasLimit: request.verificationGasLimit ?? '0x0',
                preVerificationGas: request.preVerificationGas ?? '0x0',
            },
            entryPointAddress,
            (0,toHex/* numberToHex */.cK)(chainId),
            context,
        ],
    });
    return {
        ...rest,
        ...(paymasterPostOpGasLimit && {
            paymasterPostOpGasLimit: (0,fromHex/* hexToBigInt */.uU)(paymasterPostOpGasLimit),
        }),
        ...(paymasterVerificationGasLimit && {
            paymasterVerificationGasLimit: (0,fromHex/* hexToBigInt */.uU)(paymasterVerificationGasLimit),
        }),
    };
}
//# sourceMappingURL=getPaymasterData.js.map
;// ./node_modules/viem/_esm/account-abstraction/actions/paymaster/getPaymasterStubData.js



/**
 * Retrieves paymaster-related User Operation properties to be used for gas estimation.
 *
 * - Docs: https://viem.sh/account-abstraction/actions/paymaster/getPaymasterStubData
 *
 * @param client - Client to use
 * @param parameters - {@link GetPaymasterStubDataParameters}
 * @returns Paymaster-related User Operation properties. {@link GetPaymasterStubDataReturnType}
 *
 * @example
 * import { http } from 'viem'
 * import { createPaymasterClient, getPaymasterStubData } from 'viem/account-abstraction'
 *
 * const paymasterClient = createPaymasterClient({
 *   transport: http('https://...'),
 * })
 *
 * const userOperation = { ... }
 *
 * const values = await getPaymasterStubData(paymasterClient, {
 *   chainId: 1,
 *   entryPointAddress: '0x...',
 *   ...userOperation,
 * })
 */
async function getPaymasterStubData_getPaymasterStubData(client, parameters) {
    const { chainId, entryPointAddress, context, ...userOperation } = parameters;
    const request = formatUserOperationRequest(userOperation);
    const { paymasterPostOpGasLimit, paymasterVerificationGasLimit, ...rest } = await client.request({
        method: 'pm_getPaymasterStubData',
        params: [
            {
                ...request,
                callGasLimit: request.callGasLimit ?? '0x0',
                verificationGasLimit: request.verificationGasLimit ?? '0x0',
                preVerificationGas: request.preVerificationGas ?? '0x0',
            },
            entryPointAddress,
            (0,toHex/* numberToHex */.cK)(chainId),
            context,
        ],
    });
    return {
        ...rest,
        ...(paymasterPostOpGasLimit && {
            paymasterPostOpGasLimit: (0,fromHex/* hexToBigInt */.uU)(paymasterPostOpGasLimit),
        }),
        ...(paymasterVerificationGasLimit && {
            paymasterVerificationGasLimit: (0,fromHex/* hexToBigInt */.uU)(paymasterVerificationGasLimit),
        }),
    };
}
//# sourceMappingURL=getPaymasterStubData.js.map
;// ./node_modules/viem/_esm/account-abstraction/actions/bundler/prepareUserOperation.js











const defaultParameters = [
    'factory',
    'fees',
    'gas',
    'paymaster',
    'nonce',
    'signature',
    'authorization',
];
/**
 * Prepares a User Operation and fills in missing properties.
 *
 * - Docs: https://viem.sh/actions/bundler/prepareUserOperation
 *
 * @param args - {@link PrepareUserOperationParameters}
 * @returns The User Operation. {@link PrepareUserOperationReturnType}
 *
 * @example
 * import { createBundlerClient, http } from 'viem'
 * import { toSmartAccount } from 'viem/accounts'
 * import { mainnet } from 'viem/chains'
 * import { prepareUserOperation } from 'viem/actions'
 *
 * const account = await toSmartAccount({ ... })
 *
 * const client = createBundlerClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 *
 * const request = await prepareUserOperation(client, {
 *   account,
 *   calls: [{ to: '0x...', value: parseEther('1') }],
 * })
 */
async function prepareUserOperation(client, parameters_) {
    const parameters = parameters_;
    const { account: account_ = client.account, dataSuffix = typeof client.dataSuffix === 'string'
        ? client.dataSuffix
        : client.dataSuffix?.value, parameters: properties = defaultParameters, stateOverride, } = parameters;
    ////////////////////////////////////////////////////////////////////////////////
    // Assert that an Account is defined.
    ////////////////////////////////////////////////////////////////////////////////
    if (!account_)
        throw new errors_account/* AccountNotFoundError */.T();
    const account = (0,parseAccount/* parseAccount */.J)(account_);
    ////////////////////////////////////////////////////////////////////////////////
    // Declare typed Bundler Client.
    ////////////////////////////////////////////////////////////////////////////////
    const bundlerClient = client;
    ////////////////////////////////////////////////////////////////////////////////
    // Declare Paymaster properties.
    ////////////////////////////////////////////////////////////////////////////////
    const paymaster = parameters.paymaster ?? bundlerClient?.paymaster;
    const paymasterAddress = typeof paymaster === 'string' ? paymaster : undefined;
    const { getPaymasterStubData, getPaymasterData } = (() => {
        // If `paymaster: true`, we will assume the Bundler Client supports Paymaster Actions.
        if (paymaster === true)
            return {
                getPaymasterStubData: (parameters) => (0,getAction/* getAction */.T)(bundlerClient, getPaymasterStubData_getPaymasterStubData, 'getPaymasterStubData')(parameters),
                getPaymasterData: (parameters) => (0,getAction/* getAction */.T)(bundlerClient, getPaymasterData_getPaymasterData, 'getPaymasterData')(parameters),
            };
        // If Actions are passed to `paymaster` (via Paymaster Client or directly), we will use them.
        if (typeof paymaster === 'object') {
            const { getPaymasterStubData, getPaymasterData } = paymaster;
            return {
                getPaymasterStubData: (getPaymasterData && getPaymasterStubData
                    ? getPaymasterStubData
                    : getPaymasterData),
                getPaymasterData: getPaymasterData && getPaymasterStubData
                    ? getPaymasterData
                    : undefined,
            };
        }
        // No Paymaster functions.
        return {
            getPaymasterStubData: undefined,
            getPaymasterData: undefined,
        };
    })();
    const paymasterContext = parameters.paymasterContext
        ? parameters.paymasterContext
        : bundlerClient?.paymasterContext;
    ////////////////////////////////////////////////////////////////////////////////
    // Set up the User Operation request.
    ////////////////////////////////////////////////////////////////////////////////
    let request = {
        ...parameters,
        paymaster: paymasterAddress,
        sender: account.address,
    };
    ////////////////////////////////////////////////////////////////////////////////
    // Concurrently prepare properties required to fill the User Operation.
    ////////////////////////////////////////////////////////////////////////////////
    const [callData, factory, fees, nonce, authorization] = await Promise.all([
        (async () => {
            if (parameters.calls)
                return account.encodeCalls(parameters.calls.map((call_) => {
                    const call = call_;
                    if (call.abi)
                        return {
                            data: (0,encodeFunctionData/* encodeFunctionData */.p)(call),
                            to: call.to,
                            value: call.value,
                        };
                    return call;
                }));
            return parameters.callData;
        })(),
        (async () => {
            if (!properties.includes('factory'))
                return undefined;
            if (parameters.initCode)
                return { initCode: parameters.initCode };
            if (parameters.factory && parameters.factoryData) {
                return {
                    factory: parameters.factory,
                    factoryData: parameters.factoryData,
                };
            }
            const { factory, factoryData } = await account.getFactoryArgs();
            if (account.entryPoint.version === '0.6')
                return {
                    initCode: factory && factoryData ? (0,concat/* concat */.xW)([factory, factoryData]) : undefined,
                };
            return {
                factory,
                factoryData,
            };
        })(),
        (async () => {
            if (!properties.includes('fees'))
                return undefined;
            // If we have sufficient properties for fees, return them.
            if (typeof parameters.maxFeePerGas === 'bigint' &&
                typeof parameters.maxPriorityFeePerGas === 'bigint')
                return request;
            // If the Bundler Client has a `estimateFeesPerGas` hook, run it.
            if (bundlerClient?.userOperation?.estimateFeesPerGas) {
                const fees = await bundlerClient.userOperation.estimateFeesPerGas({
                    account,
                    bundlerClient,
                    userOperation: request,
                });
                return {
                    ...request,
                    ...fees,
                };
            }
            // Otherwise, we will need to estimate the fees to fill the fee properties.
            try {
                const client_ = bundlerClient.client ?? client;
                const fees = await (0,getAction/* getAction */.T)(client_, estimateFeesPerGas/* estimateFeesPerGas */._, 'estimateFeesPerGas')({
                    chain: client_.chain,
                    type: 'eip1559',
                });
                return {
                    maxFeePerGas: typeof parameters.maxFeePerGas === 'bigint'
                        ? parameters.maxFeePerGas
                        : BigInt(
                        // Bundlers unfortunately have strict rules on fee prechecks – we will need to set a generous buffer.
                        2n * fees.maxFeePerGas),
                    maxPriorityFeePerGas: typeof parameters.maxPriorityFeePerGas === 'bigint'
                        ? parameters.maxPriorityFeePerGas
                        : BigInt(
                        // Bundlers unfortunately have strict rules on fee prechecks – we will need to set a generous buffer.
                        2n * fees.maxPriorityFeePerGas),
                };
            }
            catch {
                return undefined;
            }
        })(),
        (async () => {
            if (!properties.includes('nonce'))
                return undefined;
            if (typeof parameters.nonce === 'bigint')
                return parameters.nonce;
            return account.getNonce();
        })(),
        (async () => {
            if (!properties.includes('authorization'))
                return undefined;
            if (typeof parameters.authorization === 'object')
                return parameters.authorization;
            if (account.authorization && !(await account.isDeployed())) {
                const authorization = await prepareAuthorization(account.client, account.authorization);
                return {
                    ...authorization,
                    r: '0xfffffffffffffffffffffffffffffff000000000000000000000000000000000',
                    s: '0x7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                    yParity: 1,
                };
            }
            return undefined;
        })(),
    ]);
    ////////////////////////////////////////////////////////////////////////////////
    // Fill User Operation with the prepared properties from above.
    ////////////////////////////////////////////////////////////////////////////////
    if (typeof callData !== 'undefined')
        request.callData = dataSuffix ? (0,concat/* concat */.xW)([callData, dataSuffix]) : callData;
    if (typeof factory !== 'undefined')
        request = { ...request, ...factory };
    if (typeof fees !== 'undefined')
        request = { ...request, ...fees };
    if (typeof nonce !== 'undefined')
        request.nonce = nonce;
    if (typeof authorization !== 'undefined')
        request.authorization = authorization;
    ////////////////////////////////////////////////////////////////////////////////
    // Fill User Operation with the `signature` property.
    ////////////////////////////////////////////////////////////////////////////////
    if (properties.includes('signature')) {
        if (typeof parameters.signature !== 'undefined')
            request.signature = parameters.signature;
        else
            request.signature = await account.getStubSignature(request);
    }
    ////////////////////////////////////////////////////////////////////////////////
    // `initCode` is required to be filled with EntryPoint 0.6.
    ////////////////////////////////////////////////////////////////////////////////
    // If no `initCode` is provided, we use an empty bytes string.
    if (account.entryPoint.version === '0.6' && !request.initCode)
        request.initCode = '0x';
    ////////////////////////////////////////////////////////////////////////////////
    // Fill User Operation with paymaster-related properties for **gas estimation**.
    ////////////////////////////////////////////////////////////////////////////////
    let chainId;
    async function getChainId() {
        if (chainId)
            return chainId;
        if (client.chain)
            return client.chain.id;
        const chainId_ = await (0,getAction/* getAction */.T)(client, public_getChainId/* getChainId */.T, 'getChainId')({});
        chainId = chainId_;
        return chainId;
    }
    // If the User Operation is intended to be sponsored, we will need to fill the paymaster-related
    // User Operation properties required to estimate the User Operation gas.
    let isPaymasterPopulated = false;
    if (properties.includes('paymaster') &&
        getPaymasterStubData &&
        !paymasterAddress &&
        !parameters.paymasterAndData) {
        const { isFinal = false, sponsor: _, ...paymasterArgs } = await getPaymasterStubData({
            chainId: await getChainId(),
            entryPointAddress: account.entryPoint.address,
            context: paymasterContext,
            ...request,
        });
        isPaymasterPopulated = isFinal;
        request = {
            ...request,
            ...paymasterArgs,
        };
    }
    ////////////////////////////////////////////////////////////////////////////////
    // `paymasterAndData` is required to be filled with EntryPoint 0.6.
    ////////////////////////////////////////////////////////////////////////////////
    // If no `paymasterAndData` is provided, we use an empty bytes string.
    if (account.entryPoint.version === '0.6' && !request.paymasterAndData)
        request.paymasterAndData = '0x';
    ////////////////////////////////////////////////////////////////////////////////
    // Fill User Operation with gas-related properties.
    ////////////////////////////////////////////////////////////////////////////////
    if (properties.includes('gas')) {
        // If the Account has opinionated gas estimation logic, run the `estimateGas` hook and
        // fill the request with the prepared gas properties.
        if (account.userOperation?.estimateGas) {
            const gas = await account.userOperation.estimateGas(request);
            request = {
                ...request,
                ...gas,
            };
        }
        // If not all the gas properties are already populated, we will need to estimate the gas
        // to fill the gas properties.
        if (typeof request.callGasLimit === 'undefined' ||
            typeof request.preVerificationGas === 'undefined' ||
            typeof request.verificationGasLimit === 'undefined' ||
            (request.paymaster &&
                typeof request.paymasterPostOpGasLimit === 'undefined') ||
            (request.paymaster &&
                typeof request.paymasterVerificationGasLimit === 'undefined')) {
            const gas = await (0,getAction/* getAction */.T)(bundlerClient, estimateUserOperationGas, 'estimateUserOperationGas')({
                account,
                // Some Bundlers fail if nullish gas values are provided for gas estimation :') –
                // so we will need to set a default zeroish value.
                callGasLimit: 0n,
                preVerificationGas: 0n,
                verificationGasLimit: 0n,
                stateOverride,
                ...(request.paymaster
                    ? {
                        paymasterPostOpGasLimit: 0n,
                        paymasterVerificationGasLimit: 0n,
                    }
                    : {}),
                ...request,
            });
            request = {
                ...request,
                callGasLimit: request.callGasLimit ?? gas.callGasLimit,
                preVerificationGas: request.preVerificationGas ?? gas.preVerificationGas,
                verificationGasLimit: request.verificationGasLimit ?? gas.verificationGasLimit,
                paymasterPostOpGasLimit: request.paymasterPostOpGasLimit ?? gas.paymasterPostOpGasLimit,
                paymasterVerificationGasLimit: request.paymasterVerificationGasLimit ??
                    gas.paymasterVerificationGasLimit,
            };
        }
    }
    ////////////////////////////////////////////////////////////////////////////////
    // Fill User Operation with paymaster-related properties for **sending** the User Operation.
    ////////////////////////////////////////////////////////////////////////////////
    // If the User Operation is intended to be sponsored, we will need to fill the paymaster-related
    // User Operation properties required to send the User Operation.
    if (properties.includes('paymaster') &&
        getPaymasterData &&
        !paymasterAddress &&
        !parameters.paymasterAndData &&
        !isPaymasterPopulated) {
        // Retrieve paymaster-related User Operation properties to be used for **sending** the User Operation.
        const paymaster = await getPaymasterData({
            chainId: await getChainId(),
            entryPointAddress: account.entryPoint.address,
            context: paymasterContext,
            ...request,
        });
        request = {
            ...request,
            ...paymaster,
        };
    }
    ////////////////////////////////////////////////////////////////////////////////
    // Remove redundant properties that do not conform to the User Operation schema.
    ////////////////////////////////////////////////////////////////////////////////
    delete request.calls;
    delete request.parameters;
    delete request.paymasterContext;
    if (typeof request.paymaster !== 'string')
        delete request.paymaster;
    ////////////////////////////////////////////////////////////////////////////////
    return request;
}
//# sourceMappingURL=prepareUserOperation.js.map
;// ./node_modules/viem/_esm/account-abstraction/actions/bundler/estimateUserOperationGas.js








/**
 * Returns an estimate of gas values necessary to execute the User Operation.
 *
 * - Docs: https://viem.sh/actions/bundler/estimateUserOperationGas
 *
 * @param client - Client to use
 * @param parameters - {@link EstimateUserOperationGasParameters}
 * @returns The gas estimate (in wei). {@link EstimateUserOperationGasReturnType}
 *
 * @example
 * import { createBundlerClient, http, parseEther } from 'viem'
 * import { toSmartAccount } from 'viem/accounts'
 * import { mainnet } from 'viem/chains'
 * import { estimateUserOperationGas } from 'viem/actions'
 *
 * const account = await toSmartAccount({ ... })
 *
 * const bundlerClient = createBundlerClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 *
 * const values = await estimateUserOperationGas(bundlerClient, {
 *   account,
 *   calls: [{ to: '0x...', value: parseEther('1') }],
 * })
 */
async function estimateUserOperationGas(client, parameters) {
    const { account: account_ = client.account, entryPointAddress, stateOverride, } = parameters;
    if (!account_ && !parameters.sender)
        throw new errors_account/* AccountNotFoundError */.T();
    const account = account_ ? (0,parseAccount/* parseAccount */.J)(account_) : undefined;
    const rpcStateOverride = (0,utils_stateOverride/* serializeStateOverride */.yH)(stateOverride);
    const request = account
        ? await (0,getAction/* getAction */.T)(client, prepareUserOperation, 'prepareUserOperation')({
            ...parameters,
            parameters: [
                'authorization',
                'factory',
                'nonce',
                'paymaster',
                'signature',
            ],
        })
        : parameters;
    try {
        const params = [
            formatUserOperationRequest(request),
            (entryPointAddress ?? account?.entryPoint?.address),
        ];
        const result = await client.request({
            method: 'eth_estimateUserOperationGas',
            params: rpcStateOverride ? [...params, rpcStateOverride] : [...params],
        });
        return formatUserOperationGas(result);
    }
    catch (error) {
        const calls = parameters.calls;
        throw getUserOperationError(error, {
            ...request,
            ...(calls ? { calls } : {}),
        });
    }
}
//# sourceMappingURL=estimateUserOperationGas.js.map
;// ./node_modules/viem/_esm/account-abstraction/actions/bundler/getSupportedEntryPoints.js
/**
 * Returns the EntryPoints that the bundler supports.
 *
 * - Docs: https://viem.sh/actions/bundler/getSupportedEntryPoints
 *
 * @param client - Client to use
 * @param parameters - {@link GetSupportedEntryPointsParameters}
 * @returns Supported Entry Points. {@link GetSupportedEntryPointsReturnType}
 *
 * @example
 * import { createBundlerClient, http, parseEther } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getSupportedEntryPoints } from 'viem/actions'
 *
 * const bundlerClient = createBundlerClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 *
 * const addresses = await getSupportedEntryPoints(bundlerClient)
 */
function getSupportedEntryPoints(client) {
    return client.request({ method: 'eth_supportedEntryPoints' });
}
//# sourceMappingURL=getSupportedEntryPoints.js.map
;// ./node_modules/viem/_esm/account-abstraction/utils/formatters/userOperation.js
function formatUserOperation(parameters) {
    const userOperation = { ...parameters };
    if (parameters.callGasLimit)
        userOperation.callGasLimit = BigInt(parameters.callGasLimit);
    if (parameters.maxFeePerGas)
        userOperation.maxFeePerGas = BigInt(parameters.maxFeePerGas);
    if (parameters.maxPriorityFeePerGas)
        userOperation.maxPriorityFeePerGas = BigInt(parameters.maxPriorityFeePerGas);
    if (parameters.nonce)
        userOperation.nonce = BigInt(parameters.nonce);
    if (parameters.paymasterPostOpGasLimit)
        userOperation.paymasterPostOpGasLimit = BigInt(parameters.paymasterPostOpGasLimit);
    if (parameters.paymasterVerificationGasLimit)
        userOperation.paymasterVerificationGasLimit = BigInt(parameters.paymasterVerificationGasLimit);
    if (parameters.preVerificationGas)
        userOperation.preVerificationGas = BigInt(parameters.preVerificationGas);
    if (parameters.verificationGasLimit)
        userOperation.verificationGasLimit = BigInt(parameters.verificationGasLimit);
    return userOperation;
}
//# sourceMappingURL=userOperation.js.map
;// ./node_modules/viem/_esm/account-abstraction/actions/bundler/getUserOperation.js


/**
 * Retrieves information about a User Operation given a hash.
 *
 * - Docs: https://viem.sh/account-abstraction/actions/bundler/getUserOperation
 *
 * @param client - Client to use
 * @param parameters - {@link GetUserOperationParameters}
 * @returns The receipt. {@link GetUserOperationReturnType}
 *
 * @example
 * import { createBundlerClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getUserOperation } from 'viem/actions
 *
 * const client = createBundlerClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 *
 * const receipt = await getUserOperation(client, {
 *   hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
 * })
 */
async function getUserOperation(client, { hash }) {
    const result = await client.request({
        method: 'eth_getUserOperationByHash',
        params: [hash],
    }, { dedupe: true });
    if (!result)
        throw new UserOperationNotFoundError({ hash });
    const { blockHash, blockNumber, entryPoint, transactionHash, userOperation } = result;
    return {
        blockHash,
        blockNumber: BigInt(blockNumber),
        entryPoint,
        transactionHash,
        userOperation: formatUserOperation(userOperation),
    };
}
//# sourceMappingURL=getUserOperation.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/formatters/log.js
var formatters_log = __webpack_require__(467070);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/formatters/transactionReceipt.js
var transactionReceipt = __webpack_require__(777610);
;// ./node_modules/viem/_esm/account-abstraction/utils/formatters/userOperationReceipt.js


function formatUserOperationReceipt(parameters) {
    const receipt = { ...parameters };
    if (parameters.actualGasCost)
        receipt.actualGasCost = BigInt(parameters.actualGasCost);
    if (parameters.actualGasUsed)
        receipt.actualGasUsed = BigInt(parameters.actualGasUsed);
    if (parameters.logs)
        receipt.logs = parameters.logs.map((log) => (0,formatters_log/* formatLog */.e)(log));
    if (parameters.receipt)
        receipt.receipt = (0,transactionReceipt/* formatTransactionReceipt */.uL)(receipt.receipt);
    return receipt;
}
//# sourceMappingURL=userOperationReceipt.js.map
;// ./node_modules/viem/_esm/account-abstraction/actions/bundler/getUserOperationReceipt.js


/**
 * Returns the User Operation Receipt given a User Operation hash.
 *
 * - Docs: https://viem.sh/docs/actions/bundler/getUserOperationReceipt
 *
 * @param client - Client to use
 * @param parameters - {@link GetUserOperationReceiptParameters}
 * @returns The receipt. {@link GetUserOperationReceiptReturnType}
 *
 * @example
 * import { createBundlerClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getUserOperationReceipt } from 'viem/actions
 *
 * const client = createBundlerClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 *
 * const receipt = await getUserOperationReceipt(client, {
 *   hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
 * })
 */
async function getUserOperationReceipt(client, { hash }) {
    const receipt = await client.request({
        method: 'eth_getUserOperationReceipt',
        params: [hash],
    }, { dedupe: true });
    if (!receipt)
        throw new UserOperationReceiptNotFoundError({ hash });
    return formatUserOperationReceipt(receipt);
}
//# sourceMappingURL=getUserOperationReceipt.js.map
;// ./node_modules/viem/_esm/account-abstraction/actions/bundler/sendUserOperation.js






/**
 * Broadcasts a User Operation to the Bundler.
 *
 * - Docs: https://viem.sh/actions/bundler/sendUserOperation
 *
 * @param client - Client to use
 * @param parameters - {@link SendUserOperationParameters}
 * @returns The User Operation hash. {@link SendUserOperationReturnType}
 *
 * @example
 * import { createBundlerClient, http, parseEther } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { toSmartAccount } from 'viem/accounts'
 * import { sendUserOperation } from 'viem/actions'
 *
 * const account = await toSmartAccount({ ... })
 *
 * const bundlerClient = createBundlerClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 *
 * const values = await sendUserOperation(bundlerClient, {
 *   account,
 *   calls: [{ to: '0x...', value: parseEther('1') }],
 * })
 */
async function sendUserOperation(client, parameters) {
    const { account: account_ = client.account, entryPointAddress } = parameters;
    if (!account_ && !parameters.sender)
        throw new errors_account/* AccountNotFoundError */.T();
    const account = account_ ? (0,parseAccount/* parseAccount */.J)(account_) : undefined;
    const request = account
        ? await (0,getAction/* getAction */.T)(client, prepareUserOperation, 'prepareUserOperation')(parameters)
        : parameters;
    const signature = (parameters.signature ||
        (await account?.signUserOperation?.(request)));
    const rpcParameters = formatUserOperationRequest({
        ...request,
        signature,
    });
    try {
        return await client.request({
            method: 'eth_sendUserOperation',
            params: [
                rpcParameters,
                (entryPointAddress ?? account?.entryPoint?.address),
            ],
        }, { retryCount: 0 });
    }
    catch (error) {
        const calls = parameters.calls;
        throw getUserOperationError(error, {
            ...request,
            ...(calls ? { calls } : {}),
            signature,
        });
    }
}
//# sourceMappingURL=sendUserOperation.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/observe.js
var observe = __webpack_require__(959726);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/poll.js
var poll = __webpack_require__(955213);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/stringify.js
var stringify = __webpack_require__(218463);
;// ./node_modules/viem/_esm/account-abstraction/actions/bundler/waitForUserOperationReceipt.js






/**
 * Waits for the User Operation to be included on a [Block](https://viem.sh/docs/glossary/terms#block) (one confirmation), and then returns the User Operation receipt.
 *
 * - Docs: https://viem.sh/docs/actions/bundler/waitForUserOperationReceipt
 *
 * @param client - Client to use
 * @param parameters - {@link WaitForUserOperationReceiptParameters}
 * @returns The receipt. {@link WaitForUserOperationReceiptReturnType}
 *
 * @example
 * import { createBundlerClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { waitForUserOperationReceipt } from 'viem/actions'
 *
 * const client = createBundlerClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 *
 * const receipt = await waitForUserOperationReceipt(client, {
 *   hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
 * })
 */
function waitForUserOperationReceipt(client, parameters) {
    const { hash, pollingInterval = client.pollingInterval, retryCount, timeout = 120_000, } = parameters;
    let count = 0;
    const observerId = (0,stringify/* stringify */.A)([
        'waitForUserOperationReceipt',
        client.uid,
        hash,
    ]);
    return new Promise((resolve, reject) => {
        const unobserve = (0,observe/* observe */.lB)(observerId, { resolve, reject }, (emit) => {
            const done = (fn) => {
                unpoll();
                fn();
                unobserve();
            };
            const timeoutId = timeout
                ? setTimeout(() => done(() => emit.reject(new WaitForUserOperationReceiptTimeoutError({ hash }))), timeout)
                : undefined;
            const unpoll = (0,poll/* poll */.w)(async () => {
                if (retryCount && count >= retryCount) {
                    clearTimeout(timeoutId);
                    done(() => emit.reject(new WaitForUserOperationReceiptTimeoutError({ hash })));
                }
                try {
                    const receipt = await (0,getAction/* getAction */.T)(client, getUserOperationReceipt, 'getUserOperationReceipt')({ hash });
                    clearTimeout(timeoutId);
                    done(() => emit.resolve(receipt));
                }
                catch (err) {
                    const error = err;
                    if (error.name !== 'UserOperationReceiptNotFoundError') {
                        clearTimeout(timeoutId);
                        done(() => emit.reject(error));
                    }
                }
                count++;
            }, {
                emitOnBegin: true,
                interval: pollingInterval,
            });
            return unpoll;
        });
    });
}
//# sourceMappingURL=waitForUserOperationReceipt.js.map
;// ./node_modules/viem/_esm/account-abstraction/clients/decorators/bundler.js








function bundlerActions(client) {
    return {
        estimateUserOperationGas: (parameters) => estimateUserOperationGas(client, parameters),
        getChainId: () => (0,public_getChainId/* getChainId */.T)(client),
        getSupportedEntryPoints: () => getSupportedEntryPoints(client),
        getUserOperation: (parameters) => getUserOperation(client, parameters),
        getUserOperationReceipt: (parameters) => getUserOperationReceipt(client, parameters),
        prepareUserOperation: (parameters) => prepareUserOperation(client, parameters),
        sendUserOperation: (parameters) => sendUserOperation(client, parameters),
        waitForUserOperationReceipt: (parameters) => waitForUserOperationReceipt(client, parameters),
    };
}
//# sourceMappingURL=bundler.js.map
;// ./node_modules/viem/_esm/account-abstraction/clients/createBundlerClient.js


function createBundlerClient(parameters) {
    const { client: client_, dataSuffix, key = 'bundler', name = 'Bundler Client', paymaster, paymasterContext, transport, userOperation, } = parameters;
    const client = Object.assign((0,createClient/* createClient */.U)({
        ...parameters,
        chain: parameters.chain ?? client_?.chain,
        key,
        name,
        transport,
        type: 'bundlerClient',
    }), {
        client: client_,
        dataSuffix: dataSuffix ?? client_?.dataSuffix,
        paymaster,
        paymasterContext,
        userOperation,
    });
    return client.extend(bundlerActions);
}
//# sourceMappingURL=createBundlerClient.js.map

/***/ },

/***/ 432544
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hw: () => (/* binding */ entryPoint06Abi)
/* harmony export */ });
/* unused harmony exports entryPoint07Abi, entryPoint08Abi, entryPoint09Abi */
const entryPoint06Abi = [
    {
        inputs: [
            { name: 'preOpGas', type: 'uint256' },
            { name: 'paid', type: 'uint256' },
            { name: 'validAfter', type: 'uint48' },
            { name: 'validUntil', type: 'uint48' },
            { name: 'targetSuccess', type: 'bool' },
            { name: 'targetResult', type: 'bytes' },
        ],
        name: 'ExecutionResult',
        type: 'error',
    },
    {
        inputs: [
            { name: 'opIndex', type: 'uint256' },
            { name: 'reason', type: 'string' },
        ],
        name: 'FailedOp',
        type: 'error',
    },
    {
        inputs: [{ name: 'sender', type: 'address' }],
        name: 'SenderAddressResult',
        type: 'error',
    },
    {
        inputs: [{ name: 'aggregator', type: 'address' }],
        name: 'SignatureValidationFailed',
        type: 'error',
    },
    {
        inputs: [
            {
                components: [
                    { name: 'preOpGas', type: 'uint256' },
                    { name: 'prefund', type: 'uint256' },
                    { name: 'sigFailed', type: 'bool' },
                    { name: 'validAfter', type: 'uint48' },
                    { name: 'validUntil', type: 'uint48' },
                    { name: 'paymasterContext', type: 'bytes' },
                ],
                name: 'returnInfo',
                type: 'tuple',
            },
            {
                components: [
                    { name: 'stake', type: 'uint256' },
                    { name: 'unstakeDelaySec', type: 'uint256' },
                ],
                name: 'senderInfo',
                type: 'tuple',
            },
            {
                components: [
                    { name: 'stake', type: 'uint256' },
                    { name: 'unstakeDelaySec', type: 'uint256' },
                ],
                name: 'factoryInfo',
                type: 'tuple',
            },
            {
                components: [
                    { name: 'stake', type: 'uint256' },
                    { name: 'unstakeDelaySec', type: 'uint256' },
                ],
                name: 'paymasterInfo',
                type: 'tuple',
            },
        ],
        name: 'ValidationResult',
        type: 'error',
    },
    {
        inputs: [
            {
                components: [
                    { name: 'preOpGas', type: 'uint256' },
                    { name: 'prefund', type: 'uint256' },
                    { name: 'sigFailed', type: 'bool' },
                    { name: 'validAfter', type: 'uint48' },
                    { name: 'validUntil', type: 'uint48' },
                    { name: 'paymasterContext', type: 'bytes' },
                ],
                name: 'returnInfo',
                type: 'tuple',
            },
            {
                components: [
                    { name: 'stake', type: 'uint256' },
                    { name: 'unstakeDelaySec', type: 'uint256' },
                ],
                name: 'senderInfo',
                type: 'tuple',
            },
            {
                components: [
                    { name: 'stake', type: 'uint256' },
                    { name: 'unstakeDelaySec', type: 'uint256' },
                ],
                name: 'factoryInfo',
                type: 'tuple',
            },
            {
                components: [
                    { name: 'stake', type: 'uint256' },
                    { name: 'unstakeDelaySec', type: 'uint256' },
                ],
                name: 'paymasterInfo',
                type: 'tuple',
            },
            {
                components: [
                    { name: 'aggregator', type: 'address' },
                    {
                        components: [
                            { name: 'stake', type: 'uint256' },
                            {
                                name: 'unstakeDelaySec',
                                type: 'uint256',
                            },
                        ],
                        name: 'stakeInfo',
                        type: 'tuple',
                    },
                ],
                name: 'aggregatorInfo',
                type: 'tuple',
            },
        ],
        name: 'ValidationResultWithAggregation',
        type: 'error',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                name: 'factory',
                type: 'address',
            },
            {
                indexed: false,
                name: 'paymaster',
                type: 'address',
            },
        ],
        name: 'AccountDeployed',
        type: 'event',
    },
    { anonymous: false, inputs: [], name: 'BeforeExecution', type: 'event' },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                name: 'totalDeposit',
                type: 'uint256',
            },
        ],
        name: 'Deposited',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'aggregator',
                type: 'address',
            },
        ],
        name: 'SignatureAggregatorChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                name: 'totalStaked',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'unstakeDelaySec',
                type: 'uint256',
            },
        ],
        name: 'StakeLocked',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                name: 'withdrawTime',
                type: 'uint256',
            },
        ],
        name: 'StakeUnlocked',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                name: 'withdrawAddress',
                type: 'address',
            },
            {
                indexed: false,
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'StakeWithdrawn',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address',
            },
            {
                indexed: true,
                name: 'paymaster',
                type: 'address',
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256',
            },
            { indexed: false, name: 'success', type: 'bool' },
            {
                indexed: false,
                name: 'actualGasCost',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'actualGasUsed',
                type: 'uint256',
            },
        ],
        name: 'UserOperationEvent',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'revertReason',
                type: 'bytes',
            },
        ],
        name: 'UserOperationRevertReason',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                name: 'withdrawAddress',
                type: 'address',
            },
            {
                indexed: false,
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'Withdrawn',
        type: 'event',
    },
    {
        inputs: [],
        name: 'SIG_VALIDATION_FAILED',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { name: 'initCode', type: 'bytes' },
            { name: 'sender', type: 'address' },
            { name: 'paymasterAndData', type: 'bytes' },
        ],
        name: '_validateSenderAndPaymaster',
        outputs: [],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ name: 'unstakeDelaySec', type: 'uint32' }],
        name: 'addStake',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [{ name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ name: 'account', type: 'address' }],
        name: 'depositTo',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [{ name: '', type: 'address' }],
        name: 'deposits',
        outputs: [
            { name: 'deposit', type: 'uint112' },
            { name: 'staked', type: 'bool' },
            { name: 'stake', type: 'uint112' },
            { name: 'unstakeDelaySec', type: 'uint32' },
            { name: 'withdrawTime', type: 'uint48' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ name: 'account', type: 'address' }],
        name: 'getDepositInfo',
        outputs: [
            {
                components: [
                    { name: 'deposit', type: 'uint112' },
                    { name: 'staked', type: 'bool' },
                    { name: 'stake', type: 'uint112' },
                    { name: 'unstakeDelaySec', type: 'uint32' },
                    { name: 'withdrawTime', type: 'uint48' },
                ],
                name: 'info',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { name: 'sender', type: 'address' },
            { name: 'key', type: 'uint192' },
        ],
        name: 'getNonce',
        outputs: [{ name: 'nonce', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ name: 'initCode', type: 'bytes' }],
        name: 'getSenderAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    { name: 'sender', type: 'address' },
                    { name: 'nonce', type: 'uint256' },
                    { name: 'initCode', type: 'bytes' },
                    { name: 'callData', type: 'bytes' },
                    { name: 'callGasLimit', type: 'uint256' },
                    {
                        name: 'verificationGasLimit',
                        type: 'uint256',
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256',
                    },
                    { name: 'maxFeePerGas', type: 'uint256' },
                    {
                        name: 'maxPriorityFeePerGas',
                        type: 'uint256',
                    },
                    { name: 'paymasterAndData', type: 'bytes' },
                    { name: 'signature', type: 'bytes' },
                ],
                name: 'userOp',
                type: 'tuple',
            },
        ],
        name: 'getUserOpHash',
        outputs: [{ name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            { name: 'sender', type: 'address' },
                            { name: 'nonce', type: 'uint256' },
                            { name: 'initCode', type: 'bytes' },
                            { name: 'callData', type: 'bytes' },
                            {
                                name: 'callGasLimit',
                                type: 'uint256',
                            },
                            {
                                name: 'verificationGasLimit',
                                type: 'uint256',
                            },
                            {
                                name: 'preVerificationGas',
                                type: 'uint256',
                            },
                            {
                                name: 'maxFeePerGas',
                                type: 'uint256',
                            },
                            {
                                name: 'maxPriorityFeePerGas',
                                type: 'uint256',
                            },
                            {
                                name: 'paymasterAndData',
                                type: 'bytes',
                            },
                            { name: 'signature', type: 'bytes' },
                        ],
                        name: 'userOps',
                        type: 'tuple[]',
                    },
                    {
                        name: 'aggregator',
                        type: 'address',
                    },
                    { name: 'signature', type: 'bytes' },
                ],
                name: 'opsPerAggregator',
                type: 'tuple[]',
            },
            { name: 'beneficiary', type: 'address' },
        ],
        name: 'handleAggregatedOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    { name: 'sender', type: 'address' },
                    { name: 'nonce', type: 'uint256' },
                    { name: 'initCode', type: 'bytes' },
                    { name: 'callData', type: 'bytes' },
                    { name: 'callGasLimit', type: 'uint256' },
                    {
                        name: 'verificationGasLimit',
                        type: 'uint256',
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256',
                    },
                    { name: 'maxFeePerGas', type: 'uint256' },
                    {
                        name: 'maxPriorityFeePerGas',
                        type: 'uint256',
                    },
                    { name: 'paymasterAndData', type: 'bytes' },
                    { name: 'signature', type: 'bytes' },
                ],
                name: 'ops',
                type: 'tuple[]',
            },
            { name: 'beneficiary', type: 'address' },
        ],
        name: 'handleOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ name: 'key', type: 'uint192' }],
        name: 'incrementNonce',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { name: 'callData', type: 'bytes' },
            {
                components: [
                    {
                        components: [
                            { name: 'sender', type: 'address' },
                            { name: 'nonce', type: 'uint256' },
                            {
                                name: 'callGasLimit',
                                type: 'uint256',
                            },
                            {
                                name: 'verificationGasLimit',
                                type: 'uint256',
                            },
                            {
                                name: 'preVerificationGas',
                                type: 'uint256',
                            },
                            { name: 'paymaster', type: 'address' },
                            {
                                name: 'maxFeePerGas',
                                type: 'uint256',
                            },
                            {
                                name: 'maxPriorityFeePerGas',
                                type: 'uint256',
                            },
                        ],
                        name: 'mUserOp',
                        type: 'tuple',
                    },
                    { name: 'userOpHash', type: 'bytes32' },
                    { name: 'prefund', type: 'uint256' },
                    { name: 'contextOffset', type: 'uint256' },
                    { name: 'preOpGas', type: 'uint256' },
                ],
                name: 'opInfo',
                type: 'tuple',
            },
            { name: 'context', type: 'bytes' },
        ],
        name: 'innerHandleOp',
        outputs: [{ name: 'actualGasCost', type: 'uint256' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { name: '', type: 'address' },
            { name: '', type: 'uint192' },
        ],
        name: 'nonceSequenceNumber',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    { name: 'sender', type: 'address' },
                    { name: 'nonce', type: 'uint256' },
                    { name: 'initCode', type: 'bytes' },
                    { name: 'callData', type: 'bytes' },
                    { name: 'callGasLimit', type: 'uint256' },
                    {
                        name: 'verificationGasLimit',
                        type: 'uint256',
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256',
                    },
                    { name: 'maxFeePerGas', type: 'uint256' },
                    {
                        name: 'maxPriorityFeePerGas',
                        type: 'uint256',
                    },
                    { name: 'paymasterAndData', type: 'bytes' },
                    { name: 'signature', type: 'bytes' },
                ],
                name: 'op',
                type: 'tuple',
            },
            { name: 'target', type: 'address' },
            { name: 'targetCallData', type: 'bytes' },
        ],
        name: 'simulateHandleOp',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    { name: 'sender', type: 'address' },
                    { name: 'nonce', type: 'uint256' },
                    { name: 'initCode', type: 'bytes' },
                    { name: 'callData', type: 'bytes' },
                    { name: 'callGasLimit', type: 'uint256' },
                    {
                        name: 'verificationGasLimit',
                        type: 'uint256',
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256',
                    },
                    { name: 'maxFeePerGas', type: 'uint256' },
                    {
                        name: 'maxPriorityFeePerGas',
                        type: 'uint256',
                    },
                    { name: 'paymasterAndData', type: 'bytes' },
                    { name: 'signature', type: 'bytes' },
                ],
                name: 'userOp',
                type: 'tuple',
            },
        ],
        name: 'simulateValidation',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'unlockStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'withdrawAddress',
                type: 'address',
            },
        ],
        name: 'withdrawStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'withdrawAddress',
                type: 'address',
            },
            { name: 'withdrawAmount', type: 'uint256' },
        ],
        name: 'withdrawTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    { stateMutability: 'payable', type: 'receive' },
];
const entryPoint07Abi = [
    {
        inputs: [
            { name: 'success', type: 'bool' },
            { name: 'ret', type: 'bytes' },
        ],
        name: 'DelegateAndRevert',
        type: 'error',
    },
    {
        inputs: [
            { name: 'opIndex', type: 'uint256' },
            { name: 'reason', type: 'string' },
        ],
        name: 'FailedOp',
        type: 'error',
    },
    {
        inputs: [
            { name: 'opIndex', type: 'uint256' },
            { name: 'reason', type: 'string' },
            { name: 'inner', type: 'bytes' },
        ],
        name: 'FailedOpWithRevert',
        type: 'error',
    },
    {
        inputs: [{ name: 'returnData', type: 'bytes' }],
        name: 'PostOpReverted',
        type: 'error',
    },
    { inputs: [], name: 'ReentrancyGuardReentrantCall', type: 'error' },
    {
        inputs: [{ name: 'sender', type: 'address' }],
        name: 'SenderAddressResult',
        type: 'error',
    },
    {
        inputs: [{ name: 'aggregator', type: 'address' }],
        name: 'SignatureValidationFailed',
        type: 'error',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                name: 'factory',
                type: 'address',
            },
            {
                indexed: false,
                name: 'paymaster',
                type: 'address',
            },
        ],
        name: 'AccountDeployed',
        type: 'event',
    },
    { anonymous: false, inputs: [], name: 'BeforeExecution', type: 'event' },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                name: 'totalDeposit',
                type: 'uint256',
            },
        ],
        name: 'Deposited',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'revertReason',
                type: 'bytes',
            },
        ],
        name: 'PostOpRevertReason',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'aggregator',
                type: 'address',
            },
        ],
        name: 'SignatureAggregatorChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                name: 'totalStaked',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'unstakeDelaySec',
                type: 'uint256',
            },
        ],
        name: 'StakeLocked',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                name: 'withdrawTime',
                type: 'uint256',
            },
        ],
        name: 'StakeUnlocked',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                name: 'withdrawAddress',
                type: 'address',
            },
            {
                indexed: false,
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'StakeWithdrawn',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address',
            },
            {
                indexed: true,
                name: 'paymaster',
                type: 'address',
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256',
            },
            { indexed: false, name: 'success', type: 'bool' },
            {
                indexed: false,
                name: 'actualGasCost',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'actualGasUsed',
                type: 'uint256',
            },
        ],
        name: 'UserOperationEvent',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256',
            },
        ],
        name: 'UserOperationPrefundTooLow',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                name: 'nonce',
                type: 'uint256',
            },
            {
                indexed: false,
                name: 'revertReason',
                type: 'bytes',
            },
        ],
        name: 'UserOperationRevertReason',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                name: 'withdrawAddress',
                type: 'address',
            },
            {
                indexed: false,
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'Withdrawn',
        type: 'event',
    },
    {
        inputs: [{ name: 'unstakeDelaySec', type: 'uint32' }],
        name: 'addStake',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [{ name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { name: 'target', type: 'address' },
            { name: 'data', type: 'bytes' },
        ],
        name: 'delegateAndRevert',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ name: 'account', type: 'address' }],
        name: 'depositTo',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [{ name: '', type: 'address' }],
        name: 'deposits',
        outputs: [
            { name: 'deposit', type: 'uint256' },
            { name: 'staked', type: 'bool' },
            { name: 'stake', type: 'uint112' },
            { name: 'unstakeDelaySec', type: 'uint32' },
            { name: 'withdrawTime', type: 'uint48' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ name: 'account', type: 'address' }],
        name: 'getDepositInfo',
        outputs: [
            {
                components: [
                    { name: 'deposit', type: 'uint256' },
                    { name: 'staked', type: 'bool' },
                    { name: 'stake', type: 'uint112' },
                    { name: 'unstakeDelaySec', type: 'uint32' },
                    { name: 'withdrawTime', type: 'uint48' },
                ],
                name: 'info',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { name: 'sender', type: 'address' },
            { name: 'key', type: 'uint192' },
        ],
        name: 'getNonce',
        outputs: [{ name: 'nonce', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ name: 'initCode', type: 'bytes' }],
        name: 'getSenderAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    { name: 'sender', type: 'address' },
                    { name: 'nonce', type: 'uint256' },
                    { name: 'initCode', type: 'bytes' },
                    { name: 'callData', type: 'bytes' },
                    {
                        name: 'accountGasLimits',
                        type: 'bytes32',
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256',
                    },
                    { name: 'gasFees', type: 'bytes32' },
                    { name: 'paymasterAndData', type: 'bytes' },
                    { name: 'signature', type: 'bytes' },
                ],
                name: 'userOp',
                type: 'tuple',
            },
        ],
        name: 'getUserOpHash',
        outputs: [{ name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            { name: 'sender', type: 'address' },
                            { name: 'nonce', type: 'uint256' },
                            { name: 'initCode', type: 'bytes' },
                            { name: 'callData', type: 'bytes' },
                            {
                                name: 'accountGasLimits',
                                type: 'bytes32',
                            },
                            {
                                name: 'preVerificationGas',
                                type: 'uint256',
                            },
                            { name: 'gasFees', type: 'bytes32' },
                            {
                                name: 'paymasterAndData',
                                type: 'bytes',
                            },
                            { name: 'signature', type: 'bytes' },
                        ],
                        name: 'userOps',
                        type: 'tuple[]',
                    },
                    {
                        name: 'aggregator',
                        type: 'address',
                    },
                    { name: 'signature', type: 'bytes' },
                ],
                name: 'opsPerAggregator',
                type: 'tuple[]',
            },
            { name: 'beneficiary', type: 'address' },
        ],
        name: 'handleAggregatedOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    { name: 'sender', type: 'address' },
                    { name: 'nonce', type: 'uint256' },
                    { name: 'initCode', type: 'bytes' },
                    { name: 'callData', type: 'bytes' },
                    {
                        name: 'accountGasLimits',
                        type: 'bytes32',
                    },
                    {
                        name: 'preVerificationGas',
                        type: 'uint256',
                    },
                    { name: 'gasFees', type: 'bytes32' },
                    { name: 'paymasterAndData', type: 'bytes' },
                    { name: 'signature', type: 'bytes' },
                ],
                name: 'ops',
                type: 'tuple[]',
            },
            { name: 'beneficiary', type: 'address' },
        ],
        name: 'handleOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ name: 'key', type: 'uint192' }],
        name: 'incrementNonce',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { name: 'callData', type: 'bytes' },
            {
                components: [
                    {
                        components: [
                            { name: 'sender', type: 'address' },
                            { name: 'nonce', type: 'uint256' },
                            {
                                name: 'verificationGasLimit',
                                type: 'uint256',
                            },
                            {
                                name: 'callGasLimit',
                                type: 'uint256',
                            },
                            {
                                name: 'paymasterVerificationGasLimit',
                                type: 'uint256',
                            },
                            {
                                name: 'paymasterPostOpGasLimit',
                                type: 'uint256',
                            },
                            {
                                name: 'preVerificationGas',
                                type: 'uint256',
                            },
                            { name: 'paymaster', type: 'address' },
                            {
                                name: 'maxFeePerGas',
                                type: 'uint256',
                            },
                            {
                                name: 'maxPriorityFeePerGas',
                                type: 'uint256',
                            },
                        ],
                        name: 'mUserOp',
                        type: 'tuple',
                    },
                    { name: 'userOpHash', type: 'bytes32' },
                    { name: 'prefund', type: 'uint256' },
                    { name: 'contextOffset', type: 'uint256' },
                    { name: 'preOpGas', type: 'uint256' },
                ],
                name: 'opInfo',
                type: 'tuple',
            },
            { name: 'context', type: 'bytes' },
        ],
        name: 'innerHandleOp',
        outputs: [{ name: 'actualGasCost', type: 'uint256' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { name: '', type: 'address' },
            { name: '', type: 'uint192' },
        ],
        name: 'nonceSequenceNumber',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ name: 'interfaceId', type: 'bytes4' }],
        name: 'supportsInterface',
        outputs: [{ name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'unlockStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'withdrawAddress',
                type: 'address',
            },
        ],
        name: 'withdrawStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                name: 'withdrawAddress',
                type: 'address',
            },
            { name: 'withdrawAmount', type: 'uint256' },
        ],
        name: 'withdrawTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    { stateMutability: 'payable', type: 'receive' },
];
const entryPoint08Abi = [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    {
        inputs: [
            { internalType: 'bool', name: 'success', type: 'bool' },
            { internalType: 'bytes', name: 'ret', type: 'bytes' },
        ],
        name: 'DelegateAndRevert',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'opIndex', type: 'uint256' },
            { internalType: 'string', name: 'reason', type: 'string' },
        ],
        name: 'FailedOp',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'opIndex', type: 'uint256' },
            { internalType: 'string', name: 'reason', type: 'string' },
            { internalType: 'bytes', name: 'inner', type: 'bytes' },
        ],
        name: 'FailedOpWithRevert',
        type: 'error',
    },
    { inputs: [], name: 'InvalidShortString', type: 'error' },
    {
        inputs: [{ internalType: 'bytes', name: 'returnData', type: 'bytes' }],
        name: 'PostOpReverted',
        type: 'error',
    },
    { inputs: [], name: 'ReentrancyGuardReentrantCall', type: 'error' },
    {
        inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
        name: 'SenderAddressResult',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'address', name: 'aggregator', type: 'address' }],
        name: 'SignatureValidationFailed',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'string', name: 'str', type: 'string' }],
        name: 'StringTooLong',
        type: 'error',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'factory',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'paymaster',
                type: 'address',
            },
        ],
        name: 'AccountDeployed',
        type: 'event',
    },
    { anonymous: false, inputs: [], name: 'BeforeExecution', type: 'event' },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalDeposit',
                type: 'uint256',
            },
        ],
        name: 'Deposited',
        type: 'event',
    },
    { anonymous: false, inputs: [], name: 'EIP712DomainChanged', type: 'event' },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'revertReason',
                type: 'bytes',
            },
        ],
        name: 'PostOpRevertReason',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'aggregator',
                type: 'address',
            },
        ],
        name: 'SignatureAggregatorChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalStaked',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'unstakeDelaySec',
                type: 'uint256',
            },
        ],
        name: 'StakeLocked',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'withdrawTime',
                type: 'uint256',
            },
        ],
        name: 'StakeUnlocked',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'withdrawAddress',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'StakeWithdrawn',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'paymaster',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256',
            },
            { indexed: false, internalType: 'bool', name: 'success', type: 'bool' },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'actualGasCost',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'actualGasUsed',
                type: 'uint256',
            },
        ],
        name: 'UserOperationEvent',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256',
            },
        ],
        name: 'UserOperationPrefundTooLow',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'revertReason',
                type: 'bytes',
            },
        ],
        name: 'UserOperationRevertReason',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'withdrawAddress',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'Withdrawn',
        type: 'event',
    },
    {
        inputs: [
            { internalType: 'uint32', name: 'unstakeDelaySec', type: 'uint32' },
        ],
        name: 'addStake',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'target', type: 'address' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'delegateAndRevert',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'depositTo',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
            { internalType: 'bytes1', name: 'fields', type: 'bytes1' },
            { internalType: 'string', name: 'name', type: 'string' },
            { internalType: 'string', name: 'version', type: 'string' },
            { internalType: 'uint256', name: 'chainId', type: 'uint256' },
            { internalType: 'address', name: 'verifyingContract', type: 'address' },
            { internalType: 'bytes32', name: 'salt', type: 'bytes32' },
            { internalType: 'uint256[]', name: 'extensions', type: 'uint256[]' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'getDepositInfo',
        outputs: [
            {
                components: [
                    { internalType: 'uint256', name: 'deposit', type: 'uint256' },
                    { internalType: 'bool', name: 'staked', type: 'bool' },
                    { internalType: 'uint112', name: 'stake', type: 'uint112' },
                    { internalType: 'uint32', name: 'unstakeDelaySec', type: 'uint32' },
                    { internalType: 'uint48', name: 'withdrawTime', type: 'uint48' },
                ],
                internalType: 'struct IStakeManager.DepositInfo',
                name: 'info',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getDomainSeparatorV4',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'sender', type: 'address' },
            { internalType: 'uint192', name: 'key', type: 'uint192' },
        ],
        name: 'getNonce',
        outputs: [{ internalType: 'uint256', name: 'nonce', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getPackedUserOpTypeHash',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'bytes', name: 'initCode', type: 'bytes' }],
        name: 'getSenderAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    { internalType: 'address', name: 'sender', type: 'address' },
                    { internalType: 'uint256', name: 'nonce', type: 'uint256' },
                    { internalType: 'bytes', name: 'initCode', type: 'bytes' },
                    { internalType: 'bytes', name: 'callData', type: 'bytes' },
                    {
                        internalType: 'bytes32',
                        name: 'accountGasLimits',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'uint256',
                        name: 'preVerificationGas',
                        type: 'uint256',
                    },
                    { internalType: 'bytes32', name: 'gasFees', type: 'bytes32' },
                    { internalType: 'bytes', name: 'paymasterAndData', type: 'bytes' },
                    { internalType: 'bytes', name: 'signature', type: 'bytes' },
                ],
                internalType: 'struct PackedUserOperation',
                name: 'userOp',
                type: 'tuple',
            },
        ],
        name: 'getUserOpHash',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            { internalType: 'address', name: 'sender', type: 'address' },
                            { internalType: 'uint256', name: 'nonce', type: 'uint256' },
                            { internalType: 'bytes', name: 'initCode', type: 'bytes' },
                            { internalType: 'bytes', name: 'callData', type: 'bytes' },
                            {
                                internalType: 'bytes32',
                                name: 'accountGasLimits',
                                type: 'bytes32',
                            },
                            {
                                internalType: 'uint256',
                                name: 'preVerificationGas',
                                type: 'uint256',
                            },
                            { internalType: 'bytes32', name: 'gasFees', type: 'bytes32' },
                            {
                                internalType: 'bytes',
                                name: 'paymasterAndData',
                                type: 'bytes',
                            },
                            { internalType: 'bytes', name: 'signature', type: 'bytes' },
                        ],
                        internalType: 'struct PackedUserOperation[]',
                        name: 'userOps',
                        type: 'tuple[]',
                    },
                    {
                        internalType: 'contract IAggregator',
                        name: 'aggregator',
                        type: 'address',
                    },
                    { internalType: 'bytes', name: 'signature', type: 'bytes' },
                ],
                internalType: 'struct IEntryPoint.UserOpsPerAggregator[]',
                name: 'opsPerAggregator',
                type: 'tuple[]',
            },
            { internalType: 'address payable', name: 'beneficiary', type: 'address' },
        ],
        name: 'handleAggregatedOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    { internalType: 'address', name: 'sender', type: 'address' },
                    { internalType: 'uint256', name: 'nonce', type: 'uint256' },
                    { internalType: 'bytes', name: 'initCode', type: 'bytes' },
                    { internalType: 'bytes', name: 'callData', type: 'bytes' },
                    {
                        internalType: 'bytes32',
                        name: 'accountGasLimits',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'uint256',
                        name: 'preVerificationGas',
                        type: 'uint256',
                    },
                    { internalType: 'bytes32', name: 'gasFees', type: 'bytes32' },
                    { internalType: 'bytes', name: 'paymasterAndData', type: 'bytes' },
                    { internalType: 'bytes', name: 'signature', type: 'bytes' },
                ],
                internalType: 'struct PackedUserOperation[]',
                name: 'ops',
                type: 'tuple[]',
            },
            { internalType: 'address payable', name: 'beneficiary', type: 'address' },
        ],
        name: 'handleOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint192', name: 'key', type: 'uint192' }],
        name: 'incrementNonce',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'bytes', name: 'callData', type: 'bytes' },
            {
                components: [
                    {
                        components: [
                            { internalType: 'address', name: 'sender', type: 'address' },
                            { internalType: 'uint256', name: 'nonce', type: 'uint256' },
                            {
                                internalType: 'uint256',
                                name: 'verificationGasLimit',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'callGasLimit',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'paymasterVerificationGasLimit',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'paymasterPostOpGasLimit',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'preVerificationGas',
                                type: 'uint256',
                            },
                            { internalType: 'address', name: 'paymaster', type: 'address' },
                            {
                                internalType: 'uint256',
                                name: 'maxFeePerGas',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxPriorityFeePerGas',
                                type: 'uint256',
                            },
                        ],
                        internalType: 'struct EntryPoint.MemoryUserOp',
                        name: 'mUserOp',
                        type: 'tuple',
                    },
                    { internalType: 'bytes32', name: 'userOpHash', type: 'bytes32' },
                    { internalType: 'uint256', name: 'prefund', type: 'uint256' },
                    { internalType: 'uint256', name: 'contextOffset', type: 'uint256' },
                    { internalType: 'uint256', name: 'preOpGas', type: 'uint256' },
                ],
                internalType: 'struct EntryPoint.UserOpInfo',
                name: 'opInfo',
                type: 'tuple',
            },
            { internalType: 'bytes', name: 'context', type: 'bytes' },
        ],
        name: 'innerHandleOp',
        outputs: [
            { internalType: 'uint256', name: 'actualGasCost', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'uint192', name: '', type: 'uint192' },
        ],
        name: 'nonceSequenceNumber',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'senderCreator',
        outputs: [
            { internalType: 'contract ISenderCreator', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'unlockStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address payable',
                name: 'withdrawAddress',
                type: 'address',
            },
        ],
        name: 'withdrawStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address payable',
                name: 'withdrawAddress',
                type: 'address',
            },
            { internalType: 'uint256', name: 'withdrawAmount', type: 'uint256' },
        ],
        name: 'withdrawTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    { stateMutability: 'payable', type: 'receive' },
];
const entryPoint09Abi = [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    {
        inputs: [
            { internalType: 'bool', name: 'success', type: 'bool' },
            { internalType: 'bytes', name: 'ret', type: 'bytes' },
        ],
        name: 'DelegateAndRevert',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'address', name: 'account', type: 'address' },
            { internalType: 'address', name: 'withdrawAddress', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
            { internalType: 'bytes', name: 'revertReason', type: 'bytes' },
        ],
        name: 'DepositWithdrawalFailed',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
        name: 'Eip7702SenderNotDelegate',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
        name: 'Eip7702SenderWithoutCode',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'opIndex', type: 'uint256' },
            { internalType: 'string', name: 'reason', type: 'string' },
        ],
        name: 'FailedOp',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'opIndex', type: 'uint256' },
            { internalType: 'string', name: 'reason', type: 'string' },
            { internalType: 'bytes', name: 'inner', type: 'bytes' },
        ],
        name: 'FailedOpWithRevert',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'address', name: 'beneficiary', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
            { internalType: 'bytes', name: 'revertData', type: 'bytes' },
        ],
        name: 'FailedSendToBeneficiary',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'currentDeposit', type: 'uint256' },
            { internalType: 'uint256', name: 'withdrawAmount', type: 'uint256' },
        ],
        name: 'InsufficientDeposit',
        type: 'error',
    },
    { inputs: [], name: 'InternalFunction', type: 'error' },
    {
        inputs: [{ internalType: 'address', name: 'beneficiary', type: 'address' }],
        name: 'InvalidBeneficiary',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'address', name: 'paymaster', type: 'address' }],
        name: 'InvalidPaymaster',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'paymasterAndDataLength',
                type: 'uint256',
            },
        ],
        name: 'InvalidPaymasterData',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'dataLength', type: 'uint256' },
            { internalType: 'uint256', name: 'pmSignatureLength', type: 'uint256' },
        ],
        name: 'InvalidPaymasterSignatureLength',
        type: 'error',
    },
    { inputs: [], name: 'InvalidShortString', type: 'error' },
    {
        inputs: [
            { internalType: 'uint256', name: 'msgValue', type: 'uint256' },
            { internalType: 'uint256', name: 'currentStake', type: 'uint256' },
        ],
        name: 'InvalidStake',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'newUnstakeDelaySec', type: 'uint256' },
            {
                internalType: 'uint256',
                name: 'currentUnstakeDelaySec',
                type: 'uint256',
            },
        ],
        name: 'InvalidUnstakeDelay',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'currentStake', type: 'uint256' },
            { internalType: 'uint256', name: 'unstakeDelaySec', type: 'uint256' },
            { internalType: 'bool', name: 'staked', type: 'bool' },
        ],
        name: 'NotStaked',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'bytes', name: 'returnData', type: 'bytes' }],
        name: 'PostOpReverted',
        type: 'error',
    },
    { inputs: [], name: 'Reentrancy', type: 'error' },
    {
        inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
        name: 'SenderAddressResult',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'address', name: 'aggregator', type: 'address' }],
        name: 'SignatureValidationFailed',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'withdrawTime', type: 'uint256' },
            { internalType: 'uint256', name: 'blockTimestamp', type: 'uint256' },
        ],
        name: 'StakeNotUnlocked',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'address', name: 'account', type: 'address' },
            { internalType: 'address', name: 'withdrawAddress', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
            { internalType: 'bytes', name: 'revertReason', type: 'bytes' },
        ],
        name: 'StakeWithdrawalFailed',
        type: 'error',
    },
    {
        inputs: [{ internalType: 'string', name: 'str', type: 'string' }],
        name: 'StringTooLong',
        type: 'error',
    },
    {
        inputs: [
            { internalType: 'uint256', name: 'withdrawTime', type: 'uint256' },
            { internalType: 'uint256', name: 'blockTimestamp', type: 'uint256' },
        ],
        name: 'WithdrawalNotDue',
        type: 'error',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'factory',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'paymaster',
                type: 'address',
            },
        ],
        name: 'AccountDeployed',
        type: 'event',
    },
    { anonymous: false, inputs: [], name: 'BeforeExecution', type: 'event' },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalDeposit',
                type: 'uint256',
            },
        ],
        name: 'Deposited',
        type: 'event',
    },
    { anonymous: false, inputs: [], name: 'EIP712DomainChanged', type: 'event' },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'delegate',
                type: 'address',
            },
        ],
        name: 'EIP7702AccountInitialized',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'unusedFactory',
                type: 'address',
            },
        ],
        name: 'IgnoredInitCode',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'revertReason',
                type: 'bytes',
            },
        ],
        name: 'PostOpRevertReason',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'aggregator',
                type: 'address',
            },
        ],
        name: 'SignatureAggregatorChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalStaked',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'unstakeDelaySec',
                type: 'uint256',
            },
        ],
        name: 'StakeLocked',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'withdrawTime',
                type: 'uint256',
            },
        ],
        name: 'StakeUnlocked',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'withdrawAddress',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'StakeWithdrawn',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'paymaster',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256',
            },
            { indexed: false, internalType: 'bool', name: 'success', type: 'bool' },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'actualGasCost',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'actualGasUsed',
                type: 'uint256',
            },
        ],
        name: 'UserOperationEvent',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256',
            },
        ],
        name: 'UserOperationPrefundTooLow',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'userOpHash',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'revertReason',
                type: 'bytes',
            },
        ],
        name: 'UserOperationRevertReason',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'withdrawAddress',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'Withdrawn',
        type: 'event',
    },
    {
        inputs: [
            { internalType: 'uint32', name: 'unstakeDelaySec', type: 'uint32' },
        ],
        name: 'addStake',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'target', type: 'address' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'delegateAndRevert',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'depositTo',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
            { internalType: 'bytes1', name: 'fields', type: 'bytes1' },
            { internalType: 'string', name: 'name', type: 'string' },
            { internalType: 'string', name: 'version', type: 'string' },
            { internalType: 'uint256', name: 'chainId', type: 'uint256' },
            { internalType: 'address', name: 'verifyingContract', type: 'address' },
            { internalType: 'bytes32', name: 'salt', type: 'bytes32' },
            { internalType: 'uint256[]', name: 'extensions', type: 'uint256[]' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getCurrentUserOpHash',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'getDepositInfo',
        outputs: [
            {
                components: [
                    { internalType: 'uint256', name: 'deposit', type: 'uint256' },
                    { internalType: 'bool', name: 'staked', type: 'bool' },
                    { internalType: 'uint112', name: 'stake', type: 'uint112' },
                    { internalType: 'uint32', name: 'unstakeDelaySec', type: 'uint32' },
                    { internalType: 'uint48', name: 'withdrawTime', type: 'uint48' },
                ],
                internalType: 'struct IStakeManager.DepositInfo',
                name: 'info',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getDomainSeparatorV4',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'sender', type: 'address' },
            { internalType: 'uint192', name: 'key', type: 'uint192' },
        ],
        name: 'getNonce',
        outputs: [{ internalType: 'uint256', name: 'nonce', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getPackedUserOpTypeHash',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'bytes', name: 'initCode', type: 'bytes' }],
        name: 'getSenderAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    { internalType: 'address', name: 'sender', type: 'address' },
                    { internalType: 'uint256', name: 'nonce', type: 'uint256' },
                    { internalType: 'bytes', name: 'initCode', type: 'bytes' },
                    { internalType: 'bytes', name: 'callData', type: 'bytes' },
                    {
                        internalType: 'bytes32',
                        name: 'accountGasLimits',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'uint256',
                        name: 'preVerificationGas',
                        type: 'uint256',
                    },
                    { internalType: 'bytes32', name: 'gasFees', type: 'bytes32' },
                    { internalType: 'bytes', name: 'paymasterAndData', type: 'bytes' },
                    { internalType: 'bytes', name: 'signature', type: 'bytes' },
                ],
                internalType: 'struct PackedUserOperation',
                name: 'userOp',
                type: 'tuple',
            },
        ],
        name: 'getUserOpHash',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            { internalType: 'address', name: 'sender', type: 'address' },
                            { internalType: 'uint256', name: 'nonce', type: 'uint256' },
                            { internalType: 'bytes', name: 'initCode', type: 'bytes' },
                            { internalType: 'bytes', name: 'callData', type: 'bytes' },
                            {
                                internalType: 'bytes32',
                                name: 'accountGasLimits',
                                type: 'bytes32',
                            },
                            {
                                internalType: 'uint256',
                                name: 'preVerificationGas',
                                type: 'uint256',
                            },
                            { internalType: 'bytes32', name: 'gasFees', type: 'bytes32' },
                            {
                                internalType: 'bytes',
                                name: 'paymasterAndData',
                                type: 'bytes',
                            },
                            { internalType: 'bytes', name: 'signature', type: 'bytes' },
                        ],
                        internalType: 'struct PackedUserOperation[]',
                        name: 'userOps',
                        type: 'tuple[]',
                    },
                    {
                        internalType: 'contract IAggregator',
                        name: 'aggregator',
                        type: 'address',
                    },
                    { internalType: 'bytes', name: 'signature', type: 'bytes' },
                ],
                internalType: 'struct IEntryPoint.UserOpsPerAggregator[]',
                name: 'opsPerAggregator',
                type: 'tuple[]',
            },
            { internalType: 'address payable', name: 'beneficiary', type: 'address' },
        ],
        name: 'handleAggregatedOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    { internalType: 'address', name: 'sender', type: 'address' },
                    { internalType: 'uint256', name: 'nonce', type: 'uint256' },
                    { internalType: 'bytes', name: 'initCode', type: 'bytes' },
                    { internalType: 'bytes', name: 'callData', type: 'bytes' },
                    {
                        internalType: 'bytes32',
                        name: 'accountGasLimits',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'uint256',
                        name: 'preVerificationGas',
                        type: 'uint256',
                    },
                    { internalType: 'bytes32', name: 'gasFees', type: 'bytes32' },
                    { internalType: 'bytes', name: 'paymasterAndData', type: 'bytes' },
                    { internalType: 'bytes', name: 'signature', type: 'bytes' },
                ],
                internalType: 'struct PackedUserOperation[]',
                name: 'ops',
                type: 'tuple[]',
            },
            { internalType: 'address payable', name: 'beneficiary', type: 'address' },
        ],
        name: 'handleOps',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint192', name: 'key', type: 'uint192' }],
        name: 'incrementNonce',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'bytes', name: 'callData', type: 'bytes' },
            {
                components: [
                    {
                        components: [
                            { internalType: 'address', name: 'sender', type: 'address' },
                            { internalType: 'uint256', name: 'nonce', type: 'uint256' },
                            {
                                internalType: 'uint256',
                                name: 'verificationGasLimit',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'callGasLimit',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'paymasterVerificationGasLimit',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'paymasterPostOpGasLimit',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'preVerificationGas',
                                type: 'uint256',
                            },
                            { internalType: 'address', name: 'paymaster', type: 'address' },
                            {
                                internalType: 'uint256',
                                name: 'maxFeePerGas',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxPriorityFeePerGas',
                                type: 'uint256',
                            },
                        ],
                        internalType: 'struct EntryPoint.MemoryUserOp',
                        name: 'mUserOp',
                        type: 'tuple',
                    },
                    { internalType: 'bytes32', name: 'userOpHash', type: 'bytes32' },
                    { internalType: 'uint256', name: 'prefund', type: 'uint256' },
                    { internalType: 'uint256', name: 'contextOffset', type: 'uint256' },
                    { internalType: 'uint256', name: 'preOpGas', type: 'uint256' },
                ],
                internalType: 'struct EntryPoint.UserOpInfo',
                name: 'opInfo',
                type: 'tuple',
            },
            { internalType: 'bytes', name: 'context', type: 'bytes' },
        ],
        name: 'innerHandleOp',
        outputs: [
            { internalType: 'uint256', name: 'actualGasCost', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'uint192', name: '', type: 'uint192' },
        ],
        name: 'nonceSequenceNumber',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'senderCreator',
        outputs: [
            { internalType: 'contract ISenderCreator', name: '', type: 'address' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'unlockStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address payable',
                name: 'withdrawAddress',
                type: 'address',
            },
        ],
        name: 'withdrawStake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address payable',
                name: 'withdrawAddress',
                type: 'address',
            },
            { internalType: 'uint256', name: 'withdrawAmount', type: 'uint256' },
        ],
        name: 'withdrawTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    { stateMutability: 'payable', type: 'receive' },
];
//# sourceMappingURL=abis.js.map

/***/ },

/***/ 878811
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B9: () => (/* binding */ entryPoint06Address)
/* harmony export */ });
/* unused harmony exports entryPoint07Address, entryPoint08Address, entryPoint09Address */
const entryPoint06Address = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789';
const entryPoint07Address = '0x0000000071727De22E5E9d8BAf0edAc6f37da032';
const entryPoint08Address = '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108';
const entryPoint09Address = '0x433709009B8330FDa32311DF1C2AFA402eD8D009';
//# sourceMappingURL=address.js.map

/***/ },

/***/ 483838
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ getUserOperationHash)
});

// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
var encodeAbiParameters = __webpack_require__(794531);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/hash/keccak256.js
var keccak256 = __webpack_require__(282040);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/signature/hashTypedData.js + 2 modules
var hashTypedData = __webpack_require__(776431);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/concat.js
var concat = __webpack_require__(825419);
;// ./node_modules/viem/_esm/account-abstraction/utils/userOperation/getInitCode.js

function getInitCode(userOperation, options = {}) {
    const { forHash } = options;
    const { authorization, factory, factoryData } = userOperation;
    if (forHash &&
        (factory === '0x7702' ||
            factory === '0x7702000000000000000000000000000000000000')) {
        if (!authorization)
            return '0x7702000000000000000000000000000000000000';
        return (0,concat/* concat */.xW)([authorization.address, factoryData ?? '0x']);
    }
    if (!factory)
        return '0x';
    return (0,concat/* concat */.xW)([factory, factoryData ?? '0x']);
}
//# sourceMappingURL=getInitCode.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/pad.js
var pad = __webpack_require__(540586);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/size.js
var size = __webpack_require__(885182);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toHex.js
var toHex = __webpack_require__(584192);
;// ./node_modules/viem/_esm/account-abstraction/utils/userOperation/toPackedUserOperation.js





/** Magic suffix for paymaster signature encoding (keccak256("PaymasterSignature")[:8]) */
const paymasterSignatureMagic = '0x22e325a297439656';
function toPackedUserOperation(userOperation, options = {}) {
    const { callGasLimit, callData, maxPriorityFeePerGas, maxFeePerGas, paymaster, paymasterData, paymasterPostOpGasLimit, paymasterSignature, paymasterVerificationGasLimit, sender, signature = '0x', verificationGasLimit, } = userOperation;
    const accountGasLimits = (0,concat/* concat */.xW)([
        (0,pad/* pad */.eV)((0,toHex/* numberToHex */.cK)(verificationGasLimit || 0n), { size: 16 }),
        (0,pad/* pad */.eV)((0,toHex/* numberToHex */.cK)(callGasLimit || 0n), { size: 16 }),
    ]);
    const initCode = getInitCode(userOperation, options);
    const gasFees = (0,concat/* concat */.xW)([
        (0,pad/* pad */.eV)((0,toHex/* numberToHex */.cK)(maxPriorityFeePerGas || 0n), { size: 16 }),
        (0,pad/* pad */.eV)((0,toHex/* numberToHex */.cK)(maxFeePerGas || 0n), { size: 16 }),
    ]);
    const nonce = userOperation.nonce ?? 0n;
    // For v0.9, paymasterSignature can be provided separately and appended after paymasterData.
    // The encoding uses a magic suffix and length prefix as per ERC-4337 spec:
    // - forHash: just append the magic (signature is not part of hash)
    // - !forHash: append signature + length (2 bytes) + magic
    const paymasterAndData = paymaster
        ? (0,concat/* concat */.xW)([
            paymaster,
            (0,pad/* pad */.eV)((0,toHex/* numberToHex */.cK)(paymasterVerificationGasLimit || 0n), {
                size: 16,
            }),
            (0,pad/* pad */.eV)((0,toHex/* numberToHex */.cK)(paymasterPostOpGasLimit || 0n), {
                size: 16,
            }),
            paymasterData || '0x',
            ...(paymasterSignature
                ? options.forHash
                    ? [paymasterSignatureMagic]
                    : [
                        paymasterSignature,
                        (0,pad/* pad */.eV)((0,toHex/* numberToHex */.cK)((0,size/* size */.E)(paymasterSignature)), { size: 2 }),
                        paymasterSignatureMagic,
                    ]
                : []),
        ])
        : '0x';
    const preVerificationGas = userOperation.preVerificationGas ?? 0n;
    return {
        accountGasLimits,
        callData,
        initCode,
        gasFees,
        nonce,
        paymasterAndData,
        preVerificationGas,
        sender,
        signature,
    };
}
//# sourceMappingURL=toPackedUserOperation.js.map
;// ./node_modules/viem/_esm/account-abstraction/utils/userOperation/getUserOperationTypedData.js

const types = {
    PackedUserOperation: [
        { type: 'address', name: 'sender' },
        { type: 'uint256', name: 'nonce' },
        { type: 'bytes', name: 'initCode' },
        { type: 'bytes', name: 'callData' },
        { type: 'bytes32', name: 'accountGasLimits' },
        { type: 'uint256', name: 'preVerificationGas' },
        { type: 'bytes32', name: 'gasFees' },
        { type: 'bytes', name: 'paymasterAndData' },
    ],
};
function getUserOperationTypedData(parameters) {
    const { chainId, entryPointAddress, userOperation } = parameters;
    const packedUserOp = toPackedUserOperation(userOperation, { forHash: true });
    return {
        types,
        primaryType: 'PackedUserOperation',
        domain: {
            name: 'ERC4337',
            version: '1',
            chainId,
            verifyingContract: entryPointAddress,
        },
        message: packedUserOp,
    };
}
//# sourceMappingURL=getUserOperationTypedData.js.map
;// ./node_modules/viem/_esm/account-abstraction/utils/userOperation/getUserOperationHash.js






function getUserOperationHash(parameters) {
    const { chainId, entryPointAddress, entryPointVersion } = parameters;
    const userOperation = parameters.userOperation;
    const { authorization, callData = '0x', callGasLimit, maxFeePerGas, maxPriorityFeePerGas, nonce, paymasterAndData = '0x', preVerificationGas, sender, verificationGasLimit, } = userOperation;
    if (entryPointVersion === '0.8' || entryPointVersion === '0.9')
        return (0,hashTypedData/* hashTypedData */.Zh)(getUserOperationTypedData({
            chainId,
            entryPointAddress,
            userOperation,
        }));
    const packedUserOp = (() => {
        if (entryPointVersion === '0.6') {
            const factory = userOperation.initCode?.slice(0, 42);
            const factoryData = userOperation.initCode?.slice(42);
            const initCode = getInitCode({
                authorization,
                factory,
                factoryData,
            }, { forHash: true });
            return (0,encodeAbiParameters/* encodeAbiParameters */.h)([
                { type: 'address' },
                { type: 'uint256' },
                { type: 'bytes32' },
                { type: 'bytes32' },
                { type: 'uint256' },
                { type: 'uint256' },
                { type: 'uint256' },
                { type: 'uint256' },
                { type: 'uint256' },
                { type: 'bytes32' },
            ], [
                sender,
                nonce,
                (0,keccak256/* keccak256 */.S)(initCode),
                (0,keccak256/* keccak256 */.S)(callData),
                callGasLimit,
                verificationGasLimit,
                preVerificationGas,
                maxFeePerGas,
                maxPriorityFeePerGas,
                (0,keccak256/* keccak256 */.S)(paymasterAndData),
            ]);
        }
        if (entryPointVersion === '0.7') {
            const packedUserOp = toPackedUserOperation(userOperation, {
                forHash: true,
            });
            return (0,encodeAbiParameters/* encodeAbiParameters */.h)([
                { type: 'address' },
                { type: 'uint256' },
                { type: 'bytes32' },
                { type: 'bytes32' },
                { type: 'bytes32' },
                { type: 'uint256' },
                { type: 'bytes32' },
                { type: 'bytes32' },
            ], [
                packedUserOp.sender,
                packedUserOp.nonce,
                (0,keccak256/* keccak256 */.S)(packedUserOp.initCode),
                (0,keccak256/* keccak256 */.S)(packedUserOp.callData),
                packedUserOp.accountGasLimits,
                packedUserOp.preVerificationGas,
                packedUserOp.gasFees,
                (0,keccak256/* keccak256 */.S)(packedUserOp.paymasterAndData),
            ]);
        }
        throw new Error(`entryPointVersion "${entryPointVersion}" not supported.`);
    })();
    return (0,keccak256/* keccak256 */.S)((0,encodeAbiParameters/* encodeAbiParameters */.h)([{ type: 'bytes32' }, { type: 'address' }, { type: 'uint256' }], [(0,keccak256/* keccak256 */.S)(packedUserOp), entryPointAddress, BigInt(chainId)]));
}
//# sourceMappingURL=getUserOperationHash.js.map

/***/ },

/***/ 396207
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ waitForCallsStatus)
});

// UNUSED EXPORTS: WaitForCallsStatusTimeoutError

// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/base.js + 1 modules
var base = __webpack_require__(345765);
;// ./node_modules/viem/_esm/errors/calls.js

class BundleFailedError extends base/* BaseError */.C {
    constructor(result) {
        super(`Call bundle failed with status: ${result.statusCode}`, {
            name: 'BundleFailedError',
        });
        Object.defineProperty(this, "result", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.result = result;
    }
}
//# sourceMappingURL=calls.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/getAction.js
var getAction = __webpack_require__(863692);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/observe.js
var observe = __webpack_require__(959726);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/poll.js
var poll = __webpack_require__(955213);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/promise/withResolvers.js
var withResolvers = __webpack_require__(9091);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/promise/withRetry.js
var withRetry = __webpack_require__(339910);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/stringify.js
var stringify = __webpack_require__(218463);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/slice.js
var slice = __webpack_require__(993577);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/trim.js
var trim = __webpack_require__(38583);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/fromHex.js
var fromHex = __webpack_require__(6675);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/formatters/transactionReceipt.js
var transactionReceipt = __webpack_require__(777610);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toHex.js
var toHex = __webpack_require__(584192);
;// ./node_modules/viem/_esm/actions/wallet/sendCalls.js
/* unused harmony import specifier */ var parseAccount;
/* unused harmony import specifier */ var BaseError;
/* unused harmony import specifier */ var UnsupportedNonOptionalCapabilityError;
/* unused harmony import specifier */ var AtomicityNotSupportedError;
/* unused harmony import specifier */ var encodeFunctionData;
/* unused harmony import specifier */ var concat;
/* unused harmony import specifier */ var hexToBigInt;
/* unused harmony import specifier */ var numberToHex;
/* unused harmony import specifier */ var getTransactionError;
/* unused harmony import specifier */ var sendTransaction;









const fallbackMagicIdentifier = '0x5792579257925792579257925792579257925792579257925792579257925792';
const fallbackTransactionErrorMagicIdentifier = (0,toHex/* numberToHex */.cK)(0, {
    size: 32,
});
/**
 * Requests the connected wallet to send a batch of calls.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/sendCalls
 * - JSON-RPC Methods: [`wallet_sendCalls`](https://eips.ethereum.org/EIPS/eip-5792)
 *
 * @param client - Client to use
 * @returns Transaction identifier. {@link SendCallsReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { sendCalls } from 'viem/actions'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const id = await sendCalls(client, {
 *   account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
 *   calls: [
 *     {
 *       data: '0xdeadbeef',
 *       to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 *     },
 *     {
 *       to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 *       value: 69420n,
 *     },
 *   ],
 * })
 */
async function sendCalls(client, parameters) {
    const { account: account_ = client.account, chain = client.chain, experimental_fallback, experimental_fallbackDelay = 32, forceAtomic = false, id, version = '2.0.0', } = parameters;
    const account = account_ ? parseAccount(account_) : null;
    let capabilities = parameters.capabilities;
    if (client.dataSuffix && !parameters.capabilities?.dataSuffix) {
        if (typeof client.dataSuffix === 'string')
            capabilities = {
                ...parameters.capabilities,
                dataSuffix: { value: client.dataSuffix, optional: true },
            };
        else
            capabilities = {
                ...parameters.capabilities,
                dataSuffix: {
                    value: client.dataSuffix.value,
                    ...(client.dataSuffix.required ? {} : { optional: true }),
                },
            };
    }
    const calls = parameters.calls.map((call_) => {
        const call = call_;
        const data = call.abi
            ? encodeFunctionData({
                abi: call.abi,
                functionName: call.functionName,
                args: call.args,
            })
            : call.data;
        return {
            data: call.dataSuffix && data ? concat([data, call.dataSuffix]) : data,
            to: call.to,
            value: call.value ? numberToHex(call.value) : undefined,
        };
    });
    try {
        const response = await client.request({
            method: 'wallet_sendCalls',
            params: [
                {
                    atomicRequired: forceAtomic,
                    calls,
                    capabilities,
                    chainId: numberToHex(chain.id),
                    from: account?.address,
                    id,
                    version,
                },
            ],
        }, { retryCount: 0 });
        if (typeof response === 'string')
            return { id: response };
        return response;
    }
    catch (err) {
        const error = err;
        // If the transport does not support EIP-5792, fall back to
        // `eth_sendTransaction`.
        if (experimental_fallback &&
            (error.name === 'MethodNotFoundRpcError' ||
                error.name === 'MethodNotSupportedRpcError' ||
                error.name === 'UnknownRpcError' ||
                error.details
                    .toLowerCase()
                    .includes('does not exist / is not available') ||
                error.details.toLowerCase().includes('missing or invalid. request()') ||
                error.details
                    .toLowerCase()
                    .includes('did not match any variant of untagged enum') ||
                error.details
                    .toLowerCase()
                    .includes('account upgraded to unsupported contract') ||
                error.details.toLowerCase().includes('eip-7702 not supported') ||
                error.details.toLowerCase().includes('unsupported wc_ method') ||
                // magic.link
                error.details
                    .toLowerCase()
                    .includes('feature toggled misconfigured') ||
                // Trust Wallet
                error.details
                    .toLowerCase()
                    .includes('jsonrpcengine: response has no error or result for request'))) {
            if (capabilities) {
                const hasNonOptionalCapability = Object.values(capabilities).some((capability) => !capability.optional);
                if (hasNonOptionalCapability) {
                    const message = 'non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.';
                    throw new UnsupportedNonOptionalCapabilityError(new BaseError(message, {
                        details: message,
                    }));
                }
            }
            if (forceAtomic && calls.length > 1) {
                const message = '`forceAtomic` is not supported on fallback to `eth_sendTransaction`.';
                throw new AtomicityNotSupportedError(new BaseError(message, {
                    details: message,
                }));
            }
            const promises = [];
            for (const call of calls) {
                const promise = sendTransaction(client, {
                    account,
                    chain,
                    data: call.data,
                    to: call.to,
                    value: call.value ? hexToBigInt(call.value) : undefined,
                });
                promises.push(promise);
                // Note: some browser wallets require a small delay between transactions
                // to prevent duplicate JSON-RPC requests.
                if (experimental_fallbackDelay > 0)
                    await new Promise((resolve) => setTimeout(resolve, experimental_fallbackDelay));
            }
            const results = await Promise.allSettled(promises);
            if (results.every((r) => r.status === 'rejected'))
                throw results[0].reason;
            const hashes = results.map((result) => {
                if (result.status === 'fulfilled')
                    return result.value;
                return fallbackTransactionErrorMagicIdentifier;
            });
            return {
                id: concat([
                    ...hashes,
                    numberToHex(chain.id, { size: 32 }),
                    fallbackMagicIdentifier,
                ]),
            };
        }
        throw getTransactionError(err, {
            ...parameters,
            account,
            chain: parameters.chain,
        });
    }
}
//# sourceMappingURL=sendCalls.js.map
;// ./node_modules/viem/_esm/actions/wallet/getCallsStatus.js





/**
 * Returns the status of a call batch that was sent via `sendCalls`.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/getCallsStatus
 * - JSON-RPC Methods: [`wallet_getCallsStatus`](https://eips.ethereum.org/EIPS/eip-5792)
 *
 * @param client - Client to use
 * @returns Status of the calls. {@link GetCallsStatusReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getCallsStatus } from 'viem/actions'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const { receipts, status } = await getCallsStatus(client, { id: '0xdeadbeef' })
 */
async function getCallsStatus(client, parameters) {
    async function getStatus(id) {
        const isTransactions = id.endsWith(fallbackMagicIdentifier.slice(2));
        if (isTransactions) {
            const chainId = (0,trim/* trim */.B)((0,slice/* sliceHex */.iN)(id, -64, -32));
            const hashes = (0,slice/* sliceHex */.iN)(id, 0, -64)
                .slice(2)
                .match(/.{1,64}/g);
            const receipts = await Promise.all(hashes.map((hash) => fallbackTransactionErrorMagicIdentifier.slice(2) !== hash
                ? client.request({
                    method: 'eth_getTransactionReceipt',
                    params: [`0x${hash}`],
                }, { dedupe: true })
                : undefined));
            const status = (() => {
                if (receipts.some((r) => r === null))
                    return 100; // pending
                if (receipts.every((r) => r?.status === '0x1'))
                    return 200; // success
                if (receipts.every((r) => r?.status === '0x0'))
                    return 500; // complete failure
                return 600; // partial failure
            })();
            return {
                atomic: false,
                chainId: (0,fromHex/* hexToNumber */.ME)(chainId),
                receipts: receipts.filter(Boolean),
                status,
                version: '2.0.0',
            };
        }
        return client.request({
            method: 'wallet_getCallsStatus',
            params: [id],
        });
    }
    const { atomic = false, chainId, receipts, version = '2.0.0', ...response } = await getStatus(parameters.id);
    const [status, statusCode] = (() => {
        const statusCode = response.status;
        if (statusCode >= 100 && statusCode < 200)
            return ['pending', statusCode];
        if (statusCode >= 200 && statusCode < 300)
            return ['success', statusCode];
        if (statusCode >= 300 && statusCode < 700)
            return ['failure', statusCode];
        // @ts-expect-error: for backwards compatibility
        if (statusCode === 'CONFIRMED')
            return ['success', 200];
        // @ts-expect-error: for backwards compatibility
        if (statusCode === 'PENDING')
            return ['pending', 100];
        return [undefined, statusCode];
    })();
    return {
        ...response,
        atomic,
        // @ts-expect-error: for backwards compatibility
        chainId: chainId ? (0,fromHex/* hexToNumber */.ME)(chainId) : undefined,
        receipts: receipts?.map((receipt) => ({
            ...receipt,
            blockNumber: (0,fromHex/* hexToBigInt */.uU)(receipt.blockNumber),
            gasUsed: (0,fromHex/* hexToBigInt */.uU)(receipt.gasUsed),
            status: transactionReceipt/* receiptStatuses */.Lj[receipt.status],
        })) ?? [],
        statusCode,
        status,
        version,
    };
}
//# sourceMappingURL=getCallsStatus.js.map
;// ./node_modules/viem/_esm/actions/wallet/waitForCallsStatus.js









/**
 * Waits for the status & receipts of a call bundle that was sent via `sendCalls`.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/waitForCallsStatus
 * - JSON-RPC Methods: [`wallet_getCallsStatus`](https://eips.ethereum.org/EIPS/eip-5792)
 *
 * @param client - Client to use
 * @param parameters - {@link WaitForCallsStatusParameters}
 * @returns Status & receipts of the call bundle. {@link WaitForCallsStatusReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { waitForCallsStatus } from 'viem/actions'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 *
 * const { receipts, status } = await waitForCallsStatus(client, { id: '0xdeadbeef' })
 */
async function waitForCallsStatus(client, parameters) {
    const { id, pollingInterval = client.pollingInterval, status = ({ statusCode }) => statusCode === 200 || statusCode >= 300, retryCount = 4, retryDelay = ({ count }) => ~~(1 << count) * 200, // exponential backoff
    timeout = 60_000, throwOnFailure = false, } = parameters;
    const observerId = (0,stringify/* stringify */.A)(['waitForCallsStatus', client.uid, id]);
    const { promise, resolve, reject } = (0,withResolvers/* withResolvers */.Y)();
    let timer;
    const unobserve = (0,observe/* observe */.lB)(observerId, { resolve, reject }, (emit) => {
        const unpoll = (0,poll/* poll */.w)(async () => {
            const done = (fn) => {
                clearTimeout(timer);
                unpoll();
                fn();
                unobserve();
            };
            try {
                const result = await (0,withRetry/* withRetry */.b)(async () => {
                    const result = await (0,getAction/* getAction */.T)(client, getCallsStatus, 'getCallsStatus')({ id });
                    if (throwOnFailure && result.status === 'failure')
                        throw new BundleFailedError(result);
                    return result;
                }, {
                    retryCount,
                    delay: retryDelay,
                });
                if (!status(result))
                    return;
                done(() => emit.resolve(result));
            }
            catch (error) {
                done(() => emit.reject(error));
            }
        }, {
            interval: pollingInterval,
            emitOnBegin: true,
        });
        return unpoll;
    });
    timer = timeout
        ? setTimeout(() => {
            unobserve();
            clearTimeout(timer);
            reject(new WaitForCallsStatusTimeoutError({ id }));
        }, timeout)
        : undefined;
    return await promise;
}
class WaitForCallsStatusTimeoutError extends base/* BaseError */.C {
    constructor({ id }) {
        super(`Timed out while waiting for call bundle with id "${id}" to be confirmed.`, { name: 'WaitForCallsStatusTimeoutError' });
    }
}
//# sourceMappingURL=waitForCallsStatus.js.map

/***/ },

/***/ 610005
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ encodePacked)
/* harmony export */ });
/* harmony import */ var _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137372);
/* harmony import */ var _errors_address_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14306);
/* harmony import */ var _address_isAddress_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(529873);
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(825419);
/* harmony import */ var _data_pad_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(540586);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(584192);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(158213);







function encodePacked(types, values) {
    if (types.length !== values.length)
        throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .AbiEncodingLengthMismatchError */ .YE({
            expectedLength: types.length,
            givenLength: values.length,
        });
    const data = [];
    for (let i = 0; i < types.length; i++) {
        const type = types[i];
        const value = values[i];
        data.push(encode(type, value));
    }
    return (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_3__/* .concatHex */ .aP)(data);
}
function encode(type, value, isArray = false) {
    if (type === 'address') {
        const address = value;
        if (!(0,_address_isAddress_js__WEBPACK_IMPORTED_MODULE_2__/* .isAddress */ .P)(address))
            throw new _errors_address_js__WEBPACK_IMPORTED_MODULE_1__/* .InvalidAddressError */ .M({ address });
        return (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_4__/* .pad */ .eV)(address.toLowerCase(), {
            size: isArray ? 32 : null,
        });
    }
    if (type === 'string')
        return (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_5__/* .stringToHex */ .i3)(value);
    if (type === 'bytes')
        return value;
    if (type === 'bool')
        return (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_4__/* .pad */ .eV)((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_5__/* .boolToHex */ .$P)(value), { size: isArray ? 32 : 1 });
    const intMatch = type.match(_regex_js__WEBPACK_IMPORTED_MODULE_6__/* .integerRegex */ .Ge);
    if (intMatch) {
        const [_type, baseType, bits = '256'] = intMatch;
        const size = Number.parseInt(bits, 10) / 8;
        return (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_5__/* .numberToHex */ .cK)(value, {
            size: isArray ? 32 : size,
            signed: baseType === 'int',
        });
    }
    const bytesMatch = type.match(_regex_js__WEBPACK_IMPORTED_MODULE_6__/* .bytesRegex */ .BD);
    if (bytesMatch) {
        const [_type, size] = bytesMatch;
        if (Number.parseInt(size, 10) !== (value.length - 2) / 2)
            throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .BytesSizeMismatchError */ .BI({
                expectedSize: Number.parseInt(size, 10),
                givenSize: (value.length - 2) / 2,
            });
        return (0,_data_pad_js__WEBPACK_IMPORTED_MODULE_4__/* .pad */ .eV)(value, { dir: 'right', size: isArray ? 32 : null });
    }
    const arrayMatch = type.match(_regex_js__WEBPACK_IMPORTED_MODULE_6__/* .arrayRegex */ .D5);
    if (arrayMatch && Array.isArray(value)) {
        const [_type, childType] = arrayMatch;
        const data = [];
        for (let i = 0; i < value.length; i++) {
            data.push(encode(childType, value[i], true));
        }
        if (data.length === 0)
            return '0x';
        return (0,_data_concat_js__WEBPACK_IMPORTED_MODULE_3__/* .concatHex */ .aP)(data);
    }
    throw new _errors_abi_js__WEBPACK_IMPORTED_MODULE_0__/* .UnsupportedPackedAbiType */ .Wl(type);
}
//# sourceMappingURL=encodePacked.js.map

/***/ },

/***/ 906304
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ parseSignature)
/* harmony export */ });
/* harmony import */ var _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139892);
/* harmony import */ var _utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(584192);


/**
 * @description Parses a hex formatted signature into a structured signature.
 *
 * @param signatureHex Signature in hex format.
 * @returns The structured signature.
 *
 * @example
 * parseSignature('0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db81c')
 * // { r: '0x...', s: '0x...', v: 28n }
 */
function parseSignature(signatureHex) {
    const { r, s } = _noble_curves_secp256k1__WEBPACK_IMPORTED_MODULE_0__.secp256k1.Signature.fromCompact(signatureHex.slice(2, 130));
    const yParityOrV = Number(`0x${signatureHex.slice(130)}`);
    const [v, yParity] = (() => {
        if (yParityOrV === 0 || yParityOrV === 1)
            return [undefined, yParityOrV];
        if (yParityOrV === 27)
            return [BigInt(yParityOrV), 0];
        if (yParityOrV === 28)
            return [BigInt(yParityOrV), 1];
        throw new Error('Invalid yParityOrV value');
    })();
    if (typeof v !== 'undefined')
        return {
            r: (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .numberToHex */ .cK)(r, { size: 32 }),
            s: (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .numberToHex */ .cK)(s, { size: 32 }),
            v,
            yParity,
        };
    return {
        r: (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .numberToHex */ .cK)(r, { size: 32 }),
        s: (0,_utils_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .numberToHex */ .cK)(s, { size: 32 }),
        yParity,
    };
}
//# sourceMappingURL=parseSignature.js.map

/***/ },

/***/ 587134
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KU: () => (/* binding */ createJSONStorage),
/* harmony export */   Zr: () => (/* binding */ persist)
/* harmony export */ });
/* unused harmony exports combine, devtools, redux, subscribeWithSelector */
const reduxImpl = (reducer, initial) => (set, _get, api) => {
  api.dispatch = (action) => {
    set((state) => reducer(state, action), false, action);
    return action;
  };
  api.dispatchFromDevtools = true;
  return { dispatch: (...a) => api.dispatch(...a), ...initial };
};
const redux = (/* unused pure expression or super */ null && (reduxImpl));

const trackedConnections = /* @__PURE__ */ new Map();
const getTrackedConnectionState = (name) => {
  const api = trackedConnections.get(name);
  if (!api) return {};
  return Object.fromEntries(
    Object.entries(api.stores).map(([key, api2]) => [key, api2.getState()])
  );
};
const extractConnectionInformation = (store, extensionConnector, options) => {
  if (store === undefined) {
    return {
      type: "untracked",
      connection: extensionConnector.connect(options)
    };
  }
  const existingConnection = trackedConnections.get(options.name);
  if (existingConnection) {
    return { type: "tracked", store, ...existingConnection };
  }
  const newConnection = {
    connection: extensionConnector.connect(options),
    stores: {}
  };
  trackedConnections.set(options.name, newConnection);
  return { type: "tracked", store, ...newConnection };
};
const devtoolsImpl = (fn, devtoolsOptions = {}) => (set, get, api) => {
  const { enabled, anonymousActionType, store, ...options } = devtoolsOptions;
  let extensionConnector;
  try {
    extensionConnector = (enabled != null ? enabled : ( true ? undefined : 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
  } catch (e) {
  }
  if (!extensionConnector) {
    return fn(set, get, api);
  }
  const { connection, ...connectionInformation } = extractConnectionInformation(store, extensionConnector, options);
  let isRecording = true;
  api.setState = (state, replace, nameOrAction) => {
    const r = set(state, replace);
    if (!isRecording) return r;
    const action = nameOrAction === undefined ? { type: anonymousActionType || "anonymous" } : typeof nameOrAction === "string" ? { type: nameOrAction } : nameOrAction;
    if (store === undefined) {
      connection == null ? undefined : connection.send(action, get());
      return r;
    }
    connection == null ? undefined : connection.send(
      {
        ...action,
        type: `${store}/${action.type}`
      },
      {
        ...getTrackedConnectionState(options.name),
        [store]: api.getState()
      }
    );
    return r;
  };
  const setStateFromDevtools = (...a) => {
    const originalIsRecording = isRecording;
    isRecording = false;
    set(...a);
    isRecording = originalIsRecording;
  };
  const initialState = fn(api.setState, get, api);
  if (connectionInformation.type === "untracked") {
    connection == null ? undefined : connection.init(initialState);
  } else {
    connectionInformation.stores[connectionInformation.store] = api;
    connection == null ? undefined : connection.init(
      Object.fromEntries(
        Object.entries(connectionInformation.stores).map(([key, store2]) => [
          key,
          key === connectionInformation.store ? initialState : store2.getState()
        ])
      )
    );
  }
  if (api.dispatchFromDevtools && typeof api.dispatch === "function") {
    let didWarnAboutReservedActionType = false;
    const originalDispatch = api.dispatch;
    api.dispatch = (...a) => {
      if (( true ? undefined : 0) !== "production" && a[0].type === "__setState" && !didWarnAboutReservedActionType) {
        console.warn(
          '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'
        );
        didWarnAboutReservedActionType = true;
      }
      originalDispatch(...a);
    };
  }
  connection.subscribe((message) => {
    var _a;
    switch (message.type) {
      case "ACTION":
        if (typeof message.payload !== "string") {
          console.error(
            "[zustand devtools middleware] Unsupported action format"
          );
          return;
        }
        return parseJsonThen(
          message.payload,
          (action) => {
            if (action.type === "__setState") {
              if (store === undefined) {
                setStateFromDevtools(action.state);
                return;
              }
              if (Object.keys(action.state).length !== 1) {
                console.error(
                  `
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `
                );
              }
              const stateFromDevtools = action.state[store];
              if (stateFromDevtools === undefined || stateFromDevtools === null) {
                return;
              }
              if (JSON.stringify(api.getState()) !== JSON.stringify(stateFromDevtools)) {
                setStateFromDevtools(stateFromDevtools);
              }
              return;
            }
            if (!api.dispatchFromDevtools) return;
            if (typeof api.dispatch !== "function") return;
            api.dispatch(action);
          }
        );
      case "DISPATCH":
        switch (message.payload.type) {
          case "RESET":
            setStateFromDevtools(initialState);
            if (store === undefined) {
              return connection == null ? undefined : connection.init(api.getState());
            }
            return connection == null ? undefined : connection.init(getTrackedConnectionState(options.name));
          case "COMMIT":
            if (store === undefined) {
              connection == null ? undefined : connection.init(api.getState());
              return;
            }
            return connection == null ? undefined : connection.init(getTrackedConnectionState(options.name));
          case "ROLLBACK":
            return parseJsonThen(message.state, (state) => {
              if (store === undefined) {
                setStateFromDevtools(state);
                connection == null ? undefined : connection.init(api.getState());
                return;
              }
              setStateFromDevtools(state[store]);
              connection == null ? undefined : connection.init(getTrackedConnectionState(options.name));
            });
          case "JUMP_TO_STATE":
          case "JUMP_TO_ACTION":
            return parseJsonThen(message.state, (state) => {
              if (store === undefined) {
                setStateFromDevtools(state);
                return;
              }
              if (JSON.stringify(api.getState()) !== JSON.stringify(state[store])) {
                setStateFromDevtools(state[store]);
              }
            });
          case "IMPORT_STATE": {
            const { nextLiftedState } = message.payload;
            const lastComputedState = (_a = nextLiftedState.computedStates.slice(-1)[0]) == null ? undefined : _a.state;
            if (!lastComputedState) return;
            if (store === undefined) {
              setStateFromDevtools(lastComputedState);
            } else {
              setStateFromDevtools(lastComputedState[store]);
            }
            connection == null ? undefined : connection.send(
              null,
              // FIXME no-any
              nextLiftedState
            );
            return;
          }
          case "PAUSE_RECORDING":
            return isRecording = !isRecording;
        }
        return;
    }
  });
  return initialState;
};
const devtools = (/* unused pure expression or super */ null && (devtoolsImpl));
const parseJsonThen = (stringified, f) => {
  let parsed;
  try {
    parsed = JSON.parse(stringified);
  } catch (e) {
    console.error(
      "[zustand devtools middleware] Could not parse the received json",
      e
    );
  }
  if (parsed !== undefined) f(parsed);
};

const subscribeWithSelectorImpl = (fn) => (set, get, api) => {
  const origSubscribe = api.subscribe;
  api.subscribe = (selector, optListener, options) => {
    let listener = selector;
    if (optListener) {
      const equalityFn = (options == null ? undefined : options.equalityFn) || Object.is;
      let currentSlice = selector(api.getState());
      listener = (state) => {
        const nextSlice = selector(state);
        if (!equalityFn(currentSlice, nextSlice)) {
          const previousSlice = currentSlice;
          optListener(currentSlice = nextSlice, previousSlice);
        }
      };
      if (options == null ? undefined : options.fireImmediately) {
        optListener(currentSlice, currentSlice);
      }
    }
    return origSubscribe(listener);
  };
  const initialState = fn(set, get, api);
  return initialState;
};
const subscribeWithSelector = (/* unused pure expression or super */ null && (subscribeWithSelectorImpl));

const combine = (initialState, create) => (...a) => Object.assign({}, initialState, create(...a));

function createJSONStorage(getStorage, options) {
  let storage;
  try {
    storage = getStorage();
  } catch (e) {
    return;
  }
  const persistStorage = {
    getItem: (name) => {
      var _a;
      const parse = (str2) => {
        if (str2 === null) {
          return null;
        }
        return JSON.parse(str2, options == null ? undefined : options.reviver);
      };
      const str = (_a = storage.getItem(name)) != null ? _a : null;
      if (str instanceof Promise) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (name, newValue) => storage.setItem(
      name,
      JSON.stringify(newValue, options == null ? undefined : options.replacer)
    ),
    removeItem: (name) => storage.removeItem(name)
  };
  return persistStorage;
}
const toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e);
      }
    };
  }
};
const persistImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage = options.storage;
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const setItem = () => {
    const state = options.partialize({ ...get() });
    return storage.setItem(options.name, {
      state,
      version: options.version
    });
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
  api.getInitialState = () => configResult;
  let stateFromStorage;
  const hydrate = () => {
    var _a, _b;
    if (!storage) return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => {
      var _a2;
      return cb((_a2 = get()) != null ? _a2 : configResult);
    });
    const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? undefined : _b.call(options, (_a = get()) != null ? _a : configResult)) || undefined;
    return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            const migration = options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
            if (migration instanceof Promise) {
              return migration.then((result) => [true, result]);
            }
            return [true, migration];
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return [false, deserializedStorageValue.state];
        }
      }
      return [false, undefined];
    }).then((migrationResult) => {
      var _a2;
      const [migrated, migratedState] = migrationResult;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      if (migrated) {
        return setItem();
      }
    }).then(() => {
      postRehydrationCallback == null ? undefined : postRehydrationCallback(stateFromStorage, undefined);
      stateFromStorage = get();
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      postRehydrationCallback == null ? undefined : postRehydrationCallback(undefined, e);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.storage) {
        storage = newOptions.storage;
      }
    },
    clearStorage: () => {
      storage == null ? undefined : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  if (!options.skipHydration) {
    hydrate();
  }
  return stateFromStorage || configResult;
};
const persist = persistImpl;




/***/ },

/***/ 997283
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ createStore)
/* harmony export */ });
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;




/***/ }

}]);