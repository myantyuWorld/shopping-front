<script setup lang="ts">
import { CardArea, FormArea } from "@/components/card";
import type { ShoppingCategory } from "../types";
import type { FieldEntry } from "vee-validate";

defineProps<{
  errorMessage?: string
  categoryProps?: Record<string, unknown>
  descriptionProps?: Record<string, unknown>
}>()

defineEmits<{
  click: []
}>()
const category = defineModel<string | undefined>('category', { required: true })
const description = defineModel<string | undefined>('description', { required: true })
</script>

<template>
  <CardArea>
    <FormArea>
      <div
        class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700"
      >
        <input
          id="bordered-radio-1"
          type="radio"
          value="food"
          v-model="category"
          name="bordered-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="bordered-radio-1"
          class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >食費</label
        >
      </div>
      <div
        class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700"
      >
        <input
          checked
          id="bordered-radio-2"
          type="radio"
          value="necessity"
          v-model="category"
          name="bordered-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="bordered-radio-2"
          class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >日用品</label
        >
      </div>
    </FormArea>
    <FormArea>
    <div>
      <input
        type="text"
        name="memo"
        id="memo"
        v-model="description"
        placeholder="買い物メモ"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
      {{ errorMessage }}
    </div>
    </FormArea>
    <FormArea>
    <button
      type="submit"
      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      @click="$emit('click')"
    >
      追加
    </button>
    </FormArea>
  </CardArea>
</template>
