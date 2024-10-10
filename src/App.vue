<script setup lang="ts">
import { computed, provide } from "vue";
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
const layout = computed(() => route.meta.layout);

// TODO : AppProviderを定義して、fetchMe呼び出しして、User情報を提供する
provide('userName', 'name')
</script>
<!-- from cdn -->

<template>
  <div class="container mx-auto py-4">
    <Component :is="layout">
      <RouterView />
    </Component>
  </div>
</template>
