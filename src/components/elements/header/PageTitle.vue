<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
<template>
  <h1
    class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-3"
  >
    {{ title }}
  </h1>

  <!-- ページの説明を記載したい場合のslot -->
  <slot></slot>
</template>
