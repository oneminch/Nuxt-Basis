# @minch/nuxt-base

A Base Layer for Nuxt Projects (Nuxt 4, Tailwind CSS 4, & Additional Modules).

## Working on the layer

The `.playground` directory should help you on trying your layer during development.

Running `pnpm dev` will prepare and boot `.playground` directory, which imports your layer itself.

## Distributing your layer

This Nuxt layer can be published on NPM.

To do so, you only have to check if `files` in `package.json` are valid, then run:

```bash
npm publish --access public
```

Once done, users will only have to run:

```bash
npm install --save @minch/nuxt-base
```

Then add the dependency to their `extends` in `nuxt.config`:

```ts
defineNuxtConfig({
  extends: "@minch/nuxt-base",
});
```
