/**
 * Glyph-raster player.
 *
 * The design team's export ships a 464KB engine plus an 886KB inline base64
 * payload. Only the capture-playback half of that engine is needed here, and
 * the encoding it uses is simple enough to read directly, so this draws the
 * frames itself: gunzip to a byte stream, two cells per byte (high nibble
 * first), row-major, `blank` meaning the cell draws nothing and anything else
 * indexing into the ramp.
 *
 * The payload is served as a real gzip file and inflated with the platform's
 * own DecompressionStream, so none of it passes through the JS bundle.
 */

const BASE = '/assets/website/home/agentic-scale';

async function loadPlane(baseUrl) {
  const [meta, res] = await Promise.all([
    fetch(`${baseUrl}/glyph-raster.meta.json`).then((r) => r.json()),
    fetch(`${baseUrl}/glyph-raster.bin.gz`),
  ]);

  // The file is stored gzipped rather than relying on transport encoding, so
  // it is inflated here regardless of how the host served it.
  const stream = res.body.pipeThrough(new DecompressionStream('gzip'));
  const packed = new Uint8Array(await new Response(stream).arrayBuffer());

  const { cols, rows, frames } = meta;
  const perFrame = rows * cols;
  const cells = new Uint8Array(frames * perFrame);
  for (let i = 0; i < cells.length; i++) {
    const byte = packed[i >> 1];
    cells[i] = (i & 1) === 0 ? byte >> 4 : byte & 15;
  }

  return { meta, cells };
}

/**
 * @param {HTMLCanvasElement} canvas
 * @param {{baseUrl?: string, dprCap?: number}} [options]
 * @returns {Promise<{destroy():void, pause():void, resume():void}>}
 */
export async function createGlyphRaster(canvas, options = {}) {
  const { meta, cells } = await loadPlane(options.baseUrl || BASE);
  const ctx = canvas.getContext('2d');
  const dprCap = options.dprCap || 2;

  const { cols, rows, frames, blank, fps, ramp, ink } = meta;
  const glyphs = Array.from(ramp);
  const perFrame = rows * cols;
  const frameMs = 1000 / fps;

  let width = 0;
  let height = 0;
  let cellW = 0;
  let cellH = 0;
  let raf = 0;
  let dead = false;
  let frame = 0;
  let last = 0;

  const resize = () => {
    const host = canvas.parentElement;
    const w = host ? host.clientWidth : 0;
    const h = host ? host.clientHeight : 0;
    if (!w || !h) return;

    width = w;
    height = h;
    const ratio = Math.min(window.devicePixelRatio || 1, dprCap);
    canvas.width = Math.round(w * ratio);
    canvas.height = Math.round(h * ratio);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    // Cover the box while honouring the capture's cell aspect — cells are
    // taller than they are wide (0.7), so square cells would stretch the whole
    // field vertically. Solve for the cell width that covers on each axis and
    // take the larger, cropping the overflow like the static artwork did.
    const aspect = meta.cellAspect || 1;
    cellW = Math.max(w / cols, h / (rows * aspect));
    cellH = cellW * aspect;
    draw();
  };

  const draw = () => {
    if (!width || !height) return;
    ctx.clearRect(0, 0, width, height);

    const offsetX = (width - cols * cellW) / 2;
    const offsetY = (height - rows * cellH) / 2;
    ctx.font = `${Math.round(cellH * 0.9)}px ${meta.fontStack}`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    const base = frame * perFrame;
    let cursor = base;
    for (let r = 0; r < rows; r++) {
      const y = offsetY + r * cellH + cellH / 2;
      if (y < -cellH || y > height + cellH) {
        cursor += cols;
        continue;
      }
      for (let c = 0; c < cols; c++) {
        const level = cells[cursor++];
        if (level === blank) continue;
        ctx.fillStyle = ink[level] || ink[ink.length - 1];
        ctx.fillText(glyphs[level] || '', offsetX + c * cellW + cellW / 2, y);
      }
    }
  };

  const tick = (now) => {
    if (dead) return;
    if (now - last >= frameMs) {
      last = now;
      frame = (frame + 1) % frames;
      draw();
    }
    raf = requestAnimationFrame(tick);
  };

  const observer =
    typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
  if (observer && canvas.parentElement) observer.observe(canvas.parentElement);
  else window.addEventListener('resize', resize);

  resize();

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced) {
    last = performance.now();
    raf = requestAnimationFrame(tick);
  }

  return {
    pause() {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    },
    resume() {
      if (!raf && !dead && !reduced) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    },
    destroy() {
      dead = true;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      if (observer) observer.disconnect();
      else window.removeEventListener('resize', resize);
    },
  };
}
