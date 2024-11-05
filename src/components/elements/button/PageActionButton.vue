<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    primary?: boolean;
    size?: "small" | "medium" | "large";
  }>(),
  { primary: false }
);

defineEmits<{
  click: []
}>()

const classes = computed(() => ({
  "bg-red-500 hover:bg-red-600 text-white": props.primary,
  "text-black": !props.primary,
  // [`storybook-button--${props.size || "medium"}`]: true,
}));
</script>

<template>
  <button
    type="button"
    class="w-full border   focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800"
    :class="classes"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
