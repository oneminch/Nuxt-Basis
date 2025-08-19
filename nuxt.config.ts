import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [join(currentDir, "./app/assets/css/tailwind.css")],

  devtools: { enabled: true },

  modules: [join(currentDir, "./modules/config.ts")],

  alias: {
    "@minch/nuxt-basis/tailwind": join(
      currentDir,
      "./app/assets/css/tailwind.css"
    ),
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
