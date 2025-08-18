import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [join(currentDir, "./app/assets/css/tailwind.css")],

  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils",
  ],

  alias: {
    "@minch/nuxt-base/tailwind": join(
      currentDir,
      "./app/assets/css/tailwind.css"
    ),
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
