// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://floragabriagues.github.io",
  build: {
    assets: "_astro",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
