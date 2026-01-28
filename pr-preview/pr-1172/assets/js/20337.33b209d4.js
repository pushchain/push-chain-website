(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[20337],{

/***/ 21222
(module, exports, __webpack_require__) {

// Save global object in a variable
var __global__ =
(typeof globalThis !== 'undefined' && globalThis) ||
(typeof self !== 'undefined' && self) ||
(typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g);
// Create an object that extends from __global__ without the fetch function
var __globalThis__ = (function () {
function F() {
this.fetch = false;
this.DOMException = __global__.DOMException
}
F.prototype = __global__; // Needed for feature detection on whatwg-fetch's code
return new F();
})();
// Wraps whatwg-fetch with a function scope to hijack the global object
// "globalThis" that's going to be patched
(function(globalThis) {

var irrelevant = (function (exports) {

  /* eslint-disable no-prototype-builtins */
  var g =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof self !== 'undefined' && self) ||
    // eslint-disable-next-line no-undef
    (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g) ||
    {};

  var support = {
    searchParams: 'URLSearchParams' in g,
    iterable: 'Symbol' in g && 'iterator' in Symbol,
    blob:
      'FileReader' in g &&
      'Blob' in g &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in g,
    arrayBuffer: 'ArrayBuffer' in g
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
      throw new TypeError('Invalid character in header field name: "' + name + '"')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        if (header.length != 2) {
          throw new TypeError('Headers constructor: expected name/value pair to be length 2, found' + header.length)
        }
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body._noBody) return
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
    var encoding = match ? match[1] : 'utf-8';
    reader.readAsText(blob, encoding);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      /*
        fetch-mock wraps the Response object in an ES6 Proxy to
        provide useful test harness features such as flush. However, on
        ES5 browsers without fetch or Proxy support pollyfills must be used;
        the proxy-pollyfill is unable to proxy an attribute unless it exists
        on the object before the Proxy is created. This change ensures
        Response.bodyUsed exists on the instance, while maintaining the
        semantic of setting Request.bodyUsed in the constructor before
        _initBody is called.
      */
      // eslint-disable-next-line no-self-assign
      this.bodyUsed = this.bodyUsed;
      this._bodyInit = body;
      if (!body) {
        this._noBody = true;
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this);
        if (isConsumed) {
          return isConsumed
        } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else if (support.blob) {
        return this.blob().then(readBlobAsArrayBuffer)
      } else {
        throw new Error('could not read as ArrayBuffer')
      }
    };

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    if (!(this instanceof Request)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
    }

    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal || (function () {
      if ('AbortController' in g) {
        var ctrl = new AbortController();
        return ctrl.signal;
      }
    }());
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);

    if (this.method === 'GET' || this.method === 'HEAD') {
      if (options.cache === 'no-store' || options.cache === 'no-cache') {
        // Search for a '_' parameter in the query string
        var reParamSearch = /([?&])_=[^&]*/;
        if (reParamSearch.test(this.url)) {
          // If it already exists then set the value with the current time
          this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
        } else {
          // Otherwise add a new '_' parameter to the end with the current time
          var reQueryString = /\?/;
          this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
        }
      }
    }
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
    // https://github.com/github/fetch/issues/748
    // https://github.com/zloirock/core-js/issues/751
    preProcessedHeaders
      .split('\r')
      .map(function(header) {
        return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
      })
      .forEach(function(line) {
        var parts = line.split(':');
        var key = parts.shift().trim();
        if (key) {
          var value = parts.join(':').trim();
          try {
            headers.append(key, value);
          } catch (error) {
            console.warn('Response ' + error.message);
          }
        }
      });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!(this instanceof Response)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
    }
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    if (this.status < 200 || this.status > 599) {
      throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].")
    }
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 200, statusText: ''});
    response.ok = false;
    response.status = 0;
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = g.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        // This check if specifically for when a user fetches a file locally from the file system
        // Only if the status is out of a normal range
        if (request.url.indexOf('file://') === 0 && (xhr.status < 200 || xhr.status > 599)) {
          options.status = 200;
        } else {
          options.status = xhr.status;
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        setTimeout(function() {
          resolve(new Response(body, options));
        }, 0);
      };

      xhr.onerror = function() {
        setTimeout(function() {
          reject(new TypeError('Network request failed'));
        }, 0);
      };

      xhr.ontimeout = function() {
        setTimeout(function() {
          reject(new TypeError('Network request timed out'));
        }, 0);
      };

      xhr.onabort = function() {
        setTimeout(function() {
          reject(new exports.DOMException('Aborted', 'AbortError'));
        }, 0);
      };

      function fixUrl(url) {
        try {
          return url === '' && g.location.href ? g.location.href : url
        } catch (e) {
          return url
        }
      }

      xhr.open(request.method, fixUrl(request.url), true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr) {
        if (support.blob) {
          xhr.responseType = 'blob';
        } else if (
          support.arrayBuffer
        ) {
          xhr.responseType = 'arraybuffer';
        }
      }

      if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers || (g.Headers && init.headers instanceof g.Headers))) {
        var names = [];
        Object.getOwnPropertyNames(init.headers).forEach(function(name) {
          names.push(normalizeName(name));
          xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
        });
        request.headers.forEach(function(value, name) {
          if (names.indexOf(name) === -1) {
            xhr.setRequestHeader(name, value);
          }
        });
      } else {
        request.headers.forEach(function(value, name) {
          xhr.setRequestHeader(name, value);
        });
      }

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!g.fetch) {
    g.fetch = fetch;
    g.Headers = Headers;
    g.Request = Request;
    g.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
})(__globalThis__);
// This is a ponyfill, so...
__globalThis__.fetch.ponyfill = true;
delete __globalThis__.fetch.polyfill;
// Choose between native implementation (__global__) or custom implementation (__globalThis__)
var ctx = __global__.fetch ? __global__ : __globalThis__;
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
exports["default"] = ctx.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers
exports.Request = ctx.Request
exports.Response = ctx.Response
module.exports = exports


/***/ },

/***/ 74156
(module, __unused_webpack_exports, __webpack_require__) {

// Blake2B in pure Javascript
// Adapted from the reference implementation in RFC7693
// Ported to Javascript by DC - https://github.com/dcposch

const util = __webpack_require__(120829)

// 64-bit unsigned addition
// Sets v[a,a+1] += v[b,b+1]
// v should be a Uint32Array
function ADD64AA (v, a, b) {
  const o0 = v[a] + v[b]
  let o1 = v[a + 1] + v[b + 1]
  if (o0 >= 0x100000000) {
    o1++
  }
  v[a] = o0
  v[a + 1] = o1
}

// 64-bit unsigned addition
// Sets v[a,a+1] += b
// b0 is the low 32 bits of b, b1 represents the high 32 bits
function ADD64AC (v, a, b0, b1) {
  let o0 = v[a] + b0
  if (b0 < 0) {
    o0 += 0x100000000
  }
  let o1 = v[a + 1] + b1
  if (o0 >= 0x100000000) {
    o1++
  }
  v[a] = o0
  v[a + 1] = o1
}

// Little-endian byte access
function B2B_GET32 (arr, i) {
  return arr[i] ^ (arr[i + 1] << 8) ^ (arr[i + 2] << 16) ^ (arr[i + 3] << 24)
}

// G Mixing function
// The ROTRs are inlined for speed
function B2B_G (a, b, c, d, ix, iy) {
  const x0 = m[ix]
  const x1 = m[ix + 1]
  const y0 = m[iy]
  const y1 = m[iy + 1]

  ADD64AA(v, a, b) // v[a,a+1] += v[b,b+1] ... in JS we must store a uint64 as two uint32s
  ADD64AC(v, a, x0, x1) // v[a, a+1] += x ... x0 is the low 32 bits of x, x1 is the high 32 bits

  // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated to the right by 32 bits
  let xor0 = v[d] ^ v[a]
  let xor1 = v[d + 1] ^ v[a + 1]
  v[d] = xor1
  v[d + 1] = xor0

  ADD64AA(v, c, d)

  // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 24 bits
  xor0 = v[b] ^ v[c]
  xor1 = v[b + 1] ^ v[c + 1]
  v[b] = (xor0 >>> 24) ^ (xor1 << 8)
  v[b + 1] = (xor1 >>> 24) ^ (xor0 << 8)

  ADD64AA(v, a, b)
  ADD64AC(v, a, y0, y1)

  // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated right by 16 bits
  xor0 = v[d] ^ v[a]
  xor1 = v[d + 1] ^ v[a + 1]
  v[d] = (xor0 >>> 16) ^ (xor1 << 16)
  v[d + 1] = (xor1 >>> 16) ^ (xor0 << 16)

  ADD64AA(v, c, d)

  // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 63 bits
  xor0 = v[b] ^ v[c]
  xor1 = v[b + 1] ^ v[c + 1]
  v[b] = (xor1 >>> 31) ^ (xor0 << 1)
  v[b + 1] = (xor0 >>> 31) ^ (xor1 << 1)
}

// Initialization Vector
const BLAKE2B_IV32 = new Uint32Array([
  0xf3bcc908, 0x6a09e667, 0x84caa73b, 0xbb67ae85, 0xfe94f82b, 0x3c6ef372,
  0x5f1d36f1, 0xa54ff53a, 0xade682d1, 0x510e527f, 0x2b3e6c1f, 0x9b05688c,
  0xfb41bd6b, 0x1f83d9ab, 0x137e2179, 0x5be0cd19
])

const SIGMA8 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13,
  6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1,
  9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4,
  10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5,
  15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7,
  14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2,
  13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6,
  1, 12, 0, 2, 11, 7, 5, 3
]

// These are offsets into a uint64 buffer.
// Multiply them all by 2 to make them offsets into a uint32 buffer,
// because this is Javascript and we don't have uint64s
const SIGMA82 = new Uint8Array(
  SIGMA8.map(function (x) {
    return x * 2
  })
)

// Compression function. 'last' flag indicates last block.
// Note we're representing 16 uint64s as 32 uint32s
const v = new Uint32Array(32)
const m = new Uint32Array(32)
function blake2bCompress (ctx, last) {
  let i = 0

  // init work variables
  for (i = 0; i < 16; i++) {
    v[i] = ctx.h[i]
    v[i + 16] = BLAKE2B_IV32[i]
  }

  // low 64 bits of offset
  v[24] = v[24] ^ ctx.t
  v[25] = v[25] ^ (ctx.t / 0x100000000)
  // high 64 bits not supported, offset may not be higher than 2**53-1

  // last block flag set ?
  if (last) {
    v[28] = ~v[28]
    v[29] = ~v[29]
  }

  // get little-endian words
  for (i = 0; i < 32; i++) {
    m[i] = B2B_GET32(ctx.b, 4 * i)
  }

  // twelve rounds of mixing
  // uncomment the DebugPrint calls to log the computation
  // and match the RFC sample documentation
  // util.debugPrint('          m[16]', m, 64)
  for (i = 0; i < 12; i++) {
    // util.debugPrint('   (i=' + (i < 10 ? ' ' : '') + i + ') v[16]', v, 64)
    B2B_G(0, 8, 16, 24, SIGMA82[i * 16 + 0], SIGMA82[i * 16 + 1])
    B2B_G(2, 10, 18, 26, SIGMA82[i * 16 + 2], SIGMA82[i * 16 + 3])
    B2B_G(4, 12, 20, 28, SIGMA82[i * 16 + 4], SIGMA82[i * 16 + 5])
    B2B_G(6, 14, 22, 30, SIGMA82[i * 16 + 6], SIGMA82[i * 16 + 7])
    B2B_G(0, 10, 20, 30, SIGMA82[i * 16 + 8], SIGMA82[i * 16 + 9])
    B2B_G(2, 12, 22, 24, SIGMA82[i * 16 + 10], SIGMA82[i * 16 + 11])
    B2B_G(4, 14, 16, 26, SIGMA82[i * 16 + 12], SIGMA82[i * 16 + 13])
    B2B_G(6, 8, 18, 28, SIGMA82[i * 16 + 14], SIGMA82[i * 16 + 15])
  }
  // util.debugPrint('   (i=12) v[16]', v, 64)

  for (i = 0; i < 16; i++) {
    ctx.h[i] = ctx.h[i] ^ v[i] ^ v[i + 16]
  }
  // util.debugPrint('h[8]', ctx.h, 64)
}

// reusable parameterBlock
const parameterBlock = new Uint8Array([
  0,
  0,
  0,
  0, //  0: outlen, keylen, fanout, depth
  0,
  0,
  0,
  0, //  4: leaf length, sequential mode
  0,
  0,
  0,
  0, //  8: node offset
  0,
  0,
  0,
  0, // 12: node offset
  0,
  0,
  0,
  0, // 16: node depth, inner length, rfu
  0,
  0,
  0,
  0, // 20: rfu
  0,
  0,
  0,
  0, // 24: rfu
  0,
  0,
  0,
  0, // 28: rfu
  0,
  0,
  0,
  0, // 32: salt
  0,
  0,
  0,
  0, // 36: salt
  0,
  0,
  0,
  0, // 40: salt
  0,
  0,
  0,
  0, // 44: salt
  0,
  0,
  0,
  0, // 48: personal
  0,
  0,
  0,
  0, // 52: personal
  0,
  0,
  0,
  0, // 56: personal
  0,
  0,
  0,
  0 // 60: personal
])

// Creates a BLAKE2b hashing context
// Requires an output length between 1 and 64 bytes
// Takes an optional Uint8Array key
// Takes an optinal Uint8Array salt
// Takes an optinal Uint8Array personal
function blake2bInit (outlen, key, salt, personal) {
  if (outlen === 0 || outlen > 64) {
    throw new Error('Illegal output length, expected 0 < length <= 64')
  }
  if (key && key.length > 64) {
    throw new Error('Illegal key, expected Uint8Array with 0 < length <= 64')
  }
  if (salt && salt.length !== 16) {
    throw new Error('Illegal salt, expected Uint8Array with length is 16')
  }
  if (personal && personal.length !== 16) {
    throw new Error('Illegal personal, expected Uint8Array with length is 16')
  }

  // state, 'param block'
  const ctx = {
    b: new Uint8Array(128),
    h: new Uint32Array(16),
    t: 0, // input count
    c: 0, // pointer within buffer
    outlen: outlen // output length in bytes
  }

  // initialize parameterBlock before usage
  parameterBlock.fill(0)
  parameterBlock[0] = outlen
  if (key) parameterBlock[1] = key.length
  parameterBlock[2] = 1 // fanout
  parameterBlock[3] = 1 // depth
  if (salt) parameterBlock.set(salt, 32)
  if (personal) parameterBlock.set(personal, 48)

  // initialize hash state
  for (let i = 0; i < 16; i++) {
    ctx.h[i] = BLAKE2B_IV32[i] ^ B2B_GET32(parameterBlock, i * 4)
  }

  // key the hash, if applicable
  if (key) {
    blake2bUpdate(ctx, key)
    // at the end
    ctx.c = 128
  }

  return ctx
}

// Updates a BLAKE2b streaming hash
// Requires hash context and Uint8Array (byte array)
function blake2bUpdate (ctx, input) {
  for (let i = 0; i < input.length; i++) {
    if (ctx.c === 128) {
      // buffer full ?
      ctx.t += ctx.c // add counters
      blake2bCompress(ctx, false) // compress (not last)
      ctx.c = 0 // counter to zero
    }
    ctx.b[ctx.c++] = input[i]
  }
}

// Completes a BLAKE2b streaming hash
// Returns a Uint8Array containing the message digest
function blake2bFinal (ctx) {
  ctx.t += ctx.c // mark last block offset

  while (ctx.c < 128) {
    // fill up with zeros
    ctx.b[ctx.c++] = 0
  }
  blake2bCompress(ctx, true) // final block flag = 1

  // little endian convert and store
  const out = new Uint8Array(ctx.outlen)
  for (let i = 0; i < ctx.outlen; i++) {
    out[i] = ctx.h[i >> 2] >> (8 * (i & 3))
  }
  return out
}

// Computes the BLAKE2B hash of a string or byte array, and returns a Uint8Array
//
// Returns a n-byte Uint8Array
//
// Parameters:
// - input - the input bytes, as a string, Buffer or Uint8Array
// - key - optional key Uint8Array, up to 64 bytes
// - outlen - optional output length in bytes, default 64
// - salt - optional salt bytes, string, Buffer or Uint8Array
// - personal - optional personal bytes, string, Buffer or Uint8Array
function blake2b (input, key, outlen, salt, personal) {
  // preprocess inputs
  outlen = outlen || 64
  input = util.normalizeInput(input)
  if (salt) {
    salt = util.normalizeInput(salt)
  }
  if (personal) {
    personal = util.normalizeInput(personal)
  }

  // do the math
  const ctx = blake2bInit(outlen, key, salt, personal)
  blake2bUpdate(ctx, input)
  return blake2bFinal(ctx)
}

// Computes the BLAKE2B hash of a string or byte array
//
// Returns an n-byte hash in hex, all lowercase
//
// Parameters:
// - input - the input bytes, as a string, Buffer, or Uint8Array
// - key - optional key Uint8Array, up to 64 bytes
// - outlen - optional output length in bytes, default 64
// - salt - optional salt bytes, string, Buffer or Uint8Array
// - personal - optional personal bytes, string, Buffer or Uint8Array
function blake2bHex (input, key, outlen, salt, personal) {
  const output = blake2b(input, key, outlen, salt, personal)
  return util.toHex(output)
}

module.exports = {
  blake2b: blake2b,
  blake2bHex: blake2bHex,
  blake2bInit: blake2bInit,
  blake2bUpdate: blake2bUpdate,
  blake2bFinal: blake2bFinal
}


/***/ },

/***/ 120829
(module) {

const ERROR_MSG_INPUT = 'Input must be an string, Buffer or Uint8Array'

// For convenience, let people hash a string, not just a Uint8Array
function normalizeInput (input) {
  let ret
  if (input instanceof Uint8Array) {
    ret = input
  } else if (typeof input === 'string') {
    const encoder = new TextEncoder()
    ret = encoder.encode(input)
  } else {
    throw new Error(ERROR_MSG_INPUT)
  }
  return ret
}

// Converts a Uint8Array to a hexadecimal string
// For example, toHex([255, 0, 255]) returns "ff00ff"
function toHex (bytes) {
  return Array.prototype.map
    .call(bytes, function (n) {
      return (n < 16 ? '0' : '') + n.toString(16)
    })
    .join('')
}

// Converts any value in [0...2^32-1] to an 8-character hex string
function uint32ToHex (val) {
  return (0x100000000 + val).toString(16).substring(1)
}

// For debugging: prints out hash state in the same format as the RFC
// sample computation exactly, so that you can diff
function debugPrint (label, arr, size) {
  let msg = '\n' + label + ' = '
  for (let i = 0; i < arr.length; i += 2) {
    if (size === 32) {
      msg += uint32ToHex(arr[i]).toUpperCase()
      msg += ' '
      msg += uint32ToHex(arr[i + 1]).toUpperCase()
    } else if (size === 64) {
      msg += uint32ToHex(arr[i + 1]).toUpperCase()
      msg += uint32ToHex(arr[i]).toUpperCase()
    } else throw new Error('Invalid size ' + size)
    if (i % 6 === 4) {
      msg += '\n' + new Array(label.length + 4).join(' ')
    } else if (i < arr.length - 2) {
      msg += ' '
    }
  }
  console.log(msg)
}

// For performance testing: generates N bytes of input, hashes M times
// Measures and prints MB/second hash performance each time
function testSpeed (hashFn, N, M) {
  let startMs = new Date().getTime()

  const input = new Uint8Array(N)
  for (let i = 0; i < N; i++) {
    input[i] = i % 256
  }
  const genMs = new Date().getTime()
  console.log('Generated random input in ' + (genMs - startMs) + 'ms')
  startMs = genMs

  for (let i = 0; i < M; i++) {
    const hashHex = hashFn(input)
    const hashMs = new Date().getTime()
    const ms = hashMs - startMs
    startMs = hashMs
    console.log('Hashed in ' + ms + 'ms: ' + hashHex.substring(0, 20) + '...')
    console.log(
      Math.round((N / (1 << 20) / (ms / 1000)) * 100) / 100 + ' MB PER SECOND'
    )
  }
}

module.exports = {
  normalizeInput: normalizeInput,
  toHex: toHex,
  debugPrint: debugPrint,
  testSpeed: testSpeed
}


/***/ },

/***/ 142439
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ h)
});

// UNUSED EXPORTS: KeyValueStorage

;// ./node_modules/destr/dist/index.mjs
const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}
function safeDestr(value, options = {}) {
  return destr(value, { ...options, strict: true });
}



;// ./node_modules/unstorage/dist/shared/unstorage.zVDD2mZo.mjs
function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = (/* unused pure expression or super */ null && ([
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
]));
function prefixStorage(storage, base) {
  base = unstorage_zVDD2mZo_normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  nsStorage.keys = nsStorage.getKeys;
  nsStorage.getItems = async (items, commonOptions) => {
    const prefixedItems = items.map(
      (item) => typeof item === "string" ? base + item : { ...item, key: base + item.key }
    );
    const results = await storage.getItems(prefixedItems, commonOptions);
    return results.map((entry) => ({
      key: entry.key.slice(base.length),
      value: entry.value
    }));
  };
  nsStorage.setItems = async (items, commonOptions) => {
    const prefixedItems = items.map((item) => ({
      key: base + item.key,
      value: item.value,
      options: item.options
    }));
    return storage.setItems(prefixedItems, commonOptions);
  };
  return nsStorage;
}
function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey(keys.join(":"));
}
function unstorage_zVDD2mZo_normalizeBaseKey(base) {
  base = normalizeKey(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}



;// ./node_modules/unstorage/dist/index.mjs




function defineDriver(factory) {
  return factory;
}

const DRIVER_NAME = "memory";
const memory = defineDriver(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = unstorage_zVDD2mZo_normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = unstorage_zVDD2mZo_normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = unstorage_zVDD2mZo_normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = unstorage_zVDD2mZo_normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
async function snapshot(storage, base) {
  base = normalizeBaseKey(base);
  const keys = await storage.getKeys(base);
  const snapshot2 = {};
  await Promise.all(
    keys.map(async (key) => {
      snapshot2[key.slice(base.length)] = await storage.getItem(key);
    })
  );
  return snapshot2;
}
async function restoreSnapshot(driver, snapshot2, base = "") {
  base = normalizeBaseKey(base);
  await Promise.all(
    Object.entries(snapshot2).map((e) => driver.setItem(base + e[0], e[1]))
  );
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const builtinDrivers = {
  "azure-app-configuration": "unstorage/drivers/azure-app-configuration",
  "azureAppConfiguration": "unstorage/drivers/azure-app-configuration",
  "azure-cosmos": "unstorage/drivers/azure-cosmos",
  "azureCosmos": "unstorage/drivers/azure-cosmos",
  "azure-key-vault": "unstorage/drivers/azure-key-vault",
  "azureKeyVault": "unstorage/drivers/azure-key-vault",
  "azure-storage-blob": "unstorage/drivers/azure-storage-blob",
  "azureStorageBlob": "unstorage/drivers/azure-storage-blob",
  "azure-storage-table": "unstorage/drivers/azure-storage-table",
  "azureStorageTable": "unstorage/drivers/azure-storage-table",
  "capacitor-preferences": "unstorage/drivers/capacitor-preferences",
  "capacitorPreferences": "unstorage/drivers/capacitor-preferences",
  "cloudflare-kv-binding": "unstorage/drivers/cloudflare-kv-binding",
  "cloudflareKVBinding": "unstorage/drivers/cloudflare-kv-binding",
  "cloudflare-kv-http": "unstorage/drivers/cloudflare-kv-http",
  "cloudflareKVHttp": "unstorage/drivers/cloudflare-kv-http",
  "cloudflare-r2-binding": "unstorage/drivers/cloudflare-r2-binding",
  "cloudflareR2Binding": "unstorage/drivers/cloudflare-r2-binding",
  "db0": "unstorage/drivers/db0",
  "deno-kv-node": "unstorage/drivers/deno-kv-node",
  "denoKVNode": "unstorage/drivers/deno-kv-node",
  "deno-kv": "unstorage/drivers/deno-kv",
  "denoKV": "unstorage/drivers/deno-kv",
  "fs-lite": "unstorage/drivers/fs-lite",
  "fsLite": "unstorage/drivers/fs-lite",
  "fs": "unstorage/drivers/fs",
  "github": "unstorage/drivers/github",
  "http": "unstorage/drivers/http",
  "indexedb": "unstorage/drivers/indexedb",
  "localstorage": "unstorage/drivers/localstorage",
  "lru-cache": "unstorage/drivers/lru-cache",
  "lruCache": "unstorage/drivers/lru-cache",
  "memory": "unstorage/drivers/memory",
  "mongodb": "unstorage/drivers/mongodb",
  "netlify-blobs": "unstorage/drivers/netlify-blobs",
  "netlifyBlobs": "unstorage/drivers/netlify-blobs",
  "null": "unstorage/drivers/null",
  "overlay": "unstorage/drivers/overlay",
  "planetscale": "unstorage/drivers/planetscale",
  "redis": "unstorage/drivers/redis",
  "s3": "unstorage/drivers/s3",
  "session-storage": "unstorage/drivers/session-storage",
  "sessionStorage": "unstorage/drivers/session-storage",
  "uploadthing": "unstorage/drivers/uploadthing",
  "upstash": "unstorage/drivers/upstash",
  "vercel-blob": "unstorage/drivers/vercel-blob",
  "vercelBlob": "unstorage/drivers/vercel-blob",
  "vercel-kv": "unstorage/drivers/vercel-kv",
  "vercelKV": "unstorage/drivers/vercel-kv",
  "vercel-runtime-cache": "unstorage/drivers/vercel-runtime-cache",
  "vercelRuntimeCache": "unstorage/drivers/vercel-runtime-cache"
};



;// ./node_modules/idb-keyval/dist/index.js
function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
        // @ts-ignore - file size hacks
        request.oncomplete = request.onsuccess = () => resolve(request.result);
        // @ts-ignore - file size hacks
        request.onabort = request.onerror = () => reject(request.error);
    });
}
function createStore(dbName, storeName) {
    let dbp;
    const getDB = () => {
        if (dbp)
            return dbp;
        const request = indexedDB.open(dbName);
        request.onupgradeneeded = () => request.result.createObjectStore(storeName);
        dbp = promisifyRequest(request);
        dbp.then((db) => {
            // It seems like Safari sometimes likes to just close the connection.
            // It's supposed to fire this event when that happens. Let's hope it does!
            db.onclose = () => (dbp = undefined);
        }, () => { });
        return dbp;
    };
    return (txMode, callback) => getDB().then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
    if (!defaultGetStoreFunc) {
        defaultGetStoreFunc = createStore('keyval-store', 'keyval');
    }
    return defaultGetStoreFunc;
}
/**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function get(key, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => promisifyRequest(store.get(key)));
}
/**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function set(key, value, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.put(value, key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Set multiple values at once. This is faster than calling set() multiple times.
 * It's also atomic – if one of the pairs can't be added, none will be added.
 *
 * @param entries Array of entries, where each entry is an array of `[key, value]`.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function setMany(entries, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        entries.forEach((entry) => store.put(entry[1], entry[0]));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Get multiple values by their keys
 *
 * @param keys
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function getMany(keys, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => Promise.all(keys.map((key) => promisifyRequest(store.get(key)))));
}
/**
 * Update a value. This lets you see the old value and update it as an atomic operation.
 *
 * @param key
 * @param updater A callback that takes the old value and returns a new value.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function update(key, updater, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => 
    // Need to create the promise manually.
    // If I try to chain promises, the transaction closes in browsers
    // that use a promise polyfill (IE10/11).
    new Promise((resolve, reject) => {
        store.get(key).onsuccess = function () {
            try {
                store.put(updater(this.result), key);
                resolve(promisifyRequest(store.transaction));
            }
            catch (err) {
                reject(err);
            }
        };
    }));
}
/**
 * Delete a particular key from the store.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function del(key, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.delete(key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Delete multiple keys at once.
 *
 * @param keys List of keys to delete.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function delMany(keys, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        keys.forEach((key) => store.delete(key));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Clear all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function clear(customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.clear();
        return promisifyRequest(store.transaction);
    });
}
function eachCursor(store, callback) {
    store.openCursor().onsuccess = function () {
        if (!this.result)
            return;
        callback(this.result);
        this.result.continue();
    };
    return promisifyRequest(store.transaction);
}
/**
 * Get all keys in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function keys(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAllKeys) {
            return promisifyRequest(store.getAllKeys());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
    });
}
/**
 * Get all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function values(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAll) {
            return promisifyRequest(store.getAll());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.value)).then(() => items);
    });
}
/**
 * Get all entries in the store. Each entry is an array of `[key, value]`.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function entries(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        // (although, hopefully we'll get a simpler path some day)
        if (store.getAll && store.getAllKeys) {
            return Promise.all([
                promisifyRequest(store.getAllKeys()),
                promisifyRequest(store.getAll()),
            ]).then(([keys, values]) => keys.map((key, i) => [key, values[i]]));
        }
        const items = [];
        return customStore('readonly', (store) => eachCursor(store, (cursor) => items.push([cursor.key, cursor.value])).then(() => items));
    });
}



// EXTERNAL MODULE: ./node_modules/@walletconnect/safe-json/dist/esm/index.js
var esm = __webpack_require__(213554);
;// ./node_modules/@walletconnect/keyvaluestorage/dist/index.es.js
function C(i){return i}const x="idb-keyval";var z=(i={})=>{const t=i.base&&i.base.length>0?`${i.base}:`:"",e=s=>t+s;let n;return i.dbName&&i.storeName&&(n=createStore(i.dbName,i.storeName)),{name:x,options:i,async hasItem(s){return!(typeof await get(e(s),n)>"u")},async getItem(s){return await get(e(s),n)??null},setItem(s,a){return set(e(s),a,n)},removeItem(s){return del(e(s),n)},getKeys(){return keys(n)},clear(){return clear(n)}}};const D="WALLET_CONNECT_V2_INDEXED_DB",E="keyvaluestorage";class _{constructor(){this.indexedDb=createStorage({driver:z({dbName:D,storeName:E})})}async getKeys(){return this.indexedDb.getKeys()}async getEntries(){return(await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(t=>[t.key,t.value])}async getItem(t){const e=await this.indexedDb.getItem(t);if(e!==null)return e}async setItem(t,e){await this.indexedDb.setItem(t,(0,esm/* safeJsonStringify */.h)(e))}async removeItem(t){await this.indexedDb.removeItem(t)}}var l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof __webpack_require__.g<"u"?__webpack_require__.g:typeof self<"u"?self:{},c={exports:{}};(function(){let i;function t(){}i=t,i.prototype.getItem=function(e){return this.hasOwnProperty(e)?String(this[e]):null},i.prototype.setItem=function(e,n){this[e]=String(n)},i.prototype.removeItem=function(e){delete this[e]},i.prototype.clear=function(){const e=this;Object.keys(e).forEach(function(n){e[n]=void 0,delete e[n]})},i.prototype.key=function(e){return e=e||0,Object.keys(this)[e]},i.prototype.__defineGetter__("length",function(){return Object.keys(this).length}),typeof l<"u"&&l.localStorage?c.exports=l.localStorage:typeof window<"u"&&window.localStorage?c.exports=window.localStorage:c.exports=new t})();function k(i){var t;return[i[0],(0,esm/* safeJsonParse */.j)((t=i[1])!=null?t:"")]}class K{constructor(){this.localStorage=c.exports}async getKeys(){return Object.keys(this.localStorage)}async getEntries(){return Object.entries(this.localStorage).map(k)}async getItem(t){const e=this.localStorage.getItem(t);if(e!==null)return (0,esm/* safeJsonParse */.j)(e)}async setItem(t,e){this.localStorage.setItem(t,(0,esm/* safeJsonStringify */.h)(e))}async removeItem(t){this.localStorage.removeItem(t)}}const N="wc_storage_version",y=1,O=async(i,t,e)=>{const n=N,s=await t.getItem(n);if(s&&s>=y){e(t);return}const a=await i.getKeys();if(!a.length){e(t);return}const m=[];for(;a.length;){const r=a.shift();if(!r)continue;const o=r.toLowerCase();if(o.includes("wc@")||o.includes("walletconnect")||o.includes("wc_")||o.includes("wallet_connect")){const f=await i.getItem(r);await t.setItem(r,f),m.push(r)}}await t.setItem(n,y),e(t),j(i,m)},j=async(i,t)=>{t.length&&t.forEach(async e=>{await i.removeItem(e)})};class h{constructor(){this.initialized=!1,this.setInitialized=e=>{this.storage=e,this.initialized=!0};const t=new K;this.storage=t;try{const e=new _;O(t,e,this.setInitialized)}catch{this.initialized=!0}}async getKeys(){return await this.initialize(),this.storage.getKeys()}async getEntries(){return await this.initialize(),this.storage.getEntries()}async getItem(t){return await this.initialize(),this.storage.getItem(t)}async setItem(t,e){return await this.initialize(),this.storage.setItem(t,e)}async removeItem(t){return await this.initialize(),this.storage.removeItem(t)}async initialize(){this.initialized||await new Promise(t=>{const e=setInterval(()=>{this.initialized&&(clearInterval(e),t())},20)})}}
//# sourceMappingURL=index.es.js.map


/***/ },

/***/ 148450
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ src_esm)
});

;// ./node_modules/bs58/node_modules/base-x/src/esm/index.js
// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
function base (ALPHABET) {
  if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }
  const BASE_MAP = new Uint8Array(256)
  for (let j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255
  }
  for (let i = 0; i < ALPHABET.length; i++) {
    const x = ALPHABET.charAt(i)
    const xc = x.charCodeAt(0)
    if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }
    BASE_MAP[xc] = i
  }
  const BASE = ALPHABET.length
  const LEADER = ALPHABET.charAt(0)
  const FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
  const iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
  function encode (source) {
    // eslint-disable-next-line no-empty
    if (source instanceof Uint8Array) { } else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength)
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source)
    }
    if (!(source instanceof Uint8Array)) { throw new TypeError('Expected Uint8Array') }
    if (source.length === 0) { return '' }
    // Skip & count leading zeroes.
    let zeroes = 0
    let length = 0
    let pbegin = 0
    const pend = source.length
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++
      zeroes++
    }
    // Allocate enough space in big-endian base58 representation.
    const size = ((pend - pbegin) * iFACTOR + 1) >>> 0
    const b58 = new Uint8Array(size)
    // Process the bytes.
    while (pbegin !== pend) {
      let carry = source[pbegin]
      // Apply "b58 = b58 * 256 + ch".
      let i = 0
      for (let it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {
        carry += (256 * b58[it1]) >>> 0
        b58[it1] = (carry % BASE) >>> 0
        carry = (carry / BASE) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      pbegin++
    }
    // Skip leading zeroes in base58 result.
    let it2 = size - length
    while (it2 !== size && b58[it2] === 0) {
      it2++
    }
    // Translate the result into a string.
    let str = LEADER.repeat(zeroes)
    for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]) }
    return str
  }
  function decodeUnsafe (source) {
    if (typeof source !== 'string') { throw new TypeError('Expected String') }
    if (source.length === 0) { return new Uint8Array() }
    let psz = 0
    // Skip and count leading '1's.
    let zeroes = 0
    let length = 0
    while (source[psz] === LEADER) {
      zeroes++
      psz++
    }
    // Allocate enough space in big-endian base256 representation.
    const size = (((source.length - psz) * FACTOR) + 1) >>> 0 // log(58) / log(256), rounded up.
    const b256 = new Uint8Array(size)
    // Process the characters.
    while (psz < source.length) {
      // Find code of next character
      const charCode = source.charCodeAt(psz)
      // Base map can not be indexed using char code
      if (charCode > 255) { return }
      // Decode character
      let carry = BASE_MAP[charCode]
      // Invalid character
      if (carry === 255) { return }
      let i = 0
      for (let it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {
        carry += (BASE * b256[it3]) >>> 0
        b256[it3] = (carry % 256) >>> 0
        carry = (carry / 256) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      psz++
    }
    // Skip leading zeroes in b256.
    let it4 = size - length
    while (it4 !== size && b256[it4] === 0) {
      it4++
    }
    const vch = new Uint8Array(zeroes + (size - it4))
    let j = zeroes
    while (it4 !== size) {
      vch[j++] = b256[it4++]
    }
    return vch
  }
  function decode (string) {
    const buffer = decodeUnsafe(string)
    if (buffer) { return buffer }
    throw new Error('Non-base' + BASE + ' character')
  }
  return {
    encode,
    decodeUnsafe,
    decode
  }
}
/* harmony default export */ const esm = (base);

;// ./node_modules/bs58/src/esm/index.js

var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
/* harmony default export */ const src_esm = (esm(ALPHABET));


/***/ },

/***/ 149026
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(880584);
tslib_1.__exportStar(__webpack_require__(979244), exports);
tslib_1.__exportStar(__webpack_require__(331861), exports);
//# sourceMappingURL=index.js.map

/***/ },

/***/ 160221
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromMiliseconds = exports.toMiliseconds = void 0;
const constants_1 = __webpack_require__(149026);
function toMiliseconds(seconds) {
    return seconds * constants_1.ONE_THOUSAND;
}
exports.toMiliseconds = toMiliseconds;
function fromMiliseconds(miliseconds) {
    return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
}
exports.fromMiliseconds = fromMiliseconds;
//# sourceMappingURL=convert.js.map

/***/ },

/***/ 163093
(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IWatch = void 0;
class IWatch {
}
exports.IWatch = IWatch;
//# sourceMappingURL=watch.js.map

/***/ },

/***/ 195414
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ decode)
});

// UNUSED EXPORTS: decodeMulti

;// ./node_modules/@msgpack/msgpack/dist.esm/utils/prettyByte.mjs
function prettyByte(byte) {
    return `${byte < 0 ? "-" : ""}0x${Math.abs(byte).toString(16).padStart(2, "0")}`;
}
//# sourceMappingURL=prettyByte.mjs.map
// EXTERNAL MODULE: ./node_modules/@msgpack/msgpack/dist.esm/ExtensionCodec.mjs + 2 modules
var ExtensionCodec = __webpack_require__(989816);
// EXTERNAL MODULE: ./node_modules/@msgpack/msgpack/dist.esm/utils/int.mjs
var utils_int = __webpack_require__(471901);
// EXTERNAL MODULE: ./node_modules/@msgpack/msgpack/dist.esm/utils/utf8.mjs
var utf8 = __webpack_require__(741595);
// EXTERNAL MODULE: ./node_modules/@msgpack/msgpack/dist.esm/utils/typedArrays.mjs
var typedArrays = __webpack_require__(311468);
;// ./node_modules/@msgpack/msgpack/dist.esm/CachedKeyDecoder.mjs

const DEFAULT_MAX_KEY_LENGTH = 16;
const DEFAULT_MAX_LENGTH_PER_KEY = 16;
class CachedKeyDecoder {
    constructor(maxKeyLength = DEFAULT_MAX_KEY_LENGTH, maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY) {
        this.hit = 0;
        this.miss = 0;
        this.maxKeyLength = maxKeyLength;
        this.maxLengthPerKey = maxLengthPerKey;
        // avoid `new Array(N)`, which makes a sparse array,
        // because a sparse array is typically slower than a non-sparse array.
        this.caches = [];
        for (let i = 0; i < this.maxKeyLength; i++) {
            this.caches.push([]);
        }
    }
    canBeCached(byteLength) {
        return byteLength > 0 && byteLength <= this.maxKeyLength;
    }
    find(bytes, inputOffset, byteLength) {
        const records = this.caches[byteLength - 1];
        FIND_CHUNK: for (const record of records) {
            const recordBytes = record.bytes;
            for (let j = 0; j < byteLength; j++) {
                if (recordBytes[j] !== bytes[inputOffset + j]) {
                    continue FIND_CHUNK;
                }
            }
            return record.str;
        }
        return null;
    }
    store(bytes, value) {
        const records = this.caches[bytes.length - 1];
        const record = { bytes, str: value };
        if (records.length >= this.maxLengthPerKey) {
            // `records` are full!
            // Set `record` to an arbitrary position.
            records[(Math.random() * records.length) | 0] = record;
        }
        else {
            records.push(record);
        }
    }
    decode(bytes, inputOffset, byteLength) {
        const cachedValue = this.find(bytes, inputOffset, byteLength);
        if (cachedValue != null) {
            this.hit++;
            return cachedValue;
        }
        this.miss++;
        const str = (0,utf8/* utf8DecodeJs */.Zf)(bytes, inputOffset, byteLength);
        // Ensure to copy a slice of bytes because the bytes may be a NodeJS Buffer and Buffer#slice() returns a reference to its internal ArrayBuffer.
        const slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes, inputOffset, inputOffset + byteLength);
        this.store(slicedCopyOfBytes, str);
        return str;
    }
}
//# sourceMappingURL=CachedKeyDecoder.mjs.map
// EXTERNAL MODULE: ./node_modules/@msgpack/msgpack/dist.esm/DecodeError.mjs
var DecodeError = __webpack_require__(522184);
;// ./node_modules/@msgpack/msgpack/dist.esm/Decoder.mjs







const STATE_ARRAY = "array";
const STATE_MAP_KEY = "map_key";
const STATE_MAP_VALUE = "map_value";
const mapKeyConverter = (key) => {
    if (typeof key === "string" || typeof key === "number") {
        return key;
    }
    throw new DecodeError/* DecodeError */.X("The type of key must be string or number but " + typeof key);
};
class StackPool {
    constructor() {
        this.stack = [];
        this.stackHeadPosition = -1;
    }
    get length() {
        return this.stackHeadPosition + 1;
    }
    top() {
        return this.stack[this.stackHeadPosition];
    }
    pushArrayState(size) {
        const state = this.getUninitializedStateFromPool();
        state.type = STATE_ARRAY;
        state.position = 0;
        state.size = size;
        state.array = new Array(size);
    }
    pushMapState(size) {
        const state = this.getUninitializedStateFromPool();
        state.type = STATE_MAP_KEY;
        state.readCount = 0;
        state.size = size;
        state.map = {};
    }
    getUninitializedStateFromPool() {
        this.stackHeadPosition++;
        if (this.stackHeadPosition === this.stack.length) {
            const partialState = {
                type: undefined,
                size: 0,
                array: undefined,
                position: 0,
                readCount: 0,
                map: undefined,
                key: null,
            };
            this.stack.push(partialState);
        }
        return this.stack[this.stackHeadPosition];
    }
    release(state) {
        const topStackState = this.stack[this.stackHeadPosition];
        if (topStackState !== state) {
            throw new Error("Invalid stack state. Released state is not on top of the stack.");
        }
        if (state.type === STATE_ARRAY) {
            const partialState = state;
            partialState.size = 0;
            partialState.array = undefined;
            partialState.position = 0;
            partialState.type = undefined;
        }
        if (state.type === STATE_MAP_KEY || state.type === STATE_MAP_VALUE) {
            const partialState = state;
            partialState.size = 0;
            partialState.map = undefined;
            partialState.readCount = 0;
            partialState.type = undefined;
        }
        this.stackHeadPosition--;
    }
    reset() {
        this.stack.length = 0;
        this.stackHeadPosition = -1;
    }
}
const HEAD_BYTE_REQUIRED = -1;
const EMPTY_VIEW = new DataView(new ArrayBuffer(0));
const EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
try {
    // IE11: The spec says it should throw RangeError,
    // IE11: but in IE11 it throws TypeError.
    EMPTY_VIEW.getInt8(0);
}
catch (e) {
    if (!(e instanceof RangeError)) {
        throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
    }
}
const MORE_DATA = new RangeError("Insufficient data");
const sharedCachedKeyDecoder = new CachedKeyDecoder();
class Decoder_Decoder {
    constructor(options) {
        this.totalPos = 0;
        this.pos = 0;
        this.view = EMPTY_VIEW;
        this.bytes = EMPTY_BYTES;
        this.headByte = HEAD_BYTE_REQUIRED;
        this.stack = new StackPool();
        this.entered = false;
        this.extensionCodec = options?.extensionCodec ?? ExtensionCodec/* ExtensionCodec */.g.defaultCodec;
        this.context = options?.context; // needs a type assertion because EncoderOptions has no context property when ContextType is undefined
        this.useBigInt64 = options?.useBigInt64 ?? false;
        this.rawStrings = options?.rawStrings ?? false;
        this.maxStrLength = options?.maxStrLength ?? utils_int/* UINT32_MAX */.f7;
        this.maxBinLength = options?.maxBinLength ?? utils_int/* UINT32_MAX */.f7;
        this.maxArrayLength = options?.maxArrayLength ?? utils_int/* UINT32_MAX */.f7;
        this.maxMapLength = options?.maxMapLength ?? utils_int/* UINT32_MAX */.f7;
        this.maxExtLength = options?.maxExtLength ?? utils_int/* UINT32_MAX */.f7;
        this.keyDecoder = options?.keyDecoder !== undefined ? options.keyDecoder : sharedCachedKeyDecoder;
        this.mapKeyConverter = options?.mapKeyConverter ?? mapKeyConverter;
    }
    clone() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return new Decoder_Decoder({
            extensionCodec: this.extensionCodec,
            context: this.context,
            useBigInt64: this.useBigInt64,
            rawStrings: this.rawStrings,
            maxStrLength: this.maxStrLength,
            maxBinLength: this.maxBinLength,
            maxArrayLength: this.maxArrayLength,
            maxMapLength: this.maxMapLength,
            maxExtLength: this.maxExtLength,
            keyDecoder: this.keyDecoder,
        });
    }
    reinitializeState() {
        this.totalPos = 0;
        this.headByte = HEAD_BYTE_REQUIRED;
        this.stack.reset();
        // view, bytes, and pos will be re-initialized in setBuffer()
    }
    setBuffer(buffer) {
        const bytes = (0,typedArrays/* ensureUint8Array */.C)(buffer);
        this.bytes = bytes;
        this.view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
        this.pos = 0;
    }
    appendBuffer(buffer) {
        if (this.headByte === HEAD_BYTE_REQUIRED && !this.hasRemaining(1)) {
            this.setBuffer(buffer);
        }
        else {
            const remainingData = this.bytes.subarray(this.pos);
            const newData = (0,typedArrays/* ensureUint8Array */.C)(buffer);
            // concat remainingData + newData
            const newBuffer = new Uint8Array(remainingData.length + newData.length);
            newBuffer.set(remainingData);
            newBuffer.set(newData, remainingData.length);
            this.setBuffer(newBuffer);
        }
    }
    hasRemaining(size) {
        return this.view.byteLength - this.pos >= size;
    }
    createExtraByteError(posToShow) {
        const { view, pos } = this;
        return new RangeError(`Extra ${view.byteLength - pos} of ${view.byteLength} byte(s) found at buffer[${posToShow}]`);
    }
    /**
     * @throws {@link DecodeError}
     * @throws {@link RangeError}
     */
    decode(buffer) {
        if (this.entered) {
            const instance = this.clone();
            return instance.decode(buffer);
        }
        try {
            this.entered = true;
            this.reinitializeState();
            this.setBuffer(buffer);
            const object = this.doDecodeSync();
            if (this.hasRemaining(1)) {
                throw this.createExtraByteError(this.pos);
            }
            return object;
        }
        finally {
            this.entered = false;
        }
    }
    *decodeMulti(buffer) {
        if (this.entered) {
            const instance = this.clone();
            yield* instance.decodeMulti(buffer);
            return;
        }
        try {
            this.entered = true;
            this.reinitializeState();
            this.setBuffer(buffer);
            while (this.hasRemaining(1)) {
                yield this.doDecodeSync();
            }
        }
        finally {
            this.entered = false;
        }
    }
    async decodeAsync(stream) {
        if (this.entered) {
            const instance = this.clone();
            return instance.decodeAsync(stream);
        }
        try {
            this.entered = true;
            let decoded = false;
            let object;
            for await (const buffer of stream) {
                if (decoded) {
                    this.entered = false;
                    throw this.createExtraByteError(this.totalPos);
                }
                this.appendBuffer(buffer);
                try {
                    object = this.doDecodeSync();
                    decoded = true;
                }
                catch (e) {
                    if (!(e instanceof RangeError)) {
                        throw e; // rethrow
                    }
                    // fallthrough
                }
                this.totalPos += this.pos;
            }
            if (decoded) {
                if (this.hasRemaining(1)) {
                    throw this.createExtraByteError(this.totalPos);
                }
                return object;
            }
            const { headByte, pos, totalPos } = this;
            throw new RangeError(`Insufficient data in parsing ${prettyByte(headByte)} at ${totalPos} (${pos} in the current buffer)`);
        }
        finally {
            this.entered = false;
        }
    }
    decodeArrayStream(stream) {
        return this.decodeMultiAsync(stream, true);
    }
    decodeStream(stream) {
        return this.decodeMultiAsync(stream, false);
    }
    async *decodeMultiAsync(stream, isArray) {
        if (this.entered) {
            const instance = this.clone();
            yield* instance.decodeMultiAsync(stream, isArray);
            return;
        }
        try {
            this.entered = true;
            let isArrayHeaderRequired = isArray;
            let arrayItemsLeft = -1;
            for await (const buffer of stream) {
                if (isArray && arrayItemsLeft === 0) {
                    throw this.createExtraByteError(this.totalPos);
                }
                this.appendBuffer(buffer);
                if (isArrayHeaderRequired) {
                    arrayItemsLeft = this.readArraySize();
                    isArrayHeaderRequired = false;
                    this.complete();
                }
                try {
                    while (true) {
                        yield this.doDecodeSync();
                        if (--arrayItemsLeft === 0) {
                            break;
                        }
                    }
                }
                catch (e) {
                    if (!(e instanceof RangeError)) {
                        throw e; // rethrow
                    }
                    // fallthrough
                }
                this.totalPos += this.pos;
            }
        }
        finally {
            this.entered = false;
        }
    }
    doDecodeSync() {
        DECODE: while (true) {
            const headByte = this.readHeadByte();
            let object;
            if (headByte >= 0xe0) {
                // negative fixint (111x xxxx) 0xe0 - 0xff
                object = headByte - 0x100;
            }
            else if (headByte < 0xc0) {
                if (headByte < 0x80) {
                    // positive fixint (0xxx xxxx) 0x00 - 0x7f
                    object = headByte;
                }
                else if (headByte < 0x90) {
                    // fixmap (1000 xxxx) 0x80 - 0x8f
                    const size = headByte - 0x80;
                    if (size !== 0) {
                        this.pushMapState(size);
                        this.complete();
                        continue DECODE;
                    }
                    else {
                        object = {};
                    }
                }
                else if (headByte < 0xa0) {
                    // fixarray (1001 xxxx) 0x90 - 0x9f
                    const size = headByte - 0x90;
                    if (size !== 0) {
                        this.pushArrayState(size);
                        this.complete();
                        continue DECODE;
                    }
                    else {
                        object = [];
                    }
                }
                else {
                    // fixstr (101x xxxx) 0xa0 - 0xbf
                    const byteLength = headByte - 0xa0;
                    object = this.decodeString(byteLength, 0);
                }
            }
            else if (headByte === 0xc0) {
                // nil
                object = null;
            }
            else if (headByte === 0xc2) {
                // false
                object = false;
            }
            else if (headByte === 0xc3) {
                // true
                object = true;
            }
            else if (headByte === 0xca) {
                // float 32
                object = this.readF32();
            }
            else if (headByte === 0xcb) {
                // float 64
                object = this.readF64();
            }
            else if (headByte === 0xcc) {
                // uint 8
                object = this.readU8();
            }
            else if (headByte === 0xcd) {
                // uint 16
                object = this.readU16();
            }
            else if (headByte === 0xce) {
                // uint 32
                object = this.readU32();
            }
            else if (headByte === 0xcf) {
                // uint 64
                if (this.useBigInt64) {
                    object = this.readU64AsBigInt();
                }
                else {
                    object = this.readU64();
                }
            }
            else if (headByte === 0xd0) {
                // int 8
                object = this.readI8();
            }
            else if (headByte === 0xd1) {
                // int 16
                object = this.readI16();
            }
            else if (headByte === 0xd2) {
                // int 32
                object = this.readI32();
            }
            else if (headByte === 0xd3) {
                // int 64
                if (this.useBigInt64) {
                    object = this.readI64AsBigInt();
                }
                else {
                    object = this.readI64();
                }
            }
            else if (headByte === 0xd9) {
                // str 8
                const byteLength = this.lookU8();
                object = this.decodeString(byteLength, 1);
            }
            else if (headByte === 0xda) {
                // str 16
                const byteLength = this.lookU16();
                object = this.decodeString(byteLength, 2);
            }
            else if (headByte === 0xdb) {
                // str 32
                const byteLength = this.lookU32();
                object = this.decodeString(byteLength, 4);
            }
            else if (headByte === 0xdc) {
                // array 16
                const size = this.readU16();
                if (size !== 0) {
                    this.pushArrayState(size);
                    this.complete();
                    continue DECODE;
                }
                else {
                    object = [];
                }
            }
            else if (headByte === 0xdd) {
                // array 32
                const size = this.readU32();
                if (size !== 0) {
                    this.pushArrayState(size);
                    this.complete();
                    continue DECODE;
                }
                else {
                    object = [];
                }
            }
            else if (headByte === 0xde) {
                // map 16
                const size = this.readU16();
                if (size !== 0) {
                    this.pushMapState(size);
                    this.complete();
                    continue DECODE;
                }
                else {
                    object = {};
                }
            }
            else if (headByte === 0xdf) {
                // map 32
                const size = this.readU32();
                if (size !== 0) {
                    this.pushMapState(size);
                    this.complete();
                    continue DECODE;
                }
                else {
                    object = {};
                }
            }
            else if (headByte === 0xc4) {
                // bin 8
                const size = this.lookU8();
                object = this.decodeBinary(size, 1);
            }
            else if (headByte === 0xc5) {
                // bin 16
                const size = this.lookU16();
                object = this.decodeBinary(size, 2);
            }
            else if (headByte === 0xc6) {
                // bin 32
                const size = this.lookU32();
                object = this.decodeBinary(size, 4);
            }
            else if (headByte === 0xd4) {
                // fixext 1
                object = this.decodeExtension(1, 0);
            }
            else if (headByte === 0xd5) {
                // fixext 2
                object = this.decodeExtension(2, 0);
            }
            else if (headByte === 0xd6) {
                // fixext 4
                object = this.decodeExtension(4, 0);
            }
            else if (headByte === 0xd7) {
                // fixext 8
                object = this.decodeExtension(8, 0);
            }
            else if (headByte === 0xd8) {
                // fixext 16
                object = this.decodeExtension(16, 0);
            }
            else if (headByte === 0xc7) {
                // ext 8
                const size = this.lookU8();
                object = this.decodeExtension(size, 1);
            }
            else if (headByte === 0xc8) {
                // ext 16
                const size = this.lookU16();
                object = this.decodeExtension(size, 2);
            }
            else if (headByte === 0xc9) {
                // ext 32
                const size = this.lookU32();
                object = this.decodeExtension(size, 4);
            }
            else {
                throw new DecodeError/* DecodeError */.X(`Unrecognized type byte: ${prettyByte(headByte)}`);
            }
            this.complete();
            const stack = this.stack;
            while (stack.length > 0) {
                // arrays and maps
                const state = stack.top();
                if (state.type === STATE_ARRAY) {
                    state.array[state.position] = object;
                    state.position++;
                    if (state.position === state.size) {
                        object = state.array;
                        stack.release(state);
                    }
                    else {
                        continue DECODE;
                    }
                }
                else if (state.type === STATE_MAP_KEY) {
                    if (object === "__proto__") {
                        throw new DecodeError/* DecodeError */.X("The key __proto__ is not allowed");
                    }
                    state.key = this.mapKeyConverter(object);
                    state.type = STATE_MAP_VALUE;
                    continue DECODE;
                }
                else {
                    // it must be `state.type === State.MAP_VALUE` here
                    state.map[state.key] = object;
                    state.readCount++;
                    if (state.readCount === state.size) {
                        object = state.map;
                        stack.release(state);
                    }
                    else {
                        state.key = null;
                        state.type = STATE_MAP_KEY;
                        continue DECODE;
                    }
                }
            }
            return object;
        }
    }
    readHeadByte() {
        if (this.headByte === HEAD_BYTE_REQUIRED) {
            this.headByte = this.readU8();
            // console.log("headByte", prettyByte(this.headByte));
        }
        return this.headByte;
    }
    complete() {
        this.headByte = HEAD_BYTE_REQUIRED;
    }
    readArraySize() {
        const headByte = this.readHeadByte();
        switch (headByte) {
            case 0xdc:
                return this.readU16();
            case 0xdd:
                return this.readU32();
            default: {
                if (headByte < 0xa0) {
                    return headByte - 0x90;
                }
                else {
                    throw new DecodeError/* DecodeError */.X(`Unrecognized array type byte: ${prettyByte(headByte)}`);
                }
            }
        }
    }
    pushMapState(size) {
        if (size > this.maxMapLength) {
            throw new DecodeError/* DecodeError */.X(`Max length exceeded: map length (${size}) > maxMapLengthLength (${this.maxMapLength})`);
        }
        this.stack.pushMapState(size);
    }
    pushArrayState(size) {
        if (size > this.maxArrayLength) {
            throw new DecodeError/* DecodeError */.X(`Max length exceeded: array length (${size}) > maxArrayLength (${this.maxArrayLength})`);
        }
        this.stack.pushArrayState(size);
    }
    decodeString(byteLength, headerOffset) {
        if (!this.rawStrings || this.stateIsMapKey()) {
            return this.decodeUtf8String(byteLength, headerOffset);
        }
        return this.decodeBinary(byteLength, headerOffset);
    }
    /**
     * @throws {@link RangeError}
     */
    decodeUtf8String(byteLength, headerOffset) {
        if (byteLength > this.maxStrLength) {
            throw new DecodeError/* DecodeError */.X(`Max length exceeded: UTF-8 byte length (${byteLength}) > maxStrLength (${this.maxStrLength})`);
        }
        if (this.bytes.byteLength < this.pos + headerOffset + byteLength) {
            throw MORE_DATA;
        }
        const offset = this.pos + headerOffset;
        let object;
        if (this.stateIsMapKey() && this.keyDecoder?.canBeCached(byteLength)) {
            object = this.keyDecoder.decode(this.bytes, offset, byteLength);
        }
        else {
            object = (0,utf8/* utf8Decode */._u)(this.bytes, offset, byteLength);
        }
        this.pos += headerOffset + byteLength;
        return object;
    }
    stateIsMapKey() {
        if (this.stack.length > 0) {
            const state = this.stack.top();
            return state.type === STATE_MAP_KEY;
        }
        return false;
    }
    /**
     * @throws {@link RangeError}
     */
    decodeBinary(byteLength, headOffset) {
        if (byteLength > this.maxBinLength) {
            throw new DecodeError/* DecodeError */.X(`Max length exceeded: bin length (${byteLength}) > maxBinLength (${this.maxBinLength})`);
        }
        if (!this.hasRemaining(byteLength + headOffset)) {
            throw MORE_DATA;
        }
        const offset = this.pos + headOffset;
        const object = this.bytes.subarray(offset, offset + byteLength);
        this.pos += headOffset + byteLength;
        return object;
    }
    decodeExtension(size, headOffset) {
        if (size > this.maxExtLength) {
            throw new DecodeError/* DecodeError */.X(`Max length exceeded: ext length (${size}) > maxExtLength (${this.maxExtLength})`);
        }
        const extType = this.view.getInt8(this.pos + headOffset);
        const data = this.decodeBinary(size, headOffset + 1 /* extType */);
        return this.extensionCodec.decode(data, extType, this.context);
    }
    lookU8() {
        return this.view.getUint8(this.pos);
    }
    lookU16() {
        return this.view.getUint16(this.pos);
    }
    lookU32() {
        return this.view.getUint32(this.pos);
    }
    readU8() {
        const value = this.view.getUint8(this.pos);
        this.pos++;
        return value;
    }
    readI8() {
        const value = this.view.getInt8(this.pos);
        this.pos++;
        return value;
    }
    readU16() {
        const value = this.view.getUint16(this.pos);
        this.pos += 2;
        return value;
    }
    readI16() {
        const value = this.view.getInt16(this.pos);
        this.pos += 2;
        return value;
    }
    readU32() {
        const value = this.view.getUint32(this.pos);
        this.pos += 4;
        return value;
    }
    readI32() {
        const value = this.view.getInt32(this.pos);
        this.pos += 4;
        return value;
    }
    readU64() {
        const value = (0,utils_int/* getUint64 */.Hn)(this.view, this.pos);
        this.pos += 8;
        return value;
    }
    readI64() {
        const value = (0,utils_int/* getInt64 */.eN)(this.view, this.pos);
        this.pos += 8;
        return value;
    }
    readU64AsBigInt() {
        const value = this.view.getBigUint64(this.pos);
        this.pos += 8;
        return value;
    }
    readI64AsBigInt() {
        const value = this.view.getBigInt64(this.pos);
        this.pos += 8;
        return value;
    }
    readF32() {
        const value = this.view.getFloat32(this.pos);
        this.pos += 4;
        return value;
    }
    readF64() {
        const value = this.view.getFloat64(this.pos);
        this.pos += 8;
        return value;
    }
}
//# sourceMappingURL=Decoder.mjs.map
;// ./node_modules/@msgpack/msgpack/dist.esm/decode.mjs

/**
 * It decodes a single MessagePack object in a buffer.
 *
 * This is a synchronous decoding function.
 * See other variants for asynchronous decoding: {@link decodeAsync}, {@link decodeMultiStream}, or {@link decodeArrayStream}.
 *
 * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
 * @throws {@link DecodeError} if the buffer contains invalid data.
 */
function decode(buffer, options) {
    const decoder = new Decoder_Decoder(options);
    return decoder.decode(buffer);
}
/**
 * It decodes multiple MessagePack objects in a buffer.
 * This is corresponding to {@link decodeMultiStream}.
 *
 * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
 * @throws {@link DecodeError} if the buffer contains invalid data.
 */
function decodeMulti(buffer, options) {
    const decoder = new Decoder(options);
    return decoder.decodeMulti(buffer);
}
//# sourceMappingURL=decode.mjs.map

/***/ },

/***/ 204556
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ IEvents)
/* harmony export */ });
class IEvents {
}
//# sourceMappingURL=events.js.map

/***/ },

/***/ 207456
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aD: () => (/* binding */ fromHex)
/* harmony export */ });
/* unused harmony exports assert, fromBytes, extract, from, fromDerBytes, fromDerHex, fromLegacy, fromRpc, fromTuple, toBytes, toHex, toDerBytes, toDerHex, toLegacy, toRpc, toTuple, validate, vToYParity, yParityToV, InvalidSerializedSizeError, MissingPropertiesError, InvalidRError, InvalidSError, InvalidYParityError, InvalidVError */
/* harmony import */ var _Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(556071);
/* harmony import */ var _Hex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(301999);
/* harmony import */ var _Json_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(833702);






/**
 * Asserts that a Signature is valid.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * Signature.assert({
 *   r: -49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1,
 * })
 * // @error: InvalidSignatureRError:
 * // @error: Value `-549...n` is an invalid r value.
 * // @error: r must be a positive integer less than 2^256.
 * ```
 *
 * @param signature - The signature object to assert.
 */
function assert(signature, options = {}) {
    const { recovered } = options;
    if (typeof signature.r === 'undefined')
        throw new MissingPropertiesError({ signature });
    if (typeof signature.s === 'undefined')
        throw new MissingPropertiesError({ signature });
    if (recovered && typeof signature.yParity === 'undefined')
        throw new MissingPropertiesError({ signature });
    if (signature.r < 0n || signature.r > Solidity.maxUint256)
        throw new InvalidRError({ value: signature.r });
    if (signature.s < 0n || signature.s > Solidity.maxUint256)
        throw new InvalidSError({ value: signature.s });
    if (typeof signature.yParity === 'number' &&
        signature.yParity !== 0 &&
        signature.yParity !== 1)
        throw new InvalidYParityError({ value: signature.yParity });
}
/**
 * Deserializes a {@link ox#Bytes.Bytes} signature into a structured {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Signature } from 'ox'
 *
 * Signature.fromBytes(new Uint8Array([128, 3, 131, ...]))
 * // @log: { r: 5231...n, s: 3522...n, yParity: 0 }
 * ```
 *
 * @param signature - The serialized signature.
 * @returns The deserialized {@link ox#Signature.Signature}.
 */
function fromBytes(signature) {
    return fromHex(Hex.fromBytes(signature));
}
/**
 * Deserializes a {@link ox#Hex.Hex} signature into a structured {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * Signature.fromHex('0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db81c')
 * // @log: { r: 5231...n, s: 3522...n, yParity: 0 }
 * ```
 *
 * @param serialized - The serialized signature.
 * @returns The deserialized {@link ox#Signature.Signature}.
 */
function fromHex(signature) {
    if (signature.length !== 130 && signature.length !== 132)
        throw new InvalidSerializedSizeError({ signature });
    const r = BigInt(_Hex_js__WEBPACK_IMPORTED_MODULE_1__/* .slice */ .di(signature, 0, 32));
    const s = BigInt(_Hex_js__WEBPACK_IMPORTED_MODULE_1__/* .slice */ .di(signature, 32, 64));
    const yParity = (() => {
        const yParity = Number(`0x${signature.slice(130)}`);
        if (Number.isNaN(yParity))
            return undefined;
        try {
            return vToYParity(yParity);
        }
        catch {
            throw new InvalidYParityError({ value: yParity });
        }
    })();
    if (typeof yParity === 'undefined')
        return {
            r,
            s,
        };
    return {
        r,
        s,
        yParity,
    };
}
/**
 * Extracts a {@link ox#Signature.Signature} from an arbitrary object that may include signature properties.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Signature } from 'ox'
 *
 * Signature.extract({
 *   baz: 'barry',
 *   foo: 'bar',
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1,
 *   zebra: 'stripes',
 * })
 * // @log: {
 * // @log:   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * // @log:   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * // @log:   yParity: 1
 * // @log: }
 * ```
 *
 * @param value - The arbitrary object to extract the signature from.
 * @returns The extracted {@link ox#Signature.Signature}.
 */
function extract(value) {
    if (typeof value.r === 'undefined')
        return undefined;
    if (typeof value.s === 'undefined')
        return undefined;
    return from(value);
}
/**
 * Instantiates a typed {@link ox#Signature.Signature} object from a {@link ox#Signature.Signature}, {@link ox#Signature.Legacy}, {@link ox#Bytes.Bytes}, or {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * Signature.from({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1,
 * })
 * // @log: {
 * // @log:   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * // @log:   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * // @log:   yParity: 1
 * // @log: }
 * ```
 *
 * @example
 * ### From Serialized
 *
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * Signature.from('0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db801')
 * // @log: {
 * // @log:   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * // @log:   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * // @log:   yParity: 1,
 * // @log: }
 * ```
 *
 * @example
 * ### From Legacy
 *
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * Signature.from({
 *   r: 47323457007453657207889730243826965761922296599680473886588287015755652701072n,
 *   s: 57228803202727131502949358313456071280488184270258293674242124340113824882788n,
 *   v: 27,
 * })
 * // @log: {
 * // @log:   r: 47323457007453657207889730243826965761922296599680473886588287015755652701072n,
 * // @log:   s: 57228803202727131502949358313456071280488184270258293674242124340113824882788n,
 * // @log:   yParity: 0
 * // @log: }
 * ```
 *
 * @param signature - The signature value to instantiate.
 * @returns The instantiated {@link ox#Signature.Signature}.
 */
function from(signature) {
    const signature_ = (() => {
        if (typeof signature === 'string')
            return fromHex(signature);
        if (signature instanceof Uint8Array)
            return fromBytes(signature);
        if (typeof signature.r === 'string')
            return fromRpc(signature);
        if (signature.v)
            return fromLegacy(signature);
        return {
            r: signature.r,
            s: signature.s,
            ...(typeof signature.yParity !== 'undefined'
                ? { yParity: signature.yParity }
                : {}),
        };
    })();
    assert(signature_);
    return signature_;
}
/**
 * Converts a DER-encoded signature to a {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Signature } from 'ox'
 *
 * const signature = Signature.fromDerBytes(new Uint8Array([132, 51, 23, ...]))
 * // @log: {
 * // @log:   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * // @log:   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * // @log: }
 * ```
 *
 * @param signature - The DER-encoded signature to convert.
 * @returns The {@link ox#Signature.Signature}.
 */
function fromDerBytes(signature) {
    return fromDerHex(Hex.fromBytes(signature));
}
/**
 * Converts a DER-encoded signature to a {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.fromDerHex('0x304402206e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf02204a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db8')
 * // @log: {
 * // @log:   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * // @log:   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * // @log: }
 * ```
 *
 * @param signature - The DER-encoded signature to convert.
 * @returns The {@link ox#Signature.Signature}.
 */
function fromDerHex(signature) {
    const { r, s } = secp256k1.Signature.fromDER(Hex.from(signature).slice(2));
    return { r, s };
}
/**
 * Converts a {@link ox#Signature.Legacy} into a {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const legacy = Signature.fromLegacy({ r: 1n, s: 2n, v: 28 })
 * // @log: { r: 1n, s: 2n, yParity: 1 }
 * ```
 *
 * @param signature - The {@link ox#Signature.Legacy} to convert.
 * @returns The converted {@link ox#Signature.Signature}.
 */
function fromLegacy(signature) {
    return {
        r: signature.r,
        s: signature.s,
        yParity: vToYParity(signature.v),
    };
}
/**
 * Converts a {@link ox#Signature.Rpc} into a {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.fromRpc({
 *   r: '0x635dc2033e60185bb36709c29c75d64ea51dfbd91c32ef4be198e4ceb169fb4d',
 *   s: '0x50c2667ac4c771072746acfdcf1f1483336dcca8bd2df47cd83175dbe60f0540',
 *   yParity: '0x0',
 * })
 * ```
 *
 * @param signature - The {@link ox#Signature.Rpc} to convert.
 * @returns The converted {@link ox#Signature.Signature}.
 */
function fromRpc(signature) {
    const yParity = (() => {
        const v = signature.v ? Number(signature.v) : undefined;
        let yParity = signature.yParity ? Number(signature.yParity) : undefined;
        if (typeof v === 'number' && typeof yParity !== 'number')
            yParity = vToYParity(v);
        if (typeof yParity !== 'number')
            throw new InvalidYParityError({ value: signature.yParity });
        return yParity;
    })();
    return {
        r: BigInt(signature.r),
        s: BigInt(signature.s),
        yParity,
    };
}
/**
 * Converts a {@link ox#Signature.Tuple} to a {@link ox#Signature.Signature}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.fromTuple(['0x01', '0x7b', '0x1c8'])
 * // @log: {
 * // @log:   r: 123n,
 * // @log:   s: 456n,
 * // @log:   yParity: 1,
 * // @log: }
 * ```
 *
 * @param tuple - The {@link ox#Signature.Tuple} to convert.
 * @returns The {@link ox#Signature.Signature}.
 */
function fromTuple(tuple) {
    const [yParity, r, s] = tuple;
    return from({
        r: r === '0x' ? 0n : BigInt(r),
        s: s === '0x' ? 0n : BigInt(s),
        yParity: yParity === '0x' ? 0 : Number(yParity),
    });
}
/**
 * Serializes a {@link ox#Signature.Signature} to {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.toBytes({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1
 * })
 * // @log: Uint8Array [102, 16, 10, ...]
 * ```
 *
 * @param signature - The signature to serialize.
 * @returns The serialized signature.
 */
function toBytes(signature) {
    return Bytes.fromHex(toHex(signature));
}
/**
 * Serializes a {@link ox#Signature.Signature} to {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.toHex({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1
 * })
 * // @log: '0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db81c'
 * ```
 *
 * @param signature - The signature to serialize.
 * @returns The serialized signature.
 */
function toHex(signature) {
    assert(signature);
    const r = signature.r;
    const s = signature.s;
    const signature_ = Hex.concat(Hex.fromNumber(r, { size: 32 }), Hex.fromNumber(s, { size: 32 }), 
    // If the signature is recovered, add the recovery byte to the signature.
    typeof signature.yParity === 'number'
        ? Hex.fromNumber(yParityToV(signature.yParity), { size: 1 })
        : '0x');
    return signature_;
}
/**
 * Converts a {@link ox#Signature.Signature} to DER-encoded format.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.from({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * })
 *
 * const signature_der = Signature.toDerBytes(signature)
 * // @log: Uint8Array [132, 51, 23, ...]
 * ```
 *
 * @param signature - The signature to convert.
 * @returns The DER-encoded signature.
 */
function toDerBytes(signature) {
    const sig = new secp256k1.Signature(signature.r, signature.s);
    return sig.toDERRawBytes();
}
/**
 * Converts a {@link ox#Signature.Signature} to DER-encoded format.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.from({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 * })
 *
 * const signature_der = Signature.toDerHex(signature)
 * // @log: '0x304402206e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf02204a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db8'
 * ```
 *
 * @param signature - The signature to convert.
 * @returns The DER-encoded signature.
 */
function toDerHex(signature) {
    const sig = new secp256k1.Signature(signature.r, signature.s);
    return `0x${sig.toDERHex()}`;
}
/**
 * Converts a {@link ox#Signature.Signature} into a {@link ox#Signature.Legacy}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const legacy = Signature.toLegacy({ r: 1n, s: 2n, yParity: 1 })
 * // @log: { r: 1n, s: 2n, v: 28 }
 * ```
 *
 * @param signature - The {@link ox#Signature.Signature} to convert.
 * @returns The converted {@link ox#Signature.Legacy}.
 */
function toLegacy(signature) {
    return {
        r: signature.r,
        s: signature.s,
        v: yParityToV(signature.yParity),
    };
}
/**
 * Converts a {@link ox#Signature.Signature} into a {@link ox#Signature.Rpc}.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signature = Signature.toRpc({
 *   r: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1
 * })
 * ```
 *
 * @param signature - The {@link ox#Signature.Signature} to convert.
 * @returns The converted {@link ox#Signature.Rpc}.
 */
function toRpc(signature) {
    const { r, s, yParity } = signature;
    return {
        r: Hex.fromNumber(r, { size: 32 }),
        s: Hex.fromNumber(s, { size: 32 }),
        yParity: yParity === 0 ? '0x0' : '0x1',
    };
}
/**
 * Converts a {@link ox#Signature.Signature} to a serialized {@link ox#Signature.Tuple} to be used for signatures in Transaction Envelopes, EIP-7702 Authorization Lists, etc.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const signatureTuple = Signature.toTuple({
 *   r: 123n,
 *   s: 456n,
 *   yParity: 1,
 * })
 * // @log: [yParity: '0x01', r: '0x7b', s: '0x1c8']
 * ```
 *
 * @param signature - The {@link ox#Signature.Signature} to convert.
 * @returns The {@link ox#Signature.Tuple}.
 */
function toTuple(signature) {
    const { r, s, yParity } = signature;
    return [
        yParity ? '0x01' : '0x',
        r === 0n ? '0x' : Hex.trimLeft(Hex.fromNumber(r)),
        s === 0n ? '0x' : Hex.trimLeft(Hex.fromNumber(s)),
    ];
}
/**
 * Validates a Signature. Returns `true` if the signature is valid, `false` otherwise.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const valid = Signature.validate({
 *   r: -49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 *   s: 33726695977844476214676913201140481102225469284307016937915595756355928419768n,
 *   yParity: 1,
 * })
 * // @log: false
 * ```
 *
 * @param signature - The signature object to assert.
 */
function validate(signature, options = {}) {
    try {
        assert(signature, options);
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Converts a ECDSA `v` value to a `yParity` value.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const yParity = Signature.vToYParity(28)
 * // @log: 1
 * ```
 *
 * @param v - The ECDSA `v` value to convert.
 * @returns The `yParity` value.
 */
function vToYParity(v) {
    if (v === 0 || v === 27)
        return 0;
    if (v === 1 || v === 28)
        return 1;
    if (v >= 35)
        return v % 2 === 0 ? 1 : 0;
    throw new InvalidVError({ value: v });
}
/**
 * Converts a ECDSA `v` value to a `yParity` value.
 *
 * @example
 * ```ts twoslash
 * import { Signature } from 'ox'
 *
 * const v = Signature.yParityToV(1)
 * // @log: 28
 * ```
 *
 * @param yParity - The ECDSA `yParity` value to convert.
 * @returns The `v` value.
 */
function yParityToV(yParity) {
    if (yParity === 0)
        return 27;
    if (yParity === 1)
        return 28;
    throw new InvalidYParityError({ value: yParity });
}
/** Thrown when the serialized signature is of an invalid size. */
class InvalidSerializedSizeError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ signature }) {
        super(`Value \`${signature}\` is an invalid signature size.`, {
            metaMessages: [
                'Expected: 64 bytes or 65 bytes.',
                `Received ${_Hex_js__WEBPACK_IMPORTED_MODULE_1__/* .size */ .Ej(_Hex_js__WEBPACK_IMPORTED_MODULE_1__/* .from */ .HT(signature))} bytes.`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidSerializedSizeError'
        });
    }
}
/** Thrown when the signature is missing either an `r`, `s`, or `yParity` property. */
class MissingPropertiesError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ signature }) {
        super(`Signature \`${_Json_js__WEBPACK_IMPORTED_MODULE_2__/* .stringify */ .A(signature)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.MissingPropertiesError'
        });
    }
}
/** Thrown when the signature has an invalid `r` value. */
class InvalidRError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ value }) {
        super(`Value \`${value}\` is an invalid r value. r must be a positive integer less than 2^256.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidRError'
        });
    }
}
/** Thrown when the signature has an invalid `s` value. */
class InvalidSError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ value }) {
        super(`Value \`${value}\` is an invalid s value. s must be a positive integer less than 2^256.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidSError'
        });
    }
}
/** Thrown when the signature has an invalid `yParity` value. */
class InvalidYParityError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ value }) {
        super(`Value \`${value}\` is an invalid y-parity value. Y-parity must be 0 or 1.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidYParityError'
        });
    }
}
/** Thrown when the signature has an invalid `v` value. */
class InvalidVError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ value }) {
        super(`Value \`${value}\` is an invalid v value. v must be 27, 28 or >=35.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Signature.InvalidVError'
        });
    }
}
//# sourceMappingURL=Signature.js.map

/***/ },

/***/ 213554
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ safeJsonStringify),
/* harmony export */   j: () => (/* binding */ safeJsonParse)
/* harmony export */ });
const JSONStringify = data => JSON.stringify(data, (_, value) => typeof value === "bigint" ? value.toString() + "n" : value);
const JSONParse = json => {
    const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
    const serializedData = json.replace(numbersBiggerThanMaxInt, "$1\"$2n\"$3");
    return JSON.parse(serializedData, (_, value) => {
        const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
        if (isCustomFormatBigInt)
            return BigInt(value.substring(0, value.length - 1));
        return value;
    });
};
function safeJsonParse(value) {
    if (typeof value !== "string") {
        throw new Error(`Cannot safe json parse value of type ${typeof value}`);
    }
    try {
        return JSONParse(value);
    }
    catch (_a) {
        return value;
    }
}
function safeJsonStringify(value) {
    return typeof value === "string" ? value : JSONStringify(value) || "";
}
//# sourceMappingURL=index.js.map

/***/ },

/***/ 236647
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ f),
/* harmony export */   V: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137007);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21222);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(213554);
/* harmony import */ var _walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(739031);
var P=Object.defineProperty,w=Object.defineProperties,E=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,l=(r,t,e)=>t in r?P(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,p=(r,t)=>{for(var e in t||(t={}))L.call(t,e)&&l(r,e,t[e]);if(c)for(var e of c(t))O.call(t,e)&&l(r,e,t[e]);return r},v=(r,t)=>w(r,E(t));const j={Accept:"application/json","Content-Type":"application/json"},T="POST",d={headers:j,method:T},g=10;class f{constructor(t,e=!1){if(this.url=t,this.disableProviderPing=e,this.events=new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.isAvailable=!1,this.registering=!1,!(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_3__.isHttpUrl)(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);this.url=t,this.disableProviderPing=e}get connected(){return this.isAvailable}get connecting(){return this.registering}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async open(t=this.url){await this.register(t)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(t){this.isAvailable||await this.register();try{const e=(0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_2__/* .safeJsonStringify */ .h)(t),s=await(await cross_fetch__WEBPACK_IMPORTED_MODULE_1___default()(this.url,v(p({},d),{body:e}))).json();this.onPayload({data:s})}catch(e){this.onError(t.id,e)}}async register(t=this.url){if(!(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_3__.isHttpUrl)(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);if(this.registering){const e=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=e||this.events.listenerCount("open")>=e)&&this.events.setMaxListeners(e+1),new Promise((s,i)=>{this.events.once("register_error",n=>{this.resetMaxListeners(),i(n)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return i(new Error("HTTP connection is missing or invalid"));s()})})}this.url=t,this.registering=!0;try{if(!this.disableProviderPing){const e=(0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_2__/* .safeJsonStringify */ .h)({id:1,jsonrpc:"2.0",method:"test",params:[]});await cross_fetch__WEBPACK_IMPORTED_MODULE_1___default()(t,v(p({},d),{body:e}))}this.onOpen()}catch(e){const s=this.parseError(e);throw this.events.emit("register_error",s),this.onClose(),s}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(t){if(typeof t.data>"u")return;const e=typeof t.data=="string"?(0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_2__/* .safeJsonParse */ .j)(t.data):t.data;this.events.emit("payload",e)}onError(t,e){const s=this.parseError(e),i=s.message||s.toString(),n=(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_3__.formatJsonRpcError)(t,i);this.events.emit("payload",n)}parseError(t,e=this.url){return (0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_3__.parseConnectionError)(t,e,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>g&&this.events.setMaxListeners(g)}}
//# sourceMappingURL=index.es.js.map


/***/ },

/***/ 248468
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o0: () => (/* binding */ detect)
/* harmony export */ });
/* unused harmony exports BrowserInfo, NodeInfo, SearchBotDeviceInfo, BotInfo, ReactNativeInfo, browserName, parseUserAgent, detectOS, getNodeVersion */
/* provided dependency */ var process = __webpack_require__(365606);
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var BrowserInfo = /** @class */ (function () {
    function BrowserInfo(name, version, os) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.type = 'browser';
    }
    return BrowserInfo;
}());

var NodeInfo = /** @class */ (function () {
    function NodeInfo(version) {
        this.version = version;
        this.type = 'node';
        this.name = 'node';
        this.os = process.platform;
    }
    return NodeInfo;
}());

var SearchBotDeviceInfo = /** @class */ (function () {
    function SearchBotDeviceInfo(name, version, os, bot) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.bot = bot;
        this.type = 'bot-device';
    }
    return SearchBotDeviceInfo;
}());

var BotInfo = /** @class */ (function () {
    function BotInfo() {
        this.type = 'bot';
        this.bot = true; // NOTE: deprecated test name instead
        this.name = 'bot';
        this.version = null;
        this.os = null;
    }
    return BotInfo;
}());

var ReactNativeInfo = /** @class */ (function () {
    function ReactNativeInfo() {
        this.type = 'react-native';
        this.name = 'react-native';
        this.version = null;
        this.os = null;
    }
    return ReactNativeInfo;
}());

// tslint:disable-next-line:max-line-length
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
    ['aol', /AOLShield\/([0-9\._]+)/],
    ['edge', /Edge\/([0-9\._]+)/],
    ['edge-ios', /EdgiOS\/([0-9\._]+)/],
    ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
    ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
    ['samsung', /SamsungBrowser\/([0-9\.]+)/],
    ['silk', /\bSilk\/([0-9._-]+)\b/],
    ['miui', /MiuiBrowser\/([0-9\.]+)$/],
    ['beaker', /BeakerBrowser\/([0-9\.]+)/],
    ['edge-chromium', /EdgA?\/([0-9\.]+)/],
    [
        'chromium-webview',
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
    ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
    ['fxios', /FxiOS\/([0-9\.]+)/],
    ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
    ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
    ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
    ['pie', /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    ['pie', /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
    ['netfront', /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ['ie', /MSIE\s(7\.0)/],
    ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ['android', /Android\s([0-9\.]+)/],
    ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ['safari', /Version\/([0-9\._]+).*Safari/],
    ['facebook', /FB[AS]V\/([0-9\.]+)/],
    ['instagram', /Instagram\s([0-9\.]+)/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ['curl', /^curl\/([0-9\.]+)$/],
    ['searchbot', SEARCHBOX_UA_REGEX],
];
var operatingSystemRules = [
    ['iOS', /iP(hone|od|ad)/],
    ['Android OS', /Android/],
    ['BlackBerry OS', /BlackBerry|BB10/],
    ['Windows Mobile', /IEMobile/],
    ['Amazon OS', /Kindle/],
    ['Windows 3.11', /Win16/],
    ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
    ['Windows 98', /(Windows 98)|(Win98)/],
    ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
    ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
    ['Windows Server 2003', /(Windows NT 5.2)/],
    ['Windows Vista', /(Windows NT 6.0)/],
    ['Windows 7', /(Windows NT 6.1)/],
    ['Windows 8', /(Windows NT 6.2)/],
    ['Windows 8.1', /(Windows NT 6.3)/],
    ['Windows 10', /(Windows NT 10.0)/],
    ['Windows ME', /Windows ME/],
    ['Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ['Open BSD', /OpenBSD/],
    ['Sun OS', /SunOS/],
    ['Chrome OS', /CrOS/],
    ['Linux', /(Linux)|(X11)/],
    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
    ['QNX', /QNX/],
    ['BeOS', /BeOS/],
    ['OS/2', /OS\/2/],
];
function detect(userAgent) {
    if (!!userAgent) {
        return parseUserAgent(userAgent);
    }
    if (typeof document === 'undefined' &&
        typeof navigator !== 'undefined' &&
        navigator.product === 'ReactNative') {
        return new ReactNativeInfo();
    }
    if (typeof navigator !== 'undefined') {
        return parseUserAgent(navigator.userAgent);
    }
    return getNodeVersion();
}
function matchUserAgent(ua) {
    // opted for using reduce here rather than Array#first with a regex.test call
    // this is primarily because using the reduce we only perform the regex
    // execution once rather than once for the test and for the exec again below
    // probably something that needs to be benchmarked though
    return (ua !== '' &&
        userAgentRules.reduce(function (matched, _a) {
            var browser = _a[0], regex = _a[1];
            if (matched) {
                return matched;
            }
            var uaMatch = regex.exec(ua);
            return !!uaMatch && [browser, uaMatch];
        }, false));
}
function browserName(ua) {
    var data = matchUserAgent(ua);
    return data ? data[0] : null;
}
function parseUserAgent(ua) {
    var matchedRule = matchUserAgent(ua);
    if (!matchedRule) {
        return null;
    }
    var name = matchedRule[0], match = matchedRule[1];
    if (name === 'searchbot') {
        return new BotInfo();
    }
    // Do not use RegExp for split operation as some browser do not support it (See: http://blog.stevenlevithan.com/archives/cross-browser-split)
    var versionParts = match[1] && match[1].split('.').join('_').split('_').slice(0, 3);
    if (versionParts) {
        if (versionParts.length < REQUIRED_VERSION_PARTS) {
            versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
        }
    }
    else {
        versionParts = [];
    }
    var version = versionParts.join('.');
    var os = detectOS(ua);
    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
    if (searchBotMatch && searchBotMatch[1]) {
        return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);
    }
    return new BrowserInfo(name, version, os);
}
function detectOS(ua) {
    for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];
        var match = regex.exec(ua);
        if (match) {
            return os;
        }
    }
    return null;
}
function getNodeVersion() {
    var isNode = typeof process !== 'undefined' && process.version;
    return isNode ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
    var output = [];
    for (var ii = 0; ii < count; ii++) {
        output.push('0');
    }
    return output;
}


/***/ },

/***/ 277173
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
function getBrowerCrypto() {
    return (__webpack_require__.g === null || __webpack_require__.g === void 0 ? void 0 : __webpack_require__.g.crypto) || (__webpack_require__.g === null || __webpack_require__.g === void 0 ? void 0 : __webpack_require__.g.msCrypto) || {};
}
exports.getBrowerCrypto = getBrowerCrypto;
function getSubtleCrypto() {
    const browserCrypto = getBrowerCrypto();
    return browserCrypto.subtle || browserCrypto.webkitSubtle;
}
exports.getSubtleCrypto = getSubtleCrypto;
function isBrowserCryptoAvailable() {
    return !!getBrowerCrypto() && !!getSubtleCrypto();
}
exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
//# sourceMappingURL=crypto.js.map

/***/ },

/***/ 284172
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ encode)
});

// EXTERNAL MODULE: ./node_modules/@msgpack/msgpack/dist.esm/utils/utf8.mjs
var utf8 = __webpack_require__(741595);
// EXTERNAL MODULE: ./node_modules/@msgpack/msgpack/dist.esm/ExtensionCodec.mjs + 2 modules
var ExtensionCodec = __webpack_require__(989816);
// EXTERNAL MODULE: ./node_modules/@msgpack/msgpack/dist.esm/utils/int.mjs
var utils_int = __webpack_require__(471901);
// EXTERNAL MODULE: ./node_modules/@msgpack/msgpack/dist.esm/utils/typedArrays.mjs
var typedArrays = __webpack_require__(311468);
;// ./node_modules/@msgpack/msgpack/dist.esm/Encoder.mjs




const DEFAULT_MAX_DEPTH = 100;
const DEFAULT_INITIAL_BUFFER_SIZE = 2048;
class Encoder {
    constructor(options) {
        this.entered = false;
        this.extensionCodec = options?.extensionCodec ?? ExtensionCodec/* ExtensionCodec */.g.defaultCodec;
        this.context = options?.context; // needs a type assertion because EncoderOptions has no context property when ContextType is undefined
        this.useBigInt64 = options?.useBigInt64 ?? false;
        this.maxDepth = options?.maxDepth ?? DEFAULT_MAX_DEPTH;
        this.initialBufferSize = options?.initialBufferSize ?? DEFAULT_INITIAL_BUFFER_SIZE;
        this.sortKeys = options?.sortKeys ?? false;
        this.forceFloat32 = options?.forceFloat32 ?? false;
        this.ignoreUndefined = options?.ignoreUndefined ?? false;
        this.forceIntegerToFloat = options?.forceIntegerToFloat ?? false;
        this.pos = 0;
        this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
        this.bytes = new Uint8Array(this.view.buffer);
    }
    clone() {
        // Because of slightly special argument `context`,
        // type assertion is needed.
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return new Encoder({
            extensionCodec: this.extensionCodec,
            context: this.context,
            useBigInt64: this.useBigInt64,
            maxDepth: this.maxDepth,
            initialBufferSize: this.initialBufferSize,
            sortKeys: this.sortKeys,
            forceFloat32: this.forceFloat32,
            ignoreUndefined: this.ignoreUndefined,
            forceIntegerToFloat: this.forceIntegerToFloat,
        });
    }
    reinitializeState() {
        this.pos = 0;
    }
    /**
     * This is almost equivalent to {@link Encoder#encode}, but it returns an reference of the encoder's internal buffer and thus much faster than {@link Encoder#encode}.
     *
     * @returns Encodes the object and returns a shared reference the encoder's internal buffer.
     */
    encodeSharedRef(object) {
        if (this.entered) {
            const instance = this.clone();
            return instance.encodeSharedRef(object);
        }
        try {
            this.entered = true;
            this.reinitializeState();
            this.doEncode(object, 1);
            return this.bytes.subarray(0, this.pos);
        }
        finally {
            this.entered = false;
        }
    }
    /**
     * @returns Encodes the object and returns a copy of the encoder's internal buffer.
     */
    encode(object) {
        if (this.entered) {
            const instance = this.clone();
            return instance.encode(object);
        }
        try {
            this.entered = true;
            this.reinitializeState();
            this.doEncode(object, 1);
            return this.bytes.slice(0, this.pos);
        }
        finally {
            this.entered = false;
        }
    }
    doEncode(object, depth) {
        if (depth > this.maxDepth) {
            throw new Error(`Too deep objects in depth ${depth}`);
        }
        if (object == null) {
            this.encodeNil();
        }
        else if (typeof object === "boolean") {
            this.encodeBoolean(object);
        }
        else if (typeof object === "number") {
            if (!this.forceIntegerToFloat) {
                this.encodeNumber(object);
            }
            else {
                this.encodeNumberAsFloat(object);
            }
        }
        else if (typeof object === "string") {
            this.encodeString(object);
        }
        else if (this.useBigInt64 && typeof object === "bigint") {
            this.encodeBigInt64(object);
        }
        else {
            this.encodeObject(object, depth);
        }
    }
    ensureBufferSizeToWrite(sizeToWrite) {
        const requiredSize = this.pos + sizeToWrite;
        if (this.view.byteLength < requiredSize) {
            this.resizeBuffer(requiredSize * 2);
        }
    }
    resizeBuffer(newSize) {
        const newBuffer = new ArrayBuffer(newSize);
        const newBytes = new Uint8Array(newBuffer);
        const newView = new DataView(newBuffer);
        newBytes.set(this.bytes);
        this.view = newView;
        this.bytes = newBytes;
    }
    encodeNil() {
        this.writeU8(0xc0);
    }
    encodeBoolean(object) {
        if (object === false) {
            this.writeU8(0xc2);
        }
        else {
            this.writeU8(0xc3);
        }
    }
    encodeNumber(object) {
        if (!this.forceIntegerToFloat && Number.isSafeInteger(object)) {
            if (object >= 0) {
                if (object < 0x80) {
                    // positive fixint
                    this.writeU8(object);
                }
                else if (object < 0x100) {
                    // uint 8
                    this.writeU8(0xcc);
                    this.writeU8(object);
                }
                else if (object < 0x10000) {
                    // uint 16
                    this.writeU8(0xcd);
                    this.writeU16(object);
                }
                else if (object < 0x100000000) {
                    // uint 32
                    this.writeU8(0xce);
                    this.writeU32(object);
                }
                else if (!this.useBigInt64) {
                    // uint 64
                    this.writeU8(0xcf);
                    this.writeU64(object);
                }
                else {
                    this.encodeNumberAsFloat(object);
                }
            }
            else {
                if (object >= -0x20) {
                    // negative fixint
                    this.writeU8(0xe0 | (object + 0x20));
                }
                else if (object >= -0x80) {
                    // int 8
                    this.writeU8(0xd0);
                    this.writeI8(object);
                }
                else if (object >= -0x8000) {
                    // int 16
                    this.writeU8(0xd1);
                    this.writeI16(object);
                }
                else if (object >= -0x80000000) {
                    // int 32
                    this.writeU8(0xd2);
                    this.writeI32(object);
                }
                else if (!this.useBigInt64) {
                    // int 64
                    this.writeU8(0xd3);
                    this.writeI64(object);
                }
                else {
                    this.encodeNumberAsFloat(object);
                }
            }
        }
        else {
            this.encodeNumberAsFloat(object);
        }
    }
    encodeNumberAsFloat(object) {
        if (this.forceFloat32) {
            // float 32
            this.writeU8(0xca);
            this.writeF32(object);
        }
        else {
            // float 64
            this.writeU8(0xcb);
            this.writeF64(object);
        }
    }
    encodeBigInt64(object) {
        if (object >= BigInt(0)) {
            // uint 64
            this.writeU8(0xcf);
            this.writeBigUint64(object);
        }
        else {
            // int 64
            this.writeU8(0xd3);
            this.writeBigInt64(object);
        }
    }
    writeStringHeader(byteLength) {
        if (byteLength < 32) {
            // fixstr
            this.writeU8(0xa0 + byteLength);
        }
        else if (byteLength < 0x100) {
            // str 8
            this.writeU8(0xd9);
            this.writeU8(byteLength);
        }
        else if (byteLength < 0x10000) {
            // str 16
            this.writeU8(0xda);
            this.writeU16(byteLength);
        }
        else if (byteLength < 0x100000000) {
            // str 32
            this.writeU8(0xdb);
            this.writeU32(byteLength);
        }
        else {
            throw new Error(`Too long string: ${byteLength} bytes in UTF-8`);
        }
    }
    encodeString(object) {
        const maxHeaderSize = 1 + 4;
        const byteLength = (0,utf8/* utf8Count */.dS)(object);
        this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
        this.writeStringHeader(byteLength);
        (0,utf8/* utf8Encode */.yi)(object, this.bytes, this.pos);
        this.pos += byteLength;
    }
    encodeObject(object, depth) {
        // try to encode objects with custom codec first of non-primitives
        const ext = this.extensionCodec.tryToEncode(object, this.context);
        if (ext != null) {
            this.encodeExtension(ext);
        }
        else if (Array.isArray(object)) {
            this.encodeArray(object, depth);
        }
        else if (ArrayBuffer.isView(object)) {
            this.encodeBinary(object);
        }
        else if (typeof object === "object") {
            this.encodeMap(object, depth);
        }
        else {
            // symbol, function and other special object come here unless extensionCodec handles them.
            throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(object)}`);
        }
    }
    encodeBinary(object) {
        const size = object.byteLength;
        if (size < 0x100) {
            // bin 8
            this.writeU8(0xc4);
            this.writeU8(size);
        }
        else if (size < 0x10000) {
            // bin 16
            this.writeU8(0xc5);
            this.writeU16(size);
        }
        else if (size < 0x100000000) {
            // bin 32
            this.writeU8(0xc6);
            this.writeU32(size);
        }
        else {
            throw new Error(`Too large binary: ${size}`);
        }
        const bytes = (0,typedArrays/* ensureUint8Array */.C)(object);
        this.writeU8a(bytes);
    }
    encodeArray(object, depth) {
        const size = object.length;
        if (size < 16) {
            // fixarray
            this.writeU8(0x90 + size);
        }
        else if (size < 0x10000) {
            // array 16
            this.writeU8(0xdc);
            this.writeU16(size);
        }
        else if (size < 0x100000000) {
            // array 32
            this.writeU8(0xdd);
            this.writeU32(size);
        }
        else {
            throw new Error(`Too large array: ${size}`);
        }
        for (const item of object) {
            this.doEncode(item, depth + 1);
        }
    }
    countWithoutUndefined(object, keys) {
        let count = 0;
        for (const key of keys) {
            if (object[key] !== undefined) {
                count++;
            }
        }
        return count;
    }
    encodeMap(object, depth) {
        const keys = Object.keys(object);
        if (this.sortKeys) {
            keys.sort();
        }
        const size = this.ignoreUndefined ? this.countWithoutUndefined(object, keys) : keys.length;
        if (size < 16) {
            // fixmap
            this.writeU8(0x80 + size);
        }
        else if (size < 0x10000) {
            // map 16
            this.writeU8(0xde);
            this.writeU16(size);
        }
        else if (size < 0x100000000) {
            // map 32
            this.writeU8(0xdf);
            this.writeU32(size);
        }
        else {
            throw new Error(`Too large map object: ${size}`);
        }
        for (const key of keys) {
            const value = object[key];
            if (!(this.ignoreUndefined && value === undefined)) {
                this.encodeString(key);
                this.doEncode(value, depth + 1);
            }
        }
    }
    encodeExtension(ext) {
        if (typeof ext.data === "function") {
            const data = ext.data(this.pos + 6);
            const size = data.length;
            if (size >= 0x100000000) {
                throw new Error(`Too large extension object: ${size}`);
            }
            this.writeU8(0xc9);
            this.writeU32(size);
            this.writeI8(ext.type);
            this.writeU8a(data);
            return;
        }
        const size = ext.data.length;
        if (size === 1) {
            // fixext 1
            this.writeU8(0xd4);
        }
        else if (size === 2) {
            // fixext 2
            this.writeU8(0xd5);
        }
        else if (size === 4) {
            // fixext 4
            this.writeU8(0xd6);
        }
        else if (size === 8) {
            // fixext 8
            this.writeU8(0xd7);
        }
        else if (size === 16) {
            // fixext 16
            this.writeU8(0xd8);
        }
        else if (size < 0x100) {
            // ext 8
            this.writeU8(0xc7);
            this.writeU8(size);
        }
        else if (size < 0x10000) {
            // ext 16
            this.writeU8(0xc8);
            this.writeU16(size);
        }
        else if (size < 0x100000000) {
            // ext 32
            this.writeU8(0xc9);
            this.writeU32(size);
        }
        else {
            throw new Error(`Too large extension object: ${size}`);
        }
        this.writeI8(ext.type);
        this.writeU8a(ext.data);
    }
    writeU8(value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setUint8(this.pos, value);
        this.pos++;
    }
    writeU8a(values) {
        const size = values.length;
        this.ensureBufferSizeToWrite(size);
        this.bytes.set(values, this.pos);
        this.pos += size;
    }
    writeI8(value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setInt8(this.pos, value);
        this.pos++;
    }
    writeU16(value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setUint16(this.pos, value);
        this.pos += 2;
    }
    writeI16(value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setInt16(this.pos, value);
        this.pos += 2;
    }
    writeU32(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setUint32(this.pos, value);
        this.pos += 4;
    }
    writeI32(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setInt32(this.pos, value);
        this.pos += 4;
    }
    writeF32(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setFloat32(this.pos, value);
        this.pos += 4;
    }
    writeF64(value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setFloat64(this.pos, value);
        this.pos += 8;
    }
    writeU64(value) {
        this.ensureBufferSizeToWrite(8);
        (0,utils_int/* setUint64 */.X3)(this.view, this.pos, value);
        this.pos += 8;
    }
    writeI64(value) {
        this.ensureBufferSizeToWrite(8);
        (0,utils_int/* setInt64 */._j)(this.view, this.pos, value);
        this.pos += 8;
    }
    writeBigUint64(value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setBigUint64(this.pos, value);
        this.pos += 8;
    }
    writeBigInt64(value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setBigInt64(this.pos, value);
        this.pos += 8;
    }
}
//# sourceMappingURL=Encoder.mjs.map
;// ./node_modules/@msgpack/msgpack/dist.esm/encode.mjs

/**
 * It encodes `value` in the MessagePack format and
 * returns a byte buffer.
 *
 * The returned buffer is a slice of a larger `ArrayBuffer`, so you have to use its `#byteOffset` and `#byteLength` in order to convert it to another typed arrays including NodeJS `Buffer`.
 */
function encode(value, options) {
    const encoder = new Encoder(options);
    return encoder.encodeSharedRef(value);
}
//# sourceMappingURL=encode.mjs.map

/***/ },

/***/ 301294
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x_: () => (/* binding */ recoverAddress)
});

// UNUSED EXPORTS: createKeyPair, getPublicKey, getSharedSecret, noble, randomPrivateKey, recoverPublicKey, sign, verify

// EXTERNAL MODULE: ./node_modules/@noble/hashes/esm/sha2.js + 1 modules
var sha2 = __webpack_require__(902265);
// EXTERNAL MODULE: ./node_modules/@noble/hashes/esm/hmac.js
var hmac = __webpack_require__(621454);
// EXTERNAL MODULE: ./node_modules/@noble/hashes/esm/utils.js + 1 modules
var utils = __webpack_require__(968279);
;// ./node_modules/ox/node_modules/@noble/curves/esm/abstract/utils.js
/**
 * Hex, bytes and number utilities.
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// 100 lines of code in the file are duplicated from noble-hashes (utils).
// This is OK: `abstract` directory does not use noble-hashes.
// User may opt-in into using different hashing library. This way, noble-hashes
// won't be included into their bundle.
const _0n = /* @__PURE__ */ BigInt(0);
const _1n = /* @__PURE__ */ BigInt(1);
function isBytes(a) {
    return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
}
function abytes(item) {
    if (!isBytes(item))
        throw new Error('Uint8Array expected');
}
function abool(title, value) {
    if (typeof value !== 'boolean')
        throw new Error(title + ' boolean expected, got ' + value);
}
// Used in weierstrass, der
function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? '0' + hex : hex;
}
function hexToNumber(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    return hex === '' ? _0n : BigInt('0x' + hex); // Big Endian
}
// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
const hasHexBuiltin = 
// @ts-ignore
typeof Uint8Array.from([]).toHex === 'function' && typeof Uint8Array.fromHex === 'function';
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
/**
 * Convert byte array to hex string. Uses built-in function, when available.
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
function bytesToHex(bytes) {
    abytes(bytes);
    // @ts-ignore
    if (hasHexBuiltin)
        return bytes.toHex();
    // pre-caching improves the speed 6x
    let hex = '';
    for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9)
        return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F)
        return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f)
        return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
/**
 * Convert hex string to byte array. Uses built-in function, when available.
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
function hexToBytes(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    // @ts-ignore
    if (hasHexBuiltin)
        return Uint8Array.fromHex(hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
        throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
// BE: Big Endian, LE: Little Endian
function utils_bytesToNumberBE(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
function utils_bytesToNumberLE(bytes) {
    abytes(bytes);
    return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
}
function utils_numberToBytesBE(n, len) {
    return hexToBytes(n.toString(16).padStart(len * 2, '0'));
}
function numberToBytesLE(n, len) {
    return utils_numberToBytesBE(n, len).reverse();
}
// Unpadded, rarely used
function numberToVarBytesBE(n) {
    return hexToBytes(numberToHexUnpadded(n));
}
/**
 * Takes hex string or Uint8Array, converts to Uint8Array.
 * Validates output length.
 * Will throw error for other types.
 * @param title descriptive title for an error e.g. 'private key'
 * @param hex hex string or Uint8Array
 * @param expectedLength optional, will compare to result array's length
 * @returns
 */
function utils_ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === 'string') {
        try {
            res = hexToBytes(hex);
        }
        catch (e) {
            throw new Error(title + ' must be hex string or Uint8Array, cause: ' + e);
        }
    }
    else if (isBytes(hex)) {
        // Uint8Array.from() instead of hash.slice() because node.js Buffer
        // is instance of Uint8Array, and its slice() creates **mutable** copy
        res = Uint8Array.from(hex);
    }
    else {
        throw new Error(title + ' must be hex string or Uint8Array');
    }
    const len = res.length;
    if (typeof expectedLength === 'number' && len !== expectedLength)
        throw new Error(title + ' of length ' + expectedLength + ' expected, got ' + len);
    return res;
}
/**
 * Copies several Uint8Arrays into one.
 */
function utils_concatBytes(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
// Compares 2 u8a-s in kinda constant time
function utils_equalBytes(a, b) {
    if (a.length !== b.length)
        return false;
    let diff = 0;
    for (let i = 0; i < a.length; i++)
        diff |= a[i] ^ b[i];
    return diff === 0;
}
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function utf8ToBytes(str) {
    if (typeof str !== 'string')
        throw new Error('string expected');
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
// Is positive bigint
const isPosBig = (n) => typeof n === 'bigint' && _0n <= n;
function utils_inRange(n, min, max) {
    return isPosBig(n) && isPosBig(min) && isPosBig(max) && min <= n && n < max;
}
/**
 * Asserts min <= n < max. NOTE: It's < max and not <= max.
 * @example
 * aInRange('x', x, 1n, 256n); // would assume x is in (1n..255n)
 */
function utils_aInRange(title, n, min, max) {
    // Why min <= n < max and not a (min < n < max) OR b (min <= n <= max)?
    // consider P=256n, min=0n, max=P
    // - a for min=0 would require -1:          `inRange('x', x, -1n, P)`
    // - b would commonly require subtraction:  `inRange('x', x, 0n, P - 1n)`
    // - our way is the cleanest:               `inRange('x', x, 0n, P)
    if (!utils_inRange(n, min, max))
        throw new Error('expected valid ' + title + ': ' + min + ' <= n < ' + max + ', got ' + n);
}
// Bit operations
/**
 * Calculates amount of bits in a bigint.
 * Same as `n.toString(2).length`
 * TODO: merge with nLength in modular
 */
function bitLen(n) {
    let len;
    for (len = 0; n > _0n; n >>= _1n, len += 1)
        ;
    return len;
}
/**
 * Gets single bit at position.
 * NOTE: first bit position is 0 (same as arrays)
 * Same as `!!+Array.from(n.toString(2)).reverse()[pos]`
 */
function bitGet(n, pos) {
    return (n >> BigInt(pos)) & _1n;
}
/**
 * Sets single bit at position.
 */
function bitSet(n, pos, value) {
    return n | ((value ? _1n : _0n) << BigInt(pos));
}
/**
 * Calculate mask for N bits. Not using ** operator with bigints because of old engines.
 * Same as BigInt(`0b${Array(i).fill('1').join('')}`)
 */
const utils_bitMask = (n) => (_1n << BigInt(n)) - _1n;
// DRBG
const u8n = (len) => new Uint8Array(len); // creates Uint8Array
const u8fr = (arr) => Uint8Array.from(arr); // another shortcut
/**
 * Minimal HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
 * @returns function that will call DRBG until 2nd arg returns something meaningful
 * @example
 *   const drbg = createHmacDRBG<Key>(32, 32, hmac);
 *   drbg(seed, bytesToKey); // bytesToKey must return Key or undefined
 */
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== 'number' || hashLen < 2)
        throw new Error('hashLen must be a number');
    if (typeof qByteLen !== 'number' || qByteLen < 2)
        throw new Error('qByteLen must be a number');
    if (typeof hmacFn !== 'function')
        throw new Error('hmacFn must be a function');
    // Step B, Step C: set hashLen to 8*ceil(hlen/8)
    let v = u8n(hashLen); // Minimal non-full-spec HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
    let k = u8n(hashLen); // Steps B and C of RFC6979 3.2: set hashLen, in our case always same
    let i = 0; // Iterations counter, will throw when over 1000
    const reset = () => {
        v.fill(1);
        k.fill(0);
        i = 0;
    };
    const h = (...b) => hmacFn(k, v, ...b); // hmac(k)(v, ...values)
    const reseed = (seed = u8n(0)) => {
        // HMAC-DRBG reseed() function. Steps D-G
        k = h(u8fr([0x00]), seed); // k = hmac(k || v || 0x00 || seed)
        v = h(); // v = hmac(k || v)
        if (seed.length === 0)
            return;
        k = h(u8fr([0x01]), seed); // k = hmac(k || v || 0x01 || seed)
        v = h(); // v = hmac(k || v)
    };
    const gen = () => {
        // HMAC-DRBG generate() function
        if (i++ >= 1000)
            throw new Error('drbg: tried 1000 values');
        let len = 0;
        const out = [];
        while (len < qByteLen) {
            v = h();
            const sl = v.slice();
            out.push(sl);
            len += v.length;
        }
        return utils_concatBytes(...out);
    };
    const genUntil = (seed, pred) => {
        reset();
        reseed(seed); // Steps D-G
        let res = undefined; // Step H: grind until k is in [1..n-1]
        while (!(res = pred(gen())))
            reseed();
        reset();
        return res;
    };
    return genUntil;
}
// Validating curves and fields
const validatorFns = {
    bigint: (val) => typeof val === 'bigint',
    function: (val) => typeof val === 'function',
    boolean: (val) => typeof val === 'boolean',
    string: (val) => typeof val === 'string',
    stringOrUint8Array: (val) => typeof val === 'string' || isBytes(val),
    isSafeInteger: (val) => Number.isSafeInteger(val),
    array: (val) => Array.isArray(val),
    field: (val, object) => object.Fp.isValid(val),
    hash: (val) => typeof val === 'function' && Number.isSafeInteger(val.outputLen),
};
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
function validateObject(object, validators, optValidators = {}) {
    const checkField = (fieldName, type, isOptional) => {
        const checkVal = validatorFns[type];
        if (typeof checkVal !== 'function')
            throw new Error('invalid validator function');
        const val = object[fieldName];
        if (isOptional && val === undefined)
            return;
        if (!checkVal(val, object)) {
            throw new Error('param ' + String(fieldName) + ' is invalid. Expected ' + type + ', got ' + val);
        }
    };
    for (const [fieldName, type] of Object.entries(validators))
        checkField(fieldName, type, false);
    for (const [fieldName, type] of Object.entries(optValidators))
        checkField(fieldName, type, true);
    return object;
}
// validate type tests
// const o: { a: number; b: number; c: number } = { a: 1, b: 5, c: 6 };
// const z0 = validateObject(o, { a: 'isSafeInteger' }, { c: 'bigint' }); // Ok!
// // Should fail type-check
// const z1 = validateObject(o, { a: 'tmp' }, { c: 'zz' });
// const z2 = validateObject(o, { a: 'isSafeInteger' }, { c: 'zz' });
// const z3 = validateObject(o, { test: 'boolean', z: 'bug' });
// const z4 = validateObject(o, { a: 'boolean', z: 'bug' });
/**
 * throws not implemented error
 */
const notImplemented = () => {
    throw new Error('not implemented');
};
/**
 * Memoizes (caches) computation result.
 * Uses WeakMap: the value is going auto-cleaned by GC after last reference is removed.
 */
function memoized(fn) {
    const map = new WeakMap();
    return (arg, ...args) => {
        const val = map.get(arg);
        if (val !== undefined)
            return val;
        const computed = fn(arg, ...args);
        map.set(arg, computed);
        return computed;
    };
}
//# sourceMappingURL=utils.js.map
;// ./node_modules/ox/node_modules/@noble/curves/esm/abstract/modular.js
/**
 * Utils for modular division and finite fields.
 * A finite field over 11 is integer number operations `mod 11`.
 * There is no division: it is replaced by modular multiplicative inverse.
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */


// prettier-ignore
const modular_0n = BigInt(0), modular_1n = BigInt(1), _2n = /* @__PURE__ */ BigInt(2), _3n = /* @__PURE__ */ BigInt(3);
// prettier-ignore
const _4n = /* @__PURE__ */ BigInt(4), _5n = /* @__PURE__ */ BigInt(5), _8n = /* @__PURE__ */ BigInt(8);
// Calculates a modulo b
function modular_mod(a, b) {
    const result = a % b;
    return result >= modular_0n ? result : b + result;
}
/**
 * Efficiently raise num to power and do modular division.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 * TODO: remove.
 * @example
 * pow(2n, 6n, 11n) // 64n % 11n == 9n
 */
function pow(num, power, modulo) {
    return FpPow(Field(modulo), num, power);
}
/** Does `x^(2^power)` mod p. `pow2(30, 4)` == `30^(2^4)` */
function pow2(x, power, modulo) {
    let res = x;
    while (power-- > modular_0n) {
        res *= res;
        res %= modulo;
    }
    return res;
}
/**
 * Inverses number over modulo.
 * Implemented using [Euclidean GCD](https://brilliant.org/wiki/extended-euclidean-algorithm/).
 */
function invert(number, modulo) {
    if (number === modular_0n)
        throw new Error('invert: expected non-zero number');
    if (modulo <= modular_0n)
        throw new Error('invert: expected positive modulus, got ' + modulo);
    // Fermat's little theorem "CT-like" version inv(n) = n^(m-2) mod m is 30x slower.
    let a = modular_mod(number, modulo);
    let b = modulo;
    // prettier-ignore
    let x = modular_0n, y = modular_1n, u = modular_1n, v = modular_0n;
    while (a !== modular_0n) {
        // JIT applies optimization if those two lines follow each other
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        // prettier-ignore
        b = a, a = r, x = u, y = v, u = m, v = n;
    }
    const gcd = b;
    if (gcd !== modular_1n)
        throw new Error('invert: does not exist');
    return modular_mod(x, modulo);
}
// Not all roots are possible! Example which will throw:
// const NUM =
// n = 72057594037927816n;
// Fp = Field(BigInt('0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab'));
function sqrt3mod4(Fp, n) {
    const p1div4 = (Fp.ORDER + modular_1n) / _4n;
    const root = Fp.pow(n, p1div4);
    // Throw if root^2 != n
    if (!Fp.eql(Fp.sqr(root), n))
        throw new Error('Cannot find square root');
    return root;
}
function sqrt5mod8(Fp, n) {
    const p5div8 = (Fp.ORDER - _5n) / _8n;
    const n2 = Fp.mul(n, _2n);
    const v = Fp.pow(n2, p5div8);
    const nv = Fp.mul(n, v);
    const i = Fp.mul(Fp.mul(nv, _2n), v);
    const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
    if (!Fp.eql(Fp.sqr(root), n))
        throw new Error('Cannot find square root');
    return root;
}
// TODO: Commented-out for now. Provide test vectors.
// Tonelli is too slow for extension fields Fp2.
// That means we can't use sqrt (c1, c2...) even for initialization constants.
// if (P % _16n === _9n) return sqrt9mod16;
// // prettier-ignore
// function sqrt9mod16<T>(Fp: IField<T>, n: T, p7div16?: bigint) {
//   if (p7div16 === undefined) p7div16 = (Fp.ORDER + BigInt(7)) / _16n;
//   const c1 = Fp.sqrt(Fp.neg(Fp.ONE)); //  1. c1 = sqrt(-1) in F, i.e., (c1^2) == -1 in F
//   const c2 = Fp.sqrt(c1);             //  2. c2 = sqrt(c1) in F, i.e., (c2^2) == c1 in F
//   const c3 = Fp.sqrt(Fp.neg(c1));     //  3. c3 = sqrt(-c1) in F, i.e., (c3^2) == -c1 in F
//   const c4 = p7div16;                 //  4. c4 = (q + 7) / 16        # Integer arithmetic
//   let tv1 = Fp.pow(n, c4);            //  1. tv1 = x^c4
//   let tv2 = Fp.mul(c1, tv1);          //  2. tv2 = c1 * tv1
//   const tv3 = Fp.mul(c2, tv1);        //  3. tv3 = c2 * tv1
//   let tv4 = Fp.mul(c3, tv1);          //  4. tv4 = c3 * tv1
//   const e1 = Fp.eql(Fp.sqr(tv2), n);  //  5.  e1 = (tv2^2) == x
//   const e2 = Fp.eql(Fp.sqr(tv3), n);  //  6.  e2 = (tv3^2) == x
//   tv1 = Fp.cmov(tv1, tv2, e1); //  7. tv1 = CMOV(tv1, tv2, e1)  # Select tv2 if (tv2^2) == x
//   tv2 = Fp.cmov(tv4, tv3, e2); //  8. tv2 = CMOV(tv4, tv3, e2)  # Select tv3 if (tv3^2) == x
//   const e3 = Fp.eql(Fp.sqr(tv2), n);  //  9.  e3 = (tv2^2) == x
//   return Fp.cmov(tv1, tv2, e3); // 10.  z = CMOV(tv1, tv2, e3) # Select the sqrt from tv1 and tv2
// }
/**
 * Tonelli-Shanks square root search algorithm.
 * 1. https://eprint.iacr.org/2012/685.pdf (page 12)
 * 2. Square Roots from 1; 24, 51, 10 to Dan Shanks
 * @param P field order
 * @returns function that takes field Fp (created from P) and number n
 */
function tonelliShanks(P) {
    // Initialization (precomputation).
    if (P < BigInt(3))
        throw new Error('sqrt is not defined for small field');
    // Factor P - 1 = Q * 2^S, where Q is odd
    let Q = P - modular_1n;
    let S = 0;
    while (Q % _2n === modular_0n) {
        Q /= _2n;
        S++;
    }
    // Find the first quadratic non-residue Z >= 2
    let Z = _2n;
    const _Fp = Field(P);
    while (FpLegendre(_Fp, Z) === 1) {
        // Basic primality test for P. After x iterations, chance of
        // not finding quadratic non-residue is 2^x, so 2^1000.
        if (Z++ > 1000)
            throw new Error('Cannot find square root: probably non-prime P');
    }
    // Fast-path; usually done before Z, but we do "primality test".
    if (S === 1)
        return sqrt3mod4;
    // Slow-path
    // TODO: test on Fp2 and others
    let cc = _Fp.pow(Z, Q); // c = z^Q
    const Q1div2 = (Q + modular_1n) / _2n;
    return function tonelliSlow(Fp, n) {
        if (Fp.is0(n))
            return n;
        // Check if n is a quadratic residue using Legendre symbol
        if (FpLegendre(Fp, n) !== 1)
            throw new Error('Cannot find square root');
        // Initialize variables for the main loop
        let M = S;
        let c = Fp.mul(Fp.ONE, cc); // c = z^Q, move cc from field _Fp into field Fp
        let t = Fp.pow(n, Q); // t = n^Q, first guess at the fudge factor
        let R = Fp.pow(n, Q1div2); // R = n^((Q+1)/2), first guess at the square root
        // Main loop
        // while t != 1
        while (!Fp.eql(t, Fp.ONE)) {
            if (Fp.is0(t))
                return Fp.ZERO; // if t=0 return R=0
            let i = 1;
            // Find the smallest i >= 1 such that t^(2^i) ≡ 1 (mod P)
            let t_tmp = Fp.sqr(t); // t^(2^1)
            while (!Fp.eql(t_tmp, Fp.ONE)) {
                i++;
                t_tmp = Fp.sqr(t_tmp); // t^(2^2)...
                if (i === M)
                    throw new Error('Cannot find square root');
            }
            // Calculate the exponent for b: 2^(M - i - 1)
            const exponent = modular_1n << BigInt(M - i - 1); // bigint is important
            const b = Fp.pow(c, exponent); // b = 2^(M - i - 1)
            // Update variables
            M = i;
            c = Fp.sqr(b); // c = b^2
            t = Fp.mul(t, c); // t = (t * b^2)
            R = Fp.mul(R, b); // R = R*b
        }
        return R;
    };
}
/**
 * Square root for a finite field. Will try optimized versions first:
 *
 * 1. P ≡ 3 (mod 4)
 * 2. P ≡ 5 (mod 8)
 * 3. Tonelli-Shanks algorithm
 *
 * Different algorithms can give different roots, it is up to user to decide which one they want.
 * For example there is FpSqrtOdd/FpSqrtEven to choice root based on oddness (used for hash-to-curve).
 */
function FpSqrt(P) {
    // P ≡ 3 (mod 4) => √n = n^((P+1)/4)
    if (P % _4n === _3n)
        return sqrt3mod4;
    // P ≡ 5 (mod 8) => Atkin algorithm, page 10 of https://eprint.iacr.org/2012/685.pdf
    if (P % _8n === _5n)
        return sqrt5mod8;
    // P ≡ 9 (mod 16) not implemented, see above
    // Tonelli-Shanks algorithm
    return tonelliShanks(P);
}
// Little-endian check for first LE bit (last BE bit);
const isNegativeLE = (num, modulo) => (modular_mod(num, modulo) & modular_1n) === modular_1n;
// prettier-ignore
const FIELD_FIELDS = [
    'create', 'isValid', 'is0', 'neg', 'inv', 'sqrt', 'sqr',
    'eql', 'add', 'sub', 'mul', 'pow', 'div',
    'addN', 'subN', 'mulN', 'sqrN'
];
function modular_validateField(field) {
    const initial = {
        ORDER: 'bigint',
        MASK: 'bigint',
        BYTES: 'isSafeInteger',
        BITS: 'isSafeInteger',
    };
    const opts = FIELD_FIELDS.reduce((map, val) => {
        map[val] = 'function';
        return map;
    }, initial);
    return validateObject(field, opts);
}
// Generic field functions
/**
 * Same as `pow` but for Fp: non-constant-time.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 */
function FpPow(Fp, num, power) {
    if (power < modular_0n)
        throw new Error('invalid exponent, negatives unsupported');
    if (power === modular_0n)
        return Fp.ONE;
    if (power === modular_1n)
        return num;
    let p = Fp.ONE;
    let d = num;
    while (power > modular_0n) {
        if (power & modular_1n)
            p = Fp.mul(p, d);
        d = Fp.sqr(d);
        power >>= modular_1n;
    }
    return p;
}
/**
 * Efficiently invert an array of Field elements.
 * Exception-free. Will return `undefined` for 0 elements.
 * @param passZero map 0 to 0 (instead of undefined)
 */
function modular_FpInvertBatch(Fp, nums, passZero = false) {
    const inverted = new Array(nums.length).fill(passZero ? Fp.ZERO : undefined);
    // Walk from first to last, multiply them by each other MOD p
    const multipliedAcc = nums.reduce((acc, num, i) => {
        if (Fp.is0(num))
            return acc;
        inverted[i] = acc;
        return Fp.mul(acc, num);
    }, Fp.ONE);
    // Invert last element
    const invertedAcc = Fp.inv(multipliedAcc);
    // Walk from last to first, multiply them by inverted each other MOD p
    nums.reduceRight((acc, num, i) => {
        if (Fp.is0(num))
            return acc;
        inverted[i] = Fp.mul(acc, inverted[i]);
        return Fp.mul(acc, num);
    }, invertedAcc);
    return inverted;
}
// TODO: remove
function FpDiv(Fp, lhs, rhs) {
    return Fp.mul(lhs, typeof rhs === 'bigint' ? invert(rhs, Fp.ORDER) : Fp.inv(rhs));
}
/**
 * Legendre symbol.
 * Legendre constant is used to calculate Legendre symbol (a | p)
 * which denotes the value of a^((p-1)/2) (mod p).
 *
 * * (a | p) ≡ 1    if a is a square (mod p), quadratic residue
 * * (a | p) ≡ -1   if a is not a square (mod p), quadratic non residue
 * * (a | p) ≡ 0    if a ≡ 0 (mod p)
 */
function FpLegendre(Fp, n) {
    // We can use 3rd argument as optional cache of this value
    // but seems unneeded for now. The operation is very fast.
    const p1mod2 = (Fp.ORDER - modular_1n) / _2n;
    const powered = Fp.pow(n, p1mod2);
    const yes = Fp.eql(powered, Fp.ONE);
    const zero = Fp.eql(powered, Fp.ZERO);
    const no = Fp.eql(powered, Fp.neg(Fp.ONE));
    if (!yes && !zero && !no)
        throw new Error('invalid Legendre symbol result');
    return yes ? 1 : zero ? 0 : -1;
}
// This function returns True whenever the value x is a square in the field F.
function FpIsSquare(Fp, n) {
    const l = FpLegendre(Fp, n);
    return l === 1;
}
// CURVE.n lengths
function nLength(n, nBitLength) {
    // Bit size, byte size of CURVE.n
    if (nBitLength !== undefined)
        (0,utils/* anumber */.Fe)(nBitLength);
    const _nBitLength = nBitLength !== undefined ? nBitLength : n.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return { nBitLength: _nBitLength, nByteLength };
}
/**
 * Initializes a finite field over prime.
 * Major performance optimizations:
 * * a) denormalized operations like mulN instead of mul
 * * b) same object shape: never add or remove keys
 * * c) Object.freeze
 * Fragile: always run a benchmark on a change.
 * Security note: operations don't check 'isValid' for all elements for performance reasons,
 * it is caller responsibility to check this.
 * This is low-level code, please make sure you know what you're doing.
 * @param ORDER prime positive bigint
 * @param bitLen how many bits the field consumes
 * @param isLE (def: false) if encoding / decoding should be in little-endian
 * @param redef optional faster redefinitions of sqrt and other methods
 */
function Field(ORDER, bitLen, isLE = false, redef = {}) {
    if (ORDER <= modular_0n)
        throw new Error('invalid field: expected ORDER > 0, got ' + ORDER);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen);
    if (BYTES > 2048)
        throw new Error('invalid field: expected ORDER of <= 2048 bytes');
    let sqrtP; // cached sqrtP
    const f = Object.freeze({
        ORDER,
        isLE,
        BITS,
        BYTES,
        MASK: utils_bitMask(BITS),
        ZERO: modular_0n,
        ONE: modular_1n,
        create: (num) => modular_mod(num, ORDER),
        isValid: (num) => {
            if (typeof num !== 'bigint')
                throw new Error('invalid field element: expected bigint, got ' + typeof num);
            return modular_0n <= num && num < ORDER; // 0 is valid element, but it's not invertible
        },
        is0: (num) => num === modular_0n,
        isOdd: (num) => (num & modular_1n) === modular_1n,
        neg: (num) => modular_mod(-num, ORDER),
        eql: (lhs, rhs) => lhs === rhs,
        sqr: (num) => modular_mod(num * num, ORDER),
        add: (lhs, rhs) => modular_mod(lhs + rhs, ORDER),
        sub: (lhs, rhs) => modular_mod(lhs - rhs, ORDER),
        mul: (lhs, rhs) => modular_mod(lhs * rhs, ORDER),
        pow: (num, power) => FpPow(f, num, power),
        div: (lhs, rhs) => modular_mod(lhs * invert(rhs, ORDER), ORDER),
        // Same as above, but doesn't normalize
        sqrN: (num) => num * num,
        addN: (lhs, rhs) => lhs + rhs,
        subN: (lhs, rhs) => lhs - rhs,
        mulN: (lhs, rhs) => lhs * rhs,
        inv: (num) => invert(num, ORDER),
        sqrt: redef.sqrt ||
            ((n) => {
                if (!sqrtP)
                    sqrtP = FpSqrt(ORDER);
                return sqrtP(f, n);
            }),
        toBytes: (num) => (isLE ? numberToBytesLE(num, BYTES) : utils_numberToBytesBE(num, BYTES)),
        fromBytes: (bytes) => {
            if (bytes.length !== BYTES)
                throw new Error('Field.fromBytes: expected ' + BYTES + ' bytes, got ' + bytes.length);
            return isLE ? utils_bytesToNumberLE(bytes) : utils_bytesToNumberBE(bytes);
        },
        // TODO: we don't need it here, move out to separate fn
        invertBatch: (lst) => modular_FpInvertBatch(f, lst),
        // We can't move this out because Fp6, Fp12 implement it
        // and it's unclear what to return in there.
        cmov: (a, b, c) => (c ? b : a),
    });
    return Object.freeze(f);
}
function FpSqrtOdd(Fp, elm) {
    if (!Fp.isOdd)
        throw new Error("Field doesn't have isOdd");
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? root : Fp.neg(root);
}
function FpSqrtEven(Fp, elm) {
    if (!Fp.isOdd)
        throw new Error("Field doesn't have isOdd");
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? Fp.neg(root) : root;
}
/**
 * "Constant-time" private key generation utility.
 * Same as mapKeyToField, but accepts less bytes (40 instead of 48 for 32-byte field).
 * Which makes it slightly more biased, less secure.
 * @deprecated use `mapKeyToField` instead
 */
function hashToPrivateScalar(hash, groupOrder, isLE = false) {
    hash = ensureBytes('privateHash', hash);
    const hashLen = hash.length;
    const minLen = nLength(groupOrder).nByteLength + 8;
    if (minLen < 24 || hashLen < minLen || hashLen > 1024)
        throw new Error('hashToPrivateScalar: expected ' + minLen + '-1024 bytes of input, got ' + hashLen);
    const num = isLE ? bytesToNumberLE(hash) : bytesToNumberBE(hash);
    return modular_mod(num, groupOrder - modular_1n) + modular_1n;
}
/**
 * Returns total number of bytes consumed by the field element.
 * For example, 32 bytes for usual 256-bit weierstrass curve.
 * @param fieldOrder number of field elements, usually CURVE.n
 * @returns byte length of field
 */
function getFieldBytesLength(fieldOrder) {
    if (typeof fieldOrder !== 'bigint')
        throw new Error('field order must be bigint');
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
}
/**
 * Returns minimal amount of bytes that can be safely reduced
 * by field order.
 * Should be 2^-128 for 128-bit curve such as P256.
 * @param fieldOrder number of field elements, usually CURVE.n
 * @returns byte length of target hash
 */
function getMinHashLength(fieldOrder) {
    const length = getFieldBytesLength(fieldOrder);
    return length + Math.ceil(length / 2);
}
/**
 * "Constant-time" private key generation utility.
 * Can take (n + n/2) or more bytes of uniform input e.g. from CSPRNG or KDF
 * and convert them into private scalar, with the modulo bias being negligible.
 * Needs at least 48 bytes of input for 32-byte private key.
 * https://research.kudelskisecurity.com/2020/07/28/the-definitive-guide-to-modulo-bias-and-how-to-avoid-it/
 * FIPS 186-5, A.2 https://csrc.nist.gov/publications/detail/fips/186/5/final
 * RFC 9380, https://www.rfc-editor.org/rfc/rfc9380#section-5
 * @param hash hash output from SHA3 or a similar function
 * @param groupOrder size of subgroup - (e.g. secp256k1.CURVE.n)
 * @param isLE interpret hash bytes as LE num
 * @returns valid private scalar
 */
function mapHashToField(key, fieldOrder, isLE = false) {
    const len = key.length;
    const fieldLen = getFieldBytesLength(fieldOrder);
    const minLen = getMinHashLength(fieldOrder);
    // No small numbers: need to understand bias story. No huge numbers: easier to detect JS timings.
    if (len < 16 || len < minLen || len > 1024)
        throw new Error('expected ' + minLen + '-1024 bytes of input, got ' + len);
    const num = isLE ? utils_bytesToNumberLE(key) : utils_bytesToNumberBE(key);
    // `mod(x, 11)` can sometimes produce 0. `mod(x, 10) + 1` is the same, but no 0
    const reduced = modular_mod(num, fieldOrder - modular_1n) + modular_1n;
    return isLE ? numberToBytesLE(reduced, fieldLen) : utils_numberToBytesBE(reduced, fieldLen);
}
//# sourceMappingURL=modular.js.map
;// ./node_modules/ox/node_modules/@noble/curves/esm/abstract/curve.js
/**
 * Methods for elliptic curve multiplication by scalars.
 * Contains wNAF, pippenger
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */


const curve_0n = BigInt(0);
const curve_1n = BigInt(1);
function constTimeNegate(condition, item) {
    const neg = item.negate();
    return condition ? neg : item;
}
function validateW(W, bits) {
    if (!Number.isSafeInteger(W) || W <= 0 || W > bits)
        throw new Error('invalid window size, expected [1..' + bits + '], got W=' + W);
}
function calcWOpts(W, scalarBits) {
    validateW(W, scalarBits);
    const windows = Math.ceil(scalarBits / W) + 1; // W=8 33. Not 32, because we skip zero
    const windowSize = 2 ** (W - 1); // W=8 128. Not 256, because we skip zero
    const maxNumber = 2 ** W; // W=8 256
    const mask = utils_bitMask(W); // W=8 255 == mask 0b11111111
    const shiftBy = BigInt(W); // W=8 8
    return { windows, windowSize, mask, maxNumber, shiftBy };
}
function calcOffsets(n, window, wOpts) {
    const { windowSize, mask, maxNumber, shiftBy } = wOpts;
    let wbits = Number(n & mask); // extract W bits.
    let nextN = n >> shiftBy; // shift number by W bits.
    // What actually happens here:
    // const highestBit = Number(mask ^ (mask >> 1n));
    // let wbits2 = wbits - 1; // skip zero
    // if (wbits2 & highestBit) { wbits2 ^= Number(mask); // (~);
    // split if bits > max: +224 => 256-32
    if (wbits > windowSize) {
        // we skip zero, which means instead of `>= size-1`, we do `> size`
        wbits -= maxNumber; // -32, can be maxNumber - wbits, but then we need to set isNeg here.
        nextN += curve_1n; // +256 (carry)
    }
    const offsetStart = window * windowSize;
    const offset = offsetStart + Math.abs(wbits) - 1; // -1 because we skip zero
    const isZero = wbits === 0; // is current window slice a 0?
    const isNeg = wbits < 0; // is current window slice negative?
    const isNegF = window % 2 !== 0; // fake random statement for noise
    const offsetF = offsetStart; // fake offset for noise
    return { nextN, offset, isZero, isNeg, isNegF, offsetF };
}
function validateMSMPoints(points, c) {
    if (!Array.isArray(points))
        throw new Error('array expected');
    points.forEach((p, i) => {
        if (!(p instanceof c))
            throw new Error('invalid point at index ' + i);
    });
}
function validateMSMScalars(scalars, field) {
    if (!Array.isArray(scalars))
        throw new Error('array of scalars expected');
    scalars.forEach((s, i) => {
        if (!field.isValid(s))
            throw new Error('invalid scalar at index ' + i);
    });
}
// Since points in different groups cannot be equal (different object constructor),
// we can have single place to store precomputes.
// Allows to make points frozen / immutable.
const pointPrecomputes = new WeakMap();
const pointWindowSizes = new WeakMap();
function getW(P) {
    return pointWindowSizes.get(P) || 1;
}
/**
 * Elliptic curve multiplication of Point by scalar. Fragile.
 * Scalars should always be less than curve order: this should be checked inside of a curve itself.
 * Creates precomputation tables for fast multiplication:
 * - private scalar is split by fixed size windows of W bits
 * - every window point is collected from window's table & added to accumulator
 * - since windows are different, same point inside tables won't be accessed more than once per calc
 * - each multiplication is 'Math.ceil(CURVE_ORDER / 𝑊) + 1' point additions (fixed for any scalar)
 * - +1 window is neccessary for wNAF
 * - wNAF reduces table size: 2x less memory + 2x faster generation, but 10% slower multiplication
 *
 * @todo Research returning 2d JS array of windows, instead of a single window.
 * This would allow windows to be in different memory locations
 */
function wNAF(c, bits) {
    return {
        constTimeNegate,
        hasPrecomputes(elm) {
            return getW(elm) !== 1;
        },
        // non-const time multiplication ladder
        unsafeLadder(elm, n, p = c.ZERO) {
            let d = elm;
            while (n > curve_0n) {
                if (n & curve_1n)
                    p = p.add(d);
                d = d.double();
                n >>= curve_1n;
            }
            return p;
        },
        /**
         * Creates a wNAF precomputation window. Used for caching.
         * Default window size is set by `utils.precompute()` and is equal to 8.
         * Number of precomputed points depends on the curve size:
         * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
         * - 𝑊 is the window size
         * - 𝑛 is the bitlength of the curve order.
         * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
         * @param elm Point instance
         * @param W window size
         * @returns precomputed point tables flattened to a single array
         */
        precomputeWindow(elm, W) {
            const { windows, windowSize } = calcWOpts(W, bits);
            const points = [];
            let p = elm;
            let base = p;
            for (let window = 0; window < windows; window++) {
                base = p;
                points.push(base);
                // i=1, bc we skip 0
                for (let i = 1; i < windowSize; i++) {
                    base = base.add(p);
                    points.push(base);
                }
                p = base.double();
            }
            return points;
        },
        /**
         * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
         * @param W window size
         * @param precomputes precomputed tables
         * @param n scalar (we don't check here, but should be less than curve order)
         * @returns real and fake (for const-time) points
         */
        wNAF(W, precomputes, n) {
            // Smaller version:
            // https://github.com/paulmillr/noble-secp256k1/blob/47cb1669b6e506ad66b35fe7d76132ae97465da2/index.ts#L502-L541
            // TODO: check the scalar is less than group order?
            // wNAF behavior is undefined otherwise. But have to carefully remove
            // other checks before wNAF. ORDER == bits here.
            // Accumulators
            let p = c.ZERO;
            let f = c.BASE;
            // This code was first written with assumption that 'f' and 'p' will never be infinity point:
            // since each addition is multiplied by 2 ** W, it cannot cancel each other. However,
            // there is negate now: it is possible that negated element from low value
            // would be the same as high element, which will create carry into next window.
            // It's not obvious how this can fail, but still worth investigating later.
            const wo = calcWOpts(W, bits);
            for (let window = 0; window < wo.windows; window++) {
                // (n === _0n) is handled and not early-exited. isEven and offsetF are used for noise
                const { nextN, offset, isZero, isNeg, isNegF, offsetF } = calcOffsets(n, window, wo);
                n = nextN;
                if (isZero) {
                    // bits are 0: add garbage to fake point
                    // Important part for const-time getPublicKey: add random "noise" point to f.
                    f = f.add(constTimeNegate(isNegF, precomputes[offsetF]));
                }
                else {
                    // bits are 1: add to result point
                    p = p.add(constTimeNegate(isNeg, precomputes[offset]));
                }
            }
            // Return both real and fake points: JIT won't eliminate f.
            // At this point there is a way to F be infinity-point even if p is not,
            // which makes it less const-time: around 1 bigint multiply.
            return { p, f };
        },
        /**
         * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
         * @param W window size
         * @param precomputes precomputed tables
         * @param n scalar (we don't check here, but should be less than curve order)
         * @param acc accumulator point to add result of multiplication
         * @returns point
         */
        wNAFUnsafe(W, precomputes, n, acc = c.ZERO) {
            const wo = calcWOpts(W, bits);
            for (let window = 0; window < wo.windows; window++) {
                if (n === curve_0n)
                    break; // Early-exit, skip 0 value
                const { nextN, offset, isZero, isNeg } = calcOffsets(n, window, wo);
                n = nextN;
                if (isZero) {
                    // Window bits are 0: skip processing.
                    // Move to next window.
                    continue;
                }
                else {
                    const item = precomputes[offset];
                    acc = acc.add(isNeg ? item.negate() : item); // Re-using acc allows to save adds in MSM
                }
            }
            return acc;
        },
        getPrecomputes(W, P, transform) {
            // Calculate precomputes on a first run, reuse them after
            let comp = pointPrecomputes.get(P);
            if (!comp) {
                comp = this.precomputeWindow(P, W);
                if (W !== 1)
                    pointPrecomputes.set(P, transform(comp));
            }
            return comp;
        },
        wNAFCached(P, n, transform) {
            const W = getW(P);
            return this.wNAF(W, this.getPrecomputes(W, P, transform), n);
        },
        wNAFCachedUnsafe(P, n, transform, prev) {
            const W = getW(P);
            if (W === 1)
                return this.unsafeLadder(P, n, prev); // For W=1 ladder is ~x2 faster
            return this.wNAFUnsafe(W, this.getPrecomputes(W, P, transform), n, prev);
        },
        // We calculate precomputes for elliptic curve point multiplication
        // using windowed method. This specifies window size and
        // stores precomputed values. Usually only base point would be precomputed.
        setWindowSize(P, W) {
            validateW(W, bits);
            pointWindowSizes.set(P, W);
            pointPrecomputes.delete(P);
        },
    };
}
/**
 * Pippenger algorithm for multi-scalar multiplication (MSM, Pa + Qb + Rc + ...).
 * 30x faster vs naive addition on L=4096, 10x faster than precomputes.
 * For N=254bit, L=1, it does: 1024 ADD + 254 DBL. For L=5: 1536 ADD + 254 DBL.
 * Algorithmically constant-time (for same L), even when 1 point + scalar, or when scalar = 0.
 * @param c Curve Point constructor
 * @param fieldN field over CURVE.N - important that it's not over CURVE.P
 * @param points array of L curve points
 * @param scalars array of L scalars (aka private keys / bigints)
 */
function pippenger(c, fieldN, points, scalars) {
    // If we split scalars by some window (let's say 8 bits), every chunk will only
    // take 256 buckets even if there are 4096 scalars, also re-uses double.
    // TODO:
    // - https://eprint.iacr.org/2024/750.pdf
    // - https://tches.iacr.org/index.php/TCHES/article/view/10287
    // 0 is accepted in scalars
    validateMSMPoints(points, c);
    validateMSMScalars(scalars, fieldN);
    const plength = points.length;
    const slength = scalars.length;
    if (plength !== slength)
        throw new Error('arrays of points and scalars must have equal length');
    // if (plength === 0) throw new Error('array must be of length >= 2');
    const zero = c.ZERO;
    const wbits = bitLen(BigInt(plength));
    let windowSize = 1; // bits
    if (wbits > 12)
        windowSize = wbits - 3;
    else if (wbits > 4)
        windowSize = wbits - 2;
    else if (wbits > 0)
        windowSize = 2;
    const MASK = utils_bitMask(windowSize);
    const buckets = new Array(Number(MASK) + 1).fill(zero); // +1 for zero array
    const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
    let sum = zero;
    for (let i = lastBits; i >= 0; i -= windowSize) {
        buckets.fill(zero);
        for (let j = 0; j < slength; j++) {
            const scalar = scalars[j];
            const wbits = Number((scalar >> BigInt(i)) & MASK);
            buckets[wbits] = buckets[wbits].add(points[j]);
        }
        let resI = zero; // not using this will do small speed-up, but will lose ct
        // Skip first bucket, because it is zero
        for (let j = buckets.length - 1, sumI = zero; j > 0; j--) {
            sumI = sumI.add(buckets[j]);
            resI = resI.add(sumI);
        }
        sum = sum.add(resI);
        if (i !== 0)
            for (let j = 0; j < windowSize; j++)
                sum = sum.double();
    }
    return sum;
}
/**
 * Precomputed multi-scalar multiplication (MSM, Pa + Qb + Rc + ...).
 * @param c Curve Point constructor
 * @param fieldN field over CURVE.N - important that it's not over CURVE.P
 * @param points array of L curve points
 * @returns function which multiplies points with scaars
 */
function precomputeMSMUnsafe(c, fieldN, points, windowSize) {
    /**
     * Performance Analysis of Window-based Precomputation
     *
     * Base Case (256-bit scalar, 8-bit window):
     * - Standard precomputation requires:
     *   - 31 additions per scalar × 256 scalars = 7,936 ops
     *   - Plus 255 summary additions = 8,191 total ops
     *   Note: Summary additions can be optimized via accumulator
     *
     * Chunked Precomputation Analysis:
     * - Using 32 chunks requires:
     *   - 255 additions per chunk
     *   - 256 doublings
     *   - Total: (255 × 32) + 256 = 8,416 ops
     *
     * Memory Usage Comparison:
     * Window Size | Standard Points | Chunked Points
     * ------------|-----------------|---------------
     *     4-bit   |     520         |      15
     *     8-bit   |    4,224        |     255
     *    10-bit   |   13,824        |   1,023
     *    16-bit   |  557,056        |  65,535
     *
     * Key Advantages:
     * 1. Enables larger window sizes due to reduced memory overhead
     * 2. More efficient for smaller scalar counts:
     *    - 16 chunks: (16 × 255) + 256 = 4,336 ops
     *    - ~2x faster than standard 8,191 ops
     *
     * Limitations:
     * - Not suitable for plain precomputes (requires 256 constant doublings)
     * - Performance degrades with larger scalar counts:
     *   - Optimal for ~256 scalars
     *   - Less efficient for 4096+ scalars (Pippenger preferred)
     */
    validateW(windowSize, fieldN.BITS);
    validateMSMPoints(points, c);
    const zero = c.ZERO;
    const tableSize = 2 ** windowSize - 1; // table size (without zero)
    const chunks = Math.ceil(fieldN.BITS / windowSize); // chunks of item
    const MASK = bitMask(windowSize);
    const tables = points.map((p) => {
        const res = [];
        for (let i = 0, acc = p; i < tableSize; i++) {
            res.push(acc);
            acc = acc.add(p);
        }
        return res;
    });
    return (scalars) => {
        validateMSMScalars(scalars, fieldN);
        if (scalars.length > points.length)
            throw new Error('array of scalars must be smaller than array of points');
        let res = zero;
        for (let i = 0; i < chunks; i++) {
            // No need to double if accumulator is still zero.
            if (res !== zero)
                for (let j = 0; j < windowSize; j++)
                    res = res.double();
            const shiftBy = BigInt(chunks * windowSize - (i + 1) * windowSize);
            for (let j = 0; j < scalars.length; j++) {
                const n = scalars[j];
                const curr = Number((n >> shiftBy) & MASK);
                if (!curr)
                    continue; // skip zero scalars chunks
                res = res.add(tables[j][curr - 1]);
            }
        }
        return res;
    };
}
function validateBasic(curve) {
    modular_validateField(curve.Fp);
    validateObject(curve, {
        n: 'bigint',
        h: 'bigint',
        Gx: 'field',
        Gy: 'field',
    }, {
        nBitLength: 'isSafeInteger',
        nByteLength: 'isSafeInteger',
    });
    // Set defaults
    return Object.freeze({
        ...nLength(curve.n, curve.nBitLength),
        ...curve,
        ...{ p: curve.Fp.ORDER },
    });
}
//# sourceMappingURL=curve.js.map
;// ./node_modules/ox/node_modules/@noble/curves/esm/abstract/weierstrass.js
/**
 * Short Weierstrass curve methods. The formula is: y² = x³ + ax + b.
 *
 * ### Parameters
 *
 * To initialize a weierstrass curve, one needs to pass following params:
 *
 * * a: formula param
 * * b: formula param
 * * Fp: finite field of prime characteristic P; may be complex (Fp2). Arithmetics is done in field
 * * n: order of prime subgroup a.k.a total amount of valid curve points
 * * Gx: Base point (x, y) aka generator point. Gx = x coordinate
 * * Gy: ...y coordinate
 * * h: cofactor, usually 1. h*n = curve group order (n is only subgroup order)
 * * lowS: whether to enable (default) or disable "low-s" non-malleable signatures
 *
 * ### Design rationale for types
 *
 * * Interaction between classes from different curves should fail:
 *   `k256.Point.BASE.add(p256.Point.BASE)`
 * * For this purpose we want to use `instanceof` operator, which is fast and works during runtime
 * * Different calls of `curve()` would return different classes -
 *   `curve(params) !== curve(params)`: if somebody decided to monkey-patch their curve,
 *   it won't affect others
 *
 * TypeScript can't infer types for classes created inside a function. Classes is one instance
 * of nominative types in TypeScript and interfaces only check for shape, so it's hard to create
 * unique type for every function call.
 *
 * We can use generic types via some param, like curve opts, but that would:
 *     1. Enable interaction between `curve(params)` and `curve(params)` (curves of same params)
 *     which is hard to debug.
 *     2. Params can be generic and we can't enforce them to be constant value:
 *     if somebody creates curve from non-constant params,
 *     it would be allowed to interact with other curves with non-constant params
 *
 * @todo https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#unique-symbol
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// prettier-ignore

// prettier-ignore

// prettier-ignore

function validateSigVerOpts(opts) {
    if (opts.lowS !== undefined)
        abool('lowS', opts.lowS);
    if (opts.prehash !== undefined)
        abool('prehash', opts.prehash);
}
function validatePointOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
        a: 'field',
        b: 'field',
    }, {
        allowInfinityPoint: 'boolean',
        allowedPrivateKeyLengths: 'array',
        clearCofactor: 'function',
        fromBytes: 'function',
        isTorsionFree: 'function',
        toBytes: 'function',
        wrapPrivateKey: 'boolean',
    });
    const { endo, Fp, a } = opts;
    if (endo) {
        if (!Fp.eql(a, Fp.ZERO)) {
            throw new Error('invalid endo: CURVE.a must be 0');
        }
        if (typeof endo !== 'object' ||
            typeof endo.beta !== 'bigint' ||
            typeof endo.splitScalar !== 'function') {
            throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
        }
    }
    return Object.freeze({ ...opts });
}
class DERErr extends Error {
    constructor(m = '') {
        super(m);
    }
}
/**
 * ASN.1 DER encoding utilities. ASN is very complex & fragile. Format:
 *
 *     [0x30 (SEQUENCE), bytelength, 0x02 (INTEGER), intLength, R, 0x02 (INTEGER), intLength, S]
 *
 * Docs: https://letsencrypt.org/docs/a-warm-welcome-to-asn1-and-der/, https://luca.ntop.org/Teaching/Appunti/asn1.html
 */
const DER = {
    // asn.1 DER encoding utils
    Err: DERErr,
    // Basic building block is TLV (Tag-Length-Value)
    _tlv: {
        encode: (tag, data) => {
            const { Err: E } = DER;
            if (tag < 0 || tag > 256)
                throw new E('tlv.encode: wrong tag');
            if (data.length & 1)
                throw new E('tlv.encode: unpadded data');
            const dataLen = data.length / 2;
            const len = numberToHexUnpadded(dataLen);
            if ((len.length / 2) & 128)
                throw new E('tlv.encode: long form length too big');
            // length of length with long form flag
            const lenLen = dataLen > 127 ? numberToHexUnpadded((len.length / 2) | 128) : '';
            const t = numberToHexUnpadded(tag);
            return t + lenLen + len + data;
        },
        // v - value, l - left bytes (unparsed)
        decode(tag, data) {
            const { Err: E } = DER;
            let pos = 0;
            if (tag < 0 || tag > 256)
                throw new E('tlv.encode: wrong tag');
            if (data.length < 2 || data[pos++] !== tag)
                throw new E('tlv.decode: wrong tlv');
            const first = data[pos++];
            const isLong = !!(first & 128); // First bit of first length byte is flag for short/long form
            let length = 0;
            if (!isLong)
                length = first;
            else {
                // Long form: [longFlag(1bit), lengthLength(7bit), length (BE)]
                const lenLen = first & 127;
                if (!lenLen)
                    throw new E('tlv.decode(long): indefinite length not supported');
                if (lenLen > 4)
                    throw new E('tlv.decode(long): byte length is too big'); // this will overflow u32 in js
                const lengthBytes = data.subarray(pos, pos + lenLen);
                if (lengthBytes.length !== lenLen)
                    throw new E('tlv.decode: length bytes not complete');
                if (lengthBytes[0] === 0)
                    throw new E('tlv.decode(long): zero leftmost byte');
                for (const b of lengthBytes)
                    length = (length << 8) | b;
                pos += lenLen;
                if (length < 128)
                    throw new E('tlv.decode(long): not minimal encoding');
            }
            const v = data.subarray(pos, pos + length);
            if (v.length !== length)
                throw new E('tlv.decode: wrong value length');
            return { v, l: data.subarray(pos + length) };
        },
    },
    // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
    // since we always use positive integers here. It must always be empty:
    // - add zero byte if exists
    // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
    _int: {
        encode(num) {
            const { Err: E } = DER;
            if (num < weierstrass_0n)
                throw new E('integer: negative integers are not allowed');
            let hex = numberToHexUnpadded(num);
            // Pad with zero byte if negative flag is present
            if (Number.parseInt(hex[0], 16) & 0b1000)
                hex = '00' + hex;
            if (hex.length & 1)
                throw new E('unexpected DER parsing assertion: unpadded hex');
            return hex;
        },
        decode(data) {
            const { Err: E } = DER;
            if (data[0] & 128)
                throw new E('invalid signature integer: negative');
            if (data[0] === 0x00 && !(data[1] & 128))
                throw new E('invalid signature integer: unnecessary leading zero');
            return utils_bytesToNumberBE(data);
        },
    },
    toSig(hex) {
        // parse DER signature
        const { Err: E, _int: int, _tlv: tlv } = DER;
        const data = utils_ensureBytes('signature', hex);
        const { v: seqBytes, l: seqLeftBytes } = tlv.decode(0x30, data);
        if (seqLeftBytes.length)
            throw new E('invalid signature: left bytes after parsing');
        const { v: rBytes, l: rLeftBytes } = tlv.decode(0x02, seqBytes);
        const { v: sBytes, l: sLeftBytes } = tlv.decode(0x02, rLeftBytes);
        if (sLeftBytes.length)
            throw new E('invalid signature: left bytes after parsing');
        return { r: int.decode(rBytes), s: int.decode(sBytes) };
    },
    hexFromSig(sig) {
        const { _tlv: tlv, _int: int } = DER;
        const rs = tlv.encode(0x02, int.encode(sig.r));
        const ss = tlv.encode(0x02, int.encode(sig.s));
        const seq = rs + ss;
        return tlv.encode(0x30, seq);
    },
};
function numToSizedHex(num, size) {
    return bytesToHex(utils_numberToBytesBE(num, size));
}
// Be friendly to bad ECMAScript parsers by not using bigint literals
// prettier-ignore
const weierstrass_0n = BigInt(0), weierstrass_1n = BigInt(1), weierstrass_2n = BigInt(2), weierstrass_3n = BigInt(3), weierstrass_4n = BigInt(4);
function weierstrassPoints(opts) {
    const CURVE = validatePointOpts(opts);
    const { Fp } = CURVE; // All curves has same field / group length as for now, but they can differ
    const Fn = Field(CURVE.n, CURVE.nBitLength);
    const toBytes = CURVE.toBytes ||
        ((_c, point, _isCompressed) => {
            const a = point.toAffine();
            return utils_concatBytes(Uint8Array.from([0x04]), Fp.toBytes(a.x), Fp.toBytes(a.y));
        });
    const fromBytes = CURVE.fromBytes ||
        ((bytes) => {
            // const head = bytes[0];
            const tail = bytes.subarray(1);
            // if (head !== 0x04) throw new Error('Only non-compressed encoding is supported');
            const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
            const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
            return { x, y };
        });
    /**
     * y² = x³ + ax + b: Short weierstrass curve formula. Takes x, returns y².
     * @returns y²
     */
    function weierstrassEquation(x) {
        const { a, b } = CURVE;
        const x2 = Fp.sqr(x); // x * x
        const x3 = Fp.mul(x2, x); // x² * x
        return Fp.add(Fp.add(x3, Fp.mul(x, a)), b); // x³ + a * x + b
    }
    function isValidXY(x, y) {
        const left = Fp.sqr(y); // y²
        const right = weierstrassEquation(x); // x³ + ax + b
        return Fp.eql(left, right);
    }
    // Validate whether the passed curve params are valid.
    // Test 1: equation y² = x³ + ax + b should work for generator point.
    if (!isValidXY(CURVE.Gx, CURVE.Gy))
        throw new Error('bad curve params: generator point');
    // Test 2: discriminant Δ part should be non-zero: 4a³ + 27b² != 0.
    // Guarantees curve is genus-1, smooth (non-singular).
    const _4a3 = Fp.mul(Fp.pow(CURVE.a, weierstrass_3n), weierstrass_4n);
    const _27b2 = Fp.mul(Fp.sqr(CURVE.b), BigInt(27));
    if (Fp.is0(Fp.add(_4a3, _27b2)))
        throw new Error('bad curve params: a or b');
    // Valid group elements reside in range 1..n-1
    function isWithinCurveOrder(num) {
        return utils_inRange(num, weierstrass_1n, CURVE.n);
    }
    // Validates if priv key is valid and converts it to bigint.
    // Supports options allowedPrivateKeyLengths and wrapPrivateKey.
    function normPrivateKeyToScalar(key) {
        const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: N } = CURVE;
        if (lengths && typeof key !== 'bigint') {
            if (isBytes(key))
                key = bytesToHex(key);
            // Normalize to hex string, pad. E.g. P521 would norm 130-132 char hex to 132-char bytes
            if (typeof key !== 'string' || !lengths.includes(key.length))
                throw new Error('invalid private key');
            key = key.padStart(nByteLength * 2, '0');
        }
        let num;
        try {
            num =
                typeof key === 'bigint'
                    ? key
                    : utils_bytesToNumberBE(utils_ensureBytes('private key', key, nByteLength));
        }
        catch (error) {
            throw new Error('invalid private key, expected hex or ' + nByteLength + ' bytes, got ' + typeof key);
        }
        if (wrapPrivateKey)
            num = modular_mod(num, N); // disabled by default, enabled for BLS
        utils_aInRange('private key', num, weierstrass_1n, N); // num in range [1..N-1]
        return num;
    }
    function aprjpoint(other) {
        if (!(other instanceof Point))
            throw new Error('ProjectivePoint expected');
    }
    // Memoized toAffine / validity check. They are heavy. Points are immutable.
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (X, Y, Z) ∋ (x=X/Z, y=Y/Z)
    const toAffineMemo = memoized((p, iz) => {
        const { px: x, py: y, pz: z } = p;
        // Fast-path for normalized points
        if (Fp.eql(z, Fp.ONE))
            return { x, y };
        const is0 = p.is0();
        // If invZ was 0, we return zero point. However we still want to execute
        // all operations, so we replace invZ with a random number, 1.
        if (iz == null)
            iz = is0 ? Fp.ONE : Fp.inv(z);
        const ax = Fp.mul(x, iz);
        const ay = Fp.mul(y, iz);
        const zz = Fp.mul(z, iz);
        if (is0)
            return { x: Fp.ZERO, y: Fp.ZERO };
        if (!Fp.eql(zz, Fp.ONE))
            throw new Error('invZ was invalid');
        return { x: ax, y: ay };
    });
    // NOTE: on exception this will crash 'cached' and no value will be set.
    // Otherwise true will be return
    const assertValidMemo = memoized((p) => {
        if (p.is0()) {
            // (0, 1, 0) aka ZERO is invalid in most contexts.
            // In BLS, ZERO can be serialized, so we allow it.
            // (0, 0, 0) is invalid representation of ZERO.
            if (CURVE.allowInfinityPoint && !Fp.is0(p.py))
                return;
            throw new Error('bad point: ZERO');
        }
        // Some 3rd-party test vectors require different wording between here & `fromCompressedHex`
        const { x, y } = p.toAffine();
        // Check if x, y are valid field elements
        if (!Fp.isValid(x) || !Fp.isValid(y))
            throw new Error('bad point: x or y not FE');
        if (!isValidXY(x, y))
            throw new Error('bad point: equation left != right');
        if (!p.isTorsionFree())
            throw new Error('bad point: not in prime-order subgroup');
        return true;
    });
    /**
     * Projective Point works in 3d / projective (homogeneous) coordinates: (X, Y, Z) ∋ (x=X/Z, y=Y/Z)
     * Default Point works in 2d / affine coordinates: (x, y)
     * We're doing calculations in projective, because its operations don't require costly inversion.
     */
    class Point {
        constructor(px, py, pz) {
            if (px == null || !Fp.isValid(px))
                throw new Error('x required');
            if (py == null || !Fp.isValid(py) || Fp.is0(py))
                throw new Error('y required');
            if (pz == null || !Fp.isValid(pz))
                throw new Error('z required');
            this.px = px;
            this.py = py;
            this.pz = pz;
            Object.freeze(this);
        }
        // Does not validate if the point is on-curve.
        // Use fromHex instead, or call assertValidity() later.
        static fromAffine(p) {
            const { x, y } = p || {};
            if (!p || !Fp.isValid(x) || !Fp.isValid(y))
                throw new Error('invalid affine point');
            if (p instanceof Point)
                throw new Error('projective point not allowed');
            const is0 = (i) => Fp.eql(i, Fp.ZERO);
            // fromAffine(x:0, y:0) would produce (x:0, y:0, z:1), but we need (x:0, y:1, z:0)
            if (is0(x) && is0(y))
                return Point.ZERO;
            return new Point(x, y, Fp.ONE);
        }
        get x() {
            return this.toAffine().x;
        }
        get y() {
            return this.toAffine().y;
        }
        /**
         * Takes a bunch of Projective Points but executes only one
         * inversion on all of them. Inversion is very slow operation,
         * so this improves performance massively.
         * Optimization: converts a list of projective points to a list of identical points with Z=1.
         */
        static normalizeZ(points) {
            const toInv = modular_FpInvertBatch(Fp, points.map((p) => p.pz));
            return points.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
        }
        /**
         * Converts hash string or Uint8Array to Point.
         * @param hex short/long ECDSA hex
         */
        static fromHex(hex) {
            const P = Point.fromAffine(fromBytes(utils_ensureBytes('pointHex', hex)));
            P.assertValidity();
            return P;
        }
        // Multiplies generator point by privateKey.
        static fromPrivateKey(privateKey) {
            return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
        }
        // Multiscalar Multiplication
        static msm(points, scalars) {
            return pippenger(Point, Fn, points, scalars);
        }
        // "Private method", don't use it directly
        _setWindowSize(windowSize) {
            wnaf.setWindowSize(this, windowSize);
        }
        // A point on curve is valid if it conforms to equation.
        assertValidity() {
            assertValidMemo(this);
        }
        hasEvenY() {
            const { y } = this.toAffine();
            if (Fp.isOdd)
                return !Fp.isOdd(y);
            throw new Error("Field doesn't support isOdd");
        }
        /**
         * Compare one point to another.
         */
        equals(other) {
            aprjpoint(other);
            const { px: X1, py: Y1, pz: Z1 } = this;
            const { px: X2, py: Y2, pz: Z2 } = other;
            const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
            const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
            return U1 && U2;
        }
        /**
         * Flips point to one corresponding to (x, -y) in Affine coordinates.
         */
        negate() {
            return new Point(this.px, Fp.neg(this.py), this.pz);
        }
        // Renes-Costello-Batina exception-free doubling formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 3
        // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
        double() {
            const { a, b } = CURVE;
            const b3 = Fp.mul(b, weierstrass_3n);
            const { px: X1, py: Y1, pz: Z1 } = this;
            let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO; // prettier-ignore
            let t0 = Fp.mul(X1, X1); // step 1
            let t1 = Fp.mul(Y1, Y1);
            let t2 = Fp.mul(Z1, Z1);
            let t3 = Fp.mul(X1, Y1);
            t3 = Fp.add(t3, t3); // step 5
            Z3 = Fp.mul(X1, Z1);
            Z3 = Fp.add(Z3, Z3);
            X3 = Fp.mul(a, Z3);
            Y3 = Fp.mul(b3, t2);
            Y3 = Fp.add(X3, Y3); // step 10
            X3 = Fp.sub(t1, Y3);
            Y3 = Fp.add(t1, Y3);
            Y3 = Fp.mul(X3, Y3);
            X3 = Fp.mul(t3, X3);
            Z3 = Fp.mul(b3, Z3); // step 15
            t2 = Fp.mul(a, t2);
            t3 = Fp.sub(t0, t2);
            t3 = Fp.mul(a, t3);
            t3 = Fp.add(t3, Z3);
            Z3 = Fp.add(t0, t0); // step 20
            t0 = Fp.add(Z3, t0);
            t0 = Fp.add(t0, t2);
            t0 = Fp.mul(t0, t3);
            Y3 = Fp.add(Y3, t0);
            t2 = Fp.mul(Y1, Z1); // step 25
            t2 = Fp.add(t2, t2);
            t0 = Fp.mul(t2, t3);
            X3 = Fp.sub(X3, t0);
            Z3 = Fp.mul(t2, t1);
            Z3 = Fp.add(Z3, Z3); // step 30
            Z3 = Fp.add(Z3, Z3);
            return new Point(X3, Y3, Z3);
        }
        // Renes-Costello-Batina exception-free addition formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 1
        // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
        add(other) {
            aprjpoint(other);
            const { px: X1, py: Y1, pz: Z1 } = this;
            const { px: X2, py: Y2, pz: Z2 } = other;
            let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO; // prettier-ignore
            const a = CURVE.a;
            const b3 = Fp.mul(CURVE.b, weierstrass_3n);
            let t0 = Fp.mul(X1, X2); // step 1
            let t1 = Fp.mul(Y1, Y2);
            let t2 = Fp.mul(Z1, Z2);
            let t3 = Fp.add(X1, Y1);
            let t4 = Fp.add(X2, Y2); // step 5
            t3 = Fp.mul(t3, t4);
            t4 = Fp.add(t0, t1);
            t3 = Fp.sub(t3, t4);
            t4 = Fp.add(X1, Z1);
            let t5 = Fp.add(X2, Z2); // step 10
            t4 = Fp.mul(t4, t5);
            t5 = Fp.add(t0, t2);
            t4 = Fp.sub(t4, t5);
            t5 = Fp.add(Y1, Z1);
            X3 = Fp.add(Y2, Z2); // step 15
            t5 = Fp.mul(t5, X3);
            X3 = Fp.add(t1, t2);
            t5 = Fp.sub(t5, X3);
            Z3 = Fp.mul(a, t4);
            X3 = Fp.mul(b3, t2); // step 20
            Z3 = Fp.add(X3, Z3);
            X3 = Fp.sub(t1, Z3);
            Z3 = Fp.add(t1, Z3);
            Y3 = Fp.mul(X3, Z3);
            t1 = Fp.add(t0, t0); // step 25
            t1 = Fp.add(t1, t0);
            t2 = Fp.mul(a, t2);
            t4 = Fp.mul(b3, t4);
            t1 = Fp.add(t1, t2);
            t2 = Fp.sub(t0, t2); // step 30
            t2 = Fp.mul(a, t2);
            t4 = Fp.add(t4, t2);
            t0 = Fp.mul(t1, t4);
            Y3 = Fp.add(Y3, t0);
            t0 = Fp.mul(t5, t4); // step 35
            X3 = Fp.mul(t3, X3);
            X3 = Fp.sub(X3, t0);
            t0 = Fp.mul(t3, t1);
            Z3 = Fp.mul(t5, Z3);
            Z3 = Fp.add(Z3, t0); // step 40
            return new Point(X3, Y3, Z3);
        }
        subtract(other) {
            return this.add(other.negate());
        }
        is0() {
            return this.equals(Point.ZERO);
        }
        wNAF(n) {
            return wnaf.wNAFCached(this, n, Point.normalizeZ);
        }
        /**
         * Non-constant-time multiplication. Uses double-and-add algorithm.
         * It's faster, but should only be used when you don't care about
         * an exposed private key e.g. sig verification, which works over *public* keys.
         */
        multiplyUnsafe(sc) {
            const { endo, n: N } = CURVE;
            utils_aInRange('scalar', sc, weierstrass_0n, N);
            const I = Point.ZERO;
            if (sc === weierstrass_0n)
                return I;
            if (this.is0() || sc === weierstrass_1n)
                return this;
            // Case a: no endomorphism. Case b: has precomputes.
            if (!endo || wnaf.hasPrecomputes(this))
                return wnaf.wNAFCachedUnsafe(this, sc, Point.normalizeZ);
            // Case c: endomorphism
            /** See docs for {@link EndomorphismOpts} */
            let { k1neg, k1, k2neg, k2 } = endo.splitScalar(sc);
            let k1p = I;
            let k2p = I;
            let d = this;
            while (k1 > weierstrass_0n || k2 > weierstrass_0n) {
                if (k1 & weierstrass_1n)
                    k1p = k1p.add(d);
                if (k2 & weierstrass_1n)
                    k2p = k2p.add(d);
                d = d.double();
                k1 >>= weierstrass_1n;
                k2 >>= weierstrass_1n;
            }
            if (k1neg)
                k1p = k1p.negate();
            if (k2neg)
                k2p = k2p.negate();
            k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
            return k1p.add(k2p);
        }
        /**
         * Constant time multiplication.
         * Uses wNAF method. Windowed method may be 10% faster,
         * but takes 2x longer to generate and consumes 2x memory.
         * Uses precomputes when available.
         * Uses endomorphism for Koblitz curves.
         * @param scalar by which the point would be multiplied
         * @returns New point
         */
        multiply(scalar) {
            const { endo, n: N } = CURVE;
            utils_aInRange('scalar', scalar, weierstrass_1n, N);
            let point, fake; // Fake point is used to const-time mult
            /** See docs for {@link EndomorphismOpts} */
            if (endo) {
                const { k1neg, k1, k2neg, k2 } = endo.splitScalar(scalar);
                let { p: k1p, f: f1p } = this.wNAF(k1);
                let { p: k2p, f: f2p } = this.wNAF(k2);
                k1p = wnaf.constTimeNegate(k1neg, k1p);
                k2p = wnaf.constTimeNegate(k2neg, k2p);
                k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
                point = k1p.add(k2p);
                fake = f1p.add(f2p);
            }
            else {
                const { p, f } = this.wNAF(scalar);
                point = p;
                fake = f;
            }
            // Normalize `z` for both points, but return only real one
            return Point.normalizeZ([point, fake])[0];
        }
        /**
         * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
         * Not using Strauss-Shamir trick: precomputation tables are faster.
         * The trick could be useful if both P and Q are not G (not in our case).
         * @returns non-zero affine point
         */
        multiplyAndAddUnsafe(Q, a, b) {
            const G = Point.BASE; // No Strauss-Shamir trick: we have 10% faster G precomputes
            const mul = (P, a // Select faster multiply() method
            ) => (a === weierstrass_0n || a === weierstrass_1n || !P.equals(G) ? P.multiplyUnsafe(a) : P.multiply(a));
            const sum = mul(this, a).add(mul(Q, b));
            return sum.is0() ? undefined : sum;
        }
        // Converts Projective point to affine (x, y) coordinates.
        // Can accept precomputed Z^-1 - for example, from invertBatch.
        // (x, y, z) ∋ (x=x/z, y=y/z)
        toAffine(iz) {
            return toAffineMemo(this, iz);
        }
        isTorsionFree() {
            const { h: cofactor, isTorsionFree } = CURVE;
            if (cofactor === weierstrass_1n)
                return true; // No subgroups, always torsion-free
            if (isTorsionFree)
                return isTorsionFree(Point, this);
            throw new Error('isTorsionFree() has not been declared for the elliptic curve');
        }
        clearCofactor() {
            const { h: cofactor, clearCofactor } = CURVE;
            if (cofactor === weierstrass_1n)
                return this; // Fast-path
            if (clearCofactor)
                return clearCofactor(Point, this);
            return this.multiplyUnsafe(CURVE.h);
        }
        toRawBytes(isCompressed = true) {
            abool('isCompressed', isCompressed);
            this.assertValidity();
            return toBytes(Point, this, isCompressed);
        }
        toHex(isCompressed = true) {
            abool('isCompressed', isCompressed);
            return bytesToHex(this.toRawBytes(isCompressed));
        }
    }
    // base / generator point
    Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
    // zero / infinity / identity point
    Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO); // 0, 1, 0
    const { endo, nBitLength } = CURVE;
    const wnaf = wNAF(Point, endo ? Math.ceil(nBitLength / 2) : nBitLength);
    return {
        CURVE,
        ProjectivePoint: Point,
        normPrivateKeyToScalar,
        weierstrassEquation,
        isWithinCurveOrder,
    };
}
function validateOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
        hash: 'hash',
        hmac: 'function',
        randomBytes: 'function',
    }, {
        bits2int: 'function',
        bits2int_modN: 'function',
        lowS: 'boolean',
    });
    return Object.freeze({ lowS: true, ...opts });
}
/**
 * Creates short weierstrass curve and ECDSA signature methods for it.
 * @example
 * import { Field } from '@noble/curves/abstract/modular';
 * // Before that, define BigInt-s: a, b, p, n, Gx, Gy
 * const curve = weierstrass({ a, b, Fp: Field(p), n, Gx, Gy, h: 1n })
 */
function weierstrass(curveDef) {
    const CURVE = validateOpts(curveDef);
    const { Fp, n: CURVE_ORDER, nByteLength, nBitLength } = CURVE;
    const compressedLen = Fp.BYTES + 1; // e.g. 33 for 32
    const uncompressedLen = 2 * Fp.BYTES + 1; // e.g. 65 for 32
    function modN(a) {
        return modular_mod(a, CURVE_ORDER);
    }
    function invN(a) {
        return invert(a, CURVE_ORDER);
    }
    const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder, } = weierstrassPoints({
        ...CURVE,
        toBytes(_c, point, isCompressed) {
            const a = point.toAffine();
            const x = Fp.toBytes(a.x);
            const cat = utils_concatBytes;
            abool('isCompressed', isCompressed);
            if (isCompressed) {
                return cat(Uint8Array.from([point.hasEvenY() ? 0x02 : 0x03]), x);
            }
            else {
                return cat(Uint8Array.from([0x04]), x, Fp.toBytes(a.y));
            }
        },
        fromBytes(bytes) {
            const len = bytes.length;
            const head = bytes[0];
            const tail = bytes.subarray(1);
            // this.assertValidity() is done inside of fromHex
            if (len === compressedLen && (head === 0x02 || head === 0x03)) {
                const x = utils_bytesToNumberBE(tail);
                if (!utils_inRange(x, weierstrass_1n, Fp.ORDER))
                    throw new Error('Point is not on curve');
                const y2 = weierstrassEquation(x); // y² = x³ + ax + b
                let y;
                try {
                    y = Fp.sqrt(y2); // y = y² ^ (p+1)/4
                }
                catch (sqrtError) {
                    const suffix = sqrtError instanceof Error ? ': ' + sqrtError.message : '';
                    throw new Error('Point is not on curve' + suffix);
                }
                const isYOdd = (y & weierstrass_1n) === weierstrass_1n;
                // ECDSA
                const isHeadOdd = (head & 1) === 1;
                if (isHeadOdd !== isYOdd)
                    y = Fp.neg(y);
                return { x, y };
            }
            else if (len === uncompressedLen && head === 0x04) {
                const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
                const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
                return { x, y };
            }
            else {
                const cl = compressedLen;
                const ul = uncompressedLen;
                throw new Error('invalid Point, expected length of ' + cl + ', or uncompressed ' + ul + ', got ' + len);
            }
        },
    });
    function isBiggerThanHalfOrder(number) {
        const HALF = CURVE_ORDER >> weierstrass_1n;
        return number > HALF;
    }
    function normalizeS(s) {
        return isBiggerThanHalfOrder(s) ? modN(-s) : s;
    }
    // slice bytes num
    const slcNum = (b, from, to) => utils_bytesToNumberBE(b.slice(from, to));
    /**
     * ECDSA signature with its (r, s) properties. Supports DER & compact representations.
     */
    class Signature {
        constructor(r, s, recovery) {
            utils_aInRange('r', r, weierstrass_1n, CURVE_ORDER); // r in [1..N]
            utils_aInRange('s', s, weierstrass_1n, CURVE_ORDER); // s in [1..N]
            this.r = r;
            this.s = s;
            if (recovery != null)
                this.recovery = recovery;
            Object.freeze(this);
        }
        // pair (bytes of r, bytes of s)
        static fromCompact(hex) {
            const l = nByteLength;
            hex = utils_ensureBytes('compactSignature', hex, l * 2);
            return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
        }
        // DER encoded ECDSA signature
        // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
        static fromDER(hex) {
            const { r, s } = DER.toSig(utils_ensureBytes('DER', hex));
            return new Signature(r, s);
        }
        /**
         * @todo remove
         * @deprecated
         */
        assertValidity() { }
        addRecoveryBit(recovery) {
            return new Signature(this.r, this.s, recovery);
        }
        recoverPublicKey(msgHash) {
            const { r, s, recovery: rec } = this;
            const h = bits2int_modN(utils_ensureBytes('msgHash', msgHash)); // Truncate hash
            if (rec == null || ![0, 1, 2, 3].includes(rec))
                throw new Error('recovery id invalid');
            const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
            if (radj >= Fp.ORDER)
                throw new Error('recovery id 2 or 3 invalid');
            const prefix = (rec & 1) === 0 ? '02' : '03';
            const R = Point.fromHex(prefix + numToSizedHex(radj, Fp.BYTES));
            const ir = invN(radj); // r^-1
            const u1 = modN(-h * ir); // -hr^-1
            const u2 = modN(s * ir); // sr^-1
            const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2); // (sr^-1)R-(hr^-1)G = -(hr^-1)G + (sr^-1)
            if (!Q)
                throw new Error('point at infinify'); // unsafe is fine: no priv data leaked
            Q.assertValidity();
            return Q;
        }
        // Signatures should be low-s, to prevent malleability.
        hasHighS() {
            return isBiggerThanHalfOrder(this.s);
        }
        normalizeS() {
            return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
        }
        // DER-encoded
        toDERRawBytes() {
            return hexToBytes(this.toDERHex());
        }
        toDERHex() {
            return DER.hexFromSig(this);
        }
        // padded bytes of r, then padded bytes of s
        toCompactRawBytes() {
            return hexToBytes(this.toCompactHex());
        }
        toCompactHex() {
            const l = nByteLength;
            return numToSizedHex(this.r, l) + numToSizedHex(this.s, l);
        }
    }
    const utils = {
        isValidPrivateKey(privateKey) {
            try {
                normPrivateKeyToScalar(privateKey);
                return true;
            }
            catch (error) {
                return false;
            }
        },
        normPrivateKeyToScalar: normPrivateKeyToScalar,
        /**
         * Produces cryptographically secure private key from random of size
         * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
         */
        randomPrivateKey: () => {
            const length = getMinHashLength(CURVE.n);
            return mapHashToField(CURVE.randomBytes(length), CURVE.n);
        },
        /**
         * Creates precompute table for an arbitrary EC point. Makes point "cached".
         * Allows to massively speed-up `point.multiply(scalar)`.
         * @returns cached point
         * @example
         * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
         * fast.multiply(privKey); // much faster ECDH now
         */
        precompute(windowSize = 8, point = Point.BASE) {
            point._setWindowSize(windowSize);
            point.multiply(BigInt(3)); // 3 is arbitrary, just need any number here
            return point;
        },
    };
    /**
     * Computes public key for a private key. Checks for validity of the private key.
     * @param privateKey private key
     * @param isCompressed whether to return compact (default), or full key
     * @returns Public key, full when isCompressed=false; short when isCompressed=true
     */
    function getPublicKey(privateKey, isCompressed = true) {
        return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
    }
    /**
     * Quick and dirty check for item being public key. Does not validate hex, or being on-curve.
     */
    function isProbPub(item) {
        if (typeof item === 'bigint')
            return false;
        if (item instanceof Point)
            return true;
        const arr = utils_ensureBytes('key', item);
        const len = arr.length;
        const fpl = Fp.BYTES;
        const compLen = fpl + 1; // e.g. 33 for 32
        const uncompLen = 2 * fpl + 1; // e.g. 65 for 32
        if (CURVE.allowedPrivateKeyLengths || nByteLength === compLen) {
            return undefined;
        }
        else {
            return len === compLen || len === uncompLen;
        }
    }
    /**
     * ECDH (Elliptic Curve Diffie Hellman).
     * Computes shared public key from private key and public key.
     * Checks: 1) private key validity 2) shared key is on-curve.
     * Does NOT hash the result.
     * @param privateA private key
     * @param publicB different public key
     * @param isCompressed whether to return compact (default), or full key
     * @returns shared public key
     */
    function getSharedSecret(privateA, publicB, isCompressed = true) {
        if (isProbPub(privateA) === true)
            throw new Error('first arg must be private key');
        if (isProbPub(publicB) === false)
            throw new Error('second arg must be public key');
        const b = Point.fromHex(publicB); // check for being on-curve
        return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
    }
    // RFC6979: ensure ECDSA msg is X bytes and < N. RFC suggests optional truncating via bits2octets.
    // FIPS 186-4 4.6 suggests the leftmost min(nBitLen, outLen) bits, which matches bits2int.
    // bits2int can produce res>N, we can do mod(res, N) since the bitLen is the same.
    // int2octets can't be used; pads small msgs with 0: unacceptatble for trunc as per RFC vectors
    const bits2int = CURVE.bits2int ||
        function (bytes) {
            // Our custom check "just in case", for protection against DoS
            if (bytes.length > 8192)
                throw new Error('input is too large');
            // For curves with nBitLength % 8 !== 0: bits2octets(bits2octets(m)) !== bits2octets(m)
            // for some cases, since bytes.length * 8 is not actual bitLength.
            const num = utils_bytesToNumberBE(bytes); // check for == u8 done here
            const delta = bytes.length * 8 - nBitLength; // truncate to nBitLength leftmost bits
            return delta > 0 ? num >> BigInt(delta) : num;
        };
    const bits2int_modN = CURVE.bits2int_modN ||
        function (bytes) {
            return modN(bits2int(bytes)); // can't use bytesToNumberBE here
        };
    // NOTE: pads output with zero as per spec
    const ORDER_MASK = utils_bitMask(nBitLength);
    /**
     * Converts to bytes. Checks if num in `[0..ORDER_MASK-1]` e.g.: `[0..2^256-1]`.
     */
    function int2octets(num) {
        utils_aInRange('num < 2^' + nBitLength, num, weierstrass_0n, ORDER_MASK);
        // works with order, can have different size than numToField!
        return utils_numberToBytesBE(num, nByteLength);
    }
    // Steps A, D of RFC6979 3.2
    // Creates RFC6979 seed; converts msg/privKey to numbers.
    // Used only in sign, not in verify.
    // NOTE: we cannot assume here that msgHash has same amount of bytes as curve order,
    // this will be invalid at least for P521. Also it can be bigger for P224 + SHA256
    function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
        if (['recovered', 'canonical'].some((k) => k in opts))
            throw new Error('sign() legacy options not supported');
        const { hash, randomBytes } = CURVE;
        let { lowS, prehash, extraEntropy: ent } = opts; // generates low-s sigs by default
        if (lowS == null)
            lowS = true; // RFC6979 3.2: we skip step A, because we already provide hash
        msgHash = utils_ensureBytes('msgHash', msgHash);
        validateSigVerOpts(opts);
        if (prehash)
            msgHash = utils_ensureBytes('prehashed msgHash', hash(msgHash));
        // We can't later call bits2octets, since nested bits2int is broken for curves
        // with nBitLength % 8 !== 0. Because of that, we unwrap it here as int2octets call.
        // const bits2octets = (bits) => int2octets(bits2int_modN(bits))
        const h1int = bits2int_modN(msgHash);
        const d = normPrivateKeyToScalar(privateKey); // validate private key, convert to bigint
        const seedArgs = [int2octets(d), int2octets(h1int)];
        // extraEntropy. RFC6979 3.6: additional k' (optional).
        if (ent != null && ent !== false) {
            // K = HMAC_K(V || 0x00 || int2octets(x) || bits2octets(h1) || k')
            const e = ent === true ? randomBytes(Fp.BYTES) : ent; // generate random bytes OR pass as-is
            seedArgs.push(utils_ensureBytes('extraEntropy', e)); // check for being bytes
        }
        const seed = utils_concatBytes(...seedArgs); // Step D of RFC6979 3.2
        const m = h1int; // NOTE: no need to call bits2int second time here, it is inside truncateHash!
        // Converts signature params into point w r/s, checks result for validity.
        function k2sig(kBytes) {
            // RFC 6979 Section 3.2, step 3: k = bits2int(T)
            const k = bits2int(kBytes); // Cannot use fields methods, since it is group element
            if (!isWithinCurveOrder(k))
                return; // Important: all mod() calls here must be done over N
            const ik = invN(k); // k^-1 mod n
            const q = Point.BASE.multiply(k).toAffine(); // q = Gk
            const r = modN(q.x); // r = q.x mod n
            if (r === weierstrass_0n)
                return;
            // Can use scalar blinding b^-1(bm + bdr) where b ∈ [1,q−1] according to
            // https://tches.iacr.org/index.php/TCHES/article/view/7337/6509. We've decided against it:
            // a) dependency on CSPRNG b) 15% slowdown c) doesn't really help since bigints are not CT
            const s = modN(ik * modN(m + r * d)); // Not using blinding here
            if (s === weierstrass_0n)
                return;
            let recovery = (q.x === r ? 0 : 2) | Number(q.y & weierstrass_1n); // recovery bit (2 or 3, when q.x > n)
            let normS = s;
            if (lowS && isBiggerThanHalfOrder(s)) {
                normS = normalizeS(s); // if lowS was passed, ensure s is always
                recovery ^= 1; // // in the bottom half of N
            }
            return new Signature(r, normS, recovery); // use normS, not s
        }
        return { seed, k2sig };
    }
    const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
    const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
    /**
     * Signs message hash with a private key.
     * ```
     * sign(m, d, k) where
     *   (x, y) = G × k
     *   r = x mod n
     *   s = (m + dr)/k mod n
     * ```
     * @param msgHash NOT message. msg needs to be hashed to `msgHash`, or use `prehash`.
     * @param privKey private key
     * @param opts lowS for non-malleable sigs. extraEntropy for mixing randomness into k. prehash will hash first arg.
     * @returns signature with recovery param
     */
    function sign(msgHash, privKey, opts = defaultSigOpts) {
        const { seed, k2sig } = prepSig(msgHash, privKey, opts); // Steps A, D of RFC6979 3.2.
        const C = CURVE;
        const drbg = createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
        return drbg(seed, k2sig); // Steps B, C, D, E, F, G
    }
    // Enable precomputes. Slows down first publicKey computation by 20ms.
    Point.BASE._setWindowSize(8);
    // utils.precompute(8, ProjectivePoint.BASE)
    /**
     * Verifies a signature against message hash and public key.
     * Rejects lowS signatures by default: to override,
     * specify option `{lowS: false}`. Implements section 4.1.4 from https://www.secg.org/sec1-v2.pdf:
     *
     * ```
     * verify(r, s, h, P) where
     *   U1 = hs^-1 mod n
     *   U2 = rs^-1 mod n
     *   R = U1⋅G - U2⋅P
     *   mod(R.x, n) == r
     * ```
     */
    function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
        const sg = signature;
        msgHash = utils_ensureBytes('msgHash', msgHash);
        publicKey = utils_ensureBytes('publicKey', publicKey);
        const { lowS, prehash, format } = opts;
        // Verify opts, deduce signature format
        validateSigVerOpts(opts);
        if ('strict' in opts)
            throw new Error('options.strict was renamed to lowS');
        if (format !== undefined && format !== 'compact' && format !== 'der')
            throw new Error('format must be compact or der');
        const isHex = typeof sg === 'string' || isBytes(sg);
        const isObj = !isHex &&
            !format &&
            typeof sg === 'object' &&
            sg !== null &&
            typeof sg.r === 'bigint' &&
            typeof sg.s === 'bigint';
        if (!isHex && !isObj)
            throw new Error('invalid signature, expected Uint8Array, hex string or Signature instance');
        let _sig = undefined;
        let P;
        try {
            if (isObj)
                _sig = new Signature(sg.r, sg.s);
            if (isHex) {
                // Signature can be represented in 2 ways: compact (2*nByteLength) & DER (variable-length).
                // Since DER can also be 2*nByteLength bytes, we check for it first.
                try {
                    if (format !== 'compact')
                        _sig = Signature.fromDER(sg);
                }
                catch (derError) {
                    if (!(derError instanceof DER.Err))
                        throw derError;
                }
                if (!_sig && format !== 'der')
                    _sig = Signature.fromCompact(sg);
            }
            P = Point.fromHex(publicKey);
        }
        catch (error) {
            return false;
        }
        if (!_sig)
            return false;
        if (lowS && _sig.hasHighS())
            return false;
        if (prehash)
            msgHash = CURVE.hash(msgHash);
        const { r, s } = _sig;
        const h = bits2int_modN(msgHash); // Cannot use fields methods, since it is group element
        const is = invN(s); // s^-1
        const u1 = modN(h * is); // u1 = hs^-1 mod n
        const u2 = modN(r * is); // u2 = rs^-1 mod n
        const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine(); // R = u1⋅G + u2⋅P
        if (!R)
            return false;
        const v = modN(R.x);
        return v === r;
    }
    return {
        CURVE,
        getPublicKey,
        getSharedSecret,
        sign,
        verify,
        ProjectivePoint: Point,
        Signature,
        utils,
    };
}
/**
 * Implementation of the Shallue and van de Woestijne method for any weierstrass curve.
 * TODO: check if there is a way to merge this with uvRatio in Edwards; move to modular.
 * b = True and y = sqrt(u / v) if (u / v) is square in F, and
 * b = False and y = sqrt(Z * (u / v)) otherwise.
 * @param Fp
 * @param Z
 * @returns
 */
function SWUFpSqrtRatio(Fp, Z) {
    // Generic implementation
    const q = Fp.ORDER;
    let l = weierstrass_0n;
    for (let o = q - weierstrass_1n; o % weierstrass_2n === weierstrass_0n; o /= weierstrass_2n)
        l += weierstrass_1n;
    const c1 = l; // 1. c1, the largest integer such that 2^c1 divides q - 1.
    // We need 2n ** c1 and 2n ** (c1-1). We can't use **; but we can use <<.
    // 2n ** c1 == 2n << (c1-1)
    const _2n_pow_c1_1 = weierstrass_2n << (c1 - weierstrass_1n - weierstrass_1n);
    const _2n_pow_c1 = _2n_pow_c1_1 * weierstrass_2n;
    const c2 = (q - weierstrass_1n) / _2n_pow_c1; // 2. c2 = (q - 1) / (2^c1)  # Integer arithmetic
    const c3 = (c2 - weierstrass_1n) / weierstrass_2n; // 3. c3 = (c2 - 1) / 2            # Integer arithmetic
    const c4 = _2n_pow_c1 - weierstrass_1n; // 4. c4 = 2^c1 - 1                # Integer arithmetic
    const c5 = _2n_pow_c1_1; // 5. c5 = 2^(c1 - 1)                  # Integer arithmetic
    const c6 = Fp.pow(Z, c2); // 6. c6 = Z^c2
    const c7 = Fp.pow(Z, (c2 + weierstrass_1n) / weierstrass_2n); // 7. c7 = Z^((c2 + 1) / 2)
    let sqrtRatio = (u, v) => {
        let tv1 = c6; // 1. tv1 = c6
        let tv2 = Fp.pow(v, c4); // 2. tv2 = v^c4
        let tv3 = Fp.sqr(tv2); // 3. tv3 = tv2^2
        tv3 = Fp.mul(tv3, v); // 4. tv3 = tv3 * v
        let tv5 = Fp.mul(u, tv3); // 5. tv5 = u * tv3
        tv5 = Fp.pow(tv5, c3); // 6. tv5 = tv5^c3
        tv5 = Fp.mul(tv5, tv2); // 7. tv5 = tv5 * tv2
        tv2 = Fp.mul(tv5, v); // 8. tv2 = tv5 * v
        tv3 = Fp.mul(tv5, u); // 9. tv3 = tv5 * u
        let tv4 = Fp.mul(tv3, tv2); // 10. tv4 = tv3 * tv2
        tv5 = Fp.pow(tv4, c5); // 11. tv5 = tv4^c5
        let isQR = Fp.eql(tv5, Fp.ONE); // 12. isQR = tv5 == 1
        tv2 = Fp.mul(tv3, c7); // 13. tv2 = tv3 * c7
        tv5 = Fp.mul(tv4, tv1); // 14. tv5 = tv4 * tv1
        tv3 = Fp.cmov(tv2, tv3, isQR); // 15. tv3 = CMOV(tv2, tv3, isQR)
        tv4 = Fp.cmov(tv5, tv4, isQR); // 16. tv4 = CMOV(tv5, tv4, isQR)
        // 17. for i in (c1, c1 - 1, ..., 2):
        for (let i = c1; i > weierstrass_1n; i--) {
            let tv5 = i - weierstrass_2n; // 18.    tv5 = i - 2
            tv5 = weierstrass_2n << (tv5 - weierstrass_1n); // 19.    tv5 = 2^tv5
            let tvv5 = Fp.pow(tv4, tv5); // 20.    tv5 = tv4^tv5
            const e1 = Fp.eql(tvv5, Fp.ONE); // 21.    e1 = tv5 == 1
            tv2 = Fp.mul(tv3, tv1); // 22.    tv2 = tv3 * tv1
            tv1 = Fp.mul(tv1, tv1); // 23.    tv1 = tv1 * tv1
            tvv5 = Fp.mul(tv4, tv1); // 24.    tv5 = tv4 * tv1
            tv3 = Fp.cmov(tv2, tv3, e1); // 25.    tv3 = CMOV(tv2, tv3, e1)
            tv4 = Fp.cmov(tvv5, tv4, e1); // 26.    tv4 = CMOV(tv5, tv4, e1)
        }
        return { isValid: isQR, value: tv3 };
    };
    if (Fp.ORDER % weierstrass_4n === weierstrass_3n) {
        // sqrt_ratio_3mod4(u, v)
        const c1 = (Fp.ORDER - weierstrass_3n) / weierstrass_4n; // 1. c1 = (q - 3) / 4     # Integer arithmetic
        const c2 = Fp.sqrt(Fp.neg(Z)); // 2. c2 = sqrt(-Z)
        sqrtRatio = (u, v) => {
            let tv1 = Fp.sqr(v); // 1. tv1 = v^2
            const tv2 = Fp.mul(u, v); // 2. tv2 = u * v
            tv1 = Fp.mul(tv1, tv2); // 3. tv1 = tv1 * tv2
            let y1 = Fp.pow(tv1, c1); // 4. y1 = tv1^c1
            y1 = Fp.mul(y1, tv2); // 5. y1 = y1 * tv2
            const y2 = Fp.mul(y1, c2); // 6. y2 = y1 * c2
            const tv3 = Fp.mul(Fp.sqr(y1), v); // 7. tv3 = y1^2; 8. tv3 = tv3 * v
            const isQR = Fp.eql(tv3, u); // 9. isQR = tv3 == u
            let y = Fp.cmov(y2, y1, isQR); // 10. y = CMOV(y2, y1, isQR)
            return { isValid: isQR, value: y }; // 11. return (isQR, y) isQR ? y : y*c2
        };
    }
    // No curves uses that
    // if (Fp.ORDER % _8n === _5n) // sqrt_ratio_5mod8
    return sqrtRatio;
}
/**
 * Simplified Shallue-van de Woestijne-Ulas Method
 * https://www.rfc-editor.org/rfc/rfc9380#section-6.6.2
 */
function weierstrass_mapToCurveSimpleSWU(Fp, opts) {
    validateField(Fp);
    if (!Fp.isValid(opts.A) || !Fp.isValid(opts.B) || !Fp.isValid(opts.Z))
        throw new Error('mapToCurveSimpleSWU: invalid opts');
    const sqrtRatio = SWUFpSqrtRatio(Fp, opts.Z);
    if (!Fp.isOdd)
        throw new Error('Fp.isOdd is not implemented!');
    // Input: u, an element of F.
    // Output: (x, y), a point on E.
    return (u) => {
        // prettier-ignore
        let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
        tv1 = Fp.sqr(u); // 1.  tv1 = u^2
        tv1 = Fp.mul(tv1, opts.Z); // 2.  tv1 = Z * tv1
        tv2 = Fp.sqr(tv1); // 3.  tv2 = tv1^2
        tv2 = Fp.add(tv2, tv1); // 4.  tv2 = tv2 + tv1
        tv3 = Fp.add(tv2, Fp.ONE); // 5.  tv3 = tv2 + 1
        tv3 = Fp.mul(tv3, opts.B); // 6.  tv3 = B * tv3
        tv4 = Fp.cmov(opts.Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO)); // 7.  tv4 = CMOV(Z, -tv2, tv2 != 0)
        tv4 = Fp.mul(tv4, opts.A); // 8.  tv4 = A * tv4
        tv2 = Fp.sqr(tv3); // 9.  tv2 = tv3^2
        tv6 = Fp.sqr(tv4); // 10. tv6 = tv4^2
        tv5 = Fp.mul(tv6, opts.A); // 11. tv5 = A * tv6
        tv2 = Fp.add(tv2, tv5); // 12. tv2 = tv2 + tv5
        tv2 = Fp.mul(tv2, tv3); // 13. tv2 = tv2 * tv3
        tv6 = Fp.mul(tv6, tv4); // 14. tv6 = tv6 * tv4
        tv5 = Fp.mul(tv6, opts.B); // 15. tv5 = B * tv6
        tv2 = Fp.add(tv2, tv5); // 16. tv2 = tv2 + tv5
        x = Fp.mul(tv1, tv3); // 17.   x = tv1 * tv3
        const { isValid, value } = sqrtRatio(tv2, tv6); // 18. (is_gx1_square, y1) = sqrt_ratio(tv2, tv6)
        y = Fp.mul(tv1, u); // 19.   y = tv1 * u  -> Z * u^3 * y1
        y = Fp.mul(y, value); // 20.   y = y * y1
        x = Fp.cmov(x, tv3, isValid); // 21.   x = CMOV(x, tv3, is_gx1_square)
        y = Fp.cmov(y, value, isValid); // 22.   y = CMOV(y, y1, is_gx1_square)
        const e1 = Fp.isOdd(u) === Fp.isOdd(y); // 23.  e1 = sgn0(u) == sgn0(y)
        y = Fp.cmov(Fp.neg(y), y, e1); // 24.   y = CMOV(-y, y, e1)
        const tv4_inv = FpInvertBatch(Fp, [tv4], true)[0];
        x = Fp.mul(x, tv4_inv); // 25.   x = x / tv4
        return { x, y };
    };
}
//# sourceMappingURL=weierstrass.js.map
;// ./node_modules/ox/node_modules/@noble/curves/esm/_shortw_utils.js
/**
 * Utilities for short weierstrass curves, combined with noble-hashes.
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */



/** connects noble-curves to noble-hashes */
function getHash(hash) {
    return {
        hash,
        hmac: (key, ...msgs) => (0,hmac/* hmac */.w)(hash, key, (0,utils/* concatBytes */.Id)(...msgs)),
        randomBytes: utils/* randomBytes */.po,
    };
}
function createCurve(curveDef, defHash) {
    const create = (hash) => weierstrass({ ...curveDef, ...getHash(hash) });
    return { ...create(defHash), create };
}
//# sourceMappingURL=_shortw_utils.js.map
;// ./node_modules/ox/node_modules/@noble/curves/esm/secp256k1.js
/**
 * NIST secp256k1. See [pdf](https://www.secg.org/sec2-v2.pdf).
 *
 * Seems to be rigid (not backdoored)
 * [as per discussion](https://bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975).
 *
 * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
 * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
 * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
 * [See explanation](https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066).
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */







const secp256k1P = BigInt('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f');
const secp256k1N = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141');
const secp256k1_0n = BigInt(0);
const secp256k1_1n = BigInt(1);
const secp256k1_2n = BigInt(2);
const divNearest = (a, b) => (a + b / secp256k1_2n) / b;
/**
 * √n = n^((p+1)/4) for fields p = 3 mod 4. We unwrap the loop and multiply bit-by-bit.
 * (P+1n/4n).toString(2) would produce bits [223x 1, 0, 22x 1, 4x 0, 11, 00]
 */
function sqrtMod(y) {
    const P = secp256k1P;
    // prettier-ignore
    const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
    // prettier-ignore
    const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
    const b2 = (y * y * y) % P; // x^3, 11
    const b3 = (b2 * b2 * y) % P; // x^7
    const b6 = (pow2(b3, _3n, P) * b3) % P;
    const b9 = (pow2(b6, _3n, P) * b3) % P;
    const b11 = (pow2(b9, secp256k1_2n, P) * b2) % P;
    const b22 = (pow2(b11, _11n, P) * b11) % P;
    const b44 = (pow2(b22, _22n, P) * b22) % P;
    const b88 = (pow2(b44, _44n, P) * b44) % P;
    const b176 = (pow2(b88, _88n, P) * b88) % P;
    const b220 = (pow2(b176, _44n, P) * b44) % P;
    const b223 = (pow2(b220, _3n, P) * b3) % P;
    const t1 = (pow2(b223, _23n, P) * b22) % P;
    const t2 = (pow2(t1, _6n, P) * b2) % P;
    const root = pow2(t2, secp256k1_2n, P);
    if (!Fpk1.eql(Fpk1.sqr(root), y))
        throw new Error('Cannot find square root');
    return root;
}
const Fpk1 = Field(secp256k1P, undefined, undefined, { sqrt: sqrtMod });
/**
 * secp256k1 curve, ECDSA and ECDH methods.
 *
 * Field: `2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n`
 *
 * @example
 * ```js
 * import { secp256k1 } from '@noble/curves/secp256k1';
 * const priv = secp256k1.utils.randomPrivateKey();
 * const pub = secp256k1.getPublicKey(priv);
 * const msg = new Uint8Array(32).fill(1); // message hash (not message) in ecdsa
 * const sig = secp256k1.sign(msg, priv); // `{prehash: true}` option is available
 * const isValid = secp256k1.verify(sig, msg, pub) === true;
 * ```
 */
const secp256k1_secp256k1 = createCurve({
    a: secp256k1_0n,
    b: BigInt(7),
    Fp: Fpk1,
    n: secp256k1N,
    Gx: BigInt('55066263022277343669578718895168534326250603453777594175500187360389116729240'),
    Gy: BigInt('32670510020758816978083085130507043184471273380659243275938904335757337482424'),
    h: BigInt(1),
    lowS: true, // Allow only low-S signatures by default in sign() and verify()
    endo: {
        // Endomorphism, see above
        beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
        splitScalar: (k) => {
            const n = secp256k1N;
            const a1 = BigInt('0x3086d221a7d46bcde86c90e49284eb15');
            const b1 = -secp256k1_1n * BigInt('0xe4437ed6010e88286f547fa90abfe4c3');
            const a2 = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8');
            const b2 = a1;
            const POW_2_128 = BigInt('0x100000000000000000000000000000000'); // (2n**128n).toString(16)
            const c1 = divNearest(b2 * k, n);
            const c2 = divNearest(-b1 * k, n);
            let k1 = modular_mod(k - c1 * a1 - c2 * a2, n);
            let k2 = modular_mod(-c1 * b1 - c2 * b2, n);
            const k1neg = k1 > POW_2_128;
            const k2neg = k2 > POW_2_128;
            if (k1neg)
                k1 = n - k1;
            if (k2neg)
                k2 = n - k2;
            if (k1 > POW_2_128 || k2 > POW_2_128) {
                throw new Error('splitScalar: Endomorphism failed, k=' + k);
            }
            return { k1neg, k1, k2neg, k2 };
        },
    },
}, sha2/* sha256 */.sc);
// Schnorr signatures are superior to ECDSA from above. Below is Schnorr-specific BIP0340 code.
// https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki
/** An object mapping tags to their tagged hash prefix of [SHA256(tag) | SHA256(tag)] */
const TAGGED_HASH_PREFIXES = {};
function taggedHash(tag, ...messages) {
    let tagP = TAGGED_HASH_PREFIXES[tag];
    if (tagP === undefined) {
        const tagH = sha256(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
        tagP = concatBytes(tagH, tagH);
        TAGGED_HASH_PREFIXES[tag] = tagP;
    }
    return sha256(concatBytes(tagP, ...messages));
}
// ECDSA compact points are 33-byte. Schnorr is 32: we strip first byte 0x02 or 0x03
const pointToBytes = (point) => point.toRawBytes(true).slice(1);
const numTo32b = (n) => numberToBytesBE(n, 32);
const modP = (x) => mod(x, secp256k1P);
const modN = (x) => mod(x, secp256k1N);
const Point = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => secp256k1_secp256k1.ProjectivePoint)()));
const GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
// Calculate point, scalar and bytes
function schnorrGetExtPubKey(priv) {
    let d_ = secp256k1_secp256k1.utils.normPrivateKeyToScalar(priv); // same method executed in fromPrivateKey
    let p = Point.fromPrivateKey(d_); // P = d'⋅G; 0 < d' < n check is done inside
    const scalar = p.hasEvenY() ? d_ : modN(-d_);
    return { scalar: scalar, bytes: pointToBytes(p) };
}
/**
 * lift_x from BIP340. Convert 32-byte x coordinate to elliptic curve point.
 * @returns valid point checked for being on-curve
 */
function lift_x(x) {
    aInRange('x', x, secp256k1_1n, secp256k1P); // Fail if x ≥ p.
    const xx = modP(x * x);
    const c = modP(xx * x + BigInt(7)); // Let c = x³ + 7 mod p.
    let y = sqrtMod(c); // Let y = c^(p+1)/4 mod p.
    if (y % secp256k1_2n !== secp256k1_0n)
        y = modP(-y); // Return the unique point P such that x(P) = x and
    const p = new Point(x, y, secp256k1_1n); // y(P) = y if y mod 2 = 0 or y(P) = p-y otherwise.
    p.assertValidity();
    return p;
}
const num = (/* unused pure expression or super */ null && (bytesToNumberBE));
/**
 * Create tagged hash, convert it to bigint, reduce modulo-n.
 */
function challenge(...args) {
    return modN(num(taggedHash('BIP0340/challenge', ...args)));
}
/**
 * Schnorr public key is just `x` coordinate of Point as per BIP340.
 */
function schnorrGetPublicKey(privateKey) {
    return schnorrGetExtPubKey(privateKey).bytes; // d'=int(sk). Fail if d'=0 or d'≥n. Ret bytes(d'⋅G)
}
/**
 * Creates Schnorr signature as per BIP340. Verifies itself before returning anything.
 * auxRand is optional and is not the sole source of k generation: bad CSPRNG won't be dangerous.
 */
function schnorrSign(message, privateKey, auxRand = randomBytes(32)) {
    const m = ensureBytes('message', message);
    const { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey); // checks for isWithinCurveOrder
    const a = ensureBytes('auxRand', auxRand, 32); // Auxiliary random data a: a 32-byte array
    const t = numTo32b(d ^ num(taggedHash('BIP0340/aux', a))); // Let t be the byte-wise xor of bytes(d) and hash/aux(a)
    const rand = taggedHash('BIP0340/nonce', t, px, m); // Let rand = hash/nonce(t || bytes(P) || m)
    const k_ = modN(num(rand)); // Let k' = int(rand) mod n
    if (k_ === secp256k1_0n)
        throw new Error('sign failed: k is zero'); // Fail if k' = 0.
    const { bytes: rx, scalar: k } = schnorrGetExtPubKey(k_); // Let R = k'⋅G.
    const e = challenge(rx, px, m); // Let e = int(hash/challenge(bytes(R) || bytes(P) || m)) mod n.
    const sig = new Uint8Array(64); // Let sig = bytes(R) || bytes((k + ed) mod n).
    sig.set(rx, 0);
    sig.set(numTo32b(modN(k + e * d)), 32);
    // If Verify(bytes(P), m, sig) (see below) returns failure, abort
    if (!schnorrVerify(sig, m, px))
        throw new Error('sign: Invalid signature produced');
    return sig;
}
/**
 * Verifies Schnorr signature.
 * Will swallow errors & return false except for initial type validation of arguments.
 */
function schnorrVerify(signature, message, publicKey) {
    const sig = ensureBytes('signature', signature, 64);
    const m = ensureBytes('message', message);
    const pub = ensureBytes('publicKey', publicKey, 32);
    try {
        const P = lift_x(num(pub)); // P = lift_x(int(pk)); fail if that fails
        const r = num(sig.subarray(0, 32)); // Let r = int(sig[0:32]); fail if r ≥ p.
        if (!inRange(r, secp256k1_1n, secp256k1P))
            return false;
        const s = num(sig.subarray(32, 64)); // Let s = int(sig[32:64]); fail if s ≥ n.
        if (!inRange(s, secp256k1_1n, secp256k1N))
            return false;
        const e = challenge(numTo32b(r), pointToBytes(P), m); // int(challenge(bytes(r)||bytes(P)||m))%n
        const R = GmulAdd(P, s, modN(-e)); // R = s⋅G - e⋅P
        if (!R || !R.hasEvenY() || R.toAffine().x !== r)
            return false; // -eP == (n-e)P
        return true; // Fail if is_infinite(R) / not has_even_y(R) / x(R) ≠ r.
    }
    catch (error) {
        return false;
    }
}
/**
 * Schnorr signatures over secp256k1.
 * https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki
 * @example
 * ```js
 * import { schnorr } from '@noble/curves/secp256k1';
 * const priv = schnorr.utils.randomPrivateKey();
 * const pub = schnorr.getPublicKey(priv);
 * const msg = new TextEncoder().encode('hello');
 * const sig = schnorr.sign(msg, priv);
 * const isValid = schnorr.verify(sig, msg, pub);
 * ```
 */
const schnorr = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => ({
    getPublicKey: schnorrGetPublicKey,
    sign: schnorrSign,
    verify: schnorrVerify,
    utils: {
        randomPrivateKey: secp256k1_secp256k1.utils.randomPrivateKey,
        lift_x,
        pointToBytes,
        numberToBytesBE,
        bytesToNumberBE,
        taggedHash,
        mod,
    },
}))()));
const isoMap = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => isogenyMap(Fpk1, [
    // xNum
    [
        '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7',
        '0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581',
        '0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262',
        '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c',
    ],
    // xDen
    [
        '0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b',
        '0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14',
        '0x0000000000000000000000000000000000000000000000000000000000000001', // LAST 1
    ],
    // yNum
    [
        '0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c',
        '0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3',
        '0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931',
        '0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84',
    ],
    // yDen
    [
        '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b',
        '0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573',
        '0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f',
        '0x0000000000000000000000000000000000000000000000000000000000000001', // LAST 1
    ],
].map((i) => i.map((j) => BigInt(j)))))()));
const mapSWU = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => mapToCurveSimpleSWU(Fpk1, {
    A: BigInt('0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533'),
    B: BigInt('1771'),
    Z: Fpk1.create(BigInt('-11')),
}))()));
/** Hashing / encoding to secp256k1 points / field. RFC 9380 methods. */
const secp256k1_hasher = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => createHasher(secp256k1_secp256k1.ProjectivePoint, (scalars) => {
    const { x, y } = mapSWU(Fpk1.create(scalars[0]));
    return isoMap(x, y);
}, {
    DST: 'secp256k1_XMD:SHA-256_SSWU_RO_',
    encodeDST: 'secp256k1_XMD:SHA-256_SSWU_NU_',
    p: Fpk1.ORDER,
    m: 1,
    k: 128,
    expand: 'xmd',
    hash: sha256,
}))()));
const hashToCurve = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => secp256k1_hasher.hashToCurve)()));
const encodeToCurve = /* @__PURE__ */ (/* unused pure expression or super */ null && ((() => secp256k1_hasher.encodeToCurve)()));
//# sourceMappingURL=secp256k1.js.map
// EXTERNAL MODULE: ./node_modules/ox/_esm/core/Errors.js + 2 modules
var Errors = __webpack_require__(556071);
// EXTERNAL MODULE: ./node_modules/ox/_esm/core/Hex.js
var core_Hex = __webpack_require__(301999);
;// ./node_modules/ox/_esm/core/internal/bytes.js

/** @internal */
function assertSize(bytes, size_) {
    if (size(bytes) > size_)
        throw new SizeOverflowError({
            givenSize: size(bytes),
            maxSize: size_,
        });
}
/** @internal */
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > Bytes.size(value) - 1)
        throw new Bytes.SliceOffsetOutOfBoundsError({
            offset: start,
            position: 'start',
            size: Bytes.size(value),
        });
}
/** @internal */
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' &&
        typeof end === 'number' &&
        Bytes.size(value) !== end - start) {
        throw new Bytes.SliceOffsetOutOfBoundsError({
            offset: end,
            position: 'end',
            size: Bytes.size(value),
        });
    }
}
/** @internal */
const charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102,
};
/** @internal */
function charCodeToBase16(char) {
    if (char >= charCodeMap.zero && char <= charCodeMap.nine)
        return char - charCodeMap.zero;
    if (char >= charCodeMap.A && char <= charCodeMap.F)
        return char - (charCodeMap.A - 10);
    if (char >= charCodeMap.a && char <= charCodeMap.f)
        return char - (charCodeMap.a - 10);
    return undefined;
}
/** @internal */
function pad(bytes, options = {}) {
    const { dir, size = 32 } = options;
    if (size === 0)
        return bytes;
    if (bytes.length > size)
        throw new SizeExceedsPaddingSizeError({
            size: bytes.length,
            targetSize: size,
            type: 'Bytes',
        });
    const paddedBytes = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
        const padEnd = dir === 'right';
        paddedBytes[padEnd ? i : size - i - 1] =
            bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
}
/** @internal */
function trim(value, options = {}) {
    const { dir = 'left' } = options;
    let data = value;
    let sliceLength = 0;
    for (let i = 0; i < data.length - 1; i++) {
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0')
            sliceLength++;
        else
            break;
    }
    data =
        dir === 'left'
            ? data.slice(sliceLength)
            : data.slice(0, data.length - sliceLength);
    return data;
}
//# sourceMappingURL=bytes.js.map
// EXTERNAL MODULE: ./node_modules/ox/_esm/core/internal/hex.js
var internal_hex = __webpack_require__(996475);
// EXTERNAL MODULE: ./node_modules/ox/_esm/core/Json.js
var Json = __webpack_require__(833702);
;// ./node_modules/ox/_esm/core/Bytes.js






const decoder = /*#__PURE__*/ new TextDecoder();
const encoder = /*#__PURE__*/ new TextEncoder();
/**
 * Asserts if the given value is {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.assert('abc')
 * // @error: Bytes.InvalidBytesTypeError:
 * // @error: Value `"abc"` of type `string` is an invalid Bytes value.
 * // @error: Bytes values must be of type `Uint8Array`.
 * ```
 *
 * @param value - Value to assert.
 */
function assert(value) {
    if (value instanceof Uint8Array)
        return;
    if (!value)
        throw new InvalidBytesTypeError(value);
    if (typeof value !== 'object')
        throw new InvalidBytesTypeError(value);
    if (!('BYTES_PER_ELEMENT' in value))
        throw new InvalidBytesTypeError(value);
    if (value.BYTES_PER_ELEMENT !== 1 || value.constructor.name !== 'Uint8Array')
        throw new InvalidBytesTypeError(value);
}
/**
 * Concatenates two or more {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const bytes = Bytes.concat(
 *   Bytes.from([1]),
 *   Bytes.from([69]),
 *   Bytes.from([420, 69]),
 * )
 * // @log: Uint8Array [ 1, 69, 420, 69 ]
 * ```
 *
 * @param values - Values to concatenate.
 * @returns Concatenated {@link ox#Bytes.Bytes}.
 */
function concat(...values) {
    let length = 0;
    for (const arr of values) {
        length += arr.length;
    }
    const result = new Uint8Array(length);
    for (let i = 0, index = 0; i < values.length; i++) {
        const arr = values[i];
        result.set(arr, index);
        index += arr.length;
    }
    return result;
}
/**
 * Instantiates a {@link ox#Bytes.Bytes} value from a `Uint8Array`, a hex string, or an array of unsigned 8-bit integers.
 *
 * :::tip
 *
 * To instantiate from a **Boolean**, **String**, or **Number**, use one of the following:
 *
 * - `Bytes.fromBoolean`
 *
 * - `Bytes.fromString`
 *
 * - `Bytes.fromNumber`
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.from([255, 124, 5, 4])
 * // @log: Uint8Array([255, 124, 5, 4])
 *
 * const data = Bytes.from('0xdeadbeef')
 * // @log: Uint8Array([222, 173, 190, 239])
 * ```
 *
 * @param value - Value to convert.
 * @returns A {@link ox#Bytes.Bytes} instance.
 */
function from(value) {
    if (value instanceof Uint8Array)
        return value;
    if (typeof value === 'string')
        return fromHex(value);
    return fromArray(value);
}
/**
 * Converts an array of unsigned 8-bit integers into {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromArray([255, 124, 5, 4])
 * // @log: Uint8Array([255, 124, 5, 4])
 * ```
 *
 * @param value - Value to convert.
 * @returns A {@link ox#Bytes.Bytes} instance.
 */
function fromArray(value) {
    return value instanceof Uint8Array ? value : new Uint8Array(value);
}
/**
 * Encodes a boolean value into {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromBoolean(true)
 * // @log: Uint8Array([1])
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromBoolean(true, { size: 32 })
 * // @log: Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
 * ```
 *
 * @param value - Boolean value to encode.
 * @param options - Encoding options.
 * @returns Encoded {@link ox#Bytes.Bytes}.
 */
function fromBoolean(value, options = {}) {
    const { size } = options;
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof size === 'number') {
        internal.assertSize(bytes, size);
        return padLeft(bytes, size);
    }
    return bytes;
}
/**
 * Encodes a {@link ox#Hex.Hex} value into {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromHex('0x48656c6c6f20776f726c6421')
 * // @log: Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromHex('0x48656c6c6f20776f726c6421', { size: 32 })
 * // @log: Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 * ```
 *
 * @param value - {@link ox#Hex.Hex} value to encode.
 * @param options - Encoding options.
 * @returns Encoded {@link ox#Bytes.Bytes}.
 */
function fromHex(value, options = {}) {
    const { size } = options;
    let hex = value;
    if (size) {
        internal_hex/* assertSize */.Sl(value, size);
        hex = core_Hex/* padRight */.M7(value, size);
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2)
        hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for (let index = 0, j = 0; index < length; index++) {
        const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
        const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new Errors/* BaseError */.C(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
/**
 * Encodes a number value into {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromNumber(420)
 * // @log: Uint8Array([1, 164])
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromNumber(420, { size: 4 })
 * // @log: Uint8Array([0, 0, 1, 164])
 * ```
 *
 * @param value - Number value to encode.
 * @param options - Encoding options.
 * @returns Encoded {@link ox#Bytes.Bytes}.
 */
function fromNumber(value, options) {
    const hex = Hex.fromNumber(value, options);
    return fromHex(hex);
}
/**
 * Encodes a string into {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromString('Hello world!')
 * // @log: Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33])
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.fromString('Hello world!', { size: 32 })
 * // @log: Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 * ```
 *
 * @param value - String to encode.
 * @param options - Encoding options.
 * @returns Encoded {@link ox#Bytes.Bytes}.
 */
function fromString(value, options = {}) {
    const { size } = options;
    const bytes = encoder.encode(value);
    if (typeof size === 'number') {
        assertSize(bytes, size);
        return padRight(bytes, size);
    }
    return bytes;
}
/**
 * Checks if two {@link ox#Bytes.Bytes} values are equal.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.isEqual(Bytes.from([1]), Bytes.from([1]))
 * // @log: true
 *
 * Bytes.isEqual(Bytes.from([1]), Bytes.from([2]))
 * // @log: false
 * ```
 *
 * @param bytesA - First {@link ox#Bytes.Bytes} value.
 * @param bytesB - Second {@link ox#Bytes.Bytes} value.
 * @returns `true` if the two values are equal, otherwise `false`.
 */
function isEqual(bytesA, bytesB) {
    return equalBytes(bytesA, bytesB);
}
/**
 * Pads a {@link ox#Bytes.Bytes} value to the left with zero bytes until it reaches the given `size` (default: 32 bytes).
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.padLeft(Bytes.from([1]), 4)
 * // @log: Uint8Array([0, 0, 0, 1])
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} value to pad.
 * @param size - Size to pad the {@link ox#Bytes.Bytes} value to.
 * @returns Padded {@link ox#Bytes.Bytes} value.
 */
function padLeft(value, size) {
    return internal.pad(value, { dir: 'left', size });
}
/**
 * Pads a {@link ox#Bytes.Bytes} value to the right with zero bytes until it reaches the given `size` (default: 32 bytes).
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.padRight(Bytes.from([1]), 4)
 * // @log: Uint8Array([1, 0, 0, 0])
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} value to pad.
 * @param size - Size to pad the {@link ox#Bytes.Bytes} value to.
 * @returns Padded {@link ox#Bytes.Bytes} value.
 */
function padRight(value, size) {
    return pad(value, { dir: 'right', size });
}
/**
 * Generates random {@link ox#Bytes.Bytes} of the specified length.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const bytes = Bytes.random(32)
 * // @log: Uint8Array([... x32])
 * ```
 *
 * @param length - Length of the random {@link ox#Bytes.Bytes} to generate.
 * @returns Random {@link ox#Bytes.Bytes} of the specified length.
 */
function random(length) {
    return crypto.getRandomValues(new Uint8Array(length));
}
/**
 * Retrieves the size of a {@link ox#Bytes.Bytes} value.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.size(Bytes.from([1, 2, 3, 4]))
 * // @log: 4
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} value.
 * @returns Size of the {@link ox#Bytes.Bytes} value.
 */
function size(value) {
    return value.length;
}
/**
 * Returns a section of a {@link ox#Bytes.Bytes} value given a start/end bytes offset.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.slice(
 *   Bytes.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
 *   1,
 *   4,
 * )
 * // @log: Uint8Array([2, 3, 4])
 * ```
 *
 * @param value - The {@link ox#Bytes.Bytes} value.
 * @param start - Start offset.
 * @param end - End offset.
 * @param options - Slice options.
 * @returns Sliced {@link ox#Bytes.Bytes} value.
 */
function slice(value, start, end, options = {}) {
    const { strict } = options;
    internal.assertStartOffset(value, start);
    const value_ = value.slice(start, end);
    if (strict)
        internal.assertEndOffset(value_, start, end);
    return value_;
}
/**
 * Decodes a {@link ox#Bytes.Bytes} into a bigint.
 *
 * @example
 * ```ts
 * import { Bytes } from 'ox'
 *
 * Bytes.toBigInt(Bytes.from([1, 164]))
 * // @log: 420n
 * ```
 *
 * @param bytes - The {@link ox#Bytes.Bytes} to decode.
 * @param options - Decoding options.
 * @returns Decoded bigint.
 */
function toBigInt(bytes, options = {}) {
    const { size } = options;
    if (typeof size !== 'undefined')
        internal.assertSize(bytes, size);
    const hex = Hex.fromBytes(bytes, options);
    return Hex.toBigInt(hex, options);
}
/**
 * Decodes a {@link ox#Bytes.Bytes} into a boolean.
 *
 * @example
 * ```ts
 * import { Bytes } from 'ox'
 *
 * Bytes.toBoolean(Bytes.from([1]))
 * // @log: true
 * ```
 *
 * @param bytes - The {@link ox#Bytes.Bytes} to decode.
 * @param options - Decoding options.
 * @returns Decoded boolean.
 */
function toBoolean(bytes, options = {}) {
    const { size } = options;
    let bytes_ = bytes;
    if (typeof size !== 'undefined') {
        internal.assertSize(bytes_, size);
        bytes_ = trimLeft(bytes_);
    }
    if (bytes_.length > 1 || bytes_[0] > 1)
        throw new InvalidBytesBooleanError(bytes_);
    return Boolean(bytes_[0]);
}
/**
 * Encodes a {@link ox#Bytes.Bytes} value into a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.toHex(Bytes.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
 * // '0x48656c6c6f20576f726c6421'
 * ```
 *
 * @param value - The {@link ox#Bytes.Bytes} to decode.
 * @param options - Options.
 * @returns Decoded {@link ox#Hex.Hex} value.
 */
function toHex(value, options = {}) {
    return Hex.fromBytes(value, options);
}
/**
 * Decodes a {@link ox#Bytes.Bytes} into a number.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.toNumber(Bytes.from([1, 164]))
 * // @log: 420
 * ```
 */
function toNumber(bytes, options = {}) {
    const { size } = options;
    if (typeof size !== 'undefined')
        internal.assertSize(bytes, size);
    const hex = Hex.fromBytes(bytes, options);
    return Hex.toNumber(hex, options);
}
/**
 * Decodes a {@link ox#Bytes.Bytes} into a string.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * const data = Bytes.toString(Bytes.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
 * // @log: 'Hello world'
 * ```
 *
 * @param bytes - The {@link ox#Bytes.Bytes} to decode.
 * @param options - Options.
 * @returns Decoded string.
 */
function Bytes_toString(bytes, options = {}) {
    const { size } = options;
    let bytes_ = bytes;
    if (typeof size !== 'undefined') {
        internal.assertSize(bytes_, size);
        bytes_ = trimRight(bytes_);
    }
    return decoder.decode(bytes_);
}
/**
 * Trims leading zeros from a {@link ox#Bytes.Bytes} value.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.trimLeft(Bytes.from([0, 0, 0, 0, 1, 2, 3]))
 * // @log: Uint8Array([1, 2, 3])
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} value.
 * @returns Trimmed {@link ox#Bytes.Bytes} value.
 */
function trimLeft(value) {
    return internal.trim(value, { dir: 'left' });
}
/**
 * Trims trailing zeros from a {@link ox#Bytes.Bytes} value.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.trimRight(Bytes.from([1, 2, 3, 0, 0, 0, 0]))
 * // @log: Uint8Array([1, 2, 3])
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} value.
 * @returns Trimmed {@link ox#Bytes.Bytes} value.
 */
function trimRight(value) {
    return internal.trim(value, { dir: 'right' });
}
/**
 * Checks if the given value is {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.validate('0x')
 * // @log: false
 *
 * Bytes.validate(Bytes.from([1, 2, 3]))
 * // @log: true
 * ```
 *
 * @param value - Value to check.
 * @returns `true` if the value is {@link ox#Bytes.Bytes}, otherwise `false`.
 */
function validate(value) {
    try {
        assert(value);
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Thrown when the bytes value cannot be represented as a boolean.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.toBoolean(Bytes.from([5]))
 * // @error: Bytes.InvalidBytesBooleanError: Bytes value `[5]` is not a valid boolean.
 * // @error: The bytes array must contain a single byte of either a `0` or `1` value.
 * ```
 */
class InvalidBytesBooleanError extends Errors/* BaseError */.C {
    constructor(bytes) {
        super(`Bytes value \`${bytes}\` is not a valid boolean.`, {
            metaMessages: [
                'The bytes array must contain a single byte of either a `0` or `1` value.',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.InvalidBytesBooleanError'
        });
    }
}
/**
 * Thrown when a value cannot be converted to bytes.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { Bytes } from 'ox'
 *
 * Bytes.from('foo')
 * // @error: Bytes.InvalidBytesTypeError: Value `foo` of type `string` is an invalid Bytes value.
 * ```
 */
class InvalidBytesTypeError extends Errors/* BaseError */.C {
    constructor(value) {
        super(`Value \`${typeof value === 'object' ? Json/* stringify */.A(value) : value}\` of type \`${typeof value}\` is an invalid Bytes value.`, {
            metaMessages: ['Bytes values must be of type `Bytes`.'],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.InvalidBytesTypeError'
        });
    }
}
/**
 * Thrown when a size exceeds the maximum allowed size.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.fromString('Hello World!', { size: 8 })
 * // @error: Bytes.SizeOverflowError: Size cannot exceed `8` bytes. Given size: `12` bytes.
 * ```
 */
class SizeOverflowError extends Errors/* BaseError */.C {
    constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SizeOverflowError'
        });
    }
}
/**
 * Thrown when a slice offset is out-of-bounds.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.slice(Bytes.from([1, 2, 3]), 4)
 * // @error: Bytes.SliceOffsetOutOfBoundsError: Slice starting at offset `4` is out-of-bounds (size: `3`).
 * ```
 */
class SliceOffsetOutOfBoundsError extends Errors/* BaseError */.C {
    constructor({ offset, position, size, }) {
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset \`${offset}\` is out-of-bounds (size: \`${size}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SliceOffsetOutOfBoundsError'
        });
    }
}
/**
 * Thrown when a the padding size exceeds the maximum allowed size.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.padLeft(Bytes.fromString('Hello World!'), 8)
 * // @error: [Bytes.SizeExceedsPaddingSizeError: Bytes size (`12`) exceeds padding size (`8`).
 * ```
 */
class SizeExceedsPaddingSizeError extends Errors/* BaseError */.C {
    constructor({ size, targetSize, type, }) {
        super(`${type.charAt(0).toUpperCase()}${type
            .slice(1)
            .toLowerCase()} size (\`${size}\`) exceeds padding size (\`${targetSize}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Bytes.SizeExceedsPaddingSizeError'
        });
    }
}
//# sourceMappingURL=Bytes.js.map
;// ./node_modules/ox/_esm/core/internal/lru.js
/**
 * @internal
 *
 * Map with a LRU (Least recently used) policy.
 * @see https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
 */
class LruMap extends Map {
    constructor(size) {
        super();
        Object.defineProperty(this, "maxSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.maxSize = size;
    }
    get(key) {
        const value = super.get(key);
        if (super.has(key) && value !== undefined) {
            this.delete(key);
            super.set(key, value);
        }
        return value;
    }
    set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize) {
            const firstKey = this.keys().next().value;
            if (firstKey)
                this.delete(firstKey);
        }
        return this;
    }
}
//# sourceMappingURL=lru.js.map
;// ./node_modules/ox/_esm/core/Caches.js

const caches = {
    checksum: /*#__PURE__*/ new LruMap(8192),
};
const checksum = caches.checksum;
/**
 * Clears all global caches.
 *
 * @example
 * ```ts
 * import { Caches } from 'ox'
 * Caches.clear()
 * ```
 */
function clear() {
    for (const cache of Object.values(caches))
        cache.clear();
}
//# sourceMappingURL=Caches.js.map
// EXTERNAL MODULE: ./node_modules/@noble/hashes/esm/sha3.js
var sha3 = __webpack_require__(977238);
;// ./node_modules/ox/_esm/core/Hash.js





/**
 * Calculates the [Keccak256](https://en.wikipedia.org/wiki/SHA-3) hash of a {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 *
 * This function is a re-export of `keccak_256` from [`@noble/hashes`](https://github.com/paulmillr/noble-hashes), an audited & minimal JS hashing library.
 *
 * @example
 * ```ts twoslash
 * import { Hash } from 'ox'
 *
 * Hash.keccak256('0xdeadbeef')
 * // @log: '0xd4fd4e189132273036449fc9e11198c739161b4c0116a9a2dccdfa1c492006f1'
 * ```
 *
 * @example
 * ### Calculate Hash of a String
 *
 * ```ts twoslash
 * import { Hash, Hex } from 'ox'
 *
 * Hash.keccak256(Hex.fromString('hello world'))
 * // @log: '0x3ea2f1d0abf3fc66cf29eebb70cbd4e7fe762ef8a09bcc06c8edf641230afec0'
 * ```
 *
 * @example
 * ### Configure Return Type
 *
 * ```ts twoslash
 * import { Hash } from 'ox'
 *
 * Hash.keccak256('0xdeadbeef', { as: 'Bytes' })
 * // @log: Uint8Array [...]
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 * @param options - Options.
 * @returns Keccak256 hash.
 */
function keccak256(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0,sha3/* keccak_256 */.lY)(from(value));
    if (as === 'Bytes')
        return bytes;
    return core_Hex/* fromBytes */.uK(bytes);
}
/**
 * Calculates the [Ripemd160](https://en.wikipedia.org/wiki/RIPEMD) hash of a {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 *
 * This function is a re-export of `ripemd160` from [`@noble/hashes`](https://github.com/paulmillr/noble-hashes), an audited & minimal JS hashing library.
 *
 * @example
 * ```ts twoslash
 * import { Hash } from 'ox'
 *
 * Hash.ripemd160('0xdeadbeef')
 * // '0x226821c2f5423e11fe9af68bd285c249db2e4b5a'
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 * @param options - Options.
 * @returns Ripemd160 hash.
 */
function ripemd160(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = noble_ripemd160(Bytes.from(value));
    if (as === 'Bytes')
        return bytes;
    return Hex.fromBytes(bytes);
}
/**
 * Calculates the [Sha256](https://en.wikipedia.org/wiki/SHA-256) hash of a {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 *
 * This function is a re-export of `sha256` from [`@noble/hashes`](https://github.com/paulmillr/noble-hashes), an audited & minimal JS hashing library.
 *
 * @example
 * ```ts twoslash
 * import { Hash } from 'ox'
 *
 * Hash.sha256('0xdeadbeef')
 * // '0x5f78c33274e43fa9de5659265c1d917e25c03722dcb0b8d27db8d5feaa813953'
 * ```
 *
 * @param value - {@link ox#Bytes.Bytes} or {@link ox#Hex.Hex} value.
 * @param options - Options.
 * @returns Sha256 hash.
 */
function Hash_sha256(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = noble_sha256(Bytes.from(value));
    if (as === 'Bytes')
        return bytes;
    return Hex.fromBytes(bytes);
}
/**
 * Checks if a string is a valid hash value.
 *
 * @example
 * ```ts twoslash
 * import { Hash } from 'ox'
 *
 * Hash.validate('0x')
 * // @log: false
 *
 * Hash.validate('0x3ea2f1d0abf3fc66cf29eebb70cbd4e7fe762ef8a09bcc06c8edf641230afec0')
 * // @log: true
 * ```
 *
 * @param value - Value to check.
 * @returns Whether the value is a valid hash.
 */
function Hash_validate(value) {
    return Hex.validate(value) && Hex.size(value) === 32;
}
//# sourceMappingURL=Hash.js.map
;// ./node_modules/ox/_esm/core/PublicKey.js




/**
 * Asserts that a {@link ox#PublicKey.PublicKey} is valid.
 *
 * @example
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * PublicKey.assert({
 *   prefix: 4,
 *   y: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * })
 * // @error: PublicKey.InvalidError: Value \`{"y":"1"}\` is not a valid public key.
 * // @error: Public key must contain:
 * // @error: - an `x` and `prefix` value (compressed)
 * // @error: - an `x`, `y`, and `prefix` value (uncompressed)
 * ```
 *
 * @param publicKey - The public key object to assert.
 */
function PublicKey_assert(publicKey, options = {}) {
    const { compressed } = options;
    const { prefix, x, y } = publicKey;
    // Uncompressed
    if (compressed === false ||
        (typeof x === 'bigint' && typeof y === 'bigint')) {
        if (prefix !== 4)
            throw new InvalidPrefixError({
                prefix,
                cause: new InvalidUncompressedPrefixError(),
            });
        return;
    }
    // Compressed
    if (compressed === true ||
        (typeof x === 'bigint' && typeof y === 'undefined')) {
        if (prefix !== 3 && prefix !== 2)
            throw new InvalidPrefixError({
                prefix,
                cause: new InvalidCompressedPrefixError(),
            });
        return;
    }
    // Unknown/invalid
    throw new InvalidError({ publicKey });
}
/**
 * Compresses a {@link ox#PublicKey.PublicKey}.
 *
 * @example
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.from({
 *   prefix: 4,
 *   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 *   y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * })
 *
 * const compressed = PublicKey.compress(publicKey) // [!code focus]
 * // @log: {
 * // @log:   prefix: 3,
 * // @log:   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 * // @log: }
 * ```
 *
 * @param publicKey - The public key to compress.
 * @returns The compressed public key.
 */
function compress(publicKey) {
    const { x, y } = publicKey;
    return {
        prefix: y % 2n === 0n ? 2 : 3,
        x,
    };
}
/**
 * Instantiates a typed {@link ox#PublicKey.PublicKey} object from a {@link ox#PublicKey.PublicKey}, {@link ox#Bytes.Bytes}, or {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.from({
 *   prefix: 4,
 *   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 *   y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * })
 * // @log: {
 * // @log:   prefix: 4,
 * // @log:   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 * // @log:   y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * // @log: }
 * ```
 *
 * @example
 * ### From Serialized
 *
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.from('0x048318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed753547f11ca8696646f2f3acb08e31016afac23e630c5d11f59f61fef57b0d2aa5')
 * // @log: {
 * // @log:   prefix: 4,
 * // @log:   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 * // @log:   y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * // @log: }
 * ```
 *
 * @param value - The public key value to instantiate.
 * @returns The instantiated {@link ox#PublicKey.PublicKey}.
 */
function PublicKey_from(value) {
    const publicKey = (() => {
        if (core_Hex/* validate */.tf(value))
            return PublicKey_fromHex(value);
        if (validate(value))
            return fromBytes(value);
        const { prefix, x, y } = value;
        if (typeof x === 'bigint' && typeof y === 'bigint')
            return { prefix: prefix ?? 0x04, x, y };
        return { prefix, x };
    })();
    PublicKey_assert(publicKey);
    return publicKey;
}
/**
 * Deserializes a {@link ox#PublicKey.PublicKey} from a {@link ox#Bytes.Bytes} value.
 *
 * @example
 * ```ts twoslash
 * // @noErrors
 * import { PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.fromBytes(new Uint8Array([128, 3, 131, ...]))
 * // @log: {
 * // @log:   prefix: 4,
 * // @log:   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 * // @log:   y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * // @log: }
 * ```
 *
 * @param publicKey - The serialized public key.
 * @returns The deserialized public key.
 */
function fromBytes(publicKey) {
    return PublicKey_fromHex(core_Hex/* fromBytes */.uK(publicKey));
}
/**
 * Deserializes a {@link ox#PublicKey.PublicKey} from a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.fromHex('0x8318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed753547f11ca8696646f2f3acb08e31016afac23e630c5d11f59f61fef57b0d2aa5')
 * // @log: {
 * // @log:   prefix: 4,
 * // @log:   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 * // @log:   y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * // @log: }
 * ```
 *
 * @example
 * ### Deserializing a Compressed Public Key
 *
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.fromHex('0x038318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed75')
 * // @log: {
 * // @log:   prefix: 3,
 * // @log:   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 * // @log: }
 * ```
 *
 * @param publicKey - The serialized public key.
 * @returns The deserialized public key.
 */
function PublicKey_fromHex(publicKey) {
    if (publicKey.length !== 132 &&
        publicKey.length !== 130 &&
        publicKey.length !== 68)
        throw new InvalidSerializedSizeError({ publicKey });
    if (publicKey.length === 130) {
        const x = BigInt(core_Hex/* slice */.di(publicKey, 0, 32));
        const y = BigInt(core_Hex/* slice */.di(publicKey, 32, 64));
        return {
            prefix: 4,
            x,
            y,
        };
    }
    if (publicKey.length === 132) {
        const prefix = Number(core_Hex/* slice */.di(publicKey, 0, 1));
        const x = BigInt(core_Hex/* slice */.di(publicKey, 1, 33));
        const y = BigInt(core_Hex/* slice */.di(publicKey, 33, 65));
        return {
            prefix,
            x,
            y,
        };
    }
    const prefix = Number(core_Hex/* slice */.di(publicKey, 0, 1));
    const x = BigInt(core_Hex/* slice */.di(publicKey, 1, 33));
    return {
        prefix,
        x,
    };
}
/**
 * Serializes a {@link ox#PublicKey.PublicKey} to {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.from({
 *   prefix: 4,
 *   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 *   y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * })
 *
 * const bytes = PublicKey.toBytes(publicKey) // [!code focus]
 * // @log: Uint8Array [128, 3, 131, ...]
 * ```
 *
 * @param publicKey - The public key to serialize.
 * @returns The serialized public key.
 */
function toBytes(publicKey, options = {}) {
    return Bytes.fromHex(PublicKey_toHex(publicKey, options));
}
/**
 * Serializes a {@link ox#PublicKey.PublicKey} to {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.from({
 *   prefix: 4,
 *   x: 59295962801117472859457908919941473389380284132224861839820747729565200149877n,
 *   y: 24099691209996290925259367678540227198235484593389470330605641003500238088869n,
 * })
 *
 * const hex = PublicKey.toHex(publicKey) // [!code focus]
 * // @log: '0x048318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed753547f11ca8696646f2f3acb08e31016afac23e630c5d11f59f61fef57b0d2aa5'
 * ```
 *
 * @param publicKey - The public key to serialize.
 * @returns The serialized public key.
 */
function PublicKey_toHex(publicKey, options = {}) {
    PublicKey_assert(publicKey);
    const { prefix, x, y } = publicKey;
    const { includePrefix = true } = options;
    const publicKey_ = core_Hex/* concat */.xW(includePrefix ? core_Hex/* fromNumber */.oB(prefix, { size: 1 }) : '0x', core_Hex/* fromNumber */.oB(x, { size: 32 }), 
    // If the public key is not compressed, add the y coordinate.
    typeof y === 'bigint' ? core_Hex/* fromNumber */.oB(y, { size: 32 }) : '0x');
    return publicKey_;
}
/**
 * Validates a {@link ox#PublicKey.PublicKey}. Returns `true` if valid, `false` otherwise.
 *
 * @example
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * const valid = PublicKey.validate({
 *   prefix: 4,
 *   y: 49782753348462494199823712700004552394425719014458918871452329774910450607807n,
 * })
 * // @log: false
 * ```
 *
 * @param publicKey - The public key object to assert.
 */
function PublicKey_validate(publicKey, options = {}) {
    try {
        PublicKey_assert(publicKey, options);
        return true;
    }
    catch (_error) {
        return false;
    }
}
/**
 * Thrown when a public key is invalid.
 *
 * @example
 * ```ts twoslash
 * import { PublicKey } from 'ox'
 *
 * PublicKey.assert({ y: 1n })
 * // @error: PublicKey.InvalidError: Value `{"y":1n}` is not a valid public key.
 * // @error: Public key must contain:
 * // @error: - an `x` and `prefix` value (compressed)
 * // @error: - an `x`, `y`, and `prefix` value (uncompressed)
 * ```
 */
class InvalidError extends Errors/* BaseError */.C {
    constructor({ publicKey }) {
        super(`Value \`${Json/* stringify */.A(publicKey)}\` is not a valid public key.`, {
            metaMessages: [
                'Public key must contain:',
                '- an `x` and `prefix` value (compressed)',
                '- an `x`, `y`, and `prefix` value (uncompressed)',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidError'
        });
    }
}
/** Thrown when a public key has an invalid prefix. */
class InvalidPrefixError extends Errors/* BaseError */.C {
    constructor({ prefix, cause }) {
        super(`Prefix "${prefix}" is invalid.`, {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidPrefixError'
        });
    }
}
/** Thrown when the public key has an invalid prefix for a compressed public key. */
class InvalidCompressedPrefixError extends Errors/* BaseError */.C {
    constructor() {
        super('Prefix must be 2 or 3 for compressed public keys.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidCompressedPrefixError'
        });
    }
}
/** Thrown when the public key has an invalid prefix for an uncompressed public key. */
class InvalidUncompressedPrefixError extends Errors/* BaseError */.C {
    constructor() {
        super('Prefix must be 4 for uncompressed public keys.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidUncompressedPrefixError'
        });
    }
}
/** Thrown when the public key has an invalid serialized size. */
class InvalidSerializedSizeError extends Errors/* BaseError */.C {
    constructor({ publicKey }) {
        super(`Value \`${publicKey}\` is an invalid public key size.`, {
            metaMessages: [
                'Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).',
                `Received ${core_Hex/* size */.Ej(core_Hex/* from */.HT(publicKey))} bytes.`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidSerializedSizeError'
        });
    }
}
//# sourceMappingURL=PublicKey.js.map
;// ./node_modules/ox/_esm/core/Address.js





const addressRegex = /^0x[a-fA-F0-9]{40}$/;
/**
 * Asserts that the given value is a valid {@link ox#Address.Address}.
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.assert('0xA0Cf798816D4b9b9866b5330EEa46a18382f251e')
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.assert('0xdeadbeef')
 * // @error: InvalidAddressError: Address "0xdeadbeef" is invalid.
 * ```
 *
 * @param value - Value to assert if it is a valid address.
 * @param options - Assertion options.
 */
function Address_assert(value, options = {}) {
    const { strict = true } = options;
    if (!addressRegex.test(value))
        throw new InvalidAddressError({
            address: value,
            cause: new InvalidInputError(),
        });
    if (strict) {
        if (value.toLowerCase() === value)
            return;
        if (Address_checksum(value) !== value)
            throw new InvalidAddressError({
                address: value,
                cause: new InvalidChecksumError(),
            });
    }
}
/**
 * Computes the checksum address for the given {@link ox#Address.Address}.
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.checksum('0xa0cf798816d4b9b9866b5330eea46a18382f251e')
 * // @log: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'
 * ```
 *
 * @param address - The address to compute the checksum for.
 * @returns The checksummed address.
 */
function Address_checksum(address) {
    if (checksum.has(address))
        return checksum.get(address);
    Address_assert(address, { strict: false });
    const hexAddress = address.substring(2).toLowerCase();
    const hash = keccak256(fromString(hexAddress), { as: 'Bytes' });
    const characters = hexAddress.split('');
    for (let i = 0; i < 40; i += 2) {
        if (hash[i >> 1] >> 4 >= 8 && characters[i]) {
            characters[i] = characters[i].toUpperCase();
        }
        if ((hash[i >> 1] & 0x0f) >= 8 && characters[i + 1]) {
            characters[i + 1] = characters[i + 1].toUpperCase();
        }
    }
    const result = `0x${characters.join('')}`;
    checksum.set(address, result);
    return result;
}
/**
 * Converts a stringified address to a typed (checksummed) {@link ox#Address.Address}.
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.from('0xa0cf798816d4b9b9866b5330eea46a18382f251e')
 * // @log: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.from('0xa0cf798816d4b9b9866b5330eea46a18382f251e', {
 *   checksum: false
 * })
 * // @log: '0xa0cf798816d4b9b9866b5330eea46a18382f251e'
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.from('hello')
 * // @error: InvalidAddressError: Address "0xa" is invalid.
 * ```
 *
 * @param address - An address string to convert to a typed Address.
 * @param options - Conversion options.
 * @returns The typed Address.
 */
function Address_from(address, options = {}) {
    const { checksum: checksumVal = false } = options;
    Address_assert(address);
    if (checksumVal)
        return Address_checksum(address);
    return address;
}
/**
 * Converts an ECDSA public key to an {@link ox#Address.Address}.
 *
 * @example
 * ```ts twoslash
 * import { Address, PublicKey } from 'ox'
 *
 * const publicKey = PublicKey.from(
 *   '0x048318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed753547f11ca8696646f2f3acb08e31016afac23e630c5d11f59f61fef57b0d2aa5',
 * )
 * const address = Address.fromPublicKey(publicKey)
 * // @log: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
 * ```
 *
 * @param publicKey - The ECDSA public key to convert to an {@link ox#Address.Address}.
 * @param options - Conversion options.
 * @returns The {@link ox#Address.Address} corresponding to the public key.
 */
function fromPublicKey(publicKey, options = {}) {
    const address = keccak256(`0x${PublicKey_toHex(publicKey).slice(4)}`).substring(26);
    return Address_from(`0x${address}`, options);
}
/**
 * Checks if two {@link ox#Address.Address} are equal.
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.isEqual(
 *   '0xa0cf798816d4b9b9866b5330eea46a18382f251e',
 *   '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'
 * )
 * // @log: true
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.isEqual(
 *   '0xa0cf798816d4b9b9866b5330eea46a18382f251e',
 *   '0xA0Cf798816D4b9b9866b5330EEa46a18382f251f'
 * )
 * // @log: false
 * ```
 *
 * @param addressA - The first address to compare.
 * @param addressB - The second address to compare.
 * @returns Whether the addresses are equal.
 */
function Address_isEqual(addressA, addressB) {
    Address_assert(addressA, { strict: false });
    Address_assert(addressB, { strict: false });
    return addressA.toLowerCase() === addressB.toLowerCase();
}
/**
 * Checks if the given address is a valid {@link ox#Address.Address}.
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.validate('0xA0Cf798816D4b9b9866b5330EEa46a18382f251e')
 * // @log: true
 * ```
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.validate('0xdeadbeef')
 * // @log: false
 * ```
 *
 * @param address - Value to check if it is a valid address.
 * @param options - Check options.
 * @returns Whether the address is a valid address.
 */
function Address_validate(address, options = {}) {
    const { strict = true } = options ?? {};
    try {
        Address_assert(address, { strict });
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Thrown when an address is invalid.
 *
 * @example
 * ```ts twoslash
 * import { Address } from 'ox'
 *
 * Address.from('0x123')
 * // @error: Address.InvalidAddressError: Address `0x123` is invalid.
 * ```
 */
class InvalidAddressError extends Errors/* BaseError */.C {
    constructor({ address, cause }) {
        super(`Address "${address}" is invalid.`, {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidAddressError'
        });
    }
}
/** Thrown when an address is not a 20 byte (40 hexadecimal character) value. */
class InvalidInputError extends Errors/* BaseError */.C {
    constructor() {
        super('Address is not a 20 byte (40 hexadecimal character) value.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidInputError'
        });
    }
}
/** Thrown when an address does not match its checksum counterpart. */
class InvalidChecksumError extends Errors/* BaseError */.C {
    constructor() {
        super('Address does not match its checksum counterpart.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidChecksumError'
        });
    }
}
//# sourceMappingURL=Address.js.map
;// ./node_modules/ox/_esm/core/Secp256k1.js






/** Re-export of noble/curves secp256k1 utilities. */
const noble = (/* unused pure expression or super */ null && (secp256k1));
/**
 * Creates a new secp256k1 ECDSA key pair consisting of a private key and its corresponding public key.
 *
 * @example
 * ```ts twoslash
 * import { Secp256k1 } from 'ox'
 *
 * const { privateKey, publicKey } = Secp256k1.createKeyPair()
 * ```
 *
 * @param options - The options to generate the key pair.
 * @returns The generated key pair containing both private and public keys.
 */
function createKeyPair(options = {}) {
    const { as = 'Hex' } = options;
    const privateKey = randomPrivateKey({ as });
    const publicKey = getPublicKey({ privateKey });
    return {
        privateKey: privateKey,
        publicKey,
    };
}
/**
 * Computes the secp256k1 ECDSA public key from a provided private key.
 *
 * @example
 * ```ts twoslash
 * import { Secp256k1 } from 'ox'
 *
 * const publicKey = Secp256k1.getPublicKey({ privateKey: '0x...' })
 * ```
 *
 * @param options - The options to compute the public key.
 * @returns The computed public key.
 */
function getPublicKey(options) {
    const { privateKey } = options;
    const point = secp256k1.ProjectivePoint.fromPrivateKey(Hex.from(privateKey).slice(2));
    return PublicKey.from(point);
}
/**
 * Computes a shared secret using ECDH (Elliptic Curve Diffie-Hellman) between a private key and a public key.
 *
 * @example
 * ```ts twoslash
 * import { Secp256k1 } from 'ox'
 *
 * const { privateKey: privateKeyA } = Secp256k1.createKeyPair()
 * const { publicKey: publicKeyB } = Secp256k1.createKeyPair()
 *
 * const sharedSecret = Secp256k1.getSharedSecret({
 *   privateKey: privateKeyA,
 *   publicKey: publicKeyB
 * })
 * ```
 *
 * @param options - The options to compute the shared secret.
 * @returns The computed shared secret.
 */
function getSharedSecret(options) {
    const { as = 'Hex', privateKey, publicKey } = options;
    const point = secp256k1.ProjectivePoint.fromHex(PublicKey.toHex(publicKey).slice(2));
    const sharedPoint = point.multiply(secp256k1.utils.normPrivateKeyToScalar(Hex.from(privateKey).slice(2)));
    const sharedSecret = sharedPoint.toRawBytes(true); // compressed format
    if (as === 'Hex')
        return Hex.fromBytes(sharedSecret);
    return sharedSecret;
}
/**
 * Generates a random ECDSA private key on the secp256k1 curve.
 *
 * @example
 * ```ts twoslash
 * import { Secp256k1 } from 'ox'
 *
 * const privateKey = Secp256k1.randomPrivateKey()
 * ```
 *
 * @param options - The options to generate the private key.
 * @returns The generated private key.
 */
function randomPrivateKey(options = {}) {
    const { as = 'Hex' } = options;
    const bytes = secp256k1.utils.randomPrivateKey();
    if (as === 'Hex')
        return Hex.fromBytes(bytes);
    return bytes;
}
/**
 * Recovers the signing address from the signed payload and signature.
 *
 * @example
 * ```ts twoslash
 * import { Secp256k1 } from 'ox'
 *
 * const signature = Secp256k1.sign({ payload: '0xdeadbeef', privateKey: '0x...' })
 *
 * const address = Secp256k1.recoverAddress({ // [!code focus]
 *   payload: '0xdeadbeef', // [!code focus]
 *   signature, // [!code focus]
 * }) // [!code focus]
 * ```
 *
 * @param options - The recovery options.
 * @returns The recovered address.
 */
function recoverAddress(options) {
    return fromPublicKey(recoverPublicKey(options));
}
/**
 * Recovers the signing public key from the signed payload and signature.
 *
 * @example
 * ```ts twoslash
 * import { Secp256k1 } from 'ox'
 *
 * const signature = Secp256k1.sign({ payload: '0xdeadbeef', privateKey: '0x...' })
 *
 * const publicKey = Secp256k1.recoverPublicKey({ // [!code focus]
 *   payload: '0xdeadbeef', // [!code focus]
 *   signature, // [!code focus]
 * }) // [!code focus]
 * ```
 *
 * @param options - The recovery options.
 * @returns The recovered public key.
 */
function recoverPublicKey(options) {
    const { payload, signature } = options;
    const { r, s, yParity } = signature;
    const signature_ = new secp256k1_secp256k1.Signature(BigInt(r), BigInt(s)).addRecoveryBit(yParity);
    const point = signature_.recoverPublicKey(core_Hex/* from */.HT(payload).substring(2));
    return PublicKey_from(point);
}
/**
 * Signs the payload with the provided private key.
 *
 * @example
 * ```ts twoslash
 * import { Secp256k1 } from 'ox'
 *
 * const signature = Secp256k1.sign({ // [!code focus]
 *   payload: '0xdeadbeef', // [!code focus]
 *   privateKey: '0x...' // [!code focus]
 * }) // [!code focus]
 * ```
 *
 * @param options - The signing options.
 * @returns The ECDSA {@link ox#Signature.Signature}.
 */
function sign(options) {
    const { extraEntropy = Entropy.extraEntropy, hash, payload, privateKey, } = options;
    const { r, s, recovery } = secp256k1.sign(Bytes.from(payload), Bytes.from(privateKey), {
        extraEntropy: typeof extraEntropy === 'boolean'
            ? extraEntropy
            : Hex.from(extraEntropy).slice(2),
        lowS: true,
        ...(hash ? { prehash: true } : {}),
    });
    return {
        r,
        s,
        yParity: recovery,
    };
}
/**
 * Verifies a payload was signed by the provided address.
 *
 * @example
 * ### Verify with Ethereum Address
 *
 * ```ts twoslash
 * import { Secp256k1 } from 'ox'
 *
 * const signature = Secp256k1.sign({ payload: '0xdeadbeef', privateKey: '0x...' })
 *
 * const verified = Secp256k1.verify({ // [!code focus]
 *   address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', // [!code focus]
 *   payload: '0xdeadbeef', // [!code focus]
 *   signature, // [!code focus]
 * }) // [!code focus]
 * ```
 *
 * @example
 * ### Verify with Public Key
 *
 * ```ts twoslash
 * import { Secp256k1 } from 'ox'
 *
 * const privateKey = '0x...'
 * const publicKey = Secp256k1.getPublicKey({ privateKey })
 * const signature = Secp256k1.sign({ payload: '0xdeadbeef', privateKey })
 *
 * const verified = Secp256k1.verify({ // [!code focus]
 *   publicKey, // [!code focus]
 *   payload: '0xdeadbeef', // [!code focus]
 *   signature, // [!code focus]
 * }) // [!code focus]
 * ```
 *
 * @param options - The verification options.
 * @returns Whether the payload was signed by the provided address.
 */
function verify(options) {
    const { address, hash, payload, publicKey, signature } = options;
    if (address)
        return Address.isEqual(address, recoverAddress({ payload, signature }));
    return secp256k1.verify(signature, Bytes.from(payload), PublicKey.toBytes(publicKey), ...(hash ? [{ prehash: true, lowS: true }] : []));
}
//# sourceMappingURL=Secp256k1.js.map

/***/ },

/***/ 301999
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ej: () => (/* binding */ size),
/* harmony export */   Fl: () => (/* binding */ SizeExceedsPaddingSizeError),
/* harmony export */   HT: () => (/* binding */ from),
/* harmony export */   M7: () => (/* binding */ padRight),
/* harmony export */   di: () => (/* binding */ slice),
/* harmony export */   ii: () => (/* binding */ SliceOffsetOutOfBoundsError),
/* harmony export */   oB: () => (/* binding */ fromNumber),
/* harmony export */   tf: () => (/* binding */ validate),
/* harmony export */   u: () => (/* binding */ SizeOverflowError),
/* harmony export */   uK: () => (/* binding */ fromBytes),
/* harmony export */   xW: () => (/* binding */ concat)
/* harmony export */ });
/* unused harmony exports assert, fromBoolean, fromString, isEqual, padLeft, random, trimLeft, trimRight, toBigInt, toBoolean, toBytes, toNumber, toString, IntegerOutOfRangeError, InvalidHexBooleanError, InvalidHexTypeError, InvalidHexValueError, InvalidLengthError */
/* harmony import */ var _Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(556071);
/* harmony import */ var _internal_hex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(996475);
/* harmony import */ var _Json_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(833702);






const encoder = /*#__PURE__*/ new TextEncoder();
const hexes = /*#__PURE__*/ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, '0'));
/**
 * Asserts if the given value is {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.assert('abc')
 * // @error: InvalidHexValueTypeError:
 * // @error: Value `"abc"` of type `string` is an invalid hex type.
 * // @error: Hex types must be represented as `"0x\${string}"`.
 * ```
 *
 * @param value - The value to assert.
 * @param options - Options.
 */
function assert(value, options = {}) {
    const { strict = false } = options;
    if (!value)
        throw new InvalidHexTypeError(value);
    if (typeof value !== 'string')
        throw new InvalidHexTypeError(value);
    if (strict) {
        if (!/^0x[0-9a-fA-F]*$/.test(value))
            throw new InvalidHexValueError(value);
    }
    if (!value.startsWith('0x'))
        throw new InvalidHexValueError(value);
}
/**
 * Concatenates two or more {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.concat('0x123', '0x456')
 * // @log: '0x123456'
 * ```
 *
 * @param values - The {@link ox#Hex.Hex} values to concatenate.
 * @returns The concatenated {@link ox#Hex.Hex} value.
 */
function concat(...values) {
    return `0x${values.reduce((acc, x) => acc + x.replace('0x', ''), '')}`;
}
/**
 * Instantiates a {@link ox#Hex.Hex} value from a hex string or {@link ox#Bytes.Bytes} value.
 *
 * :::tip
 *
 * To instantiate from a **Boolean**, **String**, or **Number**, use one of the following:
 *
 * - `Hex.fromBoolean`
 *
 * - `Hex.fromString`
 *
 * - `Hex.fromNumber`
 *
 * :::
 *
 * @example
 * ```ts twoslash
 * import { Bytes, Hex } from 'ox'
 *
 * Hex.from('0x48656c6c6f20576f726c6421')
 * // @log: '0x48656c6c6f20576f726c6421'
 *
 * Hex.from(Bytes.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
 * // @log: '0x48656c6c6f20576f726c6421'
 * ```
 *
 * @param value - The {@link ox#Bytes.Bytes} value to encode.
 * @returns The encoded {@link ox#Hex.Hex} value.
 */
function from(value) {
    if (value instanceof Uint8Array)
        return fromBytes(value);
    if (Array.isArray(value))
        return fromBytes(new Uint8Array(value));
    return value;
}
/**
 * Encodes a boolean into a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.fromBoolean(true)
 * // @log: '0x1'
 *
 * Hex.fromBoolean(false)
 * // @log: '0x0'
 *
 * Hex.fromBoolean(true, { size: 32 })
 * // @log: '0x0000000000000000000000000000000000000000000000000000000000000001'
 * ```
 *
 * @param value - The boolean value to encode.
 * @param options - Options.
 * @returns The encoded {@link ox#Hex.Hex} value.
 */
function fromBoolean(value, options = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof options.size === 'number') {
        internal.assertSize(hex, options.size);
        return padLeft(hex, options.size);
    }
    return hex;
}
/**
 * Encodes a {@link ox#Bytes.Bytes} value into a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Bytes, Hex } from 'ox'
 *
 * Hex.fromBytes(Bytes.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
 * // @log: '0x48656c6c6f20576f726c6421'
 * ```
 *
 * @param value - The {@link ox#Bytes.Bytes} value to encode.
 * @param options - Options.
 * @returns The encoded {@link ox#Hex.Hex} value.
 */
function fromBytes(value, options = {}) {
    let string = '';
    for (let i = 0; i < value.length; i++)
        string += hexes[value[i]];
    const hex = `0x${string}`;
    if (typeof options.size === 'number') {
        _internal_hex_js__WEBPACK_IMPORTED_MODULE_1__/* .assertSize */ .Sl(hex, options.size);
        return padRight(hex, options.size);
    }
    return hex;
}
/**
 * Encodes a number or bigint into a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.fromNumber(420)
 * // @log: '0x1a4'
 *
 * Hex.fromNumber(420, { size: 32 })
 * // @log: '0x00000000000000000000000000000000000000000000000000000000000001a4'
 * ```
 *
 * @param value - The number or bigint value to encode.
 * @param options - Options.
 * @returns The encoded {@link ox#Hex.Hex} value.
 */
function fromNumber(value, options = {}) {
    const { signed, size } = options;
    const value_ = BigInt(value);
    let maxValue;
    if (size) {
        if (signed)
            maxValue = (1n << (BigInt(size) * 8n - 1n)) - 1n;
        else
            maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    }
    else if (typeof value === 'number') {
        maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === 'bigint' && signed ? -maxValue - 1n : 0;
    if ((maxValue && value_ > maxValue) || value_ < minValue) {
        const suffix = typeof value === 'bigint' ? 'n' : '';
        throw new IntegerOutOfRangeError({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value}${suffix}`,
        });
    }
    const stringValue = (signed && value_ < 0 ? (1n << BigInt(size * 8)) + BigInt(value_) : value_).toString(16);
    const hex = `0x${stringValue}`;
    if (size)
        return padLeft(hex, size);
    return hex;
}
/**
 * Encodes a string into a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 * Hex.fromString('Hello World!')
 * // '0x48656c6c6f20576f726c6421'
 *
 * Hex.fromString('Hello World!', { size: 32 })
 * // '0x48656c6c6f20576f726c64210000000000000000000000000000000000000000'
 * ```
 *
 * @param value - The string value to encode.
 * @param options - Options.
 * @returns The encoded {@link ox#Hex.Hex} value.
 */
function fromString(value, options = {}) {
    return fromBytes(encoder.encode(value), options);
}
/**
 * Checks if two {@link ox#Hex.Hex} values are equal.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.isEqual('0xdeadbeef', '0xdeadbeef')
 * // @log: true
 *
 * Hex.isEqual('0xda', '0xba')
 * // @log: false
 * ```
 *
 * @param hexA - The first {@link ox#Hex.Hex} value.
 * @param hexB - The second {@link ox#Hex.Hex} value.
 * @returns `true` if the two {@link ox#Hex.Hex} values are equal, `false` otherwise.
 */
function isEqual(hexA, hexB) {
    return equalBytes(Bytes.fromHex(hexA), Bytes.fromHex(hexB));
}
/**
 * Pads a {@link ox#Hex.Hex} value to the left with zero bytes until it reaches the given `size` (default: 32 bytes).
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.padLeft('0x1234', 4)
 * // @log: '0x00001234'
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to pad.
 * @param size - The size (in bytes) of the output hex value.
 * @returns The padded {@link ox#Hex.Hex} value.
 */
function padLeft(value, size) {
    return _internal_hex_js__WEBPACK_IMPORTED_MODULE_1__/* .pad */ .eV(value, { dir: 'left', size });
}
/**
 * Pads a {@link ox#Hex.Hex} value to the right with zero bytes until it reaches the given `size` (default: 32 bytes).
 *
 * @example
 * ```ts
 * import { Hex } from 'ox'
 *
 * Hex.padRight('0x1234', 4)
 * // @log: '0x12340000'
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to pad.
 * @param size - The size (in bytes) of the output hex value.
 * @returns The padded {@link ox#Hex.Hex} value.
 */
function padRight(value, size) {
    return _internal_hex_js__WEBPACK_IMPORTED_MODULE_1__/* .pad */ .eV(value, { dir: 'right', size });
}
/**
 * Generates a random {@link ox#Hex.Hex} value of the specified length.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * const hex = Hex.random(32)
 * // @log: '0x...'
 * ```
 *
 * @returns Random {@link ox#Hex.Hex} value.
 */
function random(length) {
    return fromBytes(Bytes.random(length));
}
/**
 * Returns a section of a {@link ox#Bytes.Bytes} value given a start/end bytes offset.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.slice('0x0123456789', 1, 4)
 * // @log: '0x234567'
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to slice.
 * @param start - The start offset (in bytes).
 * @param end - The end offset (in bytes).
 * @param options - Options.
 * @returns The sliced {@link ox#Hex.Hex} value.
 */
function slice(value, start, end, options = {}) {
    const { strict } = options;
    _internal_hex_js__WEBPACK_IMPORTED_MODULE_1__/* .assertStartOffset */ .kK(value, start);
    const value_ = `0x${value
        .replace('0x', '')
        .slice((start ?? 0) * 2, (end ?? value.length) * 2)}`;
    if (strict)
        _internal_hex_js__WEBPACK_IMPORTED_MODULE_1__/* .assertEndOffset */ .X(value_, start, end);
    return value_;
}
/**
 * Retrieves the size of a {@link ox#Hex.Hex} value (in bytes).
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.size('0xdeadbeef')
 * // @log: 4
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to get the size of.
 * @returns The size of the {@link ox#Hex.Hex} value (in bytes).
 */
function size(value) {
    return Math.ceil((value.length - 2) / 2);
}
/**
 * Trims leading zeros from a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.trimLeft('0x00000000deadbeef')
 * // @log: '0xdeadbeef'
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to trim.
 * @returns The trimmed {@link ox#Hex.Hex} value.
 */
function trimLeft(value) {
    return internal.trim(value, { dir: 'left' });
}
/**
 * Trims trailing zeros from a {@link ox#Hex.Hex} value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.trimRight('0xdeadbeef00000000')
 * // @log: '0xdeadbeef'
 * ```
 *
 * @param value - The {@link ox#Hex.Hex} value to trim.
 * @returns The trimmed {@link ox#Hex.Hex} value.
 */
function trimRight(value) {
    return internal.trim(value, { dir: 'right' });
}
/**
 * Decodes a {@link ox#Hex.Hex} value into a BigInt.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.toBigInt('0x1a4')
 * // @log: 420n
 *
 * Hex.toBigInt('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
 * // @log: 420n
 * ```
 *
 * @param hex - The {@link ox#Hex.Hex} value to decode.
 * @param options - Options.
 * @returns The decoded BigInt.
 */
function toBigInt(hex, options = {}) {
    const { signed } = options;
    if (options.size)
        internal.assertSize(hex, options.size);
    const value = BigInt(hex);
    if (!signed)
        return value;
    const size = (hex.length - 2) / 2;
    const max_unsigned = (1n << (BigInt(size) * 8n)) - 1n;
    const max_signed = max_unsigned >> 1n;
    if (value <= max_signed)
        return value;
    return value - max_unsigned - 1n;
}
/**
 * Decodes a {@link ox#Hex.Hex} value into a boolean.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.toBoolean('0x01')
 * // @log: true
 *
 * Hex.toBoolean('0x0000000000000000000000000000000000000000000000000000000000000001', { size: 32 })
 * // @log: true
 * ```
 *
 * @param hex - The {@link ox#Hex.Hex} value to decode.
 * @param options - Options.
 * @returns The decoded boolean.
 */
function toBoolean(hex, options = {}) {
    if (options.size)
        internal.assertSize(hex, options.size);
    const hex_ = trimLeft(hex);
    if (hex_ === '0x')
        return false;
    if (hex_ === '0x1')
        return true;
    throw new InvalidHexBooleanError(hex);
}
/**
 * Decodes a {@link ox#Hex.Hex} value into a {@link ox#Bytes.Bytes}.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * const data = Hex.toBytes('0x48656c6c6f20776f726c6421')
 * // @log: Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 * ```
 *
 * @param hex - The {@link ox#Hex.Hex} value to decode.
 * @param options - Options.
 * @returns The decoded {@link ox#Bytes.Bytes}.
 */
function toBytes(hex, options = {}) {
    return Bytes.fromHex(hex, options);
}
/**
 * Decodes a {@link ox#Hex.Hex} value into a number.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.toNumber('0x1a4')
 * // @log: 420
 *
 * Hex.toNumber('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
 * // @log: 420
 * ```
 *
 * @param hex - The {@link ox#Hex.Hex} value to decode.
 * @param options - Options.
 * @returns The decoded number.
 */
function toNumber(hex, options = {}) {
    const { signed, size } = options;
    if (!signed && !size)
        return Number(hex);
    return Number(toBigInt(hex, options));
}
/**
 * Decodes a {@link ox#Hex.Hex} value into a string.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.toString('0x48656c6c6f20576f726c6421')
 * // @log: 'Hello world!'
 *
 * Hex.toString('0x48656c6c6f20576f726c64210000000000000000000000000000000000000000', {
 *  size: 32,
 * })
 * // @log: 'Hello world'
 * ```
 *
 * @param hex - The {@link ox#Hex.Hex} value to decode.
 * @param options - Options.
 * @returns The decoded string.
 */
function toString(hex, options = {}) {
    const { size } = options;
    let bytes = Bytes.fromHex(hex);
    if (size) {
        internal_bytes.assertSize(bytes, size);
        bytes = Bytes.trimRight(bytes);
    }
    return new TextDecoder().decode(bytes);
}
/**
 * Checks if the given value is {@link ox#Hex.Hex}.
 *
 * @example
 * ```ts twoslash
 * import { Bytes, Hex } from 'ox'
 *
 * Hex.validate('0xdeadbeef')
 * // @log: true
 *
 * Hex.validate(Bytes.from([1, 2, 3]))
 * // @log: false
 * ```
 *
 * @param value - The value to check.
 * @param options - Options.
 * @returns `true` if the value is a {@link ox#Hex.Hex}, `false` otherwise.
 */
function validate(value, options = {}) {
    const { strict = false } = options;
    try {
        assert(value, { strict });
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Thrown when the provided integer is out of range, and cannot be represented as a hex value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.fromNumber(420182738912731283712937129)
 * // @error: Hex.IntegerOutOfRangeError: Number \`4.2018273891273126e+26\` is not in safe unsigned integer range (`0` to `9007199254740991`)
 * ```
 */
class IntegerOutOfRangeError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ max, min, signed, size, value, }) {
        super(`Number \`${value}\` is not in safe${size ? ` ${size * 8}-bit` : ''}${signed ? ' signed' : ' unsigned'} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.IntegerOutOfRangeError'
        });
    }
}
/**
 * Thrown when the provided hex value cannot be represented as a boolean.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.toBoolean('0xa')
 * // @error: Hex.InvalidHexBooleanError: Hex value `"0xa"` is not a valid boolean.
 * // @error: The hex value must be `"0x0"` (false) or `"0x1"` (true).
 * ```
 */
class InvalidHexBooleanError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(hex) {
        super(`Hex value \`"${hex}"\` is not a valid boolean.`, {
            metaMessages: [
                'The hex value must be `"0x0"` (false) or `"0x1"` (true).',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexBooleanError'
        });
    }
}
/**
 * Thrown when the provided value is not a valid hex type.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.assert(1)
 * // @error: Hex.InvalidHexTypeError: Value `1` of type `number` is an invalid hex type.
 * ```
 */
class InvalidHexTypeError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(value) {
        super(`Value \`${typeof value === 'object' ? _Json_js__WEBPACK_IMPORTED_MODULE_2__/* .stringify */ .A(value) : value}\` of type \`${typeof value}\` is an invalid hex type.`, {
            metaMessages: ['Hex types must be represented as `"0x${string}"`.'],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexTypeError'
        });
    }
}
/**
 * Thrown when the provided hex value is invalid.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.assert('0x0123456789abcdefg')
 * // @error: Hex.InvalidHexValueError: Value `0x0123456789abcdefg` is an invalid hex value.
 * // @error: Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).
 * ```
 */
class InvalidHexValueError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(value) {
        super(`Value \`${value}\` is an invalid hex value.`, {
            metaMessages: [
                'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidHexValueError'
        });
    }
}
/**
 * Thrown when the provided hex value is an odd length.
 *
 * @example
 * ```ts twoslash
 * import { Bytes } from 'ox'
 *
 * Bytes.fromHex('0xabcde')
 * // @error: Hex.InvalidLengthError: Hex value `"0xabcde"` is an odd length (5 nibbles).
 * ```
 */
class InvalidLengthError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor(value) {
        super(`Hex value \`"${value}"\` is an odd length (${value.length - 2} nibbles).`, {
            metaMessages: ['It must be an even length.'],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.InvalidLengthError'
        });
    }
}
/**
 * Thrown when the size of the value exceeds the expected max size.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.fromString('Hello World!', { size: 8 })
 * // @error: Hex.SizeOverflowError: Size cannot exceed `8` bytes. Given size: `12` bytes.
 * ```
 */
class SizeOverflowError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SizeOverflowError'
        });
    }
}
/**
 * Thrown when the slice offset exceeds the bounds of the value.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.slice('0x0123456789', 6)
 * // @error: Hex.SliceOffsetOutOfBoundsError: Slice starting at offset `6` is out-of-bounds (size: `5`).
 * ```
 */
class SliceOffsetOutOfBoundsError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ offset, position, size, }) {
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset \`${offset}\` is out-of-bounds (size: \`${size}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SliceOffsetOutOfBoundsError'
        });
    }
}
/**
 * Thrown when the size of the value exceeds the pad size.
 *
 * @example
 * ```ts twoslash
 * import { Hex } from 'ox'
 *
 * Hex.padLeft('0x1a4e12a45a21323123aaa87a897a897a898a6567a578a867a98778a667a85a875a87a6a787a65a675a6a9', 32)
 * // @error: Hex.SizeExceedsPaddingSizeError: Hex size (`43`) exceeds padding size (`32`).
 * ```
 */
class SizeExceedsPaddingSizeError extends _Errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BaseError */ .C {
    constructor({ size, targetSize, type, }) {
        super(`${type.charAt(0).toUpperCase()}${type
            .slice(1)
            .toLowerCase()} size (\`${size}\`) exceeds padding size (\`${targetSize}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Hex.SizeExceedsPaddingSizeError'
        });
    }
}
//# sourceMappingURL=Hex.js.map

/***/ },

/***/ 311468
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ensureUint8Array)
/* harmony export */ });
function isArrayBufferLike(buffer) {
    return (buffer instanceof ArrayBuffer || (typeof SharedArrayBuffer !== "undefined" && buffer instanceof SharedArrayBuffer));
}
function ensureUint8Array(buffer) {
    if (buffer instanceof Uint8Array) {
        return buffer;
    }
    else if (ArrayBuffer.isView(buffer)) {
        return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    else if (isArrayBufferLike(buffer)) {
        return new Uint8Array(buffer);
    }
    else {
        // ArrayLike<number>
        return Uint8Array.from(buffer);
    }
}
//# sourceMappingURL=typedArrays.mjs.map

/***/ },

/***/ 331861
(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
exports.ONE_SECOND = 1;
exports.FIVE_SECONDS = 5;
exports.TEN_SECONDS = 10;
exports.THIRTY_SECONDS = 30;
exports.SIXTY_SECONDS = 60;
exports.ONE_MINUTE = exports.SIXTY_SECONDS;
exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
exports.ONE_HOUR = exports.SIXTY_MINUTES;
exports.THREE_HOURS = exports.ONE_HOUR * 3;
exports.SIX_HOURS = exports.ONE_HOUR * 6;
exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
exports.THREE_DAYS = exports.ONE_DAY * 3;
exports.FIVE_DAYS = exports.ONE_DAY * 5;
exports.SEVEN_DAYS = exports.ONE_DAY * 7;
exports.THIRTY_DAYS = exports.ONE_DAY * 30;
exports.ONE_WEEK = exports.SEVEN_DAYS;
exports.TWO_WEEKS = exports.ONE_WEEK * 2;
exports.THREE_WEEKS = exports.ONE_WEEK * 3;
exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
exports.ONE_YEAR = exports.ONE_DAY * 365;
//# sourceMappingURL=time.js.map

/***/ },

/***/ 338236
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cq: () => (/* binding */ sn),
/* harmony export */   FA: () => (/* binding */ Qo),
/* harmony export */   TZ: () => (/* binding */ Po),
/* harmony export */   UF: () => (/* binding */ Qe)
/* harmony export */ });
/* unused harmony exports DATA_ENCODING, DID_DELIMITER, DID_METHOD, DID_PREFIX, JSON_ENCODING, JWT_DELIMITER, JWT_ENCODING, JWT_IRIDIUM_ALG, JWT_IRIDIUM_TYP, KEY_PAIR_SEED_LENGTH, MULTICODEC_ED25519_BASE, MULTICODEC_ED25519_ENCODING, MULTICODEC_ED25519_HEADER, MULTICODEC_ED25519_LENGTH, decodeData, decodeIss, decodeJSON, decodeSig, encodeData, encodeJSON, encodeJWT, encodeSig, verifyJWT */
/* harmony import */ var _walletconnect_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388900);
/* harmony import */ var _walletconnect_time__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_time__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(213554);
function En(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function fe(t,...e){if(!En(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function De(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function gn(t,e){fe(t);const n=e.outputLen;if(t.length<n)throw new Error("digestInto() expects output buffer of length at least "+n)}const it=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const _t=t=>new DataView(t.buffer,t.byteOffset,t.byteLength);function yn(t){if(typeof t!="string")throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array(new TextEncoder().encode(t))}function de(t){return typeof t=="string"&&(t=yn(t)),fe(t),t}class xn{clone(){return this._cloneInto()}}function Bn(t){const e=r=>t().update(de(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function he(t=32){if(it&&typeof it.getRandomValues=="function")return it.getRandomValues(new Uint8Array(t));if(it&&typeof it.randomBytes=="function")return it.randomBytes(t);throw new Error("crypto.getRandomValues must be defined")}function Cn(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const o=BigInt(32),s=BigInt(4294967295),a=Number(n>>o&s),u=Number(n&s),i=r?4:0,D=r?0:4;t.setUint32(e+i,a,r),t.setUint32(e+D,u,r)}class An extends xn{constructor(e,n,r,o){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=_t(this.buffer)}update(e){De(this);const{view:n,buffer:r,blockLen:o}=this;e=de(e);const s=e.length;for(let a=0;a<s;){const u=Math.min(o-this.pos,s-a);if(u===o){const i=_t(e);for(;o<=s-a;a+=o)this.process(i,a);continue}r.set(e.subarray(a,a+u),this.pos),this.pos+=u,a+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){De(this),gn(e,this),this.finished=!0;const{buffer:n,view:r,blockLen:o,isLE:s}=this;let{pos:a}=this;n[a++]=128,this.buffer.subarray(a).fill(0),this.padOffset>o-a&&(this.process(r,0),a=0);for(let l=a;l<o;l++)n[l]=0;Cn(r,o-8,BigInt(this.length*8),s),this.process(r,0);const u=_t(e),i=this.outputLen;if(i%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const D=i/4,c=this.get();if(D>c.length)throw new Error("_sha2: outputLen bigger than state");for(let l=0;l<D;l++)u.setUint32(4*l,c[l],s)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:r,length:o,finished:s,destroyed:a,pos:u}=this;return e.length=o,e.pos=u,e.finished=s,e.destroyed=a,o%n&&e.buffer.set(r),e}}const wt=BigInt(2**32-1),St=BigInt(32);function le(t,e=!1){return e?{h:Number(t&wt),l:Number(t>>St&wt)}:{h:Number(t>>St&wt)|0,l:Number(t&wt)|0}}function mn(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let o=0;o<t.length;o++){const{h:s,l:a}=le(t[o],e);[n[o],r[o]]=[s,a]}return[n,r]}const _n=(t,e)=>BigInt(t>>>0)<<St|BigInt(e>>>0),Sn=(t,e,n)=>t>>>n,vn=(t,e,n)=>t<<32-n|e>>>n,In=(t,e,n)=>t>>>n|e<<32-n,Un=(t,e,n)=>t<<32-n|e>>>n,Tn=(t,e,n)=>t<<64-n|e>>>n-32,Fn=(t,e,n)=>t>>>n-32|e<<64-n,Nn=(t,e)=>e,Ln=(t,e)=>t,On=(t,e,n)=>t<<n|e>>>32-n,Hn=(t,e,n)=>e<<n|t>>>32-n,zn=(t,e,n)=>e<<n-32|t>>>64-n,Mn=(t,e,n)=>t<<n-32|e>>>64-n;function qn(t,e,n,r){const o=(e>>>0)+(r>>>0);return{h:t+n+(o/2**32|0)|0,l:o|0}}const $n=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),kn=(t,e,n,r)=>e+n+r+(t/2**32|0)|0,Rn=(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),jn=(t,e,n,r,o)=>e+n+r+o+(t/2**32|0)|0,Zn=(t,e,n,r,o)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(o>>>0),Gn=(t,e,n,r,o,s)=>e+n+r+o+s+(t/2**32|0)|0,x={fromBig:le,split:mn,toBig:_n,shrSH:Sn,shrSL:vn,rotrSH:In,rotrSL:Un,rotrBH:Tn,rotrBL:Fn,rotr32H:Nn,rotr32L:Ln,rotlSH:On,rotlSL:Hn,rotlBH:zn,rotlBL:Mn,add:qn,add3L:$n,add3H:kn,add4L:Rn,add4H:jn,add5H:Gn,add5L:Zn},[Vn,Yn]=(()=>x.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))))(),P=new Uint32Array(80),Q=new Uint32Array(80);class Jn extends An{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:e,Al:n,Bh:r,Bl:o,Ch:s,Cl:a,Dh:u,Dl:i,Eh:D,El:c,Fh:l,Fl:p,Gh:w,Gl:h,Hh:g,Hl:S}=this;return[e,n,r,o,s,a,u,i,D,c,l,p,w,h,g,S]}set(e,n,r,o,s,a,u,i,D,c,l,p,w,h,g,S){this.Ah=e|0,this.Al=n|0,this.Bh=r|0,this.Bl=o|0,this.Ch=s|0,this.Cl=a|0,this.Dh=u|0,this.Dl=i|0,this.Eh=D|0,this.El=c|0,this.Fh=l|0,this.Fl=p|0,this.Gh=w|0,this.Gl=h|0,this.Hh=g|0,this.Hl=S|0}process(e,n){for(let d=0;d<16;d++,n+=4)P[d]=e.getUint32(n),Q[d]=e.getUint32(n+=4);for(let d=16;d<80;d++){const m=P[d-15]|0,F=Q[d-15]|0,q=x.rotrSH(m,F,1)^x.rotrSH(m,F,8)^x.shrSH(m,F,7),z=x.rotrSL(m,F,1)^x.rotrSL(m,F,8)^x.shrSL(m,F,7),I=P[d-2]|0,O=Q[d-2]|0,ot=x.rotrSH(I,O,19)^x.rotrBH(I,O,61)^x.shrSH(I,O,6),tt=x.rotrSL(I,O,19)^x.rotrBL(I,O,61)^x.shrSL(I,O,6),st=x.add4L(z,tt,Q[d-7],Q[d-16]),at=x.add4H(st,q,ot,P[d-7],P[d-16]);P[d]=at|0,Q[d]=st|0}let{Ah:r,Al:o,Bh:s,Bl:a,Ch:u,Cl:i,Dh:D,Dl:c,Eh:l,El:p,Fh:w,Fl:h,Gh:g,Gl:S,Hh:v,Hl:L}=this;for(let d=0;d<80;d++){const m=x.rotrSH(l,p,14)^x.rotrSH(l,p,18)^x.rotrBH(l,p,41),F=x.rotrSL(l,p,14)^x.rotrSL(l,p,18)^x.rotrBL(l,p,41),q=l&w^~l&g,z=p&h^~p&S,I=x.add5L(L,F,z,Yn[d],Q[d]),O=x.add5H(I,v,m,q,Vn[d],P[d]),ot=I|0,tt=x.rotrSH(r,o,28)^x.rotrBH(r,o,34)^x.rotrBH(r,o,39),st=x.rotrSL(r,o,28)^x.rotrBL(r,o,34)^x.rotrBL(r,o,39),at=r&s^r&u^s&u,Ct=o&a^o&i^a&i;v=g|0,L=S|0,g=w|0,S=h|0,w=l|0,h=p|0,{h:l,l:p}=x.add(D|0,c|0,O|0,ot|0),D=u|0,c=i|0,u=s|0,i=a|0,s=r|0,a=o|0;const At=x.add3L(ot,st,Ct);r=x.add3H(At,O,tt,at),o=At|0}({h:r,l:o}=x.add(this.Ah|0,this.Al|0,r|0,o|0)),{h:s,l:a}=x.add(this.Bh|0,this.Bl|0,s|0,a|0),{h:u,l:i}=x.add(this.Ch|0,this.Cl|0,u|0,i|0),{h:D,l:c}=x.add(this.Dh|0,this.Dl|0,D|0,c|0),{h:l,l:p}=x.add(this.Eh|0,this.El|0,l|0,p|0),{h:w,l:h}=x.add(this.Fh|0,this.Fl|0,w|0,h|0),{h:g,l:S}=x.add(this.Gh|0,this.Gl|0,g|0,S|0),{h:v,l:L}=x.add(this.Hh|0,this.Hl|0,v|0,L|0),this.set(r,o,s,a,u,i,D,c,l,p,w,h,g,S,v,L)}roundClean(){P.fill(0),Q.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const Kn=Bn(()=>new Jn);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const vt=BigInt(0),be=BigInt(1),Wn=BigInt(2);function It(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function Ut(t){if(!It(t))throw new Error("Uint8Array expected")}function Tt(t,e){if(typeof e!="boolean")throw new Error(t+" boolean expected, got "+e)}const Xn=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Ft(t){Ut(t);let e="";for(let n=0;n<t.length;n++)e+=Xn[t[n]];return e}function pe(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?vt:BigInt("0x"+t)}const K={_0:48,_9:57,A:65,F:70,a:97,f:102};function we(t){if(t>=K._0&&t<=K._9)return t-K._0;if(t>=K.A&&t<=K.F)return t-(K.A-10);if(t>=K.a&&t<=K.f)return t-(K.a-10)}function Ee(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length,n=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const r=new Uint8Array(n);for(let o=0,s=0;o<n;o++,s+=2){const a=we(t.charCodeAt(s)),u=we(t.charCodeAt(s+1));if(a===void 0||u===void 0){const i=t[s]+t[s+1];throw new Error('hex string expected, got non-hex character "'+i+'" at index '+s)}r[o]=a*16+u}return r}function Pn(t){return pe(Ft(t))}function Et(t){return Ut(t),pe(Ft(Uint8Array.from(t).reverse()))}function ge(t,e){return Ee(t.toString(16).padStart(e*2,"0"))}function Nt(t,e){return ge(t,e).reverse()}function W(t,e,n){let r;if(typeof e=="string")try{r=Ee(e)}catch(s){throw new Error(t+" must be hex string or Uint8Array, cause: "+s)}else if(It(e))r=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");const o=r.length;if(typeof n=="number"&&o!==n)throw new Error(t+" of length "+n+" expected, got "+o);return r}function ye(...t){let e=0;for(let r=0;r<t.length;r++){const o=t[r];Ut(o),e+=o.length}const n=new Uint8Array(e);for(let r=0,o=0;r<t.length;r++){const s=t[r];n.set(s,o),o+=s.length}return n}const Lt=t=>typeof t=="bigint"&&vt<=t;function Qn(t,e,n){return Lt(t)&&Lt(e)&&Lt(n)&&e<=t&&t<n}function ft(t,e,n,r){if(!Qn(e,n,r))throw new Error("expected valid "+t+": "+n+" <= n < "+r+", got "+e)}function tr(t){let e;for(e=0;t>vt;t>>=be,e+=1);return e}const er=t=>(Wn<<BigInt(t-1))-be,nr={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",stringOrUint8Array:t=>typeof t=="string"||It(t),isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function Ot(t,e,n={}){const r=(o,s,a)=>{const u=nr[s];if(typeof u!="function")throw new Error("invalid validator function");const i=t[o];if(!(a&&i===void 0)&&!u(i,t))throw new Error("param "+String(o)+" is invalid. Expected "+s+", got "+i)};for(const[o,s]of Object.entries(e))r(o,s,!1);for(const[o,s]of Object.entries(n))r(o,s,!0);return t}function xe(t){const e=new WeakMap;return(n,...r)=>{const o=e.get(n);if(o!==void 0)return o;const s=t(n,...r);return e.set(n,s),s}}const M=BigInt(0),N=BigInt(1),nt=BigInt(2),rr=BigInt(3),Ht=BigInt(4),Be=BigInt(5),Ce=BigInt(8);function H(t,e){const n=t%e;return n>=M?n:e+n}function or(t,e,n){if(e<M)throw new Error("invalid exponent, negatives unsupported");if(n<=M)throw new Error("invalid modulus");if(n===N)return M;let r=N;for(;e>M;)e&N&&(r=r*t%n),t=t*t%n,e>>=N;return r}function J(t,e,n){let r=t;for(;e-- >M;)r*=r,r%=n;return r}function Ae(t,e){if(t===M)throw new Error("invert: expected non-zero number");if(e<=M)throw new Error("invert: expected positive modulus, got "+e);let n=H(t,e),r=e,o=M,s=N;for(;n!==M;){const u=r/n,i=r%n,D=o-s*u;r=n,n=i,o=s,s=D}if(r!==N)throw new Error("invert: does not exist");return H(o,e)}function sr(t){const e=(t-N)/nt;let n,r,o;for(n=t-N,r=0;n%nt===M;n/=nt,r++);for(o=nt;o<t&&or(o,e,t)!==t-N;o++)if(o>1e3)throw new Error("Cannot find square root: likely non-prime P");if(r===1){const a=(t+N)/Ht;return function(i,D){const c=i.pow(D,a);if(!i.eql(i.sqr(c),D))throw new Error("Cannot find square root");return c}}const s=(n+N)/nt;return function(u,i){if(u.pow(i,e)===u.neg(u.ONE))throw new Error("Cannot find square root");let D=r,c=u.pow(u.mul(u.ONE,o),n),l=u.pow(i,s),p=u.pow(i,n);for(;!u.eql(p,u.ONE);){if(u.eql(p,u.ZERO))return u.ZERO;let w=1;for(let g=u.sqr(p);w<D&&!u.eql(g,u.ONE);w++)g=u.sqr(g);const h=u.pow(c,N<<BigInt(D-w-1));c=u.sqr(h),l=u.mul(l,h),p=u.mul(p,c),D=w}return l}}function ir(t){if(t%Ht===rr){const e=(t+N)/Ht;return function(r,o){const s=r.pow(o,e);if(!r.eql(r.sqr(s),o))throw new Error("Cannot find square root");return s}}if(t%Ce===Be){const e=(t-Be)/Ce;return function(r,o){const s=r.mul(o,nt),a=r.pow(s,e),u=r.mul(o,a),i=r.mul(r.mul(u,nt),a),D=r.mul(u,r.sub(i,r.ONE));if(!r.eql(r.sqr(D),o))throw new Error("Cannot find square root");return D}}return sr(t)}const ur=(t,e)=>(H(t,e)&N)===N,cr=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function ar(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=cr.reduce((r,o)=>(r[o]="function",r),e);return Ot(t,n)}function fr(t,e,n){if(n<M)throw new Error("invalid exponent, negatives unsupported");if(n===M)return t.ONE;if(n===N)return e;let r=t.ONE,o=e;for(;n>M;)n&N&&(r=t.mul(r,o)),o=t.sqr(o),n>>=N;return r}function Dr(t,e){const n=new Array(e.length),r=e.reduce((s,a,u)=>t.is0(a)?s:(n[u]=s,t.mul(s,a)),t.ONE),o=t.inv(r);return e.reduceRight((s,a,u)=>t.is0(a)?s:(n[u]=t.mul(s,n[u]),t.mul(s,a)),o),n}function me(t,e){const n=e!==void 0?e:t.toString(2).length,r=Math.ceil(n/8);return{nBitLength:n,nByteLength:r}}function _e(t,e,n=!1,r={}){if(t<=M)throw new Error("invalid field: expected ORDER > 0, got "+t);const{nBitLength:o,nByteLength:s}=me(t,e);if(s>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let a;const u=Object.freeze({ORDER:t,isLE:n,BITS:o,BYTES:s,MASK:er(o),ZERO:M,ONE:N,create:i=>H(i,t),isValid:i=>{if(typeof i!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof i);return M<=i&&i<t},is0:i=>i===M,isOdd:i=>(i&N)===N,neg:i=>H(-i,t),eql:(i,D)=>i===D,sqr:i=>H(i*i,t),add:(i,D)=>H(i+D,t),sub:(i,D)=>H(i-D,t),mul:(i,D)=>H(i*D,t),pow:(i,D)=>fr(u,i,D),div:(i,D)=>H(i*Ae(D,t),t),sqrN:i=>i*i,addN:(i,D)=>i+D,subN:(i,D)=>i-D,mulN:(i,D)=>i*D,inv:i=>Ae(i,t),sqrt:r.sqrt||(i=>(a||(a=ir(t)),a(u,i))),invertBatch:i=>Dr(u,i),cmov:(i,D,c)=>c?D:i,toBytes:i=>n?Nt(i,s):ge(i,s),fromBytes:i=>{if(i.length!==s)throw new Error("Field.fromBytes: expected "+s+" bytes, got "+i.length);return n?Et(i):Pn(i)}});return Object.freeze(u)}const Se=BigInt(0),gt=BigInt(1);function zt(t,e){const n=e.negate();return t?n:e}function ve(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function Mt(t,e){ve(t,e);const n=Math.ceil(e/t)+1,r=2**(t-1);return{windows:n,windowSize:r}}function dr(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((n,r)=>{if(!(n instanceof e))throw new Error("invalid point at index "+r)})}function hr(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((n,r)=>{if(!e.isValid(n))throw new Error("invalid scalar at index "+r)})}const qt=new WeakMap,Ie=new WeakMap;function $t(t){return Ie.get(t)||1}function lr(t,e){return{constTimeNegate:zt,hasPrecomputes(n){return $t(n)!==1},unsafeLadder(n,r,o=t.ZERO){let s=n;for(;r>Se;)r&gt&&(o=o.add(s)),s=s.double(),r>>=gt;return o},precomputeWindow(n,r){const{windows:o,windowSize:s}=Mt(r,e),a=[];let u=n,i=u;for(let D=0;D<o;D++){i=u,a.push(i);for(let c=1;c<s;c++)i=i.add(u),a.push(i);u=i.double()}return a},wNAF(n,r,o){const{windows:s,windowSize:a}=Mt(n,e);let u=t.ZERO,i=t.BASE;const D=BigInt(2**n-1),c=2**n,l=BigInt(n);for(let p=0;p<s;p++){const w=p*a;let h=Number(o&D);o>>=l,h>a&&(h-=c,o+=gt);const g=w,S=w+Math.abs(h)-1,v=p%2!==0,L=h<0;h===0?i=i.add(zt(v,r[g])):u=u.add(zt(L,r[S]))}return{p:u,f:i}},wNAFUnsafe(n,r,o,s=t.ZERO){const{windows:a,windowSize:u}=Mt(n,e),i=BigInt(2**n-1),D=2**n,c=BigInt(n);for(let l=0;l<a;l++){const p=l*u;if(o===Se)break;let w=Number(o&i);if(o>>=c,w>u&&(w-=D,o+=gt),w===0)continue;let h=r[p+Math.abs(w)-1];w<0&&(h=h.negate()),s=s.add(h)}return s},getPrecomputes(n,r,o){let s=qt.get(r);return s||(s=this.precomputeWindow(r,n),n!==1&&qt.set(r,o(s))),s},wNAFCached(n,r,o){const s=$t(n);return this.wNAF(s,this.getPrecomputes(s,n,o),r)},wNAFCachedUnsafe(n,r,o,s){const a=$t(n);return a===1?this.unsafeLadder(n,r,s):this.wNAFUnsafe(a,this.getPrecomputes(a,n,o),r,s)},setWindowSize(n,r){ve(r,e),Ie.set(n,r),qt.delete(n)}}}function br(t,e,n,r){if(dr(n,t),hr(r,e),n.length!==r.length)throw new Error("arrays of points and scalars must have equal length");const o=t.ZERO,s=tr(BigInt(n.length)),a=s>12?s-3:s>4?s-2:s?2:1,u=(1<<a)-1,i=new Array(u+1).fill(o),D=Math.floor((e.BITS-1)/a)*a;let c=o;for(let l=D;l>=0;l-=a){i.fill(o);for(let w=0;w<r.length;w++){const h=r[w],g=Number(h>>BigInt(l)&BigInt(u));i[g]=i[g].add(n[w])}let p=o;for(let w=i.length-1,h=o;w>0;w--)h=h.add(i[w]),p=p.add(h);if(c=c.add(p),l!==0)for(let w=0;w<a;w++)c=c.double()}return c}function pr(t){return ar(t.Fp),Ot(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...me(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}const G=BigInt(0),j=BigInt(1),yt=BigInt(2),wr=BigInt(8),Er={zip215:!0};function gr(t){const e=pr(t);return Ot(t,{hash:"function",a:"bigint",d:"bigint",randomBytes:"function"},{adjustScalarBytes:"function",domain:"function",uvRatio:"function",mapToCurve:"function"}),Object.freeze({...e})}function yr(t){const e=gr(t),{Fp:n,n:r,prehash:o,hash:s,randomBytes:a,nByteLength:u,h:i}=e,D=yt<<BigInt(u*8)-j,c=n.create,l=_e(e.n,e.nBitLength),p=e.uvRatio||((y,f)=>{try{return{isValid:!0,value:n.sqrt(y*n.inv(f))}}catch{return{isValid:!1,value:G}}}),w=e.adjustScalarBytes||(y=>y),h=e.domain||((y,f,b)=>{if(Tt("phflag",b),f.length||b)throw new Error("Contexts/pre-hash are not supported");return y});function g(y,f){ft("coordinate "+y,f,G,D)}function S(y){if(!(y instanceof d))throw new Error("ExtendedPoint expected")}const v=xe((y,f)=>{const{ex:b,ey:E,ez:B}=y,C=y.is0();f==null&&(f=C?wr:n.inv(B));const A=c(b*f),U=c(E*f),_=c(B*f);if(C)return{x:G,y:j};if(_!==j)throw new Error("invZ was invalid");return{x:A,y:U}}),L=xe(y=>{const{a:f,d:b}=e;if(y.is0())throw new Error("bad point: ZERO");const{ex:E,ey:B,ez:C,et:A}=y,U=c(E*E),_=c(B*B),T=c(C*C),$=c(T*T),R=c(U*f),V=c(T*c(R+_)),Y=c($+c(b*c(U*_)));if(V!==Y)throw new Error("bad point: equation left != right (1)");const Z=c(E*B),X=c(C*A);if(Z!==X)throw new Error("bad point: equation left != right (2)");return!0});class d{constructor(f,b,E,B){this.ex=f,this.ey=b,this.ez=E,this.et=B,g("x",f),g("y",b),g("z",E),g("t",B),Object.freeze(this)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static fromAffine(f){if(f instanceof d)throw new Error("extended point not allowed");const{x:b,y:E}=f||{};return g("x",b),g("y",E),new d(b,E,j,c(b*E))}static normalizeZ(f){const b=n.invertBatch(f.map(E=>E.ez));return f.map((E,B)=>E.toAffine(b[B])).map(d.fromAffine)}static msm(f,b){return br(d,l,f,b)}_setWindowSize(f){q.setWindowSize(this,f)}assertValidity(){L(this)}equals(f){S(f);const{ex:b,ey:E,ez:B}=this,{ex:C,ey:A,ez:U}=f,_=c(b*U),T=c(C*B),$=c(E*U),R=c(A*B);return _===T&&$===R}is0(){return this.equals(d.ZERO)}negate(){return new d(c(-this.ex),this.ey,this.ez,c(-this.et))}double(){const{a:f}=e,{ex:b,ey:E,ez:B}=this,C=c(b*b),A=c(E*E),U=c(yt*c(B*B)),_=c(f*C),T=b+E,$=c(c(T*T)-C-A),R=_+A,V=R-U,Y=_-A,Z=c($*V),X=c(R*Y),et=c($*Y),pt=c(V*R);return new d(Z,X,pt,et)}add(f){S(f);const{a:b,d:E}=e,{ex:B,ey:C,ez:A,et:U}=this,{ex:_,ey:T,ez:$,et:R}=f;if(b===BigInt(-1)){const re=c((C-B)*(T+_)),oe=c((C+B)*(T-_)),mt=c(oe-re);if(mt===G)return this.double();const se=c(A*yt*R),ie=c(U*yt*$),ue=ie+se,ce=oe+re,ae=ie-se,Dn=c(ue*mt),dn=c(ce*ae),hn=c(ue*ae),ln=c(mt*ce);return new d(Dn,dn,ln,hn)}const V=c(B*_),Y=c(C*T),Z=c(U*E*R),X=c(A*$),et=c((B+C)*(_+T)-V-Y),pt=X-Z,ee=X+Z,ne=c(Y-b*V),un=c(et*pt),cn=c(ee*ne),an=c(et*ne),fn=c(pt*ee);return new d(un,cn,fn,an)}subtract(f){return this.add(f.negate())}wNAF(f){return q.wNAFCached(this,f,d.normalizeZ)}multiply(f){const b=f;ft("scalar",b,j,r);const{p:E,f:B}=this.wNAF(b);return d.normalizeZ([E,B])[0]}multiplyUnsafe(f,b=d.ZERO){const E=f;return ft("scalar",E,G,r),E===G?F:this.is0()||E===j?this:q.wNAFCachedUnsafe(this,E,d.normalizeZ,b)}isSmallOrder(){return this.multiplyUnsafe(i).is0()}isTorsionFree(){return q.unsafeLadder(this,r).is0()}toAffine(f){return v(this,f)}clearCofactor(){const{h:f}=e;return f===j?this:this.multiplyUnsafe(f)}static fromHex(f,b=!1){const{d:E,a:B}=e,C=n.BYTES;f=W("pointHex",f,C),Tt("zip215",b);const A=f.slice(),U=f[C-1];A[C-1]=U&-129;const _=Et(A),T=b?D:n.ORDER;ft("pointHex.y",_,G,T);const $=c(_*_),R=c($-j),V=c(E*$-B);let{isValid:Y,value:Z}=p(R,V);if(!Y)throw new Error("Point.fromHex: invalid y coordinate");const X=(Z&j)===j,et=(U&128)!==0;if(!b&&Z===G&&et)throw new Error("Point.fromHex: x=0 and x_0=1");return et!==X&&(Z=c(-Z)),d.fromAffine({x:Z,y:_})}static fromPrivateKey(f){return O(f).point}toRawBytes(){const{x:f,y:b}=this.toAffine(),E=Nt(b,n.BYTES);return E[E.length-1]|=f&j?128:0,E}toHex(){return Ft(this.toRawBytes())}}d.BASE=new d(e.Gx,e.Gy,j,c(e.Gx*e.Gy)),d.ZERO=new d(G,j,j,G);const{BASE:m,ZERO:F}=d,q=lr(d,u*8);function z(y){return H(y,r)}function I(y){return z(Et(y))}function O(y){const f=n.BYTES;y=W("private key",y,f);const b=W("hashed private key",s(y),2*f),E=w(b.slice(0,f)),B=b.slice(f,2*f),C=I(E),A=m.multiply(C),U=A.toRawBytes();return{head:E,prefix:B,scalar:C,point:A,pointBytes:U}}function ot(y){return O(y).pointBytes}function tt(y=new Uint8Array,...f){const b=ye(...f);return I(s(h(b,W("context",y),!!o)))}function st(y,f,b={}){y=W("message",y),o&&(y=o(y));const{prefix:E,scalar:B,pointBytes:C}=O(f),A=tt(b.context,E,y),U=m.multiply(A).toRawBytes(),_=tt(b.context,U,C,y),T=z(A+_*B);ft("signature.s",T,G,r);const $=ye(U,Nt(T,n.BYTES));return W("result",$,n.BYTES*2)}const at=Er;function Ct(y,f,b,E=at){const{context:B,zip215:C}=E,A=n.BYTES;y=W("signature",y,2*A),f=W("message",f),b=W("publicKey",b,A),C!==void 0&&Tt("zip215",C),o&&(f=o(f));const U=Et(y.slice(A,2*A));let _,T,$;try{_=d.fromHex(b,C),T=d.fromHex(y.slice(0,A),C),$=m.multiplyUnsafe(U)}catch{return!1}if(!C&&_.isSmallOrder())return!1;const R=tt(B,T.toRawBytes(),_.toRawBytes(),f);return T.add(_.multiplyUnsafe(R)).subtract($).clearCofactor().equals(d.ZERO)}return m._setWindowSize(8),{CURVE:e,getPublicKey:ot,sign:st,verify:Ct,ExtendedPoint:d,utils:{getExtendedPublicKey:O,randomPrivateKey:()=>a(n.BYTES),precompute(y=8,f=d.BASE){return f._setWindowSize(y),f.multiply(BigInt(3)),f}}}}BigInt(0),BigInt(1);const kt=BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),Ue=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");BigInt(0);const xr=BigInt(1),Te=BigInt(2);BigInt(3);const Br=BigInt(5),Cr=BigInt(8);function Ar(t){const e=BigInt(10),n=BigInt(20),r=BigInt(40),o=BigInt(80),s=kt,u=t*t%s*t%s,i=J(u,Te,s)*u%s,D=J(i,xr,s)*t%s,c=J(D,Br,s)*D%s,l=J(c,e,s)*c%s,p=J(l,n,s)*l%s,w=J(p,r,s)*p%s,h=J(w,o,s)*w%s,g=J(h,o,s)*w%s,S=J(g,e,s)*c%s;return{pow_p_5_8:J(S,Te,s)*t%s,b2:u}}function mr(t){return t[0]&=248,t[31]&=127,t[31]|=64,t}function _r(t,e){const n=kt,r=H(e*e*e,n),o=H(r*r*e,n),s=Ar(t*o).pow_p_5_8;let a=H(t*r*s,n);const u=H(e*a*a,n),i=a,D=H(a*Ue,n),c=u===t,l=u===H(-t,n),p=u===H(-t*Ue,n);return c&&(a=i),(l||p)&&(a=D),ur(a,n)&&(a=H(-a,n)),{isValid:c||l,value:a}}const Sr=(()=>_e(kt,void 0,!0))(),vr=(()=>({a:BigInt(-1),d:BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),Fp:Sr,n:BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),h:Cr,Gx:BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),Gy:BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),hash:Kn,randomBytes:he,adjustScalarBytes:mr,uvRatio:_r}))(),Rt=(()=>yr(vr))(),jt="EdDSA",Zt="JWT",ut=".",Dt="base64url",Gt="utf8",xt="utf8",Vt=":",Yt="did",Jt="key",dt="base58btc",Kt="z",Wt="K36",Fe=32,Ne=32;function Xt(t){return globalThis.Buffer!=null?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t}function Le(t=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?Xt(globalThis.Buffer.allocUnsafe(t)):new Uint8Array(t)}function Oe(t,e){e||(e=t.reduce((o,s)=>o+s.length,0));const n=Le(e);let r=0;for(const o of t)n.set(o,r),r+=o.length;return Xt(n)}function Ir(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var o=0;o<t.length;o++){var s=t.charAt(o),a=s.charCodeAt(0);if(n[a]!==255)throw new TypeError(s+" is ambiguous");n[a]=o}var u=t.length,i=t.charAt(0),D=Math.log(u)/Math.log(256),c=Math.log(256)/Math.log(u);function l(h){if(h instanceof Uint8Array||(ArrayBuffer.isView(h)?h=new Uint8Array(h.buffer,h.byteOffset,h.byteLength):Array.isArray(h)&&(h=Uint8Array.from(h))),!(h instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(h.length===0)return"";for(var g=0,S=0,v=0,L=h.length;v!==L&&h[v]===0;)v++,g++;for(var d=(L-v)*c+1>>>0,m=new Uint8Array(d);v!==L;){for(var F=h[v],q=0,z=d-1;(F!==0||q<S)&&z!==-1;z--,q++)F+=256*m[z]>>>0,m[z]=F%u>>>0,F=F/u>>>0;if(F!==0)throw new Error("Non-zero carry");S=q,v++}for(var I=d-S;I!==d&&m[I]===0;)I++;for(var O=i.repeat(g);I<d;++I)O+=t.charAt(m[I]);return O}function p(h){if(typeof h!="string")throw new TypeError("Expected String");if(h.length===0)return new Uint8Array;var g=0;if(h[g]!==" "){for(var S=0,v=0;h[g]===i;)S++,g++;for(var L=(h.length-g)*D+1>>>0,d=new Uint8Array(L);h[g];){var m=n[h.charCodeAt(g)];if(m===255)return;for(var F=0,q=L-1;(m!==0||F<v)&&q!==-1;q--,F++)m+=u*d[q]>>>0,d[q]=m%256>>>0,m=m/256>>>0;if(m!==0)throw new Error("Non-zero carry");v=F,g++}if(h[g]!==" "){for(var z=L-v;z!==L&&d[z]===0;)z++;for(var I=new Uint8Array(S+(L-z)),O=S;z!==L;)I[O++]=d[z++];return I}}}function w(h){var g=p(h);if(g)return g;throw new Error(`Non-${e} character`)}return{encode:l,decodeUnsafe:p,decode:w}}var Ur=Ir,Tr=Ur;const He=t=>{if(t instanceof Uint8Array&&t.constructor.name==="Uint8Array")return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")},Fr=t=>new TextEncoder().encode(t),Nr=t=>new TextDecoder().decode(t);class Lr{constructor(e,n,r){this.name=e,this.prefix=n,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class Or{constructor(e,n,r){if(this.name=e,this.prefix=n,n.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=n.codePointAt(0),this.baseDecode=r}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return ze(this,e)}}class Hr{constructor(e){this.decoders=e}or(e){return ze(this,e)}decode(e){const n=e[0],r=this.decoders[n];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const ze=(t,e)=>new Hr({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class zr{constructor(e,n,r,o){this.name=e,this.prefix=n,this.baseEncode=r,this.baseDecode=o,this.encoder=new Lr(e,n,r),this.decoder=new Or(e,n,o)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const Bt=({name:t,prefix:e,encode:n,decode:r})=>new zr(t,e,n,r),ht=({prefix:t,name:e,alphabet:n})=>{const{encode:r,decode:o}=Tr(n,e);return Bt({prefix:t,name:e,encode:r,decode:s=>He(o(s))})},Mr=(t,e,n,r)=>{const o={};for(let c=0;c<e.length;++c)o[e[c]]=c;let s=t.length;for(;t[s-1]==="=";)--s;const a=new Uint8Array(s*n/8|0);let u=0,i=0,D=0;for(let c=0;c<s;++c){const l=o[t[c]];if(l===void 0)throw new SyntaxError(`Non-${r} character`);i=i<<n|l,u+=n,u>=8&&(u-=8,a[D++]=255&i>>u)}if(u>=n||255&i<<8-u)throw new SyntaxError("Unexpected end of data");return a},qr=(t,e,n)=>{const r=e[e.length-1]==="=",o=(1<<n)-1;let s="",a=0,u=0;for(let i=0;i<t.length;++i)for(u=u<<8|t[i],a+=8;a>n;)a-=n,s+=e[o&u>>a];if(a&&(s+=e[o&u<<n-a]),r)for(;s.length*n&7;)s+="=";return s},k=({name:t,prefix:e,bitsPerChar:n,alphabet:r})=>Bt({prefix:e,name:t,encode(o){return qr(o,r,n)},decode(o){return Mr(o,r,n,t)}}),$r=Bt({prefix:"\0",name:"identity",encode:t=>Nr(t),decode:t=>Fr(t)});var kr=Object.freeze({__proto__:null,identity:$r});const Rr=k({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});var jr=Object.freeze({__proto__:null,base2:Rr});const Zr=k({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});var Gr=Object.freeze({__proto__:null,base8:Zr});const Vr=ht({prefix:"9",name:"base10",alphabet:"0123456789"});var Yr=Object.freeze({__proto__:null,base10:Vr});const Jr=k({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),Kr=k({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var Wr=Object.freeze({__proto__:null,base16:Jr,base16upper:Kr});const Xr=k({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),Pr=k({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),Qr=k({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),to=k({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),eo=k({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),no=k({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),ro=k({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),oo=k({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),so=k({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});var io=Object.freeze({__proto__:null,base32:Xr,base32upper:Pr,base32pad:Qr,base32padupper:to,base32hex:eo,base32hexupper:no,base32hexpad:ro,base32hexpadupper:oo,base32z:so});const uo=ht({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),co=ht({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var ao=Object.freeze({__proto__:null,base36:uo,base36upper:co});const fo=ht({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),Do=ht({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var ho=Object.freeze({__proto__:null,base58btc:fo,base58flickr:Do});const lo=k({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),bo=k({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),po=k({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),wo=k({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var Eo=Object.freeze({__proto__:null,base64:lo,base64pad:bo,base64url:po,base64urlpad:wo});const Me=Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"),go=Me.reduce((t,e,n)=>(t[n]=e,t),[]),yo=Me.reduce((t,e,n)=>(t[e.codePointAt(0)]=n,t),[]);function xo(t){return t.reduce((e,n)=>(e+=go[n],e),"")}function Bo(t){const e=[];for(const n of t){const r=yo[n.codePointAt(0)];if(r===void 0)throw new Error(`Non-base256emoji character: ${n}`);e.push(r)}return new Uint8Array(e)}const Co=Bt({prefix:"\u{1F680}",name:"base256emoji",encode:xo,decode:Bo});var Ao=Object.freeze({__proto__:null,base256emoji:Co}),mo=$e,qe=128,_o=127,So=~_o,vo=Math.pow(2,31);function $e(t,e,n){e=e||[],n=n||0;for(var r=n;t>=vo;)e[n++]=t&255|qe,t/=128;for(;t&So;)e[n++]=t&255|qe,t>>>=7;return e[n]=t|0,$e.bytes=n-r+1,e}var Io=Pt,Uo=128,ke=127;function Pt(t,r){var n=0,r=r||0,o=0,s=r,a,u=t.length;do{if(s>=u)throw Pt.bytes=0,new RangeError("Could not decode varint");a=t[s++],n+=o<28?(a&ke)<<o:(a&ke)*Math.pow(2,o),o+=7}while(a>=Uo);return Pt.bytes=s-r,n}var To=Math.pow(2,7),Fo=Math.pow(2,14),No=Math.pow(2,21),Lo=Math.pow(2,28),Oo=Math.pow(2,35),Ho=Math.pow(2,42),zo=Math.pow(2,49),Mo=Math.pow(2,56),qo=Math.pow(2,63),$o=function(t){return t<To?1:t<Fo?2:t<No?3:t<Lo?4:t<Oo?5:t<Ho?6:t<zo?7:t<Mo?8:t<qo?9:10},ko={encode:mo,decode:Io,encodingLength:$o},Re=ko;const je=(t,e,n=0)=>(Re.encode(t,e,n),e),Ze=t=>Re.encodingLength(t),Qt=(t,e)=>{const n=e.byteLength,r=Ze(t),o=r+Ze(n),s=new Uint8Array(o+n);return je(t,s,0),je(n,s,r),s.set(e,o),new Ro(t,n,e,s)};class Ro{constructor(e,n,r,o){this.code=e,this.size=n,this.digest=r,this.bytes=o}}const Ge=({name:t,code:e,encode:n})=>new jo(t,e,n);class jo{constructor(e,n,r){this.name=e,this.code=n,this.encode=r}digest(e){if(e instanceof Uint8Array){const n=this.encode(e);return n instanceof Uint8Array?Qt(this.code,n):n.then(r=>Qt(this.code,r))}else throw Error("Unknown type, must be binary type")}}const Ve=t=>async e=>new Uint8Array(await crypto.subtle.digest(t,e)),Zo=Ge({name:"sha2-256",code:18,encode:Ve("SHA-256")}),Go=Ge({name:"sha2-512",code:19,encode:Ve("SHA-512")});var Vo=Object.freeze({__proto__:null,sha256:Zo,sha512:Go});const Ye=0,Yo="identity",Je=He,Jo=t=>Qt(Ye,Je(t)),Ko={code:Ye,name:Yo,encode:Je,digest:Jo};var Wo=Object.freeze({__proto__:null,identity:Ko});new TextEncoder,new TextDecoder;const Ke={...kr,...jr,...Gr,...Yr,...Wr,...io,...ao,...ho,...Eo,...Ao};({...Vo,...Wo});function We(t,e,n,r){return{name:t,prefix:e,encoder:{name:t,prefix:e,encode:n},decoder:{decode:r}}}const Xe=We("utf8","u",t=>"u"+new TextDecoder("utf8").decode(t),t=>new TextEncoder().encode(t.substring(1))),te=We("ascii","a",t=>{let e="a";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e},t=>{t=t.substring(1);const e=Le(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}),Pe={utf8:Xe,"utf-8":Xe,hex:Ke.base16,latin1:te,ascii:te,binary:te,...Ke};function ct(t,e="utf8"){const n=Pe[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("utf8"):n.encoder.encode(t).substring(1)}function rt(t,e="utf8"){const n=Pe[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?Xt(globalThis.Buffer.from(t,"utf-8")):n.decoder.decode(`${n.prefix}${t}`)}function lt(t){return (0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonParse */ .j)(ct(rt(t,Dt),Gt))}function bt(t){return ct(rt((0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonStringify */ .h)(t),Gt),Dt)}function Qe(t){const e=rt(Wt,dt),n=Kt+ct(Oe([e,t]),dt);return[Yt,Jt,n].join(Vt)}function tn(t){const[e,n,r]=t.split(Vt);if(e!==Yt||n!==Jt)throw new Error('Issuer must be a DID with method "key"');if(r.slice(0,1)!==Kt)throw new Error("Issuer must be a key in mulicodec format");const o=rt(r.slice(1),dt);if(ct(o.slice(0,2),dt)!==Wt)throw new Error('Issuer must be a public key with type "Ed25519"');const s=o.slice(2);if(s.length!==Fe)throw new Error("Issuer must be a public key with length 32 bytes");return s}function en(t){return ct(t,Dt)}function nn(t){return rt(t,Dt)}function rn(t){return rt([bt(t.header),bt(t.payload)].join(ut),xt)}function Xo(t){const e=ct(t,xt).split(ut),n=lt(e[0]),r=lt(e[1]);return{header:n,payload:r}}function on(t){return[bt(t.header),bt(t.payload),en(t.signature)].join(ut)}function sn(t){const e=t.split(ut),n=lt(e[0]),r=lt(e[1]),o=nn(e[2]),s=rt(e.slice(0,2).join(ut),xt);return{header:n,payload:r,signature:o,data:s}}function Po(t=he(Ne)){const e=Rt.getPublicKey(t);return{secretKey:Oe([t,e]),publicKey:e}}async function Qo(t,e,n,r,o=(0,_walletconnect_time__WEBPACK_IMPORTED_MODULE_0__.fromMiliseconds)(Date.now())){const s={alg:jt,typ:Zt},a=Qe(r.publicKey),u=o+n,i={iss:a,sub:t,aud:e,iat:o,exp:u},D=rn({header:s,payload:i}),c=Rt.sign(D,r.secretKey.slice(0,32));return on({header:s,payload:i,signature:c})}async function ts(t){const{header:e,payload:n,data:r,signature:o}=sn(t);if(e.alg!==jt||e.typ!==Zt)throw new Error("JWT must use EdDSA algorithm");const s=tn(n.iss);return Rt.verify(o,r,s)}
//# sourceMappingURL=index.es.js.map


/***/ },

/***/ 384365
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony export WsConnection */
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137007);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(213554);
/* harmony import */ var _walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(739031);
const v=()=>typeof WebSocket<"u"?WebSocket:typeof __webpack_require__.g<"u"&&typeof __webpack_require__.g.WebSocket<"u"?__webpack_require__.g.WebSocket:typeof window<"u"&&typeof window.WebSocket<"u"?window.WebSocket:typeof self<"u"&&typeof self.WebSocket<"u"?self.WebSocket:__webpack_require__(490796),w=()=>typeof WebSocket<"u"||typeof __webpack_require__.g<"u"&&typeof __webpack_require__.g.WebSocket<"u"||typeof window<"u"&&typeof window.WebSocket<"u"||typeof self<"u"&&typeof self.WebSocket<"u",d=r=>r.split("?")[0],h=10,b=v();class f{constructor(e){if(this.url=e,this.events=new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.registering=!1,!(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.isWsUrl)(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);this.url=e}get connected(){return typeof this.socket<"u"}get connecting(){return this.registering}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async open(e=this.url){await this.register(e)}async close(){return new Promise((e,t)=>{if(typeof this.socket>"u"){t(new Error("Connection already closed"));return}this.socket.onclose=n=>{this.onClose(n),e()},this.socket.close()})}async send(e){typeof this.socket>"u"&&(this.socket=await this.register());try{this.socket.send((0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonStringify */ .h)(e))}catch(t){this.onError(e.id,t)}}register(e=this.url){if(!(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.isWsUrl)(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);if(this.registering){const t=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=t||this.events.listenerCount("open")>=t)&&this.events.setMaxListeners(t+1),new Promise((n,s)=>{this.events.once("register_error",o=>{this.resetMaxListeners(),s(o)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.socket>"u")return s(new Error("WebSocket connection is missing or invalid"));n(this.socket)})})}return this.url=e,this.registering=!0,new Promise((t,n)=>{const s=(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.isReactNative)()?void 0:{rejectUnauthorized:!(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.isLocalhostUrl)(e)},o=new b(e,[],s);w()?o.onerror=i=>{const a=i;n(this.emitError(a.error))}:o.on("error",i=>{n(this.emitError(i))}),o.onopen=()=>{this.onOpen(o),t(o)}})}onOpen(e){e.onmessage=t=>this.onPayload(t),e.onclose=t=>this.onClose(t),this.socket=e,this.registering=!1,this.events.emit("open")}onClose(e){this.socket=void 0,this.registering=!1,this.events.emit("close",e)}onPayload(e){if(typeof e.data>"u")return;const t=typeof e.data=="string"?(0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonParse */ .j)(e.data):e.data;this.events.emit("payload",t)}onError(e,t){const n=this.parseError(t),s=n.message||n.toString(),o=(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcError)(e,s);this.events.emit("payload",o)}parseError(e,t=this.url){return (0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.parseConnectionError)(e,d(t),"WS")}resetMaxListeners(){this.events.getMaxListeners()>h&&this.events.setMaxListeners(h)}emitError(e){const t=this.parseError(new Error(e?.message||`WebSocket connection failed for host: ${d(this.url)}`));return this.events.emit("register_error",t),t}}
//# sourceMappingURL=index.es.js.map


/***/ },

/***/ 388900
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(880584);
tslib_1.__exportStar(__webpack_require__(599606), exports);
tslib_1.__exportStar(__webpack_require__(789883), exports);
tslib_1.__exportStar(__webpack_require__(662010), exports);
tslib_1.__exportStar(__webpack_require__(149026), exports);
//# sourceMappingURL=index.js.map

/***/ },

/***/ 391089
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(365606);

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBrowser = exports.isNode = exports.isReactNative = void 0;
function isReactNative() {
    return (typeof document === "undefined" &&
        typeof navigator !== "undefined" &&
        navigator.product === "ReactNative");
}
exports.isReactNative = isReactNative;
function isNode() {
    return (typeof process !== "undefined" &&
        typeof process.versions !== "undefined" &&
        typeof process.versions.node !== "undefined");
}
exports.isNode = isNode;
function isBrowser() {
    return !isReactNative() && !isNode();
}
exports.isBrowser = isBrowser;
//# sourceMappingURL=env.js.map

/***/ },

/***/ 396705
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kF: () => (/* reexport */ r)
});

// UNUSED EXPORTS: IBaseJsonRpcProvider, IEvents, IJsonRpcConnection

;// ./node_modules/@walletconnect/jsonrpc-types/dist/index.es.js
class e{}class o extends e{constructor(c){super()}}class n extends e{constructor(){super()}}class r extends n{constructor(c){super()}}
//# sourceMappingURL=index.es.js.map

;// ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/types.js

//# sourceMappingURL=types.js.map

/***/ },

/***/ 420337
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  EthereumProvider: () => (/* binding */ ethereum_provider_dist_G),
  OPTIONAL_EVENTS: () => (/* binding */ ethereum_provider_dist_P),
  OPTIONAL_METHODS: () => (/* binding */ ethereum_provider_dist_A),
  REQUIRED_EVENTS: () => (/* binding */ ethereum_provider_dist_C),
  REQUIRED_METHODS: () => (/* binding */ ethereum_provider_dist_f),
  "default": () => (/* binding */ ethereum_provider_dist_E)
});

// EXTERNAL MODULE: ./node_modules/events/events.js
var events = __webpack_require__(137007);
var events_default = /*#__PURE__*/__webpack_require__.n(events);
// EXTERNAL MODULE: ./node_modules/detect-browser/es/index.js
var es = __webpack_require__(248468);
// EXTERNAL MODULE: ./node_modules/@walletconnect/time/dist/cjs/index.js
var cjs = __webpack_require__(388900);
// EXTERNAL MODULE: ./node_modules/@walletconnect/window-getters/dist/cjs/index.js
var dist_cjs = __webpack_require__(838196);
// EXTERNAL MODULE: ./node_modules/@walletconnect/window-metadata/dist/cjs/index.js
var window_metadata_dist_cjs = __webpack_require__(842063);
// EXTERNAL MODULE: ./node_modules/ox/_esm/core/Signature.js
var Signature = __webpack_require__(207456);
// EXTERNAL MODULE: ./node_modules/ox/_esm/core/Secp256k1.js + 13 modules
var Secp256k1 = __webpack_require__(301294);
// EXTERNAL MODULE: ./node_modules/bs58/src/esm/index.js + 1 modules
var esm = __webpack_require__(148450);
// EXTERNAL MODULE: ./node_modules/@msgpack/msgpack/dist.esm/decode.mjs + 3 modules
var decode = __webpack_require__(195414);
// EXTERNAL MODULE: ./node_modules/@msgpack/msgpack/dist.esm/encode.mjs + 1 modules
var encode = __webpack_require__(284172);
// EXTERNAL MODULE: ./node_modules/@scure/base/lib/esm/index.js
var lib_esm = __webpack_require__(857324);
// EXTERNAL MODULE: ./node_modules/@walletconnect/relay-auth/dist/index.es.js
var index_es = __webpack_require__(338236);
// EXTERNAL MODULE: ./node_modules/uint8arrays/esm/src/index.js + 21 modules
var src = __webpack_require__(634479);
// EXTERNAL MODULE: ./node_modules/@walletconnect/relay-api/dist/index.es.js
var dist_index_es = __webpack_require__(443228);
// EXTERNAL MODULE: ./node_modules/blakejs/index.js
var blakejs = __webpack_require__(992493);
;// ./node_modules/@walletconnect/logger/dist/index.es.js
var b={exports:{}};function se(e){try{return JSON.stringify(e)}catch{return'"[Circular]"'}}var ie=oe;function oe(e,t,r){var s=r&&r.stringify||se,i=1;if(typeof e=="object"&&e!==null){var h=t.length+i;if(h===1)return e;var f=new Array(h);f[0]=s(e);for(var u=1;u<h;u++)f[u]=s(t[u]);return f.join(" ")}if(typeof e!="string")return e;var c=t.length;if(c===0)return e;for(var n="",o=1-i,l=-1,p=e&&e.length||0,a=0;a<p;){if(e.charCodeAt(a)===37&&a+1<p){switch(l=l>-1?l:0,e.charCodeAt(a+1)){case 100:case 102:if(o>=c||t[o]==null)break;l<a&&(n+=e.slice(l,a)),n+=Number(t[o]),l=a+2,a++;break;case 105:if(o>=c||t[o]==null)break;l<a&&(n+=e.slice(l,a)),n+=Math.floor(Number(t[o])),l=a+2,a++;break;case 79:case 111:case 106:if(o>=c||t[o]===void 0)break;l<a&&(n+=e.slice(l,a));var O=typeof t[o];if(O==="string"){n+="'"+t[o]+"'",l=a+2,a++;break}if(O==="function"){n+=t[o].name||"<anonymous>",l=a+2,a++;break}n+=s(t[o]),l=a+2,a++;break;case 115:if(o>=c)break;l<a&&(n+=e.slice(l,a)),n+=String(t[o]),l=a+2,a++;break;case 37:l<a&&(n+=e.slice(l,a)),n+="%",l=a+2,a++,o--;break}++o}++a}return l===-1?e:(l<p&&(n+=e.slice(l)),n)}const G=ie;b.exports=v;const j=we().console||{},le={mapHttpRequest:C,mapHttpResponse:C,wrapRequestSerializer:$,wrapResponseSerializer:$,wrapErrorSerializer:$,req:C,res:C,err:U,errWithCause:U};function m(e,t){return e==="silent"?1/0:t.levels.values[e]}const A=Symbol("pino.logFuncs"),P=Symbol("pino.hierarchy"),ae={error:"log",fatal:"error",warn:"error",info:"log",debug:"log",trace:"log"};function R(e,t){const r={logger:t,parent:e[P]};t[P]=r}function ue(e,t,r){const s={};t.forEach(i=>{s[i]=r[i]?r[i]:j[i]||j[ae[i]||"log"]||w}),e[A]=s}function ce(e,t){return Array.isArray(e)?e.filter(function(s){return s!=="!stdSerializers.err"}):e===!0?Object.keys(t):!1}function v(e){e=e||{},e.browser=e.browser||{};const t=e.browser.transmit;if(t&&typeof t.send!="function")throw Error("pino: transmit option must have a send function");const r=e.browser.write||j;e.browser.write&&(e.browser.asObject=!0);const s=e.serializers||{},i=ce(e.browser.serialize,s);let h=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(h=!1);const f=Object.keys(e.customLevels||{}),u=["error","fatal","warn","info","debug","trace"].concat(f);typeof r=="function"&&u.forEach(function(g){r[g]=r}),(e.enabled===!1||e.browser.disabled)&&(e.level="silent");const c=e.level||"info",n=Object.create(r);n.log||(n.log=w),ue(n,u,r),R({},n),Object.defineProperty(n,"levelVal",{get:l}),Object.defineProperty(n,"level",{get:p,set:a});const o={transmit:t,serialize:i,asObject:e.browser.asObject,asObjectBindingsOnly:e.browser.asObjectBindingsOnly,formatters:e.browser.formatters,levels:u,timestamp:ye(e),messageKey:e.messageKey||"msg",onChild:e.onChild||w};n.levels=he(e),n.level=c,n.isLevelEnabled=function(g){return this.levels.values[g]?this.levels.values[g]>=this.levels.values[this.level]:!1},n.setMaxListeners=n.getMaxListeners=n.emit=n.addListener=n.on=n.prependListener=n.once=n.prependOnceListener=n.removeListener=n.removeAllListeners=n.listeners=n.listenerCount=n.eventNames=n.write=n.flush=w,n.serializers=s,n._serialize=i,n._stdErrSerialize=h,n.child=function(...g){return O.call(this,o,...g)},t&&(n._logEvent=N());function l(){return m(this.level,this)}function p(){return this._level}function a(g){if(g!=="silent"&&!this.levels.values[g])throw Error("unknown level "+g);this._level=g,L(this,o,n,"error"),L(this,o,n,"fatal"),L(this,o,n,"warn"),L(this,o,n,"info"),L(this,o,n,"debug"),L(this,o,n,"trace"),f.forEach(d=>{L(this,o,n,d)})}function O(g,d,z){if(!d)throw new Error("missing bindings for child Pino");z=z||{},i&&d.serializers&&(z.serializers=d.serializers);const F=z.serializers;if(i&&F){var E=Object.assign({},s,F),M=e.browser.serialize===!0?Object.keys(E):i;delete d.serializers,V([d],M,E,this._stdErrSerialize)}function D(k){this._childLevel=(k._childLevel|0)+1,this.bindings=d,E&&(this.serializers=E,this._serialize=M),t&&(this._logEvent=N([].concat(k._logEvent.bindings,d)))}D.prototype=this;const _=new D(this);return R(this,_),_.child=function(...k){return O.call(this,g,...k)},_.level=z.level||this.level,g.onChild(_),_}return n}function he(e){const t=e.customLevels||{},r=Object.assign({},v.levels.values,t),s=Object.assign({},v.levels.labels,fe(t));return{values:r,labels:s}}function fe(e){const t={};return Object.keys(e).forEach(function(r){t[e[r]]=r}),t}v.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},v.stdSerializers=le,v.stdTimeFunctions=Object.assign({},{nullTime:X,epochTime:Y,unixTime:pe,isoTime:Le});function ge(e){const t=[];e.bindings&&t.push(e.bindings);let r=e[P];for(;r.parent;)r=r.parent,r.logger.bindings&&t.push(r.logger.bindings);return t.reverse()}function L(e,t,r,s){if(Object.defineProperty(e,s,{value:m(e.level,r)>m(s,r)?w:r[A][s],writable:!0,enumerable:!0,configurable:!0}),e[s]===w){if(!t.transmit)return;const h=t.transmit.level||e.level,f=m(h,r);if(m(s,r)<f)return}e[s]=de(e,t,r,s);const i=ge(e);i.length!==0&&(e[s]=be(i,e[s]))}function be(e,t){return function(){return t.apply(this,[...e,...arguments])}}function de(e,t,r,s){return function(i){return function(){const f=t.timestamp(),u=new Array(arguments.length),c=Object.getPrototypeOf&&Object.getPrototypeOf(this)===j?j:this;for(var n=0;n<u.length;n++)u[n]=arguments[n];var o=!1;if(t.serialize&&(V(u,this._serialize,this.serializers,this._stdErrSerialize),o=!0),t.asObject||t.formatters?i.call(c,...ve(this,s,u,f,t)):i.apply(c,u),t.transmit){const l=t.transmit.level||e._level,p=m(l,r),a=m(s,r);if(a<p)return;me(this,{ts:f,methodLevel:s,methodValue:a,transmitLevel:l,transmitValue:r.levels.values[t.transmit.level||e._level],send:t.transmit.send,val:m(e._level,r)},u,o)}}}(e[A][s])}function ve(e,t,r,s,i){const{level:h,log:f=l=>l}=i.formatters||{},u=r.slice();let c=u[0];const n={};let o=(e._childLevel|0)+1;if(o<1&&(o=1),s&&(n.time=s),h){const l=h(t,e.levels.values[t]);Object.assign(n,l)}else n.level=e.levels.values[t];if(i.asObjectBindingsOnly){if(c!==null&&typeof c=="object")for(;o--&&typeof u[0]=="object";)Object.assign(n,u.shift());return[f(n),...u]}else{if(c!==null&&typeof c=="object"){for(;o--&&typeof u[0]=="object";)Object.assign(n,u.shift());c=u.length?G(u.shift(),u):void 0}else typeof c=="string"&&(c=G(u.shift(),u));return c!==void 0&&(n[i.messageKey]=c),[f(n)]}}function V(e,t,r,s){for(const i in e)if(s&&e[i]instanceof Error)e[i]=v.stdSerializers.err(e[i]);else if(typeof e[i]=="object"&&!Array.isArray(e[i])&&t)for(const h in e[i])t.indexOf(h)>-1&&h in r&&(e[i][h]=r[h](e[i][h]))}function me(e,t,r,s=!1){const i=t.send,h=t.ts,f=t.methodLevel,u=t.methodValue,c=t.val,n=e._logEvent.bindings;s||V(r,e._serialize||Object.keys(e.serializers),e.serializers,e._stdErrSerialize===void 0?!0:e._stdErrSerialize),e._logEvent.ts=h,e._logEvent.messages=r.filter(function(o){return n.indexOf(o)===-1}),e._logEvent.level.label=f,e._logEvent.level.value=u,i(f,e._logEvent,c),e._logEvent=N(n)}function N(e){return{ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function U(e){const t={type:e.constructor.name,msg:e.message,stack:e.stack};for(const r in e)t[r]===void 0&&(t[r]=e[r]);return t}function ye(e){return typeof e.timestamp=="function"?e.timestamp:e.timestamp===!1?X:Y}function C(){return{}}function $(e){return e}function w(){}function X(){return!1}function Y(){return Date.now()}function pe(){return Math.round(Date.now()/1e3)}function Le(){return new Date(Date.now()).toISOString()}function we(){function e(t){return typeof t<"u"&&t}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return e(self)||e(window)||e(this)||{}}}b.exports.default=v;var Oe=b.exports.pino=v;const Z={level:"info"},S="custom_context",I=1e3*1024;var ze=Object.defineProperty,_e=(e,t,r)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t,r)=>_e(e,typeof t!="symbol"?t+"":t,r);class je{constructor(t){y(this,"nodeValue"),y(this,"sizeInBytes"),y(this,"next"),this.nodeValue=t,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class q{constructor(t){y(this,"lengthInNodes"),y(this,"sizeInBytes"),y(this,"head"),y(this,"tail"),y(this,"maxSizeInBytes"),this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=t,this.sizeInBytes=0}append(t){const r=new je(t);if(r.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${t} with size ${r.size}`);for(;this.size+r.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=r),this.tail=r):(this.head=r,this.tail=r),this.lengthInNodes++,this.sizeInBytes+=r.size}shift(){if(!this.head)return;const t=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=t.size}toArray(){const t=[];let r=this.head;for(;r!==null;)t.push(r.value),r=r.next;return t}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let t=this.head;return{next:()=>{if(!t)return{done:!0,value:null};const r=t.value;return t=t.next,{done:!1,value:r}}}}}const Se=e=>JSON.stringify(e,(t,r)=>typeof r=="bigint"?r.toString()+"n":r);function K(e){return typeof e=="string"?e:Se(e)||""}var Ee=Object.defineProperty,ke=(e,t,r)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t,r)=>ke(e,typeof t!="symbol"?t+"":t,r);class J{constructor(t,r=I){T(this,"logs"),T(this,"level"),T(this,"levelValue"),T(this,"MAX_LOG_SIZE_IN_BYTES"),this.level=t??"error",this.levelValue=b.exports.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=r,this.logs=new q(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(t,r){r===b.exports.levels.values.error?console.error(t):r===b.exports.levels.values.warn?console.warn(t):r===b.exports.levels.values.debug?console.debug(t):r===b.exports.levels.values.trace?console.trace(t):console.log(t)}appendToLogs(t){this.logs.append(K({timestamp:new Date().toISOString(),log:t}));const r=typeof t=="string"?JSON.parse(t).level:t.level;r>=this.levelValue&&this.forwardToConsole(t,r)}getLogs(){return this.logs}clearLogs(){this.logs=new q(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(t){const r=this.getLogArray();return r.push(K({extraMetadata:t})),new Blob(r,{type:"application/json"})}}var Ce=Object.defineProperty,Ie=(e,t,r)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Te=(e,t,r)=>Ie(e,typeof t!="symbol"?t+"":t,r);class xe{constructor(t,r=I){Te(this,"baseChunkLogger"),this.baseChunkLogger=new J(t,r)}write(t){this.baseChunkLogger.appendToLogs(t)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(t){return this.baseChunkLogger.logsToBlob(t)}downloadLogsBlobInBrowser(t){const r=URL.createObjectURL(this.logsToBlob(t)),s=document.createElement("a");s.href=r,s.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(r)}}var Be=Object.defineProperty,Ae=(e,t,r)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Pe=(e,t,r)=>Ae(e,typeof t!="symbol"?t+"":t,r);class Ve{constructor(t,r=I){Pe(this,"baseChunkLogger"),this.baseChunkLogger=new J(t,r)}write(t){this.baseChunkLogger.appendToLogs(t)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(t){return this.baseChunkLogger.logsToBlob(t)}}var Ne=Object.defineProperty,$e=Object.defineProperties,Fe=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))Me.call(t,r)&&W(e,r,t[r]);if(H)for(var r of H(t))De.call(t,r)&&W(e,r,t[r]);return e},B=(e,t)=>$e(e,Fe(t));function Ge(e){return B(x({},e),{level:e?.level||Z.level})}function Q(e,t,r=S){return e[r]=t,e}function ee(e,t=S){return e[t]||""}function te(e,t,r=S){const s=ee(e,r);return s.trim()?`${s}/${t}`:t}function index_es_Re(e,t,r=S){const s=te(e,t,r),i=e.child({context:s});return Q(i,s,r)}function index_es_re(e){var t,r;const s=new xe((t=e.opts)==null?void 0:t.level,e.maxSizeInBytes);return{logger:b.exports(B(x({},e.opts),{level:"trace",browser:B(x({},(r=e.opts)==null?void 0:r.browser),{write:i=>s.write(i)})})),chunkLoggerController:s}}function ne(e){var t;const r=new Ve((t=e.opts)==null?void 0:t.level,e.maxSizeInBytes);return{logger:b.exports(B(x({},e.opts),{level:"trace"}),r),chunkLoggerController:r}}function Ue(e){return typeof e.loggerOverride<"u"&&typeof e.loggerOverride!="string"?{logger:e.loggerOverride,chunkLoggerController:null}:typeof window<"u"?index_es_re(e):ne(e)}
//# sourceMappingURL=index.es.js.map

;// ./node_modules/@walletconnect/utils/dist/index.js
/* provided dependency */ var process = __webpack_require__(365606);
const dist_Ae=":";function Je(t){const[e,n]=t.split(dist_Ae);return{namespace:e,reference:n}}function or(t){const{namespace:e,reference:n}=t;return[e,n].join(dist_Ae)}function Qe(t){const[e,n,r]=t.split(dist_Ae);return{namespace:e,reference:n,address:r}}function sr(t){const{namespace:e,reference:n,address:r}=t;return[e,n,r].join(dist_Ae)}function tn(t,e){const n=[];return t.forEach(r=>{const o=e(r);n.includes(o)||n.push(o)}),n}function ir(t){const{address:e}=Qe(t);return e}function cr(t){const{namespace:e,reference:n}=Qe(t);return or({namespace:e,reference:n})}function Js(t,e){const{namespace:n,reference:r}=Je(e);return sr({namespace:n,reference:r,address:t})}function Qs(t){return tn(t,ir)}function fr(t){return tn(t,cr)}function ti(t,e=[]){const n=[];return Object.keys(t).forEach(r=>{if(e.length&&!e.includes(r))return;const o=t[r];n.push(...o.accounts)}),n}function ei(t,e=[]){const n=[];return Object.keys(t).forEach(r=>{if(e.length&&!e.includes(r))return;const o=t[r];n.push(...fr(o.accounts))}),n}function ni(t,e=[]){const n=[];return Object.keys(t).forEach(r=>{if(e.length&&!e.includes(r))return;const o=t[r];n.push(...dist_Se(r,o))}),n}function dist_Se(t,e){return t.includes(":")?[t]:e.chains||[]}var ri=Object.defineProperty,oi=Object.defineProperties,si=Object.getOwnPropertyDescriptors,ar=Object.getOwnPropertySymbols,ii=Object.prototype.hasOwnProperty,ci=Object.prototype.propertyIsEnumerable,en=(t,e,n)=>e in t?ri(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ur=(t,e)=>{for(var n in e||(e={}))ii.call(e,n)&&en(t,n,e[n]);if(ar)for(var n of ar(e))ci.call(e,n)&&en(t,n,e[n]);return t},fi=(t,e)=>oi(t,si(e)),lr=(t,e,n)=>en(t,typeof e!="symbol"?e+"":e,n);const dr="ReactNative",et={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},dist_Oe=" ",ai=":",hr="/",nn=2,ui=1e3,pr="js";function rn(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function It(){return!(0,dist_cjs.getDocument)()&&!!(0,dist_cjs.getNavigator)()&&navigator.product===dr}function li(){return It()&&typeof __webpack_require__.g<"u"&&typeof(__webpack_require__.g==null?void 0:__webpack_require__.g.Platform)<"u"&&(__webpack_require__.g==null?void 0:__webpack_require__.g.Platform.OS)==="android"}function di(){return It()&&typeof __webpack_require__.g<"u"&&typeof(__webpack_require__.g==null?void 0:__webpack_require__.g.Platform)<"u"&&(__webpack_require__.g==null?void 0:__webpack_require__.g.Platform.OS)==="ios"}function Wt(){return!rn()&&!!(0,dist_cjs.getNavigator)()&&!!(0,dist_cjs.getDocument)()}function Vt(){return It()?et.reactNative:rn()?et.node:Wt()?et.browser:et.unknown}function hi(){var t;try{return It()&&typeof __webpack_require__.g<"u"&&typeof(__webpack_require__.g==null?void 0:__webpack_require__.g.Application)<"u"?(t=__webpack_require__.g.Application)==null?void 0:t.applicationId:void 0}catch{return}}function gr(t,e){const n=new URLSearchParams(t);return Object.entries(e).sort(([r],[o])=>r.localeCompare(o)).forEach(([r,o])=>{o!=null&&n.set(r,String(o))}),n.toString()}function pi(t){var e,n;const r=br();try{return t!=null&&t.url&&r.url&&new URL(t.url).host!==new URL(r.url).host&&(console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${r.url}. This is probably unintended and can lead to issues.`),t.url=r.url),(e=t?.icons)!=null&&e.length&&t.icons.length>0&&(t.icons=t.icons.filter(o=>o!=="")),fi(ur(ur({},r),t),{url:t?.url||r.url,name:t?.name||r.name,description:t?.description||r.description,icons:(n=t?.icons)!=null&&n.length&&t.icons.length>0?t.icons:r.icons})}catch(o){return console.warn("Error populating app metadata",o),t||r}}function br(){return (0,window_metadata_dist_cjs/* getWindowMetadata */.g)()||{name:"",description:"",url:"",icons:[""]}}function gi(t,e){var n;const r=Vt(),o={protocol:t,version:e,env:r};return r==="browser"&&(o.host=((n=rr())==null?void 0:n.host)||"unknown"),o}function yr(){if(Vt()===et.reactNative&&typeof __webpack_require__.g<"u"&&typeof(__webpack_require__.g==null?void 0:__webpack_require__.g.Platform)<"u"){const{OS:n,Version:r}=__webpack_require__.g.Platform;return[n,r].join("-")}const t=(0,es/* detect */.o0)();if(t===null)return"unknown";const e=t.os?t.os.replace(" ","").toLowerCase():"unknown";return t.type==="browser"?[e,t.name,t.version].join("-"):[e,t.version].join("-")}function mr(){var t;const e=Vt();return e===et.browser?[e,((t=(0,dist_cjs.getLocation)())==null?void 0:t.host)||"unknown"].join(":"):e}function wr(t,e,n){const r=yr(),o=mr();return[[t,e].join("-"),[pr,n].join("-"),r,o].join("/")}function bi({protocol:t,version:e,relayUrl:n,sdkVersion:r,auth:o,projectId:s,useOnCloseEvent:i,bundleId:c,packageName:f}){const u=n.split("?"),a=wr(t,e,r),l={auth:o,ua:a,projectId:s,useOnCloseEvent:i||void 0,packageName:f||void 0,bundleId:c||void 0},d=gr(u[1]||"",l);return u[0]+"?"+d}function yi(t){let e=(t.match(/^[^:]+(?=:\/\/)/gi)||[])[0];const n=typeof e<"u"?t.split("://")[1]:t;return e=e==="wss"?"https":"http",[e,n].join("://")}function mi(t,e,n){if(!t[e]||typeof t[e]!==n)throw new Error(`Missing or invalid "${e}" param`)}function vr(t,e=nn){return xr(t.split(hr),e)}function wi(t){return vr(t).join(dist_Oe)}function At(t,e){return t.filter(n=>e.includes(n)).length===t.length}function xr(t,e=nn){return t.slice(Math.max(t.length-e,0))}function vi(t){return Object.fromEntries(t.entries())}function xi(t){return new Map(Object.entries(t))}function Ei(t,e){const n={};return Object.keys(t).forEach(r=>{n[r]=e(t[r])}),n}const Bi=t=>t;function Er(t){return t.trim().replace(/^\w/,e=>e.toUpperCase())}function Ii(t){return t.split(dist_Oe).map(e=>Er(e)).join(dist_Oe)}function Ai(t=cjs.FIVE_MINUTES,e){const n=(0,cjs.toMiliseconds)(t||cjs.FIVE_MINUTES);let r,o,s,i;return{resolve:c=>{s&&r&&(clearTimeout(s),r(c),i=Promise.resolve(c))},reject:c=>{s&&o&&(clearTimeout(s),o(c))},done:()=>new Promise((c,f)=>{if(i)return c(i);s=setTimeout(()=>{const u=new Error(e);i=Promise.reject(u),f(u)},n),r=c,o=f})}}function dist_Si(t,e,n){return new Promise(async(r,o)=>{const s=setTimeout(()=>o(new Error(n)),e);try{const i=await t;r(i)}catch(i){o(i)}clearTimeout(s)})}function on(t,e){if(typeof e=="string"&&e.startsWith(`${t}:`))return e;if(t.toLowerCase()==="topic"){if(typeof e!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${e}`}else if(t.toLowerCase()==="id"){if(typeof e!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${e}`}throw new Error(`Unknown expirer target type: ${t}`)}function Oi(t){return on("topic",t)}function Ni(t){return on("id",t)}function dist_Ui(t){const[e,n]=t.split(":"),r={id:void 0,topic:void 0};if(e==="topic"&&typeof n=="string")r.topic=n;else if(e==="id"&&Number.isInteger(Number(n)))r.id=Number(n);else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${n}`);return r}function _i(t,e){return (0,cjs.fromMiliseconds)((e||Date.now())+(0,cjs.toMiliseconds)(t))}function Ri(t){return Date.now()>=(0,cjs.toMiliseconds)(t)}function $i(t,e){return`${t}${e?`:${e}`:""}`}function ut(t=[],e=[]){return[...new Set([...t,...e])]}async function Ti({id:t,topic:e,wcDeepLink:n}){var r;try{if(!n)return;const o=typeof n=="string"?JSON.parse(n):n,s=o?.href;if(typeof s!="string")return;const i=Br(s,t,e),c=Vt();if(c===et.browser){if(!((r=(0,dist_cjs.getDocument)())!=null&&r.hasFocus())){console.warn("Document does not have focus, skipping deeplink.");return}Ir(i)}else c===et.reactNative&&typeof(__webpack_require__.g==null?void 0:__webpack_require__.g.Linking)<"u"&&await __webpack_require__.g.Linking.openURL(i)}catch(o){console.error(o)}}function Br(t,e,n){const r=`requestId=${e}&sessionTopic=${n}`;t.endsWith("/")&&(t=t.slice(0,-1));let o=`${t}`;if(t.startsWith("https://t.me")){const s=t.includes("?")?"&startapp=":"?startapp=";o=`${o}${s}${Or(r,!0)}`}else o=`${o}/wc?${r}`;return o}function Ir(t){let e="_self";Sr()?e="_top":(Ar()||t.startsWith("https://")||t.startsWith("http://"))&&(e="_blank"),window.open(t,e,"noreferrer noopener")}async function Ci(t,e){let n="";try{if(Wt()&&(n=localStorage.getItem(e),n))return n;n=await t.getItem(e)}catch(r){console.error(r)}return n}function sn(t,e){return t.filter(n=>e.includes(n))}function ji(t,e){if(!t.includes(e))return null;const n=t.split(/([&,?,=])/),r=n.indexOf(e);return n[r+2]}function Li(){return typeof crypto<"u"&&crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}function ki(){return typeof process<"u"&&process.env.IS_VITEST==="true"}function Ar(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)}function Sr(){try{return window.self!==window.top}catch{return!1}}function Or(t,e=!1){const n=Buffer.from(t).toString("base64");return e?n.replace(/[=]/g,""):n}function cn(t){return Buffer.from(t,"base64").toString("utf-8")}function Pi(t){return new Promise(e=>setTimeout(e,t))}class Hi{constructor({limit:e}){lr(this,"limit"),lr(this,"set"),this.limit=e,this.set=new Set}add(e){if(!this.set.has(e)){if(this.set.size>=this.limit){const n=this.set.values().next().value;n&&this.set.delete(n)}this.set.add(e)}}has(e){return this.set.has(e)}}const dist_Ne=BigInt(2**32-1),Nr=BigInt(32);function Ur(t,e=!1){return e?{h:Number(t&dist_Ne),l:Number(t>>Nr&dist_Ne)}:{h:Number(t>>Nr&dist_Ne)|0,l:Number(t&dist_Ne)|0}}function _r(t,e=!1){const n=t.length;let r=new Uint32Array(n),o=new Uint32Array(n);for(let s=0;s<n;s++){const{h:i,l:c}=Ur(t[s],e);[r[s],o[s]]=[i,c]}return[r,o]}const Rr=(t,e,n)=>t>>>n,$r=(t,e,n)=>t<<32-n|e>>>n,St=(t,e,n)=>t>>>n|e<<32-n,Ot=(t,e,n)=>t<<32-n|e>>>n,dist_de=(t,e,n)=>t<<64-n|e>>>n-32,dist_he=(t,e,n)=>t>>>n-32|e<<64-n,Di=(t,e)=>e,Vi=(t,e)=>t,Mi=(t,e,n)=>t<<n|e>>>32-n,Ki=(t,e,n)=>e<<n|t>>>32-n,qi=(t,e,n)=>e<<n-32|t>>>64-n,Fi=(t,e,n)=>t<<n-32|e>>>64-n;function dt(t,e,n,r){const o=(e>>>0)+(r>>>0);return{h:t+n+(o/2**32|0)|0,l:o|0}}const fn=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),an=(t,e,n,r)=>e+n+r+(t/2**32|0)|0,Zi=(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),Gi=(t,e,n,r,o)=>e+n+r+o+(t/2**32|0)|0,zi=(t,e,n,r,o)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(o>>>0),Yi=(t,e,n,r,o,s)=>e+n+r+o+s+(t/2**32|0)|0,Xt=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;function dist_Ue(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function mt(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function ht(t,...e){if(!dist_Ue(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function dist_e(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.createHasher");mt(t.outputLen),mt(t.blockLen)}function Nt(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function un(t,e){ht(t);const n=e.outputLen;if(t.length<n)throw new Error("digestInto() expects output buffer of length at least "+n)}function dist_pe(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function lt(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}function ln(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function bt(t,e){return t<<32-e|t>>>e}const Tr=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function Cr(t){return t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255}const wt=Tr?t=>t:t=>Cr(t);function Wi(t){for(let e=0;e<t.length;e++)t[e]=Cr(t[e]);return t}const Ut=Tr?t=>t:Wi,jr=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",Xi=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Jt(t){if(ht(t),jr)return t.toHex();let e="";for(let n=0;n<t.length;n++)e+=Xi[t[n]];return e}const vt={_0:48,_9:57,A:65,F:70,a:97,f:102};function Lr(t){if(t>=vt._0&&t<=vt._9)return t-vt._0;if(t>=vt.A&&t<=vt.F)return t-(vt.A-10);if(t>=vt.a&&t<=vt.f)return t-(vt.a-10)}function dist_Re(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);if(jr)return Uint8Array.fromHex(t);const e=t.length,n=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const r=new Uint8Array(n);for(let o=0,s=0;o<n;o++,s+=2){const i=Lr(t.charCodeAt(s)),c=Lr(t.charCodeAt(s+1));if(i===void 0||c===void 0){const f=t[s]+t[s+1];throw new Error('hex string expected, got non-hex character "'+f+'" at index '+s)}r[o]=i*16+c}return r}function kr(t){if(typeof t!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}function pt(t){return typeof t=="string"&&(t=kr(t)),ht(t),t}function _t(...t){let e=0;for(let r=0;r<t.length;r++){const o=t[r];ht(o),e+=o.length}const n=new Uint8Array(e);for(let r=0,o=0;r<t.length;r++){const s=t[r];n.set(s,o),o+=s.length}return n}class dist_$e{}function dist_ge(t){const e=r=>t().update(pt(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function Ji(t){const e=(r,o)=>t(o).update(pt(r)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=r=>t(r),e}function Mt(t=32){if(Xt&&typeof Xt.getRandomValues=="function")return Xt.getRandomValues(new Uint8Array(t));if(Xt&&typeof Xt.randomBytes=="function")return Uint8Array.from(Xt.randomBytes(t));throw new Error("crypto.getRandomValues must be defined")}const Qi=BigInt(0),dist_be=BigInt(1),tc=BigInt(2),ec=BigInt(7),nc=BigInt(256),rc=BigInt(113),Pr=[],Hr=[],Dr=[];for(let t=0,e=dist_be,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],Pr.push(2*(5*r+n)),Hr.push((t+1)*(t+2)/2%64);let o=Qi;for(let s=0;s<7;s++)e=(e<<dist_be^(e>>ec)*rc)%nc,e&tc&&(o^=dist_be<<(dist_be<<BigInt(s))-dist_be);Dr.push(o)}const Vr=_r(Dr,!0),oc=Vr[0],sc=Vr[1],Mr=(t,e,n)=>n>32?qi(t,e,n):Mi(t,e,n),Kr=(t,e,n)=>n>32?Fi(t,e,n):Ki(t,e,n);function ic(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let i=0;i<10;i++)n[i]=t[i]^t[i+10]^t[i+20]^t[i+30]^t[i+40];for(let i=0;i<10;i+=2){const c=(i+8)%10,f=(i+2)%10,u=n[f],a=n[f+1],l=Mr(u,a,1)^n[c],d=Kr(u,a,1)^n[c+1];for(let h=0;h<50;h+=10)t[i+h]^=l,t[i+h+1]^=d}let o=t[2],s=t[3];for(let i=0;i<24;i++){const c=Hr[i],f=Mr(o,s,c),u=Kr(o,s,c),a=Pr[i];o=t[a],s=t[a+1],t[a]=f,t[a+1]=u}for(let i=0;i<50;i+=10){for(let c=0;c<10;c++)n[c]=t[i+c];for(let c=0;c<10;c++)t[i+c]^=~n[(c+2)%10]&n[(c+4)%10]}t[0]^=oc[r],t[1]^=sc[r]}lt(n)}class Jn extends dist_$e{constructor(e,n,r,o=!1,s=24){if(super(),this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,this.enableXOF=!1,this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=o,this.rounds=s,mt(r),!(0<e&&e<200))throw new Error("only keccak-f1600 function is supported");this.state=new Uint8Array(200),this.state32=dist_pe(this.state)}clone(){return this._cloneInto()}keccak(){Ut(this.state32),ic(this.state32,this.rounds),Ut(this.state32),this.posOut=0,this.pos=0}update(e){Nt(this),e=pt(e),ht(e);const{blockLen:n,state:r}=this,o=e.length;for(let s=0;s<o;){const i=Math.min(n-this.pos,o-s);for(let c=0;c<i;c++)r[this.pos++]^=e[s++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:o}=this;e[r]^=n,(n&128)!==0&&r===o-1&&this.keccak(),e[o-1]^=128,this.keccak()}writeInto(e){Nt(this,!1),ht(e),this.finish();const n=this.state,{blockLen:r}=this;for(let o=0,s=e.length;o<s;){this.posOut>=r&&this.keccak();const i=Math.min(r-this.posOut,s-o);e.set(n.subarray(this.posOut,this.posOut+i),o),this.posOut+=i,o+=i}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return mt(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(un(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,lt(this.state)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:o,rounds:s,enableXOF:i}=this;return e||(e=new Jn(n,r,o,i,s)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=s,e.suffix=r,e.outputLen=o,e.enableXOF=i,e.destroyed=this.destroyed,e}}const cc=(t,e,n)=>dist_ge(()=>new Jn(e,t,n)),fc=cc(1,136,256/8);function ac(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),c=Number(n&s),f=r?4:0,u=r?0:4;t.setUint32(e+f,i,r),t.setUint32(e+u,c,r)}function uc(t,e,n){return t&e^~t&n}function lc(t,e,n){return t&e^t&n^e&n}class qr extends dist_$e{constructor(e,n,r,o){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=o,this.buffer=new Uint8Array(e),this.view=ln(this.buffer)}update(e){Nt(this),e=pt(e),ht(e);const{view:n,buffer:r,blockLen:o}=this,s=e.length;for(let i=0;i<s;){const c=Math.min(o-this.pos,s-i);if(c===o){const f=ln(e);for(;o<=s-i;i+=o)this.process(f,i);continue}r.set(e.subarray(i,i+c),this.pos),this.pos+=c,i+=c,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){Nt(this),un(e,this),this.finished=!0;const{buffer:n,view:r,blockLen:o,isLE:s}=this;let{pos:i}=this;n[i++]=128,lt(this.buffer.subarray(i)),this.padOffset>o-i&&(this.process(r,0),i=0);for(let l=i;l<o;l++)n[l]=0;ac(r,o-8,BigInt(this.length*8),s),this.process(r,0);const c=ln(e),f=this.outputLen;if(f%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const u=f/4,a=this.get();if(u>a.length)throw new Error("_sha2: outputLen bigger than state");for(let l=0;l<u;l++)c.setUint32(4*l,a[l],s)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:r,length:o,finished:s,destroyed:i,pos:c}=this;return e.destroyed=i,e.finished=s,e.length=o,e.pos=c,o%n&&e.buffer.set(r),e}clone(){return this._cloneInto()}}const Rt=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),dist_X=Uint32Array.from([3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]),dist_J=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),dc=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),$t=new Uint32Array(64);class hc extends qr{constructor(e=32){super(64,e,8,!1),this.A=Rt[0]|0,this.B=Rt[1]|0,this.C=Rt[2]|0,this.D=Rt[3]|0,this.E=Rt[4]|0,this.F=Rt[5]|0,this.G=Rt[6]|0,this.H=Rt[7]|0}get(){const{A:e,B:n,C:r,D:o,E:s,F:i,G:c,H:f}=this;return[e,n,r,o,s,i,c,f]}set(e,n,r,o,s,i,c,f){this.A=e|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=s|0,this.F=i|0,this.G=c|0,this.H=f|0}process(e,n){for(let l=0;l<16;l++,n+=4)$t[l]=e.getUint32(n,!1);for(let l=16;l<64;l++){const d=$t[l-15],h=$t[l-2],y=bt(d,7)^bt(d,18)^d>>>3,m=bt(h,17)^bt(h,19)^h>>>10;$t[l]=m+$t[l-7]+y+$t[l-16]|0}let{A:r,B:o,C:s,D:i,E:c,F:f,G:u,H:a}=this;for(let l=0;l<64;l++){const d=bt(c,6)^bt(c,11)^bt(c,25),h=a+d+uc(c,f,u)+dc[l]+$t[l]|0,m=(bt(r,2)^bt(r,13)^bt(r,22))+lc(r,o,s)|0;a=u,u=f,f=c,c=i+h|0,i=s,s=o,o=r,r=h+m|0}r=r+this.A|0,o=o+this.B|0,s=s+this.C|0,i=i+this.D|0,c=c+this.E|0,f=f+this.F|0,u=u+this.G|0,a=a+this.H|0,this.set(r,o,s,i,c,f,u,a)}roundClean(){lt($t)}destroy(){this.set(0,0,0,0,0,0,0,0),lt(this.buffer)}}const Fr=_r(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),pc=Fr[0],gc=Fr[1],Tt=new Uint32Array(80),Ct=new Uint32Array(80);class dn extends qr{constructor(e=64){super(128,e,16,!1),this.Ah=dist_J[0]|0,this.Al=dist_J[1]|0,this.Bh=dist_J[2]|0,this.Bl=dist_J[3]|0,this.Ch=dist_J[4]|0,this.Cl=dist_J[5]|0,this.Dh=dist_J[6]|0,this.Dl=dist_J[7]|0,this.Eh=dist_J[8]|0,this.El=dist_J[9]|0,this.Fh=dist_J[10]|0,this.Fl=dist_J[11]|0,this.Gh=dist_J[12]|0,this.Gl=dist_J[13]|0,this.Hh=dist_J[14]|0,this.Hl=dist_J[15]|0}get(){const{Ah:e,Al:n,Bh:r,Bl:o,Ch:s,Cl:i,Dh:c,Dl:f,Eh:u,El:a,Fh:l,Fl:d,Gh:h,Gl:y,Hh:m,Hl:w}=this;return[e,n,r,o,s,i,c,f,u,a,l,d,h,y,m,w]}set(e,n,r,o,s,i,c,f,u,a,l,d,h,y,m,w){this.Ah=e|0,this.Al=n|0,this.Bh=r|0,this.Bl=o|0,this.Ch=s|0,this.Cl=i|0,this.Dh=c|0,this.Dl=f|0,this.Eh=u|0,this.El=a|0,this.Fh=l|0,this.Fl=d|0,this.Gh=h|0,this.Gl=y|0,this.Hh=m|0,this.Hl=w|0}process(e,n){for(let R=0;R<16;R++,n+=4)Tt[R]=e.getUint32(n),Ct[R]=e.getUint32(n+=4);for(let R=16;R<80;R++){const Z=Tt[R-15]|0,H=Ct[R-15]|0,j=St(Z,H,1)^St(Z,H,8)^Rr(Z,H,7),L=Ot(Z,H,1)^Ot(Z,H,8)^$r(Z,H,7),k=Tt[R-2]|0,O=Ct[R-2]|0,T=St(k,O,19)^dist_de(k,O,61)^Rr(k,O,6),C=Ot(k,O,19)^dist_he(k,O,61)^$r(k,O,6),_=Zi(L,C,Ct[R-7],Ct[R-16]),p=Gi(_,j,T,Tt[R-7],Tt[R-16]);Tt[R]=p|0,Ct[R]=_|0}let{Ah:r,Al:o,Bh:s,Bl:i,Ch:c,Cl:f,Dh:u,Dl:a,Eh:l,El:d,Fh:h,Fl:y,Gh:m,Gl:w,Hh:U,Hl:F}=this;for(let R=0;R<80;R++){const Z=St(l,d,14)^St(l,d,18)^dist_de(l,d,41),H=Ot(l,d,14)^Ot(l,d,18)^dist_he(l,d,41),j=l&h^~l&m,L=d&y^~d&w,k=zi(F,H,L,gc[R],Ct[R]),O=Yi(k,U,Z,j,pc[R],Tt[R]),T=k|0,C=St(r,o,28)^dist_de(r,o,34)^dist_de(r,o,39),_=Ot(r,o,28)^dist_he(r,o,34)^dist_he(r,o,39),p=r&s^r&c^s&c,b=o&i^o&f^i&f;U=m|0,F=w|0,m=h|0,w=y|0,h=l|0,y=d|0,{h:l,l:d}=dt(u|0,a|0,O|0,T|0),u=c|0,a=f|0,c=s|0,f=i|0,s=r|0,i=o|0;const g=fn(T,_,b);r=an(g,O,C,p),o=g|0}({h:r,l:o}=dt(this.Ah|0,this.Al|0,r|0,o|0)),{h:s,l:i}=dt(this.Bh|0,this.Bl|0,s|0,i|0),{h:c,l:f}=dt(this.Ch|0,this.Cl|0,c|0,f|0),{h:u,l:a}=dt(this.Dh|0,this.Dl|0,u|0,a|0),{h:l,l:d}=dt(this.Eh|0,this.El|0,l|0,d|0),{h,l:y}=dt(this.Fh|0,this.Fl|0,h|0,y|0),{h:m,l:w}=dt(this.Gh|0,this.Gl|0,m|0,w|0),{h:U,l:F}=dt(this.Hh|0,this.Hl|0,U|0,F|0),this.set(r,o,s,i,c,f,u,a,l,d,h,y,m,w,U,F)}roundClean(){lt(Tt,Ct)}destroy(){lt(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class bc extends dn{constructor(){super(48),this.Ah=dist_X[0]|0,this.Al=dist_X[1]|0,this.Bh=dist_X[2]|0,this.Bl=dist_X[3]|0,this.Ch=dist_X[4]|0,this.Cl=dist_X[5]|0,this.Dh=dist_X[6]|0,this.Dl=dist_X[7]|0,this.Eh=dist_X[8]|0,this.El=dist_X[9]|0,this.Fh=dist_X[10]|0,this.Fl=dist_X[11]|0,this.Gh=dist_X[12]|0,this.Gl=dist_X[13]|0,this.Hh=dist_X[14]|0,this.Hl=dist_X[15]|0}}const dist_Q=Uint32Array.from([573645204,4230739756,2673172387,3360449730,596883563,1867755857,2520282905,1497426621,2519219938,2827943907,3193839141,1401305490,721525244,746961066,246885852,2177182882]);class yc extends dn{constructor(){super(32),this.Ah=dist_Q[0]|0,this.Al=dist_Q[1]|0,this.Bh=dist_Q[2]|0,this.Bl=dist_Q[3]|0,this.Ch=dist_Q[4]|0,this.Cl=dist_Q[5]|0,this.Dh=dist_Q[6]|0,this.Dl=dist_Q[7]|0,this.Eh=dist_Q[8]|0,this.El=dist_Q[9]|0,this.Fh=dist_Q[10]|0,this.Fl=dist_Q[11]|0,this.Gh=dist_Q[12]|0,this.Gl=dist_Q[13]|0,this.Hh=dist_Q[14]|0,this.Hl=dist_Q[15]|0}}const dist_Te=dist_ge(()=>new hc),mc=dist_ge(()=>new dn),wc=dist_ge(()=>new bc),vc=dist_ge(()=>new yc),xc=Uint8Array.from([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9]),z=Uint32Array.from([4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225]),dist_S=new Uint32Array(32);function jt(t,e,n,r,o,s){const i=o[s],c=o[s+1];let f=dist_S[2*t],u=dist_S[2*t+1],a=dist_S[2*e],l=dist_S[2*e+1],d=dist_S[2*n],h=dist_S[2*n+1],y=dist_S[2*r],m=dist_S[2*r+1],w=fn(f,a,i);u=an(w,u,l,c),f=w|0,{Dh:m,Dl:y}={Dh:m^u,Dl:y^f},{Dh:m,Dl:y}={Dh:Di(m,y),Dl:Vi(m)},{h,l:d}=dt(h,d,m,y),{Bh:l,Bl:a}={Bh:l^h,Bl:a^d},{Bh:l,Bl:a}={Bh:St(l,a,24),Bl:Ot(l,a,24)},dist_S[2*t]=f,dist_S[2*t+1]=u,dist_S[2*e]=a,dist_S[2*e+1]=l,dist_S[2*n]=d,dist_S[2*n+1]=h,dist_S[2*r]=y,dist_S[2*r+1]=m}function Lt(t,e,n,r,o,s){const i=o[s],c=o[s+1];let f=dist_S[2*t],u=dist_S[2*t+1],a=dist_S[2*e],l=dist_S[2*e+1],d=dist_S[2*n],h=dist_S[2*n+1],y=dist_S[2*r],m=dist_S[2*r+1],w=fn(f,a,i);u=an(w,u,l,c),f=w|0,{Dh:m,Dl:y}={Dh:m^u,Dl:y^f},{Dh:m,Dl:y}={Dh:St(m,y,16),Dl:Ot(m,y,16)},{h,l:d}=dt(h,d,m,y),{Bh:l,Bl:a}={Bh:l^h,Bl:a^d},{Bh:l,Bl:a}={Bh:dist_de(l,a,63),Bl:dist_he(l,a,63)},dist_S[2*t]=f,dist_S[2*t+1]=u,dist_S[2*e]=a,dist_S[2*e+1]=l,dist_S[2*n]=d,dist_S[2*n+1]=h,dist_S[2*r]=y,dist_S[2*r+1]=m}function Ec(t,e={},n,r,o){if(mt(n),t<0||t>n)throw new Error("outputLen bigger than keyLen");const{key:s,salt:i,personalization:c}=e;if(s!==void 0&&(s.length<1||s.length>n))throw new Error("key length must be undefined or 1.."+n);if(i!==void 0&&i.length!==r)throw new Error("salt must be undefined or "+r);if(c!==void 0&&c.length!==o)throw new Error("personalization must be undefined or "+o)}class Bc extends dist_$e{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,this.length=0,this.pos=0,mt(e),mt(n),this.blockLen=e,this.outputLen=n,this.buffer=new Uint8Array(e),this.buffer32=dist_pe(this.buffer)}update(e){Nt(this),e=pt(e),ht(e);const{blockLen:n,buffer:r,buffer32:o}=this,s=e.length,i=e.byteOffset,c=e.buffer;for(let f=0;f<s;){this.pos===n&&(Ut(o),this.compress(o,0,!1),Ut(o),this.pos=0);const u=Math.min(n-this.pos,s-f),a=i+f;if(u===n&&!(a%4)&&f+u<s){const l=new Uint32Array(c,a,Math.floor((s-f)/4));Ut(l);for(let d=0;f+n<s;d+=o.length,f+=n)this.length+=n,this.compress(l,d,!1);Ut(l);continue}r.set(e.subarray(f,f+u),this.pos),this.pos+=u,this.length+=u,f+=u}return this}digestInto(e){Nt(this),un(e,this);const{pos:n,buffer32:r}=this;this.finished=!0,lt(this.buffer.subarray(n)),Ut(r),this.compress(r,0,!0),Ut(r);const o=dist_pe(e);this.get().forEach((s,i)=>o[i]=wt(s))}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){const{buffer:n,length:r,finished:o,destroyed:s,outputLen:i,pos:c}=this;return e||(e=new this.constructor({dkLen:i})),e.set(...this.get()),e.buffer.set(n),e.destroyed=s,e.finished=o,e.length=r,e.pos=c,e.outputLen=i,e}clone(){return this._cloneInto()}}class Ic extends Bc{constructor(e={}){const n=e.dkLen===void 0?64:e.dkLen;super(128,n),this.v0l=z[0]|0,this.v0h=z[1]|0,this.v1l=z[2]|0,this.v1h=z[3]|0,this.v2l=z[4]|0,this.v2h=z[5]|0,this.v3l=z[6]|0,this.v3h=z[7]|0,this.v4l=z[8]|0,this.v4h=z[9]|0,this.v5l=z[10]|0,this.v5h=z[11]|0,this.v6l=z[12]|0,this.v6h=z[13]|0,this.v7l=z[14]|0,this.v7h=z[15]|0,Ec(n,e,64,16,16);let{key:r,personalization:o,salt:s}=e,i=0;if(r!==void 0&&(r=pt(r),i=r.length),this.v0l^=this.outputLen|i<<8|65536|1<<24,s!==void 0){s=pt(s);const c=dist_pe(s);this.v4l^=wt(c[0]),this.v4h^=wt(c[1]),this.v5l^=wt(c[2]),this.v5h^=wt(c[3])}if(o!==void 0){o=pt(o);const c=dist_pe(o);this.v6l^=wt(c[0]),this.v6h^=wt(c[1]),this.v7l^=wt(c[2]),this.v7h^=wt(c[3])}if(r!==void 0){const c=new Uint8Array(this.blockLen);c.set(r),this.update(c)}}get(){let{v0l:e,v0h:n,v1l:r,v1h:o,v2l:s,v2h:i,v3l:c,v3h:f,v4l:u,v4h:a,v5l:l,v5h:d,v6l:h,v6h:y,v7l:m,v7h:w}=this;return[e,n,r,o,s,i,c,f,u,a,l,d,h,y,m,w]}set(e,n,r,o,s,i,c,f,u,a,l,d,h,y,m,w){this.v0l=e|0,this.v0h=n|0,this.v1l=r|0,this.v1h=o|0,this.v2l=s|0,this.v2h=i|0,this.v3l=c|0,this.v3h=f|0,this.v4l=u|0,this.v4h=a|0,this.v5l=l|0,this.v5h=d|0,this.v6l=h|0,this.v6h=y|0,this.v7l=m|0,this.v7h=w|0}compress(e,n,r){this.get().forEach((f,u)=>dist_S[u]=f),dist_S.set(z,16);let{h:o,l:s}=Ur(BigInt(this.length));dist_S[24]=z[8]^s,dist_S[25]=z[9]^o,r&&(dist_S[28]=~dist_S[28],dist_S[29]=~dist_S[29]);let i=0;const c=xc;for(let f=0;f<12;f++)jt(0,4,8,12,e,n+2*c[i++]),Lt(0,4,8,12,e,n+2*c[i++]),jt(1,5,9,13,e,n+2*c[i++]),Lt(1,5,9,13,e,n+2*c[i++]),jt(2,6,10,14,e,n+2*c[i++]),Lt(2,6,10,14,e,n+2*c[i++]),jt(3,7,11,15,e,n+2*c[i++]),Lt(3,7,11,15,e,n+2*c[i++]),jt(0,5,10,15,e,n+2*c[i++]),Lt(0,5,10,15,e,n+2*c[i++]),jt(1,6,11,12,e,n+2*c[i++]),Lt(1,6,11,12,e,n+2*c[i++]),jt(2,7,8,13,e,n+2*c[i++]),Lt(2,7,8,13,e,n+2*c[i++]),jt(3,4,9,14,e,n+2*c[i++]),Lt(3,4,9,14,e,n+2*c[i++]);this.v0l^=dist_S[0]^dist_S[16],this.v0h^=dist_S[1]^dist_S[17],this.v1l^=dist_S[2]^dist_S[18],this.v1h^=dist_S[3]^dist_S[19],this.v2l^=dist_S[4]^dist_S[20],this.v2h^=dist_S[5]^dist_S[21],this.v3l^=dist_S[6]^dist_S[22],this.v3h^=dist_S[7]^dist_S[23],this.v4l^=dist_S[8]^dist_S[24],this.v4h^=dist_S[9]^dist_S[25],this.v5l^=dist_S[10]^dist_S[26],this.v5h^=dist_S[11]^dist_S[27],this.v6l^=dist_S[12]^dist_S[28],this.v6h^=dist_S[13]^dist_S[29],this.v7l^=dist_S[14]^dist_S[30],this.v7h^=dist_S[15]^dist_S[31],lt(dist_S)}destroy(){this.destroyed=!0,lt(this.buffer32),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const Ac=Ji(t=>new Ic(t)),Sc="https://rpc.walletconnect.org/v1";function hn(t){const e=`Ethereum Signed Message:
${t.length}`,n=new TextEncoder().encode(e+t);return"0x"+Buffer.from(fc(n)).toString("hex")}async function Zr(t,e,n,r,o,s){switch(n.t){case"eip191":return await Gr(t,e,n.s);case"eip1271":return await zr(t,e,n.s,r,o,s);default:throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n.t}`)}}function Gr(t,e,n){const r=Signature/* fromHex */.aD(n);return Secp256k1/* recoverAddress */.x_({payload:hn(e),signature:r}).toLowerCase()===t.toLowerCase()}async function zr(t,e,n,r,o,s){const i=Je(r);if(!i.namespace||!i.reference)throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`);try{const c="0x1626ba7e",f="0000000000000000000000000000000000000000000000000000000000000040",u=n.substring(2),a=(u.length/2).toString(16).padStart(64,"0"),l=(e.startsWith("0x")?e:hn(e)).substring(2),d=c+l+f+a+u,h=await fetch(`${s||Sc}/?chainId=${r}&projectId=${o}`,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({id:Oc(),jsonrpc:"2.0",method:"eth_call",params:[{to:t,data:d},"latest"]})}),{result:y}=await h.json();return y?y.slice(0,c.length).toLowerCase()===c.toLowerCase():!1}catch(c){return console.error("isValidEip1271Signature: ",c),!1}}function Oc(){return Date.now()+Math.floor(Math.random()*1e3)}function Nc(t){const e=atob(t),n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);const r=n[0];if(r===0)throw new Error("No signatures found");const o=1+r*64;if(n.length<o)throw new Error("Transaction data too short for claimed signature count");if(n.length<100)throw new Error("Transaction too short");const s=Buffer.from(t,"base64").slice(1,65);return esm/* default */.A.encode(s)}function Uc(t){const e=new Uint8Array(Buffer.from(t,"base64")),n=Array.from("TransactionData::").map(s=>s.charCodeAt(0)),r=new Uint8Array(n.length+e.length);r.set(n),r.set(e,n.length);const o=Ac(r,{dkLen:32});return esm/* default */.A.encode(o)}function _c(t){const e=new Uint8Array(dist_Te(Yr(t)));return esm/* default */.A.encode(e)}function Yr(t){if(t instanceof Uint8Array)return t;if(Array.isArray(t))return new Uint8Array(t);if(typeof t=="object"&&t!=null&&t.data)return new Uint8Array(Object.values(t.data));if(typeof t=="object"&&t)return new Uint8Array(Object.values(t));throw new Error("getNearUint8ArrayFromBytes: Unexpected result type from bytes array")}function Rc(t){const e=Buffer.from(t,"base64"),n=(0,decode/* decode */.D)(e).txn;if(!n)throw new Error("Invalid signed transaction: missing 'txn' field");const r=(0,encode/* encode */.l)(n),o=Buffer.from("TX"),s=Buffer.concat([o,Buffer.from(r)]),i=vc(s);return lib_esm/* base32 */.RG.encode(i).replace(/=+$/,"")}function pn(t){const e=[];let n=BigInt(t);for(;n>=BigInt(128);)e.push(Number(n&BigInt(127)|BigInt(128))),n>>=BigInt(7);return e.push(Number(n)),Buffer.from(e)}function $c(t){const e=Buffer.from(t.signed.bodyBytes,"base64"),n=Buffer.from(t.signed.authInfoBytes,"base64"),r=Buffer.from(t.signature.signature,"base64"),o=[];o.push(Buffer.from([10])),o.push(pn(e.length)),o.push(e),o.push(Buffer.from([18])),o.push(pn(n.length)),o.push(n),o.push(Buffer.from([26])),o.push(pn(r.length)),o.push(r);const s=Buffer.concat(o),i=dist_Te(s);return Buffer.from(i).toString("hex").toUpperCase()}function Tc(t){var e,n;const r=[];try{if(typeof t=="string")return r.push(t),r;if(typeof t!="object")return r;t!=null&&t.id&&r.push(t.id);const o=(n=(e=t?.capabilities)==null?void 0:e.caip345)==null?void 0:n.transactionHashes;o&&r.push(...o)}catch(o){console.warn("getWalletSendCallsHashes failed: ",o)}return r}var Cc=Object.defineProperty,jc=Object.defineProperties,Lc=Object.getOwnPropertyDescriptors,Wr=Object.getOwnPropertySymbols,kc=Object.prototype.hasOwnProperty,Pc=Object.prototype.propertyIsEnumerable,Xr=(t,e,n)=>e in t?Cc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,gn=(t,e)=>{for(var n in e||(e={}))kc.call(e,n)&&Xr(t,n,e[n]);if(Wr)for(var n of Wr(e))Pc.call(e,n)&&Xr(t,n,e[n]);return t},Jr=(t,e)=>jc(t,Lc(e));const Qr="did:pkh:",Hc={eip155:"Ethereum",solana:"Solana",bip122:"Bitcoin"},Dc=t=>t?Hc[t]||t:"",dist_ye=t=>t?.split(":"),to=t=>{const e=t&&dist_ye(t);if(e)return t.includes(Qr)?e[3]:e[1]},eo=t=>{const e=t&&dist_ye(t);if(e)return t.includes(Qr)?e[2]:e[0]},no=t=>{const e=t&&dist_ye(t);if(e)return e[2]+":"+e[3]},bn=t=>{const e=t&&dist_ye(t);if(e)return e.pop()};async function Vc(t){const{cacao:e,projectId:n}=t,{s:r,p:o}=e,s=ro(o,o.iss),i=bn(o.iss);return await Zr(i,s,r,no(o.iss),n)}const ro=(t,e)=>{const n=eo(e);if(!n)throw new Error("Invalid issuer: "+e);const r=`${t.domain} wants you to sign in with your ${Dc(n)} account:`,o=bn(e);if(!t.aud&&!t.uri)throw new Error("Either `aud` or `uri` is required to construct the message");let s=t.statement||void 0;const i=`URI: ${t.aud||t.uri}`,c=`Version: ${t.version}`,f=`Chain ID: ${to(e)}`,u=`Nonce: ${t.nonce}`,a=`Issued At: ${t.iat}`,l=t.exp?`Expiration Time: ${t.exp}`:void 0,d=t.nbf?`Not Before: ${t.nbf}`:void 0,h=t.requestId?`Request ID: ${t.requestId}`:void 0,y=t.resources?`Resources:${t.resources.map(w=>`
- ${w}`).join("")}`:void 0,m=dist_je(t.resources);if(m){const w=kt(m);s=wn(s,w)}return[r,o,"",s,"",i,c,f,u,a,l,d,h,y].filter(w=>w!=null).join(`
`)};function Mc(t,e,n){return n.includes("did:pkh:")||(n=`did:pkh:${n}`),{h:{t:"caip122"},p:{iss:n,domain:t.domain,aud:t.aud,version:t.version,nonce:t.nonce,iat:t.iat,statement:t.statement,requestId:t.requestId,resources:t.resources,nbf:t.nbf,exp:t.exp},s:e}}function Kc(t){var e;const{authPayload:n,chains:r,methods:o}=t,s=n.statement||"";if(!(r!=null&&r.length))return n;const i=n.chains,c=sn(i,r);if(!(c!=null&&c.length))throw new Error("No supported chains");const f=oo(n.resources);if(!f)return n;yt(f);const u=so(f,"eip155");let a=n?.resources||[];if(u!=null&&u.length){const l=io(u),d=sn(l,o);if(!(d!=null&&d.length))throw new Error(`Supported methods don't satisfy the requested: ${JSON.stringify(l)}, supported: ${JSON.stringify(o)}`);const h=yn("request",d,{chains:c}),y=uo(f,"eip155",h);a=((e=n?.resources)==null?void 0:e.slice(0,-1))||[],a.push(dist_Ce(y))}return Jr(gn({},n),{statement:ho(s,dist_je(a)),chains:c,resources:n!=null&&n.resources||a.length>0?a:void 0})}function oo(t){const e=dist_je(t);if(e&&mn(e))return kt(e)}function qc(t,e){var n;return(n=t?.att)==null?void 0:n.hasOwnProperty(e)}function so(t,e){var n,r;return(n=t?.att)!=null&&n[e]?Object.keys((r=t?.att)==null?void 0:r[e]):[]}function Fc(t){return t?.map(e=>Object.keys(e))||[]}function io(t){return t?.map(e=>{var n;return(n=e.split("/"))==null?void 0:n[1]})||[]}function co(t){return Buffer.from(JSON.stringify(t)).toString("base64")}function fo(t){return JSON.parse(Buffer.from(t,"base64").toString("utf-8"))}function yt(t){if(!t)throw new Error("No recap provided, value is undefined");if(!t.att)throw new Error("No `att` property found");const e=Object.keys(t.att);if(!(e!=null&&e.length))throw new Error("No resources found in `att` property");e.forEach(n=>{const r=t.att[n];if(Array.isArray(r))throw new Error(`Resource must be an object: ${n}`);if(typeof r!="object")throw new Error(`Resource must be an object: ${n}`);if(!Object.keys(r).length)throw new Error(`Resource object is empty: ${n}`);Object.keys(r).forEach(o=>{const s=r[o];if(!Array.isArray(s))throw new Error(`Ability limits ${o} must be an array of objects, found: ${s}`);if(!s.length)throw new Error(`Value of ${o} is empty array, must be an array with objects`);s.forEach(i=>{if(typeof i!="object")throw new Error(`Ability limits (${o}) must be an array of objects, found: ${i}`)})})})}function ao(t,e,n,r={}){return n?.sort((o,s)=>o.localeCompare(s)),{att:{[t]:yn(e,n,r)}}}function uo(t,e,n){var r;t.att[e]=gn({},n);const o=(r=Object.keys(t.att))==null?void 0:r.sort((i,c)=>i.localeCompare(c)),s={att:{}};return o.reduce((i,c)=>(i.att[c]=t.att[c],i),s)}function yn(t,e,n={}){e=e?.sort((o,s)=>o.localeCompare(s));const r=e.map(o=>({[`${t}/${o}`]:[n]}));return Object.assign({},...r)}function dist_Ce(t){return yt(t),`urn:recap:${co(t).replace(/=/g,"")}`}function kt(t){const e=fo(t.replace("urn:recap:",""));return yt(e),e}function Zc(t,e,n){const r=ao(t,e,n);return dist_Ce(r)}function mn(t){return t&&t.includes("urn:recap:")}function Gc(t,e){const n=kt(t),r=kt(e),o=lo(n,r);return dist_Ce(o)}function lo(t,e){yt(t),yt(e);const n=Object.keys(t.att).concat(Object.keys(e.att)).sort((o,s)=>o.localeCompare(s)),r={att:{}};return n.forEach(o=>{var s,i;Object.keys(((s=t.att)==null?void 0:s[o])||{}).concat(Object.keys(((i=e.att)==null?void 0:i[o])||{})).sort((c,f)=>c.localeCompare(f)).forEach(c=>{var f,u;r.att[o]=Jr(gn({},r.att[o]),{[c]:((f=t.att[o])==null?void 0:f[c])||((u=e.att[o])==null?void 0:u[c])})})}),r}function wn(t="",e){yt(e);const n="I further authorize the stated URI to perform the following actions on my behalf: ";if(t.includes(n))return t;const r=[];let o=0;Object.keys(e.att).forEach(c=>{const f=Object.keys(e.att[c]).map(l=>({ability:l.split("/")[0],action:l.split("/")[1]}));f.sort((l,d)=>l.action.localeCompare(d.action));const u={};f.forEach(l=>{u[l.ability]||(u[l.ability]=[]),u[l.ability].push(l.action)});const a=Object.keys(u).map(l=>(o++,`(${o}) '${l}': '${u[l].join("', '")}' for '${c}'.`));r.push(a.join(", ").replace(".,","."))});const s=r.join(" "),i=`${n}${s}`;return`${t?t+" ":""}${i}`}function zc(t){var e;const n=kt(t);yt(n);const r=(e=n.att)==null?void 0:e.eip155;return r?Object.keys(r).map(o=>o.split("/")[1]):[]}function Yc(t){const e=kt(t);yt(e);const n=[];return Object.values(e.att).forEach(r=>{Object.values(r).forEach(o=>{var s;(s=o?.[0])!=null&&s.chains&&n.push(o[0].chains)})}),[...new Set(n.flat())]}function ho(t,e){if(!e)return t;const n=kt(e);return yt(n),wn(t,n)}function dist_je(t){if(!t)return;const e=t?.[t.length-1];return mn(e)?e:void 0}/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */function po(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function vn(t){if(typeof t!="boolean")throw new Error(`boolean expected, not ${t}`)}function xn(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function ot(t,...e){if(!po(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function go(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function Wc(t,e){ot(t);const n=e.outputLen;if(t.length<n)throw new Error("digestInto() expects output buffer of length at least "+n)}function Pt(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function Qt(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}function Xc(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}const Jc=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function Qc(t){if(typeof t!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}function En(t){if(typeof t=="string")t=Qc(t);else if(po(t))t=Bn(t);else throw new Error("Uint8Array expected, got "+typeof t);return t}function tf(t,e){if(e==null||typeof e!="object")throw new Error("options must be defined");return Object.assign(t,e)}function ef(t,e){if(t.length!==e.length)return!1;let n=0;for(let r=0;r<t.length;r++)n|=t[r]^e[r];return n===0}const nf=(t,e)=>{function n(r,...o){if(ot(r),!Jc)throw new Error("Non little-endian hardware is not yet supported");if(t.nonceLength!==void 0){const a=o[0];if(!a)throw new Error("nonce / iv required");t.varSizeNonce?ot(a):ot(a,t.nonceLength)}const s=t.tagLength;s&&o[1]!==void 0&&ot(o[1]);const i=e(r,...o),c=(a,l)=>{if(l!==void 0){if(a!==2)throw new Error("cipher output not supported");ot(l)}};let f=!1;return{encrypt(a,l){if(f)throw new Error("cannot encrypt() twice with same key + nonce");return f=!0,ot(a),c(i.encrypt.length,l),i.encrypt(a,l)},decrypt(a,l){if(ot(a),s&&a.length<s)throw new Error("invalid ciphertext length: smaller than tagLength="+s);return c(i.decrypt.length,l),i.decrypt(a,l)}}}return Object.assign(n,t),n};function bo(t,e,n=!0){if(e===void 0)return new Uint8Array(t);if(e.length!==t)throw new Error("invalid output length, expected "+t+", got: "+e.length);if(n&&!of(e))throw new Error("invalid output, must be aligned");return e}function yo(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),c=Number(n&s),f=r?4:0,u=r?0:4;t.setUint32(e+f,i,r),t.setUint32(e+u,c,r)}function rf(t,e,n){vn(n);const r=new Uint8Array(16),o=Xc(r);return yo(o,0,BigInt(e),n),yo(o,8,BigInt(t),n),r}function of(t){return t.byteOffset%4===0}function Bn(t){return Uint8Array.from(t)}const mo=t=>Uint8Array.from(t.split("").map(e=>e.charCodeAt(0))),sf=mo("expand 16-byte k"),cf=mo("expand 32-byte k"),ff=Pt(sf),af=Pt(cf);function dist_K(t,e){return t<<e|t>>>32-e}function In(t){return t.byteOffset%4===0}const dist_Le=64,uf=16,wo=2**32-1,vo=new Uint32Array;function lf(t,e,n,r,o,s,i,c){const f=o.length,u=new Uint8Array(dist_Le),a=Pt(u),l=In(o)&&In(s),d=l?Pt(o):vo,h=l?Pt(s):vo;for(let y=0;y<f;i++){if(t(e,n,r,a,i,c),i>=wo)throw new Error("arx: counter overflow");const m=Math.min(dist_Le,f-y);if(l&&m===dist_Le){const w=y/4;if(y%4!==0)throw new Error("arx: invalid block position");for(let U=0,F;U<uf;U++)F=w+U,h[F]=d[F]^a[U];y+=dist_Le;continue}for(let w=0,U;w<m;w++)U=y+w,s[U]=o[U]^u[w];y+=m}}function df(t,e){const{allowShortKeys:n,extendNonceFn:r,counterLength:o,counterRight:s,rounds:i}=tf({allowShortKeys:!1,counterLength:8,counterRight:!1,rounds:20},e);if(typeof t!="function")throw new Error("core must be a function");return xn(o),xn(i),vn(s),vn(n),(c,f,u,a,l=0)=>{ot(c),ot(f),ot(u);const d=u.length;if(a===void 0&&(a=new Uint8Array(d)),ot(a),xn(l),l<0||l>=wo)throw new Error("arx: counter overflow");if(a.length<d)throw new Error(`arx: output (${a.length}) is shorter than data (${d})`);const h=[];let y=c.length,m,w;if(y===32)h.push(m=Bn(c)),w=af;else if(y===16&&n)m=new Uint8Array(32),m.set(c),m.set(c,16),w=ff,h.push(m);else throw new Error(`arx: invalid 32-byte key, got length=${y}`);In(f)||h.push(f=Bn(f));const U=Pt(m);if(r){if(f.length!==24)throw new Error("arx: extended nonce must be 24 bytes");r(w,U,Pt(f.subarray(0,16)),U),f=f.subarray(16)}const F=16-o;if(F!==f.length)throw new Error(`arx: nonce must be ${F} or 16 bytes`);if(F!==12){const Z=new Uint8Array(12);Z.set(f,s?0:12-f.length),f=Z,h.push(f)}const R=Pt(f);return lf(t,w,U,R,u,a,l,i),Qt(...h),a}}const dist_W=(t,e)=>t[e++]&255|(t[e++]&255)<<8;class hf{constructor(e){this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,e=En(e),ot(e,32);const n=dist_W(e,0),r=dist_W(e,2),o=dist_W(e,4),s=dist_W(e,6),i=dist_W(e,8),c=dist_W(e,10),f=dist_W(e,12),u=dist_W(e,14);this.r[0]=n&8191,this.r[1]=(n>>>13|r<<3)&8191,this.r[2]=(r>>>10|o<<6)&7939,this.r[3]=(o>>>7|s<<9)&8191,this.r[4]=(s>>>4|i<<12)&255,this.r[5]=i>>>1&8190,this.r[6]=(i>>>14|c<<2)&8191,this.r[7]=(c>>>11|f<<5)&8065,this.r[8]=(f>>>8|u<<8)&8191,this.r[9]=u>>>5&127;for(let a=0;a<8;a++)this.pad[a]=dist_W(e,16+2*a)}process(e,n,r=!1){const o=r?0:2048,{h:s,r:i}=this,c=i[0],f=i[1],u=i[2],a=i[3],l=i[4],d=i[5],h=i[6],y=i[7],m=i[8],w=i[9],U=dist_W(e,n+0),F=dist_W(e,n+2),R=dist_W(e,n+4),Z=dist_W(e,n+6),H=dist_W(e,n+8),j=dist_W(e,n+10),L=dist_W(e,n+12),k=dist_W(e,n+14);let O=s[0]+(U&8191),T=s[1]+((U>>>13|F<<3)&8191),C=s[2]+((F>>>10|R<<6)&8191),_=s[3]+((R>>>7|Z<<9)&8191),p=s[4]+((Z>>>4|H<<12)&8191),b=s[5]+(H>>>1&8191),g=s[6]+((H>>>14|j<<2)&8191),x=s[7]+((j>>>11|L<<5)&8191),E=s[8]+((L>>>8|k<<8)&8191),I=s[9]+(k>>>5|o),v=0,B=v+O*c+T*(5*w)+C*(5*m)+_*(5*y)+p*(5*h);v=B>>>13,B&=8191,B+=b*(5*d)+g*(5*l)+x*(5*a)+E*(5*u)+I*(5*f),v+=B>>>13,B&=8191;let A=v+O*f+T*c+C*(5*w)+_*(5*m)+p*(5*y);v=A>>>13,A&=8191,A+=b*(5*h)+g*(5*d)+x*(5*l)+E*(5*a)+I*(5*u),v+=A>>>13,A&=8191;let N=v+O*u+T*f+C*c+_*(5*w)+p*(5*m);v=N>>>13,N&=8191,N+=b*(5*y)+g*(5*h)+x*(5*d)+E*(5*l)+I*(5*a),v+=N>>>13,N&=8191;let D=v+O*a+T*u+C*f+_*c+p*(5*w);v=D>>>13,D&=8191,D+=b*(5*m)+g*(5*y)+x*(5*h)+E*(5*d)+I*(5*l),v+=D>>>13,D&=8191;let P=v+O*l+T*a+C*u+_*f+p*c;v=P>>>13,P&=8191,P+=b*(5*w)+g*(5*m)+x*(5*y)+E*(5*h)+I*(5*d),v+=P>>>13,P&=8191;let $=v+O*d+T*l+C*a+_*u+p*f;v=$>>>13,$&=8191,$+=b*c+g*(5*w)+x*(5*m)+E*(5*y)+I*(5*h),v+=$>>>13,$&=8191;let V=v+O*h+T*d+C*l+_*a+p*u;v=V>>>13,V&=8191,V+=b*f+g*c+x*(5*w)+E*(5*m)+I*(5*y),v+=V>>>13,V&=8191;let q=v+O*y+T*h+C*d+_*l+p*a;v=q>>>13,q&=8191,q+=b*u+g*f+x*c+E*(5*w)+I*(5*m),v+=q>>>13,q&=8191;let G=v+O*m+T*y+C*h+_*d+p*l;v=G>>>13,G&=8191,G+=b*a+g*u+x*f+E*c+I*(5*w),v+=G>>>13,G&=8191;let M=v+O*w+T*m+C*y+_*h+p*d;v=M>>>13,M&=8191,M+=b*l+g*a+x*u+E*f+I*c,v+=M>>>13,M&=8191,v=(v<<2)+v|0,v=v+B|0,B=v&8191,v=v>>>13,A+=v,s[0]=B,s[1]=A,s[2]=N,s[3]=D,s[4]=P,s[5]=$,s[6]=V,s[7]=q,s[8]=G,s[9]=M}finalize(){const{h:e,pad:n}=this,r=new Uint16Array(10);let o=e[1]>>>13;e[1]&=8191;for(let c=2;c<10;c++)e[c]+=o,o=e[c]>>>13,e[c]&=8191;e[0]+=o*5,o=e[0]>>>13,e[0]&=8191,e[1]+=o,o=e[1]>>>13,e[1]&=8191,e[2]+=o,r[0]=e[0]+5,o=r[0]>>>13,r[0]&=8191;for(let c=1;c<10;c++)r[c]=e[c]+o,o=r[c]>>>13,r[c]&=8191;r[9]-=8192;let s=(o^1)-1;for(let c=0;c<10;c++)r[c]&=s;s=~s;for(let c=0;c<10;c++)e[c]=e[c]&s|r[c];e[0]=(e[0]|e[1]<<13)&65535,e[1]=(e[1]>>>3|e[2]<<10)&65535,e[2]=(e[2]>>>6|e[3]<<7)&65535,e[3]=(e[3]>>>9|e[4]<<4)&65535,e[4]=(e[4]>>>12|e[5]<<1|e[6]<<14)&65535,e[5]=(e[6]>>>2|e[7]<<11)&65535,e[6]=(e[7]>>>5|e[8]<<8)&65535,e[7]=(e[8]>>>8|e[9]<<5)&65535;let i=e[0]+n[0];e[0]=i&65535;for(let c=1;c<8;c++)i=(e[c]+n[c]|0)+(i>>>16)|0,e[c]=i&65535;Qt(r)}update(e){go(this),e=En(e),ot(e);const{buffer:n,blockLen:r}=this,o=e.length;for(let s=0;s<o;){const i=Math.min(r-this.pos,o-s);if(i===r){for(;r<=o-s;s+=r)this.process(e,s);continue}n.set(e.subarray(s,s+i),this.pos),this.pos+=i,s+=i,this.pos===r&&(this.process(n,0,!1),this.pos=0)}return this}destroy(){Qt(this.h,this.r,this.buffer,this.pad)}digestInto(e){go(this),Wc(e,this),this.finished=!0;const{buffer:n,h:r}=this;let{pos:o}=this;if(o){for(n[o++]=1;o<16;o++)n[o]=0;this.process(n,0,!0)}this.finalize();let s=0;for(let i=0;i<8;i++)e[s++]=r[i]>>>0,e[s++]=r[i]>>>8;return e}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}}function pf(t){const e=(r,o)=>t(o).update(En(r)).digest(),n=t(new Uint8Array(32));return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=r=>t(r),e}const gf=pf(t=>new hf(t));function bf(t,e,n,r,o,s=20){let i=t[0],c=t[1],f=t[2],u=t[3],a=e[0],l=e[1],d=e[2],h=e[3],y=e[4],m=e[5],w=e[6],U=e[7],F=o,R=n[0],Z=n[1],H=n[2],j=i,L=c,k=f,O=u,T=a,C=l,_=d,p=h,b=y,g=m,x=w,E=U,I=F,v=R,B=Z,A=H;for(let D=0;D<s;D+=2)j=j+T|0,I=dist_K(I^j,16),b=b+I|0,T=dist_K(T^b,12),j=j+T|0,I=dist_K(I^j,8),b=b+I|0,T=dist_K(T^b,7),L=L+C|0,v=dist_K(v^L,16),g=g+v|0,C=dist_K(C^g,12),L=L+C|0,v=dist_K(v^L,8),g=g+v|0,C=dist_K(C^g,7),k=k+_|0,B=dist_K(B^k,16),x=x+B|0,_=dist_K(_^x,12),k=k+_|0,B=dist_K(B^k,8),x=x+B|0,_=dist_K(_^x,7),O=O+p|0,A=dist_K(A^O,16),E=E+A|0,p=dist_K(p^E,12),O=O+p|0,A=dist_K(A^O,8),E=E+A|0,p=dist_K(p^E,7),j=j+C|0,A=dist_K(A^j,16),x=x+A|0,C=dist_K(C^x,12),j=j+C|0,A=dist_K(A^j,8),x=x+A|0,C=dist_K(C^x,7),L=L+_|0,I=dist_K(I^L,16),E=E+I|0,_=dist_K(_^E,12),L=L+_|0,I=dist_K(I^L,8),E=E+I|0,_=dist_K(_^E,7),k=k+p|0,v=dist_K(v^k,16),b=b+v|0,p=dist_K(p^b,12),k=k+p|0,v=dist_K(v^k,8),b=b+v|0,p=dist_K(p^b,7),O=O+T|0,B=dist_K(B^O,16),g=g+B|0,T=dist_K(T^g,12),O=O+T|0,B=dist_K(B^O,8),g=g+B|0,T=dist_K(T^g,7);let N=0;r[N++]=i+j|0,r[N++]=c+L|0,r[N++]=f+k|0,r[N++]=u+O|0,r[N++]=a+T|0,r[N++]=l+C|0,r[N++]=d+_|0,r[N++]=h+p|0,r[N++]=y+b|0,r[N++]=m+g|0,r[N++]=w+x|0,r[N++]=U+E|0,r[N++]=F+I|0,r[N++]=R+v|0,r[N++]=Z+B|0,r[N++]=H+A|0}const yf=df(bf,{counterRight:!1,counterLength:4,allowShortKeys:!1}),mf=new Uint8Array(16),xo=(t,e)=>{t.update(e);const n=e.length%16;n&&t.update(mf.subarray(n))},wf=new Uint8Array(32);function Eo(t,e,n,r,o){const s=t(e,n,wf),i=gf.create(s);o&&xo(i,o),xo(i,r);const c=rf(r.length,o?o.length:0,!0);i.update(c);const f=i.digest();return Qt(s,c),f}const vf=t=>(e,n,r)=>({encrypt(s,i){const c=s.length;i=bo(c+16,i,!1),i.set(s);const f=i.subarray(0,-16);t(e,n,f,f,1);const u=Eo(t,e,n,f,r);return i.set(u,c),Qt(u),i},decrypt(s,i){i=bo(s.length-16,i,!1);const c=s.subarray(0,-16),f=s.subarray(-16),u=Eo(t,e,n,c,r);if(!ef(f,u))throw new Error("invalid tag");return i.set(s.subarray(0,-16)),t(e,n,i,i,1),Qt(u),i}}),Bo=nf({blockSize:64,nonceLength:12,tagLength:16},vf(yf));class Io extends dist_$e{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,dist_e(e);const r=pt(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,s=new Uint8Array(o);s.set(r.length>o?e.create().update(r).digest():r);for(let i=0;i<s.length;i++)s[i]^=54;this.iHash.update(s),this.oHash=e.create();for(let i=0;i<s.length;i++)s[i]^=106;this.oHash.update(s),lt(s)}update(e){return Nt(this),this.iHash.update(e),this}digestInto(e){Nt(this),ht(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:o,destroyed:s,blockLen:i,outputLen:c}=this;return e=e,e.finished=o,e.destroyed=s,e.blockLen=i,e.outputLen=c,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const dist_ke=(t,e,n)=>new Io(t,e).update(n).digest();dist_ke.create=(t,e)=>new Io(t,e);function xf(t,e,n){return dist_e(t),n===void 0&&(n=new Uint8Array(t.outputLen)),dist_ke(t,pt(n),pt(e))}const An=Uint8Array.from([0]),Ao=Uint8Array.of();function Ef(t,e,n,r=32){dist_e(t),mt(r);const o=t.outputLen;if(r>255*o)throw new Error("Length should be <= 255*HashLen");const s=Math.ceil(r/o);n===void 0&&(n=Ao);const i=new Uint8Array(s*o),c=dist_ke.create(t,e),f=c._cloneInto(),u=new Uint8Array(c.outputLen);for(let a=0;a<s;a++)An[0]=a+1,f.update(a===0?Ao:u).update(n).update(An).digestInto(u),i.set(u,o*a),c._cloneInto(f);return c.destroy(),f.destroy(),lt(u,An),i.slice(0,r)}const Bf=(t,e,n,r,o)=>Ef(t,xf(t,e,n),r,o),dist_Pe=dist_Te,Sn=BigInt(0),On=BigInt(1);function He(t,e=""){if(typeof t!="boolean"){const n=e&&`"${e}"`;throw new Error(n+"expected boolean, got type="+typeof t)}return t}function Kt(t,e,n=""){const r=dist_Ue(t),o=t?.length,s=e!==void 0;if(!r||s&&o!==e){const i=n&&`"${n}" `,c=s?` of length ${e}`:"",f=r?`length=${o}`:`type=${typeof t}`;throw new Error(i+"expected Uint8Array"+c+", got "+f)}return t}function dist_De(t){const e=t.toString(16);return e.length&1?"0"+e:e}function So(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?Sn:BigInt("0x"+t)}function dist_Ve(t){return So(Jt(t))}function dist_Me(t){return ht(t),So(Jt(Uint8Array.from(t).reverse()))}function Nn(t,e){return dist_Re(t.toString(16).padStart(e*2,"0"))}function Un(t,e){return Nn(t,e).reverse()}function tt(t,e,n){let r;if(typeof e=="string")try{r=dist_Re(e)}catch(s){throw new Error(t+" must be hex string or Uint8Array, cause: "+s)}else if(dist_Ue(e))r=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");const o=r.length;if(typeof n=="number"&&o!==n)throw new Error(t+" of length "+n+" expected, got "+o);return r}const _n=t=>typeof t=="bigint"&&Sn<=t;function If(t,e,n){return _n(t)&&_n(e)&&_n(n)&&e<=t&&t<n}function Rn(t,e,n,r){if(!If(e,n,r))throw new Error("expected valid "+t+": "+n+" <= n < "+r+", got "+e)}function Oo(t){let e;for(e=0;t>Sn;t>>=On,e+=1);return e}const dist_me=t=>(On<<BigInt(t))-On;function Af(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");const r=h=>new Uint8Array(h),o=h=>Uint8Array.of(h);let s=r(t),i=r(t),c=0;const f=()=>{s.fill(1),i.fill(0),c=0},u=(...h)=>n(i,s,...h),a=(h=r(0))=>{i=u(o(0),h),s=u(),h.length!==0&&(i=u(o(1),h),s=u())},l=()=>{if(c++>=1e3)throw new Error("drbg: tried 1000 values");let h=0;const y=[];for(;h<e;){s=u();const m=s.slice();y.push(m),h+=s.length}return _t(...y)};return(h,y)=>{f(),a(h);let m;for(;!(m=y(l()));)a();return f(),m}}function Ke(t,e,n={}){if(!t||typeof t!="object")throw new Error("expected valid options object");function r(o,s,i){const c=t[o];if(i&&c===void 0)return;const f=typeof c;if(f!==s||c===null)throw new Error(`param "${o}" is invalid: expected ${s}, got ${f}`)}Object.entries(e).forEach(([o,s])=>r(o,s,!1)),Object.entries(n).forEach(([o,s])=>r(o,s,!0))}function No(t){const e=new WeakMap;return(n,...r)=>{const o=e.get(n);if(o!==void 0)return o;const s=t(n,...r);return e.set(n,s),s}}const st=BigInt(0),nt=BigInt(1),qt=BigInt(2),Uo=BigInt(3),_o=BigInt(4),Ro=BigInt(5),Sf=BigInt(7),$o=BigInt(8),Of=BigInt(9),To=BigInt(16);function ct(t,e){const n=t%e;return n>=st?n:e+n}function gt(t,e,n){let r=t;for(;e-- >st;)r*=r,r%=n;return r}function Co(t,e){if(t===st)throw new Error("invert: expected non-zero number");if(e<=st)throw new Error("invert: expected positive modulus, got "+e);let n=ct(t,e),r=e,o=st,s=nt;for(;n!==st;){const c=r/n,f=r%n,u=o-s*c;r=n,n=f,o=s,s=u}if(r!==nt)throw new Error("invert: does not exist");return ct(o,e)}function $n(t,e,n){if(!t.eql(t.sqr(e),n))throw new Error("Cannot find square root")}function jo(t,e){const n=(t.ORDER+nt)/_o,r=t.pow(e,n);return $n(t,r,e),r}function Nf(t,e){const n=(t.ORDER-Ro)/$o,r=t.mul(e,qt),o=t.pow(r,n),s=t.mul(e,o),i=t.mul(t.mul(s,qt),o),c=t.mul(s,t.sub(i,t.ONE));return $n(t,c,e),c}function Uf(t){const e=Ht(t),n=Lo(t),r=n(e,e.neg(e.ONE)),o=n(e,r),s=n(e,e.neg(r)),i=(t+Sf)/To;return(c,f)=>{let u=c.pow(f,i),a=c.mul(u,r);const l=c.mul(u,o),d=c.mul(u,s),h=c.eql(c.sqr(a),f),y=c.eql(c.sqr(l),f);u=c.cmov(u,a,h),a=c.cmov(d,l,y);const m=c.eql(c.sqr(a),f),w=c.cmov(u,a,m);return $n(c,w,f),w}}function Lo(t){if(t<Uo)throw new Error("sqrt is not defined for small field");let e=t-nt,n=0;for(;e%qt===st;)e/=qt,n++;let r=qt;const o=Ht(t);for(;Po(o,r)===1;)if(r++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(n===1)return jo;let s=o.pow(r,e);const i=(e+nt)/qt;return function(f,u){if(f.is0(u))return u;if(Po(f,u)!==1)throw new Error("Cannot find square root");let a=n,l=f.mul(f.ONE,s),d=f.pow(u,e),h=f.pow(u,i);for(;!f.eql(d,f.ONE);){if(f.is0(d))return f.ZERO;let y=1,m=f.sqr(d);for(;!f.eql(m,f.ONE);)if(y++,m=f.sqr(m),y===a)throw new Error("Cannot find square root");const w=nt<<BigInt(a-y-1),U=f.pow(l,w);a=y,l=f.sqr(U),d=f.mul(d,l),h=f.mul(h,U)}return h}}function _f(t){return t%_o===Uo?jo:t%$o===Ro?Nf:t%To===Of?Uf(t):Lo(t)}const Rf=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function $f(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"number",BITS:"number"},n=Rf.reduce((r,o)=>(r[o]="function",r),e);return Ke(t,n),t}function Tf(t,e,n){if(n<st)throw new Error("invalid exponent, negatives unsupported");if(n===st)return t.ONE;if(n===nt)return e;let r=t.ONE,o=e;for(;n>st;)n&nt&&(r=t.mul(r,o)),o=t.sqr(o),n>>=nt;return r}function ko(t,e,n=!1){const r=new Array(e.length).fill(n?t.ZERO:void 0),o=e.reduce((i,c,f)=>t.is0(c)?i:(r[f]=i,t.mul(i,c)),t.ONE),s=t.inv(o);return e.reduceRight((i,c,f)=>t.is0(c)?i:(r[f]=t.mul(i,r[f]),t.mul(i,c)),s),r}function Po(t,e){const n=(t.ORDER-nt)/qt,r=t.pow(e,n),o=t.eql(r,t.ONE),s=t.eql(r,t.ZERO),i=t.eql(r,t.neg(t.ONE));if(!o&&!s&&!i)throw new Error("invalid Legendre symbol result");return o?1:s?0:-1}function Ho(t,e){e!==void 0&&mt(e);const n=e!==void 0?e:t.toString(2).length,r=Math.ceil(n/8);return{nBitLength:n,nByteLength:r}}function Ht(t,e,n=!1,r={}){if(t<=st)throw new Error("invalid field: expected ORDER > 0, got "+t);let o,s,i=!1,c;if(typeof e=="object"&&e!=null){if(r.sqrt||n)throw new Error("cannot specify opts in two arguments");const d=e;d.BITS&&(o=d.BITS),d.sqrt&&(s=d.sqrt),typeof d.isLE=="boolean"&&(n=d.isLE),typeof d.modFromBytes=="boolean"&&(i=d.modFromBytes),c=d.allowedLengths}else typeof e=="number"&&(o=e),r.sqrt&&(s=r.sqrt);const{nBitLength:f,nByteLength:u}=Ho(t,o);if(u>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let a;const l=Object.freeze({ORDER:t,isLE:n,BITS:f,BYTES:u,MASK:dist_me(f),ZERO:st,ONE:nt,allowedLengths:c,create:d=>ct(d,t),isValid:d=>{if(typeof d!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof d);return st<=d&&d<t},is0:d=>d===st,isValidNot0:d=>!l.is0(d)&&l.isValid(d),isOdd:d=>(d&nt)===nt,neg:d=>ct(-d,t),eql:(d,h)=>d===h,sqr:d=>ct(d*d,t),add:(d,h)=>ct(d+h,t),sub:(d,h)=>ct(d-h,t),mul:(d,h)=>ct(d*h,t),pow:(d,h)=>Tf(l,d,h),div:(d,h)=>ct(d*Co(h,t),t),sqrN:d=>d*d,addN:(d,h)=>d+h,subN:(d,h)=>d-h,mulN:(d,h)=>d*h,inv:d=>Co(d,t),sqrt:s||(d=>(a||(a=_f(t)),a(l,d))),toBytes:d=>n?Un(d,u):Nn(d,u),fromBytes:(d,h=!0)=>{if(c){if(!c.includes(d.length)||d.length>u)throw new Error("Field.fromBytes: expected "+c+" bytes, got "+d.length);const m=new Uint8Array(u);m.set(d,n?0:m.length-d.length),d=m}if(d.length!==u)throw new Error("Field.fromBytes: expected "+u+" bytes, got "+d.length);let y=n?dist_Me(d):dist_Ve(d);if(i&&(y=ct(y,t)),!h&&!l.isValid(y))throw new Error("invalid field element: outside of range 0..ORDER");return y},invertBatch:d=>ko(l,d),cmov:(d,h,y)=>y?h:d});return Object.freeze(l)}function Do(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function Vo(t){const e=Do(t);return e+Math.ceil(e/2)}function Cf(t,e,n=!1){const r=t.length,o=Do(e),s=Vo(e);if(r<16||r<s||r>1024)throw new Error("expected "+s+"-1024 bytes of input, got "+r);const i=n?dist_Me(t):dist_Ve(t),c=ct(i,e-nt)+nt;return n?Un(c,o):Nn(c,o)}const dist_te=BigInt(0),Ft=BigInt(1);function qe(t,e){const n=e.negate();return t?n:e}function Tn(t,e){const n=ko(t.Fp,e.map(r=>r.Z));return e.map((r,o)=>t.fromAffine(r.toAffine(n[o])))}function Mo(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function Cn(t,e){Mo(t,e);const n=Math.ceil(e/t)+1,r=2**(t-1),o=2**t,s=dist_me(t),i=BigInt(t);return{windows:n,windowSize:r,mask:s,maxNumber:o,shiftBy:i}}function Ko(t,e,n){const{windowSize:r,mask:o,maxNumber:s,shiftBy:i}=n;let c=Number(t&o),f=t>>i;c>r&&(c-=s,f+=Ft);const u=e*r,a=u+Math.abs(c)-1,l=c===0,d=c<0,h=e%2!==0;return{nextN:f,offset:a,isZero:l,isNeg:d,isNegF:h,offsetF:u}}function jf(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((n,r)=>{if(!(n instanceof e))throw new Error("invalid point at index "+r)})}function Lf(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((n,r)=>{if(!e.isValid(n))throw new Error("invalid scalar at index "+r)})}const jn=new WeakMap,qo=new WeakMap;function Ln(t){return qo.get(t)||1}function Fo(t){if(t!==dist_te)throw new Error("invalid wNAF")}class kf{constructor(e,n){this.BASE=e.BASE,this.ZERO=e.ZERO,this.Fn=e.Fn,this.bits=n}_unsafeLadder(e,n,r=this.ZERO){let o=e;for(;n>dist_te;)n&Ft&&(r=r.add(o)),o=o.double(),n>>=Ft;return r}precomputeWindow(e,n){const{windows:r,windowSize:o}=Cn(n,this.bits),s=[];let i=e,c=i;for(let f=0;f<r;f++){c=i,s.push(c);for(let u=1;u<o;u++)c=c.add(i),s.push(c);i=c.double()}return s}wNAF(e,n,r){if(!this.Fn.isValid(r))throw new Error("invalid scalar");let o=this.ZERO,s=this.BASE;const i=Cn(e,this.bits);for(let c=0;c<i.windows;c++){const{nextN:f,offset:u,isZero:a,isNeg:l,isNegF:d,offsetF:h}=Ko(r,c,i);r=f,a?s=s.add(qe(d,n[h])):o=o.add(qe(l,n[u]))}return Fo(r),{p:o,f:s}}wNAFUnsafe(e,n,r,o=this.ZERO){const s=Cn(e,this.bits);for(let i=0;i<s.windows&&r!==dist_te;i++){const{nextN:c,offset:f,isZero:u,isNeg:a}=Ko(r,i,s);if(r=c,!u){const l=n[f];o=o.add(a?l.negate():l)}}return Fo(r),o}getPrecomputes(e,n,r){let o=jn.get(n);return o||(o=this.precomputeWindow(n,e),e!==1&&(typeof r=="function"&&(o=r(o)),jn.set(n,o))),o}cached(e,n,r){const o=Ln(e);return this.wNAF(o,this.getPrecomputes(o,e,r),n)}unsafe(e,n,r,o){const s=Ln(e);return s===1?this._unsafeLadder(e,n,o):this.wNAFUnsafe(s,this.getPrecomputes(s,e,r),n,o)}createCache(e,n){Mo(n,this.bits),qo.set(e,n),jn.delete(e)}hasCache(e){return Ln(e)!==1}}function Pf(t,e,n,r){let o=e,s=t.ZERO,i=t.ZERO;for(;n>dist_te||r>dist_te;)n&Ft&&(s=s.add(o)),r&Ft&&(i=i.add(o)),o=o.double(),n>>=Ft,r>>=Ft;return{p1:s,p2:i}}function Hf(t,e,n,r){jf(n,t),Lf(r,e);const o=n.length,s=r.length;if(o!==s)throw new Error("arrays of points and scalars must have equal length");const i=t.ZERO,c=Oo(BigInt(o));let f=1;c>12?f=c-3:c>4?f=c-2:c>0&&(f=2);const u=dist_me(f),a=new Array(Number(u)+1).fill(i),l=Math.floor((e.BITS-1)/f)*f;let d=i;for(let h=l;h>=0;h-=f){a.fill(i);for(let m=0;m<s;m++){const w=r[m],U=Number(w>>BigInt(h)&u);a[U]=a[U].add(n[m])}let y=i;for(let m=a.length-1,w=i;m>0;m--)w=w.add(a[m]),y=y.add(w);if(d=d.add(y),h!==0)for(let m=0;m<f;m++)d=d.double()}return d}function Zo(t,e,n){if(e){if(e.ORDER!==t)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return $f(e),e}else return Ht(t,{isLE:n})}function Df(t,e,n={},r){if(r===void 0&&(r=t==="edwards"),!e||typeof e!="object")throw new Error(`expected valid ${t} CURVE object`);for(const f of["p","n","h"]){const u=e[f];if(!(typeof u=="bigint"&&u>dist_te))throw new Error(`CURVE.${f} must be positive bigint`)}const o=Zo(e.p,n.Fp,r),s=Zo(e.n,n.Fn,r),c=["Gx","Gy","a",t==="weierstrass"?"b":"d"];for(const f of c)if(!o.isValid(e[f]))throw new Error(`CURVE.${f} must be valid field element of CURVE.Fp`);return e=Object.freeze(Object.assign({},e)),{CURVE:e,Fp:o,Fn:s}}BigInt(0),BigInt(1),BigInt(2),BigInt(8),kr("HashToScalar-");const dist_we=BigInt(0),dist_ee=BigInt(1),dist_Fe=BigInt(2);function Vf(t){return Ke(t,{adjustScalarBytes:"function",powPminus2:"function"}),Object.freeze({...t})}function Mf(t){const e=Vf(t),{P:n,type:r,adjustScalarBytes:o,powPminus2:s,randomBytes:i}=e,c=r==="x25519";if(!c&&r!=="x448")throw new Error("invalid type");const f=i||Mt,u=c?255:448,a=c?32:56,l=BigInt(c?9:5),d=BigInt(c?121665:39081),h=c?dist_Fe**BigInt(254):dist_Fe**BigInt(447),y=c?BigInt(8)*dist_Fe**BigInt(251)-dist_ee:BigInt(4)*dist_Fe**BigInt(445)-dist_ee,m=h+y+dist_ee,w=p=>ct(p,n),U=F(l);function F(p){return Un(w(p),a)}function R(p){const b=tt("u coordinate",p,a);return c&&(b[31]&=127),w(dist_Me(b))}function Z(p){return dist_Me(o(tt("scalar",p,a)))}function H(p,b){const g=k(R(b),Z(p));if(g===dist_we)throw new Error("invalid private or public key received");return F(g)}function j(p){return H(p,U)}function L(p,b,g){const x=w(p*(b-g));return b=w(b-x),g=w(g+x),{x_2:b,x_3:g}}function k(p,b){Rn("u",p,dist_we,n),Rn("scalar",b,h,m);const g=b,x=p;let E=dist_ee,I=dist_we,v=p,B=dist_ee,A=dist_we;for(let D=BigInt(u-1);D>=dist_we;D--){const P=g>>D&dist_ee;A^=P,{x_2:E,x_3:v}=L(A,E,v),{x_2:I,x_3:B}=L(A,I,B),A=P;const $=E+I,V=w($*$),q=E-I,G=w(q*q),M=V-G,Y=v+B,Yt=v-B,ce=w(Yt*$),fe=w(Y*q),Qn=ce+fe,tr=ce-fe;v=w(Qn*Qn),B=w(x*w(tr*tr)),E=w(V*G),I=w(M*(V+w(d*M)))}({x_2:E,x_3:v}=L(A,E,v)),{x_2:I,x_3:B}=L(A,I,B);const N=s(I);return w(E*N)}const O={secretKey:a,publicKey:a,seed:a},T=(p=f(a))=>(ht(p,O.seed),p);function C(p){const b=T(p);return{secretKey:b,publicKey:j(b)}}return{keygen:C,getSharedSecret:(p,b)=>H(p,b),getPublicKey:p=>j(p),scalarMult:H,scalarMultBase:j,utils:{randomSecretKey:T,randomPrivateKey:T},GuBytes:U.slice(),lengths:O}}const Kf=BigInt(1),Go=BigInt(2),qf=BigInt(3),Ff=BigInt(5),Zf=BigInt(8),zo=BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),Gf={p:zo,n:BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),h:Zf,a:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),d:BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),Gx:BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),Gy:BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")};function zf(t){const e=BigInt(10),n=BigInt(20),r=BigInt(40),o=BigInt(80),s=zo,c=t*t%s*t%s,f=gt(c,Go,s)*c%s,u=gt(f,Kf,s)*t%s,a=gt(u,Ff,s)*u%s,l=gt(a,e,s)*a%s,d=gt(l,n,s)*l%s,h=gt(d,r,s)*d%s,y=gt(h,o,s)*h%s,m=gt(y,o,s)*h%s,w=gt(m,e,s)*a%s;return{pow_p_5_8:gt(w,Go,s)*t%s,b2:c}}function Yf(t){return t[0]&=248,t[31]&=127,t[31]|=64,t}const Wf=Ht(Gf.p,{isLE:!0}),kn=(()=>{const t=Wf.ORDER;return Mf({P:t,type:"x25519",powPminus2:e=>{const{pow_p_5_8:n,b2:r}=zf(e);return ct(gt(n,qf,t)*r,t)},adjustScalarBytes:Yf})})(),Yo=(t,e)=>(t+(t>=0?e:-e)/Wo)/e;function Xf(t,e,n){const[[r,o],[s,i]]=e,c=Yo(i*t,n),f=Yo(-o*t,n);let u=t-c*r-f*s,a=-c*o-f*i;const l=u<Et,d=a<Et;l&&(u=-u),d&&(a=-a);const h=dist_me(Math.ceil(Oo(n)/2))+dist_ne;if(u<Et||u>=h||a<Et||a>=h)throw new Error("splitScalar (endomorphism): failed, k="+t);return{k1neg:l,k1:u,k2neg:d,k2:a}}function Pn(t){if(!["compact","recovered","der"].includes(t))throw new Error('Signature format must be "compact", "recovered", or "der"');return t}function Hn(t,e){const n={};for(let r of Object.keys(e))n[r]=t[r]===void 0?e[r]:t[r];return He(n.lowS,"lowS"),He(n.prehash,"prehash"),n.format!==void 0&&Pn(n.format),n}class Jf extends Error{constructor(e=""){super(e)}}const xt={Err:Jf,_tlv:{encode:(t,e)=>{const{Err:n}=xt;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length&1)throw new n("tlv.encode: unpadded data");const r=e.length/2,o=dist_De(r);if(o.length/2&128)throw new n("tlv.encode: long form length too big");const s=r>127?dist_De(o.length/2|128):"";return dist_De(t)+s+o+e},decode(t,e){const{Err:n}=xt;let r=0;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length<2||e[r++]!==t)throw new n("tlv.decode: wrong tlv");const o=e[r++],s=!!(o&128);let i=0;if(!s)i=o;else{const f=o&127;if(!f)throw new n("tlv.decode(long): indefinite length not supported");if(f>4)throw new n("tlv.decode(long): byte length is too big");const u=e.subarray(r,r+f);if(u.length!==f)throw new n("tlv.decode: length bytes not complete");if(u[0]===0)throw new n("tlv.decode(long): zero leftmost byte");for(const a of u)i=i<<8|a;if(r+=f,i<128)throw new n("tlv.decode(long): not minimal encoding")}const c=e.subarray(r,r+i);if(c.length!==i)throw new n("tlv.decode: wrong value length");return{v:c,l:e.subarray(r+i)}}},_int:{encode(t){const{Err:e}=xt;if(t<Et)throw new e("integer: negative integers are not allowed");let n=dist_De(t);if(Number.parseInt(n[0],16)&8&&(n="00"+n),n.length&1)throw new e("unexpected DER parsing assertion: unpadded hex");return n},decode(t){const{Err:e}=xt;if(t[0]&128)throw new e("invalid signature integer: negative");if(t[0]===0&&!(t[1]&128))throw new e("invalid signature integer: unnecessary leading zero");return dist_Ve(t)}},toSig(t){const{Err:e,_int:n,_tlv:r}=xt,o=tt("signature",t),{v:s,l:i}=r.decode(48,o);if(i.length)throw new e("invalid signature: left bytes after parsing");const{v:c,l:f}=r.decode(2,s),{v:u,l:a}=r.decode(2,f);if(a.length)throw new e("invalid signature: left bytes after parsing");return{r:n.decode(c),s:n.decode(u)}},hexFromSig(t){const{_tlv:e,_int:n}=xt,r=e.encode(2,n.encode(t.r)),o=e.encode(2,n.encode(t.s)),s=r+o;return e.encode(48,s)}},Et=BigInt(0),dist_ne=BigInt(1),Wo=BigInt(2),Ze=BigInt(3),Qf=BigInt(4);function dist_re(t,e){const{BYTES:n}=t;let r;if(typeof e=="bigint")r=e;else{let o=tt("private key",e);try{r=t.fromBytes(o)}catch{throw new Error(`invalid private key: expected ui8a of size ${n}, got ${typeof e}`)}}if(!t.isValidNot0(r))throw new Error("invalid private key: out of range [1..N-1]");return r}function ta(t,e={}){const n=Df("weierstrass",t,e),{Fp:r,Fn:o}=n;let s=n.CURVE;const{h:i,n:c}=s;Ke(e,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",wrapPrivateKey:"boolean"});const{endo:f}=e;if(f&&(!r.is0(s.a)||typeof f.beta!="bigint"||!Array.isArray(f.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');const u=Jo(r,o);function a(){if(!r.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function l(_,p,b){const{x:g,y:x}=p.toAffine(),E=r.toBytes(g);if(He(b,"isCompressed"),b){a();const I=!r.isOdd(x);return _t(Xo(I),E)}else return _t(Uint8Array.of(4),E,r.toBytes(x))}function d(_){Kt(_,void 0,"Point");const{publicKey:p,publicKeyUncompressed:b}=u,g=_.length,x=_[0],E=_.subarray(1);if(g===p&&(x===2||x===3)){const I=r.fromBytes(E);if(!r.isValid(I))throw new Error("bad point: is not on curve, wrong x");const v=m(I);let B;try{B=r.sqrt(v)}catch(D){const P=D instanceof Error?": "+D.message:"";throw new Error("bad point: is not on curve, sqrt error"+P)}a();const A=r.isOdd(B);return(x&1)===1!==A&&(B=r.neg(B)),{x:I,y:B}}else if(g===b&&x===4){const I=r.BYTES,v=r.fromBytes(E.subarray(0,I)),B=r.fromBytes(E.subarray(I,I*2));if(!w(v,B))throw new Error("bad point: is not on curve");return{x:v,y:B}}else throw new Error(`bad point: got length ${g}, expected compressed=${p} or uncompressed=${b}`)}const h=e.toBytes||l,y=e.fromBytes||d;function m(_){const p=r.sqr(_),b=r.mul(p,_);return r.add(r.add(b,r.mul(_,s.a)),s.b)}function w(_,p){const b=r.sqr(p),g=m(_);return r.eql(b,g)}if(!w(s.Gx,s.Gy))throw new Error("bad curve params: generator point");const U=r.mul(r.pow(s.a,Ze),Qf),F=r.mul(r.sqr(s.b),BigInt(27));if(r.is0(r.add(U,F)))throw new Error("bad curve params: a or b");function R(_,p,b=!1){if(!r.isValid(p)||b&&r.is0(p))throw new Error(`bad point coordinate ${_}`);return p}function Z(_){if(!(_ instanceof O))throw new Error("ProjectivePoint expected")}function H(_){if(!f||!f.basises)throw new Error("no endo");return Xf(_,f.basises,o.ORDER)}const j=No((_,p)=>{const{X:b,Y:g,Z:x}=_;if(r.eql(x,r.ONE))return{x:b,y:g};const E=_.is0();p==null&&(p=E?r.ONE:r.inv(x));const I=r.mul(b,p),v=r.mul(g,p),B=r.mul(x,p);if(E)return{x:r.ZERO,y:r.ZERO};if(!r.eql(B,r.ONE))throw new Error("invZ was invalid");return{x:I,y:v}}),L=No(_=>{if(_.is0()){if(e.allowInfinityPoint&&!r.is0(_.Y))return;throw new Error("bad point: ZERO")}const{x:p,y:b}=_.toAffine();if(!r.isValid(p)||!r.isValid(b))throw new Error("bad point: x or y not field elements");if(!w(p,b))throw new Error("bad point: equation left != right");if(!_.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});function k(_,p,b,g,x){return b=new O(r.mul(b.X,_),b.Y,b.Z),p=qe(g,p),b=qe(x,b),p.add(b)}class O{constructor(p,b,g){this.X=R("x",p),this.Y=R("y",b,!0),this.Z=R("z",g),Object.freeze(this)}static CURVE(){return s}static fromAffine(p){const{x:b,y:g}=p||{};if(!p||!r.isValid(b)||!r.isValid(g))throw new Error("invalid affine point");if(p instanceof O)throw new Error("projective point not allowed");return r.is0(b)&&r.is0(g)?O.ZERO:new O(b,g,r.ONE)}static fromBytes(p){const b=O.fromAffine(y(Kt(p,void 0,"point")));return b.assertValidity(),b}static fromHex(p){return O.fromBytes(tt("pointHex",p))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(p=8,b=!0){return C.createCache(this,p),b||this.multiply(Ze),this}assertValidity(){L(this)}hasEvenY(){const{y:p}=this.toAffine();if(!r.isOdd)throw new Error("Field doesn't support isOdd");return!r.isOdd(p)}equals(p){Z(p);const{X:b,Y:g,Z:x}=this,{X:E,Y:I,Z:v}=p,B=r.eql(r.mul(b,v),r.mul(E,x)),A=r.eql(r.mul(g,v),r.mul(I,x));return B&&A}negate(){return new O(this.X,r.neg(this.Y),this.Z)}double(){const{a:p,b}=s,g=r.mul(b,Ze),{X:x,Y:E,Z:I}=this;let v=r.ZERO,B=r.ZERO,A=r.ZERO,N=r.mul(x,x),D=r.mul(E,E),P=r.mul(I,I),$=r.mul(x,E);return $=r.add($,$),A=r.mul(x,I),A=r.add(A,A),v=r.mul(p,A),B=r.mul(g,P),B=r.add(v,B),v=r.sub(D,B),B=r.add(D,B),B=r.mul(v,B),v=r.mul($,v),A=r.mul(g,A),P=r.mul(p,P),$=r.sub(N,P),$=r.mul(p,$),$=r.add($,A),A=r.add(N,N),N=r.add(A,N),N=r.add(N,P),N=r.mul(N,$),B=r.add(B,N),P=r.mul(E,I),P=r.add(P,P),N=r.mul(P,$),v=r.sub(v,N),A=r.mul(P,D),A=r.add(A,A),A=r.add(A,A),new O(v,B,A)}add(p){Z(p);const{X:b,Y:g,Z:x}=this,{X:E,Y:I,Z:v}=p;let B=r.ZERO,A=r.ZERO,N=r.ZERO;const D=s.a,P=r.mul(s.b,Ze);let $=r.mul(b,E),V=r.mul(g,I),q=r.mul(x,v),G=r.add(b,g),M=r.add(E,I);G=r.mul(G,M),M=r.add($,V),G=r.sub(G,M),M=r.add(b,x);let Y=r.add(E,v);return M=r.mul(M,Y),Y=r.add($,q),M=r.sub(M,Y),Y=r.add(g,x),B=r.add(I,v),Y=r.mul(Y,B),B=r.add(V,q),Y=r.sub(Y,B),N=r.mul(D,M),B=r.mul(P,q),N=r.add(B,N),B=r.sub(V,N),N=r.add(V,N),A=r.mul(B,N),V=r.add($,$),V=r.add(V,$),q=r.mul(D,q),M=r.mul(P,M),V=r.add(V,q),q=r.sub($,q),q=r.mul(D,q),M=r.add(M,q),$=r.mul(V,M),A=r.add(A,$),$=r.mul(Y,M),B=r.mul(G,B),B=r.sub(B,$),$=r.mul(G,V),N=r.mul(Y,N),N=r.add(N,$),new O(B,A,N)}subtract(p){return this.add(p.negate())}is0(){return this.equals(O.ZERO)}multiply(p){const{endo:b}=e;if(!o.isValidNot0(p))throw new Error("invalid scalar: out of range");let g,x;const E=I=>C.cached(this,I,v=>Tn(O,v));if(b){const{k1neg:I,k1:v,k2neg:B,k2:A}=H(p),{p:N,f:D}=E(v),{p:P,f:$}=E(A);x=D.add($),g=k(b.beta,N,P,I,B)}else{const{p:I,f:v}=E(p);g=I,x=v}return Tn(O,[g,x])[0]}multiplyUnsafe(p){const{endo:b}=e,g=this;if(!o.isValid(p))throw new Error("invalid scalar: out of range");if(p===Et||g.is0())return O.ZERO;if(p===dist_ne)return g;if(C.hasCache(this))return this.multiply(p);if(b){const{k1neg:x,k1:E,k2neg:I,k2:v}=H(p),{p1:B,p2:A}=Pf(O,g,E,v);return k(b.beta,B,A,x,I)}else return C.unsafe(g,p)}multiplyAndAddUnsafe(p,b,g){const x=this.multiplyUnsafe(b).add(p.multiplyUnsafe(g));return x.is0()?void 0:x}toAffine(p){return j(this,p)}isTorsionFree(){const{isTorsionFree:p}=e;return i===dist_ne?!0:p?p(O,this):C.unsafe(this,c).is0()}clearCofactor(){const{clearCofactor:p}=e;return i===dist_ne?this:p?p(O,this):this.multiplyUnsafe(i)}isSmallOrder(){return this.multiplyUnsafe(i).is0()}toBytes(p=!0){return He(p,"isCompressed"),this.assertValidity(),h(O,this,p)}toHex(p=!0){return Jt(this.toBytes(p))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}get px(){return this.X}get py(){return this.X}get pz(){return this.Z}toRawBytes(p=!0){return this.toBytes(p)}_setWindowSize(p){this.precompute(p)}static normalizeZ(p){return Tn(O,p)}static msm(p,b){return Hf(O,o,p,b)}static fromPrivateKey(p){return O.BASE.multiply(dist_re(o,p))}}O.BASE=new O(s.Gx,s.Gy,r.ONE),O.ZERO=new O(r.ZERO,r.ONE,r.ZERO),O.Fp=r,O.Fn=o;const T=o.BITS,C=new kf(O,e.endo?Math.ceil(T/2):T);return O.BASE.precompute(8),O}function Xo(t){return Uint8Array.of(t?2:3)}function Jo(t,e){return{secretKey:e.BYTES,publicKey:1+t.BYTES,publicKeyUncompressed:1+2*t.BYTES,publicKeyHasPrefix:!0,signature:2*e.BYTES}}function ea(t,e={}){const{Fn:n}=t,r=e.randomBytes||Mt,o=Object.assign(Jo(t.Fp,n),{seed:Vo(n.ORDER)});function s(h){try{return!!dist_re(n,h)}catch{return!1}}function i(h,y){const{publicKey:m,publicKeyUncompressed:w}=o;try{const U=h.length;return y===!0&&U!==m||y===!1&&U!==w?!1:!!t.fromBytes(h)}catch{return!1}}function c(h=r(o.seed)){return Cf(Kt(h,o.seed,"seed"),n.ORDER)}function f(h,y=!0){return t.BASE.multiply(dist_re(n,h)).toBytes(y)}function u(h){const y=c(h);return{secretKey:y,publicKey:f(y)}}function a(h){if(typeof h=="bigint")return!1;if(h instanceof t)return!0;const{secretKey:y,publicKey:m,publicKeyUncompressed:w}=o;if(n.allowedLengths||y===m)return;const U=tt("key",h).length;return U===m||U===w}function l(h,y,m=!0){if(a(h)===!0)throw new Error("first arg must be private key");if(a(y)===!1)throw new Error("second arg must be public key");const w=dist_re(n,h);return t.fromHex(y).multiply(w).toBytes(m)}return Object.freeze({getPublicKey:f,getSharedSecret:l,keygen:u,Point:t,utils:{isValidSecretKey:s,isValidPublicKey:i,randomSecretKey:c,isValidPrivateKey:s,randomPrivateKey:c,normPrivateKeyToScalar:h=>dist_re(n,h),precompute(h=8,y=t.BASE){return y.precompute(h,!1)}},lengths:o})}function na(t,e,n={}){dist_e(e),Ke(n,{},{hmac:"function",lowS:"boolean",randomBytes:"function",bits2int:"function",bits2int_modN:"function"});const r=n.randomBytes||Mt,o=n.hmac||((b,...g)=>dist_ke(e,b,_t(...g))),{Fp:s,Fn:i}=t,{ORDER:c,BITS:f}=i,{keygen:u,getPublicKey:a,getSharedSecret:l,utils:d,lengths:h}=ea(t,n),y={prehash:!1,lowS:typeof n.lowS=="boolean"?n.lowS:!1,format:void 0,extraEntropy:!1},m="compact";function w(b){const g=c>>dist_ne;return b>g}function U(b,g){if(!i.isValidNot0(g))throw new Error(`invalid signature ${b}: out of range 1..Point.Fn.ORDER`);return g}function F(b,g){Pn(g);const x=h.signature,E=g==="compact"?x:g==="recovered"?x+1:void 0;return Kt(b,E,`${g} signature`)}class R{constructor(g,x,E){this.r=U("r",g),this.s=U("s",x),E!=null&&(this.recovery=E),Object.freeze(this)}static fromBytes(g,x=m){F(g,x);let E;if(x==="der"){const{r:A,s:N}=xt.toSig(Kt(g));return new R(A,N)}x==="recovered"&&(E=g[0],x="compact",g=g.subarray(1));const I=i.BYTES,v=g.subarray(0,I),B=g.subarray(I,I*2);return new R(i.fromBytes(v),i.fromBytes(B),E)}static fromHex(g,x){return this.fromBytes(dist_Re(g),x)}addRecoveryBit(g){return new R(this.r,this.s,g)}recoverPublicKey(g){const x=s.ORDER,{r:E,s:I,recovery:v}=this;if(v==null||![0,1,2,3].includes(v))throw new Error("recovery id invalid");if(c*Wo<x&&v>1)throw new Error("recovery id is ambiguous for h>1 curve");const A=v===2||v===3?E+c:E;if(!s.isValid(A))throw new Error("recovery id 2 or 3 invalid");const N=s.toBytes(A),D=t.fromBytes(_t(Xo((v&1)===0),N)),P=i.inv(A),$=H(tt("msgHash",g)),V=i.create(-$*P),q=i.create(I*P),G=t.BASE.multiplyUnsafe(V).add(D.multiplyUnsafe(q));if(G.is0())throw new Error("point at infinify");return G.assertValidity(),G}hasHighS(){return w(this.s)}toBytes(g=m){if(Pn(g),g==="der")return dist_Re(xt.hexFromSig(this));const x=i.toBytes(this.r),E=i.toBytes(this.s);if(g==="recovered"){if(this.recovery==null)throw new Error("recovery bit must be present");return _t(Uint8Array.of(this.recovery),x,E)}return _t(x,E)}toHex(g){return Jt(this.toBytes(g))}assertValidity(){}static fromCompact(g){return R.fromBytes(tt("sig",g),"compact")}static fromDER(g){return R.fromBytes(tt("sig",g),"der")}normalizeS(){return this.hasHighS()?new R(this.r,i.neg(this.s),this.recovery):this}toDERRawBytes(){return this.toBytes("der")}toDERHex(){return Jt(this.toBytes("der"))}toCompactRawBytes(){return this.toBytes("compact")}toCompactHex(){return Jt(this.toBytes("compact"))}}const Z=n.bits2int||function(g){if(g.length>8192)throw new Error("input is too large");const x=dist_Ve(g),E=g.length*8-f;return E>0?x>>BigInt(E):x},H=n.bits2int_modN||function(g){return i.create(Z(g))},j=dist_me(f);function L(b){return Rn("num < 2^"+f,b,Et,j),i.toBytes(b)}function k(b,g){return Kt(b,void 0,"message"),g?Kt(e(b),void 0,"prehashed message"):b}function O(b,g,x){if(["recovered","canonical"].some(V=>V in x))throw new Error("sign() legacy options not supported");const{lowS:E,prehash:I,extraEntropy:v}=Hn(x,y);b=k(b,I);const B=H(b),A=dist_re(i,g),N=[L(A),L(B)];if(v!=null&&v!==!1){const V=v===!0?r(h.secretKey):v;N.push(tt("extraEntropy",V))}const D=_t(...N),P=B;function $(V){const q=Z(V);if(!i.isValidNot0(q))return;const G=i.inv(q),M=t.BASE.multiply(q).toAffine(),Y=i.create(M.x);if(Y===Et)return;const Yt=i.create(G*i.create(P+Y*A));if(Yt===Et)return;let ce=(M.x===Y?0:2)|Number(M.y&dist_ne),fe=Yt;return E&&w(Yt)&&(fe=i.neg(Yt),ce^=1),new R(Y,fe,ce)}return{seed:D,k2sig:$}}function T(b,g,x={}){b=tt("message",b);const{seed:E,k2sig:I}=O(b,g,x);return Af(e.outputLen,i.BYTES,o)(E,I)}function C(b){let g;const x=typeof b=="string"||dist_Ue(b),E=!x&&b!==null&&typeof b=="object"&&typeof b.r=="bigint"&&typeof b.s=="bigint";if(!x&&!E)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");if(E)g=new R(b.r,b.s);else if(x){try{g=R.fromBytes(tt("sig",b),"der")}catch(I){if(!(I instanceof xt.Err))throw I}if(!g)try{g=R.fromBytes(tt("sig",b),"compact")}catch{return!1}}return g||!1}function _(b,g,x,E={}){const{lowS:I,prehash:v,format:B}=Hn(E,y);if(x=tt("publicKey",x),g=k(tt("message",g),v),"strict"in E)throw new Error("options.strict was renamed to lowS");const A=B===void 0?C(b):R.fromBytes(tt("sig",b),B);if(A===!1)return!1;try{const N=t.fromBytes(x);if(I&&A.hasHighS())return!1;const{r:D,s:P}=A,$=H(g),V=i.inv(P),q=i.create($*V),G=i.create(D*V),M=t.BASE.multiplyUnsafe(q).add(N.multiplyUnsafe(G));return M.is0()?!1:i.create(M.x)===D}catch{return!1}}function p(b,g,x={}){const{prehash:E}=Hn(x,y);return g=k(g,E),R.fromBytes(b,"recovered").recoverPublicKey(g).toBytes()}return Object.freeze({keygen:u,getPublicKey:a,getSharedSecret:l,utils:d,lengths:h,Point:t,sign:T,verify:_,recoverPublicKey:p,Signature:R,hash:e})}function ra(t){const e={a:t.a,b:t.b,p:t.Fp.ORDER,n:t.n,h:t.h,Gx:t.Gx,Gy:t.Gy},n=t.Fp;let r=t.allowedPrivateKeyLengths?Array.from(new Set(t.allowedPrivateKeyLengths.map(i=>Math.ceil(i/2)))):void 0;const o=Ht(e.n,{BITS:t.nBitLength,allowedLengths:r,modFromBytes:t.wrapPrivateKey}),s={Fp:n,Fn:o,allowInfinityPoint:t.allowInfinityPoint,endo:t.endo,isTorsionFree:t.isTorsionFree,clearCofactor:t.clearCofactor,fromBytes:t.fromBytes,toBytes:t.toBytes};return{CURVE:e,curveOpts:s}}function oa(t){const{CURVE:e,curveOpts:n}=ra(t),r={hmac:t.hmac,randomBytes:t.randomBytes,lowS:t.lowS,bits2int:t.bits2int,bits2int_modN:t.bits2int_modN};return{CURVE:e,curveOpts:n,hash:t.hash,ecdsaOpts:r}}function sa(t,e){const n=e.Point;return Object.assign({},e,{ProjectivePoint:n,CURVE:Object.assign({},t,Ho(n.Fn.ORDER,n.Fn.BITS))})}function ia(t){const{CURVE:e,curveOpts:n,hash:r,ecdsaOpts:o}=oa(t),s=ta(e,n),i=na(s,r,o);return sa(t,i)}function Dn(t,e){const n=r=>ia({...t,hash:r});return{...n(e),create:n}}const Qo={p:BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"),n:BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),h:BigInt(1),a:BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"),b:BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),Gx:BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),Gy:BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5")},ts={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"),n:BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),h:BigInt(1),a:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"),b:BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"),Gx:BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),Gy:BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f")},dist_es={p:BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),n:BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),h:BigInt(1),a:BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"),b:BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"),Gx:BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),Gy:BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650")},ca=Ht(Qo.p),fa=Ht(ts.p),aa=Ht(dist_es.p),ua=Dn({...Qo,Fp:ca,lowS:!1},dist_Te);Dn({...ts,Fp:fa,lowS:!1},wc),Dn({...dist_es,Fp:aa,lowS:!1,allowedPrivateKeyLengths:[130,131,132]},mc);const la=ua,Vn="base10",rt="base16",dist_oe="base64pad",dist_Ge="base64url",dist_se="utf8",Mn=0,dist_ie=1,dist_ve=2,da=0,ns=1,dist_xe=12,Kn=32;function ha(){const t=kn.utils.randomPrivateKey(),e=kn.getPublicKey(t);return{privateKey:(0,src/* toString */.dI)(t,rt),publicKey:(0,src/* toString */.dI)(e,rt)}}function pa(){const t=Mt(Kn);return (0,src/* toString */.dI)(t,rt)}function ga(t,e){const n=kn.getSharedSecret((0,src/* fromString */.sH)(t,rt),(0,src/* fromString */.sH)(e,rt)),r=Bf(dist_Pe,n,void 0,void 0,Kn);return (0,src/* toString */.dI)(r,rt)}function ba(t){const e=dist_Pe((0,src/* fromString */.sH)(t,rt));return (0,src/* toString */.dI)(e,rt)}function ya(t){const e=dist_Pe((0,src/* fromString */.sH)(t,dist_se));return (0,src/* toString */.dI)(e,rt)}function qn(t){return (0,src/* fromString */.sH)(`${t}`,Vn)}function Zt(t){return Number((0,src/* toString */.dI)(t,Vn))}function rs(t){return t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function os(t){const e=t.replace(/-/g,"+").replace(/_/g,"/"),n=(4-e.length%4)%4;return e+"=".repeat(n)}function ma(t){const e=qn(typeof t.type<"u"?t.type:Mn);if(Zt(e)===dist_ie&&typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof t.senderPublicKey<"u"?(0,src/* fromString */.sH)(t.senderPublicKey,rt):void 0,r=typeof t.iv<"u"?(0,src/* fromString */.sH)(t.iv,rt):Mt(dist_xe),o=(0,src/* fromString */.sH)(t.symKey,rt),s=Bo(o,r).encrypt((0,src/* fromString */.sH)(t.message,dist_se)),i=Fn({type:e,sealed:s,iv:r,senderPublicKey:n});return t.encoding===dist_Ge?rs(i):i}function wa(t){const e=(0,src/* fromString */.sH)(t.symKey,rt),{sealed:n,iv:r}=dist_ze({encoded:t.encoded,encoding:t.encoding}),o=Bo(e,r).decrypt(n);if(o===null)throw new Error("Failed to decrypt");return (0,src/* toString */.dI)(o,dist_se)}function va(t,e){const n=qn(dist_ve),r=Mt(dist_xe),o=(0,src/* fromString */.sH)(t,dist_se),s=Fn({type:n,sealed:o,iv:r});return e===dist_Ge?rs(s):s}function xa(t,e){const{sealed:n}=dist_ze({encoded:t,encoding:e});return (0,src/* toString */.dI)(n,dist_se)}function Fn(t){if(Zt(t.type)===dist_ve)return (0,src/* toString */.dI)((0,src/* concat */.xW)([t.type,t.sealed]),dist_oe);if(Zt(t.type)===dist_ie){if(typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return (0,src/* toString */.dI)((0,src/* concat */.xW)([t.type,t.senderPublicKey,t.iv,t.sealed]),dist_oe)}return (0,src/* toString */.dI)((0,src/* concat */.xW)([t.type,t.iv,t.sealed]),dist_oe)}function dist_ze(t){const e=(t.encoding||dist_oe)===dist_Ge?os(t.encoded):t.encoded,n=(0,src/* fromString */.sH)(e,dist_oe),r=n.slice(da,ns),o=ns;if(Zt(r)===dist_ie){const f=o+Kn,u=f+dist_xe,a=n.slice(o,f),l=n.slice(f,u),d=n.slice(u);return{type:r,sealed:d,iv:l,senderPublicKey:a}}if(Zt(r)===dist_ve){const f=n.slice(o),u=Mt(dist_xe);return{type:r,sealed:f,iv:u}}const s=o+dist_xe,i=n.slice(o,s),c=n.slice(s);return{type:r,sealed:c,iv:i}}function Ea(t,e){const n=dist_ze({encoded:t,encoding:e?.encoding});return ss({type:Zt(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?(0,src/* toString */.dI)(n.senderPublicKey,rt):void 0,receiverPublicKey:e?.receiverPublicKey})}function ss(t){const e=t?.type||Mn;if(e===dist_ie){if(typeof t?.senderPublicKey>"u")throw new Error("missing sender public key");if(typeof t?.receiverPublicKey>"u")throw new Error("missing receiver public key")}return{type:e,senderPublicKey:t?.senderPublicKey,receiverPublicKey:t?.receiverPublicKey}}function Ba(t){return t.type===dist_ie&&typeof t.senderPublicKey=="string"&&typeof t.receiverPublicKey=="string"}function Ia(t){return t.type===dist_ve}function is(t){const e=Buffer.from(t.x,"base64"),n=Buffer.from(t.y,"base64");return (0,src/* concat */.xW)([new Uint8Array([4]),e,n])}function Aa(t,e){const[n,r,o]=t.split("."),s=Buffer.from(os(o),"base64");if(s.length!==64)throw new Error("Invalid signature length");const i=s.slice(0,32),c=s.slice(32,64),f=`${n}.${r}`,u=dist_Pe(f),a=is(e);if(!la.verify((0,src/* concat */.xW)([i,c]),u,a))throw new Error("Invalid signature");return (0,index_es/* decodeJWT */.Cq)(t).payload}const cs="irn";function Sa(t){return t?.relay||{protocol:cs}}function Oa(t){const e=dist_index_es/* RELAY_JSONRPC */.CG[t];if(typeof e>"u")throw new Error(`Relay Protocol not supported: ${t}`);return e}var Na=Object.defineProperty,Ua=Object.defineProperties,_a=Object.getOwnPropertyDescriptors,fs=Object.getOwnPropertySymbols,Ra=Object.prototype.hasOwnProperty,$a=Object.prototype.propertyIsEnumerable,as=(t,e,n)=>e in t?Na(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Zn=(t,e)=>{for(var n in e||(e={}))Ra.call(e,n)&&as(t,n,e[n]);if(fs)for(var n of fs(e))$a.call(e,n)&&as(t,n,e[n]);return t},Ta=(t,e)=>Ua(t,_a(e));function us(t,e="-"){const n={},r="relay"+e;return Object.keys(t).forEach(o=>{if(o.startsWith(r)){const s=o.replace(r,""),i=t[o];n[s]=i}}),n}function Ca(t){if(!t.includes("wc:")){const u=cn(t);u!=null&&u.includes("wc:")&&(t=u)}t=t.includes("wc://")?t.replace("wc://",""):t,t=t.includes("wc:")?t.replace("wc:",""):t;const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),o=t.substring(e+1,n).split("@"),s=typeof n<"u"?t.substring(n):"",i=new URLSearchParams(s),c=Object.fromEntries(i.entries()),f=typeof c.methods=="string"?c.methods.split(","):void 0;return{protocol:r,topic:ls(o[0]),version:parseInt(o[1],10),symKey:c.symKey,relay:us(c),methods:f,expiryTimestamp:c.expiryTimestamp?parseInt(c.expiryTimestamp,10):void 0}}function ls(t){return t.startsWith("//")?t.substring(2):t}function ds(t,e="-"){const n="relay",r={};return Object.keys(t).forEach(o=>{const s=o,i=n+e+s;t[s]&&(r[i]=t[s])}),r}function ja(t){const e=new URLSearchParams,n=Zn(Zn(Ta(Zn({},ds(t.relay)),{symKey:t.symKey}),t.expiryTimestamp&&{expiryTimestamp:t.expiryTimestamp.toString()}),t.methods&&{methods:t.methods.join(",")});return Object.entries(n).sort(([r],[o])=>r.localeCompare(o)).forEach(([r,o])=>{o!==void 0&&e.append(r,String(o))}),`${t.protocol}:${t.topic}@${t.version}?${e}`}function La(t,e,n){return`${t}?wc_ev=${n}&topic=${e}`}var ka=Object.defineProperty,Pa=Object.defineProperties,Ha=Object.getOwnPropertyDescriptors,hs=Object.getOwnPropertySymbols,Da=Object.prototype.hasOwnProperty,Va=Object.prototype.propertyIsEnumerable,ps=(t,e,n)=>e in t?ka(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ma=(t,e)=>{for(var n in e||(e={}))Da.call(e,n)&&ps(t,n,e[n]);if(hs)for(var n of hs(e))Va.call(e,n)&&ps(t,n,e[n]);return t},Ka=(t,e)=>Pa(t,Ha(e));function Gt(t){const e=[];return t.forEach(n=>{const[r,o]=n.split(":");e.push(`${r}:${o}`)}),e}function gs(t){const e=[];return Object.values(t).forEach(n=>{e.push(...Gt(n.accounts))}),[...new Set(e)]}function qa(t){const e=[];return Object.values(t).forEach(n=>{e.push(...n.methods)}),[...new Set(e)]}function Fa(t){const e=[];return Object.values(t).forEach(n=>{e.push(...n.events)}),[...new Set(e)]}function bs(t,e){const n=[];return Object.values(t).forEach(r=>{Gt(r.accounts).includes(e)&&n.push(...r.methods)}),n}function ys(t,e){const n=[];return Object.values(t).forEach(r=>{Gt(r.accounts).includes(e)&&n.push(...r.events)}),n}function Za(t,e){const n=Ns(t,e);if(n)throw new Error(n.message);const r={};for(const[o,s]of Object.entries(t))r[o]={methods:s.methods,events:s.events,chains:s.accounts.map(i=>`${i.split(":")[0]}:${i.split(":")[1]}`)};return r}function Ga(t){var e;const{proposal:{requiredNamespaces:n,optionalNamespaces:r={}},supportedNamespaces:o}=t,s=dist_Ee(n),i=dist_Ee(r),c={};Object.keys(o).forEach(a=>{const l=o[a].chains,d=o[a].methods,h=o[a].events,y=o[a].accounts;l.forEach(m=>{if(!y.some(w=>w.includes(m)))throw new Error(`No accounts provided for chain ${m} in namespace ${a}`)}),c[a]={chains:l,methods:d,events:h,accounts:y}});const f=_s(n,c,"approve()");if(f)throw new Error(f.message);const u={};if(!Object.keys(n).length&&!Object.keys(r).length)return c;Object.keys(s).forEach(a=>{const l=o[a].chains.filter(m=>{var w,U;return(U=(w=s[a])==null?void 0:w.chains)==null?void 0:U.includes(m)}),d=o[a].methods.filter(m=>{var w,U;return(U=(w=s[a])==null?void 0:w.methods)==null?void 0:U.includes(m)}),h=o[a].events.filter(m=>{var w,U;return(U=(w=s[a])==null?void 0:w.events)==null?void 0:U.includes(m)}),y=l.map(m=>o[a].accounts.filter(w=>w.includes(`${m}:`))).flat();u[a]={chains:l,methods:d,events:h,accounts:y}}),Object.keys(i).forEach(a=>{var l,d,h,y,m,w;if(!o[a])return;const U=(d=(l=i[a])==null?void 0:l.chains)==null?void 0:d.filter(H=>o[a].chains.includes(H)),F=o[a].methods.filter(H=>{var j,L;return(L=(j=i[a])==null?void 0:j.methods)==null?void 0:L.includes(H)}),R=o[a].events.filter(H=>{var j,L;return(L=(j=i[a])==null?void 0:j.events)==null?void 0:L.includes(H)}),Z=U?.map(H=>o[a].accounts.filter(j=>j.includes(`${H}:`))).flat();u[a]={chains:ut((h=u[a])==null?void 0:h.chains,U),methods:ut((y=u[a])==null?void 0:y.methods,F),events:ut((m=u[a])==null?void 0:m.events,R),accounts:ut((w=u[a])==null?void 0:w.accounts,Z)}});for(const[a,l]of Object.entries(u))(l.accounts.length===0||((e=l?.chains)==null?void 0:e.length)===0)&&delete u[a];return u}function Gn(t){return t.includes(":")}function ms(t){return Gn(t)?t.split(":")[0]:t}function dist_Ee(t){var e,n,r;const o={};if(!Ye(t))return o;for(const[s,i]of Object.entries(t)){const c=Gn(s)?[s]:i.chains,f=i.methods||[],u=i.events||[],a=ms(s);o[a]=Ka(Ma({},o[a]),{chains:ut(c,(e=o[a])==null?void 0:e.chains),methods:ut(f,(n=o[a])==null?void 0:n.methods),events:ut(u,(r=o[a])==null?void 0:r.events)})}return o}function ws(t){const e={};return t?.forEach(n=>{var r;const[o,s]=n.split(":");e[o]||(e[o]={accounts:[],chains:[],events:[],methods:[]}),e[o].accounts.push(n),(r=e[o].chains)==null||r.push(`${o}:${s}`)}),e}function za(t,e){e=e.map(r=>r.replace("did:pkh:",""));const n=ws(e);for(const[r,o]of Object.entries(n))o.methods?o.methods=ut(o.methods,t):o.methods=t,o.events=["chainChanged","accountsChanged"];return n}function Ya(t,e){var n,r,o,s,i,c;const f=dist_Ee(t),u=dist_Ee(e),a={},l=Object.keys(f).concat(Object.keys(u));for(const d of l)a[d]={chains:ut((n=f[d])==null?void 0:n.chains,(r=u[d])==null?void 0:r.chains),methods:ut((o=f[d])==null?void 0:o.methods,(s=u[d])==null?void 0:s.methods),events:ut((i=f[d])==null?void 0:i.events,(c=u[d])==null?void 0:c.events)};return a}const dist_vs={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},xs={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function Bt(t,e){const{message:n,code:r}=xs[t];return{message:e?`${n} ${e}`:n,code:r}}function zt(t,e){const{message:n,code:r}=dist_vs[t];return{message:e?`${n} ${e}`:n,code:r}}function dist_Be(t,e){return Array.isArray(t)?typeof e<"u"&&t.length?t.every(e):!0:!1}function Ye(t){return Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length}function Dt(t){return typeof t>"u"}function ft(t,e){return e&&Dt(t)?!0:typeof t=="string"&&!!t.trim().length}function We(t,e){return e&&Dt(t)?!0:typeof t=="number"&&!isNaN(t)}function Wa(t,e){const{requiredNamespaces:n}=e,r=Object.keys(t.namespaces),o=Object.keys(n);let s=!0;return At(o,r)?(r.forEach(i=>{const{accounts:c,methods:f,events:u}=t.namespaces[i],a=Gt(c),l=n[i];(!At(dist_Se(i,l),a)||!At(l.methods,f)||!At(l.events,u))&&(s=!1)}),s):!1}function dist_Ie(t){return ft(t,!1)&&t.includes(":")?t.split(":").length===2:!1}function Es(t){if(ft(t,!1)&&t.includes(":")){const e=t.split(":");if(e.length===3){const n=e[0]+":"+e[1];return!!e[2]&&dist_Ie(n)}}return!1}function Xa(t){function e(n){try{return typeof new URL(n)<"u"}catch{return!1}}try{if(ft(t,!1)){if(e(t))return!0;const n=cn(t);return e(n)}}catch{}return!1}function Ja(t){var e;return(e=t?.proposer)==null?void 0:e.publicKey}function Qa(t){return t?.topic}function tu(t,e){let n=null;return ft(t?.publicKey,!1)||(n=Bt("MISSING_OR_INVALID",`${e} controller public key should be a string`)),n}function zn(t){let e=!0;return dist_Be(t)?t.length&&(e=t.every(n=>ft(n,!1))):e=!1,e}function Bs(t,e,n){let r=null;return dist_Be(e)&&e.length?e.forEach(o=>{r||dist_Ie(o)||(r=zt("UNSUPPORTED_CHAINS",`${n}, chain ${o} should be a string and conform to "namespace:chainId" format`))}):dist_Ie(t)||(r=zt("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}function Is(t,e,n){let r=null;return Object.entries(t).forEach(([o,s])=>{if(r)return;const i=Bs(o,dist_Se(o,s),`${e} ${n}`);i&&(r=i)}),r}function As(t,e){let n=null;return dist_Be(t)?t.forEach(r=>{n||Es(r)||(n=zt("UNSUPPORTED_ACCOUNTS",`${e}, account ${r} should be a string and conform to "namespace:chainId:address" format`))}):n=zt("UNSUPPORTED_ACCOUNTS",`${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}function Ss(t,e){let n=null;return Object.values(t).forEach(r=>{if(n)return;const o=As(r?.accounts,`${e} namespace`);o&&(n=o)}),n}function Os(t,e){let n=null;return zn(t?.methods)?zn(t?.events)||(n=zt("UNSUPPORTED_EVENTS",`${e}, events should be an array of strings or empty array for no events`)):n=zt("UNSUPPORTED_METHODS",`${e}, methods should be an array of strings or empty array for no methods`),n}function Yn(t,e){let n=null;return Object.values(t).forEach(r=>{if(n)return;const o=Os(r,`${e}, namespace`);o&&(n=o)}),n}function eu(t,e,n){let r=null;if(t&&Ye(t)){const o=Yn(t,e);o&&(r=o);const s=Is(t,e,n);s&&(r=s)}else r=Bt("MISSING_OR_INVALID",`${e}, ${n} should be an object with data`);return r}function Ns(t,e){let n=null;if(t&&Ye(t)){const r=Yn(t,e);r&&(n=r);const o=Ss(t,e);o&&(n=o)}else n=Bt("MISSING_OR_INVALID",`${e}, namespaces should be an object with data`);return n}function Us(t){return ft(t.protocol,!0)}function nu(t,e){let n=!1;return e&&!t?n=!0:t&&dist_Be(t)&&t.length&&t.forEach(r=>{n=Us(r)}),n}function ru(t){return typeof t=="number"}function ou(t){return typeof t<"u"&&typeof t!==null}function su(t){return!(!t||typeof t!="object"||!t.code||!We(t.code,!1)||!t.message||!ft(t.message,!1))}function iu(t){return!(Dt(t)||!ft(t.method,!1))}function cu(t){return!(Dt(t)||Dt(t.result)&&Dt(t.error)||!We(t.id,!1)||!ft(t.jsonrpc,!1))}function fu(t){return!(Dt(t)||!ft(t.name,!1))}function au(t,e){return!(!dist_Ie(e)||!gs(t).includes(e))}function uu(t,e,n){return ft(n,!1)?bs(t,e).includes(n):!1}function lu(t,e,n){return ft(n,!1)?ys(t,e).includes(n):!1}function _s(t,e,n){let r=null;const o=du(t),s=hu(e),i=Object.keys(o),c=Object.keys(s),f=Rs(Object.keys(t)),u=Rs(Object.keys(e)),a=f.filter(l=>!u.includes(l));return a.length&&(r=Bt("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${a.toString()}
      Received: ${Object.keys(e).toString()}`)),At(i,c)||(r=Bt("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.
      Required: ${i.toString()}
      Approved: ${c.toString()}`)),Object.keys(e).forEach(l=>{if(!l.includes(":")||r)return;const d=Gt(e[l].accounts);d.includes(l)||(r=Bt("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${l}
        Required: ${l}
        Approved: ${d.toString()}`))}),i.forEach(l=>{r||(At(o[l].methods,s[l].methods)?At(o[l].events,s[l].events)||(r=Bt("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${l}`)):r=Bt("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${l}`))}),r}function du(t){const e={};return Object.keys(t).forEach(n=>{var r;n.includes(":")?e[n]=t[n]:(r=t[n].chains)==null||r.forEach(o=>{e[o]={methods:t[n].methods,events:t[n].events}})}),e}function Rs(t){return[...new Set(t.map(e=>e.includes(":")?e.split(":")[0]:e))]}function hu(t){const e={};return Object.keys(t).forEach(n=>{if(n.includes(":"))e[n]=t[n];else{const r=Gt(t[n].accounts);r?.forEach(o=>{e[o]={accounts:t[n].accounts.filter(s=>s.includes(`${o}:`)),methods:t[n].methods,events:t[n].events}})}}),e}function pu(t,e){return We(t,!1)&&t<=e.max&&t>=e.min}function gu(){const t=Vt();return new Promise(e=>{switch(t){case et.browser:e($s());break;case et.reactNative:e(Ts());break;case et.node:e(Cs());break;default:e(!0)}})}function $s(){return Wt()&&navigator?.onLine}async function Ts(){if(It()&&typeof __webpack_require__.g<"u"&&__webpack_require__.g!=null&&__webpack_require__.g.NetInfo){const t=await(__webpack_require__.g==null?void 0:__webpack_require__.g.NetInfo.fetch());return t?.isConnected}return!0}function Cs(){return!0}function bu(t){switch(Vt()){case et.browser:js(t);break;case et.reactNative:Ls(t);break;case et.node:break}}function js(t){!It()&&Wt()&&(window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1)))}function Ls(t){It()&&typeof __webpack_require__.g<"u"&&__webpack_require__.g!=null&&__webpack_require__.g.NetInfo&&__webpack_require__.g?.NetInfo.addEventListener(e=>t(e?.isConnected))}function yu(){var t;return Wt()&&(0,dist_cjs.getDocument)()?((t=(0,dist_cjs.getDocument)())==null?void 0:t.visibilityState)==="visible":!0}const Wn={};class mu{static get(e){return Wn[e]}static set(e,n){Wn[e]=n}static delete(e){delete Wn[e]}}function ks(t){const e=esm/* default */.A.decode(t);if(e.length<33)throw new Error("Too short to contain a public key");return e.slice(1,33)}function Ps({publicKey:t,signature:e,payload:n}){var r;const o=Xn(n.method),s=128|parseInt(((r=n.version)==null?void 0:r.toString())||"4"),i=vu(n.address),c=n.era==="00"?new Uint8Array([0]):Xn(n.era);if(c.length!==1&&c.length!==2)throw new Error("Invalid era length");const f=parseInt(n.nonce,16),u=new Uint8Array([f&255,f>>8&255]),a=BigInt(`0x${wu(n.tip)}`),l=Eu(a),d=new Uint8Array([0,...t,i,...e,...c,...u,...l,...o]),h=xu(d.length+1);return new Uint8Array([...h,s,...d])}function Hs(t){const e=Xn(t),n=(0,blakejs.blake2b)(e,void 0,32);return"0x"+Buffer.from(n).toString("hex")}function Xn(t){return new Uint8Array(t.replace(/^0x/,"").match(/.{1,2}/g).map(e=>parseInt(e,16)))}function wu(t){return t.startsWith("0x")?t.slice(2):t}function vu(t){const e=esm/* default */.A.decode(t)[0];return e===42?0:e===60?2:1}function xu(t){if(t<64)return new Uint8Array([t<<2]);if(t<16384){const e=t<<2|1;return new Uint8Array([e&255,e>>8&255])}else if(t<1<<30){const e=t<<2|2;return new Uint8Array([e&255,e>>8&255,e>>16&255,e>>24&255])}else throw new Error("Compact encoding > 2^30 not supported")}function Eu(t){if(t<BigInt(1)<<BigInt(6))return new Uint8Array([Number(t<<BigInt(2))]);if(t<BigInt(1)<<BigInt(14)){const e=t<<BigInt(2)|BigInt(1);return new Uint8Array([Number(e&BigInt(255)),Number(e>>BigInt(8)&BigInt(255))])}else if(t<BigInt(1)<<BigInt(30)){const e=t<<BigInt(2)|BigInt(2);return new Uint8Array([Number(e&BigInt(255)),Number(e>>BigInt(8)&BigInt(255)),Number(e>>BigInt(16)&BigInt(255)),Number(e>>BigInt(24)&BigInt(255))])}else throw new Error("BigInt compact encoding not supported > 2^30")}function Bu(t){const e=Uint8Array.from(Buffer.from(t.signature,"hex")),n=ks(t.transaction.address),r=Ps({publicKey:n,signature:e,payload:t.transaction}),o=Buffer.from(r).toString("hex");return Hs(o)}function Iu({logger:t,name:e}){const n=typeof t=="string"?Ue({opts:{level:t,name:e}}).logger:t;return n.level=typeof t=="string"?t:t.level,n}
//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/@walletconnect/heartbeat/dist/index.es.js
var heartbeat_dist_index_es = __webpack_require__(893532);
// EXTERNAL MODULE: ./node_modules/@walletconnect/keyvaluestorage/dist/index.es.js + 4 modules
var keyvaluestorage_dist_index_es = __webpack_require__(142439);
// EXTERNAL MODULE: ./node_modules/@walletconnect/events/dist/esm/events.js
var esm_events = __webpack_require__(204556);
;// ./node_modules/@walletconnect/types/dist/index.js
var a=Object.defineProperty,u=(e,s,r)=>s in e?a(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,c=(e,s,r)=>u(e,typeof s!="symbol"?s+"":s,r);class h extends esm_events/* IEvents */.H{constructor(s){super(),this.opts=s,c(this,"protocol","wc"),c(this,"version",2)}}class g{constructor(s,r,t){this.core=s,this.logger=r}}var p=Object.defineProperty,dist_b=(e,s,r)=>s in e?p(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,dist_v=(e,s,r)=>dist_b(e,typeof s!="symbol"?s+"":s,r);class dist_I extends esm_events/* IEvents */.H{constructor(s,r){super(),this.core=s,this.logger=r,dist_v(this,"records",new Map)}}class dist_y{constructor(s,r){this.logger=s,this.core=r}}class dist_m extends esm_events/* IEvents */.H{constructor(s,r){super(),this.relayer=s,this.logger=r}}class d extends esm_events/* IEvents */.H{constructor(s){super()}}class f{constructor(s,r,t,q){this.core=s,this.logger=r,this.name=t}}var E=Object.defineProperty,dist_x=(e,s,r)=>s in e?E(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,dist_w=(e,s,r)=>dist_x(e,typeof s!="symbol"?s+"":s,r);class dist_C{constructor(){dist_w(this,"map",new Map)}}class dist_P extends esm_events/* IEvents */.H{constructor(s,r){super(),this.relayer=s,this.logger=r}}class dist_j{constructor(s,r){this.core=s,this.logger=r}}class types_dist_S extends esm_events/* IEvents */.H{constructor(s,r){super(),this.core=s,this.logger=r}}class dist_${constructor(s,r){this.logger=s,this.core=r}}class M{constructor(s,r,t){this.core=s,this.logger=r,this.store=t}}class O{constructor(s,r){this.projectId=s,this.logger=r}}class dist_R{constructor(s,r,t){this.core=s,this.logger=r,this.telemetryEnabled=t}}var dist_T=Object.defineProperty,k=(e,s,r)=>s in e?dist_T(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,i=(e,s,r)=>k(e,typeof s!="symbol"?s+"":s,r);class dist_H extends (events_default()){constructor(){super()}}class types_dist_J{constructor(s){this.opts=s,i(this,"protocol","wc"),i(this,"version",2)}}class types_dist_K extends events.EventEmitter{constructor(){super()}}class dist_V{constructor(s){this.client=s}}
//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/@walletconnect/safe-json/dist/esm/index.js
var dist_esm = __webpack_require__(213554);
// EXTERNAL MODULE: ./node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js
var jsonrpc_provider_dist_index_es = __webpack_require__(827907);
// EXTERNAL MODULE: ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js
var jsonrpc_utils_dist_esm = __webpack_require__(739031);
// EXTERNAL MODULE: ./node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js
var jsonrpc_ws_connection_dist_index_es = __webpack_require__(384365);
;// ./node_modules/@walletconnect/sign-client/node_modules/@walletconnect/core/dist/index.js
/* provided dependency */ var dist_process = __webpack_require__(365606);
const core_dist_Ue="wc",core_dist_Fe=2,core_dist_ge="core",core_dist_W=`${core_dist_Ue}@2:${core_dist_ge}:`,dist_Et={name:core_dist_ge,logger:"error"},dist_It={database:":memory:"},dist_Tt="crypto",core_dist_Me="client_ed25519_seed",dist_Ct=cjs.ONE_DAY,dist_Pt="keychain",dist_St="0.3",dist_Ot="messages",dist_Rt="0.3",dist_At=cjs.SIX_HOURS,dist_xt="publisher",dist_Nt="irn",dist_$t="error",dist_Ke="wss://relay.walletconnect.org",dist_zt="relayer",core_dist_C={message:"relayer_message",message_ack:"relayer_message_ack",connect:"relayer_connect",disconnect:"relayer_disconnect",error:"relayer_error",connection_stalled:"relayer_connection_stalled",transport_closed:"relayer_transport_closed",publish:"relayer_publish"},dist_Lt="_subscription",dist_M={payload:"payload",connect:"connect",disconnect:"disconnect",error:"error"},dist_kt=.1,dist_Js={database:":memory:"},core_dist_Pe="2.23.1",Xs=1e4,core_dist_ee={link_mode:"link_mode",relay:"relay"},core_dist_ye={inbound:"inbound",outbound:"outbound"},dist_jt="0.3",dist_Ut="WALLETCONNECT_CLIENT_ID",core_dist_Be="WALLETCONNECT_LINK_MODE_APPS",core_dist_j={created:"subscription_created",deleted:"subscription_deleted",expired:"subscription_expired",disabled:"subscription_disabled",sync:"subscription_sync",resubscribed:"subscription_resubscribed"},Zs=(/* unused pure expression or super */ null && (Re)),dist_Ft="subscription",dist_Mt="0.3",dist_Qs=cjs.FIVE_SECONDS*1e3,dist_Kt="pairing",dist_Bt="0.3",er=(/* unused pure expression or super */ null && (Re)),core_dist_oe={wc_pairingDelete:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1e3},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1001}},wc_pairingPing:{req:{ttl:cjs.THIRTY_SECONDS,prompt:!1,tag:1002},res:{ttl:cjs.THIRTY_SECONDS,prompt:!1,tag:1003}},unregistered_method:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:0},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:0}}},dist_ae={create:"pairing_create",expire:"pairing_expire",delete:"pairing_delete",ping:"pairing_ping"},core_dist_V={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},dist_Vt="history",dist_qt="0.3",dist_Gt="expirer",dist_q={created:"expirer_created",deleted:"expirer_deleted",expired:"expirer_expired",sync:"expirer_sync"},dist_Wt="0.3",tr=(/* unused pure expression or super */ null && (re)),dist_Ht="verify-api",dist_ir="https://verify.walletconnect.com",Yt="https://verify.walletconnect.org",core_dist_be=Yt,dist_Jt=`${core_dist_be}/v3`,dist_Xt=[dist_ir,Yt],dist_Zt="echo",dist_Qt="https://echo.walletconnect.com",dist_sr="event-client",dist_Y={pairing_started:"pairing_started",pairing_uri_validation_success:"pairing_uri_validation_success",pairing_uri_not_expired:"pairing_uri_not_expired",store_new_pairing:"store_new_pairing",subscribing_pairing_topic:"subscribing_pairing_topic",subscribe_pairing_topic_success:"subscribe_pairing_topic_success",existing_pairing:"existing_pairing",pairing_not_expired:"pairing_not_expired",emit_inactive_pairing:"emit_inactive_pairing",emit_session_proposal:"emit_session_proposal",subscribing_to_pairing_topic:"subscribing_to_pairing_topic"},core_dist_X={no_wss_connection:"no_wss_connection",no_internet_connection:"no_internet_connection",malformed_pairing_uri:"malformed_pairing_uri",active_pairing_already_exists:"active_pairing_already_exists",subscribe_pairing_topic_failure:"subscribe_pairing_topic_failure",pairing_expired:"pairing_expired",proposal_expired:"proposal_expired",proposal_listener_not_found:"proposal_listener_not_found"},dist_rr={session_approve_started:"session_approve_started",proposal_not_expired:"proposal_not_expired",session_namespaces_validation_success:"session_namespaces_validation_success",create_session_topic:"create_session_topic",subscribing_session_topic:"subscribing_session_topic",subscribe_session_topic_success:"subscribe_session_topic_success",publishing_session_approve:"publishing_session_approve",session_approve_publish_success:"session_approve_publish_success",store_session:"store_session",publishing_session_settle:"publishing_session_settle",session_settle_publish_success:"session_settle_publish_success",session_request_response_started:"session_request_response_started",session_request_response_validation_success:"session_request_response_validation_success",session_request_response_publish_started:"session_request_response_publish_started"},nr={no_internet_connection:"no_internet_connection",no_wss_connection:"no_wss_connection",proposal_expired:"proposal_expired",subscribe_session_topic_failure:"subscribe_session_topic_failure",session_approve_publish_failure:"session_approve_publish_failure",session_settle_publish_failure:"session_settle_publish_failure",session_approve_namespace_validation_failure:"session_approve_namespace_validation_failure",proposal_not_found:"proposal_not_found",session_request_response_validation_failure:"session_request_response_validation_failure",session_request_response_publish_failure:"session_request_response_publish_failure"},dist_or={authenticated_session_approve_started:"authenticated_session_approve_started",authenticated_session_not_expired:"authenticated_session_not_expired",chains_caip2_compliant:"chains_caip2_compliant",chains_evm_compliant:"chains_evm_compliant",create_authenticated_session_topic:"create_authenticated_session_topic",cacaos_verified:"cacaos_verified",store_authenticated_session:"store_authenticated_session",subscribing_authenticated_session_topic:"subscribing_authenticated_session_topic",subscribe_authenticated_session_topic_success:"subscribe_authenticated_session_topic_success",publishing_authenticated_session_approve:"publishing_authenticated_session_approve",authenticated_session_approve_publish_success:"authenticated_session_approve_publish_success"},dist_ar={no_internet_connection:"no_internet_connection",no_wss_connection:"no_wss_connection",missing_session_authenticate_request:"missing_session_authenticate_request",session_authenticate_request_expired:"session_authenticate_request_expired",chains_caip2_compliant_failure:"chains_caip2_compliant_failure",chains_evm_compliant_failure:"chains_evm_compliant_failure",invalid_cacao:"invalid_cacao",subscribe_authenticated_session_topic_failure:"subscribe_authenticated_session_topic_failure",authenticated_session_approve_publish_failure:"authenticated_session_approve_publish_failure",authenticated_session_pending_request_not_found:"authenticated_session_pending_request_not_found"},dist_ei=.1,dist_ti="event-client",dist_ii=86400,dist_si="https://pulse.walletconnect.org/batch";function dist_cr(r,e){if(r.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),i=0;i<t.length;i++)t[i]=255;for(var s=0;s<r.length;s++){var n=r.charAt(s),o=n.charCodeAt(0);if(t[o]!==255)throw new TypeError(n+" is ambiguous");t[o]=s}var a=r.length,c=r.charAt(0),h=Math.log(a)/Math.log(256),l=Math.log(256)/Math.log(a);function g(u){if(u instanceof Uint8Array||(ArrayBuffer.isView(u)?u=new Uint8Array(u.buffer,u.byteOffset,u.byteLength):Array.isArray(u)&&(u=Uint8Array.from(u))),!(u instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(u.length===0)return"";for(var m=0,D=0,w=0,E=u.length;w!==E&&u[w]===0;)w++,m++;for(var L=(E-w)*l+1>>>0,I=new Uint8Array(L);w!==E;){for(var k=u[w],T=0,S=L-1;(k!==0||T<D)&&S!==-1;S--,T++)k+=256*I[S]>>>0,I[S]=k%a>>>0,k=k/a>>>0;if(k!==0)throw new Error("Non-zero carry");D=T,w++}for(var O=L-D;O!==L&&I[O]===0;)O++;for(var te=c.repeat(m);O<L;++O)te+=r.charAt(I[O]);return te}function y(u){if(typeof u!="string")throw new TypeError("Expected String");if(u.length===0)return new Uint8Array;var m=0;if(u[m]!==" "){for(var D=0,w=0;u[m]===c;)D++,m++;for(var E=(u.length-m)*h+1>>>0,L=new Uint8Array(E);u[m];){var I=t[u.charCodeAt(m)];if(I===255)return;for(var k=0,T=E-1;(I!==0||k<w)&&T!==-1;T--,k++)I+=a*L[T]>>>0,L[T]=I%256>>>0,I=I/256>>>0;if(I!==0)throw new Error("Non-zero carry");w=k,m++}if(u[m]!==" "){for(var S=E-w;S!==E&&L[S]===0;)S++;for(var O=new Uint8Array(D+(E-S)),te=D;S!==E;)O[te++]=L[S++];return O}}}function _(u){var m=y(u);if(m)return m;throw new Error(`Non-${e} character`)}return{encode:g,decodeUnsafe:y,decode:_}}var dist_hr=dist_cr,dist_lr=dist_hr;const dist_ri=r=>{if(r instanceof Uint8Array&&r.constructor.name==="Uint8Array")return r;if(r instanceof ArrayBuffer)return new Uint8Array(r);if(ArrayBuffer.isView(r))return new Uint8Array(r.buffer,r.byteOffset,r.byteLength);throw new Error("Unknown type, must be binary type")},dist_ur=r=>new TextEncoder().encode(r),dist_dr=r=>new TextDecoder().decode(r);class dist_pr{constructor(e,t,i){this.name=e,this.prefix=t,this.baseEncode=i}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class dist_gr{constructor(e,t,i){if(this.name=e,this.prefix=t,t.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=i}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return dist_ni(this,e)}}class dist_yr{constructor(e){this.decoders=e}or(e){return dist_ni(this,e)}decode(e){const t=e[0],i=this.decoders[t];if(i)return i.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const dist_ni=(r,e)=>new dist_yr({...r.decoders||{[r.prefix]:r},...e.decoders||{[e.prefix]:e}});class dist_br{constructor(e,t,i,s){this.name=e,this.prefix=t,this.baseEncode=i,this.baseDecode=s,this.encoder=new dist_pr(e,t,i),this.decoder=new dist_gr(e,t,s)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const core_dist_Se=({name:r,prefix:e,encode:t,decode:i})=>new dist_br(r,e,t,i),core_dist_me=({prefix:r,name:e,alphabet:t})=>{const{encode:i,decode:s}=dist_lr(t,e);return core_dist_Se({prefix:r,name:e,encode:i,decode:n=>dist_ri(s(n))})},dist_mr=(r,e,t,i)=>{const s={};for(let l=0;l<e.length;++l)s[e[l]]=l;let n=r.length;for(;r[n-1]==="=";)--n;const o=new Uint8Array(n*t/8|0);let a=0,c=0,h=0;for(let l=0;l<n;++l){const g=s[r[l]];if(g===void 0)throw new SyntaxError(`Non-${i} character`);c=c<<t|g,a+=t,a>=8&&(a-=8,o[h++]=255&c>>a)}if(a>=t||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return o},dist_fr=(r,e,t)=>{const i=e[e.length-1]==="=",s=(1<<t)-1;let n="",o=0,a=0;for(let c=0;c<r.length;++c)for(a=a<<8|r[c],o+=8;o>t;)o-=t,n+=e[s&a>>o];if(o&&(n+=e[s&a<<t-o]),i)for(;n.length*t&7;)n+="=";return n},core_dist_x=({name:r,prefix:e,bitsPerChar:t,alphabet:i})=>core_dist_Se({prefix:e,name:r,encode(s){return dist_fr(s,i,t)},decode(s){return dist_mr(s,i,t,r)}}),dist_Dr=core_dist_Se({prefix:"\0",name:"identity",encode:r=>dist_dr(r),decode:r=>dist_ur(r)});var dist_vr=Object.freeze({__proto__:null,identity:dist_Dr});const dist_r=core_dist_x({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});var dist_wr=Object.freeze({__proto__:null,base2:dist_r});const dist_Er=core_dist_x({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});var dist_Ir=Object.freeze({__proto__:null,base8:dist_Er});const dist_Tr=core_dist_me({prefix:"9",name:"base10",alphabet:"0123456789"});var dist_Cr=Object.freeze({__proto__:null,base10:dist_Tr});const dist_Pr=core_dist_x({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),dist_Sr=core_dist_x({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var dist_Or=Object.freeze({__proto__:null,base16:dist_Pr,base16upper:dist_Sr});const dist_Rr=core_dist_x({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),dist_Ar=core_dist_x({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),dist_xr=core_dist_x({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),dist_Nr=core_dist_x({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),dist_$r=core_dist_x({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),dist_zr=core_dist_x({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),dist_Lr=core_dist_x({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),dist_kr=core_dist_x({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),dist_jr=core_dist_x({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});var dist_Ur=Object.freeze({__proto__:null,base32:dist_Rr,base32upper:dist_Ar,base32pad:dist_xr,base32padupper:dist_Nr,base32hex:dist_$r,base32hexupper:dist_zr,base32hexpad:dist_Lr,base32hexpadupper:dist_kr,base32z:dist_jr});const dist_Fr=core_dist_me({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),dist_Mr=core_dist_me({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var dist_Kr=Object.freeze({__proto__:null,base36:dist_Fr,base36upper:dist_Mr});const dist_Br=core_dist_me({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),dist_Vr=core_dist_me({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var dist_qr=Object.freeze({__proto__:null,base58btc:dist_Br,base58flickr:dist_Vr});const dist_Gr=core_dist_x({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),dist_Wr=core_dist_x({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),dist_Hr=core_dist_x({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),dist_Yr=core_dist_x({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var dist_Jr=Object.freeze({__proto__:null,base64:dist_Gr,base64pad:dist_Wr,base64url:dist_Hr,base64urlpad:dist_Yr});const dist_oi=Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"),dist_Xr=dist_oi.reduce((r,e,t)=>(r[t]=e,r),[]),dist_Zr=dist_oi.reduce((r,e,t)=>(r[e.codePointAt(0)]=t,r),[]);function dist_Qr(r){return r.reduce((e,t)=>(e+=dist_Xr[t],e),"")}function dist_en(r){const e=[];for(const t of r){const i=dist_Zr[t.codePointAt(0)];if(i===void 0)throw new Error(`Non-base256emoji character: ${t}`);e.push(i)}return new Uint8Array(e)}const dist_tn=core_dist_Se({prefix:"\u{1F680}",name:"base256emoji",encode:dist_Qr,decode:dist_en});var dist_sn=Object.freeze({__proto__:null,base256emoji:dist_tn}),dist_rn=dist_ci,dist_ai=128,dist_nn=127,dist_on=~dist_nn,dist_an=Math.pow(2,31);function dist_ci(r,e,t){e=e||[],t=t||0;for(var i=t;r>=dist_an;)e[t++]=r&255|dist_ai,r/=128;for(;r&dist_on;)e[t++]=r&255|dist_ai,r>>>=7;return e[t]=r|0,dist_ci.bytes=t-i+1,e}var dist_cn=core_dist_Ve,dist_hn=128,dist_hi=127;function core_dist_Ve(r,i){var t=0,i=i||0,s=0,n=i,o,a=r.length;do{if(n>=a)throw core_dist_Ve.bytes=0,new RangeError("Could not decode varint");o=r[n++],t+=s<28?(o&dist_hi)<<s:(o&dist_hi)*Math.pow(2,s),s+=7}while(o>=dist_hn);return core_dist_Ve.bytes=n-i,t}var dist_ln=Math.pow(2,7),dist_un=Math.pow(2,14),dist_dn=Math.pow(2,21),dist_pn=Math.pow(2,28),dist_gn=Math.pow(2,35),dist_yn=Math.pow(2,42),dist_bn=Math.pow(2,49),dist_mn=Math.pow(2,56),dist_fn=Math.pow(2,63),dist_Dn=function(r){return r<dist_ln?1:r<dist_un?2:r<dist_dn?3:r<dist_pn?4:r<dist_gn?5:r<dist_yn?6:r<dist_bn?7:r<dist_mn?8:r<dist_fn?9:10},dist_vn={encode:dist_rn,decode:dist_cn,encodingLength:dist_Dn},dist_li=dist_vn;const dist_ui=(r,e,t=0)=>(dist_li.encode(r,e,t),e),dist_di=r=>dist_li.encodingLength(r),dist_qe=(r,e)=>{const t=e.byteLength,i=dist_di(r),s=i+dist_di(t),n=new Uint8Array(s+t);return dist_ui(r,n,0),dist_ui(t,n,i),n.set(e,s),new dist_n(r,t,e,n)};class dist_n{constructor(e,t,i,s){this.code=e,this.size=t,this.digest=i,this.bytes=s}}const dist_pi=({name:r,code:e,encode:t})=>new dist_wn(r,e,t);class dist_wn{constructor(e,t,i){this.name=e,this.code=t,this.encode=i}digest(e){if(e instanceof Uint8Array){const t=this.encode(e);return t instanceof Uint8Array?dist_qe(this.code,t):t.then(i=>dist_qe(this.code,i))}else throw Error("Unknown type, must be binary type")}}const dist_gi=r=>async e=>new Uint8Array(await crypto.subtle.digest(r,e)),dist_En=dist_pi({name:"sha2-256",code:18,encode:dist_gi("SHA-256")}),dist_In=dist_pi({name:"sha2-512",code:19,encode:dist_gi("SHA-512")});var dist_Tn=Object.freeze({__proto__:null,sha256:dist_En,sha512:dist_In});const dist_yi=0,dist_Cn="identity",dist_bi=dist_ri,dist_Pn=r=>dist_qe(dist_yi,dist_bi(r)),dist_Sn={code:dist_yi,name:dist_Cn,encode:dist_bi,digest:dist_Pn};var dist_On=Object.freeze({__proto__:null,identity:dist_Sn});new TextEncoder,new TextDecoder;const dist_mi={...dist_vr,...dist_wr,...dist_Ir,...dist_Cr,...dist_Or,...dist_Ur,...dist_Kr,...dist_qr,...dist_Jr,...dist_sn};({...dist_Tn,...dist_On});function dist_fi(r){return globalThis.Buffer!=null?new Uint8Array(r.buffer,r.byteOffset,r.byteLength):r}function dist_Rn(r=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?dist_fi(globalThis.Buffer.allocUnsafe(r)):new Uint8Array(r)}function dist_Di(r,e,t,i){return{name:r,prefix:e,encoder:{name:r,prefix:e,encode:t},decoder:{decode:i}}}const dist_vi=dist_Di("utf8","u",r=>"u"+new TextDecoder("utf8").decode(r),r=>new TextEncoder().encode(r.substring(1))),core_dist_Ge=dist_Di("ascii","a",r=>{let e="a";for(let t=0;t<r.length;t++)e+=String.fromCharCode(r[t]);return e},r=>{r=r.substring(1);const e=dist_Rn(r.length);for(let t=0;t<r.length;t++)e[t]=r.charCodeAt(t);return e}),dist_An={utf8:dist_vi,"utf-8":dist_vi,hex:dist_mi.base16,latin1:core_dist_Ge,ascii:core_dist_Ge,binary:core_dist_Ge,...dist_mi};function dist_xn(r,e="utf8"){const t=dist_An[e];if(!t)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?dist_fi(globalThis.Buffer.from(r,"utf-8")):t.decoder.decode(`${t.prefix}${r}`)}var dist_Nn=Object.defineProperty,dist_$n=(r,e,t)=>e in r?dist_Nn(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,core_dist_J=(r,e,t)=>dist_$n(r,typeof e!="symbol"?e+"":e,t);class dist_i{constructor(e,t){this.core=e,this.logger=t,core_dist_J(this,"keychain",new Map),core_dist_J(this,"name",dist_Pt),core_dist_J(this,"version",dist_St),core_dist_J(this,"initialized",!1),core_dist_J(this,"storagePrefix",core_dist_W),core_dist_J(this,"init",async()=>{if(!this.initialized){const i=await this.getKeyChain();typeof i<"u"&&(this.keychain=i),this.initialized=!0}}),core_dist_J(this,"has",i=>(this.isInitialized(),this.keychain.has(i))),core_dist_J(this,"set",async(i,s)=>{this.isInitialized(),this.keychain.set(i,s),await this.persist()}),core_dist_J(this,"get",i=>{this.isInitialized();const s=this.keychain.get(i);if(typeof s>"u"){const{message:n}=Bt("NO_MATCHING_KEY",`${this.name}: ${i}`);throw new Error(n)}return s}),core_dist_J(this,"del",async i=>{this.isInitialized(),this.keychain.delete(i),await this.persist()}),this.core=e,this.logger=index_es_Re(t,this.name)}get context(){return ee(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setKeyChain(e){await this.core.storage.setItem(this.storageKey,vi(e))}async getKeyChain(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?xi(e):void 0}async persist(){await this.setKeyChain(this.keychain)}isInitialized(){if(!this.initialized){const{message:e}=Bt("NOT_INITIALIZED",this.name);throw new Error(e)}}}var dist_zn=Object.defineProperty,dist_Ln=(r,e,t)=>e in r?dist_zn(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,core_dist_R=(r,e,t)=>dist_Ln(r,typeof e!="symbol"?e+"":e,t);class dist_wi{constructor(e,t,i){this.core=e,this.logger=t,core_dist_R(this,"name",dist_Tt),core_dist_R(this,"keychain"),core_dist_R(this,"randomSessionIdentifier",pa()),core_dist_R(this,"initialized",!1),core_dist_R(this,"clientId"),core_dist_R(this,"init",async()=>{this.initialized||(await this.keychain.init(),this.initialized=!0)}),core_dist_R(this,"hasKeys",s=>(this.isInitialized(),this.keychain.has(s))),core_dist_R(this,"getClientId",async()=>{if(this.isInitialized(),this.clientId)return this.clientId;const s=await this.getClientSeed(),n=index_es/* generateKeyPair */.TZ(s),o=index_es/* encodeIss */.UF(n.publicKey);return this.clientId=o,o}),core_dist_R(this,"generateKeyPair",()=>{this.isInitialized();const s=ha();return this.setPrivateKey(s.publicKey,s.privateKey)}),core_dist_R(this,"signJWT",async s=>{this.isInitialized();const n=await this.getClientSeed(),o=index_es/* generateKeyPair */.TZ(n),a=this.randomSessionIdentifier,c=dist_Ct;return await index_es/* signJWT */.FA(a,s,c,o)}),core_dist_R(this,"generateSharedKey",(s,n,o)=>{this.isInitialized();const a=this.getPrivateKey(s),c=ga(a,n);return this.setSymKey(c,o)}),core_dist_R(this,"setSymKey",async(s,n)=>{this.isInitialized();const o=n||ba(s);return await this.keychain.set(o,s),o}),core_dist_R(this,"deleteKeyPair",async s=>{this.isInitialized(),await this.keychain.del(s)}),core_dist_R(this,"deleteSymKey",async s=>{this.isInitialized(),await this.keychain.del(s)}),core_dist_R(this,"encode",async(s,n,o)=>{this.isInitialized();const a=ss(o),c=(0,dist_esm/* safeJsonStringify */.h)(n);if(Ia(a))return va(c,o?.encoding);if(Ba(a)){const y=a.senderPublicKey,_=a.receiverPublicKey;s=await this.generateSharedKey(y,_)}const h=this.getSymKey(s),{type:l,senderPublicKey:g}=a;return ma({type:l,symKey:h,message:c,senderPublicKey:g,encoding:o?.encoding})}),core_dist_R(this,"decode",async(s,n,o)=>{this.isInitialized();const a=Ea(n,o);if(Ia(a)){const c=xa(n,o?.encoding);return (0,dist_esm/* safeJsonParse */.j)(c)}if(Ba(a)){const c=a.receiverPublicKey,h=a.senderPublicKey;s=await this.generateSharedKey(c,h)}try{const c=this.getSymKey(s),h=wa({symKey:c,encoded:n,encoding:o?.encoding});return (0,dist_esm/* safeJsonParse */.j)(h)}catch(c){this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`),this.logger.error(c)}}),core_dist_R(this,"getPayloadType",(s,n=dist_oe)=>{const o=dist_ze({encoded:s,encoding:n});return Zt(o.type)}),core_dist_R(this,"getPayloadSenderPublicKey",(s,n=dist_oe)=>{const o=dist_ze({encoded:s,encoding:n});return o.senderPublicKey?(0,src/* toString */.dI)(o.senderPublicKey,rt):void 0}),this.core=e,this.logger=index_es_Re(t,this.name),this.keychain=i||new dist_i(this.core,this.logger)}get context(){return ee(this.logger)}async setPrivateKey(e,t){return await this.keychain.set(e,t),e}getPrivateKey(e){return this.keychain.get(e)}async getClientSeed(){let e="";try{e=this.keychain.get(core_dist_Me)}catch{e=pa(),await this.keychain.set(core_dist_Me,e)}return dist_xn(e,"base16")}getSymKey(e){return this.keychain.get(e)}isInitialized(){if(!this.initialized){const{message:e}=Bt("NOT_INITIALIZED",this.name);throw new Error(e)}}}var dist_kn=Object.defineProperty,dist_jn=Object.defineProperties,dist_Un=Object.getOwnPropertyDescriptors,dist_Ei=Object.getOwnPropertySymbols,dist_Fn=Object.prototype.hasOwnProperty,dist_Mn=Object.prototype.propertyIsEnumerable,dist_We=(r,e,t)=>e in r?dist_kn(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,dist_Kn=(r,e)=>{for(var t in e||(e={}))dist_Fn.call(e,t)&&dist_We(r,t,e[t]);if(dist_Ei)for(var t of dist_Ei(e))dist_Mn.call(e,t)&&dist_We(r,t,e[t]);return r},dist_Bn=(r,e)=>dist_jn(r,dist_Un(e)),core_dist_K=(r,e,t)=>dist_We(r,typeof e!="symbol"?e+"":e,t);class dist_Ii extends dist_y{constructor(e,t){super(e,t),this.logger=e,this.core=t,core_dist_K(this,"messages",new Map),core_dist_K(this,"messagesWithoutClientAck",new Map),core_dist_K(this,"name",dist_Ot),core_dist_K(this,"version",dist_Rt),core_dist_K(this,"initialized",!1),core_dist_K(this,"storagePrefix",core_dist_W),core_dist_K(this,"init",async()=>{if(!this.initialized){this.logger.trace("Initialized");try{const i=await this.getRelayerMessages();typeof i<"u"&&(this.messages=i);const s=await this.getRelayerMessagesWithoutClientAck();typeof s<"u"&&(this.messagesWithoutClientAck=s),this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",size:this.messages.size})}catch(i){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(i)}finally{this.initialized=!0}}}),core_dist_K(this,"set",async(i,s,n)=>{this.isInitialized();const o=ya(s);let a=this.messages.get(i);if(typeof a>"u"&&(a={}),typeof a[o]<"u")return o;if(a[o]=s,this.messages.set(i,a),n===core_dist_ye.inbound){const c=this.messagesWithoutClientAck.get(i)||{};this.messagesWithoutClientAck.set(i,dist_Bn(dist_Kn({},c),{[o]:s}))}return await this.persist(),o}),core_dist_K(this,"get",i=>{this.isInitialized();let s=this.messages.get(i);return typeof s>"u"&&(s={}),s}),core_dist_K(this,"getWithoutAck",i=>{this.isInitialized();const s={};for(const n of i){const o=this.messagesWithoutClientAck.get(n)||{};s[n]=Object.values(o)}return s}),core_dist_K(this,"has",(i,s)=>{this.isInitialized();const n=this.get(i),o=ya(s);return typeof n[o]<"u"}),core_dist_K(this,"ack",async(i,s)=>{this.isInitialized();const n=this.messagesWithoutClientAck.get(i);if(typeof n>"u")return;const o=ya(s);delete n[o],Object.keys(n).length===0?this.messagesWithoutClientAck.delete(i):this.messagesWithoutClientAck.set(i,n),await this.persist()}),core_dist_K(this,"del",async i=>{this.isInitialized(),this.messages.delete(i),this.messagesWithoutClientAck.delete(i),await this.persist()}),this.logger=index_es_Re(e,this.name),this.core=t}get context(){return ee(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get storageKeyWithoutClientAck(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name+"_withoutClientAck"}async setRelayerMessages(e){await this.core.storage.setItem(this.storageKey,vi(e))}async setRelayerMessagesWithoutClientAck(e){await this.core.storage.setItem(this.storageKeyWithoutClientAck,vi(e))}async getRelayerMessages(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?xi(e):void 0}async getRelayerMessagesWithoutClientAck(){const e=await this.core.storage.getItem(this.storageKeyWithoutClientAck);return typeof e<"u"?xi(e):void 0}async persist(){await this.setRelayerMessages(this.messages),await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck)}isInitialized(){if(!this.initialized){const{message:e}=Bt("NOT_INITIALIZED",this.name);throw new Error(e)}}}var dist_Vn=Object.defineProperty,dist_qn=Object.defineProperties,dist_Gn=Object.getOwnPropertyDescriptors,dist_Ti=Object.getOwnPropertySymbols,dist_Wn=Object.prototype.hasOwnProperty,dist_Hn=Object.prototype.propertyIsEnumerable,dist_He=(r,e,t)=>e in r?dist_Vn(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,dist_ce=(r,e)=>{for(var t in e||(e={}))dist_Wn.call(e,t)&&dist_He(r,t,e[t]);if(dist_Ti)for(var t of dist_Ti(e))dist_Hn.call(e,t)&&dist_He(r,t,e[t]);return r},dist_Ci=(r,e)=>dist_qn(r,dist_Gn(e)),dist_G=(r,e,t)=>dist_He(r,typeof e!="symbol"?e+"":e,t);class dist_Yn extends dist_m{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,dist_G(this,"events",new events.EventEmitter),dist_G(this,"name",dist_xt),dist_G(this,"queue",new Map),dist_G(this,"publishTimeout",(0,cjs.toMiliseconds)(cjs.ONE_MINUTE)),dist_G(this,"initialPublishTimeout",(0,cjs.toMiliseconds)(cjs.ONE_SECOND*15)),dist_G(this,"needsTransportRestart",!1),dist_G(this,"publish",async(i,s,n)=>{var o,a,c,h,l;this.logger.debug("Publishing Payload"),this.logger.trace({type:"method",method:"publish",params:{topic:i,message:s,opts:n}});const g=n?.ttl||dist_At,y=n?.prompt||!1,_=n?.tag||0,u=n?.id||(0,jsonrpc_utils_dist_esm.getBigIntRpcId)().toString(),m=Oa(Sa().protocol),D={id:u,method:n?.publishMethod||m.publish,params:dist_ce({topic:i,message:s,ttl:g,prompt:y,tag:_,attestation:n?.attestation},n?.tvf)},w=`Failed to publish payload, please try again. id:${u} tag:${_}`;try{Dt((o=D.params)==null?void 0:o.prompt)&&((a=D.params)==null||delete a.prompt),Dt((c=D.params)==null?void 0:c.tag)&&((h=D.params)==null||delete h.tag);const E=new Promise(async L=>{const I=({id:T})=>{var S;((S=D.id)==null?void 0:S.toString())===T.toString()&&(this.removeRequestFromQueue(T),this.relayer.events.removeListener(core_dist_C.publish,I),L())};this.relayer.events.on(core_dist_C.publish,I);const k=dist_Si(new Promise((T,S)=>{this.rpcPublish(D,n).then(T).catch(O=>{this.logger.warn(O,O?.message),S(O)})}),this.initialPublishTimeout,`Failed initial publish, retrying.... id:${u} tag:${_}`);try{await k,this.events.removeListener(core_dist_C.publish,I)}catch(T){this.queue.set(u,{request:D,opts:n,attempt:1}),this.logger.warn(T,T?.message)}});this.logger.trace({type:"method",method:"publish",params:{id:u,topic:i,message:s,opts:n}}),await dist_Si(E,this.publishTimeout,w)}catch(E){if(this.logger.debug("Failed to Publish Payload"),this.logger.error(E),(l=n?.internal)!=null&&l.throwOnFailedPublish)throw E}finally{this.queue.delete(u)}}),dist_G(this,"publishCustom",async i=>{var s,n,o,a,c;this.logger.debug("Publishing custom payload"),this.logger.trace({type:"method",method:"publishCustom",params:i});const{payload:h,opts:l={}}=i,{attestation:g,tvf:y,publishMethod:_,prompt:u,tag:m,ttl:D=cjs.FIVE_MINUTES}=l,w=l.id||(0,jsonrpc_utils_dist_esm.getBigIntRpcId)().toString(),E=Oa(Sa().protocol),L=_||E.publish,I={id:w,method:L,params:dist_ce(dist_Ci(dist_ce({},h),{ttl:D,prompt:u,tag:m,attestation:g}),y)},k=`Failed to publish custom payload, please try again. id:${w} tag:${m}`;try{Dt((s=I.params)==null?void 0:s.prompt)&&((n=I.params)==null||delete n.prompt),Dt((o=I.params)==null?void 0:o.tag)&&((a=I.params)==null||delete a.tag);const T=new Promise(async S=>{const O=({id:Z})=>{var we;((we=I.id)==null?void 0:we.toString())===Z.toString()&&(this.removeRequestFromQueue(Z),this.relayer.events.removeListener(core_dist_C.publish,O),S())};this.relayer.events.on(core_dist_C.publish,O);const te=dist_Si(new Promise((Z,we)=>{this.rpcPublish(I,l).then(Z).catch(Ee=>{this.logger.warn(Ee,Ee?.message),we(Ee)})}),this.initialPublishTimeout,`Failed initial custom payload publish, retrying.... method:${L} id:${w} tag:${m}`);try{await te,this.events.removeListener(core_dist_C.publish,O)}catch(Z){this.queue.set(w,{request:I,opts:l,attempt:1}),this.logger.warn(Z,Z?.message)}});this.logger.trace({type:"method",method:"publish",params:{id:w,payload:h,opts:l}}),await dist_Si(T,this.publishTimeout,k)}catch(T){if(this.logger.debug("Failed to Publish Payload"),this.logger.error(T),(c=l?.internal)!=null&&c.throwOnFailedPublish)throw T}finally{this.queue.delete(w)}}),dist_G(this,"on",(i,s)=>{this.events.on(i,s)}),dist_G(this,"once",(i,s)=>{this.events.once(i,s)}),dist_G(this,"off",(i,s)=>{this.events.off(i,s)}),dist_G(this,"removeListener",(i,s)=>{this.events.removeListener(i,s)}),this.relayer=e,this.logger=index_es_Re(t,this.name),this.registerEventListeners()}get context(){return ee(this.logger)}async rpcPublish(e,t){this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"message",direction:"outgoing",request:e});const i=await this.relayer.request(e);return this.relayer.events.emit(core_dist_C.publish,dist_ce(dist_ce({},e),t)),this.logger.debug("Successfully Published Payload"),i}removeRequestFromQueue(e){this.queue.delete(e)}checkQueue(){this.queue.forEach(async(e,t)=>{var i;const s=e.attempt+1;this.queue.set(t,dist_Ci(dist_ce({},e),{attempt:s})),this.logger.warn({},`Publisher: queue->publishing: ${e.request.id}, tag: ${(i=e.request.params)==null?void 0:i.tag}, attempt: ${s}`),await this.rpcPublish(e.request,e.opts),this.logger.warn({},`Publisher: queue->published: ${e.request.id}`)})}registerEventListeners(){this.relayer.core.heartbeat.on(heartbeat_dist_index_es/* HEARTBEAT_EVENTS */.li.pulse,()=>{if(this.needsTransportRestart){this.needsTransportRestart=!1,this.relayer.events.emit(core_dist_C.connection_stalled);return}this.checkQueue()}),this.relayer.on(core_dist_C.message_ack,e=>{this.removeRequestFromQueue(e.id.toString())})}}var dist_Jn=Object.defineProperty,dist_Xn=(r,e,t)=>e in r?dist_Jn(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,core_dist_he=(r,e,t)=>dist_Xn(r,typeof e!="symbol"?e+"":e,t);class dist_Zn{constructor(){core_dist_he(this,"map",new Map),core_dist_he(this,"set",(e,t)=>{const i=this.get(e);this.exists(e,t)||this.map.set(e,[...i,t])}),core_dist_he(this,"get",e=>this.map.get(e)||[]),core_dist_he(this,"exists",(e,t)=>this.get(e).includes(t)),core_dist_he(this,"delete",(e,t)=>{if(typeof t>"u"){this.map.delete(e);return}if(!this.map.has(e))return;const i=this.get(e);if(!this.exists(e,t))return;const s=i.filter(n=>n!==t);if(!s.length){this.map.delete(e);return}this.map.set(e,s)}),core_dist_he(this,"clear",()=>{this.map.clear()})}get topics(){return Array.from(this.map.keys())}}var Qn=Object.defineProperty,dist_eo=Object.defineProperties,dist_to=Object.getOwnPropertyDescriptors,dist_Pi=Object.getOwnPropertySymbols,dist_io=Object.prototype.hasOwnProperty,dist_so=Object.prototype.propertyIsEnumerable,dist_Ye=(r,e,t)=>e in r?Qn(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,dist_fe=(r,e)=>{for(var t in e||(e={}))dist_io.call(e,t)&&dist_Ye(r,t,e[t]);if(dist_Pi)for(var t of dist_Pi(e))dist_so.call(e,t)&&dist_Ye(r,t,e[t]);return r},dist_Je=(r,e)=>dist_eo(r,dist_to(e)),dist_f=(r,e,t)=>dist_Ye(r,typeof e!="symbol"?e+"":e,t);class Si extends dist_P{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,dist_f(this,"subscriptions",new Map),dist_f(this,"topicMap",new dist_Zn),dist_f(this,"events",new events.EventEmitter),dist_f(this,"name",dist_Ft),dist_f(this,"version",dist_Mt),dist_f(this,"pending",new Map),dist_f(this,"cached",[]),dist_f(this,"initialized",!1),dist_f(this,"storagePrefix",core_dist_W),dist_f(this,"subscribeTimeout",(0,cjs.toMiliseconds)(cjs.ONE_MINUTE)),dist_f(this,"initialSubscribeTimeout",(0,cjs.toMiliseconds)(cjs.ONE_SECOND*15)),dist_f(this,"clientId"),dist_f(this,"batchSubscribeTopicsLimit",500),dist_f(this,"init",async()=>{this.initialized||(this.logger.trace("Initialized"),this.registerEventListeners(),await this.restore()),this.initialized=!0}),dist_f(this,"subscribe",async(i,s)=>{var n;this.isInitialized(),this.logger.debug("Subscribing Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:i,opts:s}});try{const o=Sa(s),a={topic:i,relay:o,transportType:s?.transportType};(n=s?.internal)!=null&&n.skipSubscribe||this.pending.set(i,a);const c=await this.rpcSubscribe(i,o,s);return typeof c=="string"&&(this.onSubscribe(c,a),this.logger.debug("Successfully Subscribed Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:i,opts:s}})),c}catch(o){throw this.logger.debug("Failed to Subscribe Topic"),this.logger.error(o),o}}),dist_f(this,"unsubscribe",async(i,s)=>{this.isInitialized(),typeof s?.id<"u"?await this.unsubscribeById(i,s.id,s):await this.unsubscribeByTopic(i,s)}),dist_f(this,"isSubscribed",i=>new Promise(s=>{s(this.topicMap.topics.includes(i))})),dist_f(this,"isKnownTopic",i=>new Promise(s=>{s(this.topicMap.topics.includes(i)||this.pending.has(i)||this.cached.some(n=>n.topic===i))})),dist_f(this,"on",(i,s)=>{this.events.on(i,s)}),dist_f(this,"once",(i,s)=>{this.events.once(i,s)}),dist_f(this,"off",(i,s)=>{this.events.off(i,s)}),dist_f(this,"removeListener",(i,s)=>{this.events.removeListener(i,s)}),dist_f(this,"start",async()=>{await this.onConnect()}),dist_f(this,"stop",async()=>{await this.onDisconnect()}),dist_f(this,"restart",async()=>{await this.restore(),await this.onRestart()}),dist_f(this,"checkPending",async()=>{if(this.pending.size===0&&(!this.initialized||!this.relayer.connected))return;const i=[];this.pending.forEach(s=>{i.push(s)}),await this.batchSubscribe(i)}),dist_f(this,"registerEventListeners",()=>{this.relayer.core.heartbeat.on(heartbeat_dist_index_es/* HEARTBEAT_EVENTS */.li.pulse,async()=>{await this.checkPending()}),this.events.on(core_dist_j.created,async i=>{const s=core_dist_j.created;this.logger.info(`Emitting ${s}`),this.logger.debug({type:"event",event:s,data:i}),await this.persist()}),this.events.on(core_dist_j.deleted,async i=>{const s=core_dist_j.deleted;this.logger.info(`Emitting ${s}`),this.logger.debug({type:"event",event:s,data:i}),await this.persist()})}),this.relayer=e,this.logger=index_es_Re(t,this.name),this.clientId=""}get context(){return ee(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.relayer.core.customStoragePrefix+"//"+this.name}get length(){return this.subscriptions.size}get ids(){return Array.from(this.subscriptions.keys())}get values(){return Array.from(this.subscriptions.values())}get topics(){return this.topicMap.topics}get hasAnyTopics(){return this.topicMap.topics.length>0||this.pending.size>0||this.cached.length>0||this.subscriptions.size>0}hasSubscription(e,t){let i=!1;try{i=this.getSubscription(e).topic===t}catch{}return i}reset(){this.cached=[],this.initialized=!0}onDisable(){this.values.length>0&&(this.cached=this.values),this.subscriptions.clear(),this.topicMap.clear()}async unsubscribeByTopic(e,t){const i=this.topicMap.get(e);await Promise.all(i.map(async s=>await this.unsubscribeById(e,s,t)))}async unsubscribeById(e,t,i){this.logger.debug("Unsubscribing Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:i}});try{const s=Sa(i);await this.restartToComplete({topic:e,id:t,relay:s}),await this.rpcUnsubscribe(e,t,s);const n=zt("USER_DISCONNECTED",`${this.name}, ${e}`);await this.onUnsubscribe(e,t,n),this.logger.debug("Successfully Unsubscribed Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:i}})}catch(s){throw this.logger.debug("Failed to Unsubscribe Topic"),this.logger.error(s),s}}async rpcSubscribe(e,t,i){var s,n;const o=await this.getSubscriptionId(e);if((s=i?.internal)!=null&&s.skipSubscribe)return o;(!i||i?.transportType===core_dist_ee.relay)&&await this.restartToComplete({topic:e,id:e,relay:t});const a={method:Oa(t.protocol).subscribe,params:{topic:e}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:a});const c=(n=i?.internal)==null?void 0:n.throwOnFailedPublish;try{if(i?.transportType===core_dist_ee.link_mode)return setTimeout(()=>{(this.relayer.connected||this.relayer.connecting)&&this.relayer.request(a).catch(g=>this.logger.warn(g))},(0,cjs.toMiliseconds)(cjs.ONE_SECOND)),o;const h=new Promise(async g=>{const y=_=>{_.topic===e&&(this.events.removeListener(core_dist_j.created,y),g(_.id))};this.events.on(core_dist_j.created,y);try{const _=await dist_Si(new Promise((u,m)=>{this.relayer.request(a).catch(D=>{this.logger.warn(D,D?.message),m(D)}).then(u)}),this.initialSubscribeTimeout,`Subscribing to ${e} failed, please try again`);this.events.removeListener(core_dist_j.created,y),g(_)}catch{}}),l=await dist_Si(h,this.subscribeTimeout,`Subscribing to ${e} failed, please try again`);if(!l&&c)throw new Error(`Subscribing to ${e} failed, please try again`);return l?o:null}catch(h){if(this.logger.debug("Outgoing Relay Subscribe Payload stalled"),this.relayer.events.emit(core_dist_C.connection_stalled),c)throw h}return null}async rpcBatchSubscribe(e){if(!e.length)return;const t=e[0].relay,i={method:Oa(t.protocol).batchSubscribe,params:{topics:e.map(s=>s.topic)}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:i});try{await await dist_Si(new Promise(s=>{this.relayer.request(i).catch(n=>this.logger.warn(n)).then(s)}),this.subscribeTimeout,"rpcBatchSubscribe failed, please try again")}catch{this.relayer.events.emit(core_dist_C.connection_stalled)}}async rpcBatchFetchMessages(e){if(!e.length)return;const t=e[0].relay,i={method:Oa(t.protocol).batchFetchMessages,params:{topics:e.map(n=>n.topic)}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:i});let s;try{s=await await dist_Si(new Promise((n,o)=>{this.relayer.request(i).catch(a=>{this.logger.warn(a),o(a)}).then(n)}),this.subscribeTimeout,"rpcBatchFetchMessages failed, please try again")}catch{this.relayer.events.emit(core_dist_C.connection_stalled)}return s}rpcUnsubscribe(e,t,i){const s={method:Oa(i.protocol).unsubscribe,params:{topic:e,id:t}};return this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:s}),this.relayer.request(s)}onSubscribe(e,t){this.setSubscription(e,dist_Je(dist_fe({},t),{id:e})),this.pending.delete(t.topic)}onBatchSubscribe(e){e.length&&e.forEach(t=>{this.setSubscription(t.id,dist_fe({},t)),this.pending.delete(t.topic)})}async onUnsubscribe(e,t,i){this.events.removeAllListeners(t),this.hasSubscription(t,e)&&this.deleteSubscription(t,i),await this.relayer.messages.del(e)}async setRelayerSubscriptions(e){await this.relayer.core.storage.setItem(this.storageKey,e)}async getRelayerSubscriptions(){return await this.relayer.core.storage.getItem(this.storageKey)}setSubscription(e,t){this.logger.debug("Setting subscription"),this.logger.trace({type:"method",method:"setSubscription",id:e,subscription:t}),this.addSubscription(e,t)}addSubscription(e,t){this.subscriptions.set(e,dist_fe({},t)),this.topicMap.set(t.topic,e),this.events.emit(core_dist_j.created,t)}getSubscription(e){this.logger.debug("Getting subscription"),this.logger.trace({type:"method",method:"getSubscription",id:e});const t=this.subscriptions.get(e);if(!t){const{message:i}=Bt("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(i)}return t}deleteSubscription(e,t){this.logger.debug("Deleting subscription"),this.logger.trace({type:"method",method:"deleteSubscription",id:e,reason:t});const i=this.getSubscription(e);this.subscriptions.delete(e),this.topicMap.delete(i.topic,e),this.events.emit(core_dist_j.deleted,dist_Je(dist_fe({},i),{reason:t}))}async persist(){await this.setRelayerSubscriptions(this.values),this.events.emit(core_dist_j.sync)}async onRestart(){if(this.cached.length){const e=[...this.cached],t=Math.ceil(this.cached.length/this.batchSubscribeTopicsLimit);for(let i=0;i<t;i++){const s=e.splice(0,this.batchSubscribeTopicsLimit);await this.batchSubscribe(s)}}this.events.emit(core_dist_j.resubscribed)}async restore(){try{const e=await this.getRelayerSubscriptions();if(typeof e>"u"||!e.length)return;if(this.subscriptions.size&&!e.every(t=>{var i;return t.topic===((i=this.subscriptions.get(t.id))==null?void 0:i.topic)})){const{message:t}=Bt("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),this.logger.trace({type:"method",method:"restore",subscriptions:this.values})}catch(e){this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),this.logger.error(e)}}async batchSubscribe(e){e.length&&(await this.rpcBatchSubscribe(e),this.onBatchSubscribe(await Promise.all(e.map(async t=>dist_Je(dist_fe({},t),{id:await this.getSubscriptionId(t.topic)})))))}async batchFetchMessages(e){if(!e.length)return;this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);const t=await this.rpcBatchFetchMessages(e);t&&t.messages&&(await Pi((0,cjs.toMiliseconds)(cjs.ONE_SECOND)),await this.relayer.handleBatchMessageEvents(t.messages))}async onConnect(){await this.restart(),this.reset()}onDisconnect(){this.onDisable()}isInitialized(){if(!this.initialized){const{message:e}=Bt("NOT_INITIALIZED",this.name);throw new Error(e)}}async restartToComplete(e){!this.relayer.connected&&!this.relayer.connecting&&(this.cached.push(e),await this.relayer.transportOpen())}async getClientId(){return this.clientId||(this.clientId=await this.relayer.core.crypto.getClientId()),this.clientId}async getSubscriptionId(e){return ya(e+await this.getClientId())}}var dist_ro=Object.defineProperty,dist_Oi=Object.getOwnPropertySymbols,dist_no=Object.prototype.hasOwnProperty,dist_oo=Object.prototype.propertyIsEnumerable,Xe=(r,e,t)=>e in r?dist_ro(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,dist_Ri=(r,e)=>{for(var t in e||(e={}))dist_no.call(e,t)&&Xe(r,t,e[t]);if(dist_Oi)for(var t of dist_Oi(e))dist_oo.call(e,t)&&Xe(r,t,e[t]);return r},dist_p=(r,e,t)=>Xe(r,typeof e!="symbol"?e+"":e,t);class dist_Ai extends d{constructor(e){var t;super(e),dist_p(this,"protocol","wc"),dist_p(this,"version",2),dist_p(this,"core"),dist_p(this,"logger"),dist_p(this,"events",new events.EventEmitter),dist_p(this,"provider"),dist_p(this,"messages"),dist_p(this,"subscriber"),dist_p(this,"publisher"),dist_p(this,"name",dist_zt),dist_p(this,"transportExplicitlyClosed",!1),dist_p(this,"initialized",!1),dist_p(this,"connectionAttemptInProgress",!1),dist_p(this,"relayUrl"),dist_p(this,"projectId"),dist_p(this,"packageName"),dist_p(this,"bundleId"),dist_p(this,"hasExperiencedNetworkDisruption",!1),dist_p(this,"pingTimeout"),dist_p(this,"heartBeatTimeout",(0,cjs.toMiliseconds)(cjs.THIRTY_SECONDS+cjs.FIVE_SECONDS)),dist_p(this,"reconnectTimeout"),dist_p(this,"connectPromise"),dist_p(this,"reconnectInProgress",!1),dist_p(this,"requestsInFlight",[]),dist_p(this,"connectTimeout",(0,cjs.toMiliseconds)(cjs.ONE_SECOND*15)),dist_p(this,"request",async i=>{var s,n;this.logger.debug("Publishing Request Payload");const o=i.id||(0,jsonrpc_utils_dist_esm.getBigIntRpcId)().toString();await this.toEstablishConnection();try{this.logger.trace({id:o,method:i.method,topic:(s=i.params)==null?void 0:s.topic},"relayer.request - publishing...");const a=`${o}:${((n=i.params)==null?void 0:n.tag)||""}`;this.requestsInFlight.push(a);const c=await this.provider.request(i);return this.requestsInFlight=this.requestsInFlight.filter(h=>h!==a),c}catch(a){throw this.logger.debug(`Failed to Publish Request: ${o}`),a}}),dist_p(this,"resetPingTimeout",()=>{rn()&&(clearTimeout(this.pingTimeout),this.pingTimeout=setTimeout(()=>{var i,s,n,o;try{this.logger.debug({},"pingTimeout: Connection stalled, terminating..."),(o=(n=(s=(i=this.provider)==null?void 0:i.connection)==null?void 0:s.socket)==null?void 0:n.terminate)==null||o.call(n)}catch(a){this.logger.warn(a,a?.message)}},this.heartBeatTimeout))}),dist_p(this,"onPayloadHandler",i=>{this.onProviderPayload(i),this.resetPingTimeout()}),dist_p(this,"onConnectHandler",()=>{this.logger.warn({},"Relayer connected \u{1F6DC}"),this.startPingTimeout(),this.events.emit(core_dist_C.connect)}),dist_p(this,"onDisconnectHandler",()=>{this.logger.warn({},"Relayer disconnected \u{1F6D1}"),this.requestsInFlight=[],this.onProviderDisconnect()}),dist_p(this,"onProviderErrorHandler",i=>{this.logger.fatal(`Fatal socket error: ${i.message}`),this.events.emit(core_dist_C.error,i),this.logger.fatal("Fatal socket error received, closing transport"),this.transportClose()}),dist_p(this,"registerProviderListeners",()=>{this.provider.on(dist_M.payload,this.onPayloadHandler),this.provider.on(dist_M.connect,this.onConnectHandler),this.provider.on(dist_M.disconnect,this.onDisconnectHandler),this.provider.on(dist_M.error,this.onProviderErrorHandler)}),this.core=e.core,this.logger=Iu({logger:(t=e.logger)!=null?t:dist_$t,name:this.name}),this.messages=new dist_Ii(this.logger,e.core),this.subscriber=new Si(this,this.logger),this.publisher=new dist_Yn(this,this.logger),this.projectId=e?.projectId,this.relayUrl=e?.relayUrl||dist_Ke,li()?this.packageName=hi():di()&&(this.bundleId=hi()),this.provider={}}async init(){this.logger.trace("Initialized"),this.registerEventListeners(),await Promise.all([this.messages.init(),this.subscriber.init()]),this.initialized=!0,this.transportOpen().catch(e=>this.logger.warn(e,e?.message))}get context(){return ee(this.logger)}get connected(){var e,t,i;return((i=(t=(e=this.provider)==null?void 0:e.connection)==null?void 0:t.socket)==null?void 0:i.readyState)===1||!1}get connecting(){var e,t,i;return((i=(t=(e=this.provider)==null?void 0:e.connection)==null?void 0:t.socket)==null?void 0:i.readyState)===0||this.connectPromise!==void 0||!1}async publish(e,t,i){this.isInitialized(),await this.publisher.publish(e,t,i),await this.recordMessageEvent({topic:e,message:t,publishedAt:Date.now(),transportType:core_dist_ee.relay},core_dist_ye.outbound)}async publishCustom(e){this.isInitialized(),await this.publisher.publishCustom(e)}async subscribe(e,t){var i,s,n;this.isInitialized(),(!(t!=null&&t.transportType)||t?.transportType==="relay")&&await this.toEstablishConnection();const o=typeof((i=t?.internal)==null?void 0:i.throwOnFailedPublish)>"u"?!0:(s=t?.internal)==null?void 0:s.throwOnFailedPublish;let a=((n=this.subscriber.topicMap.get(e))==null?void 0:n[0])||"",c;const h=l=>{l.topic===e&&(this.subscriber.off(core_dist_j.created,h),c())};return await Promise.all([new Promise(l=>{c=l,this.subscriber.on(core_dist_j.created,h)}),new Promise(async(l,g)=>{a=await this.subscriber.subscribe(e,dist_Ri({internal:{throwOnFailedPublish:o}},t)).catch(y=>{o&&g(y)})||a,l()})]),a}async unsubscribe(e,t){this.isInitialized(),await this.subscriber.unsubscribe(e,t)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async transportDisconnect(){this.provider.disconnect&&(this.hasExperiencedNetworkDisruption||this.connected)?await dist_Si(this.provider.disconnect(),2e3,"provider.disconnect()").catch(()=>this.onProviderDisconnect()):this.onProviderDisconnect()}async transportClose(){this.transportExplicitlyClosed=!0,await this.transportDisconnect()}async transportOpen(e){if(!this.subscriber.hasAnyTopics){this.logger.info("Starting WS connection skipped because the client has no topics to work with.");return}if(this.connectPromise?(this.logger.debug({},"Waiting for existing connection attempt to resolve..."),await this.connectPromise,this.logger.debug({},"Existing connection attempt resolved")):(this.connectPromise=new Promise(async(t,i)=>{await this.connect(e).then(t).catch(i).finally(()=>{this.connectPromise=void 0})}),await this.connectPromise),!this.connected)throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`)}async restartTransport(e){this.logger.debug({},"Restarting transport..."),!this.connectionAttemptInProgress&&(this.relayUrl=e||this.relayUrl,await this.confirmOnlineStateOrThrow(),await this.transportClose(),await this.transportOpen())}async confirmOnlineStateOrThrow(){if(!await gu())throw new Error("No internet connection detected. Please restart your network and try again.")}async handleBatchMessageEvents(e){if(e?.length===0){this.logger.trace("Batch message events is empty. Ignoring...");return}const t=e.sort((i,s)=>i.publishedAt-s.publishedAt);this.logger.debug(`Batch of ${t.length} message events sorted`);for(const i of t)try{await this.onMessageEvent(i)}catch(s){this.logger.warn(s,"Error while processing batch message event: "+s?.message)}this.logger.trace(`Batch of ${t.length} message events processed`)}async onLinkMessageEvent(e,t){const{topic:i}=e;if(!t.sessionExists){const s=_i(cjs.FIVE_MINUTES),n={topic:i,expiry:s,relay:{protocol:"irn"},active:!1};await this.core.pairing.pairings.set(i,n)}this.events.emit(core_dist_C.message,e),await this.recordMessageEvent(e,core_dist_ye.inbound)}async connect(e){await this.confirmOnlineStateOrThrow(),e&&e!==this.relayUrl&&(this.relayUrl=e,await this.transportDisconnect()),this.connectionAttemptInProgress=!0,this.transportExplicitlyClosed=!1;let t=1;for(;t<6;){try{if(this.transportExplicitlyClosed)break;this.logger.debug({},`Connecting to ${this.relayUrl}, attempt: ${t}...`),await this.createProvider(),await new Promise(async(i,s)=>{const n=()=>{s(new Error("Connection interrupted while trying to connect"))};this.provider.once(dist_M.disconnect,n),await dist_Si(new Promise((o,a)=>{this.provider.connect().then(o).catch(a)}),this.connectTimeout,`Socket stalled when trying to connect to ${this.relayUrl}`).catch(o=>{s(o)}).finally(()=>{this.provider.off(dist_M.disconnect,n),clearTimeout(this.reconnectTimeout)}),await new Promise(async(o,a)=>{const c=()=>{s(new Error("Connection interrupted while trying to subscribe"))};this.provider.once(dist_M.disconnect,c),await this.subscriber.start().then(o).catch(a).finally(()=>{this.provider.off(dist_M.disconnect,c)})}),this.hasExperiencedNetworkDisruption=!1,i()})}catch(i){await this.subscriber.stop();const s=i;this.logger.warn({},s.message),this.hasExperiencedNetworkDisruption=!0}finally{this.connectionAttemptInProgress=!1}if(this.connected){this.logger.debug({},`Connected to ${this.relayUrl} successfully on attempt: ${t}`);break}await new Promise(i=>setTimeout(i,(0,cjs.toMiliseconds)(t*1))),t++}}startPingTimeout(){var e,t,i,s,n;if(rn())try{(t=(e=this.provider)==null?void 0:e.connection)!=null&&t.socket&&((n=(s=(i=this.provider)==null?void 0:i.connection)==null?void 0:s.socket)==null||n.on("ping",()=>{this.resetPingTimeout()})),this.resetPingTimeout()}catch(o){this.logger.warn(o,o?.message)}}async createProvider(){this.provider.connection&&this.unregisterProviderListeners();const e=await this.core.crypto.signJWT(this.relayUrl);this.provider=new jsonrpc_provider_dist_index_es/* JsonRpcProvider */.F(new jsonrpc_ws_connection_dist_index_es/* default */.A(bi({sdkVersion:core_dist_Pe,protocol:this.protocol,version:this.version,relayUrl:this.relayUrl,projectId:this.projectId,auth:e,useOnCloseEvent:!0,bundleId:this.bundleId,packageName:this.packageName}))),this.registerProviderListeners()}async recordMessageEvent(e,t){const{topic:i,message:s}=e;await this.messages.set(i,s,t)}async shouldIgnoreMessageEvent(e){const{topic:t,message:i}=e;if(!i||i.length===0)return this.logger.warn(`Ignoring invalid/empty message: ${i}`),!0;if(!await this.subscriber.isKnownTopic(t))return this.logger.warn(`Ignoring message for unknown topic ${t}`),!0;const s=this.messages.has(t,i);return s&&this.logger.warn(`Ignoring duplicate message: ${i}`),s}async onProviderPayload(e){if(this.logger.debug("Incoming Relay Payload"),this.logger.trace({type:"payload",direction:"incoming",payload:e}),(0,jsonrpc_utils_dist_esm.isJsonRpcRequest)(e)){if(!e.method.endsWith(dist_Lt))return;const t=e.params,{topic:i,message:s,publishedAt:n,attestation:o}=t.data,a={topic:i,message:s,publishedAt:n,transportType:core_dist_ee.relay,attestation:o};this.logger.debug("Emitting Relayer Payload"),this.logger.trace(dist_Ri({type:"event",event:t.id},a)),this.events.emit(t.id,a),await this.acknowledgePayload(e),await this.onMessageEvent(a)}else (0,jsonrpc_utils_dist_esm.isJsonRpcResponse)(e)&&this.events.emit(core_dist_C.message_ack,e)}async onMessageEvent(e){await this.shouldIgnoreMessageEvent(e)||(await this.recordMessageEvent(e,core_dist_ye.inbound),this.events.emit(core_dist_C.message,e))}async acknowledgePayload(e){const t=(0,jsonrpc_utils_dist_esm.formatJsonRpcResult)(e.id,!0);await this.provider.connection.send(t)}unregisterProviderListeners(){this.provider.off(dist_M.payload,this.onPayloadHandler),this.provider.off(dist_M.connect,this.onConnectHandler),this.provider.off(dist_M.disconnect,this.onDisconnectHandler),this.provider.off(dist_M.error,this.onProviderErrorHandler),clearTimeout(this.pingTimeout)}async registerEventListeners(){let e=await gu();bu(async t=>{e!==t&&(e=t,t?await this.transportOpen().catch(i=>this.logger.error(i,i?.message)):(this.hasExperiencedNetworkDisruption=!0,await this.transportDisconnect(),this.transportExplicitlyClosed=!1))}),this.core.heartbeat.on(heartbeat_dist_index_es/* HEARTBEAT_EVENTS */.li.pulse,async()=>{if(!this.transportExplicitlyClosed&&!this.connected&&yu())try{await this.confirmOnlineStateOrThrow(),await this.transportOpen()}catch(t){this.logger.warn(t,t?.message)}})}async onProviderDisconnect(){clearTimeout(this.pingTimeout),this.events.emit(core_dist_C.disconnect),this.connectionAttemptInProgress=!1,!this.reconnectInProgress&&(this.reconnectInProgress=!0,await this.subscriber.stop(),this.subscriber.hasAnyTopics&&(this.transportExplicitlyClosed||(this.reconnectTimeout=setTimeout(async()=>{await this.transportOpen().catch(e=>this.logger.error(e,e?.message)),this.reconnectTimeout=void 0,this.reconnectInProgress=!1},(0,cjs.toMiliseconds)(dist_kt)))))}isInitialized(){if(!this.initialized){const{message:e}=Bt("NOT_INITIALIZED",this.name);throw new Error(e)}}async toEstablishConnection(){if(await this.confirmOnlineStateOrThrow(),!this.connected){if(this.connectPromise){await this.connectPromise;return}await this.connect()}}}function dist_ao(r,e){return r===e||Number.isNaN(r)&&Number.isNaN(e)}function dist_xi(r){return Object.getOwnPropertySymbols(r).filter(e=>Object.prototype.propertyIsEnumerable.call(r,e))}function dist_Ni(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(r)}const dist_co="[object RegExp]",dist_ho="[object String]",dist_lo="[object Number]",dist_uo="[object Boolean]",dist_$i="[object Arguments]",dist_po="[object Symbol]",dist_go="[object Date]",dist_yo="[object Map]",dist_bo="[object Set]",dist_mo="[object Array]",dist_fo="[object Function]",dist_Do="[object ArrayBuffer]",dist_Ze="[object Object]",dist_vo="[object Error]",dist_o="[object DataView]",dist_wo="[object Uint8Array]",dist_Eo="[object Uint8ClampedArray]",dist_Io="[object Uint16Array]",dist_To="[object Uint32Array]",dist_Co="[object BigUint64Array]",dist_Po="[object Int8Array]",dist_So="[object Int16Array]",dist_Oo="[object Int32Array]",dist_Ro="[object BigInt64Array]",dist_Ao="[object Float32Array]",dist_xo="[object Float64Array]";function dist_No(){}function dist_zi(r){if(!r||typeof r!="object")return!1;const e=Object.getPrototypeOf(r);return e===null||e===Object.prototype||Object.getPrototypeOf(e)===null?Object.prototype.toString.call(r)==="[object Object]":!1}function dist_$o(r,e,t){return core_dist_De(r,e,void 0,void 0,void 0,void 0,t)}function core_dist_De(r,e,t,i,s,n,o){const a=o(r,e,t,i,s,n);if(a!==void 0)return a;if(typeof r==typeof e)switch(typeof r){case"bigint":case"string":case"boolean":case"symbol":case"undefined":return r===e;case"number":return r===e||Object.is(r,e);case"function":return r===e;case"object":return core_dist_ve(r,e,n,o)}return core_dist_ve(r,e,n,o)}function core_dist_ve(r,e,t,i){if(Object.is(r,e))return!0;let s=dist_Ni(r),n=dist_Ni(e);if(s===dist_$i&&(s=dist_Ze),n===dist_$i&&(n=dist_Ze),s!==n)return!1;switch(s){case dist_ho:return r.toString()===e.toString();case dist_lo:{const c=r.valueOf(),h=e.valueOf();return dist_ao(c,h)}case dist_uo:case dist_go:case dist_po:return Object.is(r.valueOf(),e.valueOf());case dist_co:return r.source===e.source&&r.flags===e.flags;case dist_fo:return r===e}t=t??new Map;const o=t.get(r),a=t.get(e);if(o!=null&&a!=null)return o===e;t.set(r,e),t.set(e,r);try{switch(s){case dist_yo:{if(r.size!==e.size)return!1;for(const[c,h]of r.entries())if(!e.has(c)||!core_dist_De(h,e.get(c),c,r,e,t,i))return!1;return!0}case dist_bo:{if(r.size!==e.size)return!1;const c=Array.from(r.values()),h=Array.from(e.values());for(let l=0;l<c.length;l++){const g=c[l],y=h.findIndex(_=>core_dist_De(g,_,void 0,r,e,t,i));if(y===-1)return!1;h.splice(y,1)}return!0}case dist_mo:case dist_wo:case dist_Eo:case dist_Io:case dist_To:case dist_Co:case dist_Po:case dist_So:case dist_Oo:case dist_Ro:case dist_Ao:case dist_xo:{if(typeof Buffer<"u"&&Buffer.isBuffer(r)!==Buffer.isBuffer(e)||r.length!==e.length)return!1;for(let c=0;c<r.length;c++)if(!core_dist_De(r[c],e[c],c,r,e,t,i))return!1;return!0}case dist_Do:return r.byteLength!==e.byteLength?!1:core_dist_ve(new Uint8Array(r),new Uint8Array(e),t,i);case dist_o:return r.byteLength!==e.byteLength||r.byteOffset!==e.byteOffset?!1:core_dist_ve(new Uint8Array(r),new Uint8Array(e),t,i);case dist_vo:return r.name===e.name&&r.message===e.message;case dist_Ze:{if(!(core_dist_ve(r.constructor,e.constructor,t,i)||dist_zi(r)&&dist_zi(e)))return!1;const h=[...Object.keys(r),...dist_xi(r)],l=[...Object.keys(e),...dist_xi(e)];if(h.length!==l.length)return!1;for(let g=0;g<h.length;g++){const y=h[g],_=r[y];if(!Object.hasOwn(e,y))return!1;const u=e[y];if(!core_dist_De(_,u,y,r,e,t,i))return!1}return!0}default:return!1}}finally{t.delete(r),t.delete(e)}}function dist_zo(r,e){return dist_$o(r,e,dist_No)}var dist_Lo=Object.defineProperty,dist_Li=Object.getOwnPropertySymbols,dist_ko=Object.prototype.hasOwnProperty,dist_jo=Object.prototype.propertyIsEnumerable,dist_Qe=(r,e,t)=>e in r?dist_Lo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,dist_ki=(r,e)=>{for(var t in e||(e={}))dist_ko.call(e,t)&&dist_Qe(r,t,e[t]);if(dist_Li)for(var t of dist_Li(e))dist_jo.call(e,t)&&dist_Qe(r,t,e[t]);return r},dist_U=(r,e,t)=>dist_Qe(r,typeof e!="symbol"?e+"":e,t);class dist_ji extends f{constructor(e,t,i,s=core_dist_W,n=void 0){super(e,t,i,s),this.core=e,this.logger=t,this.name=i,dist_U(this,"map",new Map),dist_U(this,"version",dist_jt),dist_U(this,"cached",[]),dist_U(this,"initialized",!1),dist_U(this,"getKey"),dist_U(this,"storagePrefix",core_dist_W),dist_U(this,"recentlyDeleted",[]),dist_U(this,"recentlyDeletedLimit",200),dist_U(this,"init",async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(o=>{this.getKey&&o!==null&&!Dt(o)?this.map.set(this.getKey(o),o):Ja(o)?this.map.set(o.id,o):Qa(o)&&this.map.set(o.topic,o)}),this.cached=[],this.initialized=!0)}),dist_U(this,"set",async(o,a)=>{this.isInitialized(),this.map.has(o)?await this.update(o,a):(this.logger.debug("Setting value"),this.logger.trace({type:"method",method:"set",key:o,value:a}),this.map.set(o,a),await this.persist())}),dist_U(this,"get",o=>(this.isInitialized(),this.logger.debug("Getting value"),this.logger.trace({type:"method",method:"get",key:o}),this.getData(o))),dist_U(this,"getAll",o=>(this.isInitialized(),o?this.values.filter(a=>Object.keys(o).every(c=>dist_zo(a[c],o[c]))):this.values)),dist_U(this,"update",async(o,a)=>{this.isInitialized(),this.logger.debug("Updating value"),this.logger.trace({type:"method",method:"update",key:o,update:a});const c=dist_ki(dist_ki({},this.getData(o)),a);this.map.set(o,c),await this.persist()}),dist_U(this,"delete",async(o,a)=>{this.isInitialized(),this.map.has(o)&&(this.logger.debug("Deleting value"),this.logger.trace({type:"method",method:"delete",key:o,reason:a}),this.map.delete(o),this.addToRecentlyDeleted(o),await this.persist())}),this.logger=index_es_Re(t,this.name),this.storagePrefix=s,this.getKey=n}get context(){return ee(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.map.size}get keys(){return Array.from(this.map.keys())}get values(){return Array.from(this.map.values())}addToRecentlyDeleted(e){this.recentlyDeleted.push(e),this.recentlyDeleted.length>=this.recentlyDeletedLimit&&this.recentlyDeleted.splice(0,this.recentlyDeletedLimit/2)}async setDataStore(e){await this.core.storage.setItem(this.storageKey,e)}async getDataStore(){return await this.core.storage.getItem(this.storageKey)}getData(e){const t=this.map.get(e);if(!t){if(this.recentlyDeleted.includes(e)){const{message:s}=Bt("MISSING_OR_INVALID",`Record was recently deleted - ${this.name}: ${e}`);throw this.logger.error(s),new Error(s)}const{message:i}=Bt("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.error(i),new Error(i)}return t}async persist(){await this.setDataStore(this.values)}async restore(){try{const e=await this.getDataStore();if(typeof e>"u"||!e.length)return;if(this.map.size){const{message:t}=Bt("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored value for ${this.name}`),this.logger.trace({type:"method",method:"restore",value:this.values})}catch(e){this.logger.debug(`Failed to Restore value for ${this.name}`),this.logger.error(e)}}isInitialized(){if(!this.initialized){const{message:e}=Bt("NOT_INITIALIZED",this.name);throw new Error(e)}}}var dist_Uo=Object.defineProperty,dist_Fo=(r,e,t)=>e in r?dist_Uo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,dist_d=(r,e,t)=>dist_Fo(r,typeof e!="symbol"?e+"":e,t);class Ui{constructor(e,t){this.core=e,this.logger=t,dist_d(this,"name",dist_Kt),dist_d(this,"version",dist_Bt),dist_d(this,"events",new events),dist_d(this,"pairings"),dist_d(this,"initialized",!1),dist_d(this,"storagePrefix",core_dist_W),dist_d(this,"ignoredPayloadTypes",[dist_ie]),dist_d(this,"registeredMethods",[]),dist_d(this,"init",async()=>{this.initialized||(await this.pairings.init(),await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.initialized=!0,this.logger.trace("Initialized"))}),dist_d(this,"register",({methods:i})=>{this.isInitialized(),this.registeredMethods=[...new Set([...this.registeredMethods,...i])]}),dist_d(this,"create",async i=>{this.isInitialized();const s=pa(),n=await this.core.crypto.setSymKey(s),o=_i(cjs.FIVE_MINUTES),a={protocol:dist_Nt},c={topic:n,expiry:o,relay:a,active:!1,methods:i?.methods},h=ja({protocol:this.core.protocol,version:this.core.version,topic:n,symKey:s,relay:a,expiryTimestamp:o,methods:i?.methods});return this.events.emit(dist_ae.create,c),this.core.expirer.set(n,o),await this.pairings.set(n,c),await this.core.relayer.subscribe(n,{transportType:i?.transportType,internal:i?.internal}),{topic:n,uri:h}}),dist_d(this,"pair",async i=>{this.isInitialized();const s=this.core.eventClient.createEvent({properties:{topic:i?.uri,trace:[dist_Y.pairing_started]}});this.isValidPair(i,s);const{topic:n,symKey:o,relay:a,expiryTimestamp:c,methods:h}=Ca(i.uri);s.props.properties.topic=n,s.addTrace(dist_Y.pairing_uri_validation_success),s.addTrace(dist_Y.pairing_uri_not_expired);let l;if(this.pairings.keys.includes(n)){if(l=this.pairings.get(n),s.addTrace(dist_Y.existing_pairing),l.active)throw s.setError(core_dist_X.active_pairing_already_exists),new Error(`Pairing already exists: ${n}. Please try again with a new connection URI.`);s.addTrace(dist_Y.pairing_not_expired)}const g=c||_i(cjs.FIVE_MINUTES),y={topic:n,relay:a,expiry:g,active:!1,methods:h};this.core.expirer.set(n,g),await this.pairings.set(n,y),s.addTrace(dist_Y.store_new_pairing),i.activatePairing&&await this.activate({topic:n}),this.events.emit(dist_ae.create,y),s.addTrace(dist_Y.emit_inactive_pairing),this.core.crypto.keychain.has(n)||await this.core.crypto.setSymKey(o,n),s.addTrace(dist_Y.subscribing_pairing_topic);try{await this.core.relayer.confirmOnlineStateOrThrow()}catch{s.setError(core_dist_X.no_internet_connection)}try{await this.core.relayer.subscribe(n,{relay:a})}catch(_){throw s.setError(core_dist_X.subscribe_pairing_topic_failure),_}return s.addTrace(dist_Y.subscribe_pairing_topic_success),y}),dist_d(this,"activate",async({topic:i})=>{this.isInitialized();const s=_i(cjs.FIVE_MINUTES);this.core.expirer.set(i,s),await this.pairings.update(i,{active:!0,expiry:s})}),dist_d(this,"ping",async i=>{this.isInitialized(),await this.isValidPing(i),this.logger.warn("ping() is deprecated and will be removed in the next major release.");const{topic:s}=i;if(this.pairings.keys.includes(s)){const n=await this.sendRequest(s,"wc_pairingPing",{}),{done:o,resolve:a,reject:c}=Ai();this.events.once($i("pairing_ping",n),({error:h})=>{h?c(h):a()}),await o()}}),dist_d(this,"updateExpiry",async({topic:i,expiry:s})=>{this.isInitialized(),await this.pairings.update(i,{expiry:s})}),dist_d(this,"updateMetadata",async({topic:i,metadata:s})=>{this.isInitialized(),await this.pairings.update(i,{peerMetadata:s})}),dist_d(this,"getPairings",()=>(this.isInitialized(),this.pairings.values)),dist_d(this,"disconnect",async i=>{this.isInitialized(),await this.isValidDisconnect(i);const{topic:s}=i;this.pairings.keys.includes(s)&&(await this.sendRequest(s,"wc_pairingDelete",zt("USER_DISCONNECTED")),await this.deletePairing(s))}),dist_d(this,"formatUriFromPairing",i=>{this.isInitialized();const{topic:s,relay:n,expiry:o,methods:a}=i,c=this.core.crypto.keychain.get(s);return ja({protocol:this.core.protocol,version:this.core.version,topic:s,symKey:c,relay:n,expiryTimestamp:o,methods:a})}),dist_d(this,"sendRequest",async(i,s,n)=>{const o=(0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)(s,n),a=await this.core.crypto.encode(i,o),c=core_dist_oe[s].req;return this.core.history.set(i,o),this.core.relayer.publish(i,a,c),o.id}),dist_d(this,"sendResult",async(i,s,n)=>{const o=(0,jsonrpc_utils_dist_esm.formatJsonRpcResult)(i,n),a=await this.core.crypto.encode(s,o),c=(await this.core.history.get(s,i)).request.method,h=core_dist_oe[c].res;await this.core.relayer.publish(s,a,h),await this.core.history.resolve(o)}),dist_d(this,"sendError",async(i,s,n)=>{const o=(0,jsonrpc_utils_dist_esm.formatJsonRpcError)(i,n),a=await this.core.crypto.encode(s,o),c=(await this.core.history.get(s,i)).request.method,h=core_dist_oe[c]?core_dist_oe[c].res:core_dist_oe.unregistered_method.res;await this.core.relayer.publish(s,a,h),await this.core.history.resolve(o)}),dist_d(this,"deletePairing",async(i,s)=>{await this.core.relayer.unsubscribe(i),await Promise.all([this.pairings.delete(i,zt("USER_DISCONNECTED")),this.core.crypto.deleteSymKey(i),s?Promise.resolve():this.core.expirer.del(i)])}),dist_d(this,"cleanup",async()=>{const i=this.pairings.getAll().filter(s=>Ri(s.expiry));await Promise.all(i.map(s=>this.deletePairing(s.topic)))}),dist_d(this,"onRelayEventRequest",async i=>{const{topic:s,payload:n}=i;switch(n.method){case"wc_pairingPing":return await this.onPairingPingRequest(s,n);case"wc_pairingDelete":return await this.onPairingDeleteRequest(s,n);default:return await this.onUnknownRpcMethodRequest(s,n)}}),dist_d(this,"onRelayEventResponse",async i=>{const{topic:s,payload:n}=i,o=(await this.core.history.get(s,n.id)).request.method;switch(o){case"wc_pairingPing":return this.onPairingPingResponse(s,n);default:return this.onUnknownRpcMethodResponse(o)}}),dist_d(this,"onPairingPingRequest",async(i,s)=>{const{id:n}=s;try{this.isValidPing({topic:i}),await this.sendResult(n,i,!0),this.events.emit(dist_ae.ping,{id:n,topic:i})}catch(o){await this.sendError(n,i,o),this.logger.error(o)}}),dist_d(this,"onPairingPingResponse",(i,s)=>{const{id:n}=s;setTimeout(()=>{(0,jsonrpc_utils_dist_esm.isJsonRpcResult)(s)?this.events.emit($i("pairing_ping",n),{}):(0,jsonrpc_utils_dist_esm.isJsonRpcError)(s)&&this.events.emit($i("pairing_ping",n),{error:s.error})},500)}),dist_d(this,"onPairingDeleteRequest",async(i,s)=>{const{id:n}=s;try{this.isValidDisconnect({topic:i}),await this.deletePairing(i),this.events.emit(dist_ae.delete,{id:n,topic:i})}catch(o){await this.sendError(n,i,o),this.logger.error(o)}}),dist_d(this,"onUnknownRpcMethodRequest",async(i,s)=>{const{id:n,method:o}=s;try{if(this.registeredMethods.includes(o))return;const a=zt("WC_METHOD_UNSUPPORTED",o);await this.sendError(n,i,a),this.logger.error(a)}catch(a){await this.sendError(n,i,a),this.logger.error(a)}}),dist_d(this,"onUnknownRpcMethodResponse",i=>{this.registeredMethods.includes(i)||this.logger.error(zt("WC_METHOD_UNSUPPORTED",i))}),dist_d(this,"isValidPair",(i,s)=>{var n;if(!ou(i)){const{message:a}=Bt("MISSING_OR_INVALID",`pair() params: ${i}`);throw s.setError(core_dist_X.malformed_pairing_uri),new Error(a)}if(!Xa(i.uri)){const{message:a}=Bt("MISSING_OR_INVALID",`pair() uri: ${i.uri}`);throw s.setError(core_dist_X.malformed_pairing_uri),new Error(a)}const o=Ca(i?.uri);if(!((n=o?.relay)!=null&&n.protocol)){const{message:a}=Bt("MISSING_OR_INVALID","pair() uri#relay-protocol");throw s.setError(core_dist_X.malformed_pairing_uri),new Error(a)}if(!(o!=null&&o.symKey)){const{message:a}=Bt("MISSING_OR_INVALID","pair() uri#symKey");throw s.setError(core_dist_X.malformed_pairing_uri),new Error(a)}if(o!=null&&o.expiryTimestamp&&(0,cjs.toMiliseconds)(o?.expiryTimestamp)<Date.now()){s.setError(core_dist_X.pairing_expired);const{message:a}=Bt("EXPIRED","pair() URI has expired. Please try again with a new connection URI.");throw new Error(a)}}),dist_d(this,"isValidPing",async i=>{if(!ou(i)){const{message:n}=Bt("MISSING_OR_INVALID",`ping() params: ${i}`);throw new Error(n)}const{topic:s}=i;await this.isValidPairingTopic(s)}),dist_d(this,"isValidDisconnect",async i=>{if(!ou(i)){const{message:n}=Bt("MISSING_OR_INVALID",`disconnect() params: ${i}`);throw new Error(n)}const{topic:s}=i;await this.isValidPairingTopic(s)}),dist_d(this,"isValidPairingTopic",async i=>{if(!ft(i,!1)){const{message:s}=Bt("MISSING_OR_INVALID",`pairing topic should be a string: ${i}`);throw new Error(s)}if(!this.pairings.keys.includes(i)){const{message:s}=Bt("NO_MATCHING_KEY",`pairing topic doesn't exist: ${i}`);throw new Error(s)}if(Ri(this.pairings.get(i).expiry)){await this.deletePairing(i);const{message:s}=Bt("EXPIRED",`pairing topic: ${i}`);throw new Error(s)}}),this.core=e,this.logger=index_es_Re(t,this.name),this.pairings=new dist_ji(this.core,this.logger,this.name,this.storagePrefix)}get context(){return ee(this.logger)}isInitialized(){if(!this.initialized){const{message:e}=Bt("NOT_INITIALIZED",this.name);throw new Error(e)}}registerRelayerEvents(){this.core.relayer.on(core_dist_C.message,async e=>{const{topic:t,message:i,transportType:s}=e;if(this.pairings.keys.includes(t)&&s!==core_dist_ee.link_mode&&!this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))try{const n=await this.core.crypto.decode(t,i);(0,jsonrpc_utils_dist_esm.isJsonRpcRequest)(n)?(this.core.history.set(t,n),await this.onRelayEventRequest({topic:t,payload:n})):(0,jsonrpc_utils_dist_esm.isJsonRpcResponse)(n)&&(await this.core.history.resolve(n),await this.onRelayEventResponse({topic:t,payload:n}),this.core.history.delete(t,n.id)),await this.core.relayer.messages.ack(t,i)}catch(n){this.logger.error(n)}})}registerExpirerEvents(){this.core.expirer.on(dist_q.expired,async e=>{const{topic:t}=dist_Ui(e.target);t&&this.pairings.keys.includes(t)&&(await this.deletePairing(t,!0),this.events.emit(dist_ae.expire,{topic:t}))})}}var dist_Mo=Object.defineProperty,dist_Ko=(r,e,t)=>e in r?dist_Mo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,dist_N=(r,e,t)=>dist_Ko(r,typeof e!="symbol"?e+"":e,t);class dist_Fi extends dist_I{constructor(e,t){super(e,t),this.core=e,this.logger=t,dist_N(this,"records",new Map),dist_N(this,"events",new events.EventEmitter),dist_N(this,"name",dist_Vt),dist_N(this,"version",dist_qt),dist_N(this,"cached",[]),dist_N(this,"initialized",!1),dist_N(this,"storagePrefix",core_dist_W),dist_N(this,"init",async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(i=>this.records.set(i.id,i)),this.cached=[],this.registerEventListeners(),this.initialized=!0)}),dist_N(this,"set",(i,s,n)=>{if(this.isInitialized(),this.logger.debug("Setting JSON-RPC request history record"),this.logger.trace({type:"method",method:"set",topic:i,request:s,chainId:n}),this.records.has(s.id))return;const o={id:s.id,topic:i,request:{method:s.method,params:s.params||null},chainId:n,expiry:_i(cjs.THIRTY_DAYS)};this.records.set(o.id,o),this.persist(),this.events.emit(core_dist_V.created,o)}),dist_N(this,"resolve",async i=>{if(this.isInitialized(),this.logger.debug("Updating JSON-RPC response history record"),this.logger.trace({type:"method",method:"update",response:i}),!this.records.has(i.id))return;const s=await this.getRecord(i.id);typeof s.response>"u"&&(s.response=(0,jsonrpc_utils_dist_esm.isJsonRpcError)(i)?{error:i.error}:{result:i.result},this.records.set(s.id,s),this.persist(),this.events.emit(core_dist_V.updated,s))}),dist_N(this,"get",async(i,s)=>(this.isInitialized(),this.logger.debug("Getting record"),this.logger.trace({type:"method",method:"get",topic:i,id:s}),await this.getRecord(s))),dist_N(this,"delete",(i,s)=>{this.isInitialized(),this.logger.debug("Deleting record"),this.logger.trace({type:"method",method:"delete",id:s}),this.values.forEach(n=>{if(n.topic===i){if(typeof s<"u"&&n.id!==s)return;this.records.delete(n.id),this.events.emit(core_dist_V.deleted,n)}}),this.persist()}),dist_N(this,"exists",async(i,s)=>(this.isInitialized(),this.records.has(s)?(await this.getRecord(s)).topic===i:!1)),dist_N(this,"on",(i,s)=>{this.events.on(i,s)}),dist_N(this,"once",(i,s)=>{this.events.once(i,s)}),dist_N(this,"off",(i,s)=>{this.events.off(i,s)}),dist_N(this,"removeListener",(i,s)=>{this.events.removeListener(i,s)}),this.logger=index_es_Re(t,this.name)}get context(){return ee(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get size(){return this.records.size}get keys(){return Array.from(this.records.keys())}get values(){return Array.from(this.records.values())}get pending(){const e=[];return this.values.forEach(t=>{if(typeof t.response<"u")return;const i={topic:t.topic,request:(0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)(t.request.method,t.request.params,t.id),chainId:t.chainId};return e.push(i)}),e}async setJsonRpcRecords(e){await this.core.storage.setItem(this.storageKey,e)}async getJsonRpcRecords(){return await this.core.storage.getItem(this.storageKey)}getRecord(e){this.isInitialized();const t=this.records.get(e);if(!t){const{message:i}=Bt("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(i)}return t}async persist(){await this.setJsonRpcRecords(this.values),this.events.emit(core_dist_V.sync)}async restore(){try{const e=await this.getJsonRpcRecords();if(typeof e>"u"||!e.length)return;if(this.records.size){const{message:t}=Bt("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",records:this.values})}catch(e){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(e)}}registerEventListeners(){this.events.on(core_dist_V.created,e=>{const t=core_dist_V.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})}),this.events.on(core_dist_V.updated,e=>{const t=core_dist_V.updated;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})}),this.events.on(core_dist_V.deleted,e=>{const t=core_dist_V.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})}),this.core.heartbeat.on(heartbeat_dist_index_es/* HEARTBEAT_EVENTS */.li.pulse,()=>{this.cleanup()})}cleanup(){try{this.isInitialized();let e=!1;this.records.forEach(t=>{(0,cjs.toMiliseconds)(t.expiry||0)-Date.now()<=0&&(this.logger.info(`Deleting expired history log: ${t.id}`),this.records.delete(t.id),this.events.emit(core_dist_V.deleted,t,!1),e=!0)}),e&&this.persist()}catch(e){this.logger.warn(e)}}isInitialized(){if(!this.initialized){const{message:e}=Bt("NOT_INITIALIZED",this.name);throw new Error(e)}}}var dist_Bo=Object.defineProperty,dist_Vo=(r,e,t)=>e in r?dist_Bo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,dist_z=(r,e,t)=>dist_Vo(r,typeof e!="symbol"?e+"":e,t);class dist_Mi extends types_dist_S{constructor(e,t){super(e,t),this.core=e,this.logger=t,dist_z(this,"expirations",new Map),dist_z(this,"events",new events.EventEmitter),dist_z(this,"name",dist_Gt),dist_z(this,"version",dist_Wt),dist_z(this,"cached",[]),dist_z(this,"initialized",!1),dist_z(this,"storagePrefix",core_dist_W),dist_z(this,"init",async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(i=>this.expirations.set(i.target,i)),this.cached=[],this.registerEventListeners(),this.initialized=!0)}),dist_z(this,"has",i=>{try{const s=this.formatTarget(i);return typeof this.getExpiration(s)<"u"}catch{return!1}}),dist_z(this,"set",(i,s)=>{this.isInitialized();const n=this.formatTarget(i),o={target:n,expiry:s};this.expirations.set(n,o),this.checkExpiry(n,o),this.events.emit(dist_q.created,{target:n,expiration:o})}),dist_z(this,"get",i=>{this.isInitialized();const s=this.formatTarget(i);return this.getExpiration(s)}),dist_z(this,"del",i=>{if(this.isInitialized(),this.has(i)){const s=this.formatTarget(i),n=this.getExpiration(s);this.expirations.delete(s),this.events.emit(dist_q.deleted,{target:s,expiration:n})}}),dist_z(this,"on",(i,s)=>{this.events.on(i,s)}),dist_z(this,"once",(i,s)=>{this.events.once(i,s)}),dist_z(this,"off",(i,s)=>{this.events.off(i,s)}),dist_z(this,"removeListener",(i,s)=>{this.events.removeListener(i,s)}),this.logger=index_es_Re(t,this.name)}get context(){return ee(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.expirations.size}get keys(){return Array.from(this.expirations.keys())}get values(){return Array.from(this.expirations.values())}formatTarget(e){if(typeof e=="string")return Oi(e);if(typeof e=="number")return Ni(e);const{message:t}=Bt("UNKNOWN_TYPE",`Target type: ${typeof e}`);throw new Error(t)}async setExpirations(e){await this.core.storage.setItem(this.storageKey,e)}async getExpirations(){return await this.core.storage.getItem(this.storageKey)}async persist(){await this.setExpirations(this.values),this.events.emit(dist_q.sync)}async restore(){try{const e=await this.getExpirations();if(typeof e>"u"||!e.length)return;if(this.expirations.size){const{message:t}=Bt("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored expirations for ${this.name}`),this.logger.trace({type:"method",method:"restore",expirations:this.values})}catch(e){this.logger.debug(`Failed to Restore expirations for ${this.name}`),this.logger.error(e)}}getExpiration(e){const t=this.expirations.get(e);if(!t){const{message:i}=Bt("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.warn(i),new Error(i)}return t}checkExpiry(e,t){const{expiry:i}=t;(0,cjs.toMiliseconds)(i)-Date.now()<=0&&this.expire(e,t)}expire(e,t){this.expirations.delete(e),this.events.emit(dist_q.expired,{target:e,expiration:t})}checkExpirations(){this.core.relayer.connected&&this.expirations.forEach((e,t)=>this.checkExpiry(t,e))}registerEventListeners(){this.core.heartbeat.on(heartbeat_dist_index_es/* HEARTBEAT_EVENTS */.li.pulse,()=>this.checkExpirations()),this.events.on(dist_q.created,e=>{const t=dist_q.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()}),this.events.on(dist_q.expired,e=>{const t=dist_q.expired;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()}),this.events.on(dist_q.deleted,e=>{const t=dist_q.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()})}isInitialized(){if(!this.initialized){const{message:e}=Bt("NOT_INITIALIZED",this.name);throw new Error(e)}}}var dist_qo=Object.defineProperty,dist_Go=(r,e,t)=>e in r?dist_qo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,core_dist_P=(r,e,t)=>dist_Go(r,typeof e!="symbol"?e+"":e,t);class dist_Ki extends M{constructor(e,t,i){super(e,t,i),this.core=e,this.logger=t,this.store=i,core_dist_P(this,"name",dist_Ht),core_dist_P(this,"abortController"),core_dist_P(this,"isDevEnv"),core_dist_P(this,"verifyUrlV3",dist_Jt),core_dist_P(this,"storagePrefix",core_dist_W),core_dist_P(this,"version",core_dist_Fe),core_dist_P(this,"publicKey"),core_dist_P(this,"fetchPromise"),core_dist_P(this,"init",async()=>{var s;this.isDevEnv||(this.publicKey=await this.store.getItem(this.storeKey),this.publicKey&&(0,cjs.toMiliseconds)((s=this.publicKey)==null?void 0:s.expiresAt)<Date.now()&&(this.logger.debug("verify v2 public key expired"),await this.removePublicKey()))}),core_dist_P(this,"register",async s=>{if(!Wt()||this.isDevEnv)return;const n=window.location.origin,{id:o,decryptedId:a}=s,c=`${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n}&id=${o}&decryptedId=${a}`;try{const h=(0,dist_cjs.getDocument)(),l=this.startAbortTimer(cjs.ONE_SECOND*5),g=await new Promise((y,_)=>{const u=()=>{window.removeEventListener("message",D),h.body.removeChild(m),_("attestation aborted")};this.abortController.signal.addEventListener("abort",u);const m=h.createElement("iframe");m.src=c,m.style.display="none",m.addEventListener("error",u,{signal:this.abortController.signal});const D=w=>{if(w.data&&typeof w.data=="string")try{const E=JSON.parse(w.data);if(E.type==="verify_attestation"){if((0,index_es/* decodeJWT */.Cq)(E.attestation).payload.id!==o)return;clearInterval(l),h.body.removeChild(m),this.abortController.signal.removeEventListener("abort",u),window.removeEventListener("message",D),y(E.attestation===null?"":E.attestation)}}catch(E){this.logger.warn(E)}};h.body.appendChild(m),window.addEventListener("message",D,{signal:this.abortController.signal})});return this.logger.debug(g,"jwt attestation"),g}catch(h){this.logger.warn(h)}return""}),core_dist_P(this,"resolve",async s=>{if(this.isDevEnv)return"";const{attestationId:n,hash:o,encryptedId:a}=s;if(n===""){this.logger.debug("resolve: attestationId is empty, skipping");return}if(n){if((0,index_es/* decodeJWT */.Cq)(n).payload.id!==a)return;const h=await this.isValidJwtAttestation(n);if(h){if(!h.isVerified){this.logger.warn("resolve: jwt attestation: origin url not verified");return}return h}}if(!o)return;const c=this.getVerifyUrl(s?.verifyUrl);return this.fetchAttestation(o,c)}),core_dist_P(this,"fetchAttestation",async(s,n)=>{this.logger.debug(`resolving attestation: ${s} from url: ${n}`);const o=this.startAbortTimer(cjs.ONE_SECOND*5),a=await fetch(`${n}/attestation/${s}?v2Supported=true`,{signal:this.abortController.signal});return clearTimeout(o),a.status===200?await a.json():void 0}),core_dist_P(this,"getVerifyUrl",s=>{let n=s||core_dist_be;return dist_Xt.includes(n)||(this.logger.info(`verify url: ${n}, not included in trusted list, assigning default: ${core_dist_be}`),n=core_dist_be),n}),core_dist_P(this,"fetchPublicKey",async()=>{try{this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);const s=this.startAbortTimer(cjs.FIVE_SECONDS),n=await fetch(`${this.verifyUrlV3}/public-key`,{signal:this.abortController.signal});return clearTimeout(s),await n.json()}catch(s){this.logger.warn(s)}}),core_dist_P(this,"persistPublicKey",async s=>{this.logger.debug(s,"persisting public key to local storage"),await this.store.setItem(this.storeKey,s),this.publicKey=s}),core_dist_P(this,"removePublicKey",async()=>{this.logger.debug("removing verify v2 public key from storage"),await this.store.removeItem(this.storeKey),this.publicKey=void 0}),core_dist_P(this,"isValidJwtAttestation",async s=>{const n=await this.getPublicKey();try{if(n)return this.validateAttestation(s,n)}catch(a){this.logger.error(a),this.logger.warn("error validating attestation")}const o=await this.fetchAndPersistPublicKey();try{if(o)return this.validateAttestation(s,o)}catch(a){this.logger.error(a),this.logger.warn("error validating attestation")}}),core_dist_P(this,"getPublicKey",async()=>this.publicKey?this.publicKey:await this.fetchAndPersistPublicKey()),core_dist_P(this,"fetchAndPersistPublicKey",async()=>{if(this.fetchPromise)return await this.fetchPromise,this.publicKey;this.fetchPromise=new Promise(async n=>{const o=await this.fetchPublicKey();o&&(await this.persistPublicKey(o),n(o))});const s=await this.fetchPromise;return this.fetchPromise=void 0,s}),core_dist_P(this,"validateAttestation",(s,n)=>{const o=Aa(s,n.publicKey),a={hasExpired:(0,cjs.toMiliseconds)(o.exp)<Date.now(),payload:o};if(a.hasExpired)throw this.logger.warn("resolve: jwt attestation expired"),new Error("JWT attestation expired");return{origin:a.payload.origin,isScam:a.payload.isScam,isVerified:a.payload.isVerified}}),this.logger=index_es_Re(t,this.name),this.abortController=new AbortController,this.isDevEnv=ki(),this.init()}get storeKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//verify:public:key"}get context(){return ee(this.logger)}startAbortTimer(e){return this.abortController=new AbortController,setTimeout(()=>this.abortController.abort(),(0,cjs.toMiliseconds)(e))}}var dist_Wo=Object.defineProperty,dist_Ho=(r,e,t)=>e in r?dist_Wo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,dist_Bi=(r,e,t)=>dist_Ho(r,typeof e!="symbol"?e+"":e,t);class dist_Vi extends O{constructor(e,t){super(e,t),this.projectId=e,this.logger=t,dist_Bi(this,"context",dist_Zt),dist_Bi(this,"registerDeviceToken",async i=>{const{clientId:s,token:n,notificationType:o,enableEncrypted:a=!1}=i,c=`${dist_Qt}/${this.projectId}/clients`;await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_id:s,type:o,token:n,always_raw:a})})}),this.logger=index_es_Re(t,this.context)}}var dist_Yo=Object.defineProperty,dist_qi=Object.getOwnPropertySymbols,dist_Jo=Object.prototype.hasOwnProperty,dist_Xo=Object.prototype.propertyIsEnumerable,dist_et=(r,e,t)=>e in r?dist_Yo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,core_dist_e=(r,e)=>{for(var t in e||(e={}))dist_Jo.call(e,t)&&dist_et(r,t,e[t]);if(dist_qi)for(var t of dist_qi(e))dist_Xo.call(e,t)&&dist_et(r,t,e[t]);return r},dist_A=(r,e,t)=>dist_et(r,typeof e!="symbol"?e+"":e,t);class dist_Gi extends dist_R{constructor(e,t,i=!0){super(e,t,i),this.core=e,this.logger=t,dist_A(this,"context",dist_ti),dist_A(this,"storagePrefix",core_dist_W),dist_A(this,"storageVersion",dist_ei),dist_A(this,"events",new Map),dist_A(this,"shouldPersist",!1),dist_A(this,"init",async()=>{if(!ki())try{const s={eventId:Li(),timestamp:Date.now(),domain:this.getAppDomain(),props:{event:"INIT",type:"",properties:{client_id:await this.core.crypto.getClientId(),user_agent:wr(this.core.relayer.protocol,this.core.relayer.version,core_dist_Pe)}}};await this.sendEvent([s])}catch(s){this.logger.warn(s)}}),dist_A(this,"createEvent",s=>{const{event:n="ERROR",type:o="",properties:{topic:a,trace:c}}=s,h=Li(),l=this.core.projectId||"",g=Date.now(),y=core_dist_e({eventId:h,timestamp:g,props:{event:n,type:o,properties:{topic:a,trace:c}},bundleId:l,domain:this.getAppDomain()},this.setMethods(h));return this.telemetryEnabled&&(this.events.set(h,y),this.shouldPersist=!0),y}),dist_A(this,"getEvent",s=>{const{eventId:n,topic:o}=s;if(n)return this.events.get(n);const a=Array.from(this.events.values()).find(c=>c.props.properties.topic===o);if(a)return core_dist_e(core_dist_e({},a),this.setMethods(a.eventId))}),dist_A(this,"deleteEvent",s=>{const{eventId:n}=s;this.events.delete(n),this.shouldPersist=!0}),dist_A(this,"setEventListeners",()=>{this.core.heartbeat.on(heartbeat_dist_index_es/* HEARTBEAT_EVENTS */.li.pulse,async()=>{this.shouldPersist&&await this.persist(),this.events.forEach(s=>{(0,cjs.fromMiliseconds)(Date.now())-(0,cjs.fromMiliseconds)(s.timestamp)>dist_ii&&(this.events.delete(s.eventId),this.shouldPersist=!0)})})}),dist_A(this,"setMethods",s=>({addTrace:n=>this.addTrace(s,n),setError:n=>this.setError(s,n)})),dist_A(this,"addTrace",(s,n)=>{const o=this.events.get(s);o&&(o.props.properties.trace.push(n),this.events.set(s,o),this.shouldPersist=!0)}),dist_A(this,"setError",(s,n)=>{const o=this.events.get(s);o&&(o.props.type=n,o.timestamp=Date.now(),this.events.set(s,o),this.shouldPersist=!0)}),dist_A(this,"persist",async()=>{await this.core.storage.setItem(this.storageKey,Array.from(this.events.values())),this.shouldPersist=!1}),dist_A(this,"restore",async()=>{try{const s=await this.core.storage.getItem(this.storageKey)||[];if(!s.length)return;s.forEach(n=>{this.events.set(n.eventId,core_dist_e(core_dist_e({},n),this.setMethods(n.eventId)))})}catch(s){this.logger.warn(s)}}),dist_A(this,"submit",async()=>{if(!this.telemetryEnabled||this.events.size===0)return;const s=[];for(const[n,o]of this.events)o.props.type&&s.push(o);if(s.length!==0)try{if((await this.sendEvent(s)).ok)for(const n of s)this.events.delete(n.eventId),this.shouldPersist=!0}catch(n){this.logger.warn(n)}}),dist_A(this,"sendEvent",async s=>{const n=this.getAppDomain()?"":"&sp=desktop";return await fetch(`${dist_si}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${core_dist_Pe}${n}`,{method:"POST",body:JSON.stringify(s)})}),dist_A(this,"getAppDomain",()=>br().url),this.logger=index_es_Re(t,this.context),this.telemetryEnabled=i,i?this.restore().then(async()=>{await this.submit(),this.setEventListeners()}):this.persist()}get storageKey(){return this.storagePrefix+this.storageVersion+this.core.customStoragePrefix+"//"+this.context}}var dist_Zo=Object.defineProperty,dist_Wi=Object.getOwnPropertySymbols,dist_Qo=Object.prototype.hasOwnProperty,dist_ea=Object.prototype.propertyIsEnumerable,dist_tt=(r,e,t)=>e in r?dist_Zo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,dist_Hi=(r,e)=>{for(var t in e||(e={}))dist_Qo.call(e,t)&&dist_tt(r,t,e[t]);if(dist_Wi)for(var t of dist_Wi(e))dist_ea.call(e,t)&&dist_tt(r,t,e[t]);return r},core_dist_v=(r,e,t)=>dist_tt(r,typeof e!="symbol"?e+"":e,t);class core_dist_Oe extends h{constructor(e){var t;super(e),core_dist_v(this,"protocol",core_dist_Ue),core_dist_v(this,"version",core_dist_Fe),core_dist_v(this,"name",core_dist_ge),core_dist_v(this,"relayUrl"),core_dist_v(this,"projectId"),core_dist_v(this,"customStoragePrefix"),core_dist_v(this,"events",new events.EventEmitter),core_dist_v(this,"logger"),core_dist_v(this,"heartbeat"),core_dist_v(this,"relayer"),core_dist_v(this,"crypto"),core_dist_v(this,"storage"),core_dist_v(this,"history"),core_dist_v(this,"expirer"),core_dist_v(this,"pairing"),core_dist_v(this,"verify"),core_dist_v(this,"echoClient"),core_dist_v(this,"linkModeSupportedApps"),core_dist_v(this,"eventClient"),core_dist_v(this,"initialized",!1),core_dist_v(this,"logChunkController"),core_dist_v(this,"on",(a,c)=>this.events.on(a,c)),core_dist_v(this,"once",(a,c)=>this.events.once(a,c)),core_dist_v(this,"off",(a,c)=>this.events.off(a,c)),core_dist_v(this,"removeListener",(a,c)=>this.events.removeListener(a,c)),core_dist_v(this,"dispatchEnvelope",({topic:a,message:c,sessionExists:h})=>{if(!a||!c)return;const l={topic:a,message:c,publishedAt:Date.now(),transportType:core_dist_ee.link_mode};this.relayer.onLinkMessageEvent(l,{sessionExists:h})});const i=this.getGlobalCore(e?.customStoragePrefix);if(i)try{return this.customStoragePrefix=i.customStoragePrefix,this.logger=i.logger,this.heartbeat=i.heartbeat,this.crypto=i.crypto,this.history=i.history,this.expirer=i.expirer,this.storage=i.storage,this.relayer=i.relayer,this.pairing=i.pairing,this.verify=i.verify,this.echoClient=i.echoClient,this.linkModeSupportedApps=i.linkModeSupportedApps,this.eventClient=i.eventClient,this.initialized=i.initialized,this.logChunkController=i.logChunkController,i}catch(a){console.warn("Failed to copy global core",a)}this.projectId=e?.projectId,this.relayUrl=e?.relayUrl||dist_Ke,this.customStoragePrefix=e!=null&&e.customStoragePrefix?`:${e.customStoragePrefix}`:"";const s=Ge({level:typeof e?.logger=="string"&&e.logger?e.logger:dist_Et.logger,name:core_dist_ge}),{logger:n,chunkLoggerController:o}=Ue({opts:s,maxSizeInBytes:e?.maxLogBlobSizeInBytes,loggerOverride:e?.logger});this.logChunkController=o,(t=this.logChunkController)!=null&&t.downloadLogsBlobInBrowser&&(window.downloadLogsBlobInBrowser=async()=>{var a,c;(a=this.logChunkController)!=null&&a.downloadLogsBlobInBrowser&&((c=this.logChunkController)==null||c.downloadLogsBlobInBrowser({clientId:await this.crypto.getClientId()}))}),this.logger=index_es_Re(n,this.name),this.heartbeat=new heartbeat_dist_index_es/* HeartBeat */.VH,this.crypto=new dist_wi(this,this.logger,e?.keychain),this.history=new dist_Fi(this,this.logger),this.expirer=new dist_Mi(this,this.logger),this.storage=e!=null&&e.storage?e.storage:new keyvaluestorage_dist_index_es/* default */.A(dist_Hi(dist_Hi({},dist_It),e?.storageOptions)),this.relayer=new dist_Ai({core:this,logger:this.logger,relayUrl:this.relayUrl,projectId:this.projectId}),this.pairing=new Ui(this,this.logger),this.verify=new dist_Ki(this,this.logger,this.storage),this.echoClient=new dist_Vi(this.projectId||"",this.logger),this.linkModeSupportedApps=[],this.eventClient=new dist_Gi(this,this.logger,e?.telemetryEnabled),this.setGlobalCore(this)}static async init(e){const t=new core_dist_Oe(e);await t.initialize();const i=await t.crypto.getClientId();return await t.storage.setItem(dist_Ut,i),t}get context(){return ee(this.logger)}async start(){this.initialized||await this.initialize()}async getLogsBlob(){var e;return(e=this.logChunkController)==null?void 0:e.logsToBlob({clientId:await this.crypto.getClientId()})}async addLinkModeSupportedApp(e){this.linkModeSupportedApps.includes(e)||(this.linkModeSupportedApps.push(e),await this.storage.setItem(core_dist_Be,this.linkModeSupportedApps))}async initialize(){this.logger.trace("Initialized");try{await this.crypto.init(),await this.history.init(),await this.expirer.init(),await this.relayer.init(),await this.heartbeat.init(),await this.pairing.init(),this.linkModeSupportedApps=await this.storage.getItem(core_dist_Be)||[],this.initialized=!0,this.logger.info("Core Initialization Success")}catch(e){throw this.logger.warn(e,`Core Initialization Failure at epoch ${Date.now()}`),this.logger.error(e.message),e}}getGlobalCore(e=""){try{if(this.isGlobalCoreDisabled())return;const t=`_walletConnectCore_${e}`,i=`${t}_count`;return globalThis[i]=(globalThis[i]||0)+1,globalThis[i]>1&&console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i]} times.`),globalThis[t]}catch(t){console.warn("Failed to get global WalletConnect core",t);return}}setGlobalCore(e){var t;try{if(this.isGlobalCoreDisabled())return;const i=`_walletConnectCore_${((t=e.opts)==null?void 0:t.customStoragePrefix)||""}`;globalThis[i]=e}catch(i){console.warn("Failed to set global WalletConnect core",i)}}isGlobalCoreDisabled(){try{return typeof dist_process<"u"&&dist_process.env.DISABLE_GLOBAL_CORE==="true"}catch{return!0}}}const dist_ta=core_dist_Oe;
//# sourceMappingURL=index.js.map

;// ./node_modules/@walletconnect/sign-client/dist/index.js
const sign_client_dist_De="wc",sign_client_dist_Le=2,sign_client_dist_Me="client",sign_client_dist_Re=`${sign_client_dist_De}@${sign_client_dist_Le}:${sign_client_dist_Me}:`,sign_client_dist_Ie={name:sign_client_dist_Me,logger:"error",controller:!1,relayUrl:"wss://relay.walletconnect.org"},dist_Is={session_proposal:"session_proposal",session_update:"session_update",session_extend:"session_extend",session_ping:"session_ping",session_delete:"session_delete",session_expire:"session_expire",session_request:"session_request",session_request_sent:"session_request_sent",session_event:"session_event",proposal_expire:"proposal_expire",session_authenticate:"session_authenticate",session_request_expire:"session_request_expire",session_connect:"session_connect"},dist_Ts={database:":memory:"},sign_client_dist_$e="WALLETCONNECT_DEEPLINK_CHOICE",qs={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},dist_Ps="history",dist_Ns="0.3",dist_dt="proposal",dist_Os=(/* unused pure expression or super */ null && (vs)),sign_client_dist_Ke="Proposal expired",dist_ut="session",sign_client_dist_se=cjs.SEVEN_DAYS,dist_gt="engine",sign_client_dist_N={wc_sessionPropose:{req:{ttl:cjs.FIVE_MINUTES,prompt:!0,tag:1100},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1101},reject:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1120},autoReject:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1121}},wc_sessionSettle:{req:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1102},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1103}},wc_sessionUpdate:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1104},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1105}},wc_sessionExtend:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1106},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1107}},wc_sessionRequest:{req:{ttl:cjs.FIVE_MINUTES,prompt:!0,tag:1108},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1109}},wc_sessionEvent:{req:{ttl:cjs.FIVE_MINUTES,prompt:!0,tag:1110},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1111}},wc_sessionDelete:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1112},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1113}},wc_sessionPing:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1114},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1115}},wc_sessionAuthenticate:{req:{ttl:cjs.ONE_HOUR,prompt:!0,tag:1116},res:{ttl:cjs.ONE_HOUR,prompt:!1,tag:1117},reject:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1118},autoReject:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1119}}},sign_client_dist_Te={min:cjs.FIVE_MINUTES,max:cjs.SEVEN_DAYS},sign_client_dist_K={idle:"IDLE",active:"ACTIVE"},dist_yt={eth_sendTransaction:{key:""},eth_sendRawTransaction:{key:""},wallet_sendCalls:{key:""},solana_signTransaction:{key:"signature"},solana_signAllTransactions:{key:"transactions"},solana_signAndSendTransaction:{key:"signature"},sui_signAndExecuteTransaction:{key:"digest"},sui_signTransaction:{key:""},hedera_signAndExecuteTransaction:{key:"transactionId"},hedera_executeTransaction:{key:"transactionId"},near_signTransaction:{key:""},near_signTransactions:{key:""},tron_signTransaction:{key:"txID"},xrpl_signTransaction:{key:""},xrpl_signTransactionFor:{key:""},algo_signTxn:{key:""},sendTransfer:{key:"txid"},stacks_stxTransfer:{key:"txId"},polkadot_signTransaction:{key:""},cosmos_signDirect:{key:""}},dist_mt="request",dist_wt=["wc_sessionPropose","wc_sessionRequest","wc_authRequest","wc_sessionAuthenticate"],dist_t="wc",dist_bs=1.5,dist_vt="auth",sign_client_dist_St="authKeys",sign_client_dist_Et="pairingTopics",dist_ft="requests",sign_client_dist_we=`${dist_t}@${1.5}:${dist_vt}:`,sign_client_dist_e=`${sign_client_dist_we}:PUB_KEY`;var dist_As=Object.defineProperty,dist_xs=Object.defineProperties,dist_Cs=Object.getOwnPropertyDescriptors,sign_client_dist_Rt=Object.getOwnPropertySymbols,Vs=Object.prototype.hasOwnProperty,dist_ks=Object.prototype.propertyIsEnumerable,sign_client_dist_Ue=(S,o,e)=>o in S?dist_As(S,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):S[o]=e,dist_E=(S,o)=>{for(var e in o||(o={}))Vs.call(o,e)&&sign_client_dist_Ue(S,e,o[e]);if(sign_client_dist_Rt)for(var e of sign_client_dist_Rt(o))dist_ks.call(o,e)&&sign_client_dist_Ue(S,e,o[e]);return S},sign_client_dist_b=(S,o)=>dist_xs(S,dist_Cs(o)),dist_c=(S,o,e)=>sign_client_dist_Ue(S,typeof o!="symbol"?o+"":o,e);class Ds extends dist_V{constructor(o){super(o),dist_c(this,"name",dist_gt),dist_c(this,"events",new events),dist_c(this,"initialized",!1),dist_c(this,"requestQueue",{state:sign_client_dist_K.idle,queue:[]}),dist_c(this,"sessionRequestQueue",{state:sign_client_dist_K.idle,queue:[]}),dist_c(this,"emittedSessionRequests",new Hi({limit:500})),dist_c(this,"requestQueueDelay",cjs.ONE_SECOND),dist_c(this,"expectedPairingMethodMap",new Map),dist_c(this,"recentlyDeletedMap",new Map),dist_c(this,"recentlyDeletedLimit",200),dist_c(this,"relayMessageCache",[]),dist_c(this,"pendingSessions",new Map),dist_c(this,"init",async()=>{this.initialized||(await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.registerPairingEvents(),await this.registerLinkModeListeners(),this.client.core.pairing.register({methods:Object.keys(sign_client_dist_N)}),this.initialized=!0,setTimeout(async()=>{await this.processPendingMessageEvents(),this.sessionRequestQueue.queue=this.getPendingSessionRequests(),this.processSessionRequestQueue()},(0,cjs.toMiliseconds)(this.requestQueueDelay)))}),dist_c(this,"connect",async e=>{var t;this.isInitialized(),await this.confirmOnlineStateOrThrow();const s=sign_client_dist_b(dist_E({},e),{requiredNamespaces:e.requiredNamespaces||{},optionalNamespaces:e.optionalNamespaces||{}});await this.isValidConnect(s),s.optionalNamespaces=Ya(s.requiredNamespaces,s.optionalNamespaces),s.requiredNamespaces={};const{pairingTopic:i,requiredNamespaces:r,optionalNamespaces:n,sessionProperties:a,scopedProperties:l,relays:h,authentication:p,walletPay:y}=s,d=((t=p?.[0])==null?void 0:t.ttl)||sign_client_dist_N.wc_sessionPropose.req.ttl||cjs.FIVE_MINUTES;this.validateRequestExpiry(d);let u=i,w,g=!1;try{if(u){const R=this.client.core.pairing.pairings.get(u);this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."),g=R.active}}catch(R){throw this.client.logger.error(`connect() -> pairing.get(${u}) failed`),R}if(!u||!g){const{topic:R,uri:q}=await this.client.core.pairing.create({internal:{skipSubscribe:!0}});u=R,w=q}if(!u){const{message:R}=Bt("NO_MATCHING_KEY",`connect() pairing topic: ${u}`);throw new Error(R)}const f=await this.client.core.crypto.generateKeyPair(),v=_i(d),T=dist_E(sign_client_dist_b(dist_E(dist_E({requiredNamespaces:r,optionalNamespaces:n,relays:h??[{protocol:dist_Nt}],proposer:{publicKey:f,metadata:this.client.metadata},expiryTimestamp:v,pairingTopic:u},a&&{sessionProperties:a}),l&&{scopedProperties:l}),{id:(0,jsonrpc_utils_dist_esm.payloadId)()}),(p||y)&&{requests:{authentication:p?.map(R=>{const{domain:q,chains:ve,nonce:ce,uri:Y,exp:ie,nbf:le,type:J,statement:pe,requestId:he,resources:C,signatureTypes:D}=R;return{domain:q,chains:ve,nonce:ce,type:J??"caip122",aud:Y,version:"1",iat:new Date().toISOString(),exp:ie,nbf:le,statement:pe,requestId:he,resources:C,signatureTypes:D}}),walletPay:y}}),A=$i("session_connect",T.id),{reject:V,resolve:x,done:U}=Ai(d,sign_client_dist_Ke),z=({id:R})=>{R===T.id&&(this.client.events.off("proposal_expire",z),this.pendingSessions.delete(T.id),this.events.emit(A,{error:{message:sign_client_dist_Ke,code:0}}))};return this.client.events.on("proposal_expire",z),this.events.once(A,({error:R,session:q})=>{this.client.events.off("proposal_expire",z),R?V(R):q&&x(q)}),await this.setProposal(T.id,T),await this.sendProposeSession({proposal:T,publishOpts:{internal:{throwOnFailedPublish:!0},tvf:{correlationId:T.id}}}).catch(R=>{throw this.deleteProposal(T.id),R}),{uri:w,approval:U}}),dist_c(this,"pair",async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{return await this.client.core.pairing.pair(e)}catch(t){throw this.client.logger.error("pair() failed"),t}}),dist_c(this,"approve",async e=>{var t,s,i;const r=this.client.core.eventClient.createEvent({properties:{topic:(t=e?.id)==null?void 0:t.toString(),trace:[dist_rr.session_approve_started]}});try{this.isInitialized(),await this.confirmOnlineStateOrThrow()}catch(q){throw r.setError(nr.no_internet_connection),q}try{await this.isValidProposalId(e?.id)}catch(q){throw this.client.logger.error(`approve() -> proposal.get(${e?.id}) failed`),r.setError(nr.proposal_not_found),q}try{await this.isValidApprove(e)}catch(q){throw this.client.logger.error("approve() -> isValidApprove() failed"),r.setError(nr.session_approve_namespace_validation_failure),q}const{id:n,relayProtocol:a,namespaces:l,sessionProperties:h,scopedProperties:p,sessionConfig:y,proposalRequestsResponses:d}=e,u=this.client.proposal.get(n);this.client.core.eventClient.deleteEvent({eventId:r.eventId});const{pairingTopic:w,proposer:g,requiredNamespaces:f,optionalNamespaces:v}=u;let T=(s=this.client.core.eventClient)==null?void 0:s.getEvent({topic:w});T||(T=(i=this.client.core.eventClient)==null?void 0:i.createEvent({type:dist_rr.session_approve_started,properties:{topic:w,trace:[dist_rr.session_approve_started,dist_rr.session_namespaces_validation_success]}}));const A=await this.client.core.crypto.generateKeyPair(),V=g.publicKey,x=await this.client.core.crypto.generateSharedKey(A,V),U=sign_client_dist_b(dist_E(dist_E(dist_E({relay:{protocol:a??"irn"},namespaces:l,controller:{publicKey:A,metadata:this.client.metadata},expiry:_i(sign_client_dist_se)},h&&{sessionProperties:h}),p&&{scopedProperties:p}),y&&{sessionConfig:y}),{proposalRequestsResponses:d}),z=core_dist_ee.relay;T.addTrace(dist_rr.subscribing_session_topic);try{await this.client.core.relayer.subscribe(x,{transportType:z,internal:{skipSubscribe:!0}})}catch(q){throw T.setError(nr.subscribe_session_topic_failure),q}T.addTrace(dist_rr.subscribe_session_topic_success);const R=sign_client_dist_b(dist_E({},U),{topic:x,requiredNamespaces:f,optionalNamespaces:v,pairingTopic:w,acknowledged:!1,self:U.controller,peer:{publicKey:g.publicKey,metadata:g.metadata},controller:A,transportType:core_dist_ee.relay,authentication:d?.authentication,walletPayResult:d?.walletPay});await this.client.session.set(x,R),T.addTrace(dist_rr.store_session);try{await this.sendApproveSession({sessionTopic:x,proposal:u,pairingProposalResponse:{relay:{protocol:a??"irn"},responderPublicKey:A},sessionSettleRequest:U,publishOpts:{internal:{throwOnFailedPublish:!0},tvf:dist_E({correlationId:n},this.getTVFApproveParams(R))}}),T.addTrace(dist_rr.session_approve_publish_success)}catch(q){throw this.client.logger.error(q),this.client.session.delete(x,zt("USER_DISCONNECTED")),await this.client.core.relayer.unsubscribe(x),q}return this.client.core.eventClient.deleteEvent({eventId:T.eventId}),await this.client.core.pairing.updateMetadata({topic:w,metadata:g.metadata}),await this.deleteProposal(n),await this.client.core.pairing.activate({topic:w}),await this.setExpiry(x,_i(sign_client_dist_se)),{topic:x,acknowledged:()=>Promise.resolve(this.client.session.get(x))}}),dist_c(this,"reject",async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidReject(e)}catch(r){throw this.client.logger.error("reject() -> isValidReject() failed"),r}const{id:t,reason:s}=e;let i;try{i=this.client.proposal.get(t).pairingTopic}catch(r){throw this.client.logger.error(`reject() -> proposal.get(${t}) failed`),r}i&&await this.sendError({id:t,topic:i,error:s,rpcOpts:sign_client_dist_N.wc_sessionPropose.reject}),await this.deleteProposal(t)}),dist_c(this,"update",async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidUpdate(e)}catch(p){throw this.client.logger.error("update() -> isValidUpdate() failed"),p}const{topic:t,namespaces:s}=e,{done:i,resolve:r,reject:n}=Ai(cjs.FIVE_MINUTES,"Session update request expired without receiving any acknowledgement"),a=(0,jsonrpc_utils_dist_esm.payloadId)(),l=(0,jsonrpc_utils_dist_esm.getBigIntRpcId)().toString(),h=this.client.session.get(t).namespaces;return this.events.once($i("session_update",a),({error:p})=>{p?n(p):r()}),await this.client.session.update(t,{namespaces:s}),await this.sendRequest({topic:t,method:"wc_sessionUpdate",params:{namespaces:s},throwOnFailedPublish:!0,clientRpcId:a,relayRpcId:l}).catch(p=>{this.client.logger.error(p),this.client.session.update(t,{namespaces:h}),n(p)}),{acknowledged:i}}),dist_c(this,"extend",async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidExtend(e)}catch(a){throw this.client.logger.error("extend() -> isValidExtend() failed"),a}const{topic:t}=e,s=(0,jsonrpc_utils_dist_esm.payloadId)(),{done:i,resolve:r,reject:n}=Ai(cjs.FIVE_MINUTES,"Session extend request expired without receiving any acknowledgement");return this.events.once($i("session_extend",s),({error:a})=>{a?n(a):r()}),await this.setExpiry(t,_i(sign_client_dist_se)),this.sendRequest({topic:t,method:"wc_sessionExtend",params:{},clientRpcId:s,throwOnFailedPublish:!0}).catch(a=>{n(a)}),{acknowledged:i}}),dist_c(this,"request",async e=>{this.isInitialized();try{await this.isValidRequest(e)}catch(g){throw this.client.logger.error("request() -> isValidRequest() failed"),g}const{chainId:t,request:s,topic:i,expiry:r=sign_client_dist_N.wc_sessionRequest.req.ttl}=e,n=this.client.session.get(i);n?.transportType===core_dist_ee.relay&&await this.confirmOnlineStateOrThrow();const a=(0,jsonrpc_utils_dist_esm.payloadId)(),l=(0,jsonrpc_utils_dist_esm.getBigIntRpcId)().toString(),{done:h,resolve:p,reject:y}=Ai(r,"Request expired. Please try again.");this.events.once($i("session_request",a),({error:g,result:f})=>{g?y(g):p(f)});const d="wc_sessionRequest",u=this.getAppLinkIfEnabled(n.peer.metadata,n.transportType);if(u)return await this.sendRequest({clientRpcId:a,relayRpcId:l,topic:i,method:d,params:{request:sign_client_dist_b(dist_E({},s),{expiryTimestamp:_i(r)}),chainId:t},expiry:r,throwOnFailedPublish:!0,appLink:u}).catch(g=>y(g)),this.client.events.emit("session_request_sent",{topic:i,request:s,chainId:t,id:a}),await h();const w={request:sign_client_dist_b(dist_E({},s),{expiryTimestamp:_i(r)}),chainId:t};return await Promise.all([new Promise(async g=>{await this.sendRequest({clientRpcId:a,relayRpcId:l,topic:i,method:d,params:w,expiry:r,throwOnFailedPublish:!0,tvf:this.getTVFParams(a,w)}).catch(f=>y(f)),this.client.events.emit("session_request_sent",{topic:i,request:s,chainId:t,id:a}),g()}),new Promise(async g=>{var f;if(!((f=n.sessionConfig)!=null&&f.disableDeepLink)){const v=await Ci(this.client.core.storage,sign_client_dist_$e);await Ti({id:a,topic:i,wcDeepLink:v})}g()}),h()]).then(g=>g[2])}),dist_c(this,"respond",async e=>{var t,s;this.isInitialized();const i=this.client.core.eventClient.createEvent({properties:{topic:e?.topic||((s=(t=e?.response)==null?void 0:t.id)==null?void 0:s.toString()),trace:[dist_rr.session_request_response_started]}});try{await this.isValidRespond(e)}catch(p){throw i.addTrace(p?.message),i.setError(nr.session_request_response_validation_failure),p}i.addTrace(dist_rr.session_request_response_validation_success);const{topic:r,response:n}=e,{id:a}=n,l=this.client.session.get(r);l.transportType===core_dist_ee.relay&&await this.confirmOnlineStateOrThrow();const h=this.getAppLinkIfEnabled(l.peer.metadata,l.transportType);try{i.addTrace(dist_rr.session_request_response_publish_started),(0,jsonrpc_utils_dist_esm.isJsonRpcResult)(n)?await this.sendResult({id:a,topic:r,result:n.result,throwOnFailedPublish:!0,appLink:h}):(0,jsonrpc_utils_dist_esm.isJsonRpcError)(n)&&await this.sendError({id:a,topic:r,error:n.error,appLink:h}),this.cleanupAfterResponse(e)}catch(p){throw i.addTrace(p?.message),i.setError(nr.session_request_response_publish_failure),p}}),dist_c(this,"ping",async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidPing(e)}catch(s){throw this.client.logger.error("ping() -> isValidPing() failed"),s}const{topic:t}=e;if(this.client.session.keys.includes(t)){const s=(0,jsonrpc_utils_dist_esm.payloadId)(),i=(0,jsonrpc_utils_dist_esm.getBigIntRpcId)().toString(),{done:r,resolve:n,reject:a}=Ai(cjs.FIVE_MINUTES,"Ping request expired without receiving any acknowledgement");this.events.once($i("session_ping",s),({error:l})=>{l?a(l):n()}),await Promise.all([this.sendRequest({topic:t,method:"wc_sessionPing",params:{},throwOnFailedPublish:!0,clientRpcId:s,relayRpcId:i}),r()])}else this.client.core.pairing.pairings.keys.includes(t)&&(this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."),await this.client.core.pairing.ping({topic:t}))}),dist_c(this,"emit",async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidEmit(e);const{topic:t,event:s,chainId:i}=e,r=(0,jsonrpc_utils_dist_esm.getBigIntRpcId)().toString(),n=(0,jsonrpc_utils_dist_esm.payloadId)();await this.sendRequest({topic:t,method:"wc_sessionEvent",params:{event:s,chainId:i},throwOnFailedPublish:!0,relayRpcId:r,clientRpcId:n})}),dist_c(this,"disconnect",async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidDisconnect(e);const{topic:t}=e;if(this.client.session.keys.includes(t))await this.sendRequest({topic:t,method:"wc_sessionDelete",params:zt("USER_DISCONNECTED"),throwOnFailedPublish:!0}),await this.deleteSession({topic:t,emitEvent:!1});else if(this.client.core.pairing.pairings.keys.includes(t))await this.client.core.pairing.disconnect({topic:t});else{const{message:s}=Bt("MISMATCHED_TOPIC",`Session or pairing topic not found: ${t}`);throw new Error(s)}}),dist_c(this,"find",e=>(this.isInitialized(),this.client.session.getAll().filter(t=>Wa(t,e)))),dist_c(this,"getPendingSessionRequests",()=>this.client.pendingRequest.getAll()),dist_c(this,"authenticate",async(e,t)=>{var s;this.isInitialized(),this.isValidAuthenticate(e);const i=t&&this.client.core.linkModeSupportedApps.includes(t)&&((s=this.client.metadata.redirect)==null?void 0:s.linkMode),r=i?core_dist_ee.link_mode:core_dist_ee.relay;r===core_dist_ee.relay&&await this.confirmOnlineStateOrThrow();const{chains:n,statement:a="",uri:l,domain:h,nonce:p,type:y,exp:d,nbf:u,methods:w=[],expiry:g}=e,f=[...e.resources||[]],{topic:v,uri:T}=await this.client.core.pairing.create({methods:["wc_sessionAuthenticate"],transportType:r});this.client.logger.info({message:"Generated new pairing",pairing:{topic:v,uri:T}});const A=await this.client.core.crypto.generateKeyPair(),V=ba(A);if(await Promise.all([this.client.auth.authKeys.set(sign_client_dist_e,{responseTopic:V,publicKey:A}),this.client.auth.pairingTopics.set(V,{topic:V,pairingTopic:v})]),await this.client.core.relayer.subscribe(V,{transportType:r}),this.client.logger.info(`sending request to new pairing topic: ${v}`),w.length>0){const{namespace:C}=Je(n[0]);let D=Zc(C,"request",w);dist_je(f)&&(D=Gc(D,f.pop())),f.push(D)}const x=g&&g>sign_client_dist_N.wc_sessionAuthenticate.req.ttl?g:sign_client_dist_N.wc_sessionAuthenticate.req.ttl,U={authPayload:{type:y??"caip122",chains:n,statement:a,aud:l,domain:h,version:"1",nonce:p,iat:new Date().toISOString(),exp:d,nbf:u,resources:f},requester:{publicKey:A,metadata:this.client.metadata},expiryTimestamp:_i(x)},z={eip155:{chains:n,methods:[...new Set(["personal_sign",...w])],events:["chainChanged","accountsChanged"]}},R={requiredNamespaces:{},optionalNamespaces:z,relays:[{protocol:"irn"}],pairingTopic:v,proposer:{publicKey:A,metadata:this.client.metadata},expiryTimestamp:_i(sign_client_dist_N.wc_sessionPropose.req.ttl),id:(0,jsonrpc_utils_dist_esm.payloadId)()},{done:q,resolve:ve,reject:ce}=Ai(x,"Request expired"),Y=(0,jsonrpc_utils_dist_esm.payloadId)(),ie=$i("session_connect",R.id),le=$i("session_request",Y),J=async({error:C,session:D})=>{this.events.off(le,pe),C?ce(C):D&&ve({session:D})},pe=async C=>{var D,je,Fe;if(await this.deletePendingAuthRequest(Y,{message:"fulfilled",code:0}),C.error){const ue=zt("WC_METHOD_UNSUPPORTED","wc_sessionAuthenticate");return C.error.code===ue.code?void 0:(this.events.off(ie,J),ce(C.error.message))}await this.deleteProposal(R.id),this.events.off(ie,J);const{cacaos:He,responder:X}=C.result,Pe=[],Qe=[];for(const ue of He){await Vc({cacao:ue,projectId:this.client.core.projectId})||(this.client.logger.error(ue,"Signature verification failed"),ce(zt("SESSION_SETTLEMENT_FAILED","Signature verification failed")));const{p:Ne}=ue,Oe=dist_je(Ne.resources),ze=[no(Ne.iss)],Tt=bn(Ne.iss);if(Oe){const be=zc(Oe),qt=Yc(Oe);Pe.push(...be),ze.push(...qt)}for(const be of ze)Qe.push(`${be}:${Tt}`)}const de=await this.client.core.crypto.generateSharedKey(A,X.publicKey);let Se;Pe.length>0&&(Se={topic:de,acknowledged:!0,self:{publicKey:A,metadata:this.client.metadata},peer:X,controller:X.publicKey,expiry:_i(sign_client_dist_se),requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:v,namespaces:za([...new Set(Pe)],[...new Set(Qe)]),transportType:r},await this.client.core.relayer.subscribe(de,{transportType:r}),await this.client.session.set(de,Se),v&&await this.client.core.pairing.updateMetadata({topic:v,metadata:X.metadata}),Se=this.client.session.get(de)),(D=this.client.metadata.redirect)!=null&&D.linkMode&&(je=X.metadata.redirect)!=null&&je.linkMode&&(Fe=X.metadata.redirect)!=null&&Fe.universal&&t&&(this.client.core.addLinkModeSupportedApp(X.metadata.redirect.universal),this.client.session.update(de,{transportType:core_dist_ee.link_mode})),ve({auths:He,session:Se})};this.events.once(ie,J),this.events.once(le,pe);let he;try{if(i){const C=(0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)("wc_sessionAuthenticate",U,Y);this.client.core.history.set(v,C);const D=await this.client.core.crypto.encode("",C,{type:dist_ve,encoding:dist_Ge});he=La(t,v,D)}else await Promise.all([this.sendRequest({topic:v,method:"wc_sessionAuthenticate",params:U,expiry:e.expiry,throwOnFailedPublish:!0,clientRpcId:Y}),this.sendRequest({topic:v,method:"wc_sessionPropose",params:R,expiry:sign_client_dist_N.wc_sessionPropose.req.ttl,throwOnFailedPublish:!0,clientRpcId:R.id})])}catch(C){throw this.events.off(ie,J),this.events.off(le,pe),C}return await this.setProposal(R.id,R),await this.setAuthRequest(Y,{request:sign_client_dist_b(dist_E({},U),{verifyContext:{}}),pairingTopic:v,transportType:r}),{uri:he??T,response:q}}),dist_c(this,"approveSessionAuthenticate",async e=>{const{id:t,auths:s}=e,i=this.client.core.eventClient.createEvent({properties:{topic:t.toString(),trace:[dist_or.authenticated_session_approve_started]}});try{this.isInitialized()}catch(g){throw i.setError(dist_ar.no_internet_connection),g}const r=this.getPendingAuthRequest(t);if(!r)throw i.setError(dist_ar.authenticated_session_pending_request_not_found),new Error(`Could not find pending auth request with id ${t}`);const n=r.transportType||core_dist_ee.relay;n===core_dist_ee.relay&&await this.confirmOnlineStateOrThrow();const a=r.requester.publicKey,l=await this.client.core.crypto.generateKeyPair(),h=ba(a),p={type:dist_ie,receiverPublicKey:a,senderPublicKey:l},y=[],d=[];for(const g of s){if(!await Vc({cacao:g,projectId:this.client.core.projectId})){i.setError(dist_ar.invalid_cacao);const V=zt("SESSION_SETTLEMENT_FAILED","Signature verification failed");throw await this.sendError({id:t,topic:h,error:V,encodeOpts:p}),new Error(V.message)}i.addTrace(dist_or.cacaos_verified);const{p:f}=g,v=dist_je(f.resources),T=[no(f.iss)],A=bn(f.iss);if(v){const V=zc(v),x=Yc(v);y.push(...V),T.push(...x)}for(const V of T)d.push(`${V}:${A}`)}const u=await this.client.core.crypto.generateSharedKey(l,a);i.addTrace(dist_or.create_authenticated_session_topic);let w;if(y?.length>0){w={topic:u,acknowledged:!0,self:{publicKey:l,metadata:this.client.metadata},peer:{publicKey:a,metadata:r.requester.metadata},controller:a,expiry:_i(sign_client_dist_se),authentication:s,requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:r.pairingTopic,namespaces:za([...new Set(y)],[...new Set(d)]),transportType:n},i.addTrace(dist_or.subscribing_authenticated_session_topic);try{await this.client.core.relayer.subscribe(u,{transportType:n})}catch(g){throw i.setError(dist_ar.subscribe_authenticated_session_topic_failure),g}i.addTrace(dist_or.subscribe_authenticated_session_topic_success),await this.client.session.set(u,w),i.addTrace(dist_or.store_authenticated_session),await this.client.core.pairing.updateMetadata({topic:r.pairingTopic,metadata:r.requester.metadata})}i.addTrace(dist_or.publishing_authenticated_session_approve);try{await this.sendResult({topic:h,id:t,result:{cacaos:s,responder:{publicKey:l,metadata:this.client.metadata}},encodeOpts:p,throwOnFailedPublish:!0,appLink:this.getAppLinkIfEnabled(r.requester.metadata,n)})}catch(g){throw i.setError(dist_ar.authenticated_session_approve_publish_failure),g}return await this.client.auth.requests.delete(t,{message:"fulfilled",code:0}),await this.client.core.pairing.activate({topic:r.pairingTopic}),this.client.core.eventClient.deleteEvent({eventId:i.eventId}),{session:w}}),dist_c(this,"rejectSessionAuthenticate",async e=>{this.isInitialized();const{id:t,reason:s}=e,i=this.getPendingAuthRequest(t);if(!i)throw new Error(`Could not find pending auth request with id ${t}`);i.transportType===core_dist_ee.relay&&await this.confirmOnlineStateOrThrow();const r=i.requester.publicKey,n=await this.client.core.crypto.generateKeyPair(),a=ba(r),l={type:dist_ie,receiverPublicKey:r,senderPublicKey:n};await this.sendError({id:t,topic:a,error:s,encodeOpts:l,rpcOpts:sign_client_dist_N.wc_sessionAuthenticate.reject,appLink:this.getAppLinkIfEnabled(i.requester.metadata,i.transportType)}),await this.client.auth.requests.delete(t,{message:"rejected",code:0}),await this.deleteProposal(t)}),dist_c(this,"formatAuthMessage",e=>{this.isInitialized();const{request:t,iss:s}=e;return ro(t,s)}),dist_c(this,"processRelayMessageCache",()=>{setTimeout(async()=>{if(this.relayMessageCache.length!==0)for(;this.relayMessageCache.length>0;)try{const e=this.relayMessageCache.shift();e&&await this.onRelayMessage(e)}catch(e){this.client.logger.error(e)}},50)}),dist_c(this,"cleanupDuplicatePairings",async e=>{if(e.pairingTopic)try{const t=this.client.core.pairing.pairings.get(e.pairingTopic),s=this.client.core.pairing.pairings.getAll().filter(i=>{var r,n;return((r=i.peerMetadata)==null?void 0:r.url)&&((n=i.peerMetadata)==null?void 0:n.url)===e.peer.metadata.url&&i.topic&&i.topic!==t.topic});if(s.length===0)return;this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`),await Promise.all(s.map(i=>this.client.core.pairing.disconnect({topic:i.topic}))),this.client.logger.info("Duplicate pairings clean up finished")}catch(t){this.client.logger.error(t)}}),dist_c(this,"deleteSession",async e=>{var t;const{topic:s,expirerHasDeleted:i=!1,emitEvent:r=!0,id:n=0}=e,{self:a}=this.client.session.get(s);await this.client.core.relayer.unsubscribe(s),await this.client.session.delete(s,zt("USER_DISCONNECTED")),this.addToRecentlyDeleted(s,"session"),this.client.core.crypto.keychain.has(a.publicKey)&&await this.client.core.crypto.deleteKeyPair(a.publicKey),this.client.core.crypto.keychain.has(s)&&await this.client.core.crypto.deleteSymKey(s),i||this.client.core.expirer.del(s),this.client.core.storage.removeItem(sign_client_dist_$e).catch(l=>this.client.logger.warn(l)),s===((t=this.sessionRequestQueue.queue[0])==null?void 0:t.topic)&&(this.sessionRequestQueue.state=sign_client_dist_K.idle),await Promise.all(this.getPendingSessionRequests().filter(l=>l.topic===s).map(l=>this.deletePendingSessionRequest(l.id,zt("USER_DISCONNECTED")))),r&&this.client.events.emit("session_delete",{id:n,topic:s})}),dist_c(this,"deleteProposal",async(e,t)=>{if(t)try{const s=this.client.proposal.get(e),i=this.client.core.eventClient.getEvent({topic:s.pairingTopic});i?.setError(nr.proposal_expired)}catch{}await Promise.all([this.client.proposal.delete(e,zt("USER_DISCONNECTED")),t?Promise.resolve():this.client.core.expirer.del(e)]),this.addToRecentlyDeleted(e,"proposal")}),dist_c(this,"deletePendingSessionRequest",async(e,t,s=!1)=>{await Promise.all([this.client.pendingRequest.delete(e,t),s?Promise.resolve():this.client.core.expirer.del(e)]),this.addToRecentlyDeleted(e,"request"),this.sessionRequestQueue.queue=this.sessionRequestQueue.queue.filter(i=>i.id!==e),s&&(this.sessionRequestQueue.state=sign_client_dist_K.idle,this.client.events.emit("session_request_expire",{id:e}))}),dist_c(this,"deletePendingAuthRequest",async(e,t,s=!1)=>{await Promise.all([this.client.auth.requests.delete(e,t),s?Promise.resolve():this.client.core.expirer.del(e)])}),dist_c(this,"setExpiry",async(e,t)=>{this.client.session.keys.includes(e)&&(this.client.core.expirer.set(e,t),await this.client.session.update(e,{expiry:t}))}),dist_c(this,"setProposal",async(e,t)=>{this.client.core.expirer.set(e,_i(sign_client_dist_N.wc_sessionPropose.req.ttl)),await this.client.proposal.set(e,t)}),dist_c(this,"setAuthRequest",async(e,t)=>{const{request:s,pairingTopic:i,transportType:r=core_dist_ee.relay}=t;this.client.core.expirer.set(e,s.expiryTimestamp),await this.client.auth.requests.set(e,{authPayload:s.authPayload,requester:s.requester,expiryTimestamp:s.expiryTimestamp,id:e,pairingTopic:i,verifyContext:s.verifyContext,transportType:r})}),dist_c(this,"setPendingSessionRequest",async e=>{const{id:t,topic:s,params:i,verifyContext:r}=e,n=i.request.expiryTimestamp||_i(sign_client_dist_N.wc_sessionRequest.req.ttl);this.client.core.expirer.set(t,n),await this.client.pendingRequest.set(t,{id:t,topic:s,params:i,verifyContext:r})}),dist_c(this,"sendRequest",async e=>{const{topic:t,method:s,params:i,expiry:r,relayRpcId:n,clientRpcId:a,throwOnFailedPublish:l,appLink:h,tvf:p,publishOpts:y={}}=e,d=(0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)(s,i,a);let u;const w=!!h;try{const v=w?dist_Ge:dist_oe;u=await this.client.core.crypto.encode(t,d,{encoding:v})}catch(v){throw await this.cleanup(),this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${t} failed`),v}let g;if(dist_wt.includes(s)){const v=ya(JSON.stringify(d)),T=ya(u);g=await this.client.core.verify.register({id:T,decryptedId:v})}const f=dist_E(dist_E({},sign_client_dist_N[s].req),y);if(f.attestation=g,r&&(f.ttl=r),n&&(f.id=n),this.client.core.history.set(t,d),w){const v=La(h,t,u);await __webpack_require__.g.Linking.openURL(v,this.client.name)}else f.tvf=sign_client_dist_b(dist_E({},p),{correlationId:d.id}),l?(f.internal=sign_client_dist_b(dist_E({},f.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(t,u,f)):this.client.core.relayer.publish(t,u,f).catch(v=>this.client.logger.error(v));return d.id}),dist_c(this,"sendProposeSession",async e=>{const{proposal:t,publishOpts:s}=e,i=(0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)("wc_sessionPropose",t,t.id);this.client.core.history.set(t.pairingTopic,i);const r=await this.client.core.crypto.encode(t.pairingTopic,i,{encoding:dist_oe}),n=ya(JSON.stringify(i)),a=ya(r),l=await this.client.core.verify.register({id:a,decryptedId:n});await this.client.core.relayer.publishCustom({payload:{pairingTopic:t.pairingTopic,sessionProposal:r},opts:sign_client_dist_b(dist_E({},s),{publishMethod:"wc_proposeSession",attestation:l})})}),dist_c(this,"sendApproveSession",async e=>{const{sessionTopic:t,pairingProposalResponse:s,proposal:i,sessionSettleRequest:r,publishOpts:n}=e,a=(0,jsonrpc_utils_dist_esm.formatJsonRpcResult)(i.id,s),l=await this.client.core.crypto.encode(i.pairingTopic,a,{encoding:dist_oe}),h=(0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)("wc_sessionSettle",r,n?.id),p=await this.client.core.crypto.encode(t,h,{encoding:dist_oe});this.client.core.history.set(t,h),await this.client.core.relayer.publishCustom({payload:{sessionTopic:t,pairingTopic:i.pairingTopic,sessionProposalResponse:l,sessionSettlementRequest:p},opts:sign_client_dist_b(dist_E({},n),{publishMethod:"wc_approveSession"})})}),dist_c(this,"sendResult",async e=>{const{id:t,topic:s,result:i,throwOnFailedPublish:r,encodeOpts:n,appLink:a}=e,l=(0,jsonrpc_utils_dist_esm.formatJsonRpcResult)(t,i);let h;const p=a&&typeof(__webpack_require__.g==null?void 0:__webpack_require__.g.Linking)<"u";try{const u=p?dist_Ge:dist_oe;h=await this.client.core.crypto.encode(s,l,sign_client_dist_b(dist_E({},n||{}),{encoding:u}))}catch(u){throw await this.cleanup(),this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`),u}let y,d;try{y=await this.client.core.history.get(s,t);const u=y.request;try{d=this.getTVFParams(t,u.params,i)}catch(w){this.client.logger.warn(`sendResult() -> getTVFParams() failed: ${w?.message}`)}}catch(u){throw this.client.logger.error(`sendResult() -> history.get(${s}, ${t}) failed`),u}if(p){const u=La(a,s,h);await __webpack_require__.g.Linking.openURL(u,this.client.name)}else{const u=y.request.method,w=sign_client_dist_N[u].res;w.tvf=sign_client_dist_b(dist_E({},d),{correlationId:t}),r?(w.internal=sign_client_dist_b(dist_E({},w.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(s,h,w)):this.client.core.relayer.publish(s,h,w).catch(g=>this.client.logger.error(g))}await this.client.core.history.resolve(l)}),dist_c(this,"sendError",async e=>{const{id:t,topic:s,error:i,encodeOpts:r,rpcOpts:n,appLink:a}=e,l=(0,jsonrpc_utils_dist_esm.formatJsonRpcError)(t,i);let h;const p=a&&typeof(__webpack_require__.g==null?void 0:__webpack_require__.g.Linking)<"u";try{const d=p?dist_Ge:dist_oe;h=await this.client.core.crypto.encode(s,l,sign_client_dist_b(dist_E({},r||{}),{encoding:d}))}catch(d){throw await this.cleanup(),this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`),d}let y;try{y=await this.client.core.history.get(s,t)}catch(d){throw this.client.logger.error(`sendError() -> history.get(${s}, ${t}) failed`),d}if(p){const d=La(a,s,h);await __webpack_require__.g.Linking.openURL(d,this.client.name)}else{const d=y.request.method,u=n||sign_client_dist_N[d].res;this.client.core.relayer.publish(s,h,u)}await this.client.core.history.resolve(l)}),dist_c(this,"cleanup",async()=>{const e=[],t=[];this.client.session.getAll().forEach(s=>{let i=!1;Ri(s.expiry)&&(i=!0),this.client.core.crypto.keychain.has(s.topic)||(i=!0),i&&e.push(s.topic)}),this.client.proposal.getAll().forEach(s=>{Ri(s.expiryTimestamp)&&t.push(s.id)}),await Promise.all([...e.map(s=>this.deleteSession({topic:s})),...t.map(s=>this.deleteProposal(s))])}),dist_c(this,"onProviderMessageEvent",async e=>{!this.initialized||this.relayMessageCache.length>0?this.relayMessageCache.push(e):await this.onRelayMessage(e)}),dist_c(this,"onRelayEventRequest",async e=>{this.requestQueue.queue.push(e),await this.processRequestsQueue()}),dist_c(this,"processRequestsQueue",async()=>{if(this.requestQueue.state===sign_client_dist_K.active){this.client.logger.info("Request queue already active, skipping...");return}for(this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`);this.requestQueue.queue.length>0;){this.requestQueue.state=sign_client_dist_K.active;const e=this.requestQueue.queue.shift();if(e)try{await this.processRequest(e)}catch(t){this.client.logger.warn(t)}}this.requestQueue.state=sign_client_dist_K.idle}),dist_c(this,"processRequest",async e=>{const{topic:t,payload:s,attestation:i,transportType:r,encryptedId:n}=e,a=s.method;if(!this.shouldIgnorePairingRequest({topic:t,requestMethod:a}))switch(a){case"wc_sessionPropose":return await this.onSessionProposeRequest({topic:t,payload:s,attestation:i,encryptedId:n});case"wc_sessionSettle":return await this.onSessionSettleRequest(t,s);case"wc_sessionUpdate":return await this.onSessionUpdateRequest(t,s);case"wc_sessionExtend":return await this.onSessionExtendRequest(t,s);case"wc_sessionPing":return await this.onSessionPingRequest(t,s);case"wc_sessionDelete":return await this.onSessionDeleteRequest(t,s);case"wc_sessionRequest":return await this.onSessionRequest({topic:t,payload:s,attestation:i,encryptedId:n,transportType:r});case"wc_sessionEvent":return await this.onSessionEventRequest(t,s);case"wc_sessionAuthenticate":return await this.onSessionAuthenticateRequest({topic:t,payload:s,attestation:i,encryptedId:n,transportType:r});default:return this.client.logger.info(`Unsupported request method ${a}`)}}),dist_c(this,"onRelayEventResponse",async e=>{const{topic:t,payload:s,transportType:i}=e,r=(await this.client.core.history.get(t,s.id)).request.method;switch(r){case"wc_sessionPropose":return this.onSessionProposeResponse(t,s,i);case"wc_sessionSettle":return this.onSessionSettleResponse(t,s);case"wc_sessionUpdate":return this.onSessionUpdateResponse(t,s);case"wc_sessionExtend":return this.onSessionExtendResponse(t,s);case"wc_sessionPing":return this.onSessionPingResponse(t,s);case"wc_sessionRequest":return this.onSessionRequestResponse(t,s);case"wc_sessionAuthenticate":return this.onSessionAuthenticateResponse(t,s);default:return this.client.logger.info(`Unsupported response method ${r}`)}}),dist_c(this,"onRelayEventUnknownPayload",e=>{const{topic:t}=e,{message:s}=Bt("MISSING_OR_INVALID",`Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);throw new Error(s)}),dist_c(this,"shouldIgnorePairingRequest",e=>{const{topic:t,requestMethod:s}=e,i=this.expectedPairingMethodMap.get(t);return!i||i.includes(s)?!1:!!(i.includes("wc_sessionAuthenticate")&&this.client.events.listenerCount("session_authenticate")>0)}),dist_c(this,"onSessionProposeRequest",async e=>{const{topic:t,payload:s,attestation:i,encryptedId:r}=e,{params:n,id:a}=s;try{const l=this.client.core.eventClient.getEvent({topic:t});this.client.events.listenerCount("session_proposal")===0&&(console.warn("No listener for session_proposal event"),l?.setError(core_dist_X.proposal_listener_not_found)),this.isValidConnect(dist_E({},s.params));const h=n.expiryTimestamp||_i(sign_client_dist_N.wc_sessionPropose.req.ttl),p=dist_E({id:a,pairingTopic:t,expiryTimestamp:h,attestation:i,encryptedId:r},n);await this.setProposal(a,p);const y=await this.getVerifyContext({attestationId:i,hash:ya(JSON.stringify(s)),encryptedId:r,metadata:p.proposer.metadata});l?.addTrace(dist_Y.emit_session_proposal),this.client.events.emit("session_proposal",{id:a,params:p,verifyContext:y})}catch(l){await this.sendError({id:a,topic:t,error:l,rpcOpts:sign_client_dist_N.wc_sessionPropose.autoReject}),this.client.logger.error(l)}}),dist_c(this,"onSessionProposeResponse",async(e,t,s)=>{const{id:i}=t;if((0,jsonrpc_utils_dist_esm.isJsonRpcResult)(t)){const{result:r}=t;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",result:r});const n=this.client.proposal.get(i);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",proposal:n});const a=n.proposer.publicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",selfPublicKey:a});const l=r.responderPublicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",peerPublicKey:l});const h=await this.client.core.crypto.generateSharedKey(a,l);this.pendingSessions.set(i,{sessionTopic:h,pairingTopic:e,proposalId:i,publicKey:a});const p=await this.client.core.relayer.subscribe(h,{transportType:s});this.client.logger.trace({type:"method",method:"onSessionProposeResponse",subscriptionId:p}),await this.client.core.pairing.activate({topic:e})}else if((0,jsonrpc_utils_dist_esm.isJsonRpcError)(t)){await this.deleteProposal(i);const r=$i("session_connect",i);if(this.events.listenerCount(r)===0)throw new Error(`emitting ${r} without any listeners, 954`);this.events.emit(r,{error:t.error})}}),dist_c(this,"onSessionSettleRequest",async(e,t)=>{const{id:s,params:i}=t;try{this.isValidSessionSettleRequest(i);const{relay:r,controller:n,expiry:a,namespaces:l,sessionProperties:h,scopedProperties:p,sessionConfig:y,proposalRequestsResponses:d}=t.params,u=[...this.pendingSessions.values()].find(f=>f.sessionTopic===e);if(!u)return this.client.logger.error(`Pending session not found for topic ${e}`);const w=this.client.proposal.get(u.proposalId),g=sign_client_dist_b(dist_E(dist_E(dist_E({topic:e,relay:r,expiry:a,namespaces:l,acknowledged:!0,pairingTopic:u.pairingTopic,requiredNamespaces:w.requiredNamespaces,optionalNamespaces:w.optionalNamespaces,controller:n.publicKey,self:{publicKey:u.publicKey,metadata:this.client.metadata},peer:{publicKey:n.publicKey,metadata:n.metadata}},h&&{sessionProperties:h}),p&&{scopedProperties:p}),y&&{sessionConfig:y}),{transportType:core_dist_ee.relay,authentication:d?.authentication,walletPayResult:d?.walletPay});await this.client.session.set(g.topic,g),await this.setExpiry(g.topic,g.expiry),await this.client.core.pairing.updateMetadata({topic:u.pairingTopic,metadata:g.peer.metadata}),this.pendingSessions.delete(u.proposalId),this.deleteProposal(u.proposalId,!1),this.cleanupDuplicatePairings(g),await this.sendResult({id:t.id,topic:e,throwOnFailedPublish:!0,result:!0}),this.client.events.emit("session_connect",{session:g}),this.events.emit($i("session_connect",u.proposalId),{session:g})}catch(r){await this.sendError({id:s,topic:e,error:r}),this.client.logger.error(r)}}),dist_c(this,"onSessionSettleResponse",async(e,t)=>{const{id:s}=t;(0,jsonrpc_utils_dist_esm.isJsonRpcResult)(t)?(await this.client.session.update(e,{acknowledged:!0}),this.events.emit($i("session_approve",s),{})):(0,jsonrpc_utils_dist_esm.isJsonRpcError)(t)&&(await this.client.session.delete(e,zt("USER_DISCONNECTED")),this.events.emit($i("session_approve",s),{error:t.error}))}),dist_c(this,"onSessionUpdateRequest",async(e,t)=>{const{params:s,id:i}=t;try{const r=`${e}_session_update`,n=mu.get(r);if(n&&this.isRequestOutOfSync(n,i)){this.client.logger.warn(`Discarding out of sync request - ${i}`),this.sendError({id:i,topic:e,error:zt("INVALID_UPDATE_REQUEST")});return}this.isValidUpdate(dist_E({topic:e},s));try{mu.set(r,i),await this.client.session.update(e,{namespaces:s.namespaces}),await this.sendResult({id:i,topic:e,result:!0})}catch(a){throw mu.delete(r),a}this.client.events.emit("session_update",{id:i,topic:e,params:s})}catch(r){await this.sendError({id:i,topic:e,error:r}),this.client.logger.error(r)}}),dist_c(this,"isRequestOutOfSync",(e,t)=>t.toString().slice(0,-3)<e.toString().slice(0,-3)),dist_c(this,"onSessionUpdateResponse",(e,t)=>{const{id:s}=t,i=$i("session_update",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);(0,jsonrpc_utils_dist_esm.isJsonRpcResult)(t)?this.events.emit($i("session_update",s),{}):(0,jsonrpc_utils_dist_esm.isJsonRpcError)(t)&&this.events.emit($i("session_update",s),{error:t.error})}),dist_c(this,"onSessionExtendRequest",async(e,t)=>{const{id:s}=t;try{this.isValidExtend({topic:e}),await this.setExpiry(e,_i(sign_client_dist_se)),await this.sendResult({id:s,topic:e,result:!0}),this.client.events.emit("session_extend",{id:s,topic:e})}catch(i){await this.sendError({id:s,topic:e,error:i}),this.client.logger.error(i)}}),dist_c(this,"onSessionExtendResponse",(e,t)=>{const{id:s}=t,i=$i("session_extend",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);(0,jsonrpc_utils_dist_esm.isJsonRpcResult)(t)?this.events.emit($i("session_extend",s),{}):(0,jsonrpc_utils_dist_esm.isJsonRpcError)(t)&&this.events.emit($i("session_extend",s),{error:t.error})}),dist_c(this,"onSessionPingRequest",async(e,t)=>{const{id:s}=t;try{this.isValidPing({topic:e}),await this.sendResult({id:s,topic:e,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_ping",{id:s,topic:e})}catch(i){await this.sendError({id:s,topic:e,error:i}),this.client.logger.error(i)}}),dist_c(this,"onSessionPingResponse",(e,t)=>{const{id:s}=t,i=$i("session_ping",s);setTimeout(()=>{if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners 2176`);(0,jsonrpc_utils_dist_esm.isJsonRpcResult)(t)?this.events.emit($i("session_ping",s),{}):(0,jsonrpc_utils_dist_esm.isJsonRpcError)(t)&&this.events.emit($i("session_ping",s),{error:t.error})},500)}),dist_c(this,"onSessionDeleteRequest",async(e,t)=>{const{id:s}=t;try{await this.isValidDisconnect({topic:e,reason:t.params}),this.cleanupPendingSentRequestsForTopic({topic:e,error:zt("USER_DISCONNECTED")}),await this.deleteSession({topic:e,id:s})}catch(i){this.client.logger.error(i)}}),dist_c(this,"onSessionRequest",async e=>{var t,s,i;const{topic:r,payload:n,attestation:a,encryptedId:l,transportType:h}=e,{id:p,params:y}=n;try{await this.isValidRequest(dist_E({topic:r},y));const d=this.client.session.get(r),u=await this.getVerifyContext({attestationId:a,hash:ya(JSON.stringify((0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)("wc_sessionRequest",y,p))),encryptedId:l,metadata:d.peer.metadata,transportType:h}),w={id:p,topic:r,params:y,verifyContext:u};await this.setPendingSessionRequest(w),h===core_dist_ee.link_mode&&(t=d.peer.metadata.redirect)!=null&&t.universal&&this.client.core.addLinkModeSupportedApp((s=d.peer.metadata.redirect)==null?void 0:s.universal),(i=this.client.signConfig)!=null&&i.disableRequestQueue?this.emitSessionRequest(w):(this.addSessionRequestToSessionRequestQueue(w),this.processSessionRequestQueue())}catch(d){await this.sendError({id:p,topic:r,error:d}),this.client.logger.error(d)}}),dist_c(this,"onSessionRequestResponse",(e,t)=>{const{id:s}=t,i=$i("session_request",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);(0,jsonrpc_utils_dist_esm.isJsonRpcResult)(t)?this.events.emit($i("session_request",s),{result:t.result}):(0,jsonrpc_utils_dist_esm.isJsonRpcError)(t)&&this.events.emit($i("session_request",s),{error:t.error})}),dist_c(this,"onSessionEventRequest",async(e,t)=>{const{id:s,params:i}=t;try{const r=`${e}_session_event_${i.event.name}`,n=mu.get(r);if(n&&this.isRequestOutOfSync(n,s)){this.client.logger.info(`Discarding out of sync request - ${s}`);return}this.isValidEmit(dist_E({topic:e},i)),this.client.events.emit("session_event",{id:s,topic:e,params:i}),mu.set(r,s)}catch(r){await this.sendError({id:s,topic:e,error:r}),this.client.logger.error(r)}}),dist_c(this,"onSessionAuthenticateResponse",(e,t)=>{const{id:s}=t;this.client.logger.trace({type:"method",method:"onSessionAuthenticateResponse",topic:e,payload:t}),(0,jsonrpc_utils_dist_esm.isJsonRpcResult)(t)?this.events.emit($i("session_request",s),{result:t.result}):(0,jsonrpc_utils_dist_esm.isJsonRpcError)(t)&&this.events.emit($i("session_request",s),{error:t.error})}),dist_c(this,"onSessionAuthenticateRequest",async e=>{var t;const{topic:s,payload:i,attestation:r,encryptedId:n,transportType:a}=e;try{const{requester:l,authPayload:h,expiryTimestamp:p}=i.params,y=await this.getVerifyContext({attestationId:r,hash:ya(JSON.stringify(i)),encryptedId:n,metadata:l.metadata,transportType:a}),d={requester:l,pairingTopic:s,id:i.id,authPayload:h,verifyContext:y,expiryTimestamp:p};await this.setAuthRequest(i.id,{request:d,pairingTopic:s,transportType:a}),a===core_dist_ee.link_mode&&(t=l.metadata.redirect)!=null&&t.universal&&this.client.core.addLinkModeSupportedApp(l.metadata.redirect.universal),this.client.events.emit("session_authenticate",{topic:s,params:i.params,id:i.id,verifyContext:y})}catch(l){this.client.logger.error(l);const h=i.params.requester.publicKey,p=await this.client.core.crypto.generateKeyPair(),y=this.getAppLinkIfEnabled(i.params.requester.metadata,a),d={type:dist_ie,receiverPublicKey:h,senderPublicKey:p};await this.sendError({id:i.id,topic:s,error:l,encodeOpts:d,rpcOpts:sign_client_dist_N.wc_sessionAuthenticate.autoReject,appLink:y})}}),dist_c(this,"addSessionRequestToSessionRequestQueue",e=>{this.sessionRequestQueue.queue.push(e)}),dist_c(this,"cleanupAfterResponse",e=>{this.deletePendingSessionRequest(e.response.id,{message:"fulfilled",code:0}),setTimeout(()=>{this.sessionRequestQueue.state=sign_client_dist_K.idle,this.processSessionRequestQueue()},(0,cjs.toMiliseconds)(this.requestQueueDelay))}),dist_c(this,"cleanupPendingSentRequestsForTopic",({topic:e,error:t})=>{const s=this.client.core.history.pending;s.length>0&&s.filter(i=>i.topic===e&&i.request.method==="wc_sessionRequest").forEach(i=>{this.events.emit($i("session_request",i.request.id),{error:t})})}),dist_c(this,"processSessionRequestQueue",()=>{if(this.sessionRequestQueue.state===sign_client_dist_K.active){this.client.logger.info("session request queue is already active.");return}const e=this.sessionRequestQueue.queue[0];if(!e){this.client.logger.info("session request queue is empty.");return}try{this.emitSessionRequest(e)}catch(t){this.client.logger.error(t)}}),dist_c(this,"emitSessionRequest",e=>{if(this.emittedSessionRequests.has(e.id)){this.client.logger.warn({id:e.id},`Skipping emitting \`session_request\` event for duplicate request. id: ${e.id}`);return}this.sessionRequestQueue.state=sign_client_dist_K.active,this.emittedSessionRequests.add(e.id),this.client.events.emit("session_request",e)}),dist_c(this,"onPairingCreated",e=>{if(e.methods&&this.expectedPairingMethodMap.set(e.topic,e.methods),e.active)return;const t=this.client.proposal.getAll().find(s=>s.pairingTopic===e.topic);t&&this.onSessionProposeRequest({topic:e.topic,payload:(0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)("wc_sessionPropose",sign_client_dist_b(dist_E({},t),{requiredNamespaces:t.requiredNamespaces,optionalNamespaces:t.optionalNamespaces,relays:t.relays,proposer:t.proposer,sessionProperties:t.sessionProperties,scopedProperties:t.scopedProperties}),t.id),attestation:t.attestation,encryptedId:t.encryptedId})}),dist_c(this,"isValidConnect",async e=>{if(!ou(e)){const{message:l}=Bt("MISSING_OR_INVALID",`connect() params: ${JSON.stringify(e)}`);throw new Error(l)}const{pairingTopic:t,requiredNamespaces:s,optionalNamespaces:i,sessionProperties:r,scopedProperties:n,relays:a}=e;if(Dt(t)||await this.isValidPairingTopic(t),!nu(a,!0)){const{message:l}=Bt("MISSING_OR_INVALID",`connect() relays: ${a}`);throw new Error(l)}if(s&&!Dt(s)&&Ye(s)!==0){const l="requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";["fatal","error","silent"].includes(this.client.logger.level)?console.warn(l):this.client.logger.warn(l),this.validateNamespaces(s,"requiredNamespaces")}if(i&&!Dt(i)&&Ye(i)!==0&&this.validateNamespaces(i,"optionalNamespaces"),r&&!Dt(r)&&this.validateSessionProps(r,"sessionProperties"),n&&!Dt(n)){this.validateSessionProps(n,"scopedProperties");const l=Object.keys(s||{}).concat(Object.keys(i||{}));if(!Object.keys(n).every(h=>l.includes(h.split(":")[0])))throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(n)}, required/optional namespaces: ${JSON.stringify(l)}`)}}),dist_c(this,"validateNamespaces",(e,t)=>{const s=eu(e,"connect()",t);if(s)throw new Error(s.message)}),dist_c(this,"isValidApprove",async e=>{if(!ou(e))throw new Error(Bt("MISSING_OR_INVALID",`approve() params: ${e}`).message);const{id:t,namespaces:s,relayProtocol:i,sessionProperties:r,scopedProperties:n}=e;this.checkRecentlyDeleted(t),await this.isValidProposalId(t);const a=this.client.proposal.get(t),l=Ns(s,"approve()");if(l)throw new Error(l.message);const h=_s(a.requiredNamespaces,s,"approve()");if(h)throw new Error(h.message);if(!ft(i,!0)){const{message:p}=Bt("MISSING_OR_INVALID",`approve() relayProtocol: ${i}`);throw new Error(p)}if(r&&!Dt(r)&&this.validateSessionProps(r,"sessionProperties"),n&&!Dt(n)){this.validateSessionProps(n,"scopedProperties");const p=new Set(Object.keys(s));if(!Object.keys(n).every(y=>p.has(y.split(":")[0])))throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(n)}, approved namespaces: ${Array.from(p).join(", ")}`)}}),dist_c(this,"isValidReject",async e=>{if(!ou(e)){const{message:i}=Bt("MISSING_OR_INVALID",`reject() params: ${e}`);throw new Error(i)}const{id:t,reason:s}=e;if(this.checkRecentlyDeleted(t),await this.isValidProposalId(t),!su(s)){const{message:i}=Bt("MISSING_OR_INVALID",`reject() reason: ${JSON.stringify(s)}`);throw new Error(i)}}),dist_c(this,"isValidSessionSettleRequest",e=>{if(!ou(e)){const{message:l}=Bt("MISSING_OR_INVALID",`onSessionSettleRequest() params: ${e}`);throw new Error(l)}const{relay:t,controller:s,namespaces:i,expiry:r}=e;if(!Us(t)){const{message:l}=Bt("MISSING_OR_INVALID","onSessionSettleRequest() relay protocol should be a string");throw new Error(l)}const n=tu(s,"onSessionSettleRequest()");if(n)throw new Error(n.message);const a=Ns(i,"onSessionSettleRequest()");if(a)throw new Error(a.message);if(Ri(r)){const{message:l}=Bt("EXPIRED","onSessionSettleRequest()");throw new Error(l)}}),dist_c(this,"isValidUpdate",async e=>{if(!ou(e)){const{message:a}=Bt("MISSING_OR_INVALID",`update() params: ${e}`);throw new Error(a)}const{topic:t,namespaces:s}=e;this.checkRecentlyDeleted(t),await this.isValidSessionTopic(t);const i=this.client.session.get(t),r=Ns(s,"update()");if(r)throw new Error(r.message);const n=_s(i.requiredNamespaces,s,"update()");if(n)throw new Error(n.message)}),dist_c(this,"isValidExtend",async e=>{if(!ou(e)){const{message:s}=Bt("MISSING_OR_INVALID",`extend() params: ${e}`);throw new Error(s)}const{topic:t}=e;this.checkRecentlyDeleted(t),await this.isValidSessionTopic(t)}),dist_c(this,"isValidRequest",async e=>{if(!ou(e)){const{message:a}=Bt("MISSING_OR_INVALID",`request() params: ${e}`);throw new Error(a)}const{topic:t,request:s,chainId:i,expiry:r}=e;this.checkRecentlyDeleted(t),await this.isValidSessionTopic(t);const{namespaces:n}=this.client.session.get(t);if(!au(n,i)){const{message:a}=Bt("MISSING_OR_INVALID",`request() chainId: ${i}`);throw new Error(a)}if(!iu(s)){const{message:a}=Bt("MISSING_OR_INVALID",`request() ${JSON.stringify(s)}`);throw new Error(a)}if(!uu(n,i,s.method)){const{message:a}=Bt("MISSING_OR_INVALID",`request() method: ${s.method}`);throw new Error(a)}this.validateRequestExpiry(r)}),dist_c(this,"isValidRespond",async e=>{var t;if(!ou(e)){const{message:n}=Bt("MISSING_OR_INVALID",`respond() params: ${e}`);throw new Error(n)}const{topic:s,response:i}=e;try{await this.isValidSessionTopic(s)}catch(n){throw(t=e?.response)!=null&&t.id&&this.cleanupAfterResponse(e),n}if(!cu(i)){const{message:n}=Bt("MISSING_OR_INVALID",`respond() response: ${JSON.stringify(i)}`);throw new Error(n)}const r=this.client.pendingRequest.get(i.id);if(r.topic!==s){const{message:n}=Bt("MISMATCHED_TOPIC",`Request response topic mismatch. reqId: ${i.id}, expected topic: ${r.topic}, received topic: ${s}`);throw new Error(n)}}),dist_c(this,"isValidPing",async e=>{if(!ou(e)){const{message:s}=Bt("MISSING_OR_INVALID",`ping() params: ${e}`);throw new Error(s)}const{topic:t}=e;await this.isValidSessionOrPairingTopic(t)}),dist_c(this,"isValidEmit",async e=>{if(!ou(e)){const{message:n}=Bt("MISSING_OR_INVALID",`emit() params: ${e}`);throw new Error(n)}const{topic:t,event:s,chainId:i}=e;await this.isValidSessionTopic(t);const{namespaces:r}=this.client.session.get(t);if(!au(r,i)){const{message:n}=Bt("MISSING_OR_INVALID",`emit() chainId: ${i}`);throw new Error(n)}if(!fu(s)){const{message:n}=Bt("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(n)}if(!lu(r,i,s.name)){const{message:n}=Bt("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(n)}}),dist_c(this,"isValidDisconnect",async e=>{if(!ou(e)){const{message:s}=Bt("MISSING_OR_INVALID",`disconnect() params: ${e}`);throw new Error(s)}const{topic:t}=e;await this.isValidSessionOrPairingTopic(t)}),dist_c(this,"isValidAuthenticate",e=>{const{chains:t,uri:s,domain:i,nonce:r}=e;if(!Array.isArray(t)||t.length===0)throw new Error("chains is required and must be a non-empty array");if(!ft(s,!1))throw new Error("uri is required parameter");if(!ft(i,!1))throw new Error("domain is required parameter");if(!ft(r,!1))throw new Error("nonce is required parameter");if([...new Set(t.map(a=>Je(a).namespace))].length>1)throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");const{namespace:n}=Je(t[0]);if(n!=="eip155")throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")}),dist_c(this,"getVerifyContext",async e=>{const{attestationId:t,hash:s,encryptedId:i,metadata:r,transportType:n}=e,a={verified:{verifyUrl:r.verifyUrl||core_dist_be,validation:"UNKNOWN",origin:r.url||""}};try{if(n===core_dist_ee.link_mode){const h=this.getAppLinkIfEnabled(r,n);return a.verified.validation=h&&new URL(h).origin===new URL(r.url).origin?"VALID":"INVALID",a}const l=await this.client.core.verify.resolve({attestationId:t,hash:s,encryptedId:i,verifyUrl:r.verifyUrl});l&&(a.verified.origin=l.origin,a.verified.isScam=l.isScam,a.verified.validation=l.origin===new URL(r.url).origin?"VALID":"INVALID")}catch(l){this.client.logger.warn(l)}return this.client.logger.debug(`Verify context: ${JSON.stringify(a)}`),a}),dist_c(this,"validateSessionProps",(e,t)=>{Object.values(e).forEach((s,i)=>{if(s==null){const{message:r}=Bt("MISSING_OR_INVALID",`${t} must contain an existing value for each key. Received: ${s} for key ${Object.keys(e)[i]}`);throw new Error(r)}})}),dist_c(this,"getPendingAuthRequest",e=>{const t=this.client.auth.requests.get(e);return typeof t=="object"?t:void 0}),dist_c(this,"addToRecentlyDeleted",(e,t)=>{if(this.recentlyDeletedMap.set(e,t),this.recentlyDeletedMap.size>=this.recentlyDeletedLimit){let s=0;const i=this.recentlyDeletedLimit/2;for(const r of this.recentlyDeletedMap.keys()){if(s++>=i)break;this.recentlyDeletedMap.delete(r)}}}),dist_c(this,"checkRecentlyDeleted",e=>{const t=this.recentlyDeletedMap.get(e);if(t){const{message:s}=Bt("MISSING_OR_INVALID",`Record was recently deleted - ${t}: ${e}`);throw new Error(s)}}),dist_c(this,"isLinkModeEnabled",(e,t)=>{var s,i,r,n,a,l,h,p,y;return!e||t!==core_dist_ee.link_mode?!1:((i=(s=this.client.metadata)==null?void 0:s.redirect)==null?void 0:i.linkMode)===!0&&((n=(r=this.client.metadata)==null?void 0:r.redirect)==null?void 0:n.universal)!==void 0&&((l=(a=this.client.metadata)==null?void 0:a.redirect)==null?void 0:l.universal)!==""&&((h=e?.redirect)==null?void 0:h.universal)!==void 0&&((p=e?.redirect)==null?void 0:p.universal)!==""&&((y=e?.redirect)==null?void 0:y.linkMode)===!0&&this.client.core.linkModeSupportedApps.includes(e.redirect.universal)&&typeof(__webpack_require__.g==null?void 0:__webpack_require__.g.Linking)<"u"}),dist_c(this,"getAppLinkIfEnabled",(e,t)=>{var s;return this.isLinkModeEnabled(e,t)?(s=e?.redirect)==null?void 0:s.universal:void 0}),dist_c(this,"handleLinkModeMessage",({url:e})=>{if(!e||!e.includes("wc_ev")||!e.includes("topic"))return;const t=ji(e,"topic")||"",s=decodeURIComponent(ji(e,"wc_ev")||""),i=this.client.session.keys.includes(t);i&&this.client.session.update(t,{transportType:core_dist_ee.link_mode}),this.client.core.dispatchEnvelope({topic:t,message:s,sessionExists:i})}),dist_c(this,"registerLinkModeListeners",async()=>{var e;if(ki()||It()&&(e=this.client.metadata.redirect)!=null&&e.linkMode){const t=__webpack_require__.g==null?void 0:__webpack_require__.g.Linking;if(typeof t<"u"){t.addEventListener("url",this.handleLinkModeMessage,this.client.name);const s=await t.getInitialURL();s&&setTimeout(()=>{this.handleLinkModeMessage({url:s})},50)}}}),dist_c(this,"getTVFApproveParams",e=>{try{const t=gs(e.namespaces),s=qa(e.namespaces),i=Fa(e.namespaces),r=e.sessionProperties,n=e.scopedProperties;return{approvedChains:t,approvedMethods:s,approvedEvents:i,sessionProperties:r,scopedProperties:n}}catch(t){return this.client.logger.warn(t,"Error getting TVF approve params"),{}}}),dist_c(this,"getTVFParams",(e,t,s)=>{var i,r,n;if(!((i=t.request)!=null&&i.method))return{};const a={correlationId:e,rpcMethods:[t.request.method],chainId:t.chainId};try{const l=this.extractTxHashesFromResult(t.request,s);a.txHashes=l,a.contractAddresses=this.isValidContractData(t.request.params)?[(n=(r=t.request.params)==null?void 0:r[0])==null?void 0:n.to]:[]}catch(l){this.client.logger.warn(l,"Error getting TVF params")}return a}),dist_c(this,"isValidContractData",e=>{var t;if(!e)return!1;try{const s=e?.data||((t=e?.[0])==null?void 0:t.data);if(!s.startsWith("0x"))return!1;const i=s.slice(2);return/^[0-9a-fA-F]*$/.test(i)?i.length%2===0:!1}catch{}return!1}),dist_c(this,"extractTxHashesFromResult",(e,t)=>{var s;try{if(!t)return[];const i=e.method,r=dist_yt[i];if(i==="sui_signTransaction")return[Uc(t.transactionBytes)];if(i==="near_signTransaction")return[_c(t)];if(i==="near_signTransactions")return t.map(a=>_c(a));if(i==="xrpl_signTransactionFor"||i==="xrpl_signTransaction")return[(s=t.tx_json)==null?void 0:s.hash];if(i==="polkadot_signTransaction")return[Bu({transaction:e.params.transactionPayload,signature:t.signature})];if(i==="algo_signTxn")return dist_Be(t)?t.map(a=>Rc(a)):[Rc(t)];if(i==="cosmos_signDirect")return[$c(t)];if(i==="wallet_sendCalls")return Tc(t);if(typeof t=="string")return[t];const n=t[r.key];if(dist_Be(n))return i==="solana_signAllTransactions"?n.map(a=>Nc(a)):n;if(typeof n=="string")return[n]}catch(i){this.client.logger.warn(i,"Error extracting tx hashes from result")}return[]})}async processPendingMessageEvents(){try{const o=this.client.session.keys,e=this.client.core.relayer.messages.getWithoutAck(o);for(const[t,s]of Object.entries(e))for(const i of s)try{await this.onProviderMessageEvent({topic:t,message:i,publishedAt:Date.now()})}catch{this.client.logger.warn(`Error processing pending message event for topic: ${t}, message: ${i}`)}}catch(o){this.client.logger.warn(o,"processPendingMessageEvents failed")}}isInitialized(){if(!this.initialized){const{message:o}=Bt("NOT_INITIALIZED",this.name);throw new Error(o)}}async confirmOnlineStateOrThrow(){await this.client.core.relayer.confirmOnlineStateOrThrow()}registerRelayerEvents(){this.client.core.relayer.on(core_dist_C.message,o=>{this.onProviderMessageEvent(o)})}async onRelayMessage(o){const{topic:e,message:t,attestation:s,transportType:i}=o,{publicKey:r}=this.client.auth.authKeys.keys.includes(sign_client_dist_e)?this.client.auth.authKeys.get(sign_client_dist_e):{responseTopic:void 0,publicKey:void 0};try{const n=await this.client.core.crypto.decode(e,t,{receiverPublicKey:r,encoding:i===core_dist_ee.link_mode?dist_Ge:dist_oe});(0,jsonrpc_utils_dist_esm.isJsonRpcRequest)(n)?(this.client.core.history.set(e,n),await this.onRelayEventRequest({topic:e,payload:n,attestation:s,transportType:i,encryptedId:ya(t)})):(0,jsonrpc_utils_dist_esm.isJsonRpcResponse)(n)?(await this.client.core.history.resolve(n),await this.onRelayEventResponse({topic:e,payload:n,transportType:i}),this.client.core.history.delete(e,n.id)):(this.client.logger.error(`onRelayMessage() -> unknown payload: ${JSON.stringify(n)}`),await this.onRelayEventUnknownPayload({topic:e,payload:n,transportType:i})),await this.client.core.relayer.messages.ack(e,t)}catch(n){this.client.logger.error(`onRelayMessage() -> failed to process an inbound message: ${t}`),this.client.logger.error(n)}}registerExpirerEvents(){this.client.core.expirer.on(dist_q.expired,async o=>{const{topic:e,id:t}=dist_Ui(o.target);if(t&&this.client.pendingRequest.keys.includes(t))return await this.deletePendingSessionRequest(t,Bt("EXPIRED"),!0);if(t&&this.client.auth.requests.keys.includes(t))return await this.deletePendingAuthRequest(t,Bt("EXPIRED"),!0);e?this.client.session.keys.includes(e)&&(await this.deleteSession({topic:e,expirerHasDeleted:!0}),this.client.events.emit("session_expire",{topic:e})):t&&(await this.deleteProposal(t,!0),this.client.events.emit("proposal_expire",{id:t}))})}registerPairingEvents(){this.client.core.pairing.events.on(dist_ae.create,o=>this.onPairingCreated(o)),this.client.core.pairing.events.on(dist_ae.delete,o=>{this.addToRecentlyDeleted(o.topic,"pairing")})}isValidPairingTopic(o){if(!ft(o,!1)){const{message:e}=Bt("MISSING_OR_INVALID",`pairing topic should be a string: ${o}`);throw new Error(e)}if(!this.client.core.pairing.pairings.keys.includes(o)){const{message:e}=Bt("NO_MATCHING_KEY",`pairing topic doesn't exist: ${o}`);throw new Error(e)}if(Ri(this.client.core.pairing.pairings.get(o).expiry)){const{message:e}=Bt("EXPIRED",`pairing topic: ${o}`);throw new Error(e)}}async isValidSessionTopic(o){if(!ft(o,!1)){const{message:e}=Bt("MISSING_OR_INVALID",`session topic should be a string: ${o}`);throw new Error(e)}if(this.checkRecentlyDeleted(o),!this.client.session.keys.includes(o)){const{message:e}=Bt("NO_MATCHING_KEY",`session topic doesn't exist: ${o}`);throw new Error(e)}if(Ri(this.client.session.get(o).expiry)){await this.deleteSession({topic:o});const{message:e}=Bt("EXPIRED",`session topic: ${o}`);throw new Error(e)}if(!this.client.core.crypto.keychain.has(o)){const{message:e}=Bt("MISSING_OR_INVALID",`session topic does not exist in keychain: ${o}`);throw await this.deleteSession({topic:o}),new Error(e)}}async isValidSessionOrPairingTopic(o){if(this.checkRecentlyDeleted(o),this.client.session.keys.includes(o))await this.isValidSessionTopic(o);else if(this.client.core.pairing.pairings.keys.includes(o))this.isValidPairingTopic(o);else if(ft(o,!1)){const{message:e}=Bt("NO_MATCHING_KEY",`session or pairing topic doesn't exist: ${o}`);throw new Error(e)}else{const{message:e}=Bt("MISSING_OR_INVALID",`session or pairing topic should be a string: ${o}`);throw new Error(e)}}async isValidProposalId(o){if(!ru(o)){const{message:e}=Bt("MISSING_OR_INVALID",`proposal id should be a number: ${o}`);throw new Error(e)}if(!this.client.proposal.keys.includes(o)){const{message:e}=Bt("NO_MATCHING_KEY",`proposal id doesn't exist: ${o}`);throw new Error(e)}if(Ri(this.client.proposal.get(o).expiryTimestamp)){await this.deleteProposal(o);const{message:e}=Bt("EXPIRED",`proposal id: ${o}`);throw new Error(e)}}validateRequestExpiry(o){if(o&&!pu(o,sign_client_dist_Te)){const{message:e}=Bt("MISSING_OR_INVALID",`request() expiry: ${o}. Expiry must be a number (in seconds) between ${sign_client_dist_Te.min} and ${sign_client_dist_Te.max}`);throw new Error(e)}}}class dist_Ls extends dist_ji{constructor(o,e){super(o,e,dist_dt,sign_client_dist_Re),this.core=o,this.logger=e}}class sign_client_dist_It extends dist_ji{constructor(o,e){super(o,e,dist_ut,sign_client_dist_Re),this.core=o,this.logger=e}}class Ms extends dist_ji{constructor(o,e){super(o,e,dist_mt,sign_client_dist_Re,t=>t.id),this.core=o,this.logger=e}}class dist_$s extends dist_ji{constructor(o,e){super(o,e,sign_client_dist_St,sign_client_dist_we,()=>sign_client_dist_e),this.core=o,this.logger=e}}class Ks extends dist_ji{constructor(o,e){super(o,e,sign_client_dist_Et,sign_client_dist_we),this.core=o,this.logger=e}}class dist_Us extends dist_ji{constructor(o,e){super(o,e,dist_ft,sign_client_dist_we,t=>t.id),this.core=o,this.logger=e}}var Gs=Object.defineProperty,dist_js=(S,o,e)=>o in S?Gs(S,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):S[o]=e,sign_client_dist_Ge=(S,o,e)=>dist_js(S,typeof o!="symbol"?o+"":o,e);class Fs{constructor(o,e){this.core=o,this.logger=e,sign_client_dist_Ge(this,"authKeys"),sign_client_dist_Ge(this,"pairingTopics"),sign_client_dist_Ge(this,"requests"),this.authKeys=new dist_$s(this.core,this.logger),this.pairingTopics=new Ks(this.core,this.logger),this.requests=new dist_Us(this.core,this.logger)}async init(){await this.authKeys.init(),await this.pairingTopics.init(),await this.requests.init()}}var dist_Hs=Object.defineProperty,sign_client_dist_Qs=(S,o,e)=>o in S?dist_Hs(S,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):S[o]=e,_=(S,o,e)=>sign_client_dist_Qs(S,typeof o!="symbol"?o+"":o,e);class sign_client_dist_qe extends types_dist_J{constructor(o){super(o),_(this,"protocol",sign_client_dist_De),_(this,"version",sign_client_dist_Le),_(this,"name",sign_client_dist_Ie.name),_(this,"metadata"),_(this,"core"),_(this,"logger"),_(this,"events",new events.EventEmitter),_(this,"engine"),_(this,"session"),_(this,"proposal"),_(this,"pendingRequest"),_(this,"auth"),_(this,"signConfig"),_(this,"on",(t,s)=>this.events.on(t,s)),_(this,"once",(t,s)=>this.events.once(t,s)),_(this,"off",(t,s)=>this.events.off(t,s)),_(this,"removeListener",(t,s)=>this.events.removeListener(t,s)),_(this,"removeAllListeners",t=>this.events.removeAllListeners(t)),_(this,"connect",async t=>{try{return await this.engine.connect(t)}catch(s){throw this.logger.error(s.message),s}}),_(this,"pair",async t=>{try{return await this.engine.pair(t)}catch(s){throw this.logger.error(s.message),s}}),_(this,"approve",async t=>{try{return await this.engine.approve(t)}catch(s){throw this.logger.error(s.message),s}}),_(this,"reject",async t=>{try{return await this.engine.reject(t)}catch(s){throw this.logger.error(s.message),s}}),_(this,"update",async t=>{try{return await this.engine.update(t)}catch(s){throw this.logger.error(s.message),s}}),_(this,"extend",async t=>{try{return await this.engine.extend(t)}catch(s){throw this.logger.error(s.message),s}}),_(this,"request",async t=>{try{return await this.engine.request(t)}catch(s){throw this.logger.error(s.message),s}}),_(this,"respond",async t=>{try{return await this.engine.respond(t)}catch(s){throw this.logger.error(s.message),s}}),_(this,"ping",async t=>{try{return await this.engine.ping(t)}catch(s){throw this.logger.error(s.message),s}}),_(this,"emit",async t=>{try{return await this.engine.emit(t)}catch(s){throw this.logger.error(s.message),s}}),_(this,"disconnect",async t=>{try{return await this.engine.disconnect(t)}catch(s){throw this.logger.error(s.message),s}}),_(this,"find",t=>{try{return this.engine.find(t)}catch(s){throw this.logger.error(s.message),s}}),_(this,"getPendingSessionRequests",()=>{try{return this.engine.getPendingSessionRequests()}catch(t){throw this.logger.error(t.message),t}}),_(this,"authenticate",async(t,s)=>{try{return await this.engine.authenticate(t,s)}catch(i){throw this.logger.error(i.message),i}}),_(this,"formatAuthMessage",t=>{try{return this.engine.formatAuthMessage(t)}catch(s){throw this.logger.error(s.message),s}}),_(this,"approveSessionAuthenticate",async t=>{try{return await this.engine.approveSessionAuthenticate(t)}catch(s){throw this.logger.error(s.message),s}}),_(this,"rejectSessionAuthenticate",async t=>{try{return await this.engine.rejectSessionAuthenticate(t)}catch(s){throw this.logger.error(s.message),s}}),this.name=o?.name||sign_client_dist_Ie.name,this.metadata=pi(o?.metadata),this.signConfig=o?.signConfig;const e=Iu({logger:o?.logger||sign_client_dist_Ie.logger,name:this.name});this.logger=e,this.core=o?.core||new dist_ta(o),this.session=new sign_client_dist_It(this.core,this.logger),this.proposal=new dist_Ls(this.core,this.logger),this.pendingRequest=new Ms(this.core,this.logger),this.engine=new Ds(this),this.auth=new Fs(this.core,this.logger)}static async init(o){const e=new sign_client_dist_qe(o);return await e.initialize(),e}get context(){return ee(this.logger)}get pairing(){return this.core.pairing.pairings}async initialize(){this.logger.trace("Initialized");try{await this.core.start(),await this.session.init(),await this.proposal.init(),await this.pendingRequest.init(),await this.auth.init(),await this.engine.init(),this.logger.info("SignClient Initialization Success")}catch(o){throw this.logger.info("SignClient Initialization Failure"),this.logger.error(o.message),o}}}const zs=(/* unused pure expression or super */ null && (sign_client_dist_It)),Ys=sign_client_dist_qe;
//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/@walletconnect/jsonrpc-http-connection/dist/index.es.js
var jsonrpc_http_connection_dist_index_es = __webpack_require__(236647);
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@walletconnect/universal-provider/dist/index.js
function dist_(t){return t==null||typeof t!="object"&&typeof t!="function"}function dist_Z(t){return Object.getOwnPropertySymbols(t).filter(e=>Object.prototype.propertyIsEnumerable.call(t,e))}function universal_provider_dist_T(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const universal_provider_dist_Fe="[object RegExp]",universal_provider_dist_ee="[object String]",universal_provider_dist_te="[object Number]",universal_provider_dist_se="[object Boolean]",universal_provider_dist_ie="[object Arguments]",universal_provider_dist_He="[object Symbol]",universal_provider_dist_Ue="[object Date]",universal_provider_dist_Be="[object Map]",universal_provider_dist_Le="[object Set]",universal_provider_dist_Me="[object Array]",universal_provider_dist_ze="[object ArrayBuffer]",universal_provider_dist_Ge="[object Object]",universal_provider_dist_We="[object DataView]",universal_provider_dist_Je="[object Uint8Array]",universal_provider_dist_Ke="[object Uint8ClampedArray]",universal_provider_dist_Ve="[object Uint16Array]",universal_provider_dist_Ye="[object Uint32Array]",dist_Xe="[object Int8Array]",universal_provider_dist_ke="[object Int16Array]",universal_provider_dist_Qe="[object Int32Array]",universal_provider_dist_Ze="[object Float32Array]",universal_provider_dist_Te="[object Float64Array]";function universal_provider_dist_x(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function universal_provider_dist_et(t,e){return universal_provider_dist_y(t,void 0,t,new Map,e)}function universal_provider_dist_y(t,e,s,i=new Map,r=void 0){const a=r?.(t,e,s,i);if(a!=null)return a;if(dist_(t))return t;if(i.has(t))return i.get(t);if(Array.isArray(t)){const n=new Array(t.length);i.set(t,n);for(let c=0;c<t.length;c++)n[c]=universal_provider_dist_y(t[c],c,s,i,r);return Object.hasOwn(t,"index")&&(n.index=t.index),Object.hasOwn(t,"input")&&(n.input=t.input),n}if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp){const n=new RegExp(t.source,t.flags);return n.lastIndex=t.lastIndex,n}if(t instanceof Map){const n=new Map;i.set(t,n);for(const[c,o]of t)n.set(c,universal_provider_dist_y(o,c,s,i,r));return n}if(t instanceof Set){const n=new Set;i.set(t,n);for(const c of t)n.add(universal_provider_dist_y(c,void 0,s,i,r));return n}if(typeof Buffer<"u"&&Buffer.isBuffer(t))return t.subarray();if(universal_provider_dist_x(t)){const n=new(Object.getPrototypeOf(t)).constructor(t.length);i.set(t,n);for(let c=0;c<t.length;c++)n[c]=universal_provider_dist_y(t[c],c,s,i,r);return n}if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer)return t.slice(0);if(t instanceof DataView){const n=new DataView(t.buffer.slice(0),t.byteOffset,t.byteLength);return i.set(t,n),universal_provider_dist_m(n,t,s,i,r),n}if(typeof File<"u"&&t instanceof File){const n=new File([t],t.name,{type:t.type});return i.set(t,n),universal_provider_dist_m(n,t,s,i,r),n}if(t instanceof Blob){const n=new Blob([t],{type:t.type});return i.set(t,n),universal_provider_dist_m(n,t,s,i,r),n}if(t instanceof Error){const n=new t.constructor;return i.set(t,n),n.message=t.message,n.name=t.name,n.stack=t.stack,n.cause=t.cause,universal_provider_dist_m(n,t,s,i,r),n}if(typeof t=="object"&&universal_provider_dist_tt(t)){const n=Object.create(Object.getPrototypeOf(t));return i.set(t,n),universal_provider_dist_m(n,t,s,i,r),n}return t}function universal_provider_dist_m(t,e,s=t,i,r){const a=[...Object.keys(e),...dist_Z(e)];for(let n=0;n<a.length;n++){const c=a[n],o=Object.getOwnPropertyDescriptor(t,c);(o==null||o.writable)&&(t[c]=universal_provider_dist_y(e[c],c,s,i,r))}}function universal_provider_dist_tt(t){switch(universal_provider_dist_T(t)){case universal_provider_dist_ie:case universal_provider_dist_Me:case universal_provider_dist_ze:case universal_provider_dist_We:case universal_provider_dist_se:case universal_provider_dist_Ue:case universal_provider_dist_Ze:case universal_provider_dist_Te:case dist_Xe:case universal_provider_dist_ke:case universal_provider_dist_Qe:case universal_provider_dist_Be:case universal_provider_dist_te:case universal_provider_dist_Ge:case universal_provider_dist_Fe:case universal_provider_dist_Le:case universal_provider_dist_ee:case universal_provider_dist_He:case universal_provider_dist_Je:case universal_provider_dist_Ke:case universal_provider_dist_Ve:case universal_provider_dist_Ye:return!0;default:return!1}}function dist_st(t,e){return universal_provider_dist_et(t,(s,i,r,a)=>{const n=e?.(s,i,r,a);if(n!=null)return n;if(typeof t=="object")switch(Object.prototype.toString.call(t)){case universal_provider_dist_te:case universal_provider_dist_ee:case universal_provider_dist_se:{const c=new t.constructor(t?.valueOf());return universal_provider_dist_m(c,t),c}case universal_provider_dist_ie:{const c={};return universal_provider_dist_m(c,t),c.length=t.length,c[Symbol.iterator]=t[Symbol.iterator],c}default:return}})}function universal_provider_dist_ne(t){return dist_st(t)}function universal_provider_dist_re(t){return t!==null&&typeof t=="object"&&universal_provider_dist_T(t)==="[object Arguments]"}function universal_provider_dist_ae(t){return typeof t=="object"&&t!==null}function it(){}function dist_nt(t){return universal_provider_dist_x(t)}function dist_rt(t){if(typeof t!="object"||t==null)return!1;if(Object.getPrototypeOf(t)===null)return!0;if(Object.prototype.toString.call(t)!=="[object Object]"){const s=t[Symbol.toStringTag];return s==null||!Object.getOwnPropertyDescriptor(t,Symbol.toStringTag)?.writable?!1:t.toString()===`[object ${s}]`}let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function at(t){if(dist_(t))return t;if(Array.isArray(t)||universal_provider_dist_x(t)||t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer)return t.slice(0);const e=Object.getPrototypeOf(t),s=e.constructor;if(t instanceof Date||t instanceof Map||t instanceof Set)return new s(t);if(t instanceof RegExp){const i=new s(t);return i.lastIndex=t.lastIndex,i}if(t instanceof DataView)return new s(t.buffer.slice(0));if(t instanceof Error){const i=new s(t.message);return i.stack=t.stack,i.name=t.name,i.cause=t.cause,i}if(typeof File<"u"&&t instanceof File)return new s([t],t.name,{type:t.type,lastModified:t.lastModified});if(typeof t=="object"){const i=Object.create(e);return Object.assign(i,t)}return t}function dist_ct(t,...e){const s=e.slice(0,-1),i=e[e.length-1];let r=t;for(let a=0;a<s.length;a++){const n=s[a];r=universal_provider_dist_$(r,n,i,new Map)}return r}function universal_provider_dist_$(t,e,s,i){if(dist_(t)&&(t=Object(t)),e==null||typeof e!="object")return t;if(i.has(e))return at(i.get(e));if(i.set(e,t),Array.isArray(e)){e=e.slice();for(let a=0;a<e.length;a++)e[a]=e[a]??void 0}const r=[...Object.keys(e),...dist_Z(e)];for(let a=0;a<r.length;a++){const n=r[a];let c=e[n],o=t[n];if(universal_provider_dist_re(c)&&(c={...c}),universal_provider_dist_re(o)&&(o={...o}),typeof Buffer<"u"&&Buffer.isBuffer(c)&&(c=universal_provider_dist_ne(c)),Array.isArray(c))if(typeof o=="object"&&o!=null){const l=[],h=Reflect.ownKeys(o);for(let f=0;f<h.length;f++){const u=h[f];l[u]=o[u]}o=l}else o=[];const p=s(o,c,n,t,e,i);p!=null?t[n]=p:Array.isArray(c)||universal_provider_dist_ae(o)&&universal_provider_dist_ae(c)?t[n]=universal_provider_dist_$(o,c,s,i):o==null&&dist_rt(c)?t[n]=universal_provider_dist_$({},c,s,i):o==null&&dist_nt(c)?t[n]=universal_provider_dist_ne(c):(o===void 0||c!==void 0)&&(t[n]=c)}return t}function dist_ot(t,...e){return dist_ct(t,...e,it)}const universal_provider_dist_ce="error",dist_ht="wss://relay.walletconnect.org",dist_pt="wc",universal_provider_dist_oe="universal_provider",universal_provider_dist_A=`${dist_pt}@2:${universal_provider_dist_oe}:`,universal_provider_dist_he="https://rpc.walletconnect.org/v1/",universal_provider_dist_pe="generic",dist_lt=`${universal_provider_dist_he}bundler`,universal_provider_dist_v="call_status",universal_provider_dist_ut=86400,F={DEFAULT_CHAIN_CHANGED:"default_chain_changed"};var universal_provider_dist_dt=Object.defineProperty,universal_provider_dist_ft=Object.defineProperties,universal_provider_dist_mt=Object.getOwnPropertyDescriptors,dist_le=Object.getOwnPropertySymbols,universal_provider_dist_gt=Object.prototype.hasOwnProperty,universal_provider_dist_yt=Object.prototype.propertyIsEnumerable,dist_ue=(t,e,s)=>e in t?universal_provider_dist_dt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,universal_provider_dist_E=(t,e)=>{for(var s in e||(e={}))universal_provider_dist_gt.call(e,s)&&dist_ue(t,s,e[s]);if(dist_le)for(var s of dist_le(e))universal_provider_dist_yt.call(e,s)&&dist_ue(t,s,e[s]);return t},universal_provider_dist_vt=(t,e)=>universal_provider_dist_ft(t,universal_provider_dist_mt(e));function universal_provider_dist_de(t,e,s){var i;const r=Je(t);return((i=e.rpcMap)==null?void 0:i[r.reference])||`${universal_provider_dist_he}?chainId=${r.namespace}:${r.reference}&projectId=${s}`}function universal_provider_dist_wt(t){return t.includes(":")?t.split(":")[1]:t}function universal_provider_dist_fe(t){return t.map(e=>`${e.split(":")[0]}:${e.split(":")[1]}`)}function dist_bt(t,e){const s=Object.keys(e.namespaces).filter(r=>r.includes(t));if(!s.length)return[];const i=[];return s.forEach(r=>{const a=e.namespaces[r].accounts;i.push(...a)}),i}function universal_provider_dist_me(t){return Object.fromEntries(Object.entries(t).filter(([e,s])=>{var i,r;return((i=s?.chains)==null?void 0:i.length)&&((r=s?.chains)==null?void 0:r.length)>0}))}function universal_provider_dist_C(t={},e={}){const s=universal_provider_dist_me(universal_provider_dist_ge(t)),i=universal_provider_dist_me(universal_provider_dist_ge(e));return dist_ot(s,i)}function universal_provider_dist_ge(t){var e,s,i,r,a;const n={};if(!Ye(t))return n;for(const[c,o]of Object.entries(t)){const p=Gn(c)?[c]:o.chains,l=o.methods||[],h=o.events||[],f=o.rpcMap||{},u=ms(c);n[u]=universal_provider_dist_vt(universal_provider_dist_E(universal_provider_dist_E({},n[u]),o),{chains:ut(p,(e=n[u])==null?void 0:e.chains),methods:ut(l,(s=n[u])==null?void 0:s.methods),events:ut(h,(i=n[u])==null?void 0:i.events)}),(Ye(f)||Ye(((r=n[u])==null?void 0:r.rpcMap)||{}))&&(n[u].rpcMap=universal_provider_dist_E(universal_provider_dist_E({},f),(a=n[u])==null?void 0:a.rpcMap))}return n}function universal_provider_dist_ye(t){return t.includes(":")?t.split(":")[2]:t}function universal_provider_dist_ve(t){const e={};for(const[s,i]of Object.entries(t)){const r=i.methods||[],a=i.events||[],n=i.accounts||[],c=Gn(s)?[s]:i.chains?i.chains:universal_provider_dist_fe(i.accounts);e[s]={chains:c,methods:r,events:a,accounts:n}}return e}function universal_provider_dist_H(t){return typeof t=="number"?t:t.includes("0x")?parseInt(t,16):(t=t.includes(":")?t.split(":")[1]:t,isNaN(Number(t))?t:Number(t))}function universal_provider_dist_Pt(t){try{const e=JSON.parse(t);return typeof e=="object"&&e!==null&&!Array.isArray(e)}catch{return!1}}const universal_provider_dist_we={},universal_provider_dist_w=t=>universal_provider_dist_we[t],universal_provider_dist_U=(t,e)=>{universal_provider_dist_we[t]=e};var universal_provider_dist_Ot=Object.defineProperty,universal_provider_dist_be=Object.getOwnPropertySymbols,universal_provider_dist_It=Object.prototype.hasOwnProperty,universal_provider_dist_St=Object.prototype.propertyIsEnumerable,universal_provider_dist_Pe=(t,e,s)=>e in t?universal_provider_dist_Ot(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,universal_provider_dist_Oe=(t,e)=>{for(var s in e||(e={}))universal_provider_dist_It.call(e,s)&&universal_provider_dist_Pe(t,s,e[s]);if(universal_provider_dist_be)for(var s of universal_provider_dist_be(e))universal_provider_dist_St.call(e,s)&&universal_provider_dist_Pe(t,s,e[s]);return t};const universal_provider_dist_Ie="eip155",universal_provider_dist_$t=["atomic","flow-control","paymasterService","sessionKeys","auxiliaryFunds"],universal_provider_dist_At=t=>t&&t.startsWith("0x")?BigInt(t).toString(10):t,dist_B=t=>t&&t.startsWith("0x")?t:`0x${BigInt(t).toString(16)}`,universal_provider_dist_Se=t=>Object.keys(t).filter(e=>universal_provider_dist_$t.includes(e)).reduce((e,s)=>(e[s]=universal_provider_dist_Et(t[s]),e),{}),universal_provider_dist_Et=t=>typeof t=="string"&&universal_provider_dist_Pt(t)?JSON.parse(t):t,universal_provider_dist_Ct=(t,e,s)=>{const{sessionProperties:i={},scopedProperties:r={}}=t,a={};if(!Ye(r)&&!Ye(i))return;const n=universal_provider_dist_Se(i);for(const c of s){const o=universal_provider_dist_At(c);if(!o)continue;a[dist_B(o)]=n;const p=r?.[`${universal_provider_dist_Ie}:${o}`];if(p){const l=p?.[`${universal_provider_dist_Ie}:${o}:${e}`];a[dist_B(o)]=universal_provider_dist_Oe(universal_provider_dist_Oe({},a[dist_B(o)]),universal_provider_dist_Se(l||p))}}for(const[c,o]of Object.entries(a))Object.keys(o).length===0&&delete a[c];return Object.keys(a).length>0?a:void 0};var universal_provider_dist_jt=Object.defineProperty,universal_provider_dist_Nt=(t,e,s)=>e in t?universal_provider_dist_jt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,universal_provider_dist_qt=(t,e,s)=>universal_provider_dist_Nt(t,typeof e!="symbol"?e+"":e,s);let dist_L;class universal_provider_dist_J{constructor(e){universal_provider_dist_qt(this,"storage"),this.storage=e}async getItem(e){return await this.storage.getItem(e)}async setItem(e,s){return await this.storage.setItem(e,s)}async removeItem(e){return await this.storage.removeItem(e)}static getStorage(e){return dist_L||(dist_L=new universal_provider_dist_J(e)),dist_L}}var dist_Dt=Object.defineProperty,universal_provider_dist_Rt=Object.defineProperties,universal_provider_dist_t=Object.getOwnPropertyDescriptors,universal_provider_dist_$e=Object.getOwnPropertySymbols,universal_provider_dist_xt=Object.prototype.hasOwnProperty,universal_provider_dist_Ft=Object.prototype.propertyIsEnumerable,universal_provider_dist_Ae=(t,e,s)=>e in t?dist_Dt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,universal_provider_dist_Ht=(t,e)=>{for(var s in e||(e={}))universal_provider_dist_xt.call(e,s)&&universal_provider_dist_Ae(t,s,e[s]);if(universal_provider_dist_$e)for(var s of universal_provider_dist_$e(e))universal_provider_dist_Ft.call(e,s)&&universal_provider_dist_Ae(t,s,e[s]);return t},universal_provider_dist_Ut=(t,e)=>universal_provider_dist_Rt(t,universal_provider_dist_t(e));async function universal_provider_dist_Bt(t,e){const s=Je(t.result.capabilities.caip345.caip2),i=t.result.capabilities.caip345.transactionHashes,r=await Promise.allSettled(i.map(h=>universal_provider_dist_Lt(s.reference,h,e))),a=r.filter(h=>h.status==="fulfilled").map(h=>h.value).filter(h=>h);r.filter(h=>h.status==="rejected").forEach(h=>console.warn("Failed to fetch transaction receipt:",h.reason));const n=!a.length||a.some(h=>!h),c=a.every(h=>h?.status==="0x1"),o=a.every(h=>h?.status==="0x0"),p=a.some(h=>h?.status==="0x0");let l;return n?l=100:c?l=200:o?l=500:p&&(l=600),{id:t.result.id,version:t.request.version,atomic:t.request.atomicRequired,chainId:t.request.chainId,capabilities:t.result.capabilities,receipts:a,status:l}}async function universal_provider_dist_Lt(t,e,s){return await s(parseInt(t)).request((0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)("eth_getTransactionReceipt",[e]))}async function universal_provider_dist_Mt({sendCalls:t,storage:e}){const s=await e.getItem(universal_provider_dist_v);await e.setItem(universal_provider_dist_v,universal_provider_dist_Ut(universal_provider_dist_Ht({},s),{[t.result.id]:{request:t.request,result:t.result,expiry:_i(universal_provider_dist_ut)}}))}async function universal_provider_dist_zt({resultId:t,storage:e}){const s=await e.getItem(universal_provider_dist_v);if(s){delete s[t],await e.setItem(universal_provider_dist_v,s);for(const i in s)Ri(s[i].expiry)&&delete s[i];await e.setItem(universal_provider_dist_v,s)}}async function universal_provider_dist_Gt({resultId:t,storage:e}){const s=await e.getItem(universal_provider_dist_v),i=s?.[t];if(i&&!Ri(i.expiry))return i;await universal_provider_dist_zt({resultId:t,storage:e})}var universal_provider_dist_Wt=Object.defineProperty,universal_provider_dist_Jt=Object.defineProperties,universal_provider_dist_Kt=Object.getOwnPropertyDescriptors,universal_provider_dist_Ee=Object.getOwnPropertySymbols,universal_provider_dist_Vt=Object.prototype.hasOwnProperty,dist_Yt=Object.prototype.propertyIsEnumerable,universal_provider_dist_M=(t,e,s)=>e in t?universal_provider_dist_Wt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,universal_provider_dist_z=(t,e)=>{for(var s in e||(e={}))universal_provider_dist_Vt.call(e,s)&&universal_provider_dist_M(t,s,e[s]);if(universal_provider_dist_Ee)for(var s of universal_provider_dist_Ee(e))dist_Yt.call(e,s)&&universal_provider_dist_M(t,s,e[s]);return t},universal_provider_dist_G=(t,e)=>universal_provider_dist_Jt(t,universal_provider_dist_Kt(e)),dist_g=(t,e,s)=>universal_provider_dist_M(t,typeof e!="symbol"?e+"":e,s);class universal_provider_dist_Xt{constructor(e){dist_g(this,"name","eip155"),dist_g(this,"client"),dist_g(this,"chainId"),dist_g(this,"namespace"),dist_g(this,"httpProviders"),dist_g(this,"events"),dist_g(this,"storage"),this.namespace=e.namespace,this.events=universal_provider_dist_w("events"),this.client=universal_provider_dist_w("client"),this.httpProviders=this.createHttpProviders(),this.chainId=parseInt(this.getDefaultChain()),this.storage=universal_provider_dist_J.getStorage(this.client.core.storage)}async request(e){switch(e.request.method){case"eth_requestAccounts":return this.getAccounts();case"eth_accounts":return this.getAccounts();case"wallet_switchEthereumChain":return await this.handleSwitchChain(e);case"eth_chainId":return parseInt(this.getDefaultChain());case"wallet_getCapabilities":return await this.getCapabilities(e);case"wallet_getCallsStatus":return await this.getCallStatus(e);case"wallet_sendCalls":return await this.sendCalls(e)}return this.namespace.methods.includes(e.request.method)?await this.client.request(e):this.getHttpProvider().request(e.request)}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}setDefaultChain(e,s){this.httpProviders[e]||this.setHttpProvider(parseInt(e),s);const i=this.chainId;this.chainId=parseInt(e),this.events.emit(F.DEFAULT_CHAIN_CHANGED,{currentCaipChainId:`${this.name}:${e}`,previousCaipChainId:`${this.name}:${i}`})}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId.toString();if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}createHttpProvider(e,s){const i=s||universal_provider_dist_de(`${this.name}:${e}`,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new jsonrpc_provider_dist_index_es/* JsonRpcProvider */.F(new jsonrpc_http_connection_dist_index_es/* HttpConnection */.V(i,universal_provider_dist_w("disableProviderPing")))}setHttpProvider(e,s){const i=this.createHttpProvider(e,s);i&&(this.httpProviders[e]=i)}createHttpProviders(){const e={};return this.namespace.chains.forEach(s=>{var i;const r=parseInt(universal_provider_dist_wt(s));e[r]=this.createHttpProvider(r,(i=this.namespace.rpcMap)==null?void 0:i[s])}),e}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(s=>s.split(":")[1]===this.chainId.toString()).map(s=>s.split(":")[2]))]:[]}getHttpProvider(e){const s=e||this.chainId;return this.httpProviders[s]||(this.httpProviders=universal_provider_dist_G(universal_provider_dist_z({},this.httpProviders),{[s]:this.createHttpProvider(s)}),this.httpProviders[s])}async handleSwitchChain(e){var s,i;let r=e.request.params?(s=e.request.params[0])==null?void 0:s.chainId:"0x0";r=r.startsWith("0x")?r:`0x${r}`;const a=parseInt(r,16);if(this.isChainApproved(a))this.setDefaultChain(`${a}`);else if(this.namespace.methods.includes("wallet_switchEthereumChain"))await this.client.request({topic:e.topic,request:{method:e.request.method,params:[{chainId:r}]},chainId:(i=this.namespace.chains)==null?void 0:i[0]}),this.setDefaultChain(`${a}`);else throw new Error(`Failed to switch to chain 'eip155:${a}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);return null}isChainApproved(e){return this.namespace.chains.includes(`${this.name}:${e}`)}async getCapabilities(e){var s,i,r,a,n;const c=(i=(s=e.request)==null?void 0:s.params)==null?void 0:i[0],o=((a=(r=e.request)==null?void 0:r.params)==null?void 0:a[1])||[];if(!c)throw new Error("Missing address parameter in `wallet_getCapabilities` request");const p=this.client.session.get(e.topic),l=((n=p?.sessionProperties)==null?void 0:n.capabilities)||{},h=`${c}${o.join(",")}`,f=l?.[h];if(f)return f;let u;try{u=universal_provider_dist_Ct(p,c,o)}catch(q){console.warn("Failed to extract capabilities from session",q)}if(u)return u;const K=await this.client.request(e);try{await this.client.session.update(e.topic,{sessionProperties:universal_provider_dist_G(universal_provider_dist_z({},p.sessionProperties||{}),{capabilities:universal_provider_dist_G(universal_provider_dist_z({},l||{}),{[h]:K})})})}catch(q){console.warn("Failed to update session with capabilities",q)}return K}async getCallStatus(e){var s,i,r;const a=this.client.session.get(e.topic),n=(s=a.sessionProperties)==null?void 0:s.bundler_name;if(n){const p=this.getBundlerUrl(e.chainId,n);try{return await this.getUserOperationReceipt(p,e)}catch(l){console.warn("Failed to fetch call status from bundler",l,p)}}const c=(i=a.sessionProperties)==null?void 0:i.bundler_url;if(c)try{return await this.getUserOperationReceipt(c,e)}catch(p){console.warn("Failed to fetch call status from custom bundler",p,c)}const o=await universal_provider_dist_Gt({resultId:(r=e.request.params)==null?void 0:r[0],storage:this.storage});if(o)try{return await universal_provider_dist_Bt(o,this.getHttpProvider.bind(this))}catch(p){console.warn("Failed to fetch call status from stored send calls",p,o)}if(this.namespace.methods.includes(e.request.method))return await this.client.request(e);throw new Error("Fetching call status not approved by the wallet.")}async getUserOperationReceipt(e,s){var i;const r=new URL(e),a=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify((0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)("eth_getUserOperationReceipt",[(i=s.request.params)==null?void 0:i[0]]))});if(!a.ok)throw new Error(`Failed to fetch user operation receipt - ${a.status}`);return await a.json()}getBundlerUrl(e,s){return`${dist_lt}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${s}`}async sendCalls(e){var s,i,r;const a=await this.client.request(e),n=(s=e.request.params)==null?void 0:s[0],c=a?.id,o=a?.capabilities||{},p=(i=o?.caip345)==null?void 0:i.caip2,l=(r=o?.caip345)==null?void 0:r.transactionHashes;return!c||!p||!(l!=null&&l.length)||await universal_provider_dist_Mt({sendCalls:{request:n,result:a},storage:this.storage}),a}}var universal_provider_dist_kt=Object.defineProperty,universal_provider_dist_Qt=(t,e,s)=>e in t?universal_provider_dist_kt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,universal_provider_dist_b=(t,e,s)=>universal_provider_dist_Qt(t,typeof e!="symbol"?e+"":e,s);class universal_provider_dist_Zt{constructor(e){universal_provider_dist_b(this,"name",universal_provider_dist_pe),universal_provider_dist_b(this,"client"),universal_provider_dist_b(this,"httpProviders"),universal_provider_dist_b(this,"events"),universal_provider_dist_b(this,"namespace"),universal_provider_dist_b(this,"chainId"),this.namespace=e.namespace,this.events=universal_provider_dist_w("events"),this.client=universal_provider_dist_w("client"),this.chainId=this.getDefaultChain(),this.name=this.getNamespaceName(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace.chains=[...new Set((this.namespace.chains||[]).concat(e.chains||[]))],this.namespace.accounts=[...new Set((this.namespace.accounts||[]).concat(e.accounts||[]))],this.namespace.methods=[...new Set((this.namespace.methods||[]).concat(e.methods||[]))],this.namespace.events=[...new Set((this.namespace.events||[]).concat(e.events||[]))],this.httpProviders=this.createHttpProviders()}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider(e.chainId).request(e.request)}setDefaultChain(e,s){this.httpProviders[e]||this.setHttpProvider(e,s);const i=this.chainId;this.chainId=e,this.events.emit(F.DEFAULT_CHAIN_CHANGED,{currentCaipChainId:`${this.name}:${e}`,previousCaipChainId:`${this.name}:${i}`})}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getNamespaceName(){const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return Je(e).namespace}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(s=>s.split(":")[1]===this.chainId.toString()).map(s=>s.split(":")[2]))]:[]}createHttpProviders(){var e,s;const i={};return(s=(e=this.namespace)==null?void 0:e.accounts)==null||s.forEach(r=>{var a,n;const c=Je(r),o=(n=(a=this.namespace)==null?void 0:a.rpcMap)==null?void 0:n[`${c.namespace}:${c.reference}`];i[c.reference]=this.createHttpProvider(r,o)}),i}getHttpProvider(e){const s=Je(e).reference,i=this.httpProviders[s];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return i}setHttpProvider(e,s){const i=this.createHttpProvider(e,s);i&&(this.httpProviders[e]=i)}createHttpProvider(e,s){const i=s||universal_provider_dist_de(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new jsonrpc_provider_dist_index_es/* JsonRpcProvider */.F(new jsonrpc_http_connection_dist_index_es/* default */.A(i,universal_provider_dist_w("disableProviderPing")))}}var universal_provider_dist_Tt=Object.defineProperty,universal_provider_dist_es=Object.defineProperties,dist_ts=Object.getOwnPropertyDescriptors,universal_provider_dist_Ce=Object.getOwnPropertySymbols,dist_ss=Object.prototype.hasOwnProperty,dist_is=Object.prototype.propertyIsEnumerable,universal_provider_dist_W=(t,e,s)=>e in t?universal_provider_dist_Tt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,universal_provider_dist_S=(t,e)=>{for(var s in e||(e={}))dist_ss.call(e,s)&&universal_provider_dist_W(t,s,e[s]);if(universal_provider_dist_Ce)for(var s of universal_provider_dist_Ce(e))dist_is.call(e,s)&&universal_provider_dist_W(t,s,e[s]);return t},universal_provider_dist_j=(t,e)=>universal_provider_dist_es(t,dist_ts(e)),universal_provider_dist_d=(t,e,s)=>universal_provider_dist_W(t,typeof e!="symbol"?e+"":e,s);class universal_provider_dist_N{constructor(e){universal_provider_dist_d(this,"client"),universal_provider_dist_d(this,"namespaces"),universal_provider_dist_d(this,"optionalNamespaces"),universal_provider_dist_d(this,"sessionProperties"),universal_provider_dist_d(this,"scopedProperties"),universal_provider_dist_d(this,"events",new events),universal_provider_dist_d(this,"rpcProviders",{}),universal_provider_dist_d(this,"session"),universal_provider_dist_d(this,"providerOpts"),universal_provider_dist_d(this,"logger"),universal_provider_dist_d(this,"uri"),universal_provider_dist_d(this,"disableProviderPing",!1),universal_provider_dist_d(this,"connectParams");var s,i;this.providerOpts=e,this.logger=Iu({logger:(s=e.logger)!=null?s:universal_provider_dist_ce,name:(i=this.providerOpts.name)!=null?i:universal_provider_dist_oe}),this.disableProviderPing=e?.disableProviderPing||!1}static async init(e){const s=new universal_provider_dist_N(e);return await s.initialize(),s}async request(e,s,i){const[r,a]=this.validateChain(s);if(!this.session)throw new Error("Please call connect() before request()");return await this.getProvider(r).request({request:universal_provider_dist_S({},e),chainId:`${r}:${a}`,topic:this.session.topic,expiry:i})}sendAsync(e,s,i,r){const a=new Date().getTime();this.request(e,i,r).then(n=>s(null,(0,jsonrpc_utils_dist_esm.formatJsonRpcResult)(a,n))).catch(n=>s(n,void 0))}async enable(){if(!this.client)throw new Error("Sign Client not initialized");return this.session||await this.connect({namespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties,scopedProperties:this.scopedProperties}),await this.requestAccounts()}async disconnect(){var e;if(!this.session)throw new Error("Please call connect() before enable()");await this.client.disconnect({topic:(e=this.session)==null?void 0:e.topic,reason:zt("USER_DISCONNECTED")}),await this.cleanup()}async connect(e){if(!this.client)throw new Error("Sign Client not initialized");if(this.connectParams=e,this.setNamespaces(e),this.cleanupPendingPairings(),!e.skipPairing)return await this.pair(e.pairingTopic)}async authenticate(e,s){if(!this.client)throw new Error("Sign Client not initialized");this.setNamespaces(e),await this.cleanupPendingPairings();const{uri:i,response:r}=await this.client.authenticate(e,s);i&&(this.uri=i,this.events.emit("display_uri",i));const a=await r();if(this.session=a.session,this.session){const n=universal_provider_dist_ve(this.session.namespaces);this.namespaces=universal_provider_dist_C(this.namespaces,n),await this.persist("namespaces",this.namespaces),this.onConnect()}return a}on(e,s){this.events.on(e,s)}once(e,s){this.events.once(e,s)}removeListener(e,s){this.events.removeListener(e,s)}off(e,s){this.events.off(e,s)}get isWalletConnect(){return!0}async pair(e){var s,i;const{uri:r,approval:a}=await this.client.connect({pairingTopic:e,requiredNamespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties,scopedProperties:this.scopedProperties,authentication:(s=this.connectParams)==null?void 0:s.authentication,walletPay:(i=this.connectParams)==null?void 0:i.walletPay});r&&(this.uri=r,this.events.emit("display_uri",r));const n=await a();this.session=n;const c=universal_provider_dist_ve(n.namespaces);return this.namespaces=universal_provider_dist_C(this.namespaces,c),await this.persist("namespaces",this.namespaces),await this.persist("optionalNamespaces",this.optionalNamespaces),this.onConnect(),this.session}setDefaultChain(e,s){try{if(!this.session)return;const[i,r]=this.validateChain(e);this.getProvider(i).setDefaultChain(r,s)}catch(i){if(!/Please call connect/.test(i.message))throw i}}async cleanupPendingPairings(e={}){try{this.logger.info("Cleaning up inactive pairings...");const s=this.client.pairing.getAll();if(!dist_Be(s))return;for(const i of s)e.deletePairings?this.client.core.expirer.set(i.topic,0):await this.client.core.relayer.subscriber.unsubscribe(i.topic);this.logger.info(`Inactive pairings cleared: ${s.length}`)}catch(s){this.logger.warn(s,"Failed to cleanup pending pairings")}}abortPairingAttempt(){this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.")}async checkStorage(){this.namespaces=await this.getFromStore("namespaces")||{},this.optionalNamespaces=await this.getFromStore("optionalNamespaces")||{},this.session&&this.createProviders()}async initialize(){this.logger.trace("Initialized"),await this.createClient(),await this.checkStorage(),this.registerEventListeners()}async createClient(){var e,s;if(this.client=this.providerOpts.client||await Ys.init({core:this.providerOpts.core,logger:this.providerOpts.logger||universal_provider_dist_ce,relayUrl:this.providerOpts.relayUrl||dist_ht,projectId:this.providerOpts.projectId,metadata:this.providerOpts.metadata,storageOptions:this.providerOpts.storageOptions,storage:this.providerOpts.storage,name:this.providerOpts.name,customStoragePrefix:this.providerOpts.customStoragePrefix,telemetryEnabled:this.providerOpts.telemetryEnabled}),this.providerOpts.session)try{this.session=this.client.session.get(this.providerOpts.session.topic)}catch(i){throw this.logger.error(i,"Failed to get session"),new Error(`The provided session: ${(s=(e=this.providerOpts)==null?void 0:e.session)==null?void 0:s.topic} doesn't exist in the Sign client`)}else{const i=this.client.session.getAll();this.session=i[0]}this.logger.trace("SignClient Initialized")}createProviders(){if(!this.client)throw new Error("Sign Client not initialized");if(!this.session)throw new Error("Session not initialized. Please call connect() before enable()");const e=[...new Set(Object.keys(this.session.namespaces).map(s=>ms(s)))];universal_provider_dist_U("client",this.client),universal_provider_dist_U("events",this.events),universal_provider_dist_U("disableProviderPing",this.disableProviderPing),e.forEach(s=>{if(!this.session)return;const i=dist_bt(s,this.session);if(i?.length===0)return;const r=universal_provider_dist_fe(i),a=universal_provider_dist_C(this.namespaces,this.optionalNamespaces),n=universal_provider_dist_j(universal_provider_dist_S({},a[s]),{accounts:i,chains:r});switch(s){case"eip155":this.rpcProviders[s]=new universal_provider_dist_Xt({namespace:n});break;default:this.rpcProviders[s]=new universal_provider_dist_Zt({namespace:n})}})}registerEventListeners(){if(typeof this.client>"u")throw new Error("Sign Client is not initialized");this.client.on("session_ping",e=>{var s;const{topic:i}=e;i===((s=this.session)==null?void 0:s.topic)&&this.events.emit("session_ping",e)}),this.client.on("session_event",e=>{var s;const{params:i,topic:r}=e;if(r!==((s=this.session)==null?void 0:s.topic))return;const{event:a}=i;if(a.name==="accountsChanged"){const n=a.data;n&&dist_Be(n)&&this.events.emit("accountsChanged",n.map(universal_provider_dist_ye))}else if(a.name==="chainChanged"){const n=i.chainId,c=i.event.data,o=ms(n),p=universal_provider_dist_H(n)!==universal_provider_dist_H(c)?`${o}:${universal_provider_dist_H(c)}`:n;this.onChainChanged({currentCaipChainId:p})}else this.events.emit(a.name,a.data);this.events.emit("session_event",e)}),this.client.on("session_update",({topic:e,params:s})=>{var i,r;if(e!==((i=this.session)==null?void 0:i.topic))return;const{namespaces:a}=s,n=(r=this.client)==null?void 0:r.session.get(e);this.session=universal_provider_dist_j(universal_provider_dist_S({},n),{namespaces:a}),this.onSessionUpdate(),this.events.emit("session_update",{topic:e,params:s})}),this.client.on("session_delete",async e=>{var s;e.topic===((s=this.session)==null?void 0:s.topic)&&(await this.cleanup(),this.events.emit("session_delete",e),this.events.emit("disconnect",universal_provider_dist_j(universal_provider_dist_S({},zt("USER_DISCONNECTED")),{data:e.topic})))}),this.on(F.DEFAULT_CHAIN_CHANGED,e=>{this.onChainChanged(universal_provider_dist_j(universal_provider_dist_S({},e),{internal:!0}))})}getProvider(e){return this.rpcProviders[e]||this.rpcProviders[universal_provider_dist_pe]}onSessionUpdate(){Object.keys(this.rpcProviders).forEach(e=>{var s;this.getProvider(e).updateNamespace((s=this.session)==null?void 0:s.namespaces[e])})}setNamespaces(e){const{namespaces:s={},optionalNamespaces:i={},sessionProperties:r,scopedProperties:a}=e;this.optionalNamespaces=universal_provider_dist_C(s,i),this.sessionProperties=r,this.scopedProperties=a}validateChain(e){const[s,i]=e?.split(":")||["",""];if(!this.namespaces||!Object.keys(this.namespaces).length)return[s,i];if(s&&!Object.keys(this.namespaces||{}).map(n=>ms(n)).includes(s))throw new Error(`Namespace '${s}' is not configured. Please call connect() first with namespace config.`);if(s&&i)return[s,i];const r=ms(Object.keys(this.namespaces)[0]),a=this.rpcProviders[r].getDefaultChain();return[r,a]}async requestAccounts(){const[e]=this.validateChain();return await this.getProvider(e).requestAccounts()}async onChainChanged({currentCaipChainId:e,previousCaipChainId:s,internal:i=!1}){if(!this.namespaces)return;const[r,a]=this.validateChain(e);a&&(this.updateNamespaceChain(r,a),i?(this.events.emit("chainChanged",a),this.emitAccountsChangedOnChainChange({namespace:r,currentCaipChainId:e,previousCaipChainId:s})):this.getProvider(r).setDefaultChain(a),await this.persist("namespaces",this.namespaces))}emitAccountsChangedOnChainChange({namespace:e,currentCaipChainId:s,previousCaipChainId:i}){var r,a;try{if(i===s)return;const n=(a=(r=this.session)==null?void 0:r.namespaces[e])==null?void 0:a.accounts;if(!n)return;const c=n.filter(o=>o.includes(`${s}:`)).map(universal_provider_dist_ye);if(!dist_Be(c))return;this.events.emit("accountsChanged",c)}catch(n){this.logger.warn(n,"Failed to emit accountsChanged on chain change")}}updateNamespaceChain(e,s){if(!this.namespaces)return;const i=this.namespaces[e]?e:`${e}:${s}`,r={chains:[],methods:[],events:[],defaultChain:s};this.namespaces[i]?this.namespaces[i]&&(this.namespaces[i].defaultChain=s):this.namespaces[i]=r}onConnect(){this.createProviders(),this.events.emit("connect",{session:this.session})}async cleanup(){this.connectParams=void 0,this.namespaces=void 0,this.optionalNamespaces=void 0,this.sessionProperties=void 0,await this.deleteFromStore("namespaces"),await this.deleteFromStore("optionalNamespaces"),await this.deleteFromStore("sessionProperties"),this.session=void 0,this.cleanupPendingPairings({deletePairings:!0}),await this.cleanupStorage()}async persist(e,s){var i;const r=((i=this.session)==null?void 0:i.topic)||"";await this.client.core.storage.setItem(`${universal_provider_dist_A}/${e}${r}`,s)}async getFromStore(e){var s;const i=((s=this.session)==null?void 0:s.topic)||"";return await this.client.core.storage.getItem(`${universal_provider_dist_A}/${e}${i}`)}async deleteFromStore(e){var s;const i=((s=this.session)==null?void 0:s.topic)||"";await this.client.core.storage.removeItem(`${universal_provider_dist_A}/${e}${i}`)}async cleanupStorage(){var e;try{if(((e=this.client)==null?void 0:e.session.length)>0)return;const s=await this.client.core.storage.getKeys();for(const i of s)i.startsWith(universal_provider_dist_A)&&await this.client.core.storage.removeItem(i)}catch(s){this.logger.warn(s,"Failed to cleanup storage")}}}const dist_ns=universal_provider_dist_N;
//# sourceMappingURL=index.js.map

;// ./node_modules/@walletconnect/ethereum-provider/dist/index.js
const ethereum_provider_dist_$="wc",dist_k="ethereum_provider",ethereum_provider_dist_q=`${ethereum_provider_dist_$}@2:${dist_k}:`,ethereum_provider_dist_U="https://rpc.walletconnect.org/v1/",ethereum_provider_dist_f=["eth_sendTransaction","personal_sign"],ethereum_provider_dist_A=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_sendCalls","wallet_getCapabilities","wallet_getCallsStatus","wallet_showCallsStatus"],ethereum_provider_dist_C=["chainChanged","accountsChanged"],ethereum_provider_dist_P=["chainChanged","accountsChanged","message","disconnect","connect"],D=async()=>{const{createAppKit:s}=await __webpack_require__.e(/* import() */ 56972).then(__webpack_require__.bind(__webpack_require__, 756972));return s};var ethereum_provider_dist_z=Object.defineProperty,ethereum_provider_dist_L=Object.defineProperties,ethereum_provider_dist_K=Object.getOwnPropertyDescriptors,ethereum_provider_dist_M=Object.getOwnPropertySymbols,ethereum_provider_dist_Q=Object.prototype.hasOwnProperty,ethereum_provider_dist_V=Object.prototype.propertyIsEnumerable,ethereum_provider_dist_=(s,t,e)=>t in s?ethereum_provider_dist_z(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,ethereum_provider_dist_v=(s,t)=>{for(var e in t||(t={}))ethereum_provider_dist_Q.call(t,e)&&ethereum_provider_dist_(s,e,t[e]);if(ethereum_provider_dist_M)for(var e of ethereum_provider_dist_M(t))ethereum_provider_dist_V.call(t,e)&&ethereum_provider_dist_(s,e,t[e]);return s},ethereum_provider_dist_w=(s,t)=>ethereum_provider_dist_L(s,ethereum_provider_dist_K(t)),ethereum_provider_dist_p=(s,t,e)=>ethereum_provider_dist_(s,typeof t!="symbol"?t+"":t,e);function ethereum_provider_dist_I(s){return Number(s[0].split(":")[1])}function ethereum_provider_dist_b(s){return`0x${s.toString(16)}`}function dist_F(s){const{chains:t,optionalChains:e,methods:n,optionalMethods:i,events:a,optionalEvents:r,rpcMap:u}=s;if(!dist_Be(t))throw new Error("Invalid chains");const c={chains:t,methods:n||ethereum_provider_dist_f,events:a||ethereum_provider_dist_C,rpcMap:ethereum_provider_dist_v({},t.length?{[ethereum_provider_dist_I(t)]:u[ethereum_provider_dist_I(t)]}:{})},l=a?.filter(d=>!ethereum_provider_dist_C.includes(d)),o=n?.filter(d=>!ethereum_provider_dist_f.includes(d));if(!e&&!r&&!i&&!(l!=null&&l.length)&&!(o!=null&&o.length))return{required:t.length?c:void 0};const m=l?.length&&o?.length||!e,h={chains:[...new Set(m?c.chains.concat(e||[]):e)],methods:[...new Set(c.methods.concat(i!=null&&i.length?i:ethereum_provider_dist_A))],events:[...new Set(c.events.concat(r!=null&&r.length?r:ethereum_provider_dist_P))],rpcMap:u};return{required:t.length?c:void 0,optional:e.length?h:void 0}}class ethereum_provider_dist_E{constructor(){ethereum_provider_dist_p(this,"events",new events.EventEmitter),ethereum_provider_dist_p(this,"namespace","eip155"),ethereum_provider_dist_p(this,"accounts",[]),ethereum_provider_dist_p(this,"signer"),ethereum_provider_dist_p(this,"chainId",1),ethereum_provider_dist_p(this,"modal"),ethereum_provider_dist_p(this,"rpc"),ethereum_provider_dist_p(this,"STORAGE_KEY",ethereum_provider_dist_q),ethereum_provider_dist_p(this,"on",(t,e)=>(this.events.on(t,e),this)),ethereum_provider_dist_p(this,"once",(t,e)=>(this.events.once(t,e),this)),ethereum_provider_dist_p(this,"removeListener",(t,e)=>(this.events.removeListener(t,e),this)),ethereum_provider_dist_p(this,"off",(t,e)=>(this.events.off(t,e),this)),ethereum_provider_dist_p(this,"parseAccount",t=>this.isCompatibleChainId(t)?this.parseAccountId(t).address:t),this.signer={},this.rpc={}}static async init(t){const e=new ethereum_provider_dist_E;return await e.initialize(t),e}async request(t,e){return await this.signer.request(t,this.formatChainId(this.chainId),e)}sendAsync(t,e,n){this.signer.sendAsync(t,e,this.formatChainId(this.chainId),n)}get connected(){return this.signer.client?this.signer.client.core.relayer.connected:!1}get connecting(){return this.signer.client?this.signer.client.core.relayer.connecting:!1}async enable(){return this.session||await this.connect(),await this.request({method:"eth_requestAccounts"})}async connect(t){var e;if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts(t);const{required:n,optional:i}=dist_F(this.rpc);try{const a=await new Promise(async(u,c)=>{var l,o;this.rpc.showQrModal&&((l=this.modal)==null||l.open(),(o=this.modal)==null||o.subscribeState(h=>{!h.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),c(new Error("Connection request reset. Please try again.")))}));const m=t!=null&&t.scopedProperties?{[this.namespace]:t.scopedProperties}:void 0;await this.signer.connect(ethereum_provider_dist_w(ethereum_provider_dist_v({namespaces:ethereum_provider_dist_v({},n&&{[this.namespace]:n})},i&&{optionalNamespaces:{[this.namespace]:i}}),{pairingTopic:t?.pairingTopic,scopedProperties:m})).then(h=>{u(h)}).catch(h=>{var d;(d=this.modal)==null||d.showErrorMessage("Unable to connect"),c(new Error(h.message))})});if(!a)return;const r=ti(a.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:r),this.setAccounts(r),this.events.emit("connect",{chainId:ethereum_provider_dist_b(this.chainId)})}catch(a){throw this.signer.logger.error(a),a}finally{(e=this.modal)==null||e.close()}}async authenticate(t,e){var n;if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts({chains:t?.chains});try{const i=await new Promise(async(r,u)=>{var c,l;this.rpc.showQrModal&&((c=this.modal)==null||c.open(),(l=this.modal)==null||l.subscribeState(o=>{!o.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),u(new Error("Connection request reset. Please try again.")))})),await this.signer.authenticate(ethereum_provider_dist_w(ethereum_provider_dist_v({},t),{chains:this.rpc.chains}),e).then(o=>{r(o)}).catch(o=>{var m;(m=this.modal)==null||m.showErrorMessage("Unable to connect"),u(new Error(o.message))})}),a=i.session;if(a){const r=ti(a.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:r),this.setAccounts(r),this.events.emit("connect",{chainId:ethereum_provider_dist_b(this.chainId)})}return i}catch(i){throw this.signer.logger.error(i),i}finally{(n=this.modal)==null||n.close()}}async disconnect(){this.session&&await this.signer.disconnect(),this.reset()}get isWalletConnect(){return!0}get session(){return this.signer.session}registerEventListeners(){this.signer.on("session_event",t=>{const{params:e}=t,{event:n}=e;n.name==="accountsChanged"?(this.accounts=this.parseAccounts(n.data),this.events.emit("accountsChanged",this.accounts)):n.name==="chainChanged"?this.setChainId(this.formatChainId(n.data)):this.events.emit(n.name,n.data),this.events.emit("session_event",t)}),this.signer.on("accountsChanged",t=>{this.accounts=this.parseAccounts(t),this.events.emit("accountsChanged",this.accounts)}),this.signer.on("chainChanged",t=>{const e=parseInt(t);this.chainId=e,this.events.emit("chainChanged",ethereum_provider_dist_b(this.chainId)),this.persist()}),this.signer.on("session_update",t=>{this.events.emit("session_update",t)}),this.signer.on("session_delete",t=>{this.reset(),this.events.emit("session_delete",t),this.events.emit("disconnect",ethereum_provider_dist_w(ethereum_provider_dist_v({},zt("USER_DISCONNECTED")),{data:t.topic,name:"USER_DISCONNECTED"}))}),this.signer.on("display_uri",t=>{this.events.emit("display_uri",t)})}switchEthereumChain(t){this.request({method:"wallet_switchEthereumChain",params:[{chainId:t.toString(16)}]})}isCompatibleChainId(t){return typeof t=="string"?t.startsWith(`${this.namespace}:`):!1}formatChainId(t){return`${this.namespace}:${t}`}parseChainId(t){return Number(t.split(":")[1])}setChainIds(t){const e=t.filter(n=>this.isCompatibleChainId(n)).map(n=>this.parseChainId(n));e.length&&(this.chainId=e[0],this.events.emit("chainChanged",ethereum_provider_dist_b(this.chainId)),this.persist())}setChainId(t){if(this.isCompatibleChainId(t)){const e=this.parseChainId(t);this.chainId=e,this.switchEthereumChain(e)}}parseAccountId(t){const[e,n,i]=t.split(":");return{chainId:`${e}:${n}`,address:i}}setAccounts(t){this.accounts=t.filter(e=>this.parseChainId(this.parseAccountId(e).chainId)===this.chainId).map(e=>this.parseAccountId(e).address),this.events.emit("accountsChanged",this.accounts)}getRpcConfig(t){var e,n;const i=(e=t?.chains)!=null?e:[],a=(n=t?.optionalChains)!=null?n:[],r=i.concat(a);if(!r.length)throw new Error("No chains specified in either `chains` or `optionalChains`");const u=i.length?t?.methods||ethereum_provider_dist_f:[],c=i.length?t?.events||ethereum_provider_dist_C:[],l=t?.optionalMethods||[],o=t?.optionalEvents||[],m=t?.rpcMap||this.buildRpcMap(r,t.projectId),h=t?.qrModalOptions||void 0;return{chains:i?.map(d=>this.formatChainId(d)),optionalChains:a.map(d=>this.formatChainId(d)),methods:u,events:c,optionalMethods:l,optionalEvents:o,rpcMap:m,showQrModal:!!(t!=null&&t.showQrModal),qrModalOptions:h,projectId:t.projectId,metadata:t.metadata}}buildRpcMap(t,e){const n={};return t.forEach(i=>{n[i]=this.getRpcUrl(i,e)}),n}async initialize(t){var e;if(this.rpc=this.getRpcConfig(t),this.chainId=this.rpc.chains.length?ethereum_provider_dist_I(this.rpc.chains):ethereum_provider_dist_I(this.rpc.optionalChains),this.signer=await dist_ns.init({projectId:this.rpc.projectId,metadata:this.rpc.metadata,disableProviderPing:t.disableProviderPing,relayUrl:t.relayUrl,storage:t.storage,storageOptions:t.storageOptions,customStoragePrefix:t.customStoragePrefix,telemetryEnabled:t.telemetryEnabled,logger:t.logger}),this.registerEventListeners(),await this.loadPersistedSession(),this.rpc.showQrModal){let n;try{const i=await D(),{convertWCMToAppKitOptions:a}=await Promise.resolve().then(function(){return ethereum_provider_dist_nt}),r=a(ethereum_provider_dist_w(ethereum_provider_dist_v({},this.rpc.qrModalOptions),{chains:[...new Set([...this.rpc.chains,...this.rpc.optionalChains])],metadata:this.rpc.metadata,projectId:this.rpc.projectId}));if(!r.networks.length)throw new Error("No networks found for WalletConnect");n=i(ethereum_provider_dist_w(ethereum_provider_dist_v({},r),{universalProvider:this.signer,manualWCControl:!0,enableMobileFullScreen:((e=this.rpc.qrModalOptions)==null?void 0:e.enableMobileFullScreen)===!0}))}catch(i){throw console.warn(i),new Error("To use QR modal, please install @reown/appkit package")}if(n)try{this.modal=n}catch(i){throw this.signer.logger.error(i),new Error("Could not generate WalletConnectModal Instance")}}}loadConnectOpts(t){if(!t)return;const{chains:e,optionalChains:n,rpcMap:i}=t;e&&dist_Be(e)&&(this.rpc.chains=e.map(a=>this.formatChainId(a)),e.forEach(a=>{this.rpc.rpcMap[a]=i?.[a]||this.getRpcUrl(a)})),n&&dist_Be(n)&&(this.rpc.optionalChains=[],this.rpc.optionalChains=n?.map(a=>this.formatChainId(a)),n.forEach(a=>{this.rpc.rpcMap[a]=i?.[a]||this.getRpcUrl(a)}))}getRpcUrl(t,e){var n;return((n=this.rpc.rpcMap)==null?void 0:n[t])||`${ethereum_provider_dist_U}?chainId=eip155:${t}&projectId=${e||this.rpc.projectId}`}async loadPersistedSession(){if(this.session)try{const t=await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),e=this.session.namespaces[`${this.namespace}:${t}`]?this.session.namespaces[`${this.namespace}:${t}`]:this.session.namespaces[this.namespace];this.setChainIds(t?[this.formatChainId(t)]:e?.accounts),this.setAccounts(e?.accounts)}catch(t){this.signer.logger.error("Failed to load persisted session, clearing state..."),this.signer.logger.error(t),await this.disconnect().catch(e=>this.signer.logger.warn(e))}}reset(){this.chainId=1,this.accounts=[]}persist(){this.session&&this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`,this.chainId)}parseAccounts(t){return typeof t=="string"||t instanceof String?[this.parseAccount(t)]:t.map(e=>this.parseAccount(e))}}const ethereum_provider_dist_G=ethereum_provider_dist_E;var ethereum_provider_dist_Y=Object.defineProperty,ethereum_provider_dist_H=Object.defineProperties,ethereum_provider_dist_B=Object.getOwnPropertyDescriptors,ethereum_provider_dist_S=Object.getOwnPropertySymbols,ethereum_provider_dist_X=Object.prototype.hasOwnProperty,ethereum_provider_dist_J=Object.prototype.propertyIsEnumerable,ethereum_provider_dist_T=(s,t,e)=>t in s?ethereum_provider_dist_Y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,ethereum_provider_dist_R=(s,t)=>{for(var e in t||(t={}))ethereum_provider_dist_X.call(t,e)&&ethereum_provider_dist_T(s,e,t[e]);if(ethereum_provider_dist_S)for(var e of ethereum_provider_dist_S(t))ethereum_provider_dist_J.call(t,e)&&ethereum_provider_dist_T(s,e,t[e]);return s},ethereum_provider_dist_Z=(s,t)=>ethereum_provider_dist_H(s,ethereum_provider_dist_B(t));function ethereum_provider_dist_tt(s){if(s)return{"--w3m-font-family":s["--wcm-font-family"],"--w3m-accent":s["--wcm-accent-color"],"--w3m-color-mix":s["--wcm-background-color"],"--w3m-z-index":s["--wcm-z-index"]?Number(s["--wcm-z-index"]):void 0,"--w3m-qr-color":s["--wcm-accent-color"],"--w3m-font-size-master":s["--wcm-text-medium-regular-size"],"--w3m-border-radius-master":s["--wcm-container-border-radius"],"--w3m-color-mix-strength":0}}const ethereum_provider_dist_et=s=>{const[t,e]=s.split(":");return ethereum_provider_dist_W({id:e,caipNetworkId:s,chainNamespace:t,name:"",nativeCurrency:{name:"",symbol:"",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}})};function ethereum_provider_dist_st(s){var t,e,n,i,a,r,u;const c=(t=s.chains)==null?void 0:t.map(ethereum_provider_dist_et).filter(Boolean);if(c.length===0)throw new Error("At least one chain must be specified");const l=c.find(m=>{var h;return m.id===((h=s.defaultChain)==null?void 0:h.id)}),o={projectId:s.projectId,networks:c,themeMode:s.themeMode,themeVariables:ethereum_provider_dist_tt(s.themeVariables),chainImages:s.chainImages,connectorImages:s.walletImages,defaultNetwork:l,metadata:ethereum_provider_dist_Z(ethereum_provider_dist_R({},s.metadata),{name:((e=s.metadata)==null?void 0:e.name)||"WalletConnect",description:((n=s.metadata)==null?void 0:n.description)||"Connect to WalletConnect-compatible wallets",url:((i=s.metadata)==null?void 0:i.url)||"https://walletconnect.org",icons:((a=s.metadata)==null?void 0:a.icons)||["https://walletconnect.org/walletconnect-logo.png"]}),showWallets:!0,featuredWalletIds:s.explorerRecommendedWalletIds==="NONE"?[]:Array.isArray(s.explorerRecommendedWalletIds)?s.explorerRecommendedWalletIds:[],excludeWalletIds:s.explorerExcludedWalletIds==="ALL"?[]:Array.isArray(s.explorerExcludedWalletIds)?s.explorerExcludedWalletIds:[],enableEIP6963:!1,enableInjected:!1,enableCoinbase:!0,enableWalletConnect:!0,features:{email:!1,socials:!1}};if((r=s.mobileWallets)!=null&&r.length||(u=s.desktopWallets)!=null&&u.length){const m=[...(s.mobileWallets||[]).map(g=>({id:g.id,name:g.name,links:g.links})),...(s.desktopWallets||[]).map(g=>({id:g.id,name:g.name,links:{native:g.links.native,universal:g.links.universal}}))],h=[...o.featuredWalletIds||[],...o.excludeWalletIds||[]],d=m.filter(g=>!h.includes(g.id));d.length&&(o.customWallets=d)}return o}function ethereum_provider_dist_W(s){return ethereum_provider_dist_R({formatters:void 0,fees:void 0,serializers:void 0},s)}var ethereum_provider_dist_nt=Object.freeze({__proto__:null,convertWCMToAppKitOptions:ethereum_provider_dist_st,defineChain:ethereum_provider_dist_W});
//# sourceMappingURL=index.js.map


/***/ },

/***/ 443228
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CG: () => (/* binding */ C)
/* harmony export */ });
/* unused harmony exports isPublishMethod, isPublishParams, isPublishRequest, isSubscribeMethod, isSubscribeParams, isSubscribeRequest, isSubscriptionMethod, isSubscriptionParams, isSubscriptionRequest, isUnsubscribeMethod, isUnsubscribeParams, isUnsubscribeRequest, parsePublishRequest, parseSubscribeRequest, parseSubscriptionRequest, parseUnsubscribeRequest */
function e(s,r,i="string"){if(!s[r]||typeof s[r]!==i)throw new Error(`Missing or invalid "${r}" param`)}function l(s,r){let i=!0;return r.forEach(t=>{t in s||(i=!1)}),i}function f(s,r){return Array.isArray(s)?s.length===r:Object.keys(s).length===r}function w(s,r){return Array.isArray(s)?s.length>=r:Object.keys(s).length>=r}function u(s,r,i){return(i.length?w(s,r.length):f(s,r.length))?l(s,r):!1}function n(s,r,i="_"){const t=s.split(i);return t[t.length-1].trim().toLowerCase()===r.trim().toLowerCase()}function R(s){return b(s.method)&&a(s.params)}function b(s){return n(s,"subscribe")}function a(s){return u(s,["topic"],[])}function P(s){return c(s.method)&&h(s.params)}function c(s){return n(s,"publish")}function h(s){return u(s,["message","topic","ttl"],["prompt","tag"])}function _(s){return o(s.method)&&p(s.params)}function o(s){return n(s,"unsubscribe")}function p(s){return u(s,["id","topic"],[])}function S(s){return m(s.method)&&d(s.params)}function m(s){return n(s,"subscription")}function d(s){return u(s,["id","data"],[])}function g(s){if(!b(s.method))throw new Error("JSON-RPC Request has invalid subscribe method");if(!a(s.params))throw new Error("JSON-RPC Request has invalid subscribe params");const r=s.params;return e(r,"topic"),r}function q(s){if(!c(s.method))throw new Error("JSON-RPC Request has invalid publish method");if(!h(s.params))throw new Error("JSON-RPC Request has invalid publish params");const r=s.params;return e(r,"topic"),e(r,"message"),e(r,"ttl","number"),r}function E(s){if(!o(s.method))throw new Error("JSON-RPC Request has invalid unsubscribe method");if(!p(s.params))throw new Error("JSON-RPC Request has invalid unsubscribe params");const r=s.params;return e(r,"id"),r}function k(s){if(!m(s.method))throw new Error("JSON-RPC Request has invalid subscription method");if(!d(s.params))throw new Error("JSON-RPC Request has invalid subscription params");const r=s.params;return e(r,"id"),e(r,"data"),r}const C={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe",batchFetchMessages:"waku_batchFetchMessages"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe",batchFetchMessages:"irn_batchFetchMessages"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe",batchFetchMessages:"iridium_batchFetchMessages"}};
//# sourceMappingURL=index.es.js.map


/***/ },

/***/ 459872
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isNodeJs */
/* harmony import */ var _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(525682);
/* harmony import */ var _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "IJsonRpcProvider")) __webpack_require__.d(__webpack_exports__, { IJsonRpcProvider: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.IJsonRpcProvider; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "formatJsonRpcError")) __webpack_require__.d(__webpack_exports__, { formatJsonRpcError: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.formatJsonRpcError; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "formatJsonRpcRequest")) __webpack_require__.d(__webpack_exports__, { formatJsonRpcRequest: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.formatJsonRpcRequest; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "formatJsonRpcResult")) __webpack_require__.d(__webpack_exports__, { formatJsonRpcResult: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.formatJsonRpcResult; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "getBigIntRpcId")) __webpack_require__.d(__webpack_exports__, { getBigIntRpcId: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.getBigIntRpcId; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "isHttpUrl")) __webpack_require__.d(__webpack_exports__, { isHttpUrl: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.isHttpUrl; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "isJsonRpcError")) __webpack_require__.d(__webpack_exports__, { isJsonRpcError: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.isJsonRpcError; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "isJsonRpcRequest")) __webpack_require__.d(__webpack_exports__, { isJsonRpcRequest: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.isJsonRpcRequest; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "isJsonRpcResponse")) __webpack_require__.d(__webpack_exports__, { isJsonRpcResponse: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.isJsonRpcResponse; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "isJsonRpcResult")) __webpack_require__.d(__webpack_exports__, { isJsonRpcResult: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.isJsonRpcResult; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "isLocalhostUrl")) __webpack_require__.d(__webpack_exports__, { isLocalhostUrl: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.isLocalhostUrl; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "isReactNative")) __webpack_require__.d(__webpack_exports__, { isReactNative: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.isReactNative; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "isWsUrl")) __webpack_require__.d(__webpack_exports__, { isWsUrl: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.isWsUrl; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "payloadId")) __webpack_require__.d(__webpack_exports__, { payloadId: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.payloadId; } });

const isNodeJs = (/* unused pure expression or super */ null && (isNode));

//# sourceMappingURL=env.js.map

/***/ },

/***/ 471901
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hn: () => (/* binding */ getUint64),
/* harmony export */   X3: () => (/* binding */ setUint64),
/* harmony export */   _j: () => (/* binding */ setInt64),
/* harmony export */   eN: () => (/* binding */ getInt64),
/* harmony export */   f7: () => (/* binding */ UINT32_MAX)
/* harmony export */ });
// Integer Utility
const UINT32_MAX = 4294967295;
// DataView extension to handle int64 / uint64,
// where the actual range is 53-bits integer (a.k.a. safe integer)
function setUint64(view, offset, value) {
    const high = value / 4294967296;
    const low = value; // high bits are truncated by DataView
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
}
function setInt64(view, offset, value) {
    const high = Math.floor(value / 4294967296);
    const low = value; // high bits are truncated by DataView
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
}
function getInt64(view, offset) {
    const high = view.getInt32(offset);
    const low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
}
function getUint64(view, offset) {
    const high = view.getUint32(offset);
    const low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
}
//# sourceMappingURL=int.mjs.map

/***/ },

/***/ 486668
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ER: () => (/* binding */ payloadId),
/* harmony export */   Im: () => (/* binding */ formatJsonRpcResult),
/* harmony export */   dZ: () => (/* binding */ formatJsonRpcError),
/* harmony export */   eX: () => (/* binding */ getBigIntRpcId),
/* harmony export */   e_: () => (/* binding */ formatJsonRpcRequest)
/* harmony export */ });
/* unused harmony export formatErrorMessage */
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(775845);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(844410);


function payloadId(entropy = 3) {
    const date = Date.now() * Math.pow(10, entropy);
    const extra = Math.floor(Math.random() * Math.pow(10, entropy));
    return date + extra;
}
function getBigIntRpcId(entropy = 6) {
    return BigInt(payloadId(entropy));
}
function formatJsonRpcRequest(method, params, id) {
    return {
        id: id || payloadId(),
        jsonrpc: "2.0",
        method,
        params,
    };
}
function formatJsonRpcResult(id, result) {
    return {
        id,
        jsonrpc: "2.0",
        result,
    };
}
function formatJsonRpcError(id, error, data) {
    return {
        id,
        jsonrpc: "2.0",
        error: formatErrorMessage(error, data),
    };
}
function formatErrorMessage(error, data) {
    if (typeof error === "undefined") {
        return (0,_error__WEBPACK_IMPORTED_MODULE_0__/* .getError */ .vG)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .INTERNAL_ERROR */ .zR);
    }
    if (typeof error === "string") {
        error = Object.assign(Object.assign({}, (0,_error__WEBPACK_IMPORTED_MODULE_0__/* .getError */ .vG)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SERVER_ERROR */ .fO)), { message: error });
    }
    if (typeof data !== "undefined") {
        error.data = data;
    }
    if ((0,_error__WEBPACK_IMPORTED_MODULE_0__/* .isReservedErrorCode */ .mE)(error.code)) {
        error = (0,_error__WEBPACK_IMPORTED_MODULE_0__/* .getErrorByCode */ .rI)(error.code);
    }
    return error;
}
//# sourceMappingURL=format.js.map

/***/ },

/***/ 490796
(module) {

"use strict";


module.exports = function () {
  throw new Error(
    'ws does not work in the browser. Browser clients must use the native ' +
      'WebSocket object'
  );
};


/***/ },

/***/ 498186
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ },

/***/ 522184
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ DecodeError)
/* harmony export */ });
class DecodeError extends Error {
    constructor(message) {
        super(message);
        // fix the prototype chain in a cross-platform way
        const proto = Object.create(DecodeError.prototype);
        Object.setPrototypeOf(this, proto);
        Object.defineProperty(this, "name", {
            configurable: true,
            enumerable: false,
            value: DecodeError.name,
        });
    }
}
//# sourceMappingURL=DecodeError.mjs.map

/***/ },

/***/ 525682
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(498186);
tslib_1.__exportStar(__webpack_require__(277173), exports);
tslib_1.__exportStar(__webpack_require__(391089), exports);
//# sourceMappingURL=index.js.map

/***/ },

/***/ 551843
(module, __unused_webpack_exports, __webpack_require__) {

// BLAKE2s hash function in pure Javascript
// Adapted from the reference implementation in RFC7693
// Ported to Javascript by DC - https://github.com/dcposch

const util = __webpack_require__(120829)

// Little-endian byte access.
// Expects a Uint8Array and an index
// Returns the little-endian uint32 at v[i..i+3]
function B2S_GET32 (v, i) {
  return v[i] ^ (v[i + 1] << 8) ^ (v[i + 2] << 16) ^ (v[i + 3] << 24)
}

// Mixing function G.
function B2S_G (a, b, c, d, x, y) {
  v[a] = v[a] + v[b] + x
  v[d] = ROTR32(v[d] ^ v[a], 16)
  v[c] = v[c] + v[d]
  v[b] = ROTR32(v[b] ^ v[c], 12)
  v[a] = v[a] + v[b] + y
  v[d] = ROTR32(v[d] ^ v[a], 8)
  v[c] = v[c] + v[d]
  v[b] = ROTR32(v[b] ^ v[c], 7)
}

// 32-bit right rotation
// x should be a uint32
// y must be between 1 and 31, inclusive
function ROTR32 (x, y) {
  return (x >>> y) ^ (x << (32 - y))
}

// Initialization Vector.
const BLAKE2S_IV = new Uint32Array([
  0x6a09e667,
  0xbb67ae85,
  0x3c6ef372,
  0xa54ff53a,
  0x510e527f,
  0x9b05688c,
  0x1f83d9ab,
  0x5be0cd19
])

const SIGMA = new Uint8Array([
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  14,
  10,
  4,
  8,
  9,
  15,
  13,
  6,
  1,
  12,
  0,
  2,
  11,
  7,
  5,
  3,
  11,
  8,
  12,
  0,
  5,
  2,
  15,
  13,
  10,
  14,
  3,
  6,
  7,
  1,
  9,
  4,
  7,
  9,
  3,
  1,
  13,
  12,
  11,
  14,
  2,
  6,
  5,
  10,
  4,
  0,
  15,
  8,
  9,
  0,
  5,
  7,
  2,
  4,
  10,
  15,
  14,
  1,
  11,
  12,
  6,
  8,
  3,
  13,
  2,
  12,
  6,
  10,
  0,
  11,
  8,
  3,
  4,
  13,
  7,
  5,
  15,
  14,
  1,
  9,
  12,
  5,
  1,
  15,
  14,
  13,
  4,
  10,
  0,
  7,
  6,
  3,
  9,
  2,
  8,
  11,
  13,
  11,
  7,
  14,
  12,
  1,
  3,
  9,
  5,
  0,
  15,
  4,
  8,
  6,
  2,
  10,
  6,
  15,
  14,
  9,
  11,
  3,
  0,
  8,
  12,
  2,
  13,
  7,
  1,
  4,
  10,
  5,
  10,
  2,
  8,
  4,
  7,
  6,
  1,
  5,
  15,
  11,
  9,
  14,
  3,
  12,
  13,
  0
])

// Compression function. "last" flag indicates last block
const v = new Uint32Array(16)
const m = new Uint32Array(16)
function blake2sCompress (ctx, last) {
  let i = 0
  for (i = 0; i < 8; i++) {
    // init work variables
    v[i] = ctx.h[i]
    v[i + 8] = BLAKE2S_IV[i]
  }

  v[12] ^= ctx.t // low 32 bits of offset
  v[13] ^= ctx.t / 0x100000000 // high 32 bits
  if (last) {
    // last block flag set ?
    v[14] = ~v[14]
  }

  for (i = 0; i < 16; i++) {
    // get little-endian words
    m[i] = B2S_GET32(ctx.b, 4 * i)
  }

  // ten rounds of mixing
  // uncomment the DebugPrint calls to log the computation
  // and match the RFC sample documentation
  // util.debugPrint('          m[16]', m, 32)
  for (i = 0; i < 10; i++) {
    // util.debugPrint('   (i=' + i + ')  v[16]', v, 32)
    B2S_G(0, 4, 8, 12, m[SIGMA[i * 16 + 0]], m[SIGMA[i * 16 + 1]])
    B2S_G(1, 5, 9, 13, m[SIGMA[i * 16 + 2]], m[SIGMA[i * 16 + 3]])
    B2S_G(2, 6, 10, 14, m[SIGMA[i * 16 + 4]], m[SIGMA[i * 16 + 5]])
    B2S_G(3, 7, 11, 15, m[SIGMA[i * 16 + 6]], m[SIGMA[i * 16 + 7]])
    B2S_G(0, 5, 10, 15, m[SIGMA[i * 16 + 8]], m[SIGMA[i * 16 + 9]])
    B2S_G(1, 6, 11, 12, m[SIGMA[i * 16 + 10]], m[SIGMA[i * 16 + 11]])
    B2S_G(2, 7, 8, 13, m[SIGMA[i * 16 + 12]], m[SIGMA[i * 16 + 13]])
    B2S_G(3, 4, 9, 14, m[SIGMA[i * 16 + 14]], m[SIGMA[i * 16 + 15]])
  }
  // util.debugPrint('   (i=10) v[16]', v, 32)

  for (i = 0; i < 8; i++) {
    ctx.h[i] ^= v[i] ^ v[i + 8]
  }
  // util.debugPrint('h[8]', ctx.h, 32)
}

// Creates a BLAKE2s hashing context
// Requires an output length between 1 and 32 bytes
// Takes an optional Uint8Array key
function blake2sInit (outlen, key) {
  if (!(outlen > 0 && outlen <= 32)) {
    throw new Error('Incorrect output length, should be in [1, 32]')
  }
  const keylen = key ? key.length : 0
  if (key && !(keylen > 0 && keylen <= 32)) {
    throw new Error('Incorrect key length, should be in [1, 32]')
  }

  const ctx = {
    h: new Uint32Array(BLAKE2S_IV), // hash state
    b: new Uint8Array(64), // input block
    c: 0, // pointer within block
    t: 0, // input count
    outlen: outlen // output length in bytes
  }
  ctx.h[0] ^= 0x01010000 ^ (keylen << 8) ^ outlen

  if (keylen > 0) {
    blake2sUpdate(ctx, key)
    ctx.c = 64 // at the end
  }

  return ctx
}

// Updates a BLAKE2s streaming hash
// Requires hash context and Uint8Array (byte array)
function blake2sUpdate (ctx, input) {
  for (let i = 0; i < input.length; i++) {
    if (ctx.c === 64) {
      // buffer full ?
      ctx.t += ctx.c // add counters
      blake2sCompress(ctx, false) // compress (not last)
      ctx.c = 0 // counter to zero
    }
    ctx.b[ctx.c++] = input[i]
  }
}

// Completes a BLAKE2s streaming hash
// Returns a Uint8Array containing the message digest
function blake2sFinal (ctx) {
  ctx.t += ctx.c // mark last block offset
  while (ctx.c < 64) {
    // fill up with zeros
    ctx.b[ctx.c++] = 0
  }
  blake2sCompress(ctx, true) // final block flag = 1

  // little endian convert and store
  const out = new Uint8Array(ctx.outlen)
  for (let i = 0; i < ctx.outlen; i++) {
    out[i] = (ctx.h[i >> 2] >> (8 * (i & 3))) & 0xff
  }
  return out
}

// Computes the BLAKE2S hash of a string or byte array, and returns a Uint8Array
//
// Returns a n-byte Uint8Array
//
// Parameters:
// - input - the input bytes, as a string, Buffer, or Uint8Array
// - key - optional key Uint8Array, up to 32 bytes
// - outlen - optional output length in bytes, default 64
function blake2s (input, key, outlen) {
  // preprocess inputs
  outlen = outlen || 32
  input = util.normalizeInput(input)

  // do the math
  const ctx = blake2sInit(outlen, key)
  blake2sUpdate(ctx, input)
  return blake2sFinal(ctx)
}

// Computes the BLAKE2S hash of a string or byte array
//
// Returns an n-byte hash in hex, all lowercase
//
// Parameters:
// - input - the input bytes, as a string, Buffer, or Uint8Array
// - key - optional key Uint8Array, up to 32 bytes
// - outlen - optional output length in bytes, default 64
function blake2sHex (input, key, outlen) {
  const output = blake2s(input, key, outlen)
  return util.toHex(output)
}

module.exports = {
  blake2s: blake2s,
  blake2sHex: blake2sHex,
  blake2sInit: blake2sInit,
  blake2sUpdate: blake2sUpdate,
  blake2sFinal: blake2sFinal
}


/***/ },

/***/ 556071
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ BaseError)
});

;// ./node_modules/ox/_esm/core/version.js
/** @internal */
const version = '0.1.1';
//# sourceMappingURL=version.js.map
;// ./node_modules/ox/_esm/core/internal/errors.js

/** @internal */
function getUrl(url) {
    return url;
}
/** @internal */
function getVersion() {
    return version;
}
/** @internal */
function prettyPrint(args) {
    if (!args)
        return '';
    const entries = Object.entries(args)
        .map(([key, value]) => {
        if (value === undefined || value === false)
            return null;
        return [key, value];
    })
        .filter(Boolean);
    const maxLength = entries.reduce((acc, [key]) => Math.max(acc, key.length), 0);
    return entries
        .map(([key, value]) => `  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`)
        .join('\n');
}
//# sourceMappingURL=errors.js.map
;// ./node_modules/ox/_esm/core/Errors.js

/**
 * Base error class inherited by all errors thrown by ox.
 *
 * @example
 * ```ts
 * import { Errors } from 'ox'
 * throw new Errors.BaseError('An error occurred')
 * ```
 */
class BaseError extends Error {
    constructor(shortMessage, options = {}) {
        const details = (() => {
            if (options.cause instanceof BaseError) {
                if (options.cause.details)
                    return options.cause.details;
                if (options.cause.shortMessage)
                    return options.cause.shortMessage;
            }
            if (options.cause &&
                'details' in options.cause &&
                typeof options.cause.details === 'string')
                return options.cause.details;
            if (options.cause?.message)
                return options.cause.message;
            return options.details;
        })();
        const docsPath = (() => {
            if (options.cause instanceof BaseError)
                return options.cause.docsPath || options.docsPath;
            return options.docsPath;
        })();
        const docsBaseUrl = 'https://oxlib.sh';
        const docs = `${docsBaseUrl}${docsPath ?? ''}`;
        const message = [
            shortMessage || 'An error occurred.',
            ...(options.metaMessages ? ['', ...options.metaMessages] : []),
            ...(details || docsPath
                ? [
                    '',
                    details ? `Details: ${details}` : undefined,
                    docsPath ? `See: ${docs}` : undefined,
                ]
                : []),
        ]
            .filter((x) => typeof x === 'string')
            .join('\n');
        super(message, options.cause ? { cause: options.cause } : undefined);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BaseError'
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: `ox@${getVersion()}`
        });
        this.cause = options.cause;
        this.details = details;
        this.docs = docs;
        this.docsPath = docsPath;
        this.shortMessage = shortMessage;
    }
    walk(fn) {
        return walk(this, fn);
    }
}
/** @internal */
function walk(err, fn) {
    if (fn?.(err))
        return err;
    if (err && typeof err === 'object' && 'cause' in err && err.cause)
        return walk(err.cause, fn);
    return fn ? null : err;
}
//# sourceMappingURL=Errors.js.map

/***/ },

/***/ 599606
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(880584);
tslib_1.__exportStar(__webpack_require__(602985), exports);
tslib_1.__exportStar(__webpack_require__(160221), exports);
//# sourceMappingURL=index.js.map

/***/ },

/***/ 602985
(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.delay = void 0;
function delay(timeout) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, timeout);
    });
}
exports.delay = delay;
//# sourceMappingURL=delay.js.map

/***/ },

/***/ 634479
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  xW: () => (/* reexport */ concat),
  sH: () => (/* reexport */ fromString),
  dI: () => (/* reexport */ to_string_toString)
});

// UNUSED EXPORTS: compare, equals, xor

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/identity.js
var identity_namespaceObject = {};
__webpack_require__.r(identity_namespaceObject);
__webpack_require__.d(identity_namespaceObject, {
  identity: () => (identity)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base2.js
var base2_namespaceObject = {};
__webpack_require__.r(base2_namespaceObject);
__webpack_require__.d(base2_namespaceObject, {
  base2: () => (base2)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base8.js
var base8_namespaceObject = {};
__webpack_require__.r(base8_namespaceObject);
__webpack_require__.d(base8_namespaceObject, {
  base8: () => (base8)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base10.js
var base10_namespaceObject = {};
__webpack_require__.r(base10_namespaceObject);
__webpack_require__.d(base10_namespaceObject, {
  base10: () => (base10)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base16.js
var base16_namespaceObject = {};
__webpack_require__.r(base16_namespaceObject);
__webpack_require__.d(base16_namespaceObject, {
  base16: () => (base16),
  base16upper: () => (base16upper)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base36.js
var base36_namespaceObject = {};
__webpack_require__.r(base36_namespaceObject);
__webpack_require__.d(base36_namespaceObject, {
  base36: () => (base36),
  base36upper: () => (base36upper)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base64.js
var base64_namespaceObject = {};
__webpack_require__.r(base64_namespaceObject);
__webpack_require__.d(base64_namespaceObject, {
  base64: () => (base64),
  base64pad: () => (base64pad),
  base64url: () => (base64url),
  base64urlpad: () => (base64urlpad)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base256emoji.js
var base256emoji_namespaceObject = {};
__webpack_require__.r(base256emoji_namespaceObject);
__webpack_require__.d(base256emoji_namespaceObject, {
  base256emoji: () => (base256emoji)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha2_browser_namespaceObject = {};
__webpack_require__.r(sha2_browser_namespaceObject);
__webpack_require__.d(sha2_browser_namespaceObject, {
  sha256: () => (sha256),
  sha512: () => (sha512)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/hashes/identity.js
var hashes_identity_namespaceObject = {};
__webpack_require__.r(hashes_identity_namespaceObject);
__webpack_require__.d(hashes_identity_namespaceObject, {
  identity: () => (identity_identity)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/codecs/raw.js
var raw_namespaceObject = {};
__webpack_require__.r(raw_namespaceObject);
__webpack_require__.d(raw_namespaceObject, {
  code: () => (raw_code),
  decode: () => (raw_decode),
  encode: () => (raw_encode),
  name: () => (raw_name)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/codecs/json.js
var json_namespaceObject = {};
__webpack_require__.r(json_namespaceObject);
__webpack_require__.d(json_namespaceObject, {
  code: () => (json_code),
  decode: () => (json_decode),
  encode: () => (json_encode),
  name: () => (json_name)
});

;// ./node_modules/uint8arrays/esm/src/util/as-uint8array.js
function as_uint8array_asUint8Array(buf) {
  if (globalThis.Buffer != null) {
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  return buf;
}
;// ./node_modules/uint8arrays/esm/src/alloc.js

function alloc(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {
    return asUint8Array(globalThis.Buffer.alloc(size));
  }
  return new Uint8Array(size);
}
function allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return as_uint8array_asUint8Array(globalThis.Buffer.allocUnsafe(size));
  }
  return new Uint8Array(size);
}
;// ./node_modules/uint8arrays/esm/src/concat.js


function concat(arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe(length);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return as_uint8array_asUint8Array(output);
}
// EXTERNAL MODULE: ./node_modules/multiformats/esm/src/bases/base.js + 1 modules
var base = __webpack_require__(552071);
// EXTERNAL MODULE: ./node_modules/multiformats/esm/src/bytes.js
var bytes = __webpack_require__(192081);
;// ./node_modules/multiformats/esm/src/bases/identity.js


const identity = (0,base/* from */.HT)({
  prefix: '\0',
  name: 'identity',
  encode: buf => (0,bytes/* toString */.dI)(buf),
  decode: str => (0,bytes/* fromString */.sH)(str)
});
;// ./node_modules/multiformats/esm/src/bases/base2.js

const base2 = (0,base/* rfc4648 */.yE)({
  prefix: '0',
  name: 'base2',
  alphabet: '01',
  bitsPerChar: 1
});
;// ./node_modules/multiformats/esm/src/bases/base8.js

const base8 = (0,base/* rfc4648 */.yE)({
  prefix: '7',
  name: 'base8',
  alphabet: '01234567',
  bitsPerChar: 3
});
;// ./node_modules/multiformats/esm/src/bases/base10.js

const base10 = (0,base/* baseX */._Q)({
  prefix: '9',
  name: 'base10',
  alphabet: '0123456789'
});
;// ./node_modules/multiformats/esm/src/bases/base16.js

const base16 = (0,base/* rfc4648 */.yE)({
  prefix: 'f',
  name: 'base16',
  alphabet: '0123456789abcdef',
  bitsPerChar: 4
});
const base16upper = (0,base/* rfc4648 */.yE)({
  prefix: 'F',
  name: 'base16upper',
  alphabet: '0123456789ABCDEF',
  bitsPerChar: 4
});
// EXTERNAL MODULE: ./node_modules/multiformats/esm/src/bases/base32.js
var base32 = __webpack_require__(633431);
;// ./node_modules/multiformats/esm/src/bases/base36.js

const base36 = (0,base/* baseX */._Q)({
  prefix: 'k',
  name: 'base36',
  alphabet: '0123456789abcdefghijklmnopqrstuvwxyz'
});
const base36upper = (0,base/* baseX */._Q)({
  prefix: 'K',
  name: 'base36upper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
});
// EXTERNAL MODULE: ./node_modules/multiformats/esm/src/bases/base58.js
var base58 = __webpack_require__(852807);
;// ./node_modules/multiformats/esm/src/bases/base64.js

const base64 = (0,base/* rfc4648 */.yE)({
  prefix: 'm',
  name: 'base64',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  bitsPerChar: 6
});
const base64pad = (0,base/* rfc4648 */.yE)({
  prefix: 'M',
  name: 'base64pad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  bitsPerChar: 6
});
const base64url = (0,base/* rfc4648 */.yE)({
  prefix: 'u',
  name: 'base64url',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
  bitsPerChar: 6
});
const base64urlpad = (0,base/* rfc4648 */.yE)({
  prefix: 'U',
  name: 'base64urlpad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
  bitsPerChar: 6
});
;// ./node_modules/multiformats/esm/src/bases/base256emoji.js

const alphabet = Array.from('\uD83D\uDE80\uD83E\uDE90\u2604\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09\u2600\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02\u2764\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09\u263A\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E\u270C\u2728\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D\u2763\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33\u270B\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13\u2B50\u2705\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6\u2714\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90\u2639\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20\u261D\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B\u26BD\uD83E\uDD19\u2615\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81\u26A1\uD83C\uDF1E\uD83C\uDF88\u274C\u270A\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C\u2708\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74\u25B6\u27A1\u2753\uD83D\uDC8E\uD83D\uDCB8\u2B07\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A\u26A0\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37\u260E\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51\u2744\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42');
const alphabetBytesToChars = alphabet.reduce((p, c, i) => {
  p[i] = c;
  return p;
}, []);
const alphabetCharsToBytes = alphabet.reduce((p, c, i) => {
  p[c.codePointAt(0)] = i;
  return p;
}, []);
function encode(data) {
  return data.reduce((p, c) => {
    p += alphabetBytesToChars[c];
    return p;
  }, '');
}
function decode(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];
    if (byt === undefined) {
      throw new Error(`Non-base256emoji character: ${ char }`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
const base256emoji = (0,base/* from */.HT)({
  prefix: '\uD83D\uDE80',
  name: 'base256emoji',
  encode,
  decode
});
// EXTERNAL MODULE: ./node_modules/multiformats/esm/src/hashes/digest.js
var hashes_digest = __webpack_require__(814403);
;// ./node_modules/multiformats/esm/src/hashes/hasher.js

const from = ({name, code, encode}) => new Hasher(name, code, encode);
class Hasher {
  constructor(name, code, encode) {
    this.name = name;
    this.code = code;
    this.encode = encode;
  }
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? hashes_digest/* create */.vt(this.code, result) : result.then(digest => hashes_digest/* create */.vt(this.code, digest));
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }
}
;// ./node_modules/multiformats/esm/src/hashes/sha2-browser.js

const sha = name => async data => new Uint8Array(await crypto.subtle.digest(name, data));
const sha256 = from({
  name: 'sha2-256',
  code: 18,
  encode: sha('SHA-256')
});
const sha512 = from({
  name: 'sha2-512',
  code: 19,
  encode: sha('SHA-512')
});
;// ./node_modules/multiformats/esm/src/hashes/identity.js


const code = 0;
const identity_name = 'identity';
const identity_encode = bytes/* coerce */.au;
const digest = input => hashes_digest/* create */.vt(code, identity_encode(input));
const identity_identity = {
  code,
  name: identity_name,
  encode: identity_encode,
  digest
};
;// ./node_modules/multiformats/esm/src/codecs/raw.js

const raw_name = 'raw';
const raw_code = 85;
const raw_encode = node => (0,bytes/* coerce */.au)(node);
const raw_decode = data => (0,bytes/* coerce */.au)(data);
;// ./node_modules/multiformats/esm/src/codecs/json.js
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const json_name = 'json';
const json_code = 512;
const json_encode = node => textEncoder.encode(JSON.stringify(node));
const json_decode = data => JSON.parse(textDecoder.decode(data));
// EXTERNAL MODULE: ./node_modules/multiformats/esm/src/cid.js
var cid = __webpack_require__(754070);
// EXTERNAL MODULE: ./node_modules/multiformats/esm/src/varint.js + 1 modules
var varint = __webpack_require__(674973);
;// ./node_modules/multiformats/esm/src/index.js






;// ./node_modules/multiformats/esm/src/basics.js















const bases = {
  ...identity_namespaceObject,
  ...base2_namespaceObject,
  ...base8_namespaceObject,
  ...base10_namespaceObject,
  ...base16_namespaceObject,
  ...base32,
  ...base36_namespaceObject,
  ...base58,
  ...base64_namespaceObject,
  ...base256emoji_namespaceObject
};
const hashes = {
  ...sha2_browser_namespaceObject,
  ...hashes_identity_namespaceObject
};
const codecs = {
  raw: raw_namespaceObject,
  json: json_namespaceObject
};

;// ./node_modules/uint8arrays/esm/src/util/bases.js


function createCodec(name, prefix, encode, decode) {
  return {
    name,
    prefix,
    encoder: {
      name,
      prefix,
      encode
    },
    decoder: { decode }
  };
}
const string = createCodec('utf8', 'u', buf => {
  const decoder = new TextDecoder('utf8');
  return 'u' + decoder.decode(buf);
}, str => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec('ascii', 'a', buf => {
  let string = 'a';
  for (let i = 0; i < buf.length; i++) {
    string += String.fromCharCode(buf[i]);
  }
  return string;
}, str => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
});
const BASES = {
  utf8: string,
  'utf-8': string,
  hex: bases.base16,
  latin1: ascii,
  ascii: ascii,
  binary: ascii,
  ...bases
};
/* harmony default export */ const util_bases = (BASES);
;// ./node_modules/uint8arrays/esm/src/from-string.js


function fromString(string, encoding = 'utf8') {
  const base = util_bases[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return as_uint8array_asUint8Array(globalThis.Buffer.from(string, 'utf-8'));
  }
  return base.decoder.decode(`${ base.prefix }${ string }`);
}
;// ./node_modules/uint8arrays/esm/src/to-string.js

function to_string_toString(array, encoding = 'utf8') {
  const base = util_bases[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');
  }
  return base.encoder.encode(array).substring(1);
}
;// ./node_modules/uint8arrays/esm/src/index.js








/***/ },

/***/ 662010
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(880584);
tslib_1.__exportStar(__webpack_require__(163093), exports);
//# sourceMappingURL=index.js.map

/***/ },

/***/ 739031
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IJsonRpcProvider: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.kF),
/* harmony export */   formatJsonRpcError: () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_3__.dZ),
/* harmony export */   formatJsonRpcRequest: () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_3__.e_),
/* harmony export */   formatJsonRpcResult: () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_3__.Im),
/* harmony export */   getBigIntRpcId: () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_3__.eX),
/* harmony export */   isHttpUrl: () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_5__.q$),
/* harmony export */   isJsonRpcError: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_6__.U$),
/* harmony export */   isJsonRpcRequest: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_6__.p3),
/* harmony export */   isJsonRpcResponse: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_6__.tq),
/* harmony export */   isJsonRpcResult: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_6__.xT),
/* harmony export */   isLocalhostUrl: () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_5__.z),
/* harmony export */   isWsUrl: () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_5__.A1),
/* harmony export */   parseConnectionError: () => (/* reexport safe */ _error__WEBPACK_IMPORTED_MODULE_1__.eF),
/* harmony export */   payloadId: () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_3__.ER)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(844410);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(775845);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(459872);
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "IJsonRpcProvider")) __webpack_require__.d(__webpack_exports__, { IJsonRpcProvider: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.IJsonRpcProvider; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "formatJsonRpcError")) __webpack_require__.d(__webpack_exports__, { formatJsonRpcError: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcError; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "formatJsonRpcRequest")) __webpack_require__.d(__webpack_exports__, { formatJsonRpcRequest: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcRequest; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "formatJsonRpcResult")) __webpack_require__.d(__webpack_exports__, { formatJsonRpcResult: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcResult; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "getBigIntRpcId")) __webpack_require__.d(__webpack_exports__, { getBigIntRpcId: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.getBigIntRpcId; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "isHttpUrl")) __webpack_require__.d(__webpack_exports__, { isHttpUrl: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.isHttpUrl; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "isJsonRpcError")) __webpack_require__.d(__webpack_exports__, { isJsonRpcError: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.isJsonRpcError; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "isJsonRpcRequest")) __webpack_require__.d(__webpack_exports__, { isJsonRpcRequest: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.isJsonRpcRequest; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "isJsonRpcResponse")) __webpack_require__.d(__webpack_exports__, { isJsonRpcResponse: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.isJsonRpcResponse; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "isJsonRpcResult")) __webpack_require__.d(__webpack_exports__, { isJsonRpcResult: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.isJsonRpcResult; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "isLocalhostUrl")) __webpack_require__.d(__webpack_exports__, { isLocalhostUrl: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.isLocalhostUrl; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "isReactNative")) __webpack_require__.d(__webpack_exports__, { isReactNative: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.isReactNative; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "isWsUrl")) __webpack_require__.d(__webpack_exports__, { isWsUrl: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.isWsUrl; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "payloadId")) __webpack_require__.d(__webpack_exports__, { payloadId: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.payloadId; } });
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(486668);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(396705);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(917182);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(899784);








//# sourceMappingURL=index.js.map

/***/ },

/***/ 741595
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Zf: () => (/* binding */ utf8DecodeJs),
/* harmony export */   _u: () => (/* binding */ utf8Decode),
/* harmony export */   dS: () => (/* binding */ utf8Count),
/* harmony export */   yi: () => (/* binding */ utf8Encode)
/* harmony export */ });
/* unused harmony exports utf8EncodeJs, utf8EncodeTE, utf8DecodeTD */
function utf8Count(str) {
    const strLength = str.length;
    let byteLength = 0;
    let pos = 0;
    while (pos < strLength) {
        let value = str.charCodeAt(pos++);
        if ((value & 0xffffff80) === 0) {
            // 1-byte
            byteLength++;
            continue;
        }
        else if ((value & 0xfffff800) === 0) {
            // 2-bytes
            byteLength += 2;
        }
        else {
            // handle surrogate pair
            if (value >= 0xd800 && value <= 0xdbff) {
                // high surrogate
                if (pos < strLength) {
                    const extra = str.charCodeAt(pos);
                    if ((extra & 0xfc00) === 0xdc00) {
                        ++pos;
                        value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                    }
                }
            }
            if ((value & 0xffff0000) === 0) {
                // 3-byte
                byteLength += 3;
            }
            else {
                // 4-byte
                byteLength += 4;
            }
        }
    }
    return byteLength;
}
function utf8EncodeJs(str, output, outputOffset) {
    const strLength = str.length;
    let offset = outputOffset;
    let pos = 0;
    while (pos < strLength) {
        let value = str.charCodeAt(pos++);
        if ((value & 0xffffff80) === 0) {
            // 1-byte
            output[offset++] = value;
            continue;
        }
        else if ((value & 0xfffff800) === 0) {
            // 2-bytes
            output[offset++] = ((value >> 6) & 0x1f) | 0xc0;
        }
        else {
            // handle surrogate pair
            if (value >= 0xd800 && value <= 0xdbff) {
                // high surrogate
                if (pos < strLength) {
                    const extra = str.charCodeAt(pos);
                    if ((extra & 0xfc00) === 0xdc00) {
                        ++pos;
                        value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                    }
                }
            }
            if ((value & 0xffff0000) === 0) {
                // 3-byte
                output[offset++] = ((value >> 12) & 0x0f) | 0xe0;
                output[offset++] = ((value >> 6) & 0x3f) | 0x80;
            }
            else {
                // 4-byte
                output[offset++] = ((value >> 18) & 0x07) | 0xf0;
                output[offset++] = ((value >> 12) & 0x3f) | 0x80;
                output[offset++] = ((value >> 6) & 0x3f) | 0x80;
            }
        }
        output[offset++] = (value & 0x3f) | 0x80;
    }
}
// TextEncoder and TextDecoder are standardized in whatwg encoding:
// https://encoding.spec.whatwg.org/
// and available in all the modern browsers:
// https://caniuse.com/textencoder
// They are available in Node.js since v12 LTS as well:
// https://nodejs.org/api/globals.html#textencoder
const sharedTextEncoder = new TextEncoder();
// This threshold should be determined by benchmarking, which might vary in engines and input data.
// Run `npx ts-node benchmark/encode-string.ts` for details.
const TEXT_ENCODER_THRESHOLD = 50;
function utf8EncodeTE(str, output, outputOffset) {
    sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
}
function utf8Encode(str, output, outputOffset) {
    if (str.length > TEXT_ENCODER_THRESHOLD) {
        utf8EncodeTE(str, output, outputOffset);
    }
    else {
        utf8EncodeJs(str, output, outputOffset);
    }
}
const CHUNK_SIZE = 4096;
function utf8DecodeJs(bytes, inputOffset, byteLength) {
    let offset = inputOffset;
    const end = offset + byteLength;
    const units = [];
    let result = "";
    while (offset < end) {
        const byte1 = bytes[offset++];
        if ((byte1 & 0x80) === 0) {
            // 1 byte
            units.push(byte1);
        }
        else if ((byte1 & 0xe0) === 0xc0) {
            // 2 bytes
            const byte2 = bytes[offset++] & 0x3f;
            units.push(((byte1 & 0x1f) << 6) | byte2);
        }
        else if ((byte1 & 0xf0) === 0xe0) {
            // 3 bytes
            const byte2 = bytes[offset++] & 0x3f;
            const byte3 = bytes[offset++] & 0x3f;
            units.push(((byte1 & 0x1f) << 12) | (byte2 << 6) | byte3);
        }
        else if ((byte1 & 0xf8) === 0xf0) {
            // 4 bytes
            const byte2 = bytes[offset++] & 0x3f;
            const byte3 = bytes[offset++] & 0x3f;
            const byte4 = bytes[offset++] & 0x3f;
            let unit = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0c) | (byte3 << 0x06) | byte4;
            if (unit > 0xffff) {
                unit -= 0x10000;
                units.push(((unit >>> 10) & 0x3ff) | 0xd800);
                unit = 0xdc00 | (unit & 0x3ff);
            }
            units.push(unit);
        }
        else {
            units.push(byte1);
        }
        if (units.length >= CHUNK_SIZE) {
            result += String.fromCharCode(...units);
            units.length = 0;
        }
    }
    if (units.length > 0) {
        result += String.fromCharCode(...units);
    }
    return result;
}
const sharedTextDecoder = new TextDecoder();
// This threshold should be determined by benchmarking, which might vary in engines and input data.
// Run `npx ts-node benchmark/decode-string.ts` for details.
const TEXT_DECODER_THRESHOLD = 200;
function utf8DecodeTD(bytes, inputOffset, byteLength) {
    const stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
    return sharedTextDecoder.decode(stringBytes);
}
function utf8Decode(bytes, inputOffset, byteLength) {
    if (byteLength > TEXT_DECODER_THRESHOLD) {
        return utf8DecodeTD(bytes, inputOffset, byteLength);
    }
    else {
        return utf8DecodeJs(bytes, inputOffset, byteLength);
    }
}
//# sourceMappingURL=utf8.mjs.map

/***/ },

/***/ 775845
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eF: () => (/* binding */ parseConnectionError),
/* harmony export */   mE: () => (/* binding */ isReservedErrorCode),
/* harmony export */   rI: () => (/* binding */ getErrorByCode),
/* harmony export */   vG: () => (/* binding */ getError)
/* harmony export */ });
/* unused harmony exports isServerErrorCode, isValidErrorCode, validateJsonRpcError */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(844410);

function isServerErrorCode(code) {
    return code <= SERVER_ERROR_CODE_RANGE[0] && code >= SERVER_ERROR_CODE_RANGE[1];
}
function isReservedErrorCode(code) {
    return _constants__WEBPACK_IMPORTED_MODULE_0__/* .RESERVED_ERROR_CODES */ .jf.includes(code);
}
function isValidErrorCode(code) {
    return typeof code === "number";
}
function getError(type) {
    if (!Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__/* .STANDARD_ERROR_MAP */ .Uf).includes(type)) {
        return _constants__WEBPACK_IMPORTED_MODULE_0__/* .STANDARD_ERROR_MAP */ .Uf[_constants__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_ERROR */ .XW];
    }
    return _constants__WEBPACK_IMPORTED_MODULE_0__/* .STANDARD_ERROR_MAP */ .Uf[type];
}
function getErrorByCode(code) {
    const match = Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__/* .STANDARD_ERROR_MAP */ .Uf).find(e => e.code === code);
    if (!match) {
        return _constants__WEBPACK_IMPORTED_MODULE_0__/* .STANDARD_ERROR_MAP */ .Uf[_constants__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_ERROR */ .XW];
    }
    return match;
}
function validateJsonRpcError(response) {
    if (typeof response.error.code === "undefined") {
        return { valid: false, error: "Missing code for JSON-RPC error" };
    }
    if (typeof response.error.message === "undefined") {
        return { valid: false, error: "Missing message for JSON-RPC error" };
    }
    if (!isValidErrorCode(response.error.code)) {
        return {
            valid: false,
            error: `Invalid error code type for JSON-RPC: ${response.error.code}`,
        };
    }
    if (isReservedErrorCode(response.error.code)) {
        const error = getErrorByCode(response.error.code);
        if (error.message !== STANDARD_ERROR_MAP[DEFAULT_ERROR].message &&
            response.error.message === error.message) {
            return {
                valid: false,
                error: `Invalid error code message for JSON-RPC: ${response.error.code}`,
            };
        }
    }
    return { valid: true };
}
function parseConnectionError(e, url, type) {
    return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED")
        ? new Error(`Unavailable ${type} RPC url at ${url}`)
        : e;
}
//# sourceMappingURL=error.js.map

/***/ },

/***/ 789883
(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Watch = void 0;
class Watch {
    constructor() {
        this.timestamps = new Map();
    }
    start(label) {
        if (this.timestamps.has(label)) {
            throw new Error(`Watch already started for label: ${label}`);
        }
        this.timestamps.set(label, { started: Date.now() });
    }
    stop(label) {
        const timestamp = this.get(label);
        if (typeof timestamp.elapsed !== "undefined") {
            throw new Error(`Watch already stopped for label: ${label}`);
        }
        const elapsed = Date.now() - timestamp.started;
        this.timestamps.set(label, { started: timestamp.started, elapsed });
    }
    get(label) {
        const timestamp = this.timestamps.get(label);
        if (typeof timestamp === "undefined") {
            throw new Error(`No timestamp found for label: ${label}`);
        }
        return timestamp;
    }
    elapsed(label) {
        const timestamp = this.get(label);
        const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
        return elapsed;
    }
}
exports.Watch = Watch;
exports["default"] = Watch;
//# sourceMappingURL=watch.js.map

/***/ },

/***/ 827907
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137007);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(739031);
class o extends _walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.IJsonRpcProvider{constructor(t){super(t),this.events=new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(t),this.connection.connected&&this.registerEventListeners()}async connect(t=this.connection){await this.open(t)}async disconnect(){await this.close()}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async request(t,e){return this.requestStrict((0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcRequest)(t.method,t.params||[],t.id||(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.getBigIntRpcId)().toString()),e)}async requestStrict(t,e){return new Promise(async(i,s)=>{if(!this.connection.connected)try{await this.open()}catch(n){s(n)}this.events.on(`${t.id}`,n=>{(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.isJsonRpcError)(n)?s(n.error):i(n.result)});try{await this.connection.send(t,e)}catch(n){s(n)}})}setConnection(t=this.connection){return t}onPayload(t){this.events.emit("payload",t),(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.isJsonRpcResponse)(t)?this.events.emit(`${t.id}`,t):this.events.emit("message",{type:t.method,data:t.params})}onClose(t){t&&t.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)),this.events.emit("disconnect")}async open(t=this.connection){this.connection===t&&this.connection.connected||(this.connection.connected&&this.close(),typeof t=="string"&&(await this.connection.open(t),t=this.connection),this.connection=this.setConnection(t),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",t=>this.onPayload(t)),this.connection.on("close",t=>this.onClose(t)),this.connection.on("error",t=>this.events.emit("error",t)),this.connection.on("register_error",t=>this.onClose()),this.hasRegisteredEventListeners=!0)}}
//# sourceMappingURL=index.es.js.map


/***/ },

/***/ 833702
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ stringify)
/* harmony export */ });
/* unused harmony export parse */
const bigIntSuffix = '#__bigint';
/**
 * Parses a JSON string, with support for `bigint`.
 *
 * @example
 * ```ts twoslash
 * import { Json } from 'ox'
 *
 * const json = Json.parse('{"foo":"bar","baz":"69420694206942069420694206942069420694206942069420#__bigint"}')
 * // @log: {
 * // @log:   foo: 'bar',
 * // @log:   baz: 69420694206942069420694206942069420694206942069420n
 * // @log: }
 * ```
 *
 * @param string - The value to parse.
 * @param reviver - A function that transforms the results.
 * @returns The parsed value.
 */
function parse(string, reviver) {
    return JSON.parse(string, (key, value_) => {
        const value = value_;
        if (typeof value === 'string' && value.endsWith(bigIntSuffix))
            return BigInt(value.slice(0, -bigIntSuffix.length));
        return typeof reviver === 'function' ? reviver(key, value) : value;
    });
}
/**
 * Stringifies a value to its JSON representation, with support for `bigint`.
 *
 * @example
 * ```ts twoslash
 * import { Json } from 'ox'
 *
 * const json = Json.stringify({
 *   foo: 'bar',
 *   baz: 69420694206942069420694206942069420694206942069420n,
 * })
 * // @log: '{"foo":"bar","baz":"69420694206942069420694206942069420694206942069420#__bigint"}'
 * ```
 *
 * @param value - The value to stringify.
 * @param replacer - A function that transforms the results. It is passed the key and value of the property, and must return the value to be used in the JSON string. If this function returns `undefined`, the property is not included in the resulting JSON string.
 * @param space - A string or number that determines the indentation of the JSON string. If it is a number, it indicates the number of spaces to use as indentation; if it is a string (e.g. `'\t'`), it uses the string as the indentation character.
 * @returns The JSON string.
 */
function stringify(value, replacer, space) {
    return JSON.stringify(value, (key, value) => {
        if (typeof replacer === 'function')
            return replacer(key, value);
        if (typeof value === 'bigint')
            return value.toString() + bigIntSuffix;
        return value;
    }, space);
}
//# sourceMappingURL=Json.js.map

/***/ },

/***/ 838196
(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
function getFromWindow(name) {
    let res = undefined;
    if (typeof window !== "undefined" && typeof window[name] !== "undefined") {
        res = window[name];
    }
    return res;
}
exports.getFromWindow = getFromWindow;
function getFromWindowOrThrow(name) {
    const res = getFromWindow(name);
    if (!res) {
        throw new Error(`${name} is not defined in Window`);
    }
    return res;
}
exports.getFromWindowOrThrow = getFromWindowOrThrow;
function getDocumentOrThrow() {
    return getFromWindowOrThrow("document");
}
exports.getDocumentOrThrow = getDocumentOrThrow;
function getDocument() {
    return getFromWindow("document");
}
exports.getDocument = getDocument;
function getNavigatorOrThrow() {
    return getFromWindowOrThrow("navigator");
}
exports.getNavigatorOrThrow = getNavigatorOrThrow;
function getNavigator() {
    return getFromWindow("navigator");
}
exports.getNavigator = getNavigator;
function getLocationOrThrow() {
    return getFromWindowOrThrow("location");
}
exports.getLocationOrThrow = getLocationOrThrow;
function getLocation() {
    return getFromWindow("location");
}
exports.getLocation = getLocation;
function getCryptoOrThrow() {
    return getFromWindowOrThrow("crypto");
}
exports.getCryptoOrThrow = getCryptoOrThrow;
function getCrypto() {
    return getFromWindow("crypto");
}
exports.getCrypto = getCrypto;
function getLocalStorageOrThrow() {
    return getFromWindowOrThrow("localStorage");
}
exports.getLocalStorageOrThrow = getLocalStorageOrThrow;
function getLocalStorage() {
    return getFromWindow("localStorage");
}
exports.getLocalStorage = getLocalStorage;
//# sourceMappingURL=index.js.map

/***/ },

/***/ 842063
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.g = void 0;
const window_getters_1 = __webpack_require__(838196);
function getWindowMetadata() {
    let doc;
    let loc;
    try {
        doc = window_getters_1.getDocumentOrThrow();
        loc = window_getters_1.getLocationOrThrow();
    }
    catch (e) {
        return null;
    }
    function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons = [];
        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            const rel = link.getAttribute("rel");
            if (rel) {
                if (rel.toLowerCase().indexOf("icon") > -1) {
                    const href = link.getAttribute("href");
                    if (href) {
                        if (href.toLowerCase().indexOf("https:") === -1 &&
                            href.toLowerCase().indexOf("http:") === -1 &&
                            href.indexOf("//") !== 0) {
                            let absoluteHref = loc.protocol + "//" + loc.host;
                            if (href.indexOf("/") === 0) {
                                absoluteHref += href;
                            }
                            else {
                                const path = loc.pathname.split("/");
                                path.pop();
                                const finalPath = path.join("/");
                                absoluteHref += finalPath + "/" + href;
                            }
                            icons.push(absoluteHref);
                        }
                        else if (href.indexOf("//") === 0) {
                            const absoluteUrl = loc.protocol + href;
                            icons.push(absoluteUrl);
                        }
                        else {
                            icons.push(href);
                        }
                    }
                }
            }
        }
        return icons;
    }
    function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for (let i = 0; i < metaTags.length; i++) {
            const tag = metaTags[i];
            const attributes = ["itemprop", "property", "name"]
                .map((target) => tag.getAttribute(target))
                .filter((attr) => {
                if (attr) {
                    return args.includes(attr);
                }
                return false;
            });
            if (attributes.length && attributes) {
                const content = tag.getAttribute("content");
                if (content) {
                    return content;
                }
            }
        }
        return "";
    }
    function getName() {
        let name = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name) {
            name = doc.title;
        }
        return name;
    }
    function getDescription() {
        const description = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description;
    }
    const name = getName();
    const description = getDescription();
    const url = loc.origin;
    const icons = getIcons();
    const meta = {
        description,
        url,
        icons,
        name,
    };
    return meta;
}
exports.g = getWindowMetadata;
//# sourceMappingURL=index.js.map

/***/ },

/***/ 844410
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Uf: () => (/* binding */ STANDARD_ERROR_MAP),
/* harmony export */   XW: () => (/* binding */ DEFAULT_ERROR),
/* harmony export */   fO: () => (/* binding */ SERVER_ERROR),
/* harmony export */   jf: () => (/* binding */ RESERVED_ERROR_CODES),
/* harmony export */   zR: () => (/* binding */ INTERNAL_ERROR)
/* harmony export */ });
/* unused harmony exports PARSE_ERROR, INVALID_REQUEST, METHOD_NOT_FOUND, INVALID_PARAMS, SERVER_ERROR_CODE_RANGE */
const PARSE_ERROR = "PARSE_ERROR";
const INVALID_REQUEST = "INVALID_REQUEST";
const METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
const INVALID_PARAMS = "INVALID_PARAMS";
const INTERNAL_ERROR = "INTERNAL_ERROR";
const SERVER_ERROR = "SERVER_ERROR";
const RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
const SERVER_ERROR_CODE_RANGE = (/* unused pure expression or super */ null && ([-32000, -32099]));
const STANDARD_ERROR_MAP = {
    [PARSE_ERROR]: { code: -32700, message: "Parse error" },
    [INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
    [METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
    [INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
    [INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
    [SERVER_ERROR]: { code: -32000, message: "Server error" },
};
const DEFAULT_ERROR = SERVER_ERROR;
//# sourceMappingURL=constants.js.map

/***/ },

/***/ 857324
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RG: () => (/* binding */ base32)
/* harmony export */ });
/* unused harmony exports utils, base16, base32nopad, base32hex, base32hexnopad, base32crockford, base64, base64nopad, base64url, base64urlnopad, base58, base58flickr, base58xrp, base58xmr, createBase58check, base58check, bech32, bech32m, utf8, hex, bytesToString, str, stringToBytes, bytes */
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function isBytes(a) {
    return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
}
/** Asserts something is Uint8Array. */
function abytes(b, ...lengths) {
    if (!isBytes(b))
        throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length))
        throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
}
function isArrayOf(isString, arr) {
    if (!Array.isArray(arr))
        return false;
    if (arr.length === 0)
        return true;
    if (isString) {
        return arr.every((item) => typeof item === 'string');
    }
    else {
        return arr.every((item) => Number.isSafeInteger(item));
    }
}
// no abytes: seems to have 10% slowdown. Why?!
function afn(input) {
    if (typeof input !== 'function')
        throw new Error('function expected');
    return true;
}
function astr(label, input) {
    if (typeof input !== 'string')
        throw new Error(`${label}: string expected`);
    return true;
}
function anumber(n) {
    if (!Number.isSafeInteger(n))
        throw new Error(`invalid integer: ${n}`);
}
function aArr(input) {
    if (!Array.isArray(input))
        throw new Error('array expected');
}
function astrArr(label, input) {
    if (!isArrayOf(true, input))
        throw new Error(`${label}: array of strings expected`);
}
function anumArr(label, input) {
    if (!isArrayOf(false, input))
        throw new Error(`${label}: array of numbers expected`);
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function chain(...args) {
    const id = (a) => a;
    // Wrap call in closure so JIT can inline calls
    const wrap = (a, b) => (c) => a(b(c));
    // Construct chain of args[-1].encode(args[-2].encode([...]))
    const encode = args.map((x) => x.encode).reduceRight(wrap, id);
    // Construct chain of args[0].decode(args[1].decode(...))
    const decode = args.map((x) => x.decode).reduce(wrap, id);
    return { encode, decode };
}
/**
 * Encodes integer radix representation to array of strings using alphabet and back.
 * Could also be array of strings.
 * @__NO_SIDE_EFFECTS__
 */
function alphabet(letters) {
    // mapping 1 to "b"
    const lettersA = typeof letters === 'string' ? letters.split('') : letters;
    const len = lettersA.length;
    astrArr('alphabet', lettersA);
    // mapping "b" to 1
    const indexes = new Map(lettersA.map((l, i) => [l, i]));
    return {
        encode: (digits) => {
            aArr(digits);
            return digits.map((i) => {
                if (!Number.isSafeInteger(i) || i < 0 || i >= len)
                    throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${letters}`);
                return lettersA[i];
            });
        },
        decode: (input) => {
            aArr(input);
            return input.map((letter) => {
                astr('alphabet.decode', letter);
                const i = indexes.get(letter);
                if (i === undefined)
                    throw new Error(`Unknown letter: "${letter}". Allowed: ${letters}`);
                return i;
            });
        },
    };
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function join(separator = '') {
    astr('join', separator);
    return {
        encode: (from) => {
            astrArr('join.decode', from);
            return from.join(separator);
        },
        decode: (to) => {
            astr('join.decode', to);
            return to.split(separator);
        },
    };
}
/**
 * Pad strings array so it has integer number of bits
 * @__NO_SIDE_EFFECTS__
 */
function padding(bits, chr = '=') {
    anumber(bits);
    astr('padding', chr);
    return {
        encode(data) {
            astrArr('padding.encode', data);
            while ((data.length * bits) % 8)
                data.push(chr);
            return data;
        },
        decode(input) {
            astrArr('padding.decode', input);
            let end = input.length;
            if ((end * bits) % 8)
                throw new Error('padding: invalid, string should have whole number of bytes');
            for (; end > 0 && input[end - 1] === chr; end--) {
                const last = end - 1;
                const byte = last * bits;
                if (byte % 8 === 0)
                    throw new Error('padding: invalid, string has too much padding');
            }
            return input.slice(0, end);
        },
    };
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function normalize(fn) {
    afn(fn);
    return { encode: (from) => from, decode: (to) => fn(to) };
}
/**
 * Slow: O(n^2) time complexity
 */
function convertRadix(data, from, to) {
    // base 1 is impossible
    if (from < 2)
        throw new Error(`convertRadix: invalid from=${from}, base cannot be less than 2`);
    if (to < 2)
        throw new Error(`convertRadix: invalid to=${to}, base cannot be less than 2`);
    aArr(data);
    if (!data.length)
        return [];
    let pos = 0;
    const res = [];
    const digits = Array.from(data, (d) => {
        anumber(d);
        if (d < 0 || d >= from)
            throw new Error(`invalid integer: ${d}`);
        return d;
    });
    const dlen = digits.length;
    while (true) {
        let carry = 0;
        let done = true;
        for (let i = pos; i < dlen; i++) {
            const digit = digits[i];
            const fromCarry = from * carry;
            const digitBase = fromCarry + digit;
            if (!Number.isSafeInteger(digitBase) ||
                fromCarry / from !== carry ||
                digitBase - digit !== fromCarry) {
                throw new Error('convertRadix: carry overflow');
            }
            const div = digitBase / to;
            carry = digitBase % to;
            const rounded = Math.floor(div);
            digits[i] = rounded;
            if (!Number.isSafeInteger(rounded) || rounded * to + carry !== digitBase)
                throw new Error('convertRadix: carry overflow');
            if (!done)
                continue;
            else if (!rounded)
                pos = i;
            else
                done = false;
        }
        res.push(carry);
        if (done)
            break;
    }
    for (let i = 0; i < data.length - 1 && data[i] === 0; i++)
        res.push(0);
    return res.reverse();
}
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const radix2carry = /* @__NO_SIDE_EFFECTS__ */ (from, to) => from + (to - gcd(from, to));
const powers = /* @__PURE__ */ (() => {
    let res = [];
    for (let i = 0; i < 40; i++)
        res.push(2 ** i);
    return res;
})();
/**
 * Implemented with numbers, because BigInt is 5x slower
 */
function convertRadix2(data, from, to, padding) {
    aArr(data);
    if (from <= 0 || from > 32)
        throw new Error(`convertRadix2: wrong from=${from}`);
    if (to <= 0 || to > 32)
        throw new Error(`convertRadix2: wrong to=${to}`);
    if (radix2carry(from, to) > 32) {
        throw new Error(`convertRadix2: carry overflow from=${from} to=${to} carryBits=${radix2carry(from, to)}`);
    }
    let carry = 0;
    let pos = 0; // bitwise position in current element
    const max = powers[from];
    const mask = powers[to] - 1;
    const res = [];
    for (const n of data) {
        anumber(n);
        if (n >= max)
            throw new Error(`convertRadix2: invalid data word=${n} from=${from}`);
        carry = (carry << from) | n;
        if (pos + from > 32)
            throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
        pos += from;
        for (; pos >= to; pos -= to)
            res.push(((carry >> (pos - to)) & mask) >>> 0);
        const pow = powers[pos];
        if (pow === undefined)
            throw new Error('invalid carry');
        carry &= pow - 1; // clean carry, otherwise it will cause overflow
    }
    carry = (carry << (to - pos)) & mask;
    if (!padding && pos >= from)
        throw new Error('Excess padding');
    if (!padding && carry > 0)
        throw new Error(`Non-zero padding: ${carry}`);
    if (padding && pos > 0)
        res.push(carry >>> 0);
    return res;
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function radix(num) {
    anumber(num);
    const _256 = 2 ** 8;
    return {
        encode: (bytes) => {
            if (!isBytes(bytes))
                throw new Error('radix.encode input should be Uint8Array');
            return convertRadix(Array.from(bytes), _256, num);
        },
        decode: (digits) => {
            anumArr('radix.decode', digits);
            return Uint8Array.from(convertRadix(digits, num, _256));
        },
    };
}
/**
 * If both bases are power of same number (like `2**8 <-> 2**64`),
 * there is a linear algorithm. For now we have implementation for power-of-two bases only.
 * @__NO_SIDE_EFFECTS__
 */
function radix2(bits, revPadding = false) {
    anumber(bits);
    if (bits <= 0 || bits > 32)
        throw new Error('radix2: bits should be in (0..32]');
    if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32)
        throw new Error('radix2: carry overflow');
    return {
        encode: (bytes) => {
            if (!isBytes(bytes))
                throw new Error('radix2.encode input should be Uint8Array');
            return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
        },
        decode: (digits) => {
            anumArr('radix2.decode', digits);
            return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
        },
    };
}
function unsafeWrapper(fn) {
    afn(fn);
    return function (...args) {
        try {
            return fn.apply(null, args);
        }
        catch (e) { }
    };
}
function checksum(len, fn) {
    anumber(len);
    afn(fn);
    return {
        encode(data) {
            if (!isBytes(data))
                throw new Error('checksum.encode: input should be Uint8Array');
            const sum = fn(data).slice(0, len);
            const res = new Uint8Array(data.length + len);
            res.set(data);
            res.set(sum, data.length);
            return res;
        },
        decode(data) {
            if (!isBytes(data))
                throw new Error('checksum.decode: input should be Uint8Array');
            const payload = data.slice(0, -len);
            const oldChecksum = data.slice(-len);
            const newChecksum = fn(payload).slice(0, len);
            for (let i = 0; i < len; i++)
                if (newChecksum[i] !== oldChecksum[i])
                    throw new Error('Invalid checksum');
            return payload;
        },
    };
}
// prettier-ignore
const utils = {
    alphabet, chain, checksum, convertRadix, convertRadix2, radix, radix2, join, padding,
};
// RFC 4648 aka RFC 3548
// ---------------------
/**
 * base16 encoding from RFC 4648.
 * @example
 * ```js
 * base16.encode(Uint8Array.from([0x12, 0xab]));
 * // => '12AB'
 * ```
 */
const base16 = chain(radix2(4), alphabet('0123456789ABCDEF'), join(''));
/**
 * base32 encoding from RFC 4648. Has padding.
 * Use `base32nopad` for unpadded version.
 * Also check out `base32hex`, `base32hexnopad`, `base32crockford`.
 * @example
 * ```js
 * base32.encode(Uint8Array.from([0x12, 0xab]));
 * // => 'CKVQ===='
 * base32.decode('CKVQ====');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
const base32 = chain(radix2(5), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), padding(5), join(''));
/**
 * base32 encoding from RFC 4648. No padding.
 * Use `base32` for padded version.
 * Also check out `base32hex`, `base32hexnopad`, `base32crockford`.
 * @example
 * ```js
 * base32nopad.encode(Uint8Array.from([0x12, 0xab]));
 * // => 'CKVQ'
 * base32nopad.decode('CKVQ');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
const base32nopad = chain(radix2(5), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), join(''));
/**
 * base32 encoding from RFC 4648. Padded. Compared to ordinary `base32`, slightly different alphabet.
 * Use `base32hexnopad` for unpadded version.
 * @example
 * ```js
 * base32hex.encode(Uint8Array.from([0x12, 0xab]));
 * // => '2ALG===='
 * base32hex.decode('2ALG====');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
const base32hex = chain(radix2(5), alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUV'), padding(5), join(''));
/**
 * base32 encoding from RFC 4648. No padding. Compared to ordinary `base32`, slightly different alphabet.
 * Use `base32hex` for padded version.
 * @example
 * ```js
 * base32hexnopad.encode(Uint8Array.from([0x12, 0xab]));
 * // => '2ALG'
 * base32hexnopad.decode('2ALG');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
const base32hexnopad = chain(radix2(5), alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUV'), join(''));
/**
 * base32 encoding from RFC 4648. Doug Crockford's version.
 * https://www.crockford.com/base32.html
 * @example
 * ```js
 * base32crockford.encode(Uint8Array.from([0x12, 0xab]));
 * // => '2ANG'
 * base32crockford.decode('2ANG');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
const base32crockford = chain(radix2(5), alphabet('0123456789ABCDEFGHJKMNPQRSTVWXYZ'), join(''), normalize((s) => s.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1')));
// Built-in base64 conversion https://caniuse.com/mdn-javascript_builtins_uint8array_frombase64
// prettier-ignore
const hasBase64Builtin = /* @__PURE__ */ (() => typeof Uint8Array.from([]).toBase64 === 'function' &&
    typeof Uint8Array.fromBase64 === 'function')();
const decodeBase64Builtin = (s, isUrl) => {
    astr('base64', s);
    const re = isUrl ? /^[A-Za-z0-9=_-]+$/ : /^[A-Za-z0-9=+/]+$/;
    const alphabet = isUrl ? 'base64url' : 'base64';
    if (s.length > 0 && !re.test(s))
        throw new Error('invalid base64');
    return Uint8Array.fromBase64(s, { alphabet, lastChunkHandling: 'strict' });
};
/**
 * base64 from RFC 4648. Padded.
 * Use `base64nopad` for unpadded version.
 * Also check out `base64url`, `base64urlnopad`.
 * Falls back to built-in function, when available.
 * @example
 * ```js
 * base64.encode(Uint8Array.from([0x12, 0xab]));
 * // => 'Eqs='
 * base64.decode('Eqs=');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
// prettier-ignore
const base64 = hasBase64Builtin ? {
    encode(b) { abytes(b); return b.toBase64(); },
    decode(s) { return decodeBase64Builtin(s, false); },
} : chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'), padding(6), join(''));
/**
 * base64 from RFC 4648. No padding.
 * Use `base64` for padded version.
 * @example
 * ```js
 * base64nopad.encode(Uint8Array.from([0x12, 0xab]));
 * // => 'Eqs'
 * base64nopad.decode('Eqs');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
const base64nopad = chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'), join(''));
/**
 * base64 from RFC 4648, using URL-safe alphabet. Padded.
 * Use `base64urlnopad` for unpadded version.
 * Falls back to built-in function, when available.
 * @example
 * ```js
 * base64url.encode(Uint8Array.from([0x12, 0xab]));
 * // => 'Eqs='
 * base64url.decode('Eqs=');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
// prettier-ignore
const base64url = hasBase64Builtin ? {
    encode(b) { abytes(b); return b.toBase64({ alphabet: 'base64url' }); },
    decode(s) { return decodeBase64Builtin(s, true); },
} : chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), padding(6), join(''));
/**
 * base64 from RFC 4648, using URL-safe alphabet. No padding.
 * Use `base64url` for padded version.
 * @example
 * ```js
 * base64urlnopad.encode(Uint8Array.from([0x12, 0xab]));
 * // => 'Eqs'
 * base64urlnopad.decode('Eqs');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
const base64urlnopad = chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), join(''));
// base58 code
// -----------
const genBase58 = /* @__NO_SIDE_EFFECTS__ */ (abc) => chain(radix(58), alphabet(abc), join(''));
/**
 * base58: base64 without ambigous characters +, /, 0, O, I, l.
 * Quadratic (O(n^2)) - so, can't be used on large inputs.
 * @example
 * ```js
 * base58.decode('01abcdef');
 * // => '3UhJW'
 * ```
 */
const base58 = genBase58('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
/**
 * base58: flickr version. Check out `base58`.
 */
const base58flickr = genBase58('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ');
/**
 * base58: XRP version. Check out `base58`.
 */
const base58xrp = genBase58('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz');
// Data len (index) -> encoded block len
const XMR_BLOCK_LEN = [0, 2, 3, 5, 6, 7, 9, 10, 11];
/**
 * base58: XMR version. Check out `base58`.
 * Done in 8-byte blocks (which equals 11 chars in decoding). Last (non-full) block padded with '1' to size in XMR_BLOCK_LEN.
 * Block encoding significantly reduces quadratic complexity of base58.
 */
const base58xmr = {
    encode(data) {
        let res = '';
        for (let i = 0; i < data.length; i += 8) {
            const block = data.subarray(i, i + 8);
            res += base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], '1');
        }
        return res;
    },
    decode(str) {
        let res = [];
        for (let i = 0; i < str.length; i += 11) {
            const slice = str.slice(i, i + 11);
            const blockLen = XMR_BLOCK_LEN.indexOf(slice.length);
            const block = base58.decode(slice);
            for (let j = 0; j < block.length - blockLen; j++) {
                if (block[j] !== 0)
                    throw new Error('base58xmr: wrong padding');
            }
            res = res.concat(Array.from(block.slice(block.length - blockLen)));
        }
        return Uint8Array.from(res);
    },
};
/**
 * Method, which creates base58check encoder.
 * Requires function, calculating sha256.
 */
const createBase58check = (sha256) => chain(checksum(4, (data) => sha256(sha256(data))), base58);
/**
 * Use `createBase58check` instead.
 * @deprecated
 */
const base58check = (/* unused pure expression or super */ null && (createBase58check));
const BECH_ALPHABET = chain(alphabet('qpzry9x8gf2tvdw0s3jn54khce6mua7l'), join(''));
const POLYMOD_GENERATORS = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
function bech32Polymod(pre) {
    const b = pre >> 25;
    let chk = (pre & 0x1ffffff) << 5;
    for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
        if (((b >> i) & 1) === 1)
            chk ^= POLYMOD_GENERATORS[i];
    }
    return chk;
}
function bechChecksum(prefix, words, encodingConst = 1) {
    const len = prefix.length;
    let chk = 1;
    for (let i = 0; i < len; i++) {
        const c = prefix.charCodeAt(i);
        if (c < 33 || c > 126)
            throw new Error(`Invalid prefix (${prefix})`);
        chk = bech32Polymod(chk) ^ (c >> 5);
    }
    chk = bech32Polymod(chk);
    for (let i = 0; i < len; i++)
        chk = bech32Polymod(chk) ^ (prefix.charCodeAt(i) & 0x1f);
    for (let v of words)
        chk = bech32Polymod(chk) ^ v;
    for (let i = 0; i < 6; i++)
        chk = bech32Polymod(chk);
    chk ^= encodingConst;
    return BECH_ALPHABET.encode(convertRadix2([chk % powers[30]], 30, 5, false));
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function genBech32(encoding) {
    const ENCODING_CONST = encoding === 'bech32' ? 1 : 0x2bc830a3;
    const _words = radix2(5);
    const fromWords = _words.decode;
    const toWords = _words.encode;
    const fromWordsUnsafe = unsafeWrapper(fromWords);
    function encode(prefix, words, limit = 90) {
        astr('bech32.encode prefix', prefix);
        if (isBytes(words))
            words = Array.from(words);
        anumArr('bech32.encode', words);
        const plen = prefix.length;
        if (plen === 0)
            throw new TypeError(`Invalid prefix length ${plen}`);
        const actualLength = plen + 7 + words.length;
        if (limit !== false && actualLength > limit)
            throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
        const lowered = prefix.toLowerCase();
        const sum = bechChecksum(lowered, words, ENCODING_CONST);
        return `${lowered}1${BECH_ALPHABET.encode(words)}${sum}`;
    }
    function decode(str, limit = 90) {
        astr('bech32.decode input', str);
        const slen = str.length;
        if (slen < 8 || (limit !== false && slen > limit))
            throw new TypeError(`invalid string length: ${slen} (${str}). Expected (8..${limit})`);
        // don't allow mixed case
        const lowered = str.toLowerCase();
        if (str !== lowered && str !== str.toUpperCase())
            throw new Error(`String must be lowercase or uppercase`);
        const sepIndex = lowered.lastIndexOf('1');
        if (sepIndex === 0 || sepIndex === -1)
            throw new Error(`Letter "1" must be present between prefix and data only`);
        const prefix = lowered.slice(0, sepIndex);
        const data = lowered.slice(sepIndex + 1);
        if (data.length < 6)
            throw new Error('Data must be at least 6 characters long');
        const words = BECH_ALPHABET.decode(data).slice(0, -6);
        const sum = bechChecksum(prefix, words, ENCODING_CONST);
        if (!data.endsWith(sum))
            throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
        return { prefix, words };
    }
    const decodeUnsafe = unsafeWrapper(decode);
    function decodeToBytes(str) {
        const { prefix, words } = decode(str, false);
        return { prefix, words, bytes: fromWords(words) };
    }
    function encodeFromBytes(prefix, bytes) {
        return encode(prefix, toWords(bytes));
    }
    return {
        encode,
        decode,
        encodeFromBytes,
        decodeToBytes,
        decodeUnsafe,
        fromWords,
        fromWordsUnsafe,
        toWords,
    };
}
/**
 * bech32 from BIP 173. Operates on words.
 * For high-level, check out scure-btc-signer:
 * https://github.com/paulmillr/scure-btc-signer.
 */
const bech32 = genBech32('bech32');
/**
 * bech32m from BIP 350. Operates on words.
 * It was to mitigate `bech32` weaknesses.
 * For high-level, check out scure-btc-signer:
 * https://github.com/paulmillr/scure-btc-signer.
 */
const bech32m = genBech32('bech32m');
/**
 * UTF-8-to-byte decoder. Uses built-in TextDecoder / TextEncoder.
 * @example
 * ```js
 * const b = utf8.decode("hey"); // => new Uint8Array([ 104, 101, 121 ])
 * const str = utf8.encode(b); // "hey"
 * ```
 */
const utf8 = {
    encode: (data) => new TextDecoder().decode(data),
    decode: (str) => new TextEncoder().encode(str),
};
// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
// prettier-ignore
const hasHexBuiltin = /* @__PURE__ */ (() => typeof Uint8Array.from([]).toHex === 'function' &&
    typeof Uint8Array.fromHex === 'function')();
// prettier-ignore
const hexBuiltin = {
    encode(data) { abytes(data); return data.toHex(); },
    decode(s) { astr('hex', s); return Uint8Array.fromHex(s); },
};
/**
 * hex string decoder. Uses built-in function, when available.
 * @example
 * ```js
 * const b = hex.decode("0102ff"); // => new Uint8Array([ 1, 2, 255 ])
 * const str = hex.encode(b); // "0102ff"
 * ```
 */
const hex = hasHexBuiltin
    ? hexBuiltin
    : chain(radix2(4), alphabet('0123456789abcdef'), join(''), normalize((s) => {
        if (typeof s !== 'string' || s.length % 2 !== 0)
            throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
        return s.toLowerCase();
    }));
// prettier-ignore
const CODERS = {
    utf8, hex, base16, base32, base64, base64url, base58, base58xmr
};
const coderTypeError = 'Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr';
/** @deprecated */
const bytesToString = (type, bytes) => {
    if (typeof type !== 'string' || !CODERS.hasOwnProperty(type))
        throw new TypeError(coderTypeError);
    if (!isBytes(bytes))
        throw new TypeError('bytesToString() expects Uint8Array');
    return CODERS[type].encode(bytes);
};
/** @deprecated */
const str = (/* unused pure expression or super */ null && (bytesToString)); // as in python, but for bytes only
/** @deprecated */
const stringToBytes = (type, str) => {
    if (!CODERS.hasOwnProperty(type))
        throw new TypeError(coderTypeError);
    if (typeof str !== 'string')
        throw new TypeError('stringToBytes() expects string');
    return CODERS[type].decode(str);
};
/** @deprecated */
const bytes = (/* unused pure expression or super */ null && (stringToBytes));
//# sourceMappingURL=index.js.map

/***/ },

/***/ 880584
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ },

/***/ 893532
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VH: () => (/* binding */ i),
/* harmony export */   li: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports HEARTBEAT_INTERVAL, IHeartBeat */
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137007);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _walletconnect_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(388900);
/* harmony import */ var _walletconnect_time__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_time__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _walletconnect_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(204556);
class n extends _walletconnect_events__WEBPACK_IMPORTED_MODULE_2__/* .IEvents */ .H{constructor(e){super()}}const s=_walletconnect_time__WEBPACK_IMPORTED_MODULE_1__.FIVE_SECONDS,r={pulse:"heartbeat_pulse"};class i extends n{constructor(e){super(e),this.events=new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.interval=s,this.interval=e?.interval||s}static async init(e){const t=new i(e);return await t.init(),t}async init(){await this.initialize()}stop(){clearInterval(this.intervalRef)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async initialize(){this.intervalRef=setInterval(()=>this.pulse(),(0,_walletconnect_time__WEBPACK_IMPORTED_MODULE_1__.toMiliseconds)(this.interval))}pulse(){this.events.emit(r.pulse)}}
//# sourceMappingURL=index.es.js.map


/***/ },

/***/ 899784
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U$: () => (/* binding */ isJsonRpcError),
/* harmony export */   p3: () => (/* binding */ isJsonRpcRequest),
/* harmony export */   tq: () => (/* binding */ isJsonRpcResponse),
/* harmony export */   xT: () => (/* binding */ isJsonRpcResult)
/* harmony export */ });
/* unused harmony exports isJsonRpcPayload, isJsonRpcValidationInvalid */
function isJsonRpcPayload(payload) {
    return (typeof payload === "object" &&
        "id" in payload &&
        "jsonrpc" in payload &&
        payload.jsonrpc === "2.0");
}
function isJsonRpcRequest(payload) {
    return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
    return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
    return "result" in payload;
}
function isJsonRpcError(payload) {
    return "error" in payload;
}
function isJsonRpcValidationInvalid(validation) {
    return "error" in validation && validation.valid === false;
}
//# sourceMappingURL=validators.js.map

/***/ },

/***/ 917182
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A1: () => (/* binding */ isWsUrl),
/* harmony export */   q$: () => (/* binding */ isHttpUrl),
/* harmony export */   z: () => (/* binding */ isLocalhostUrl)
/* harmony export */ });
const HTTP_REGEX = "^https?:";
const WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
    const matches = url.match(new RegExp(/^\w+:/, "gi"));
    if (!matches || !matches.length)
        return;
    return matches[0];
}
function matchRegexProtocol(url, regex) {
    const protocol = getUrlProtocol(url);
    if (typeof protocol === "undefined")
        return false;
    return new RegExp(regex).test(protocol);
}
function isHttpUrl(url) {
    return matchRegexProtocol(url, HTTP_REGEX);
}
function isWsUrl(url) {
    return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}
//# sourceMappingURL=url.js.map

/***/ },

/***/ 979244
(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ONE_THOUSAND = exports.ONE_HUNDRED = void 0;
exports.ONE_HUNDRED = 100;
exports.ONE_THOUSAND = 1000;
//# sourceMappingURL=misc.js.map

/***/ },

/***/ 989816
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ ExtensionCodec)
});

;// ./node_modules/@msgpack/msgpack/dist.esm/ExtData.mjs
/**
 * ExtData is used to handle Extension Types that are not registered to ExtensionCodec.
 */
class ExtData {
    constructor(type, data) {
        this.type = type;
        this.data = data;
    }
}
//# sourceMappingURL=ExtData.mjs.map
// EXTERNAL MODULE: ./node_modules/@msgpack/msgpack/dist.esm/DecodeError.mjs
var DecodeError = __webpack_require__(522184);
// EXTERNAL MODULE: ./node_modules/@msgpack/msgpack/dist.esm/utils/int.mjs
var utils_int = __webpack_require__(471901);
;// ./node_modules/@msgpack/msgpack/dist.esm/timestamp.mjs
// https://github.com/msgpack/msgpack/blob/master/spec.md#timestamp-extension-type


const EXT_TIMESTAMP = -1;
const TIMESTAMP32_MAX_SEC = 0x100000000 - 1; // 32-bit unsigned int
const TIMESTAMP64_MAX_SEC = 0x400000000 - 1; // 34-bit unsigned int
function encodeTimeSpecToTimestamp({ sec, nsec }) {
    if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) {
        // Here sec >= 0 && nsec >= 0
        if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
            // timestamp 32 = { sec32 (unsigned) }
            const rv = new Uint8Array(4);
            const view = new DataView(rv.buffer);
            view.setUint32(0, sec);
            return rv;
        }
        else {
            // timestamp 64 = { nsec30 (unsigned), sec34 (unsigned) }
            const secHigh = sec / 0x100000000;
            const secLow = sec & 0xffffffff;
            const rv = new Uint8Array(8);
            const view = new DataView(rv.buffer);
            // nsec30 | secHigh2
            view.setUint32(0, (nsec << 2) | (secHigh & 0x3));
            // secLow32
            view.setUint32(4, secLow);
            return rv;
        }
    }
    else {
        // timestamp 96 = { nsec32 (unsigned), sec64 (signed) }
        const rv = new Uint8Array(12);
        const view = new DataView(rv.buffer);
        view.setUint32(0, nsec);
        (0,utils_int/* setInt64 */._j)(view, 4, sec);
        return rv;
    }
}
function encodeDateToTimeSpec(date) {
    const msec = date.getTime();
    const sec = Math.floor(msec / 1e3);
    const nsec = (msec - sec * 1e3) * 1e6;
    // Normalizes { sec, nsec } to ensure nsec is unsigned.
    const nsecInSec = Math.floor(nsec / 1e9);
    return {
        sec: sec + nsecInSec,
        nsec: nsec - nsecInSec * 1e9,
    };
}
function encodeTimestampExtension(object) {
    if (object instanceof Date) {
        const timeSpec = encodeDateToTimeSpec(object);
        return encodeTimeSpecToTimestamp(timeSpec);
    }
    else {
        return null;
    }
}
function decodeTimestampToTimeSpec(data) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    // data may be 32, 64, or 96 bits
    switch (data.byteLength) {
        case 4: {
            // timestamp 32 = { sec32 }
            const sec = view.getUint32(0);
            const nsec = 0;
            return { sec, nsec };
        }
        case 8: {
            // timestamp 64 = { nsec30, sec34 }
            const nsec30AndSecHigh2 = view.getUint32(0);
            const secLow32 = view.getUint32(4);
            const sec = (nsec30AndSecHigh2 & 0x3) * 0x100000000 + secLow32;
            const nsec = nsec30AndSecHigh2 >>> 2;
            return { sec, nsec };
        }
        case 12: {
            // timestamp 96 = { nsec32 (unsigned), sec64 (signed) }
            const sec = (0,utils_int/* getInt64 */.eN)(view, 4);
            const nsec = view.getUint32(0);
            return { sec, nsec };
        }
        default:
            throw new DecodeError/* DecodeError */.X(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${data.length}`);
    }
}
function decodeTimestampExtension(data) {
    const timeSpec = decodeTimestampToTimeSpec(data);
    return new Date(timeSpec.sec * 1e3 + timeSpec.nsec / 1e6);
}
const timestampExtension = {
    type: EXT_TIMESTAMP,
    encode: encodeTimestampExtension,
    decode: decodeTimestampExtension,
};
//# sourceMappingURL=timestamp.mjs.map
;// ./node_modules/@msgpack/msgpack/dist.esm/ExtensionCodec.mjs
// ExtensionCodec to handle MessagePack extensions


class ExtensionCodec {
    constructor() {
        // built-in extensions
        this.builtInEncoders = [];
        this.builtInDecoders = [];
        // custom extensions
        this.encoders = [];
        this.decoders = [];
        this.register(timestampExtension);
    }
    register({ type, encode, decode, }) {
        if (type >= 0) {
            // custom extensions
            this.encoders[type] = encode;
            this.decoders[type] = decode;
        }
        else {
            // built-in extensions
            const index = -1 - type;
            this.builtInEncoders[index] = encode;
            this.builtInDecoders[index] = decode;
        }
    }
    tryToEncode(object, context) {
        // built-in extensions
        for (let i = 0; i < this.builtInEncoders.length; i++) {
            const encodeExt = this.builtInEncoders[i];
            if (encodeExt != null) {
                const data = encodeExt(object, context);
                if (data != null) {
                    const type = -1 - i;
                    return new ExtData(type, data);
                }
            }
        }
        // custom extensions
        for (let i = 0; i < this.encoders.length; i++) {
            const encodeExt = this.encoders[i];
            if (encodeExt != null) {
                const data = encodeExt(object, context);
                if (data != null) {
                    const type = i;
                    return new ExtData(type, data);
                }
            }
        }
        if (object instanceof ExtData) {
            // to keep ExtData as is
            return object;
        }
        return null;
    }
    decode(data, type, context) {
        const decodeExt = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
        if (decodeExt) {
            return decodeExt(data, type, context);
        }
        else {
            // decode() does not fail, returns ExtData instead.
            return new ExtData(type, data);
        }
    }
}
ExtensionCodec.defaultCodec = new ExtensionCodec();
//# sourceMappingURL=ExtensionCodec.mjs.map

/***/ },

/***/ 992493
(module, __unused_webpack_exports, __webpack_require__) {

const b2b = __webpack_require__(74156)
const b2s = __webpack_require__(551843)

module.exports = {
  blake2b: b2b.blake2b,
  blake2bHex: b2b.blake2bHex,
  blake2bInit: b2b.blake2bInit,
  blake2bUpdate: b2b.blake2bUpdate,
  blake2bFinal: b2b.blake2bFinal,
  blake2s: b2s.blake2s,
  blake2sHex: b2s.blake2sHex,
  blake2sInit: b2s.blake2sInit,
  blake2sUpdate: b2s.blake2sUpdate,
  blake2sFinal: b2s.blake2sFinal
}


/***/ },

/***/ 996475
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sl: () => (/* binding */ assertSize),
/* harmony export */   X: () => (/* binding */ assertEndOffset),
/* harmony export */   eV: () => (/* binding */ pad),
/* harmony export */   kK: () => (/* binding */ assertStartOffset)
/* harmony export */ });
/* unused harmony export trim */
/* harmony import */ var _Hex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(301999);

/** @internal */
function assertSize(hex, size_) {
    if (_Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .size */ .Ej(hex) > size_)
        throw new _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .SizeOverflowError */ .u({
            givenSize: _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .size */ .Ej(hex),
            maxSize: size_,
        });
}
/** @internal */
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .size */ .Ej(value) - 1)
        throw new _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .SliceOffsetOutOfBoundsError */ .ii({
            offset: start,
            position: 'start',
            size: _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .size */ .Ej(value),
        });
}
/** @internal */
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' &&
        typeof end === 'number' &&
        _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .size */ .Ej(value) !== end - start) {
        throw new _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .SliceOffsetOutOfBoundsError */ .ii({
            offset: end,
            position: 'end',
            size: _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .size */ .Ej(value),
        });
    }
}
/** @internal */
function pad(hex_, options = {}) {
    const { dir, size = 32 } = options;
    if (size === 0)
        return hex_;
    const hex = hex_.replace('0x', '');
    if (hex.length > size * 2)
        throw new _Hex_js__WEBPACK_IMPORTED_MODULE_0__/* .SizeExceedsPaddingSizeError */ .Fl({
            size: Math.ceil(hex.length / 2),
            targetSize: size,
            type: 'Hex',
        });
    return `0x${hex[dir === 'right' ? 'padEnd' : 'padStart'](size * 2, '0')}`;
}
/** @internal */
function trim(value, options = {}) {
    const { dir = 'left' } = options;
    let data = value.replace('0x', '');
    let sliceLength = 0;
    for (let i = 0; i < data.length - 1; i++) {
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0')
            sliceLength++;
        else
            break;
    }
    data =
        dir === 'left'
            ? data.slice(sliceLength)
            : data.slice(0, data.length - sliceLength);
    if (data === '0')
        return '0x';
    if (dir === 'right' && data.length % 2 === 1)
        return `0x${data}0`;
    return `0x${data}`;
}
//# sourceMappingURL=hex.js.map

/***/ }

}]);