/**
 * Generates the social/OG image, favicon, and apple-touch-icon at build time.
 *
 * Pipeline: satori (layout + fonts → SVG with glyph paths) → resvg (SVG → PNG).
 * Runs before `astro dev` / `astro build`; outputs land in public/ and are
 * gitignored.
 */
import { readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import type { ReactNode } from "react";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const require = createRequire(import.meta.url);

// Satori accepts React-element-shaped plain objects; this helper builds them
// without pulling React itself into the project.
function el(
  type: string,
  props: Record<string, unknown>,
  ...children: readonly ReactNode[]
): ReactNode {
  return {
    type,
    props: {
      ...props,
      children: children.length === 1 ? children[0] : children,
    },
    key: null,
  } as ReactNode;
}

async function font(pkgPath: string): Promise<Buffer> {
  return readFile(require.resolve(pkgPath));
}

const [inter400, inter500, sourceSerif600] = await Promise.all([
  font("@fontsource/inter/files/inter-latin-400-normal.woff"),
  font("@fontsource/inter/files/inter-latin-500-normal.woff"),
  font("@fontsource/source-serif-4/files/source-serif-4-latin-600-normal.woff"),
]);

const ink = "#111114";
const paper = "#fbfbf9";
const secondary = "#ababb4";
const accent = "#93a7ff";

async function renderPng(
  node: ReactNode,
  width: number,
  height: number,
): Promise<Buffer> {
  const svg = await satori(node, {
    width,
    height,
    fonts: [
      { name: "Inter", data: inter400, weight: 400, style: "normal" },
      { name: "Inter", data: inter500, weight: 500, style: "normal" },
      {
        name: "Source Serif 4",
        data: sourceSerif600,
        weight: 600,
        style: "normal",
      },
    ],
  });
  const resvg = new Resvg(svg, { fitTo: { mode: "width", value: width } });
  return resvg.render().asPng();
}

// --- OG image (1200 × 630) ------------------------------------------------

const ogNode = el(
  "div",
  {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: ink,
      padding: "72px 80px",
      fontFamily: "Inter",
    },
  },
  el(
    "div",
    { style: { display: "flex", flexDirection: "column" } },
    el(
      "div",
      {
        style: {
          color: secondary,
          fontSize: 26,
          letterSpacing: 2,
          textTransform: "uppercase",
        },
      },
      "Software engineering · Polytechnique Montréal",
    ),
    el(
      "div",
      {
        style: {
          color: paper,
          fontFamily: "Source Serif 4",
          fontSize: 96,
          fontWeight: 600,
          marginTop: 28,
          letterSpacing: -1,
        },
      },
      "Ilyes Jamoussi",
    ),
    el(
      "div",
      {
        style: {
          color: secondary,
          fontSize: 34,
          marginTop: 32,
          lineHeight: 1.4,
          maxWidth: 900,
        },
      },
      "ML systems built from scratch in PyTorch — shipped like production software.",
    ),
  ),
  el(
    "div",
    { style: { color: accent, fontSize: 28, fontWeight: 500 } },
    "ilyes-jamoussi.github.io",
  ),
);

// --- Monogram (favicon + apple-touch-icon) --------------------------------

function monogram(radius: number, fontSize: number): ReactNode {
  return el(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: ink,
        borderRadius: radius,
        color: paper,
        fontFamily: "Source Serif 4",
        fontSize,
        fontWeight: 600,
      },
    },
    "IJ",
  );
}

const og = await renderPng(ogNode, 1200, 630);
await writeFile(path.join(publicDir, "og.png"), og);

const touchIcon = await renderPng(monogram(36, 92), 180, 180);
await writeFile(path.join(publicDir, "apple-touch-icon.png"), touchIcon);

const faviconSvg = await satori(monogram(13, 34), {
  width: 64,
  height: 64,
  fonts: [
    {
      name: "Source Serif 4",
      data: sourceSerif600,
      weight: 600,
      style: "normal",
    },
  ],
});
await writeFile(path.join(publicDir, "favicon.svg"), faviconSvg);

console.log(
  "Generated public/og.png, public/apple-touch-icon.png, public/favicon.svg",
);
