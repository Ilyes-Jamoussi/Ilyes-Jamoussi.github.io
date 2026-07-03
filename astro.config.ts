import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ilyes-jamoussi.github.io",
  integrations: [sitemap()],
  build: {
    // Single-page site: inlining the stylesheet removes the only
    // render-blocking request.
    inlineStylesheets: "always",
  },
});
