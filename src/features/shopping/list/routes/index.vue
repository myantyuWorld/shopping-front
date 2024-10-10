<script setup lang="ts">
import { useInteract } from "@/features/shopping/list";
import ShoppingItem from "../components/ShoppingItem.vue";
import Category from "../components/Category.vue";

const {
  helloMessage,
  items,
  category,
  onClickAdd,
  onClickItemDelete,
  onClickSwitchCategory,
} = useInteract();
</script>

<template>
  <div>買い物メモ</div>
  <div>
    <div class="flex mb-3 mt-3">
      <Category name="食費" />
      <div class="m-4"></div>
      <Category name="日用品" />
    </div>
    <ul
      class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400"
      v-for="item in items"
      :key="item.id"
    >
      <ShoppingItem :item="item" @click="onClickItemDelete" />
    </ul>
  </div>
</template>
