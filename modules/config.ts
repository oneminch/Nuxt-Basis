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
  fonts?: boolean;

  /**
   * Enable/disable Icon module
   * @default true
   */
  icon?: boolean;

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
}

export default defineNuxtModule<BaseLayerOptions>({
  meta: {
    name: "@minch/nuxt-base/config",
    configKey: "baseModules",
  },
  defaults: {
    eslint: true,
    fonts: true,
    icon: true,
    image: true,
    testUtils: true,
  },
  async setup(options, nuxt) {
    const modulesToAdd: Array<{ name: string; enabled: boolean }> = [
      { name: "@nuxt/eslint", enabled: options.eslint ?? true },
      { name: "@nuxt/fonts", enabled: options.fonts ?? true },
      { name: "@nuxt/icon", enabled: options.icon ?? true },
      { name: "@nuxt/image", enabled: options.image ?? true },
      { name: "@nuxt/test-utils", enabled: options.testUtils ?? true },
    ];

    for (const module of modulesToAdd) {
      if (module.enabled) {
        try {
          await installModule(module.name);
        } catch (error) {
          console.warn(
            `[@minch/nuxt-base] Could not load ${module.name}:`,
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
          "[@minch/nuxt-base] Enabled modules:",
          enabledModules.join(", "),
        );
      }

      if (disabledModules.length > 0) {
        console.info(
          "[@minch/nuxt-base] Disabled modules:",
          disabledModules.join(", "),
        );
      }
    }
  },
});
