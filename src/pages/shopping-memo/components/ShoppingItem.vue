<script setup lang="ts">
import { computed } from 'vue';
import type { ShoppingPresenter } from '../types';
import CategoryBadge from './CategoryBadge.vue';

const props = defineProps<{
  item: ShoppingPresenter
}>()

const classes = computed(() => ({
  [`text-${props.item.pickedClassName}-500 dark:text-${props.item.pickedClassName}-400`]: props.item.pickedClassName
}))

defineEmits<{
  click: [id: number]
}>()
</script>

<template>
  <li class="flex items-center mt-2 mb-2" @click="$emit('click', item.id)">
    <svg
      class="w-3.5 h-3.5 me-2 flex-shrink-0 "
      :class="classes"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
      />
    </svg>
    <CategoryBadge :description="item.categoryLabel"/>
    {{ item.name }}
  </li>
</template>
