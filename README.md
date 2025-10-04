# Docs for Nuxt Basis

@minch/nuxt-basis is a base layer for Nuxt Projects that provides a pre-configured setup with Nuxt 4, Tailwind CSS 4, and additional modules.

## Features

- Pre-configured modules:
  - [@nuxt/eslint](https://github.com/nuxt/eslint) - ESLint integration
  - [@nuxt/content](https://content.nuxt.com/) - Content management
  - [@nuxt/image](https://image.nuxt.com/) - Image optimization
  - [@nuxt/test-utils](https://nuxt.com/docs/getting-started/testing) - Testing utilities
  - [@nuxt/ui](https://ui.nuxt.com/) - UI components
- Built-in TailwindCSS 4 configuration
- TypeScript support
- DevTools enabled by default

## Installation

To create a new Nuxt project based on this layer:

```bash
pnpm create nuxt --template gh:oneminch/nuxt-basis/.starter
```

To add to an existing Nuxt project:

```bash
pnpm add -D @minch/nuxt-basis
```

## Usage

1. Add the layer to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  extends: ["@minch/nuxt-basis"],
});
```

2. (Optional) Configure modules in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  extends: ["@minch/nuxt-basis"],
  baseModules: {
    eslint: true, // Enable/disable ESLint module
    content: true, // Enable/disable Content module
    image: true, // Enable/disable Image module
    testUtils: true, // Enable/disable Test Utils module
    ui: true, // Enable/disable UI module
  },
});
```

All modules are enabled by default. Set any option to `false` to disable that module.

## TailwindCSS Integration

This layer includes TailwindCSS by default. You can import the base styles in your project:

```ts
// In your CSS file
@import '@minch/nuxt-basis/tailwind';
```

## Development

The `.playground` directory contains an example implementation of this layer.

```bash
# Install dependencies
pnpm install

# Develop with the playground
pnpm dev

# Build the playground
pnpm build

# Generate static playground
pnpm generate

# Preview the build
pnpm preview
```
