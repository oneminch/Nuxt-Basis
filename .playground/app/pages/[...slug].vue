<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(route.path, () =>
  queryCollection("content").path(route.path).first(),
);

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
});
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <ContentRenderer v-if="data" :value="data" />
    <div v-else>Page not found</div>
  </div>
</template>
