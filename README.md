# @minch/nuxt-base

A Base Layer for Nuxt Projects (Nuxt 4, Tailwind CSS 4, & Additional Modules).

## Working on the layer

The `.playground` directory should help you on trying your layer during development.

Running `pnpm dev` will prepare and boot `.playground` directory, which imports your layer itself.

## Usage

```bash
npm install --save-dev @minch/nuxt-base
```

Then add the dependency to their `extends` in `nuxt.config`:

```ts
defineNuxtConfig({
  extends: ["@minch/nuxt-base"],
});
```
