<template>
  <div
    class="absolute inset-0 bg-zinc-50 flex flex-col items-center justify-center gap-y-10"
  >
    <div class="flex flex-col items-center justify-center gap-y-4">
      <Icon name="simple-icons:nuxt" class="text-9xl text-nuxt-green" />

      <h1 class="text-5xl font-bold text-zinc-700">Nuxt Basis</h1>

      <p
        class="font-mono py-1 px-5 bg-zinc-800 font-semibold text-nuxt-green rounded-full"
      >
        @minch/nuxt-basis
      </p>
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
      <div class="card">
        <Icon
          name="clarity:blocks-group-solid"
          class="text-2xl text-papaya-500"
        />
        <p>+ More</p>
      </div>
    </div>
  </div>
</template>
