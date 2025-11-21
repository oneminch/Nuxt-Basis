import { defineNuxtModule, installModule } from "@nuxt/kit";

export interface BaseLayerOptions {
  /**
   * Enable/disable ESLint module
   * @default true
   */
  eslint?: boolean;

  /**
   * Enable/disable Fonts module
   * @default true
   */
  content?: boolean;

  /**
   * Enable/disable Image module
   * @default true
   */
  image?: boolean;

  /**
   * Enable/disable Test Utils module
   * @default true
   */
  testUtils?: boolean;

  /**
   * Enable/disable UI module
   * @default true
   */
  ui?: boolean;
}

export default defineNuxtModule<BaseLayerOptions>({
  meta: {
    name: "@minch/nuxt-basis/config",
    configKey: "baseModules",
  },
  defaults: {
    ui: true,
    content: true,
    image: true,
    testUtils: true,
    eslint: true,
  },
  async setup(options, nuxt) {
    const modulesToAdd: Array<{ name: string; enabled: boolean }> = [
      { name: "@nuxt/ui", enabled: options.ui ?? true },
      { name: "@nuxt/image", enabled: options.image ?? true },
      { name: "@nuxt/test-utils", enabled: options.testUtils ?? true },
      { name: "@nuxt/eslint", enabled: options.eslint ?? true },
      { name: "@nuxt/content", enabled: options.content ?? true },
    ];

    for (const module of modulesToAdd) {
      if (module.enabled) {
        try {
          await installModule(module.name);
        } catch (error) {
          console.warn(
            `[@minch/nuxt-basis] Could not load ${module.name}:`,
            error,
          );
        }
      }
    }

    // Log which modules are enabled/disabled (dev only)
    if (nuxt.options.dev) {
      const enabledModules = modulesToAdd
        .filter((m) => m.enabled)
        .map((m) => m.name);

      const disabledModules = modulesToAdd
        .filter((m) => !m.enabled)
        .map((m) => m.name);

      if (enabledModules.length > 0) {
        console.info(
          "[@minch/nuxt-basis] Enabled modules:",
          enabledModules.join(", "),
        );
      }

      if (disabledModules.length > 0) {
        console.info(
          "[@minch/nuxt-basis] Disabled modules:",
          disabledModules.join(", "),
        );
      }
    }
  },
});
