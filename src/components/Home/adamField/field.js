/**
 * ADAMFIELD — the hand field behind the closing call to action.
 *
 * Vendored from the design team's ADAMFIELD.html export. Only the engine is
 * kept: the three data-URL blobs it shipped with (the field binary, the glyph
 * atlas and the WebGL-less poster) are written out as real files and passed in
 * by URL instead, and the tuning panel that came with the export is dropped.
 *
 * createAdamField(host, opts) builds its own scroll spacer and sticky pin
 * inside `host` and maps scroll position to the animation. It returns a handle
 * carrying `scroll.pin` (the sticky element), `burstProgress` (0..1 across the
 * explosion) and `destroy()`.
 */

/* eslint-disable */

function I(e, n) {
  let r = 0, a = 0;
  for (; ; ) {
    const s = e[n.at++];
    if (r |= (s & 127) << a, (s & 128) === 0) break;
    a += 7;
  }
  return r >>> 0;
}
function K(e, n) {
  const r = I(e, n);
  return r >>> 1 ^ -(r & 1);
}
const re = (e) => e + 1 >> 1;
function oe(e, n, r) {
  const a = r.length;
  for (let s = 0; s < a; s += 2) {
    const c = e[n + (s >> 1)];
    r[s] = c & 15, s + 1 < a && (r[s + 1] = c >> 4 & 15);
  }
}
function ae(e) {
  const n = e instanceof Uint8Array ? e : new Uint8Array(e), r = new DataView(n.buffer, n.byteOffset, n.byteLength);
  if (r.getUint32(0, !0) !== 1279673409) throw new Error("not an ADFL file");
  const a = r.getUint8(4);
  if (a !== 2) throw new Error(`unsupported ADFL version ${a}`);
  const s = r.getUint16(5, !0), c = r.getUint16(7, !0), u = r.getUint16(9, !0), o = r.getUint8(11), t = r.getUint8(12), d = r.getUint8(13), i = s * c, l = n.subarray(14, 14 + i), _ = new Uint32Array(u), g = { at: 14 + i };
  for (let w = 0; w < u; w++)
    if (_[w] = g.at, w % d === 0)
      g.at += re(i);
    else {
      let E = 0;
      for (; E < i; )
        E += I(n, g), K(n, g);
    }
  return {
    version: a,
    cols: s,
    rows: c,
    frameCount: u,
    fps: o,
    cellPx: t,
    keyInterval: d,
    statics: l,
    offsets: _,
    buf: n,
    byteLength: n.length
  };
}
function ne(e) {
  const n = e.cols * e.rows, r = new Uint8Array(n);
  let a = -1;
  function s(u) {
    const o = { at: e.offsets[u] };
    let t = 0;
    for (; t < n; ) {
      const d = I(e.buf, o), i = K(e.buf, o);
      if (i !== 0) for (let l = 0; l < d; l++) r[t + l] += i;
      t += d;
    }
  }
  function c(u) {
    const o = Math.max(0, Math.min(e.frameCount - 1, u | 0));
    if (o === a) return r;
    const t = o - o % e.keyInterval;
    let d;
    a >= t && a <= o ? d = a + 1 : (oe(e.buf, e.offsets[t], r), d = t + 1);
    for (let i = d; i <= o; i++) s(i);
    return a = o, r;
  }
  return { values: r, seek: c, get frame() {
    return a;
  } };
}
// 16 ASCII slots plus 16 independent block-symbol slots.
const O = { cols: 4, rows: 8 };
function ie(e, n, r) {
  const a = e.length, s = new Uint8Array(a), c = new Uint8Array(a), u = new Uint8Array(a);
  for (let o = 0; o < a; o++)
    s[o] = e[o] & 3, c[o] = e[o] >> 2 & 15, u[o] = e[o] >> 6 & 3;
  return { cols: n, rows: r, mode: s, char: c, rung: u };
}
const se = {
  /**
   * The brand palette: two pinks and white, nothing else.
   *
   * Only two hues are available and they sit 9 L* apart (57 and 66), where the
   * three-rung ladder wants gaps of roughly 20. So this is a two-rung palette --
   * the dark rung carries zero weight rather than being faked with an
   * off-brand purple. Its colour is still set to the main pink so that raising
   * the weight later stays on brand.
   */
  pushBrand: {
    label: "Push brand",
    base: "#090909",
    lattice: "#2A2A34",
    grey: ["#3A3A4A", "#5E5E72", "#8C8CA0", "#B8B8C8", "#E8E8F0", "#FFFFFF"],
    rungs: { dark: "#D548EC", mid: "#D548EC", light: "#D77FEF" }
  },
  pushPink: {
    label: "Push pink",
    base: "#090909",
    lattice: "#2A2A34",
    grey: ["#3A3A4A", "#5E5E72", "#8C8CA0", "#B8B8C8", "#E8E8F0", "#FFFFFF"],
    rungs: { dark: "#5C0969", mid: "#D548EC", light: "#F2C4F7" }
  },
  pushPinkWarm: {
    label: "Push pink, warm",
    base: "#090909",
    lattice: "#2A2A34",
    grey: ["#3A3A4A", "#5E5E72", "#8C8CA0", "#B8B8C8", "#E8E8F0", "#FFFFFF"],
    rungs: { dark: "#630C54", mid: "#D548EC", light: "#FFD3EF" }
  },
  pushPinkPunch: {
    label: "Push pink, punch",
    base: "#090909",
    lattice: "#2A2A34",
    grey: ["#3A3A4A", "#5E5E72", "#8C8CA0", "#B8B8C8", "#E8E8F0", "#FFFFFF"],
    rungs: { dark: "#8A11A0", mid: "#D548EC", light: "#FFA8F2" }
  },
  reference: {
    label: "Reference (control)",
    base: "#090909",
    lattice: "#2A2A34",
    grey: ["#3A3A4A", "#5E5E72", "#8C8CA0", "#B8B8C8", "#E8E8F0", "#FFFFFF"],
    rungs: { dark: "#2B5CE6", mid: "#8C8CA0", light: "#D8F02E" }
  }
}, ue = 0.62, N = 16, le = 4, ce = ["dark", "mid", "light"];
function M(e) {
  const n = e.replace("#", ""), r = parseInt(n.length === 3 ? n.replace(/./g, (a) => a + a) : n, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}
const fe = (e) => {
  const n = e / 255;
  return n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
}, he = (e) => {
  const n = e <= 31308e-7 ? e * 12.92 : 1.055 * Math.pow(e, 0.4166666666666667) - 0.055;
  return Math.round(Math.max(0, Math.min(1, n)) * 255);
};
function z(e, n) {
  const r = [];
  for (let a = 0; a < n; a++) {
    const s = n === 1 ? 0 : a / (n - 1) * (e.length - 1), c = Math.min(e.length - 1, Math.floor(s)), u = Math.min(e.length - 1, c + 1), o = s - c;
    r.push([0, 1, 2].map((t) => he(e[c][t] + (e[u][t] - e[c][t]) * o)));
  }
  return r;
}
function q(e, n = N) {
  const r = typeof e == "string" ? se[e] : e;
  if (!r) throw new Error(`unknown palette preset: ${e}`);
  const a = M(r.lattice), s = (t) => M(t).map(fe), c = [a, ...z(r.grey.map(s), n - 1)], u = s(r.base), o = ce.map((t) => {
    const d = s(r.rungs[t]), i = d.map((l, _) => u[_] + (l - u[_]) * ue);
    return [a, ...z([i, d], n - 1)];
  });
  return { rows: [c, ...o], lattice: a, bg: M(r.base), preset: r };
}
function me(e, n = N) {
  const { rows: r } = q(e, n), a = new Uint8Array(n * r.length * 4);
  return r.forEach((s, c) => {
    for (let u = 0; u < n; u++) {
      const o = (c * n + u) * 4;
      a[o] = s[u][0], a[o + 1] = s[u][1], a[o + 2] = s[u][2], a[o + 3] = 255;
    }
  }), a;
}
const de = `#version 300 es
precision highp float;
out vec2 v_uv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  v_uv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}
`, j = `
uniform vec4 u_rayShape;   // count, phase, power, falloff
uniform vec3 u_rayStar;    // taper, minor amount, sustain

float starField(vec2 d, float r, float burst) {
  float ang = atan(d.y, d.x);

  // Sharpness rises with radius: this is the taper that makes it a star.
  float sharp = u_rayShape.z * (1.0 + r * u_rayStar.x);

  float major = pow(max(0.0, cos(ang * u_rayShape.x + u_rayShape.y)), sharp);
  // Half a period round: points that sit between the main ones, thinner.
  float minor = pow(max(0.0, cos(ang * u_rayShape.x + u_rayShape.y + 3.14159265)), sharp * 2.2);
  float lobes = major + minor * u_rayStar.y;

  // Arms have to clear the mosaic and run to the frame edge, so the wavefront
  // opens well past 1.0 rather than stopping at the burst radius.
  float reach = 0.25 + burst * 2.4;
  float radial = exp(-r * u_rayShape.w) * smoothstep(0.0, 0.03, r) * smoothstep(reach, reach * 0.35, r);

  // Snaps in, holds through the blast, then falls back to a sustain rather than
  // to zero -- the settled state still carries the star.
  float env = smoothstep(0.0, 0.20, burst) * mix(1.0, u_rayStar.z, smoothstep(0.50, 1.0, burst));

  return lobes * radial * env;
}
`, _e = `#version 300 es
precision highp float;
in vec2 v_uv;

uniform vec2 u_touch;
uniform float u_aspect;
uniform float u_burst;

uniform float u_rayGlow;
uniform float u_coreAmount;
uniform float u_coreSize;
uniform float u_whiteout;   // 0..1, how far the flood has gone to solid white
uniform vec3 u_rayTint;

out vec4 fragColor;
${j}

void main() {
  if (u_burst <= 0.0) { fragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }

  vec2 d = (v_uv - u_touch) * vec2(u_aspect, 1.0);
  float r = length(d);

  float star = starField(d, r, u_burst);
  float core = exp(-r * r / max(1e-4, u_coreSize * u_coreSize));
  float env = smoothstep(0.0, 0.20, u_burst);

  // Both hand over to the mosaic as it goes white. Once every cell is a white
  // tile the cells are the light source, and a glow left running on top of them
  // reads as a smear over the grid rather than as part of it.
  float handover = 1.0 - u_whiteout;

  vec3 col = u_rayTint * star * u_rayGlow * handover + vec3(core * u_coreAmount * env * handover);
  fragColor = vec4(col, 1.0);
}
`, be = `#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_src;
uniform float u_threshold;
uniform float u_knee;
out vec4 fragColor;

void main() {
  vec3 c = texture(u_src, v_uv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  // Soft knee, so the bloom ramps in rather than popping at the threshold.
  float w = smoothstep(u_threshold, u_threshold + u_knee, l);
  fragColor = vec4(c * w, 1.0);
}
`, ve = `#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_src;
uniform vec2 u_dir;    // texel-sized step, one axis at a time
out vec4 fragColor;

const float W[5] = float[5](0.227027, 0.194595, 0.121622, 0.054054, 0.016216);

void main() {
  vec3 sum = texture(u_src, v_uv).rgb * W[0];
  for (int i = 1; i < 5; i++) {
    vec2 o = u_dir * float(i) * 1.6;
    sum += texture(u_src, v_uv + o).rgb * W[i];
    sum += texture(u_src, v_uv - o).rgb * W[i];
  }
  fragColor = vec4(sum, 1.0);
}
`, Ee = `#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_src;
uniform float u_texelY;
uniform float u_length;
uniform float u_decay;
out vec4 fragColor;

void main() {
  vec3 sum = texture(u_src, v_uv).rgb;
  float weight = 1.0;
  float total = 1.0;
  for (int i = 1; i <= 24; i++) {
    float o = float(i) * u_texelY * u_length;
    weight *= u_decay;
    sum += texture(u_src, v_uv + vec2(0.0, o)).rgb * weight;
    sum += texture(u_src, v_uv - vec2(0.0, o)).rgb * weight;
    total += weight * 2.0;
  }
  fragColor = vec4(sum / total, 1.0);
}
`, pe = `#version 300 es
precision highp float;
in vec2 v_uv;

uniform sampler2D u_scene;
uniform sampler2D u_bloom;
uniform sampler2D u_streak;

uniform float u_burst;
uniform float u_bloomAmount;
uniform float u_streakAmount;
uniform float u_barrelAmount;
uniform float u_barrelBurst;
uniform float u_zoomBurst;
uniform float u_whiteout;   // 0..1, how far the flood has gone to solid white
uniform float u_bloomEnd;   // bloom multiplier once fully white
uniform float u_blackout;   // 0..1, the fade to black that clears the stage

out vec4 fragColor;

/**
 * Renormalised so the frame corner maps exactly to the texture corner. Without
 * this the corners sample past the edge and CLAMP_TO_EDGE smears the outermost
 * row and column across the sides of the frame.
 */
vec2 barrel(vec2 uv, float amount) {
  vec2 c = uv - 0.5;
  float r2 = dot(c, c);
  return 0.5 + c * (1.0 + amount * r2) / (1.0 + amount * 0.5);
}

void main() {
  vec2 uv = barrel(v_uv, u_barrelAmount + u_barrelBurst * u_burst);
  // Push in with the burst. Shrinking the sampled region never reaches outside
  // the texture, so this needs no renormalisation of its own.
  uv = (uv - 0.5) / (1.0 + u_zoomBurst * u_burst) + 0.5;

  vec3 col = texture(u_scene, uv).rgb;

  // Both fade out into the whiteout. At full white the reference is a clean
  // lattice -- leaving the bloom up fills the gutters and the grid disappears.
  float clear = 1.0 - u_blackout;
  col += texture(u_bloom, uv).rgb * u_bloomAmount * mix(1.0, u_bloomEnd, u_whiteout) * clear;
  col += texture(u_streak, uv).rgb * u_streakAmount * u_burst * (1.0 - u_whiteout) * clear;

  fragColor = vec4(col, 1.0);
}
`, L = (e) => Math.max(e.floodWhiteStart + 1e-3, e.blackoutStart - e.whiteHold), Z = (e) => Math.min(1, Math.max(e.blackoutStart + 1e-3, 1 - e.blackHold)), P = (e, n, r) => {
  const a = (r - e) / Math.max(1e-4, n - e);
  return a <= 0 ? 0 : a >= 1 ? 1 : a * a * (3 - 2 * a);
}, G = {
  /** Cell-level flood, applied in the field shader. */
  floodAmount: 0.34,
  floodReach: 1.55,
  floodSoft: 0.55,
  /** The star as a lift to cell values -- this is the one that reads as mosaic. */
  rayCellBoost: 0.75,
  /**
   * Distance-independent lift toward white. **Off.**
   *
   * It used to run to 1, which pinned every cell to maximum value and flushed
   * the whole frame to a solid white lattice before the fade began. That white
   * was doing no work: the burst peak already reads, and the piece then had to
   * travel white -> grey -> black for no reason. At 0 the tail runs straight
   * from the peak down through grey to background.
   *
   * It is not a subtle control. Even 0.35 is visually indistinguishable from
   * full white at the peak -- the ramp saturates well before the value does --
   * so this is effectively on or off, and it is off.
   *
   * It scales the mode convergence too, in the vertex shader: every cell going
   * solid is part of the whiteout, not a separate stage. Dropping only the lift
   * still left the frame filling with bright squares, which is the same problem
   * with a different name on it.
   */
  floodWhiteout: 0,
  /** Start of the whiteout window. Inert while floodWhiteout is 0. */
  floodWhiteStart: 0.45,
  /**
   * Glyphs collapse into solid tiles of one flat colour -- the lattice. **Off.**
   *
   * Built and rejected. It works exactly as specified: at 1 the frame becomes a
   * uniform grid of dark squares, measured at 81% tile coverage against the
   * mosaic's 53%. But a lattice is only interesting as an *event* -- it reads
   * because a picture turns into a grid. Painting every cell the same colour
   * throws the picture away first, so what arrives is texture with nothing in
   * it: wallpaper, not a moment. It fails for the same reason the white version
   * did, one shade darker.
   *
   * Left switchable rather than deleted -- it is one uniform and one branch, and
   * knowing what it looks like is worth more than the lines it costs.
   *
   * On this 86-frame sequence: 0.647 is frame 73, 0.765 is frame 77.
   */
  tileConverge: 0,
  tileConvergeStart: 0.647,
  tileConvergeEnd: 0.765,
  bloomAmount: 0.95,
  bloomThreshold: 0.55,
  bloomKnee: 0.25,
  bloomRadius: 1.8,
  bloomEnd: 0.12,
  streakAmount: 1.5,
  streakLength: 4,
  streakDecay: 0.9,
  /** Smooth glow behind the cells. Kept low: it is atmosphere, not the star. */
  rayGlow: 0,
  /** Radians the star turns across the burst. */
  raySpin: 4,
  rayCount: 5,
  // one point per lobe
  /** How fast the points narrow with radius. This is what makes it a star. */
  rayTaper: 31.5,
  /** Shorter points bisecting the main ones. */
  rayMinor: 0.26,
  rayPower: 1,
  rayFalloff: 5.15,
  rayPhase: 0.3,
  raySustain: 0.38,
  rayTint: [0.42, 0.6, 1],
  /** Shockwave ring, in cell values. ringEnabled switches it out entirely. */
  ringEnabled: !0,
  ringAmount: 0.55,
  ringSpeed: 2.8,
  ringWidth: 0.035,
  /** Trailing gradient, as a multiple of the leading width. */
  ringTail: 2.9,
  /** Angular irregularity of the wavefront. */
  ringWobble: 0,
  /** The core as cell values -- this is the one that reads as mosaic. */
  coreCellAmount: 1.85,
  coreCellSize: 0.105,
  /** Smooth core kept low: it seeds the bloom, it is not the centre itself. */
  coreAmount: 0.5,
  coreSize: 0.09,
  barrelAmount: 0.02,
  barrelBurst: 0.16,
  /** Push-in across the burst, as a fraction of frame size. */
  zoomBurst: 0.21,
  /**
   * The tail, in burst progress:
   *
   *   .. blackoutStart          the burst floods out to a full-frame mosaic
   *   .. (1 - blackHold)        the mosaic dissolves into the background
   *   .. 1                      hold on background
   *
   * One stage. The mosaic keeps its glyphs and its colour the whole way down
   * and simply goes out -- no white field, no flat lattice. Both of those were
   * attempts to end on a *state*; the ending works better as a disappearance,
   * because the mosaic is the thing worth looking at and neither replacement
   * carried any of it.
   *
   * The fade begins the instant the flood stops growing. It used to start three
   * frames later, and those three static frames were the whole problem: the
   * frame sat still long enough to read as finished, so the fade that followed
   * landed as a cut. Nothing is held before the dissolve now.
   *
   * Burst progress maps to the source frame as (frame - burstFrame) / (last -
   * burstFrame); on this 86-frame sequence with burstFrame 51 that is a span of
   * 34, so the values below land on:
   *
   *   0.647  frame 73   flood complete -- measured flat from here, so the
   *                     dissolve starts on it rather than after it
   *   0.882  frame 81   fully #090909
   *   1.0    frame 85   held black, the stage for the team's copy
   *
   * whiteHold has nothing left to hold and stays 0.
   */
  blackoutStart: 0.647,
  whiteHold: 0,
  blackHold: 0.118,
  /** Light-rung gain during the burst, so the bloom fringe carries colour. */
  burstAccentBoost: 1.4,
  /** Measured from the sequence: the fingertip gap at the last animated frame. */
  touch: [0.496, 0.492]
};
function V(e, n, r) {
  const a = e.createShader(n);
  if (e.shaderSource(a, r), e.compileShader(a), !e.getShaderParameter(a, e.COMPILE_STATUS)) {
    const s = e.getShaderInfoLog(a);
    throw e.deleteShader(a), new Error(`post shader compile failed: ${s}`);
  }
  return a;
}
function C(e, n) {
  const r = e.createProgram(), a = V(e, e.VERTEX_SHADER, de), s = V(e, e.FRAGMENT_SHADER, n);
  if (e.attachShader(r, a), e.attachShader(r, s), e.linkProgram(r), e.deleteShader(a), e.deleteShader(s), !e.getProgramParameter(r, e.LINK_STATUS)) {
    const c = e.getProgramInfoLog(r);
    throw e.deleteProgram(r), new Error(`post program link failed: ${c}`);
  }
  return r;
}
function ge(e, n = {}) {
  const r = n;
  for (const [m, h] of Object.entries(G))
    m in r || (r[m] = h);
  const a = e.getExtension("EXT_color_buffer_float"), s = a ? e.RGBA16F : e.RGBA8, c = a ? e.HALF_FLOAT : e.UNSIGNED_BYTE, u = {
    rays: C(e, _e),
    bright: C(e, be),
    blur: C(e, ve),
    streak: C(e, Ee),
    composite: C(e, pe)
  }, o = {};
  for (const [m, h] of Object.entries(u))
    o[m] = new Proxy({}, {
      get: (v, b) => b in v ? v[b] : v[b] = e.getUniformLocation(h, b)
    });
  const t = e.createVertexArray();
  function d(m, h, v, b) {
    const x = e.createTexture();
    e.bindTexture(e.TEXTURE_2D, x), e.texImage2D(e.TEXTURE_2D, 0, v, m, h, 0, e.RGBA, b, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
    const f = e.createFramebuffer();
    return e.bindFramebuffer(e.FRAMEBUFFER, f), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, x, 0), e.bindFramebuffer(e.FRAMEBUFFER, null), { tex: x, fbo: f, w: m, h };
  }
  let i = null, l = [], _ = [0, 0];
  function g() {
    for (const m of [i, ...l])
      m && (e.deleteTexture(m.tex), e.deleteFramebuffer(m.fbo));
    i = null, l = [];
  }
  function w(m, h) {
    if (_[0] === m && _[1] === h) return;
    g(), _ = [m, h], i = d(m, h, s, c);
    const v = Math.max(1, m >> 1), b = Math.max(1, h >> 1);
    l = [d(v, b, s, c), d(v, b, s, c), d(v, b, s, c)];
  }
  function E(m, h) {
    e.bindFramebuffer(e.FRAMEBUFFER, h ? h.fbo : null), e.viewport(0, 0, h ? h.w : _[0], h ? h.h : _[1]), e.useProgram(m), e.bindVertexArray(t), e.drawArrays(e.TRIANGLES, 0, 3);
  }
  const A = (m, h) => {
    e.activeTexture(e.TEXTURE0 + m), e.bindTexture(e.TEXTURE_2D, h);
  };
  function y(m, h) {
    const [v, b] = _, x = P(r.floodWhiteStart, L(r), h), f = P(r.blackoutStart, Z(r), h);
    e.bindFramebuffer(e.FRAMEBUFFER, i.fbo), e.viewport(0, 0, v, b), e.disable(e.BLEND), m.clear(), e.useProgram(u.rays), e.uniform2f(o.rays.u_touch, r.touch[0], r.touch[1]), e.uniform1f(o.rays.u_aspect, v / b), e.uniform1f(o.rays.u_burst, h), e.uniform1f(o.rays.u_rayGlow, r.rayGlow), e.uniform4f(o.rays.u_rayShape, r.rayCount, r.rayPhase + h * r.raySpin, r.rayPower, r.rayFalloff), e.uniform3f(o.rays.u_rayStar, r.rayTaper, r.rayMinor, r.raySustain), e.uniform1f(o.rays.u_coreAmount, r.coreAmount), e.uniform1f(o.rays.u_coreSize, r.coreSize), e.uniform1f(o.rays.u_whiteout, x), e.uniform3f(o.rays.u_rayTint, r.rayTint[0], r.rayTint[1], r.rayTint[2]), e.enable(e.BLEND), e.blendFunc(e.ONE, e.ONE), E(u.rays, i), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA), e.bindFramebuffer(e.FRAMEBUFFER, i.fbo), e.viewport(0, 0, v, b), m.draw(), e.disable(e.BLEND), A(0, i.tex), e.useProgram(u.bright), e.uniform1i(o.bright.u_src, 0), e.uniform1f(o.bright.u_threshold, r.bloomThreshold), e.uniform1f(o.bright.u_knee, r.bloomKnee), E(u.bright, l[0]), e.useProgram(u.blur), e.uniform1i(o.blur.u_src, 0);
    const p = [r.bloomRadius / l[0].w, r.bloomRadius / l[0].h];
    let S = l[0], F = l[1];
    for (let D = 0; D < 2; D++)
      A(0, S.tex), e.uniform2f(o.blur.u_dir, p[0], 0), E(u.blur, F), A(0, F.tex), e.uniform2f(o.blur.u_dir, 0, p[1]), E(u.blur, S);
    const k = S;
    A(0, k.tex), e.useProgram(u.streak), e.uniform1i(o.streak.u_src, 0), e.uniform1f(o.streak.u_texelY, 1 / k.h), e.uniform1f(o.streak.u_length, r.streakLength), e.uniform1f(o.streak.u_decay, r.streakDecay), E(u.streak, l[2]), A(0, i.tex), A(1, k.tex), A(2, l[2].tex), e.useProgram(u.composite), e.uniform1i(o.composite.u_scene, 0), e.uniform1i(o.composite.u_bloom, 1), e.uniform1i(o.composite.u_streak, 2), e.uniform1f(o.composite.u_burst, h), e.uniform1f(o.composite.u_bloomAmount, r.bloomAmount), e.uniform1f(o.composite.u_streakAmount, r.streakAmount), e.uniform1f(o.composite.u_barrelAmount, r.barrelAmount), e.uniform1f(o.composite.u_barrelBurst, r.barrelBurst), e.uniform1f(o.composite.u_zoomBurst, r.zoomBurst), e.uniform1f(o.composite.u_whiteout, x), e.uniform1f(o.composite.u_bloomEnd, r.bloomEnd), e.uniform1f(o.composite.u_blackout, f), E(u.composite, null), e.bindVertexArray(null), e.enable(e.BLEND);
  }
  return {
    config: r,
    resize: w,
    render: y,
    destroy() {
      g();
      for (const m of Object.values(u)) e.deleteProgram(m);
      e.deleteVertexArray(t);
    }
  };
}
const Te = `#version 300 es
precision highp float;

in vec2 a_corner;      // unit quad, 0..1
in uint a_static;      // mode (2 bits) | charIndex (4 bits) | accentRung (2 bits)

uniform ivec2 u_grid;
uniform sampler2D u_values;

uniform vec2 u_touch;
uniform float u_aspect;
uniform float u_burst;
uniform vec3 u_flood;     // amount, reach, softness
uniform float u_rayCellBoost;
uniform vec2 u_coreCell;   // amount, radius
uniform float u_accentMin; // value at or above which an accent rung is allowed
uniform vec2 u_fit;        // cover scale, so cells stay square on any aspect
uniform vec3 u_ring;       // amount, speed, width
uniform vec2 u_ring2;      // trailing tail length, angular wobble
uniform vec3 u_floodWhite; // amount, start, end
uniform vec3 u_converge;   // amount, start, end -- glyphs collapsing into tiles
${j}

flat out uint v_mode;
flat out uint v_char;
flat out uint v_row;   // palette LUT row: 0 base, 1 accent A, 2 accent B
flat out float v_value;
flat out float v_white;   // 0..1, how far this cell has converged to a solid tile
out vec2 v_uv;

float floodBoost(vec2 cellNorm) {
  if (u_burst <= 0.0) return 0.0;

  vec2 d = (cellNorm - u_touch) * vec2(u_aspect, 1.0);
  float r = length(d);

  float wave = u_burst * u_flood.y;
  float inside = 1.0 - smoothstep(wave - u_flood.z, wave, r);
  float falloff = 1.0 - clamp(r / max(0.001, u_flood.y), 0.0, 1.0);

  float boost = u_flood.x * u_burst * inside * (0.35 + 0.65 * falloff);

  // The star as a lift to cell values, so the arms are quantised into the same
  // glyphs and tiles as everything else rather than laid over them as a glow.
  boost += u_rayCellBoost * starField(d, r, u_burst);

  // Shockwave: a bright band racing ahead of the flood. The flood alone only
  // swells; the ring gives the burst one legible moment of impact. It outruns
  // the wavefront on purpose, then fades before the whiteout takes over.
  float ringR = u_ring.y * u_burst;
  // Not a perfect circle: two low harmonics push the wavefront out of register
  // so it reads as something propagating rather than a drawn ring.
  float ringAng = atan(d.y, d.x);
  ringR *= 1.0 + u_ring2.y * (0.6 * cos(ringAng * 3.0 + 0.9) + 0.4 * cos(ringAng * 5.0 - 2.1));

  // Tight leading edge, long gradient trailing back toward the centre -- a wave
  // has a front and a wake, a symmetric band just looks like a stroke.
  float delta = r - ringR;
  float ringW = delta > 0.0 ? u_ring.z : u_ring.z * u_ring2.x;
  float band = delta / max(1e-4, ringW);
  boost += u_ring.x * exp(-band * band)
         * smoothstep(0.0, 0.08, u_burst)
         * (1.0 - smoothstep(0.60, 1.0, u_burst));

  // The hot centre, as cell values too. Left as a smooth glow it sat over the
  // mosaic as a blob; going through the value makes it white tiles like
  // everything else, and the spinning arms sweep real cells rather than light.
  boost += u_coreCell.x * exp(-r * r / max(1e-4, u_coreCell.y * u_coreCell.y))
         * smoothstep(0.0, 0.20, u_burst);

  // Whiteout: distance-independent, so the frame ends on solid white rather
  // than on a bright blob with dark corners.
  boost += u_floodWhite.x * smoothstep(u_floodWhite.y, u_floodWhite.z, u_burst);

  return boost;
}

void main() {
  int cx = gl_InstanceID % u_grid.x;
  int cy = gl_InstanceID / u_grid.x;

  v_mode = a_static & 3u;
  v_char = (a_static >> 2u) & 15u;
  uint rung = (a_static >> 6u) & 3u;

  // Every cell collapses from its glyph into a solid tile: the lattice.
  //
  // Its own control, on its own window. It used to ride on the whiteout, which
  // conflated two things that are not the same -- filling the frame with light
  // and turning marks into squares. Coupled that way, a lattice was only
  // available as a *white* lattice. Separated, it can run underneath the fade
  // to black instead, which is where it actually belongs: the tiles form while
  // they are already darkening, so the ending is a black lattice.
  v_white = clamp(u_converge.x * smoothstep(u_converge.y, u_converge.z, u_burst), 0.0, 1.0);

  vec2 cellNorm = (vec2(float(cx), float(cy)) + 0.5) / vec2(u_grid);
  float value = texelFetch(u_values, ivec2(cx, cy), 0).r * 255.0;
  v_value = clamp(value + floodBoost(cellNorm) * 15.0, 0.0, 15.0);

  // Colour is gated on the animating value, not baked: an accent cell only
  // takes its hue once it is bright enough. Keeps colour out of the dim outer
  // fringe, and means colour blooms in as the piece intensifies.
  v_row = (rung != 0u && v_value >= u_accentMin) ? rung : 0u;

  // Cover fit: one axis is 1.0, the other overflows, so the cell pitch is the
  // same in both directions whatever the container aspect. Stretching to fill
  // would make cells rectangular as soon as the viewport is not 1440x750.
  vec2 cell = (vec2(float(cx), float(cy)) + a_corner) / vec2(u_grid);
  vec2 ndc = vec2(cell.x * 2.0 - 1.0, 1.0 - cell.y * 2.0) * u_fit;
  gl_Position = vec4(ndc, 0.0, 1.0);
  v_uv = a_corner;
}
`, we = `#version 300 es
precision highp float;

flat in uint v_mode;
flat in uint v_char;
flat in uint v_row;
flat in float v_value;
flat in float v_white;
in vec2 v_uv;

uniform sampler2D u_atlas;
uniform sampler2D u_lut;
uniform ivec2 u_atlasGrid;
uniform float u_tileScale;
uniform float u_fontScale;
uniform float u_dotScale;
uniform float u_lightBoost;  // light-rung gain, so the burst carries colour outward
uniform float u_colorDrain;  // 0..1, how far accents have handed back to the grey ramp
uniform float u_inkGamma;    // <1 lifts mid values toward white, raising contrast
uniform float u_blackout;    // 0..1, the fade to black that clears the stage
uniform vec3 u_bg;           // page background, the colour the field resolves to

out vec4 fragColor;

/** Antialiased square, sized as a fraction of the cell. */
float boxMask(vec2 uv, float scale) {
  vec2 d = abs(uv - 0.5);
  vec2 edge = vec2(scale * 0.5);
  vec2 soft = fwidth(uv) * 0.75;
  vec2 m = smoothstep(edge + soft, edge - soft, d);
  return m.x * m.y;
}

float glyphAlpha(vec2 uv, uint index, float scale) {
  vec2 g = (uv - 0.5) / scale + 0.5;
  // Outside the glyph box entirely: never sample, so neighbouring atlas slots
  // cannot bleed in through filtering.
  if (g.x < 0.0 || g.x > 1.0 || g.y < 0.0 || g.y > 1.0) return 0.0;
  vec2 slot = vec2(float(int(index) % u_atlasGrid.x), float(int(index) / u_atlasGrid.x));
  return texture(u_atlas, (slot + g) / vec2(u_atlasGrid)).r;
}

void main() {
  int value = int(v_value + 0.5);

  // Value 0 in every ramp row is the lattice colour, so one fetch serves both
  // the dim dot grid and the lattice.
  vec3 latticeInk = texelFetch(u_lut, ivec2(0, 0), 0).rgb;

  if (value <= 0) {
    // An unlit cell still paints its tile once the field is collapsing into the
    // grid. This is what makes the ending a *full* lattice: without it only the
    // cells the burst actually reached square off, which reads as scattered
    // blocks rather than as a grid.
    if (v_white > 0.002) {
      float la = boxMask(v_uv, u_tileScale) * v_white;
      if (la <= 0.002) discard;
      fragColor = vec4(mix(latticeInk, u_bg, u_blackout), la);
      return;
    }
    // Off means off. A zero scale alone is not enough: boxMask still returns a
    // non-zero centre sample at a sub-pixel edge width, which leaves a faint
    // speckle exactly where the grid used to be.
    if (u_dotScale <= 0.0) discard;
    // The dim grid: a faint dot in every unlit cell, across the whole frame.
    float m = boxMask(v_uv, u_dotScale);
    if (m <= 0.002) discard;
    fragColor = vec4(mix(latticeInk, u_bg, u_blackout), m);
    return;
  }

  // Tone curve on the ramp lookup only, not on v_value: the accent gate keeps
  // reading the true value, so brightness and colour stay independent controls.
  int shaded = int(pow(float(value) / 15.0, u_inkGamma) * 15.0 + 0.5);
  vec3 ink = texelFetch(u_lut, ivec2(shaded, int(v_row)), 0).rgb;
  // Push the light rung above the bright-pass threshold during the burst, so
  // the bloom fringe carries the accent outward instead of washing to white.
  if (v_row == 3u) ink *= u_lightBoost;

  // Rung ramps top out at their hue, not at white, so without this the settled
  // frame keeps a scatter of tinted cells in an otherwise white lattice. Hand
  // the colour back to the grey ramp as the whiteout arrives.
  if (v_row != 0u && u_colorDrain > 0.0) {
    ink = mix(ink, texelFetch(u_lut, ivec2(shaded, 0), 0).rgb, u_colorDrain);
  }

  float tile = boxMask(v_uv, u_tileScale);
  float a;
  if (v_mode == 0u) {
    a = glyphAlpha(v_uv, v_char, u_fontScale);
  } else {
    // The lower half of the editable atlas is reserved for block symbols,
    // keeping them independently editable from the ASCII character set.
    float blockGlyph = glyphAlpha(v_uv, v_char + 16u, u_fontScale);
    a = v_mode == 1u ? blockGlyph : tile * (1.0 - blockGlyph);
  }
  a = mix(a, tile, v_white);
  // Lit cells settle to the same colour the unlit ones paint, so the grid that
  // forms is uniform rather than the burst's brightness pattern in square form.
  ink = mix(ink, latticeInk, v_white);

  // Resolve to the page background rather than to zero. Fading ink to pure
  // black left the tiles darker than the background, so the last frame kept a
  // faint inverted lattice instead of going flat.
  ink = mix(ink, u_bg, u_blackout);

  if (a <= 0.002) discard;
  fragColor = vec4(ink, a);
}
`, J = {
  tileScale: 0.71,
  fontScale: 0.6,
  dotScale: 0.2,
  /**
   * The faint dot in every unlit cell. Off: it filled the empty background with
   * a visible lattice, and the field is meant to sit on plain black. Left as a
   * toggle rather than deleted, since it is one uniform.
   */
  dots: !1,
  /** How much of the dot grid the burst takes away. 1 = gone entirely. */
  dotFade: 1,
  /** Tone curve on the colour ramp. Below 1 lifts mid values toward white. */
  inkGamma: 0.4,
  /** 'cover' keeps cells square and lets the grid overflow; 'stretch' fills exactly. */
  fit: "cover",
  /** Value at or above which an accent cell renders in its rung colour. */
  accentMinValue: 7,
  /** How much accent colour the whiteout removes. 1 = the frame settles pure white. */
  colorDrain: 1,
  palette: "pushBrand"
};
function H(e, n, r) {
  const a = e.createShader(n);
  if (e.shaderSource(a, r), e.compileShader(a), !e.getShaderParameter(a, e.COMPILE_STATUS)) {
    const s = e.getShaderInfoLog(a);
    throw e.deleteShader(a), new Error(`shader compile failed: ${s}`);
  }
  return a;
}
function Ae(e, n, r) {
  const a = e.createProgram(), s = H(e, e.VERTEX_SHADER, n), c = H(e, e.FRAGMENT_SHADER, r);
  if (e.attachShader(a, s), e.attachShader(a, c), e.linkProgram(a), e.deleteShader(s), e.deleteShader(c), !e.getProgramParameter(a, e.LINK_STATUS)) {
    const u = e.getProgramInfoLog(a);
    throw e.deleteProgram(a), new Error(`program link failed: ${u}`);
  }
  return a;
}
function ye(e, n) {
  const r = { ...J, ...n }, { cols: a, rows: s, statics: c, atlas: u } = r, o = r.burst ?? { ...G }, t = e.getContext("webgl2", {
    alpha: !1,
    antialias: !1,
    depth: !1,
    stencil: !1,
    powerPreference: "high-performance"
  });
  if (!t) throw new Error("WebGL2 unavailable");
  const d = Ae(t, Te, we);
  t.useProgram(d);
  const i = (T) => t.getUniformLocation(d, T), l = {
    grid: i("u_grid"),
    values: i("u_values"),
    atlas: i("u_atlas"),
    lut: i("u_lut"),
    atlasGrid: i("u_atlasGrid"),
    tileScale: i("u_tileScale"),
    fontScale: i("u_fontScale"),
    dotScale: i("u_dotScale"),
    touch: i("u_touch"),
    aspect: i("u_aspect"),
    burst: i("u_burst"),
    flood: i("u_flood"),
    rayShape: i("u_rayShape"),
    rayStar: i("u_rayStar"),
    rayCellBoost: i("u_rayCellBoost"),
    coreCell: i("u_coreCell"),
    accentMin: i("u_accentMin"),
    fit: i("u_fit"),
    inkGamma: i("u_inkGamma"),
    blackout: i("u_blackout"),
    bg: i("u_bg"),
    lightBoost: i("u_lightBoost"),
    colorDrain: i("u_colorDrain"),
    ring: i("u_ring"),
    ring2: i("u_ring2"),
    floodWhite: i("u_floodWhite"),
    converge: i("u_converge")
  }, _ = t.createVertexArray();
  t.bindVertexArray(_);
  const g = t.createBuffer();
  t.bindBuffer(t.ARRAY_BUFFER, g), t.bufferData(t.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), t.STATIC_DRAW);
  const w = t.getAttribLocation(d, "a_corner");
  t.enableVertexAttribArray(w), t.vertexAttribPointer(w, 2, t.FLOAT, !1, 0, 0);
  const E = t.createBuffer();
  t.bindBuffer(t.ARRAY_BUFFER, E), t.bufferData(t.ARRAY_BUFFER, c, t.STATIC_DRAW);
  const A = t.getAttribLocation(d, "a_static");
  t.enableVertexAttribArray(A), t.vertexAttribIPointer(A, 1, t.UNSIGNED_BYTE, 0, 0), t.vertexAttribDivisor(A, 1), t.bindVertexArray(null), t.pixelStorei(t.UNPACK_ALIGNMENT, 1);
  const y = t.createTexture();
  t.bindTexture(t.TEXTURE_2D, y), t.texStorage2D(t.TEXTURE_2D, 1, t.R8, a, s), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
  const m = t.createTexture();
  t.bindTexture(t.TEXTURE_2D, m), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, u), t.generateMipmap(t.TEXTURE_2D), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR_MIPMAP_LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
  const h = t.createTexture();
  t.bindTexture(t.TEXTURE_2D, h), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
  let v = [0, 0, 0], b = 0;
  function x(T) {
    r.palette = T, t.bindTexture(t.TEXTURE_2D, h), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, N, le, 0, t.RGBA, t.UNSIGNED_BYTE, me(T)), v = q(T).bg.map((R) => R / 255);
  }
  x(r.palette), t.useProgram(d), t.uniform2i(l.grid, a, s), t.uniform2i(l.atlasGrid, O.cols, O.rows), t.uniform1i(l.values, 0), t.uniform1i(l.atlas, 1), t.uniform1i(l.lut, 2), t.disable(t.DEPTH_TEST), t.enable(t.BLEND), t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
  function f(T) {
    t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, y), t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, a, s, t.RED, t.UNSIGNED_BYTE, T);
  }
  function p(T = Math.min(2, window.devicePixelRatio || 1)) {
    const R = Math.max(1, Math.round(e.clientWidth * T)), U = Math.max(1, Math.round(e.clientHeight * T));
    return e.width === R && e.height === U ? !1 : (e.width = R, e.height = U, !0);
  }
  function S() {
    t.clearColor(v[0], v[1], v[2], 1), t.clear(t.COLOR_BUFFER_BIT);
  }
  function F(T = !0) {
    T && S(), t.enable(t.BLEND), t.useProgram(d), t.bindVertexArray(_), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, y), t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, m), t.activeTexture(t.TEXTURE2), t.bindTexture(t.TEXTURE_2D, h), t.uniform1f(l.tileScale, r.tileScale), t.uniform1f(l.fontScale, r.fontScale);
    const R = Math.max(0, Math.min(1, b / 0.35)), U = 1 - r.dotFade * (R * R * (3 - 2 * R));
    if (t.uniform1f(l.dotScale, r.dots ? r.dotScale * U : 0), t.uniform1f(l.accentMin, r.accentMinValue), t.uniform1f(l.inkGamma, r.inkGamma), r.fit === "stretch")
      t.uniform2f(l.fit, 1, 1);
    else {
      const W = Math.max(e.width / a, e.height / s);
      t.uniform2f(l.fit, W * a / e.width, W * s / e.height);
    }
    const X = Math.min(1, o.floodWhiteout) * P(o.floodWhiteStart, L(o), b);
    t.uniform1f(l.colorDrain, X * r.colorDrain), t.uniform1f(l.blackout, P(o.blackoutStart, Z(o), b)), t.uniform3f(l.bg, v[0], v[1], v[2]), t.uniform1f(l.lightBoost, 1 + (o.burstAccentBoost - 1) * b * (1 - X)), t.uniform2f(l.touch, o.touch[0], o.touch[1]), t.uniform1f(l.aspect, e.width / Math.max(1, e.height)), t.uniform1f(l.burst, b), t.uniform3f(l.flood, o.floodAmount, o.floodReach, o.floodSoft);
    const te = o.rayPhase + b * o.raySpin;
    t.uniform4f(l.rayShape, o.rayCount, te, o.rayPower, o.rayFalloff), t.uniform3f(l.rayStar, o.rayTaper, o.rayMinor, o.raySustain), t.uniform1f(l.rayCellBoost, o.rayCellBoost), t.uniform2f(l.coreCell, o.coreCellAmount, o.coreCellSize), t.uniform3f(l.ring, o.ringEnabled ? o.ringAmount : 0, o.ringSpeed, o.ringWidth), t.uniform2f(l.ring2, o.ringTail, o.ringWobble), t.uniform3f(l.floodWhite, o.floodWhiteout, o.floodWhiteStart, L(o)), t.uniform3f(l.converge, o.tileConverge, o.tileConvergeStart, o.tileConvergeEnd), t.drawArraysInstanced(t.TRIANGLE_STRIP, 0, 4, a * s), t.bindVertexArray(null);
  }
  function k() {
    t.bindFramebuffer(t.FRAMEBUFFER, null), t.viewport(0, 0, e.width, e.height), F();
  }
  function D(T) {
    t.bindBuffer(t.ARRAY_BUFFER, E), t.bufferData(t.ARRAY_BUFFER, T, t.STATIC_DRAW);
  }
  function Q(T) {
    t.bindTexture(t.TEXTURE_2D, m), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, T), t.generateMipmap(t.TEXTURE_2D);
  }
  function ee() {
    t.deleteProgram(d), t.deleteVertexArray(_), t.deleteBuffer(g), t.deleteBuffer(E), t.deleteTexture(y), t.deleteTexture(m), t.deleteTexture(h);
  }
  return {
    gl: t,
    config: r,
    burst: o,
    setValues: f,
    setStatics: D,
    setAtlas: Q,
    setPalette: x,
    setBurst(T) {
      b = Math.max(0, Math.min(1, T));
    },
    get burstProgress() {
      return b;
    },
    resize: p,
    clearField: S,
    drawField: F,
    render: k,
    destroy: ee
  };
}
const B = {
  /** Scroll distance, in viewport heights, on top of the pinned viewport. */
  length: 3,
  /** Fraction of the scroll spent on the approach. */
  motionSplit: 0.62,
  /**
   * null fills the pinned viewport. {width, height} instead centres a box of
   * that aspect, which is how a boxed hero sits on a page -- and it keeps the
   * canvas aspect equal to the grid aspect, so cells land exactly square.
   */
  stage: null
}, Q = (e) => e < 0 ? 0 : e > 1 ? 1 : e;
function Y(e, { motionEnd: n, lastFrame: r, motionSplit: a = B.motionSplit }) {
  const s = Q(e);
  if (s <= a) return s / a * n;
  const c = (s - a) / Math.max(1e-6, 1 - a);
  return n + c * (r - n);
}
function xe(e, n, r, a = {}) {
  const s = { ...B, ...a }, c = document.createElement("div");
  c.style.cssText = `position:relative;width:100%;height:${(1 + s.length) * 100}vh`;
  const u = document.createElement("div");
  if (u.style.cssText = "position:sticky;top:0;width:100%;height:100vh;overflow:hidden", s.stage) {
    const { width: l, height: _ } = s.stage;
    u.style.display = "grid", u.style.placeItems = "center", n.style.cssText = `display:block;width:min(${l}px, 100vw);aspect-ratio:${l} / ${_};height:auto;max-height:100vh`;
  } else
    n.style.cssText = "display:block;width:100%;height:100%";
  u.appendChild(n), c.appendChild(u), e.appendChild(c);
  let o = !1;
  function t() {
    const l = c.getBoundingClientRect(), _ = l.height - window.innerHeight;
    return _ <= 0 ? 0 : Q(-l.top / _);
  }
  function d() {
    o = !1, r(t());
  }
  function i() {
    o || (o = !0, requestAnimationFrame(d));
  }
  return window.addEventListener("scroll", i, { passive: !0 }), window.addEventListener("resize", i, { passive: !0 }), d(), {
    spacer: c,
    pin: u,
    get progress() {
      return t();
    },
    refresh: d,
    destroy() {
      window.removeEventListener("scroll", i), window.removeEventListener("resize", i), c.remove();
    }
  };
}
const Re = {
  bin: "/adamfield.bin",
  atlas: "/glyphs.png",
  poster: null,
  post: !0,
  /** Frame the burst begins on. Everything after it is procedural. */
  burstFrame: 51,
  /** Last source frame with any movement in it; the scroll timeline splits here. */
  motionEnd: 60,
  /** false, or scroll options -- see SCROLL_DEFAULTS. true takes the defaults. */
  scroll: !1,
  ...J
};
function Se() {
  try {
    return !!document.createElement("canvas").getContext("webgl2");
  } catch {
    return !1;
  }
}
async function Fe(e) {
  const n = new Image();
  return e.startsWith("data:") || (n.crossOrigin = "anonymous"), n.src = e, await n.decode(), n;
}
async function ke(e) {
  const n = await fetch(e);
  if (!n.ok) throw new Error(`${e}: ${n.status}`);
  return ae(new Uint8Array(await n.arrayBuffer()));
}
function $(e, n) {
  if (!n) return null;
  const r = document.createElement("img");
  return r.src = n, r.alt = "", r.style.cssText = "display:block;width:100%;height:100%;object-fit:cover", e.appendChild(r), { poster: !0, destroy: () => r.remove() };
}
async function Ce(e, n = {}) {
  const r = { ...Re, ...n }, a = { ...G, ...n.burst ?? {} };
  if (!Se()) return $(e, r.poster);
  const s = document.createElement("canvas");
  s.style.cssText = "display:block;width:100%;height:100%", r.scroll || e.appendChild(s);
  const c = (f) => {
    s.remove();
    const p = $(e, r.poster);
    if (p) return p;
    throw f;
  };
  let u, o;
  try {
    [u, o] = await Promise.all([ke(r.bin), Fe(r.atlas)]);
  } catch (f) {
    return c(f);
  }
  const t = ne(u), d = ie(u.statics, u.cols, u.rows);
  let i, l;
  try {
    i = ye(s, {
      cols: u.cols,
      rows: u.rows,
      statics: u.statics,
      atlas: o,
      burst: a,
      tileScale: r.tileScale,
      fontScale: r.fontScale,
      dotScale: r.dotScale,
      palette: r.palette
    }), r.post && (l = ge(i.gl, a));
  } catch (f) {
    return c(f);
  }
  let _ = -1, g = 0, w = !0, E = 0;
  function A() {
    E = 0, i.resize(), l ? (l.resize(s.width, s.height), l.render({ clear: () => i.clearField(), draw: () => i.drawField(!1) }, g)) : i.render();
  }
  function y() {
    E || (E = requestAnimationFrame(A));
  }
  function m(f) {
    return g = Math.max(0, Math.min(1, f)), i.setBurst(g), y(), g;
  }
  function h(f) {
    const p = Math.max(1, u.frameCount - 1 - r.burstFrame);
    return Math.max(0, Math.min(1, (f - r.burstFrame) / p));
  }
  function v(f) {
    const p = Math.max(0, Math.min(u.frameCount - 1, Math.round(f)));
    return p !== _ && (_ = p, i.setValues(t.seek(p))), w ? m(h(p)) : y(), _;
  }
  const b = () => y();
  window.addEventListener("resize", b);
  let x = null;
  if (r.scroll) {
    const f = { ...B, ...r.scroll === !0 ? {} : r.scroll };
    x = xe(
      e,
      s,
      (p) => v(Y(p, { motionEnd: r.motionEnd, lastFrame: u.frameCount - 1, motionSplit: f.motionSplit })),
      f
    );
  }
  return v(0), {
    canvas: s,
    doc: u,
    statics: d,
    burst: a,
    scroll: x,
    frameCount: u.frameCount,
    fps: u.fps,
    /** Frame index for a 0..1 timeline position -- the same map scroll uses. */
    frameForProgress: (f) => Y(f, { motionEnd: r.motionEnd, lastFrame: u.frameCount - 1, motionSplit: r.scroll && r.scroll.motionSplit || B.motionSplit }),
    get frame() {
      return _;
    },
    get burstProgress() {
      return g;
    },
    setFrame: v,
    setBurst(f) {
      return w = !1, m(f);
    },
    /** Hand burst timing back to the frame index. */
    autoBurst(f = !0) {
      w = f, f && m(h(_));
    },
    setBurstFrame(f) {
      r.burstFrame = f, w && m(h(_));
    },
    setPalette(f) {
      i.setPalette(f), y();
    },
    /** Swap in locally generated statics; for the debug panel, not for production. */
    setStatics(f) {
      i.setStatics(f), y();
    },
    setAtlas(f) {
      i.setAtlas(f), y();
    },
    set(f, p) {
      f in i.config ? i.config[f] = p : a[f] = p, y();
    },
    requestRender: y,
    /** Synchronous draw. Needed to read the canvas back before it is composited. */
    renderNow: A,
    destroy() {
      x?.destroy(), window.removeEventListener("resize", b), E && cancelAnimationFrame(E), l?.destroy(), i.destroy(), i.gl.getExtension("WEBGL_lose_context")?.loseContext(), s.remove();
    }
  };
}

export { Ce as createAdamField };
