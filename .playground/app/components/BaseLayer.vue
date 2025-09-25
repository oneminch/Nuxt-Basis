<template>
  <div
    class="absolute inset-0 flex flex-col items-center justify-center gap-y-10"
  >
    <div class="flex flex-col items-center justify-center gap-y-4">
      <Icon name="simple-icons:nuxt" class="text-9xl text-nuxt-green" />

      <h1 class="text-5xl font-bold text-zinc-700">Nuxt Basis</h1>

      <div class="flex items-center gap-x-4">
        <UButton to="/docs" variant="subtle" class="rounded-full py-2 px-4"
          >Docs 📄</UButton
        >

        <USeparator orientation="vertical" class="h-5" />

        <slot />
      </div>
    </div>

    <div class="flex items-center justify-between gap-x-4">
      <div class="card">
        <Icon name="simple-icons:nuxt" class="text-2xl text-nuxt-green" />
        <p>Nuxt</p>
      </div>
      <div class="card">
        <Icon
          name="simple-icons:tailwindcss"
          class="text-2xl text-tailwind-blue"
        />
        <p>Tailwind CSS</p>
      </div>
      <UPopover mode="hover">
        <div class="card">
          <Icon
            name="clarity:blocks-group-solid"
            class="text-2xl text-papaya-500"
          />
          <p>+ More</p>
        </div>

        <template #content>
          <ul class="py-3 px-5 text-muted">
            <li><pre>ESLint</pre></li>
            <li><pre>Nuxt Content</pre></li>
            <li><pre>Nuxt Image</pre></li>
            <li><pre>Nuxt Test Utils</pre></li>
            <li><pre>Nuxt UI</pre></li>
          </ul>
        </template>
      </UPopover>
    </div>
  </div>
</template>
