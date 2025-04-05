import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://lamars.io",
  outDir: "./dist",
  build: {
    assets: "assets"
  }
});
