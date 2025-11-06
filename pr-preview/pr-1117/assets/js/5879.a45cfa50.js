(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[5879],{

/***/ 74764:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Polynomial = __webpack_require__(364713)

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined
  this.degree = degree

  if (this.degree) this.initialize(this.degree)
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree
  this.genPoly = Polynomial.generateECPolynomial(this.degree)
}

/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  const paddedData = new Uint8Array(data.length + this.degree)
  paddedData.set(data)

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  const remainder = Polynomial.mod(paddedData, this.genPoly)

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  const start = this.degree - remainder.length
  if (start > 0) {
    const buff = new Uint8Array(this.degree)
    buff.set(remainder, start)

    return buff
  }

  return remainder
}

module.exports = ReedSolomonEncoder


/***/ }),

/***/ 76320:
/***/ ((module) => {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),

/***/ 91333:
/***/ ((module) => {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

module.exports = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then
}


/***/ }),

/***/ 102731:
/***/ ((__unused_webpack_module, exports) => {

const EXP_TABLE = new Uint8Array(512)
const LOG_TABLE = new Uint8Array(256)
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  let x = 1
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x
    LOG_TABLE[x] = i

    x <<= 1 // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (let i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255]
  }
}())

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
}

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
}

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
}


/***/ }),

/***/ 130208:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const VersionCheck = __webpack_require__(821878)
const Regex = __webpack_require__(767044)

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
}

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
}

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
}

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
}

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
}

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
}

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
}

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
}

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
}

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  const lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ 208820:
/***/ ((module) => {

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size
  this.data = new Uint8Array(size * size)
  this.reservedBit = new Uint8Array(size * size)
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  const index = row * this.size + col
  this.data[index] = value
  if (reserved) this.reservedBit[index] = true
}

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
}

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value
}

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
}

module.exports = BitMatrix


/***/ }),

/***/ 247899:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(592726)

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (!canvas.style) canvas.style = {}
  canvas.height = size
  canvas.width = size
  canvas.style.height = size + 'px'
  canvas.style.width = size + 'px'
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  let opts = options
  let canvasEl = canvas

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!canvas) {
    canvasEl = getCanvasElement()
  }

  opts = Utils.getOptions(opts)
  const size = Utils.getImageWidth(qrData.modules.size, opts)

  const ctx = canvasEl.getContext('2d')
  const image = ctx.createImageData(size, size)
  Utils.qrToImageData(image.data, qrData, opts)

  clearCanvas(ctx, canvasEl, size)
  ctx.putImageData(image, 0, 0)

  return canvasEl
}

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  let opts = options

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!opts) opts = {}

  const canvasEl = exports.render(qrData, canvas, opts)

  const type = opts.type || 'image/png'
  const rendererOpts = opts.rendererOpts || {}

  return canvasEl.toDataURL(type, rendererOpts.quality)
}


/***/ }),

/***/ 256886:
/***/ ((__unused_webpack_module, exports) => {

let toSJISFunction
const CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
}

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
}

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  let digit = 0

  while (data !== 0) {
    digit++
    data >>>= 1
  }

  return digit
}

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f
}

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
}

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
}


/***/ }),

/***/ 307756:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const getSymbolSize = (__webpack_require__(256886).getSymbolSize)
const FINDER_PATTERN_SIZE = 7

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  const size = getSymbolSize(version)

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
}


/***/ }),

/***/ 325822:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const encodeUtf8 = __webpack_require__(969049)
const Mode = __webpack_require__(130208)

function ByteData (data) {
  this.mode = Mode.BYTE
  if (typeof (data) === 'string') {
    data = encodeUtf8(data)
  }
  this.data = new Uint8Array(data)
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
}

ByteData.prototype.getLength = function getLength () {
  return this.data.length
}

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
}

ByteData.prototype.write = function (bitBuffer) {
  for (let i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8)
  }
}

module.exports = ByteData


/***/ }),

/***/ 364713:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const GF = __webpack_require__(102731)

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  const coeff = new Uint8Array(p1.length + p2.length - 1)

  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j])
    }
  }

  return coeff
}

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  let result = new Uint8Array(divident)

  while ((result.length - divisor.length) >= 0) {
    const coeff = result[0]

    for (let i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff)
    }

    // remove all zeros from buffer head
    let offset = 0
    while (offset < result.length && result[offset] === 0) offset++
    result = result.slice(offset)
  }

  return result
}

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  let poly = new Uint8Array([1])
  for (let i = 0; i < degree; i++) {
    poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]))
  }

  return poly
}


/***/ }),

/***/ 405879:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W3mAllWalletsView: () => (/* reexport */ W3mAllWalletsView),
  W3mConnectingWcBasicView: () => (/* reexport */ W3mConnectingWcBasicView),
  W3mDownloadsView: () => (/* reexport */ W3mDownloadsView)
});

// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(197199);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js + 2 modules
var decorators = __webpack_require__(6357);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = __webpack_require__(226742);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js
var OptionsController = __webpack_require__(757019);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js
var ApiController = __webpack_require__(188249);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js
var StorageUtil = __webpack_require__(127508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/index.js + 3 modules
var esm_exports = __webpack_require__(441454);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var wui_flex = __webpack_require__(460310);
// EXTERNAL MODULE: ./node_modules/lit/directives/if-defined.js + 1 modules
var if_defined = __webpack_require__(535198);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js
var ConstantsUtil = __webpack_require__(824376);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js
var ConnectorController = __webpack_require__(236010);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js + 2 modules
var ConnectionController = __webpack_require__(14400);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js
var EventsController = __webpack_require__(390184);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js
var RouterController = __webpack_require__(778508);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js + 4 modules
var wui_list_wallet = __webpack_require__(739033);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-widget/index.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let W3mAllWalletsWidget = class W3mAllWalletsWidget extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.tabIdx = undefined;
        this.connectors = ConnectorController/* ConnectorController */.a.state.connectors;
        this.count = ApiController/* ApiController */.N.state.count;
        this.filteredCount = ApiController/* ApiController */.N.state.filteredWallets.length;
        this.isFetchingRecommendedWallets = ApiController/* ApiController */.N.state.isFetchingRecommendedWallets;
        this.unsubscribe.push(ConnectorController/* ConnectorController */.a.subscribeKey('connectors', val => (this.connectors = val)), ApiController/* ApiController */.N.subscribeKey('count', val => (this.count = val)), ApiController/* ApiController */.N.subscribeKey('filteredWallets', val => (this.filteredCount = val.length)), ApiController/* ApiController */.N.subscribeKey('isFetchingRecommendedWallets', val => (this.isFetchingRecommendedWallets = val)));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const wcConnector = this.connectors.find(c => c.id === 'walletConnect');
        const { allWallets } = OptionsController/* OptionsController */.H.state;
        if (!wcConnector || allWallets === 'HIDE') {
            return null;
        }
        if (allWallets === 'ONLY_MOBILE' && !CoreHelperUtil/* CoreHelperUtil */.w.isMobile()) {
            return null;
        }
        const featuredCount = ApiController/* ApiController */.N.state.featured.length;
        const rawCount = this.count + featuredCount;
        const roundedCount = rawCount < 10 ? rawCount : Math.floor(rawCount / 10) * 10;
        const count = this.filteredCount > 0 ? this.filteredCount : roundedCount;
        let tagLabel = `${count}`;
        if (this.filteredCount > 0) {
            tagLabel = `${this.filteredCount}`;
        }
        else if (count < rawCount) {
            tagLabel = `${count}+`;
        }
        const hasWcConnection = ConnectionController/* ConnectionController */.x.hasAnyConnection(ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.WALLET_CONNECT);
        return (0,lit/* html */.qy) `
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${tagLabel}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${hasWcConnection}
        size="sm"
      ></wui-list-wallet>
    `;
    }
    onAllWallets() {
        EventsController/* EventsController */.E.sendEvent({ type: 'track', event: 'CLICK_ALL_WALLETS' });
        RouterController/* RouterController */.I.push('AllWallets', { redirectView: RouterController/* RouterController */.I.state.data?.redirectView });
    }
};
__decorate([
    (0,decorators/* property */.MZ)()
], W3mAllWalletsWidget.prototype, "tabIdx", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsWidget.prototype, "connectors", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsWidget.prototype, "count", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsWidget.prototype, "filteredCount", void 0);
__decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsWidget.prototype, "isFetchingRecommendedWallets", void 0);
W3mAllWalletsWidget = __decorate([
    (0,esm_exports/* customElement */.EM)('w3m-all-wallets-widget')
], W3mAllWalletsWidget);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js
var AssetController = __webpack_require__(773337);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js
var AssetUtil = __webpack_require__(527601);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js
var HelpersUtil = __webpack_require__(335306);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectorUtil.js
var ConnectorUtil = __webpack_require__(56092);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connector-list/styles.js

/* harmony default export */ const styles = ((0,esm_exports/* css */.AH) `
  :host {
    margin-top: ${({ spacing }) => spacing['1']};
  }
  wui-separator {
    margin: ${({ spacing }) => spacing['3']} calc(${({ spacing }) => spacing['3']} * -1)
      ${({ spacing }) => spacing['2']} calc(${({ spacing }) => spacing['3']} * -1);
    width: calc(100% + ${({ spacing }) => spacing['3']} * 2);
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connector-list/index.js
var w3m_connector_list_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let W3mConnectorList = class W3mConnectorList extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.connectors = ConnectorController/* ConnectorController */.a.state.connectors;
        this.recommended = ApiController/* ApiController */.N.state.recommended;
        this.featured = ApiController/* ApiController */.N.state.featured;
        this.explorerWallets = ApiController/* ApiController */.N.state.explorerWallets;
        this.connections = ConnectionController/* ConnectionController */.x.state.connections;
        this.connectorImages = AssetController/* AssetController */.j.state.connectorImages;
        this.loadingTelegram = false;
        this.unsubscribe.push(ConnectorController/* ConnectorController */.a.subscribeKey('connectors', val => (this.connectors = val)), ConnectionController/* ConnectionController */.x.subscribeKey('connections', val => (this.connections = val)), AssetController/* AssetController */.j.subscribeKey('connectorImages', val => (this.connectorImages = val)), ApiController/* ApiController */.N.subscribeKey('recommended', val => (this.recommended = val)), ApiController/* ApiController */.N.subscribeKey('featured', val => (this.featured = val)), ApiController/* ApiController */.N.subscribeKey('explorerFilteredWallets', val => {
            this.explorerWallets = val?.length ? val : ApiController/* ApiController */.N.state.explorerWallets;
        }), ApiController/* ApiController */.N.subscribeKey('explorerWallets', val => {
            if (!this.explorerWallets?.length) {
                this.explorerWallets = val;
            }
        }));
        if (CoreHelperUtil/* CoreHelperUtil */.w.isTelegram() && CoreHelperUtil/* CoreHelperUtil */.w.isIos()) {
            this.loadingTelegram = !ConnectionController/* ConnectionController */.x.state.wcUri;
            this.unsubscribe.push(ConnectionController/* ConnectionController */.x.subscribeKey('wcUri', val => (this.loadingTelegram = !val)));
        }
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `;
    }
    mapConnectorsToExplorerWallets(connectors, explorerWallets) {
        return connectors.map(connector => {
            if (connector.type === 'MULTI_CHAIN' && connector.connectors) {
                const connectorIds = connector.connectors.map(c => c.id);
                const connectorNames = connector.connectors.map(c => c.name);
                const connectorRdns = connector.connectors.map(c => c.info?.rdns);
                const explorerWallet = explorerWallets?.find(wallet => connectorIds.includes(wallet.id) ||
                    connectorNames.includes(wallet.name) ||
                    (wallet.rdns &&
                        (connectorRdns.includes(wallet.rdns) || connectorIds.includes(wallet.rdns))));
                connector.explorerWallet = explorerWallet ?? connector.explorerWallet;
                return connector;
            }
            const explorerWallet = explorerWallets?.find(wallet => wallet.id === connector.id ||
                wallet.rdns === connector.info?.rdns ||
                wallet.name === connector.name);
            connector.explorerWallet = explorerWallet ?? connector.explorerWallet;
            return connector;
        });
    }
    processConnectorsByType(connectors, shouldFilter = true) {
        const sorted = ConnectorUtil/* ConnectorUtil */.g.sortConnectorsByExplorerWallet([...connectors]);
        return shouldFilter ? sorted.filter(ConnectorUtil/* ConnectorUtil */.g.showConnector) : sorted;
    }
    connectorListTemplate() {
        const mappedConnectors = this.mapConnectorsToExplorerWallets(this.connectors, this.explorerWallets ?? []);
        const byType = ConnectorUtil/* ConnectorUtil */.g.getConnectorsByType(mappedConnectors, this.recommended, this.featured);
        const announced = this.processConnectorsByType(byType.announced.filter(c => c.id !== 'walletConnect'));
        const injected = this.processConnectorsByType(byType.injected);
        const multiChain = this.processConnectorsByType(byType.multiChain.filter(c => c.name !== 'WalletConnect'), false);
        const custom = byType.custom;
        const recent = byType.recent;
        const external = this.processConnectorsByType(byType.external.filter(c => c.id !== ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.COINBASE_SDK));
        const recommended = byType.recommended;
        const featured = byType.featured;
        const connectorTypeOrder = ConnectorUtil/* ConnectorUtil */.g.getConnectorTypeOrder({
            custom,
            recent,
            announced,
            injected,
            multiChain,
            recommended,
            featured,
            external
        });
        const wcConnector = this.connectors.find(c => c.id === 'walletConnect');
        const isMobile = CoreHelperUtil/* CoreHelperUtil */.w.isMobile();
        const items = [];
        for (const type of connectorTypeOrder) {
            switch (type) {
                case 'walletConnect': {
                    if (!isMobile && wcConnector) {
                        items.push({ kind: 'connector', subtype: 'walletConnect', connector: wcConnector });
                    }
                    break;
                }
                case 'recent': {
                    const filteredRecent = ConnectorUtil/* ConnectorUtil */.g.getFilteredRecentWallets();
                    filteredRecent.forEach(w => items.push({ kind: 'wallet', subtype: 'recent', wallet: w }));
                    break;
                }
                case 'injected': {
                    multiChain.forEach(c => items.push({ kind: 'connector', subtype: 'multiChain', connector: c }));
                    announced.forEach(c => items.push({ kind: 'connector', subtype: 'announced', connector: c }));
                    injected.forEach(c => items.push({ kind: 'connector', subtype: 'injected', connector: c }));
                    break;
                }
                case 'featured': {
                    featured.forEach(w => items.push({ kind: 'wallet', subtype: 'featured', wallet: w }));
                    break;
                }
                case 'custom': {
                    const filteredCustom = ConnectorUtil/* ConnectorUtil */.g.getFilteredCustomWallets(custom ?? []);
                    filteredCustom.forEach(w => items.push({ kind: 'wallet', subtype: 'custom', wallet: w }));
                    break;
                }
                case 'external': {
                    external.forEach(c => items.push({ kind: 'connector', subtype: 'external', connector: c }));
                    break;
                }
                case 'recommended': {
                    const cappedRecommended = ConnectorUtil/* ConnectorUtil */.g.getCappedRecommendedWallets(recommended);
                    cappedRecommended.forEach(w => items.push({ kind: 'wallet', subtype: 'recommended', wallet: w }));
                    break;
                }
                default:
                    console.warn(`Unknown connector type: ${type}`);
            }
        }
        return items.map((item, displayIndex) => {
            if (item.kind === 'connector') {
                return this.renderConnector(item, displayIndex);
            }
            return this.renderWallet(item, displayIndex);
        });
    }
    renderConnector(item, index) {
        const connector = item.connector;
        const imageSrc = AssetUtil/* AssetUtil */.$.getConnectorImage(connector) || this.connectorImages[connector?.imageId ?? ''];
        const connectionsByNamespace = this.connections.get(connector.chain) ?? [];
        const isAlreadyConnected = connectionsByNamespace.some(c => HelpersUtil/* HelpersUtil */.y.isLowerCaseMatch(c.connectorId, connector.id));
        let tagLabel = undefined;
        let tagVariant = undefined;
        if (item.subtype === 'multiChain') {
            tagLabel = 'multichain';
            tagVariant = 'info';
        }
        else if (item.subtype === 'walletConnect') {
            tagLabel = 'qr code';
            tagVariant = 'accent';
        }
        else if (item.subtype === 'injected' || item.subtype === 'announced') {
            tagLabel = isAlreadyConnected ? 'connected' : 'installed';
            tagVariant = isAlreadyConnected ? 'info' : 'success';
        }
        else {
            tagLabel = undefined;
            tagVariant = undefined;
        }
        const hasWcConnection = ConnectionController/* ConnectionController */.x.hasAnyConnection(ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.WALLET_CONNECT);
        const disabled = item.subtype === 'walletConnect' || item.subtype === 'external' ? hasWcConnection : false;
        return (0,lit/* html */.qy) `
      <w3m-list-wallet
        displayIndex=${index}
        imageSrc=${(0,if_defined/* ifDefined */.J)(imageSrc)}
        .installed=${true}
        name=${connector.name ?? 'Unknown'}
        .tagVariant=${tagVariant}
        tagLabel=${(0,if_defined/* ifDefined */.J)(tagLabel)}
        data-testid=${`wallet-selector-${connector.id.toLowerCase()}`}
        size="sm"
        @click=${() => this.onClickConnector(item)}
        tabIdx=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}
        ?disabled=${disabled}
        rdnsId=${(0,if_defined/* ifDefined */.J)(connector.explorerWallet?.rdns || undefined)}
        walletRank=${(0,if_defined/* ifDefined */.J)(connector.explorerWallet?.order)}
      >
      </w3m-list-wallet>
    `;
    }
    onClickConnector(item) {
        const redirectView = RouterController/* RouterController */.I.state.data?.redirectView;
        if (item.subtype === 'walletConnect') {
            ConnectorController/* ConnectorController */.a.setActiveConnector(item.connector);
            if (CoreHelperUtil/* CoreHelperUtil */.w.isMobile()) {
                RouterController/* RouterController */.I.push('AllWallets');
            }
            else {
                RouterController/* RouterController */.I.push('ConnectingWalletConnect', { redirectView });
            }
            return;
        }
        if (item.subtype === 'multiChain') {
            ConnectorController/* ConnectorController */.a.setActiveConnector(item.connector);
            RouterController/* RouterController */.I.push('ConnectingMultiChain', { redirectView });
            return;
        }
        if (item.subtype === 'injected') {
            ConnectorController/* ConnectorController */.a.setActiveConnector(item.connector);
            RouterController/* RouterController */.I.push('ConnectingExternal', {
                connector: item.connector,
                redirectView,
                wallet: item.connector.explorerWallet
            });
            return;
        }
        if (item.subtype === 'announced') {
            if (item.connector.id === 'walletConnect') {
                if (CoreHelperUtil/* CoreHelperUtil */.w.isMobile()) {
                    RouterController/* RouterController */.I.push('AllWallets');
                }
                else {
                    RouterController/* RouterController */.I.push('ConnectingWalletConnect', { redirectView });
                }
                return;
            }
            RouterController/* RouterController */.I.push('ConnectingExternal', {
                connector: item.connector,
                redirectView,
                wallet: item.connector.explorerWallet
            });
            return;
        }
        RouterController/* RouterController */.I.push('ConnectingExternal', {
            connector: item.connector,
            redirectView
        });
    }
    renderWallet(item, index) {
        const wallet = item.wallet;
        const imageSrc = AssetUtil/* AssetUtil */.$.getWalletImage(wallet);
        const hasWcConnection = ConnectionController/* ConnectionController */.x.hasAnyConnection(ConstantsUtil/* ConstantsUtil */.o.CONNECTOR_ID.WALLET_CONNECT);
        const disabled = hasWcConnection;
        const loading = this.loadingTelegram;
        const tagLabel = item.subtype === 'recent' ? 'recent' : undefined;
        const tagVariant = item.subtype === 'recent' ? 'info' : undefined;
        return (0,lit/* html */.qy) `
      <w3m-list-wallet
        displayIndex=${index}
        imageSrc=${(0,if_defined/* ifDefined */.J)(imageSrc)}
        name=${wallet.name ?? 'Unknown'}
        @click=${() => this.onClickWallet(item)}
        size="sm"
        data-testid=${`wallet-selector-${wallet.id}`}
        tabIdx=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}
        ?loading=${loading}
        ?disabled=${disabled}
        rdnsId=${(0,if_defined/* ifDefined */.J)(wallet.rdns || undefined)}
        walletRank=${(0,if_defined/* ifDefined */.J)(wallet.order)}
        tagLabel=${(0,if_defined/* ifDefined */.J)(tagLabel)}
        .tagVariant=${tagVariant}
      >
      </w3m-list-wallet>
    `;
    }
    onClickWallet(item) {
        const redirectView = RouterController/* RouterController */.I.state.data?.redirectView;
        if (item.subtype === 'featured') {
            ConnectorController/* ConnectorController */.a.selectWalletConnector(item.wallet);
            return;
        }
        if (item.subtype === 'recent') {
            if (this.loadingTelegram) {
                return;
            }
            ConnectorController/* ConnectorController */.a.selectWalletConnector(item.wallet);
            return;
        }
        if (item.subtype === 'custom') {
            if (this.loadingTelegram) {
                return;
            }
            RouterController/* RouterController */.I.push('ConnectingWalletConnect', { wallet: item.wallet, redirectView });
            return;
        }
        if (this.loadingTelegram) {
            return;
        }
        const connector = ConnectorController/* ConnectorController */.a.getConnector({
            id: item.wallet.id,
            rdns: item.wallet.rdns
        });
        if (connector) {
            RouterController/* RouterController */.I.push('ConnectingExternal', { connector, redirectView });
        }
        else {
            RouterController/* RouterController */.I.push('ConnectingWalletConnect', { wallet: item.wallet, redirectView });
        }
    }
};
W3mConnectorList.styles = styles;
w3m_connector_list_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], W3mConnectorList.prototype, "tabIdx", void 0);
w3m_connector_list_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectorList.prototype, "connectors", void 0);
w3m_connector_list_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectorList.prototype, "recommended", void 0);
w3m_connector_list_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectorList.prototype, "featured", void 0);
w3m_connector_list_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectorList.prototype, "explorerWallets", void 0);
w3m_connector_list_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectorList.prototype, "connections", void 0);
w3m_connector_list_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectorList.prototype, "connectorImages", void 0);
w3m_connector_list_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectorList.prototype, "loadingTelegram", void 0);
W3mConnectorList = w3m_connector_list_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connector-list')
], W3mConnectorList);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-common/dist/esm/src/utils/ErrorUtil.js
var ErrorUtil = __webpack_require__(136875);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js
var ChainController = __webpack_require__(806056);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js
var SnackController = __webpack_require__(121871);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js + 1 modules
var ModalController = __webpack_require__(91111);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/withErrorBoundary.js + 1 modules
var withErrorBoundary = __webpack_require__(923082);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-utils/dist/esm/src/CaipNetworkUtil.js + 1 modules
var CaipNetworkUtil = __webpack_require__(973723);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeUtil.js
var ThemeUtil = __webpack_require__(926109);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js
var WebComponentsUtil = __webpack_require__(243494);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js + 24 modules
var wui_icon = __webpack_require__(204694);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js + 3 modules
var wui_text = __webpack_require__(354706);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/ThemeHelperUtil.js
var ThemeHelperUtil = __webpack_require__(867569);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tab-item/styles.js

/* harmony default export */ const wui_tab_item_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({ spacing }) => spacing[1]} ${({ spacing }) => spacing[2]};
    column-gap: ${({ spacing }) => spacing[1]};
    color: ${({ tokens }) => tokens.theme.textSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[20]};
    background-color: transparent;
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({ tokens }) => tokens.theme.textPrimary};
    background-color: ${({ tokens }) => tokens.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({ tokens }) => tokens.theme.textPrimary};
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tab-item/index.js
var wui_tab_item_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const TEXT_VARIANT_BY_SIZE = {
    lg: 'lg-regular',
    md: 'md-regular',
    sm: 'sm-regular'
};
const ICON_SIZE = {
    lg: 'md',
    md: 'sm',
    sm: 'sm'
};
let WuiTab = class WuiTab extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.icon = 'mobile';
        this.size = 'md';
        this.label = '';
        this.active = false;
    }
    render() {
        return (0,lit/* html */.qy) `
      <button data-active=${this.active}>
        ${this.icon
            ? (0,lit/* html */.qy) `<wui-icon size=${ICON_SIZE[this.size]} name=${this.icon}></wui-icon>`
            : ''}
        <wui-text variant=${TEXT_VARIANT_BY_SIZE[this.size]}> ${this.label} </wui-text>
      </button>
    `;
    }
};
WuiTab.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_tab_item_styles];
wui_tab_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiTab.prototype, "icon", void 0);
wui_tab_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiTab.prototype, "size", void 0);
wui_tab_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiTab.prototype, "label", void 0);
wui_tab_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiTab.prototype, "active", void 0);
WuiTab = wui_tab_item_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-tab-item')
], WuiTab);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tabs/styles.js

/* harmony default export */ const wui_tabs_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    border-radius: ${({ borderRadius }) => borderRadius[32]};
    padding: ${({ spacing }) => spacing['01']};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tabs/index.js
var wui_tabs_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiTabs = class WuiTabs extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.tabs = [];
        this.onTabChange = () => null;
        this.size = 'md';
        this.activeTab = 0;
    }
    render() {
        this.dataset['size'] = this.size;
        return this.tabs.map((tab, index) => {
            const isActive = index === this.activeTab;
            return (0,lit/* html */.qy) `
        <wui-tab-item
          @click=${() => this.onTabClick(index)}
          icon=${tab.icon}
          size=${this.size}
          label=${tab.label}
          ?active=${isActive}
          data-active=${isActive}
          data-testid="tab-${tab.label?.toLowerCase()}"
        ></wui-tab-item>
      `;
        });
    }
    onTabClick(index) {
        this.activeTab = index;
        this.onTabChange(index);
    }
};
WuiTabs.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_tabs_styles];
wui_tabs_decorate([
    (0,decorators/* property */.MZ)({ type: Array })
], WuiTabs.prototype, "tabs", void 0);
wui_tabs_decorate([
    (0,decorators/* property */.MZ)()
], WuiTabs.prototype, "onTabChange", void 0);
wui_tabs_decorate([
    (0,decorators/* property */.MZ)()
], WuiTabs.prototype, "size", void 0);
wui_tabs_decorate([
    (0,decorators/* state */.wk)()
], WuiTabs.prototype, "activeTab", void 0);
WuiTabs = wui_tabs_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-tabs')
], WuiTabs);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-tabs.js

//# sourceMappingURL=wui-tabs.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-header/index.js
var w3m_connecting_header_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let W3mConnectingHeader = class W3mConnectingHeader extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.platformTabs = [];
        this.unsubscribe = [];
        this.platforms = [];
        this.onSelectPlatfrom = undefined;
    }
    disconnectCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const tabs = this.generateTabs();
        return (0,lit/* html */.qy) `
      <wui-flex justifyContent="center" .padding=${['0', '0', '4', '0']}>
        <wui-tabs .tabs=${tabs} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `;
    }
    generateTabs() {
        const tabs = this.platforms.map(platform => {
            if (platform === 'browser') {
                return { label: 'Browser', icon: 'extension', platform: 'browser' };
            }
            else if (platform === 'mobile') {
                return { label: 'Mobile', icon: 'mobile', platform: 'mobile' };
            }
            else if (platform === 'qrcode') {
                return { label: 'Mobile', icon: 'mobile', platform: 'qrcode' };
            }
            else if (platform === 'web') {
                return { label: 'Webapp', icon: 'browser', platform: 'web' };
            }
            else if (platform === 'desktop') {
                return { label: 'Desktop', icon: 'desktop', platform: 'desktop' };
            }
            return { label: 'Browser', icon: 'extension', platform: 'unsupported' };
        });
        this.platformTabs = tabs.map(({ platform }) => platform);
        return tabs;
    }
    onTabChange(index) {
        const tab = this.platformTabs[index];
        if (tab) {
            this.onSelectPlatfrom?.(tab);
        }
    }
};
w3m_connecting_header_decorate([
    (0,decorators/* property */.MZ)({ type: Array })
], W3mConnectingHeader.prototype, "platforms", void 0);
w3m_connecting_header_decorate([
    (0,decorators/* property */.MZ)()
], W3mConnectingHeader.prototype, "onSelectPlatfrom", void 0);
W3mConnectingHeader = w3m_connecting_header_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-header')
], W3mConnectingHeader);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js
var ThemeController = __webpack_require__(568996);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/index.js + 1 modules
var wui_loading_spinner = __webpack_require__(508163);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-button/styles.js

/* harmony default export */ const wui_button_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({ spacing }) => spacing[2]};
    transition:
      scale ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-1']},
      background-color ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      border-radius ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-1']};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({ borderRadius }) => borderRadius[2]};
    padding: 0 ${({ spacing }) => spacing[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({ borderRadius }) => borderRadius[3]};
    padding: 0 ${({ spacing }) => spacing[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    padding: 0 ${({ spacing }) => spacing[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({ tokens }) => tokens.core.backgroundAccentPrimary};
    color: ${({ tokens }) => tokens.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({ tokens }) => tokens.core.foregroundAccent010};
    color: ${({ tokens }) => tokens.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({ tokens }) => tokens.theme.backgroundInvert};
    color: ${({ tokens }) => tokens.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({ tokens }) => tokens.theme.borderSecondary};
    color: ${({ tokens }) => tokens.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    color: ${({ tokens }) => tokens.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({ tokens }) => tokens.core.textError};
    color: ${({ tokens }) => tokens.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({ tokens }) => tokens.core.backgroundError};
    color: ${({ tokens }) => tokens.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-button/index.js
var wui_button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








const wui_button_TEXT_VARIANT_BY_SIZE = {
    lg: 'lg-regular-mono',
    md: 'md-regular-mono',
    sm: 'sm-regular-mono'
};
const SPINNER_SIZE_BY_SIZE = {
    lg: 'md',
    md: 'md',
    sm: 'sm'
};
let WuiButton = class WuiButton extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.size = 'lg';
        this.disabled = false;
        this.fullWidth = false;
        this.loading = false;
        this.variant = 'accent-primary';
    }
    render() {
        this.style.cssText = `
    --local-width: ${this.fullWidth ? '100%' : 'auto'};
     `;
        const textVariant = this.textVariant ?? wui_button_TEXT_VARIANT_BY_SIZE[this.size];
        return (0,lit/* html */.qy) `
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${textVariant} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `;
    }
    loadingTemplate() {
        if (this.loading) {
            const size = SPINNER_SIZE_BY_SIZE[this.size];
            const color = this.variant === 'neutral-primary' || this.variant === 'accent-primary'
                ? 'invert'
                : 'primary';
            return (0,lit/* html */.qy) `<wui-loading-spinner color=${color} size=${size}></wui-loading-spinner>`;
        }
        return null;
    }
};
WuiButton.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_button_styles];
wui_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiButton.prototype, "size", void 0);
wui_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiButton.prototype, "disabled", void 0);
wui_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiButton.prototype, "fullWidth", void 0);
wui_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiButton.prototype, "loading", void 0);
wui_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiButton.prototype, "variant", void 0);
wui_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiButton.prototype, "textVariant", void 0);
WuiButton = wui_button_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-button')
], WuiButton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js

//# sourceMappingURL=wui-button.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js
var exports_wui_icon = __webpack_require__(51636);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/index.js + 1 modules
var wui_icon_box = __webpack_require__(238436);
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js

//# sourceMappingURL=wui-icon-box.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js + 2 modules
var wui_link = __webpack_require__(526751);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-thumbnail/styles.js

/* harmony default export */ const wui_loading_thumbnail_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${tokens => tokens.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-thumbnail/index.js
var wui_loading_thumbnail_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let WuiLoadingThumbnail = class WuiLoadingThumbnail extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.radius = 36;
    }
    render() {
        return this.svgLoaderTemplate();
    }
    svgLoaderTemplate() {
        const radius = this.radius > 50 ? 50 : this.radius;
        const standardValue = 36;
        const radiusFactor = standardValue - radius;
        const dashArrayStart = 116 + radiusFactor;
        const dashArrayEnd = 245 + radiusFactor;
        const dashOffset = 360 + radiusFactor * 1.75;
        return (0,lit/* html */.qy) `
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${radius}
          stroke-dasharray="${dashArrayStart} ${dashArrayEnd}"
          stroke-dashoffset=${dashOffset}
        />
      </svg>
    `;
    }
};
WuiLoadingThumbnail.styles = [ThemeUtil/* resetStyles */.W5, wui_loading_thumbnail_styles];
wui_loading_thumbnail_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiLoadingThumbnail.prototype, "radius", void 0);
WuiLoadingThumbnail = wui_loading_thumbnail_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-loading-thumbnail')
], WuiLoadingThumbnail);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-thumbnail.js

//# sourceMappingURL=wui-loading-thumbnail.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var exports_wui_text = __webpack_require__(945090);
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-wallet-image/index.js + 1 modules
var wui_wallet_image = __webpack_require__(907336);
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-image.js

//# sourceMappingURL=wui-wallet-image.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js + 1 modules
var layout_wui_flex = __webpack_require__(648832);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-cta-button/styles.js

/* harmony default export */ const wui_cta_button_styles = ((0,ThemeHelperUtil/* css */.AH) `
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[5]};
    padding-left: ${({ spacing }) => spacing[3]};
    padding-right: ${({ spacing }) => spacing[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ spacing }) => spacing[6]};
  }

  wui-text {
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-cta-button/index.js
var wui_cta_button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let WuiCtaButton = class WuiCtaButton extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.label = '';
        this.buttonLabel = '';
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
    }
};
WuiCtaButton.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_cta_button_styles];
wui_cta_button_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiCtaButton.prototype, "disabled", void 0);
wui_cta_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiCtaButton.prototype, "label", void 0);
wui_cta_button_decorate([
    (0,decorators/* property */.MZ)()
], WuiCtaButton.prototype, "buttonLabel", void 0);
WuiCtaButton = wui_cta_button_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-cta-button')
], WuiCtaButton);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-cta-button.js

//# sourceMappingURL=wui-cta-button.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/styles.js

/* harmony default export */ const w3m_mobile_download_links_styles = ((0,esm_exports/* css */.AH) `
  :host {
    display: block;
    padding: 0 ${({ spacing }) => spacing['5']} ${({ spacing }) => spacing['5']};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/index.js
var w3m_mobile_download_links_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let W3mMobileDownloadLinks = class W3mMobileDownloadLinks extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.wallet = undefined;
    }
    render() {
        if (!this.wallet) {
            this.style.display = 'none';
            return null;
        }
        const { name, app_store, play_store, chrome_store, homepage } = this.wallet;
        const isMobile = CoreHelperUtil/* CoreHelperUtil */.w.isMobile();
        const isIos = CoreHelperUtil/* CoreHelperUtil */.w.isIos();
        const isAndroid = CoreHelperUtil/* CoreHelperUtil */.w.isAndroid();
        const isMultiple = [app_store, play_store, homepage, chrome_store].filter(Boolean).length > 1;
        const shortName = esm_exports/* UiHelperUtil */.Zv.getTruncateString({
            string: name,
            charsStart: 12,
            charsEnd: 0,
            truncate: 'end'
        });
        if (isMultiple && !isMobile) {
            return (0,lit/* html */.qy) `
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${() => RouterController/* RouterController */.I.push('Downloads', { wallet: this.wallet })}
        ></wui-cta-button>
      `;
        }
        if (!isMultiple && homepage) {
            return (0,lit/* html */.qy) `
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `;
        }
        if (app_store && isIos) {
            return (0,lit/* html */.qy) `
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `;
        }
        if (play_store && isAndroid) {
            return (0,lit/* html */.qy) `
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `;
        }
        this.style.display = 'none';
        return null;
    }
    onAppStore() {
        if (this.wallet?.app_store) {
            CoreHelperUtil/* CoreHelperUtil */.w.openHref(this.wallet.app_store, '_blank');
        }
    }
    onPlayStore() {
        if (this.wallet?.play_store) {
            CoreHelperUtil/* CoreHelperUtil */.w.openHref(this.wallet.play_store, '_blank');
        }
    }
    onHomePage() {
        if (this.wallet?.homepage) {
            CoreHelperUtil/* CoreHelperUtil */.w.openHref(this.wallet.homepage, '_blank');
        }
    }
};
W3mMobileDownloadLinks.styles = [w3m_mobile_download_links_styles];
w3m_mobile_download_links_decorate([
    (0,decorators/* property */.MZ)({ type: Object })
], W3mMobileDownloadLinks.prototype, "wallet", void 0);
W3mMobileDownloadLinks = w3m_mobile_download_links_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-mobile-download-links')
], W3mMobileDownloadLinks);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/styles.js

/* harmony default export */ const w3m_connecting_widget_styles = ((0,esm_exports/* css */.AH) `
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({ spacing }) => spacing['1']} * -1);
    bottom: calc(${({ spacing }) => spacing['1']} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({ durations }) => durations['lg']};
    transition-timing-function: ${({ easings }) => easings['ease-out-power-2']};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({ spacing }) => spacing['4']};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({ easings }) => easings['ease-out-power-2']} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/index.js
var w3m_connecting_widget_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














class W3mConnectingWidget extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.wallet = RouterController/* RouterController */.I.state.data?.wallet;
        this.connector = RouterController/* RouterController */.I.state.data?.connector;
        this.timeout = undefined;
        this.secondaryBtnIcon = 'refresh';
        this.onConnect = undefined;
        this.onRender = undefined;
        this.onAutoConnect = undefined;
        this.isWalletConnect = true;
        this.unsubscribe = [];
        this.imageSrc = AssetUtil/* AssetUtil */.$.getConnectorImage(this.connector) ?? AssetUtil/* AssetUtil */.$.getWalletImage(this.wallet);
        this.name = this.wallet?.name ?? this.connector?.name ?? 'Wallet';
        this.isRetrying = false;
        this.uri = ConnectionController/* ConnectionController */.x.state.wcUri;
        this.error = ConnectionController/* ConnectionController */.x.state.wcError;
        this.ready = false;
        this.showRetry = false;
        this.label = undefined;
        this.secondaryBtnLabel = 'Try again';
        this.secondaryLabel = 'Accept connection request in the wallet';
        this.isLoading = false;
        this.isMobile = false;
        this.onRetry = undefined;
        this.unsubscribe.push(...[
            ConnectionController/* ConnectionController */.x.subscribeKey('wcUri', val => {
                this.uri = val;
                if (this.isRetrying && this.onRetry) {
                    this.isRetrying = false;
                    this.onConnect?.();
                }
            }),
            ConnectionController/* ConnectionController */.x.subscribeKey('wcError', val => (this.error = val))
        ]);
        if ((CoreHelperUtil/* CoreHelperUtil */.w.isTelegram() || CoreHelperUtil/* CoreHelperUtil */.w.isSafari()) &&
            CoreHelperUtil/* CoreHelperUtil */.w.isIos() &&
            ConnectionController/* ConnectionController */.x.state.wcUri) {
            this.onConnect?.();
        }
    }
    firstUpdated() {
        this.onAutoConnect?.();
        this.showRetry = !this.onAutoConnect;
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        ConnectionController/* ConnectionController */.x.setWcError(false);
        clearTimeout(this.timeout);
    }
    render() {
        this.onRender?.();
        this.onShowRetry();
        const subLabel = this.error
            ? 'Connection can be declined if a previous request is still active'
            : this.secondaryLabel;
        let label = '';
        if (this.label) {
            label = this.label;
        }
        else {
            label = `Continue in ${this.name}`;
            if (this.error) {
                label = 'Connection declined';
            }
        }
        return (0,lit/* html */.qy) `
      <wui-flex
        data-error=${(0,if_defined/* ifDefined */.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${['10', '5', '5', '5']}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,if_defined/* ifDefined */.J)(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${['2', '0', '0', '0']}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error ? 'error' : 'primary'}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${subLabel}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel
            ? (0,lit/* html */.qy) `
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying || this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `
            : null}
      </wui-flex>

      ${this.isWalletConnect
            ? (0,lit/* html */.qy) `
              <wui-flex .padding=${['0', '5', '5', '5']} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `
            : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `;
    }
    onShowRetry() {
        if (this.error && !this.showRetry) {
            this.showRetry = true;
            const retryButton = this.shadowRoot?.querySelector('wui-button');
            retryButton?.animate([{ opacity: 0 }, { opacity: 1 }], {
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
    onTryAgain() {
        ConnectionController/* ConnectionController */.x.setWcError(false);
        if (this.onRetry) {
            this.isRetrying = true;
            this.onRetry?.();
        }
        else {
            this.onConnect?.();
        }
    }
    loaderTemplate() {
        const borderRadiusMaster = ThemeController/* ThemeController */.W.state.themeVariables['--w3m-border-radius-master'];
        const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace('px', ''), 10) : 4;
        return (0,lit/* html */.qy) `<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
    }
    onCopyUri() {
        try {
            if (this.uri) {
                CoreHelperUtil/* CoreHelperUtil */.w.copyToClopboard(this.uri);
                SnackController/* SnackController */.P.showSuccess('Link copied');
            }
        }
        catch {
            SnackController/* SnackController */.P.showError('Failed to copy');
        }
    }
}
W3mConnectingWidget.styles = w3m_connecting_widget_styles;
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "isRetrying", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "uri", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "error", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "ready", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "showRetry", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "label", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "secondaryBtnLabel", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "secondaryLabel", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWidget.prototype, "isLoading", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mConnectingWidget.prototype, "isMobile", void 0);
w3m_connecting_widget_decorate([
    (0,decorators/* property */.MZ)()
], W3mConnectingWidget.prototype, "onRetry", void 0);
//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-browser/index.js
var w3m_connecting_wc_browser_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let W3mConnectingWcBrowser = class W3mConnectingWcBrowser extends W3mConnectingWidget {
    constructor() {
        super();
        if (!this.wallet) {
            throw new Error('w3m-connecting-wc-browser: No wallet provided');
        }
        this.onConnect = this.onConnectProxy.bind(this);
        this.onAutoConnect = this.onConnectProxy.bind(this);
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.wallet.name,
                platform: 'browser',
                displayIndex: this.wallet?.display_index,
                walletRank: this.wallet.order,
                view: RouterController/* RouterController */.I.state.view
            }
        });
    }
    async onConnectProxy() {
        try {
            this.error = false;
            const { connectors } = ConnectorController/* ConnectorController */.a.state;
            const connector = connectors.find(c => (c.type === 'ANNOUNCED' && c.info?.rdns === this.wallet?.rdns) ||
                c.type === 'INJECTED' ||
                c.name === this.wallet?.name);
            if (connector) {
                await ConnectionController/* ConnectionController */.x.connectExternal(connector, connector.chain);
            }
            else {
                throw new Error('w3m-connecting-wc-browser: No connector found');
            }
            ModalController/* ModalController */.W.close();
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'CONNECT_SUCCESS',
                properties: {
                    method: 'browser',
                    name: this.wallet?.name || 'Unknown',
                    view: RouterController/* RouterController */.I.state.view,
                    walletRank: this.wallet?.order
                }
            });
        }
        catch (error) {
            const isUserRejectedRequestError = error instanceof withErrorBoundary/* AppKitError */.A &&
                error.originalName === ErrorUtil/* ErrorUtil */.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
            if (isUserRejectedRequestError) {
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: 'USER_REJECTED',
                    properties: { message: error.message }
                });
            }
            else {
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: 'CONNECT_ERROR',
                    properties: { message: error?.message ?? 'Unknown' }
                });
            }
            this.error = true;
        }
    }
};
W3mConnectingWcBrowser = w3m_connecting_wc_browser_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-wc-browser')
], W3mConnectingWcBrowser);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-desktop/index.js
var w3m_connecting_wc_desktop_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let W3mConnectingWcDesktop = class W3mConnectingWcDesktop extends W3mConnectingWidget {
    constructor() {
        super();
        if (!this.wallet) {
            throw new Error('w3m-connecting-wc-desktop: No wallet provided');
        }
        this.onConnect = this.onConnectProxy.bind(this);
        this.onRender = this.onRenderProxy.bind(this);
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.wallet.name,
                platform: 'desktop',
                displayIndex: this.wallet?.display_index,
                walletRank: this.wallet.order,
                view: RouterController/* RouterController */.I.state.view
            }
        });
    }
    onRenderProxy() {
        if (!this.ready && this.uri) {
            this.ready = true;
            this.onConnect?.();
        }
    }
    onConnectProxy() {
        if (this.wallet?.desktop_link && this.uri) {
            try {
                this.error = false;
                const { desktop_link, name } = this.wallet;
                const { redirect, href } = CoreHelperUtil/* CoreHelperUtil */.w.formatNativeUrl(desktop_link, this.uri);
                ConnectionController/* ConnectionController */.x.setWcLinking({ name, href });
                ConnectionController/* ConnectionController */.x.setRecentWallet(this.wallet);
                CoreHelperUtil/* CoreHelperUtil */.w.openHref(redirect, '_blank');
            }
            catch {
                this.error = true;
            }
        }
    }
};
W3mConnectingWcDesktop = w3m_connecting_wc_desktop_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-wc-desktop')
], W3mConnectingWcDesktop);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js
var utils_ConstantsUtil = __webpack_require__(562944);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-mobile/index.js
var w3m_connecting_wc_mobile_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let W3mConnectingWcMobile = class W3mConnectingWcMobile extends W3mConnectingWidget {
    constructor() {
        super();
        this.btnLabelTimeout = undefined;
        this.redirectDeeplink = undefined;
        this.redirectUniversalLink = undefined;
        this.target = undefined;
        this.preferUniversalLinks = OptionsController/* OptionsController */.H.state.experimental_preferUniversalLinks;
        this.isLoading = true;
        this.onConnect = () => {
            if (this.wallet?.mobile_link && this.uri) {
                try {
                    this.error = false;
                    const { mobile_link, link_mode, name } = this.wallet;
                    const { redirect, redirectUniversalLink, href } = CoreHelperUtil/* CoreHelperUtil */.w.formatNativeUrl(mobile_link, this.uri, link_mode);
                    this.redirectDeeplink = redirect;
                    this.redirectUniversalLink = redirectUniversalLink;
                    this.target = CoreHelperUtil/* CoreHelperUtil */.w.isIframe() ? '_top' : '_self';
                    ConnectionController/* ConnectionController */.x.setWcLinking({ name, href });
                    ConnectionController/* ConnectionController */.x.setRecentWallet(this.wallet);
                    if (this.preferUniversalLinks && this.redirectUniversalLink) {
                        CoreHelperUtil/* CoreHelperUtil */.w.openHref(this.redirectUniversalLink, this.target);
                    }
                    else {
                        CoreHelperUtil/* CoreHelperUtil */.w.openHref(this.redirectDeeplink, this.target);
                    }
                }
                catch (e) {
                    EventsController/* EventsController */.E.sendEvent({
                        type: 'track',
                        event: 'CONNECT_PROXY_ERROR',
                        properties: {
                            message: e instanceof Error ? e.message : 'Error parsing the deeplink',
                            uri: this.uri,
                            mobile_link: this.wallet.mobile_link,
                            name: this.wallet.name
                        }
                    });
                    this.error = true;
                }
            }
        };
        if (!this.wallet) {
            throw new Error('w3m-connecting-wc-mobile: No wallet provided');
        }
        this.secondaryBtnLabel = 'Open';
        this.secondaryLabel = utils_ConstantsUtil/* ConstantsUtil */.oU.CONNECT_LABELS.MOBILE;
        this.secondaryBtnIcon = 'externalLink';
        this.onHandleURI();
        this.unsubscribe.push(ConnectionController/* ConnectionController */.x.subscribeKey('wcUri', () => {
            this.onHandleURI();
        }));
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.wallet.name,
                platform: 'mobile',
                displayIndex: this.wallet?.display_index,
                walletRank: this.wallet.order,
                view: RouterController/* RouterController */.I.state.view
            }
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        clearTimeout(this.btnLabelTimeout);
    }
    onHandleURI() {
        this.isLoading = !this.uri;
        if (!this.ready && this.uri) {
            this.ready = true;
            this.onConnect?.();
        }
    }
    onTryAgain() {
        ConnectionController/* ConnectionController */.x.setWcError(false);
        this.onConnect?.();
    }
};
w3m_connecting_wc_mobile_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcMobile.prototype, "redirectDeeplink", void 0);
w3m_connecting_wc_mobile_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcMobile.prototype, "redirectUniversalLink", void 0);
w3m_connecting_wc_mobile_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcMobile.prototype, "target", void 0);
w3m_connecting_wc_mobile_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcMobile.prototype, "preferUniversalLinks", void 0);
w3m_connecting_wc_mobile_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcMobile.prototype, "isLoading", void 0);
W3mConnectingWcMobile = w3m_connecting_wc_mobile_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-wc-mobile')
], W3mConnectingWcMobile);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js + 1 modules
var wui_image = __webpack_require__(301608);
// EXTERNAL MODULE: ./node_modules/qrcode/lib/browser.js
var browser = __webpack_require__(887583);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/utils/QrCode.js


const CONNECTING_ERROR_MARGIN = 0.1;
const CIRCLE_SIZE_MODIFIER = 2.5;
const QRCODE_MATRIX_MARGIN = 7;
function isAdjecentDots(cy, otherCy, cellSize) {
    if (cy === otherCy) {
        return false;
    }
    const diff = cy - otherCy < 0 ? otherCy - cy : cy - otherCy;
    return diff <= cellSize + CONNECTING_ERROR_MARGIN;
}
function getMatrix(value, errorCorrectionLevel) {
    const arr = Array.prototype.slice.call(browser.create(value, { errorCorrectionLevel }).modules.data, 0);
    const sqrt = Math.sqrt(arr.length);
    return arr.reduce((rows, key, index) => (index % sqrt === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
}
const QrCodeUtil = {
    generate({ uri, size, logoSize, padding = 8, dotColor = 'var(--apkt-colors-black)' }) {
        const strokeWidth = 10;
        const dots = [];
        const matrix = getMatrix(uri, 'Q');
        const cellSize = (size - 2 * padding) / matrix.length;
        const qrList = [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: 1 }
        ];
        qrList.forEach(({ x, y }) => {
            const x1 = (matrix.length - QRCODE_MATRIX_MARGIN) * cellSize * x + padding;
            const y1 = (matrix.length - QRCODE_MATRIX_MARGIN) * cellSize * y + padding;
            const borderRadius = 0.45;
            for (let i = 0; i < qrList.length; i += 1) {
                const dotSize = cellSize * (QRCODE_MATRIX_MARGIN - i * 2);
                dots.push((0,lit/* svg */.JW) `
            <rect
              fill=${i === 2 ? 'var(--apkt-colors-black)' : 'var(--apkt-colors-white)'}
              width=${i === 0 ? dotSize - strokeWidth : dotSize}
              rx= ${i === 0 ? (dotSize - strokeWidth) * borderRadius : dotSize * borderRadius}
              ry= ${i === 0 ? (dotSize - strokeWidth) * borderRadius : dotSize * borderRadius}
              stroke=${dotColor}
              stroke-width=${i === 0 ? strokeWidth : 0}
              height=${i === 0 ? dotSize - strokeWidth : dotSize}
              x= ${i === 0 ? y1 + cellSize * i + strokeWidth / 2 : y1 + cellSize * i}
              y= ${i === 0 ? x1 + cellSize * i + strokeWidth / 2 : x1 + cellSize * i}
            />
          `);
            }
        });
        const clearArenaSize = Math.floor((logoSize + 25) / cellSize);
        const matrixMiddleStart = matrix.length / 2 - clearArenaSize / 2;
        const matrixMiddleEnd = matrix.length / 2 + clearArenaSize / 2 - 1;
        const circles = [];
        matrix.forEach((row, i) => {
            row.forEach((_, j) => {
                if (matrix[i][j]) {
                    if (!((i < QRCODE_MATRIX_MARGIN && j < QRCODE_MATRIX_MARGIN) ||
                        (i > matrix.length - (QRCODE_MATRIX_MARGIN + 1) && j < QRCODE_MATRIX_MARGIN) ||
                        (i < QRCODE_MATRIX_MARGIN && j > matrix.length - (QRCODE_MATRIX_MARGIN + 1)))) {
                        if (!(i > matrixMiddleStart &&
                            i < matrixMiddleEnd &&
                            j > matrixMiddleStart &&
                            j < matrixMiddleEnd)) {
                            const cx = i * cellSize + cellSize / 2 + padding;
                            const cy = j * cellSize + cellSize / 2 + padding;
                            circles.push([cx, cy]);
                        }
                    }
                }
            });
        });
        const circlesToConnect = {};
        circles.forEach(([cx, cy]) => {
            if (circlesToConnect[cx]) {
                circlesToConnect[cx]?.push(cy);
            }
            else {
                circlesToConnect[cx] = [cy];
            }
        });
        Object.entries(circlesToConnect)
            .map(([cx, cys]) => {
            const newCys = cys.filter(cy => cys.every(otherCy => !isAdjecentDots(cy, otherCy, cellSize)));
            return [Number(cx), newCys];
        })
            .forEach(([cx, cys]) => {
            cys.forEach(cy => {
                dots.push((0,lit/* svg */.JW) `<circle cx=${cx} cy=${cy} fill=${dotColor} r=${cellSize / CIRCLE_SIZE_MODIFIER} />`);
            });
        });
        Object.entries(circlesToConnect)
            .filter(([_, cys]) => cys.length > 1)
            .map(([cx, cys]) => {
            const newCys = cys.filter(cy => cys.some(otherCy => isAdjecentDots(cy, otherCy, cellSize)));
            return [Number(cx), newCys];
        })
            .map(([cx, cys]) => {
            cys.sort((a, b) => (a < b ? -1 : 1));
            const groups = [];
            for (const cy of cys) {
                const group = groups.find(item => item.some(otherCy => isAdjecentDots(cy, otherCy, cellSize)));
                if (group) {
                    group.push(cy);
                }
                else {
                    groups.push([cy]);
                }
            }
            return [cx, groups.map(item => [item[0], item[item.length - 1]])];
        })
            .forEach(([cx, groups]) => {
            groups.forEach(([y1, y2]) => {
                dots.push((0,lit/* svg */.JW) `
              <line
                x1=${cx}
                x2=${cx}
                y1=${y1}
                y2=${y2}
                stroke=${dotColor}
                stroke-width=${cellSize / (CIRCLE_SIZE_MODIFIER / 2)}
                stroke-linecap="round"
              />
            `);
            });
        });
        return dots;
    }
};
//# sourceMappingURL=QrCode.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-qr-code/styles.js

/* harmony default export */ const wui_qr_code_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({ colors }) => colors.white};
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
  }

  :host {
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({ tokens }) => tokens.theme.backgroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-qr-code/index.js
var wui_qr_code_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let WuiQrCode = class WuiQrCode extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.uri = '';
        this.size = 0;
        this.theme = 'dark';
        this.imageSrc = undefined;
        this.alt = undefined;
        this.arenaClear = undefined;
        this.farcaster = undefined;
    }
    render() {
        this.dataset['theme'] = this.theme;
        this.dataset['clear'] = String(this.arenaClear);
        this.style.cssText = `--local-size: ${this.size}px`;
        return (0,lit/* html */.qy) `<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`;
    }
    templateSvg() {
        return (0,lit/* svg */.JW) `
      <svg height=${this.size} width=${this.size}>
        ${QrCodeUtil.generate({
            uri: this.uri,
            size: this.size,
            logoSize: this.arenaClear ? 0 : this.size / 4
        })}
      </svg>
    `;
    }
    templateVisual() {
        if (this.imageSrc) {
            return (0,lit/* html */.qy) `<wui-image src=${this.imageSrc} alt=${this.alt ?? 'logo'}></wui-image>`;
        }
        if (this.farcaster) {
            return (0,lit/* html */.qy) `<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`;
        }
        return (0,lit/* html */.qy) `<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`;
    }
};
WuiQrCode.styles = [ThemeUtil/* resetStyles */.W5, wui_qr_code_styles];
wui_qr_code_decorate([
    (0,decorators/* property */.MZ)()
], WuiQrCode.prototype, "uri", void 0);
wui_qr_code_decorate([
    (0,decorators/* property */.MZ)({ type: Number })
], WuiQrCode.prototype, "size", void 0);
wui_qr_code_decorate([
    (0,decorators/* property */.MZ)()
], WuiQrCode.prototype, "theme", void 0);
wui_qr_code_decorate([
    (0,decorators/* property */.MZ)()
], WuiQrCode.prototype, "imageSrc", void 0);
wui_qr_code_decorate([
    (0,decorators/* property */.MZ)()
], WuiQrCode.prototype, "alt", void 0);
wui_qr_code_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiQrCode.prototype, "arenaClear", void 0);
wui_qr_code_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiQrCode.prototype, "farcaster", void 0);
WuiQrCode = wui_qr_code_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-qr-code')
], WuiQrCode);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-qr-code.js

//# sourceMappingURL=wui-qr-code.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-shimmer/styles.js

/* harmony default export */ const wui_shimmer_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({ tokens }) => tokens.theme.foregroundSecondary} 0%,
      ${({ tokens }) => tokens.theme.foregroundTertiary} 50%,
      ${({ tokens }) => tokens.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({ borderRadius }) => borderRadius[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/components/wui-shimmer/index.js
var wui_shimmer_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let WuiShimmer = class WuiShimmer extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.width = '';
        this.height = '';
        this.variant = 'default';
        this.rounded = false;
    }
    render() {
        this.style.cssText = `
      width: ${this.width};
      height: ${this.height};
    `;
        this.dataset['rounded'] = this.rounded ? 'true' : 'false';
        return (0,lit/* html */.qy) `<slot></slot>`;
    }
};
WuiShimmer.styles = [wui_shimmer_styles];
wui_shimmer_decorate([
    (0,decorators/* property */.MZ)()
], WuiShimmer.prototype, "width", void 0);
wui_shimmer_decorate([
    (0,decorators/* property */.MZ)()
], WuiShimmer.prototype, "height", void 0);
wui_shimmer_decorate([
    (0,decorators/* property */.MZ)()
], WuiShimmer.prototype, "variant", void 0);
wui_shimmer_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiShimmer.prototype, "rounded", void 0);
WuiShimmer = wui_shimmer_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-shimmer')
], WuiShimmer);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-shimmer.js

//# sourceMappingURL=wui-shimmer.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-ux-by-reown.js + 3 modules
var wui_ux_by_reown = __webpack_require__(158760);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/styles.js

/* harmony default export */ const w3m_connecting_wc_qrcode_styles = ((0,esm_exports/* css */.AH) `
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({ durations }) => durations['xl']};
    animation-timing-function: ${({ easings }) => easings['ease-out-power-2']};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/index.js
var w3m_connecting_wc_qrcode_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















let W3mConnectingWcQrcode = class W3mConnectingWcQrcode extends W3mConnectingWidget {
    constructor() {
        super();
        this.basic = false;
        this.forceUpdate = () => {
            this.requestUpdate();
        };
        window.addEventListener('resize', this.forceUpdate);
    }
    firstUpdated() {
        if (!this.basic) {
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'SELECT_WALLET',
                properties: {
                    name: this.wallet?.name ?? 'WalletConnect',
                    platform: 'qrcode',
                    displayIndex: this.wallet?.display_index,
                    walletRank: this.wallet?.order,
                    view: RouterController/* RouterController */.I.state.view
                }
            });
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.unsubscribe?.forEach(unsub => unsub());
        window.removeEventListener('resize', this.forceUpdate);
    }
    render() {
        this.onRenderProxy();
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['0', '5', '5', '5']}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
    }
    onRenderProxy() {
        if (!this.ready && this.uri) {
            this.timeout = setTimeout(() => {
                this.ready = true;
            }, 200);
        }
    }
    qrCodeTemplate() {
        if (!this.uri || !this.ready) {
            return null;
        }
        const size = this.getBoundingClientRect().width - 40;
        const alt = this.wallet ? this.wallet.name : undefined;
        ConnectionController/* ConnectionController */.x.setWcLinking(undefined);
        ConnectionController/* ConnectionController */.x.setRecentWallet(this.wallet);
        let uriWithLink = this.uri;
        if (this.wallet?.mobile_link) {
            const { redirect } = CoreHelperUtil/* CoreHelperUtil */.w.formatNativeUrl(this.wallet?.mobile_link, this.uri, null);
            uriWithLink = redirect;
        }
        return (0,lit/* html */.qy) ` <wui-qr-code
      size=${size}
      theme=${ThemeController/* ThemeController */.W.state.themeMode}
      uri=${uriWithLink}
      imageSrc=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getWalletImage(this.wallet))}
      color=${(0,if_defined/* ifDefined */.J)(ThemeController/* ThemeController */.W.state.themeVariables['--w3m-qr-color'])}
      alt=${(0,if_defined/* ifDefined */.J)(alt)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`;
    }
    copyTemplate() {
        const inactive = !this.uri || !this.ready;
        return (0,lit/* html */.qy) `<wui-button
      .disabled=${inactive}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`;
    }
};
W3mConnectingWcQrcode.styles = w3m_connecting_wc_qrcode_styles;
w3m_connecting_wc_qrcode_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mConnectingWcQrcode.prototype, "basic", void 0);
W3mConnectingWcQrcode = w3m_connecting_wc_qrcode_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-wc-qrcode')
], W3mConnectingWcQrcode);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-unsupported/index.js
var w3m_connecting_wc_unsupported_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let W3mConnectingWcUnsupported = class W3mConnectingWcUnsupported extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.wallet = RouterController/* RouterController */.I.state.data?.wallet;
        if (!this.wallet) {
            throw new Error('w3m-connecting-wc-unsupported: No wallet provided');
        }
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.wallet.name,
                platform: 'browser',
                displayIndex: this.wallet?.display_index,
                walletRank: this.wallet?.order,
                view: RouterController/* RouterController */.I.state.view
            }
        });
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['10', '5', '5', '5']}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,if_defined/* ifDefined */.J)(AssetUtil/* AssetUtil */.$.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
    }
};
W3mConnectingWcUnsupported = w3m_connecting_wc_unsupported_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-wc-unsupported')
], W3mConnectingWcUnsupported);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-web/index.js
var w3m_connecting_wc_web_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let W3mConnectingWcWeb = class W3mConnectingWcWeb extends W3mConnectingWidget {
    constructor() {
        super();
        this.isLoading = true;
        if (!this.wallet) {
            throw new Error('w3m-connecting-wc-web: No wallet provided');
        }
        this.onConnect = this.onConnectProxy.bind(this);
        this.secondaryBtnLabel = 'Open';
        this.secondaryLabel = utils_ConstantsUtil/* ConstantsUtil */.oU.CONNECT_LABELS.MOBILE;
        this.secondaryBtnIcon = 'externalLink';
        this.updateLoadingState();
        this.unsubscribe.push(ConnectionController/* ConnectionController */.x.subscribeKey('wcUri', () => {
            this.updateLoadingState();
        }));
        EventsController/* EventsController */.E.sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.wallet.name,
                platform: 'web',
                displayIndex: this.wallet?.display_index,
                walletRank: this.wallet?.order,
                view: RouterController/* RouterController */.I.state.view
            }
        });
    }
    updateLoadingState() {
        this.isLoading = !this.uri;
    }
    onConnectProxy() {
        if (this.wallet?.webapp_link && this.uri) {
            try {
                this.error = false;
                const { webapp_link, name } = this.wallet;
                const { redirect, href } = CoreHelperUtil/* CoreHelperUtil */.w.formatUniversalUrl(webapp_link, this.uri);
                ConnectionController/* ConnectionController */.x.setWcLinking({ name, href });
                ConnectionController/* ConnectionController */.x.setRecentWallet(this.wallet);
                CoreHelperUtil/* CoreHelperUtil */.w.openHref(redirect, '_blank');
            }
            catch {
                this.error = true;
            }
        }
    }
};
w3m_connecting_wc_web_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcWeb.prototype, "isLoading", void 0);
W3mConnectingWcWeb = w3m_connecting_wc_web_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-wc-web')
], W3mConnectingWcWeb);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-view/styles.js

/* harmony default export */ const w3m_connecting_wc_view_styles = ((0,esm_exports/* css */.AH) `
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-view/index.js
var w3m_connecting_wc_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let W3mConnectingWcView = class W3mConnectingWcView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.wallet = RouterController/* RouterController */.I.state.data?.wallet;
        this.unsubscribe = [];
        this.platform = undefined;
        this.platforms = [];
        this.isSiwxEnabled = Boolean(OptionsController/* OptionsController */.H.state.siwx);
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.displayBranding = true;
        this.basic = false;
        this.determinePlatforms();
        this.initializeConnection();
        this.unsubscribe.push(OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => (this.remoteFeatures = val)));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        if (OptionsController/* OptionsController */.H.state.enableMobileFullScreen) {
            this.setAttribute('data-mobile-fullscreen', 'true');
        }
        return (0,lit/* html */.qy) `
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `;
    }
    reownBrandingTemplate() {
        if (!this.remoteFeatures?.reownBranding || !this.displayBranding) {
            return null;
        }
        return (0,lit/* html */.qy) `<wui-ux-by-reown></wui-ux-by-reown>`;
    }
    async initializeConnection(retry = false) {
        if (this.platform === 'browser' || (OptionsController/* OptionsController */.H.state.manualWCControl && !retry)) {
            return;
        }
        try {
            const { wcPairingExpiry, status } = ConnectionController/* ConnectionController */.x.state;
            const { redirectView } = RouterController/* RouterController */.I.state.data ?? {};
            if (retry ||
                OptionsController/* OptionsController */.H.state.enableEmbedded ||
                CoreHelperUtil/* CoreHelperUtil */.w.isPairingExpired(wcPairingExpiry) ||
                status === 'connecting') {
                const connectionsByNamespace = ConnectionController/* ConnectionController */.x.getConnections(ChainController/* ChainController */.W.state.activeChain);
                const isMultiWalletEnabled = this.remoteFeatures?.multiWallet;
                const hasConnections = connectionsByNamespace.length > 0;
                await ConnectionController/* ConnectionController */.x.connectWalletConnect({ cache: 'never' });
                if (!this.isSiwxEnabled) {
                    if (hasConnections && isMultiWalletEnabled) {
                        RouterController/* RouterController */.I.replace('ProfileWallets');
                        SnackController/* SnackController */.P.showSuccess('New Wallet Added');
                    }
                    else if (redirectView) {
                        RouterController/* RouterController */.I.replace(redirectView);
                    }
                    else {
                        ModalController/* ModalController */.W.close();
                    }
                }
            }
        }
        catch (error) {
            if (error instanceof Error &&
                error.message.includes('An error occurred when attempting to switch chain') &&
                !OptionsController/* OptionsController */.H.state.enableNetworkSwitch) {
                if (ChainController/* ChainController */.W.state.activeChain) {
                    ChainController/* ChainController */.W.setActiveCaipNetwork(CaipNetworkUtil/* CaipNetworksUtil */.R.getUnsupportedNetwork(`${ChainController/* ChainController */.W.state.activeChain}:${ChainController/* ChainController */.W.state.activeCaipNetwork?.id}`));
                    ChainController/* ChainController */.W.showUnsupportedChainUI();
                    return;
                }
            }
            const isUserRejectedRequestError = error instanceof withErrorBoundary/* AppKitError */.A &&
                error.originalName === ErrorUtil/* ErrorUtil */.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
            if (isUserRejectedRequestError) {
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: 'USER_REJECTED',
                    properties: { message: error.message }
                });
            }
            else {
                EventsController/* EventsController */.E.sendEvent({
                    type: 'track',
                    event: 'CONNECT_ERROR',
                    properties: { message: error?.message ?? 'Unknown' }
                });
            }
            ConnectionController/* ConnectionController */.x.setWcError(true);
            SnackController/* SnackController */.P.showError(error.message ?? 'Connection error');
            ConnectionController/* ConnectionController */.x.resetWcConnection();
            RouterController/* RouterController */.I.goBack();
        }
    }
    determinePlatforms() {
        if (!this.wallet) {
            this.platforms.push('qrcode');
            this.platform = 'qrcode';
            return;
        }
        if (this.platform) {
            return;
        }
        const { mobile_link, desktop_link, webapp_link, injected, rdns } = this.wallet;
        const injectedIds = injected?.map(({ injected_id }) => injected_id).filter(Boolean);
        const browserIds = [...(rdns ? [rdns] : (injectedIds ?? []))];
        const isBrowser = OptionsController/* OptionsController */.H.state.isUniversalProvider ? false : browserIds.length;
        const hasMobileWCLink = mobile_link;
        const isWebWc = webapp_link;
        const isBrowserInstalled = ConnectionController/* ConnectionController */.x.checkInstalled(browserIds);
        const isBrowserWc = isBrowser && isBrowserInstalled;
        const isDesktopWc = desktop_link && !CoreHelperUtil/* CoreHelperUtil */.w.isMobile();
        if (isBrowserWc && !ChainController/* ChainController */.W.state.noAdapters) {
            this.platforms.push('browser');
        }
        if (hasMobileWCLink) {
            this.platforms.push(CoreHelperUtil/* CoreHelperUtil */.w.isMobile() ? 'mobile' : 'qrcode');
        }
        if (isWebWc) {
            this.platforms.push('web');
        }
        if (isDesktopWc) {
            this.platforms.push('desktop');
        }
        if (!isBrowserWc && isBrowser && !ChainController/* ChainController */.W.state.noAdapters) {
            this.platforms.push('unsupported');
        }
        this.platform = this.platforms[0];
    }
    platformTemplate() {
        switch (this.platform) {
            case 'browser':
                return (0,lit/* html */.qy) `<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
            case 'web':
                return (0,lit/* html */.qy) `<w3m-connecting-wc-web></w3m-connecting-wc-web>`;
            case 'desktop':
                return (0,lit/* html */.qy) `
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-desktop>
        `;
            case 'mobile':
                return (0,lit/* html */.qy) `
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-mobile>
        `;
            case 'qrcode':
                return (0,lit/* html */.qy) `<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;
            default:
                return (0,lit/* html */.qy) `<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
        }
    }
    headerTemplate() {
        const multiPlatform = this.platforms.length > 1;
        if (!multiPlatform) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `;
    }
    async onSelectPlatform(platform) {
        const container = this.shadowRoot?.querySelector('div');
        if (container) {
            await container.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            }).finished;
            this.platform = platform;
            container.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
};
W3mConnectingWcView.styles = w3m_connecting_wc_view_styles;
w3m_connecting_wc_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcView.prototype, "platform", void 0);
w3m_connecting_wc_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcView.prototype, "platforms", void 0);
w3m_connecting_wc_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcView.prototype, "isSiwxEnabled", void 0);
w3m_connecting_wc_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcView.prototype, "remoteFeatures", void 0);
w3m_connecting_wc_view_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mConnectingWcView.prototype, "displayBranding", void 0);
w3m_connecting_wc_view_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], W3mConnectingWcView.prototype, "basic", void 0);
W3mConnectingWcView = w3m_connecting_wc_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-wc-view')
], W3mConnectingWcView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-basic-view/index.js
var w3m_connecting_wc_basic_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let W3mConnectingWcBasicView = class W3mConnectingWcBasicView extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.isMobile = CoreHelperUtil/* CoreHelperUtil */.w.isMobile();
        this.remoteFeatures = OptionsController/* OptionsController */.H.state.remoteFeatures;
        this.unsubscribe.push(OptionsController/* OptionsController */.H.subscribeKey('remoteFeatures', val => (this.remoteFeatures = val)));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        if (this.isMobile) {
            const { featured, recommended } = ApiController/* ApiController */.N.state;
            const { customWallets } = OptionsController/* OptionsController */.H.state;
            const recent = StorageUtil/* StorageUtil */.i.getRecentWallets();
            const showConnectors = featured.length || recommended.length || customWallets?.length || recent.length;
            return (0,lit/* html */.qy) `<wui-flex flexDirection="column" gap="2" .margin=${['1', '3', '3', '3']}>
        ${showConnectors ? (0,lit/* html */.qy) `<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`;
        }
        return (0,lit/* html */.qy) `<wui-flex flexDirection="column" .padding=${['0', '0', '4', '0']}>
        <w3m-connecting-wc-view ?basic=${true} .displayBranding=${false}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${['0', '3', '0', '3']}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `;
    }
    reownBrandingTemplate() {
        if (!this.remoteFeatures?.reownBranding) {
            return null;
        }
        return (0,lit/* html */.qy) ` <wui-flex flexDirection="column" .padding=${['1', '0', '1', '0']}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`;
    }
};
w3m_connecting_wc_basic_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcBasicView.prototype, "isMobile", void 0);
w3m_connecting_wc_basic_view_decorate([
    (0,decorators/* state */.wk)()
], W3mConnectingWcBasicView.prototype, "remoteFeatures", void 0);
W3mConnectingWcBasicView = w3m_connecting_wc_basic_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-connecting-wc-basic-view')
], W3mConnectingWcBasicView);

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(836752);
;// ./node_modules/lit-html/directive-helpers.js

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:t}=lit_html/* _$LH */.ge,i=o=>null===o||"object"!=typeof o&&"function"!=typeof o,n={HTML:1,SVG:2,MATHML:3},e=(o,t)=>void 0===t?void 0!==o?._$litType$:o?._$litType$===t,l=o=>null!=o?._$litType$?.h,d=o=>void 0!==o?._$litDirective$,c=o=>o?._$litDirective$,directive_helpers_f=o=>void 0===o.strings,r=()=>document.createComment(""),s=(o,i,n)=>{const e=o._$AA.parentNode,l=void 0===i?o._$AB:i._$AA;if(void 0===n){const i=e.insertBefore(r(),l),d=e.insertBefore(r(),l);n=new t(i,d,o,o.options)}else{const t=n._$AB.nextSibling,i=n._$AM,d=i!==o;if(d){let t;n._$AQ?.(o),n._$AM=o,void 0!==n._$AP&&(t=o._$AU)!==i._$AU&&n._$AP(t)}if(t!==l||d){let o=n._$AA;for(;o!==t;){const t=o.nextSibling;e.insertBefore(o,l),o=t}}}return n},v=(o,t,i=o)=>(o._$AI(t,i),o),u={},m=(o,t=u)=>o._$AH=t,p=o=>o._$AH,M=o=>{o._$AR(),o._$AA.remove()},h=o=>{o._$AR()};
//# sourceMappingURL=directive-helpers.js.map

// EXTERNAL MODULE: ./node_modules/lit-html/directive.js
var directive = __webpack_require__(207804);
;// ./node_modules/lit-html/async-directive.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const async_directive_s=(i,t)=>{const e=i._$AN;if(void 0===e)return!1;for(const i of e)i._$AO?.(t,!1),async_directive_s(i,t);return!0},o=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t}while(0===e?.size)},async_directive_r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),async_directive_c(t)}};function async_directive_h(i){void 0!==this._$AN?(o(this),this._$AM=i,async_directive_r(this)):this._$AM=i}function async_directive_n(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)async_directive_s(r[i],!1),o(r[i]);else null!=r&&(async_directive_s(r,!1),o(r));else async_directive_s(this,i)}const async_directive_c=i=>{i.type==directive/* PartType */.OA.CHILD&&(i._$AP??=async_directive_n,i._$AQ??=async_directive_h)};class f extends directive/* Directive */.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,e){super._$AT(i,t,e),async_directive_r(this),this.isConnected=i._$AU}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(async_directive_s(this,i),o(this))}setValue(t){if(directive_helpers_f(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}
//# sourceMappingURL=async-directive.js.map

;// ./node_modules/lit-html/directives/ref.js

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ref_e=()=>new ref_h;class ref_h{}const ref_o=new WeakMap,ref_n=(0,directive/* directive */.u$)(class extends f{render(i){return lit_html/* nothing */.s6}update(i,[s]){const e=s!==this.G;return e&&void 0!==this.G&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=s,this.ht=i.options?.host,this.rt(this.ct=i.element)),lit_html/* nothing */.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const i=this.ht??globalThis;let s=ref_o.get(i);void 0===s&&(s=new WeakMap,ref_o.set(i,s)),void 0!==s.get(this.G)&&this.G.call(this.ht,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?ref_o.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});
//# sourceMappingURL=ref.js.map

;// ./node_modules/lit/directives/ref.js

//# sourceMappingURL=ref.js.map

;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-toggle/styles.js

/* harmony default export */ const wui_toggle_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      color ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      border ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      box-shadow ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      width ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      height ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      transform ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      opacity ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ colors }) => colors.neutrals300};
    border-radius: ${({ borderRadius }) => borderRadius.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      color ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      border ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      box-shadow ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      width ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      height ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']},
      transform ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      opacity ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({ colors }) => colors.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({ tokens }) => tokens.core.iconAccentPrimary};
    background-color: ${({ tokens }) => tokens.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({ tokens }) => tokens.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({ tokens }) => tokens.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({ colors }) => colors.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({ colors }) => colors.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({ colors }) => colors.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({ colors }) => colors.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({ colors }) => colors.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({ tokens }) => tokens.theme.textTertiary};
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-toggle/index.js
var wui_toggle_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiToggle = class WuiToggle extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.inputElementRef = ref_e();
        this.checked = false;
        this.disabled = false;
        this.size = 'md';
    }
    render() {
        return (0,lit/* html */.qy) `
      <label data-size=${this.size}>
        <input
          ${ref_n(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `;
    }
    dispatchChangeEvent() {
        this.dispatchEvent(new CustomEvent('switchChange', {
            detail: this.inputElementRef.value?.checked,
            bubbles: true,
            composed: true
        }));
    }
};
WuiToggle.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_toggle_styles];
wui_toggle_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiToggle.prototype, "checked", void 0);
wui_toggle_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiToggle.prototype, "disabled", void 0);
wui_toggle_decorate([
    (0,decorators/* property */.MZ)()
], WuiToggle.prototype, "size", void 0);
WuiToggle = wui_toggle_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-toggle')
], WuiToggle);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-certified-switch/styles.js

/* harmony default export */ const wui_certified_switch_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({ spacing }) => spacing['2']};
    padding: ${({ spacing }) => spacing['2']} ${({ spacing }) => spacing['3']};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius['4']};
    box-shadow: inset 0 0 0 1px ${({ tokens }) => tokens.theme.foregroundPrimary};
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-certified-switch/index.js
var wui_certified_switch_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiCertifiedSwitch = class WuiCertifiedSwitch extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.checked = false;
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `;
    }
    handleToggleChange(event) {
        event.stopPropagation();
        this.checked = event.detail;
        this.dispatchSwitchEvent();
    }
    dispatchSwitchEvent() {
        this.dispatchEvent(new CustomEvent('certifiedSwitchChange', {
            detail: this.checked,
            bubbles: true,
            composed: true
        }));
    }
};
WuiCertifiedSwitch.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_certified_switch_styles];
wui_certified_switch_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiCertifiedSwitch.prototype, "checked", void 0);
WuiCertifiedSwitch = wui_certified_switch_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-certified-switch')
], WuiCertifiedSwitch);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-certified-switch.js

//# sourceMappingURL=wui-certified-switch.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-text/styles.js

/* harmony default export */ const wui_input_text_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({ spacing }) => spacing[3]};
    color: ${({ tokens }) => tokens.theme.textPrimary};
    caret-color: ${({ tokens }) => tokens.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
    caret-color: ${({ tokens }) => tokens.core.textAccentPrimary};
    padding: ${({ spacing }) => spacing[3]} ${({ spacing }) => spacing[3]}
      ${({ spacing }) => spacing[3]} ${({ spacing }) => spacing[10]};
    font-size: ${({ textSize }) => textSize.large};
    line-height: ${({ typography }) => typography['lg-regular'].lineHeight};
    letter-spacing: ${({ typography }) => typography['lg-regular'].letterSpacing};
    font-weight: ${({ fontWeight }) => fontWeight.regular};
    font-family: ${({ fontFamily }) => fontFamily.regular};
  }

  input[data-size='lg'] {
    padding: ${({ spacing }) => spacing[4]} ${({ spacing }) => spacing[3]}
      ${({ spacing }) => spacing[4]} ${({ spacing }) => spacing[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({ tokens }) => tokens.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({ tokens }) => tokens.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({ tokens }) => tokens.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({ tokens }) => tokens.theme.borderSecondary};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({ tokens }) => tokens.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({ spacing }) => spacing[4]};
    color: ${({ tokens }) => tokens.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ spacing }) => spacing[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({ borderRadius }) => borderRadius[2]};
    color: ${({ tokens }) => tokens.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({ tokens }) => tokens.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({ spacing }) => spacing[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-text/index.js
var wui_input_text_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let WuiInputText = class WuiInputText extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.inputElementRef = ref_e();
        this.disabled = false;
        this.loading = false;
        this.placeholder = '';
        this.type = 'text';
        this.value = '';
        this.size = 'md';
    }
    render() {
        return (0,lit/* html */.qy) ` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${ref_n(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,if_defined/* ifDefined */.J)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value || ''}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`;
    }
    templateLeftIcon() {
        if (this.icon) {
            return (0,lit/* html */.qy) `<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`;
        }
        return null;
    }
    templateSubmitButton() {
        if (this.onSubmit) {
            return (0,lit/* html */.qy) `<button
        class="wui-input-text-submit-button ${this.loading ? 'loading' : ''}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled || this.loading}
      >
        ${this.loading
                ? (0,lit/* html */.qy) `<wui-icon name="spinner" size="md"></wui-icon>`
                : (0,lit/* html */.qy) `<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`;
        }
        return null;
    }
    templateError() {
        if (this.errorText) {
            return (0,lit/* html */.qy) `<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`;
        }
        return null;
    }
    templateWarning() {
        if (this.warningText) {
            return (0,lit/* html */.qy) `<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`;
        }
        return null;
    }
    dispatchInputChangeEvent() {
        this.dispatchEvent(new CustomEvent('inputChange', {
            detail: this.inputElementRef.value?.value,
            bubbles: true,
            composed: true
        }));
    }
};
WuiInputText.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_input_text_styles];
wui_input_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "icon", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiInputText.prototype, "disabled", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiInputText.prototype, "loading", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "placeholder", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "type", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "value", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "errorText", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "warningText", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "onSubmit", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)()
], WuiInputText.prototype, "size", void 0);
wui_input_text_decorate([
    (0,decorators/* property */.MZ)({ attribute: false })
], WuiInputText.prototype, "onKeyDown", void 0);
WuiInputText = wui_input_text_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-input-text')
], WuiInputText);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-search-bar/styles.js

/* harmony default export */ const wui_search_bar_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({ spacing }) => spacing[3]};
    color: ${({ tokens }) => tokens.theme.iconDefault};
    cursor: pointer;
    padding: ${({ spacing }) => spacing[2]};
    background-color: transparent;
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    transition: background-color ${({ durations }) => durations['lg']}
      ${({ easings }) => easings['ease-out-power-2']};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-search-bar/index.js
var wui_search_bar_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let WuiSearchBar = class WuiSearchBar extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.inputComponentRef = ref_e();
        this.inputValue = '';
    }
    render() {
        return (0,lit/* html */.qy) `
      <wui-input-text
        ${ref_n(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue
            ? (0,lit/* html */.qy) `<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`
            : null}
      </wui-input-text>
    `;
    }
    onInputChange(event) {
        this.inputValue = event.detail || '';
    }
    clearValue() {
        const component = this.inputComponentRef.value;
        const inputElement = component?.inputElementRef.value;
        if (inputElement) {
            inputElement.value = '';
            this.inputValue = '';
            inputElement.focus();
            inputElement.dispatchEvent(new Event('input'));
        }
    }
};
WuiSearchBar.styles = [ThemeUtil/* resetStyles */.W5, wui_search_bar_styles];
wui_search_bar_decorate([
    (0,decorators/* property */.MZ)()
], WuiSearchBar.prototype, "inputValue", void 0);
WuiSearchBar = wui_search_bar_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-search-bar')
], WuiSearchBar);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-search-bar.js

//# sourceMappingURL=wui-search-bar.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/networkMd.js

const networkSvgMd = (0,lit/* svg */.JW) `<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;
//# sourceMappingURL=networkMd.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-card-select-loader/styles.js

/* harmony default export */ const wui_card_select_loader_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({ spacing }) => spacing[2]};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({ tokens }) => tokens.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-card-select-loader/index.js
var wui_card_select_loader_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let WuiCardSelectLoader = class WuiCardSelectLoader extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.type = 'wallet';
    }
    render() {
        return (0,lit/* html */.qy) `
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `;
    }
    shimmerTemplate() {
        if (this.type === 'network') {
            return (0,lit/* html */.qy) ` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${networkSvgMd}`;
        }
        return (0,lit/* html */.qy) `<wui-shimmer width="56px" height="56px"></wui-shimmer>`;
    }
};
WuiCardSelectLoader.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_card_select_loader_styles];
wui_card_select_loader_decorate([
    (0,decorators/* property */.MZ)()
], WuiCardSelectLoader.prototype, "type", void 0);
WuiCardSelectLoader = wui_card_select_loader_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-card-select-loader')
], WuiCardSelectLoader);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-card-select-loader.js

//# sourceMappingURL=wui-card-select-loader.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js
var UiHelperUtil = __webpack_require__(163612);
;// ./node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-grid/styles.js

/* harmony default export */ const wui_grid_styles = ((0,lit/* css */.AH) `
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-grid/index.js
var wui_grid_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WuiGrid = class WuiGrid extends lit/* LitElement */.WF {
    render() {
        this.style.cssText = `
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap && `var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && UiHelperUtil/* UiHelperUtil */.Z.getSpacingStyles(this.margin, 3)};
    `;
        return (0,lit/* html */.qy) `<slot></slot>`;
    }
};
WuiGrid.styles = [ThemeUtil/* resetStyles */.W5, wui_grid_styles];
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "gridTemplateRows", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "gridTemplateColumns", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "justifyItems", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "alignItems", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "justifyContent", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "alignContent", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "columnGap", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "rowGap", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "gap", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "padding", void 0);
wui_grid_decorate([
    (0,decorators/* property */.MZ)()
], WuiGrid.prototype, "margin", void 0);
WuiGrid = wui_grid_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-grid')
], WuiGrid);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-grid.js

//# sourceMappingURL=wui-grid.js.map
// EXTERNAL MODULE: ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/WalletUtil.js
var WalletUtil = __webpack_require__(665042);
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list-item/styles.js

/* harmony default export */ const w3m_all_wallets_list_item_styles = ((0,esm_exports/* css */.AH) `
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({ spacing }) => spacing['2']};
    padding: ${({ spacing }) => spacing['3']} ${({ spacing }) => spacing['0']};
    background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({ borderRadius }) => borderRadius['4']}, 20px);
    transition:
      color ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-1']},
      background-color ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-1']},
      border-radius ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-1']};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({ tokens }) => tokens.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({ tokens }) => tokens.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({ colors }) => colors.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({ colors }) => colors.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({ colors }) => colors.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list-item/index.js
var w3m_all_wallets_list_item_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let W3mAllWalletsListItem = class W3mAllWalletsListItem extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.observer = new IntersectionObserver(() => undefined);
        this.visible = false;
        this.imageSrc = undefined;
        this.imageLoading = false;
        this.isImpressed = false;
        this.explorerId = '';
        this.walletQuery = '';
        this.certified = false;
        this.displayIndex = 0;
        this.wallet = undefined;
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.visible = true;
                    this.fetchImageSrc();
                    this.sendImpressionEvent();
                }
                else {
                    this.visible = false;
                }
            });
        }, { threshold: 0.01 });
    }
    firstUpdated() {
        this.observer.observe(this);
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    render() {
        const certified = this.wallet?.badge_type === 'certified';
        return (0,lit/* html */.qy) `
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,if_defined/* ifDefined */.J)(certified ? 'certified' : undefined)}
            >${this.wallet?.name}</wui-text
          >
          ${certified ? (0,lit/* html */.qy) `<wui-icon size="sm" name="walletConnectBrown"></wui-icon>` : null}
        </wui-flex>
      </button>
    `;
    }
    imageTemplate() {
        if ((!this.visible && !this.imageSrc) || this.imageLoading) {
            return this.shimmerTemplate();
        }
        return (0,lit/* html */.qy) `
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,if_defined/* ifDefined */.J)(this.imageSrc)}
        name=${(0,if_defined/* ifDefined */.J)(this.wallet?.name)}
        .installed=${this.wallet?.installed ?? false}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `;
    }
    shimmerTemplate() {
        return (0,lit/* html */.qy) `<wui-shimmer width="56px" height="56px"></wui-shimmer>`;
    }
    async fetchImageSrc() {
        if (!this.wallet) {
            return;
        }
        this.imageSrc = AssetUtil/* AssetUtil */.$.getWalletImage(this.wallet);
        if (this.imageSrc) {
            return;
        }
        this.imageLoading = true;
        this.imageSrc = await AssetUtil/* AssetUtil */.$.fetchWalletImage(this.wallet.image_id);
        this.imageLoading = false;
    }
    sendImpressionEvent() {
        if (!this.wallet || this.isImpressed) {
            return;
        }
        this.isImpressed = true;
        EventsController/* EventsController */.E.sendWalletImpressionEvent({
            name: this.wallet.name,
            walletRank: this.wallet.order,
            explorerId: this.explorerId,
            view: RouterController/* RouterController */.I.state.view,
            query: this.walletQuery,
            certified: this.certified,
            displayIndex: this.displayIndex
        });
    }
};
W3mAllWalletsListItem.styles = w3m_all_wallets_list_item_styles;
w3m_all_wallets_list_item_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsListItem.prototype, "visible", void 0);
w3m_all_wallets_list_item_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsListItem.prototype, "imageSrc", void 0);
w3m_all_wallets_list_item_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsListItem.prototype, "imageLoading", void 0);
w3m_all_wallets_list_item_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsListItem.prototype, "isImpressed", void 0);
w3m_all_wallets_list_item_decorate([
    (0,decorators/* property */.MZ)()
], W3mAllWalletsListItem.prototype, "explorerId", void 0);
w3m_all_wallets_list_item_decorate([
    (0,decorators/* property */.MZ)()
], W3mAllWalletsListItem.prototype, "walletQuery", void 0);
w3m_all_wallets_list_item_decorate([
    (0,decorators/* property */.MZ)()
], W3mAllWalletsListItem.prototype, "certified", void 0);
w3m_all_wallets_list_item_decorate([
    (0,decorators/* property */.MZ)()
], W3mAllWalletsListItem.prototype, "displayIndex", void 0);
w3m_all_wallets_list_item_decorate([
    (0,decorators/* property */.MZ)({ type: Object })
], W3mAllWalletsListItem.prototype, "wallet", void 0);
W3mAllWalletsListItem = w3m_all_wallets_list_item_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-all-wallets-list-item')
], W3mAllWalletsListItem);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/styles.js

/* harmony default export */ const w3m_all_wallets_list_styles = ((0,esm_exports/* css */.AH) `
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({ durations }) => durations['xl']};
    animation-timing-function: ${({ easings }) => easings['ease-inout-power-2']};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({ spacing }) => spacing['4']};
    padding-bottom: ${({ spacing }) => spacing['4']};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/index.js
var w3m_all_wallets_list_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










const PAGINATOR_ID = 'local-paginator';
let W3mAllWalletsList = class W3mAllWalletsList extends lit/* LitElement */.WF {
    constructor() {
        super();
        this.unsubscribe = [];
        this.paginationObserver = undefined;
        this.loading = !ApiController/* ApiController */.N.state.wallets.length;
        this.wallets = ApiController/* ApiController */.N.state.wallets;
        this.recommended = ApiController/* ApiController */.N.state.recommended;
        this.featured = ApiController/* ApiController */.N.state.featured;
        this.filteredWallets = ApiController/* ApiController */.N.state.filteredWallets;
        this.mobileFullScreen = OptionsController/* OptionsController */.H.state.enableMobileFullScreen;
        this.unsubscribe.push(...[
            ApiController/* ApiController */.N.subscribeKey('wallets', val => (this.wallets = val)),
            ApiController/* ApiController */.N.subscribeKey('recommended', val => (this.recommended = val)),
            ApiController/* ApiController */.N.subscribeKey('featured', val => (this.featured = val)),
            ApiController/* ApiController */.N.subscribeKey('filteredWallets', val => (this.filteredWallets = val))
        ]);
    }
    firstUpdated() {
        this.initialFetch();
        this.createPaginationObserver();
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        this.paginationObserver?.disconnect();
    }
    render() {
        if (this.mobileFullScreen) {
            this.setAttribute('data-mobile-fullscreen', 'true');
        }
        return (0,lit/* html */.qy) `
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${['0', '3', '3', '3']}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
    }
    async initialFetch() {
        this.loading = true;
        const gridEl = this.shadowRoot?.querySelector('wui-grid');
        if (gridEl) {
            await ApiController/* ApiController */.N.fetchWalletsByPage({ page: 1 });
            await gridEl.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            }).finished;
            this.loading = false;
            gridEl.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
    shimmerTemplate(items, id) {
        return [...Array(items)].map(() => (0,lit/* html */.qy) `
        <wui-card-select-loader type="wallet" id=${(0,if_defined/* ifDefined */.J)(id)}></wui-card-select-loader>
      `);
    }
    getWallets() {
        const wallets = [...this.featured, ...this.recommended];
        if (this.filteredWallets?.length > 0) {
            wallets.push(...this.filteredWallets);
        }
        else {
            wallets.push(...this.wallets);
        }
        const uniqueWallets = CoreHelperUtil/* CoreHelperUtil */.w.uniqueBy(wallets, 'id');
        const walletsWithInstalled = WalletUtil/* WalletUtil */.A.markWalletsAsInstalled(uniqueWallets);
        return WalletUtil/* WalletUtil */.A.markWalletsWithDisplayIndex(walletsWithInstalled);
    }
    walletsTemplate() {
        const wallets = this.getWallets();
        return wallets.map((wallet, index) => (0,lit/* html */.qy) `
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${wallet.id}"
          @click=${() => this.onConnectWallet(wallet)}
          .wallet=${wallet}
          explorerId=${wallet.id}
          certified=${this.badge === 'certified'}
          displayIndex=${index}
        ></w3m-all-wallets-list-item>
      `);
    }
    paginationLoaderTemplate() {
        const { wallets, recommended, featured, count, mobileFilteredOutWalletsLength } = ApiController/* ApiController */.N.state;
        const columns = window.innerWidth < 352 ? 3 : 4;
        const currentWallets = wallets.length + recommended.length;
        const minimumRows = Math.ceil(currentWallets / columns);
        let shimmerCount = minimumRows * columns - currentWallets + columns;
        shimmerCount -= wallets.length ? featured.length % columns : 0;
        if (count === 0 && featured.length > 0) {
            return null;
        }
        if (count === 0 ||
            [...featured, ...wallets, ...recommended].length <
                count - (mobileFilteredOutWalletsLength ?? 0)) {
            return this.shimmerTemplate(shimmerCount, PAGINATOR_ID);
        }
        return null;
    }
    createPaginationObserver() {
        const loaderEl = this.shadowRoot?.querySelector(`#${PAGINATOR_ID}`);
        if (loaderEl) {
            this.paginationObserver = new IntersectionObserver(([element]) => {
                if (element?.isIntersecting && !this.loading) {
                    const { page, count, wallets } = ApiController/* ApiController */.N.state;
                    if (wallets.length < count) {
                        ApiController/* ApiController */.N.fetchWalletsByPage({ page: page + 1 });
                    }
                }
            });
            this.paginationObserver.observe(loaderEl);
        }
    }
    onConnectWallet(wallet) {
        ConnectorController/* ConnectorController */.a.selectWalletConnector(wallet);
    }
};
W3mAllWalletsList.styles = w3m_all_wallets_list_styles;
w3m_all_wallets_list_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsList.prototype, "loading", void 0);
w3m_all_wallets_list_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsList.prototype, "wallets", void 0);
w3m_all_wallets_list_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsList.prototype, "recommended", void 0);
w3m_all_wallets_list_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsList.prototype, "featured", void 0);
w3m_all_wallets_list_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsList.prototype, "filteredWallets", void 0);
w3m_all_wallets_list_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsList.prototype, "badge", void 0);
w3m_all_wallets_list_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsList.prototype, "mobileFullScreen", void 0);
W3mAllWalletsList = w3m_all_wallets_list_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-all-wallets-list')
], W3mAllWalletsList);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-spinner.js

//# sourceMappingURL=wui-loading-spinner.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/styles.js

/* harmony default export */ const w3m_all_wallets_search_styles = ((0,lit/* css */.AH) `
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/index.js
var w3m_all_wallets_search_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let W3mAllWalletsSearch = class W3mAllWalletsSearch extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.prevQuery = '';
        this.prevBadge = undefined;
        this.loading = true;
        this.mobileFullScreen = OptionsController/* OptionsController */.H.state.enableMobileFullScreen;
        this.query = '';
    }
    render() {
        if (this.mobileFullScreen) {
            this.setAttribute('data-mobile-fullscreen', 'true');
        }
        this.onSearch();
        return this.loading
            ? (0,lit/* html */.qy) `<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`
            : this.walletsTemplate();
    }
    async onSearch() {
        if (this.query.trim() !== this.prevQuery.trim() || this.badge !== this.prevBadge) {
            this.prevQuery = this.query;
            this.prevBadge = this.badge;
            this.loading = true;
            await ApiController/* ApiController */.N.searchWallet({ search: this.query, badge: this.badge });
            this.loading = false;
        }
    }
    walletsTemplate() {
        const { search } = ApiController/* ApiController */.N.state;
        const wallets = WalletUtil/* WalletUtil */.A.markWalletsAsInstalled(search);
        if (!search.length) {
            return (0,lit/* html */.qy) `
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;
        }
        return (0,lit/* html */.qy) `
      <wui-grid
        data-testid="wallet-list"
        .padding=${['0', '3', '3', '3']}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${wallets.map((wallet, index) => (0,lit/* html */.qy) `
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(wallet)}
              .wallet=${wallet}
              data-testid="wallet-search-item-${wallet.id}"
              explorerId=${wallet.id}
              certified=${this.badge === 'certified'}
              walletQuery=${this.query}
              displayIndex=${index}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `;
    }
    onConnectWallet(wallet) {
        ConnectorController/* ConnectorController */.a.selectWalletConnector(wallet);
    }
};
W3mAllWalletsSearch.styles = w3m_all_wallets_search_styles;
w3m_all_wallets_search_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsSearch.prototype, "loading", void 0);
w3m_all_wallets_search_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsSearch.prototype, "mobileFullScreen", void 0);
w3m_all_wallets_search_decorate([
    (0,decorators/* property */.MZ)()
], W3mAllWalletsSearch.prototype, "query", void 0);
w3m_all_wallets_search_decorate([
    (0,decorators/* property */.MZ)()
], W3mAllWalletsSearch.prototype, "badge", void 0);
W3mAllWalletsSearch = w3m_all_wallets_search_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-all-wallets-search')
], W3mAllWalletsSearch);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-all-wallets-view/index.js
var w3m_all_wallets_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let W3mAllWalletsView = class W3mAllWalletsView extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.search = '';
        this.badge = undefined;
        this.onDebouncedSearch = CoreHelperUtil/* CoreHelperUtil */.w.debounce((value) => {
            this.search = value;
        });
    }
    render() {
        const isSearch = this.search.length >= 2;
        return (0,lit/* html */.qy) `
      <wui-flex .padding=${['1', '3', '3', '3']} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge === 'certified'}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${isSearch || this.badge
            ? (0,lit/* html */.qy) `<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`
            : (0,lit/* html */.qy) `<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `;
    }
    onInputChange(event) {
        this.onDebouncedSearch(event.detail);
    }
    onCertifiedSwitchChange(event) {
        if (event.detail) {
            this.badge = 'certified';
            SnackController/* SnackController */.P.showSvg('Only WalletConnect certified', {
                icon: 'walletConnectBrown',
                iconColor: 'accent-100'
            });
        }
        else {
            this.badge = undefined;
        }
    }
    qrButtonTemplate() {
        if (CoreHelperUtil/* CoreHelperUtil */.w.isMobile()) {
            return (0,lit/* html */.qy) `
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `;
        }
        return null;
    }
    onWalletConnectQr() {
        RouterController/* RouterController */.I.push('ConnectingWalletConnect');
    }
};
w3m_all_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsView.prototype, "search", void 0);
w3m_all_wallets_view_decorate([
    (0,decorators/* state */.wk)()
], W3mAllWalletsView.prototype, "badge", void 0);
W3mAllWalletsView = w3m_all_wallets_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-all-wallets-view')
], W3mAllWalletsView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-item/styles.js

/* harmony default export */ const wui_list_item_styles = ((0,ThemeHelperUtil/* css */.AH) `
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ spacing }) => spacing[3]};
    width: 100%;
    background-color: ${({ tokens }) => tokens.theme.backgroundPrimary};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    transition:
      background-color ${({ durations }) => durations['lg']}
        ${({ easings }) => easings['ease-out-power-2']},
      scale ${({ durations }) => durations['lg']} ${({ easings }) => easings['ease-out-power-2']};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({ tokens }) => tokens.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({ tokens }) => tokens.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`);
//# sourceMappingURL=styles.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-item/index.js
var wui_list_item_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let WuiListItem = class WuiListItem extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.imageSrc = 'google';
        this.loading = false;
        this.disabled = false;
        this.rightIcon = true;
        this.rounded = false;
        this.fullSize = false;
    }
    render() {
        this.dataset['rounded'] = this.rounded ? 'true' : 'false';
        return (0,lit/* html */.qy) `
      <button
        ?disabled=${this.loading ? true : Boolean(this.disabled)}
        data-loading=${this.loading}
        tabindex=${(0,if_defined/* ifDefined */.J)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `;
    }
    templateLeftIcon() {
        if (this.icon) {
            return (0,lit/* html */.qy) `<wui-image
        icon=${this.icon}
        iconColor=${(0,if_defined/* ifDefined */.J)(this.iconColor)}
        ?boxed=${true}
        ?rounded=${this.rounded}
      ></wui-image>`;
        }
        return (0,lit/* html */.qy) `<wui-image
      ?boxed=${true}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`;
    }
    templateRightIcon() {
        if (!this.rightIcon) {
            return null;
        }
        if (this.loading) {
            return (0,lit/* html */.qy) `<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`;
        }
        return (0,lit/* html */.qy) `<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`;
    }
};
WuiListItem.styles = [ThemeUtil/* resetStyles */.W5, ThemeUtil/* elementStyles */.fD, wui_list_item_styles];
wui_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "imageSrc", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "icon", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "iconColor", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "loading", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)()
], WuiListItem.prototype, "tabIdx", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "disabled", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "rightIcon", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "rounded", void 0);
wui_list_item_decorate([
    (0,decorators/* property */.MZ)({ type: Boolean })
], WuiListItem.prototype, "fullSize", void 0);
WuiListItem = wui_list_item_decorate([
    (0,WebComponentsUtil/* customElement */.E)('wui-list-item')
], WuiListItem);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js

//# sourceMappingURL=wui-list-item.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-downloads-view/index.js
var w3m_downloads_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let W3mDownloadsView = class W3mDownloadsView extends lit/* LitElement */.WF {
    constructor() {
        super(...arguments);
        this.wallet = RouterController/* RouterController */.I.state.data?.wallet;
    }
    render() {
        if (!this.wallet) {
            throw new Error('w3m-downloads-view');
        }
        return (0,lit/* html */.qy) `
      <wui-flex gap="2" flexDirection="column" .padding=${['3', '3', '4', '3']}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
    }
    chromeTemplate() {
        if (!this.wallet?.chrome_store) {
            return null;
        }
        return (0,lit/* html */.qy) `<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`;
    }
    iosTemplate() {
        if (!this.wallet?.app_store) {
            return null;
        }
        return (0,lit/* html */.qy) `<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`;
    }
    androidTemplate() {
        if (!this.wallet?.play_store) {
            return null;
        }
        return (0,lit/* html */.qy) `<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`;
    }
    homepageTemplate() {
        if (!this.wallet?.homepage) {
            return null;
        }
        return (0,lit/* html */.qy) `
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `;
    }
    openStore(params) {
        if (params.href && this.wallet) {
            EventsController/* EventsController */.E.sendEvent({
                type: 'track',
                event: 'GET_WALLET',
                properties: {
                    name: this.wallet.name,
                    walletRank: this.wallet.order,
                    explorerId: this.wallet.id,
                    type: params.type
                }
            });
            CoreHelperUtil/* CoreHelperUtil */.w.openHref(params.href, '_blank');
        }
    }
    onChromeStore() {
        if (this.wallet?.chrome_store) {
            this.openStore({ href: this.wallet.chrome_store, type: 'chrome_store' });
        }
    }
    onAppStore() {
        if (this.wallet?.app_store) {
            this.openStore({ href: this.wallet.app_store, type: 'app_store' });
        }
    }
    onPlayStore() {
        if (this.wallet?.play_store) {
            this.openStore({ href: this.wallet.play_store, type: 'play_store' });
        }
    }
    onHomePage() {
        if (this.wallet?.homepage) {
            this.openStore({ href: this.wallet.homepage, type: 'homepage' });
        }
    }
};
W3mDownloadsView = w3m_downloads_view_decorate([
    (0,esm_exports/* customElement */.EM)('w3m-downloads-view')
], W3mDownloadsView);

//# sourceMappingURL=index.js.map
;// ./node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/basic.js



//# sourceMappingURL=basic.js.map

/***/ }),

/***/ 424357:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(130208)

function NumericData (data) {
  this.mode = Mode.NUMERIC
  this.data = data.toString()
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
}

NumericData.prototype.getLength = function getLength () {
  return this.data.length
}

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
}

NumericData.prototype.write = function write (bitBuffer) {
  let i, group, value

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3)
    value = parseInt(group, 10)

    bitBuffer.put(value, 10)
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  const remainingNum = this.data.length - i
  if (remainingNum > 0) {
    group = this.data.substr(i)
    value = parseInt(group, 10)

    bitBuffer.put(value, remainingNum * 3 + 1)
  }
}

module.exports = NumericData


/***/ }),

/***/ 424861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(130208)
const Utils = __webpack_require__(256886)

function KanjiData (data) {
  this.mode = Mode.KANJI
  this.data = data
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
}

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
}

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
}

KanjiData.prototype.write = function (bitBuffer) {
  let i

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    let value = Utils.toSJIS(this.data[i])

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13)
  }
}

module.exports = KanjiData


/***/ }),

/***/ 497518:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const ECLevel = __webpack_require__(549953)

const EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
]

const EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
]

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}


/***/ }),

/***/ 549953:
/***/ ((__unused_webpack_module, exports) => {

exports.L = { bit: 1 }
exports.M = { bit: 0 }
exports.Q = { bit: 3 }
exports.H = { bit: 2 }

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  const lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
}

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ 581332:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
const PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
}

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
}

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
}

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  const size = data.size
  let points = 0
  let sameCountCol = 0
  let sameCountRow = 0
  let lastCol = null
  let lastRow = null

  for (let row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0
    lastCol = lastRow = null

    for (let col = 0; col < size; col++) {
      let module = data.get(row, col)
      if (module === lastCol) {
        sameCountCol++
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
        lastCol = module
        sameCountCol = 1
      }

      module = data.get(col, row)
      if (module === lastRow) {
        sameCountRow++
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
        lastRow = module
        sameCountRow = 1
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
  }

  return points
}

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  const size = data.size
  let points = 0

  for (let row = 0; row < size - 1; row++) {
    for (let col = 0; col < size - 1; col++) {
      const last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1)

      if (last === 4 || last === 0) points++
    }
  }

  return points * PenaltyScores.N2
}

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  const size = data.size
  let points = 0
  let bitsCol = 0
  let bitsRow = 0

  for (let row = 0; row < size; row++) {
    bitsCol = bitsRow = 0
    for (let col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
    }
  }

  return points * PenaltyScores.N3
}

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  let darkCount = 0
  const modulesCount = data.data.length

  for (let i = 0; i < modulesCount; i++) darkCount += data.data[i]

  const k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

  return k * PenaltyScores.N4
}

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  const size = data.size

  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col))
    }
  }
}

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  const numPatterns = Object.keys(exports.Patterns).length
  let bestPattern = 0
  let lowerPenalty = Infinity

  for (let p = 0; p < numPatterns; p++) {
    setupFormatFunc(p)
    exports.applyMask(p, data)

    // Calculate penalty
    const penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data)

    // Undo previously applied mask
    exports.applyMask(p, data)

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty
      bestPattern = p
    }
  }

  return bestPattern
}


/***/ }),

/***/ 592726:
/***/ ((__unused_webpack_module, exports) => {

function hex2rgba (hex) {
  if (typeof hex === 'number') {
    hex = hex.toString()
  }

  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  let hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F')

  const hexValue = parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {}
  if (!options.color) options.color = {}

  const margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0
    ? 4
    : options.margin

  const width = options.width && options.width >= 21 ? options.width : undefined
  const scale = options.scale || 4

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
}

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
}

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  const scale = exports.getScale(qrSize, opts)
  return Math.floor((qrSize + opts.margin * 2) * scale)
}

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  const size = qr.modules.size
  const data = qr.modules.data
  const scale = exports.getScale(size, opts)
  const symbolSize = Math.floor((size + opts.margin * 2) * scale)
  const scaledMargin = opts.margin * scale
  const palette = [opts.color.light, opts.color.dark]

  for (let i = 0; i < symbolSize; i++) {
    for (let j = 0; j < symbolSize; j++) {
      let posDst = (i * symbolSize + j) * 4
      let pxColor = opts.color.light

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        const iSrc = Math.floor((i - scaledMargin) / scale)
        const jSrc = Math.floor((j - scaledMargin) / scale)
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}


/***/ }),

/***/ 599899:
/***/ ((module) => {

function BitBuffer () {
  this.buffer = []
  this.length = 0
}

BitBuffer.prototype = {

  get: function (index) {
    const bufIndex = Math.floor(index / 8)
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (let i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    const bufIndex = Math.floor(this.length / 8)
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0)
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
    }

    this.length++
  }
}

module.exports = BitBuffer


/***/ }),

/***/ 611433:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(130208)

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
const ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
]

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC
  this.data = data
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
}

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
}

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
}

AlphanumericData.prototype.write = function write (bitBuffer) {
  let i

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11)
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
  }
}

module.exports = AlphanumericData


/***/ }),

/***/ 684565:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(256886)

const G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
const G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
const G15_BCH = Utils.getBCHDigit(G15)

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  const data = ((errorCorrectionLevel.bit << 3) | mask)
  let d = data << 10

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
}


/***/ }),

/***/ 729801:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Mode = __webpack_require__(130208)
const NumericData = __webpack_require__(424357)
const AlphanumericData = __webpack_require__(611433)
const ByteData = __webpack_require__(325822)
const KanjiData = __webpack_require__(424861)
const Regex = __webpack_require__(767044)
const Utils = __webpack_require__(256886)
const dijkstra = __webpack_require__(76320)

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  const segments = []
  let result

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    })
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
  const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
  let byteSegs
  let kanjiSegs

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
    kanjiSegs = []
  }

  const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data
      return acc
    }

    acc.push(curr)
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  const nodes = []
  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i]

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  const table = {}
  const graph = { start: {} }
  let prevNodeIds = ['start']

  for (let i = 0; i < nodes.length; i++) {
    const nodeGroup = nodes[i]
    const currentNodeIds = []

    for (let j = 0; j < nodeGroup.length; j++) {
      const node = nodeGroup[j]
      const key = '' + i + j

      currentNodeIds.push(key)
      table[key] = { node: node, lastCount: 0 }
      graph[key] = {}

      for (let n = 0; n < prevNodeIds.length; n++) {
        const prevNodeId = prevNodeIds[n]

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

          table[prevNodeId].lastCount += node.length
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds
  }

  for (let n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]].end = 0
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  let mode
  const bestMode = Mode.getBestModeForData(data)

  mode = Mode.from(modesHint, bestMode)

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null))
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode))
    }

    return acc
  }, [])
}

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

  const nodes = buildNodes(segs)
  const graph = buildGraph(nodes, version)
  const path = dijkstra.find_path(graph.map, 'start', 'end')

  const optimizedSegs = []
  for (let i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node)
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
}

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
}


/***/ }),

/***/ 731427:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(256886)
const ECCode = __webpack_require__(497518)
const ECLevel = __webpack_require__(549953)
const Mode = __webpack_require__(130208)
const VersionCheck = __webpack_require__(821878)

// Generator polynomial used to encode version information
const G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
const G18_BCH = Utils.getBCHDigit(G18)

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  let totalBits = 0

  segments.forEach(function (data) {
    const reservedBits = getReservedBitsCount(data.mode, version)
    totalBits += reservedBits + data.getBitsLength()
  })

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    const length = getTotalBitsFromDataArray(segments, currentVersion)
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
}

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE

  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
}

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  let seg

  const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

  if (Array.isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0]
  } else {
    seg = data
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
}

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  let d = version << 12

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
  }

  return (version << 12) | d
}


/***/ }),

/***/ 756756:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(592726)

function getColorAttrib (color, attrib) {
  const alpha = color.a / 255
  const str = attrib + '="' + color.hex + '"'

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  let str = cmd + x
  if (typeof y !== 'undefined') str += ' ' + y

  return str
}

function qrToPath (data, size, margin) {
  let path = ''
  let moveBy = 0
  let newRow = false
  let lineLength = 0

  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size)
    const row = Math.floor(i / size)

    if (!col && !newRow) newRow = true

    if (data[i]) {
      lineLength++

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0)

        moveBy = 0
        newRow = false
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength)
        lineLength = 0
      }
    } else {
      moveBy++
    }
  }

  return path
}

exports.render = function render (qrData, options, cb) {
  const opts = Utils.getOptions(options)
  const size = qrData.modules.size
  const data = qrData.modules.data
  const qrcodesize = size + opts.margin * 2

  const bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>'

  const path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>'

  const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"'

  const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" '

  const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n'

  if (typeof cb === 'function') {
    cb(null, svgTag)
  }

  return svgTag
}


/***/ }),

/***/ 767044:
/***/ ((__unused_webpack_module, exports) => {

const numeric = '[0-9]+'
const alphanumeric = '[A-Z $%*+\\-./:]+'
let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
kanji = kanji.replace(/u/g, '\\u')

const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+'

exports.KANJI = new RegExp(kanji, 'g')
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
exports.BYTE = new RegExp(byte, 'g')
exports.NUMERIC = new RegExp(numeric, 'g')
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

const TEST_KANJI = new RegExp('^' + kanji + '$')
const TEST_NUMERIC = new RegExp('^' + numeric + '$')
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
}

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
}

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
}


/***/ }),

/***/ 806421:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

const getSymbolSize = (__webpack_require__(256886).getSymbolSize)

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  const posCount = Math.floor(version / 7) + 2
  const size = getSymbolSize(version)
  const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
  const positions = [size - 7] // Last coord is always (size - 7)

  for (let i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals
  }

  positions.push(6) // First coord is always 6

  return positions.reverse()
}

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  const coords = []
  const pos = exports.getRowColCoords(version)
  const posLength = pos.length

  for (let i = 0; i < posLength; i++) {
    for (let j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) || // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]])
    }
  }

  return coords
}


/***/ }),

/***/ 821878:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
}


/***/ }),

/***/ 887583:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const canPromise = __webpack_require__(91333)

const QRCode = __webpack_require__(890157)
const CanvasRenderer = __webpack_require__(247899)
const SvgRenderer = __webpack_require__(756756)

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  const args = [].slice.call(arguments, 1)
  const argsNum = args.length
  const isLastArgCb = typeof args[argsNum - 1] === 'function'

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts
        opts = undefined
      } else {
        cb = opts
        opts = text
        text = canvas
        canvas = undefined
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text
      text = canvas
      canvas = undefined
    }

    return new Promise(function (resolve, reject) {
      try {
        const data = QRCode.create(text, opts)
        resolve(renderFunc(data, canvas, opts))
      } catch (e) {
        reject(e)
      }
    })
  }

  try {
    const data = QRCode.create(text, opts)
    cb(null, renderFunc(data, canvas, opts))
  } catch (e) {
    cb(e)
  }
}

exports.create = QRCode.create
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
})


/***/ }),

/***/ 890157:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(256886)
const ECLevel = __webpack_require__(549953)
const BitBuffer = __webpack_require__(599899)
const BitMatrix = __webpack_require__(208820)
const AlignmentPattern = __webpack_require__(806421)
const FinderPattern = __webpack_require__(307756)
const MaskPattern = __webpack_require__(581332)
const ECCode = __webpack_require__(497518)
const ReedSolomonEncoder = __webpack_require__(74764)
const Version = __webpack_require__(731427)
const FormatInfo = __webpack_require__(684565)
const Mode = __webpack_require__(130208)
const Segments = __webpack_require__(729801)

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  const size = matrix.size
  const pos = FinderPattern.getPositions(version)

  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0]
    const col = pos[i][1]

    for (let r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (let c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  const size = matrix.size

  for (let r = 8; r < size - 8; r++) {
    const value = r % 2 === 0
    matrix.set(r, 6, value, true)
    matrix.set(6, r, value, true)
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  const pos = AlignmentPattern.getPositions(version)

  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0]
    const col = pos[i][1]

    for (let r = -2; r <= 2; r++) {
      for (let c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  const size = matrix.size
  const bits = Version.getEncodedBits(version)
  let row, col, mod

  for (let i = 0; i < 18; i++) {
    row = Math.floor(i / 3)
    col = i % 3 + size - 8 - 3
    mod = ((bits >> i) & 1) === 1

    matrix.set(row, col, mod, true)
    matrix.set(col, row, mod, true)
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  const size = matrix.size
  const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
  let i, mod

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true)
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true)
    } else {
      matrix.set(size - 15 + i, 8, mod, true)
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true)
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true)
    } else {
      matrix.set(8, 15 - i - 1, mod, true)
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true)
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */
function setupData (matrix, data) {
  const size = matrix.size
  let inc = -1
  let row = size - 1
  let bitIndex = 7
  let byteIndex = 0

  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--

    while (true) {
      for (let c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          let dark = false

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
          }

          matrix.set(row, col - c, dark)
          bitIndex--

          if (bitIndex === -1) {
            byteIndex++
            bitIndex = 7
          }
        }
      }

      row += inc

      if (row < 0 || size <= row) {
        row -= inc
        inc = -inc
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  const buffer = new BitBuffer()

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4)

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

    // add binary data sequence to buffer
    data.write(buffer)
  })

  // Calculate required number of bits
  const totalCodewords = Utils.getSymbolTotalCodewords(version)
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4)
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0)
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
  for (let i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  const dataTotalCodewords = totalCodewords - ecTotalCodewords

  // Total number of blocks
  const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

  // Calculate how many blocks each group should contain
  const blocksInGroup2 = totalCodewords % ecTotalBlocks
  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2

  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

  // Number of EC codewords is the same for both groups
  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  const rs = new ReedSolomonEncoder(ecCount)

  let offset = 0
  const dcData = new Array(ecTotalBlocks)
  const ecData = new Array(ecTotalBlocks)
  let maxDataSize = 0
  const buffer = new Uint8Array(bitBuffer.buffer)

  // Divide the buffer into the required number of blocks
  for (let b = 0; b < ecTotalBlocks; b++) {
    const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize)

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b])

    offset += dataSize
    maxDataSize = Math.max(maxDataSize, dataSize)
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  const data = new Uint8Array(totalCodewords)
  let index = 0
  let i, r

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i]
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i]
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  let segments

  if (Array.isArray(data)) {
    segments = Segments.fromArray(data)
  } else if (typeof data === 'string') {
    let estimatedVersion = version

    if (!estimatedVersion) {
      const rawSegments = Segments.rawSplit(data)

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel)
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40)
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel)

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  const dataBits = createData(version, errorCorrectionLevel, segments)

  // Allocate matrix buffer
  const moduleCount = Utils.getSymbolSize(version)
  const modules = new BitMatrix(moduleCount)

  // Add function modules
  setupFinderPattern(modules, version)
  setupTimingPattern(modules)
  setupAlignmentPattern(modules, version)

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0)

  if (version >= 7) {
    setupVersionInfo(modules, version)
  }

  // Add data codewords
  setupData(modules, dataBits)

  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel))
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules)

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  let errorCorrectionLevel = ECLevel.M
  let version
  let mask

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
    version = Version.from(options.version)
    mask = MaskPattern.from(options.maskPattern)

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc)
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
}


/***/ }),

/***/ 969049:
/***/ ((module) => {

"use strict";


module.exports = function encodeUtf8 (input) {
  var result = []
  var size = input.length

  for (var index = 0; index < size; index++) {
    var point = input.charCodeAt(index)

    if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {
      var second = input.charCodeAt(index + 1)

      if (second >= 0xDC00 && second <= 0xDFFF) {
        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000
        index += 1
      }
    }

    // US-ASCII
    if (point < 0x80) {
      result.push(point)
      continue
    }

    // 2-byte UTF-8
    if (point < 0x800) {
      result.push((point >> 6) | 192)
      result.push((point & 63) | 128)
      continue
    }

    // 3-byte UTF-8
    if (point < 0xD800 || (point >= 0xE000 && point < 0x10000)) {
      result.push((point >> 12) | 224)
      result.push(((point >> 6) & 63) | 128)
      result.push((point & 63) | 128)
      continue
    }

    // 4-byte UTF-8
    if (point >= 0x10000 && point <= 0x10FFFF) {
      result.push((point >> 18) | 240)
      result.push(((point >> 12) & 63) | 128)
      result.push(((point >> 6) & 63) | 128)
      result.push((point & 63) | 128)
      continue
    }

    // Invalid character
    result.push(0xEF, 0xBF, 0xBD)
  }

  return new Uint8Array(result).buffer
}


/***/ })

}]);