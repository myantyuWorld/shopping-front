<script setup lang="ts">
import { computed, provide } from "vue";
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
const layout = computed(() => route.meta.layout);

provide('message', 'hello')
</script>
<!-- from cdn -->

<template>
  <div class="container mx-auto py-4">
    <Component :is="layout">
      <RouterView />
    </Component>
  </div>
</template>
