<script setup lang="ts">
import { useInteract } from "@/features/shopping/list";
import ShoppingItem from "../components/ShoppingItem.vue";
import Category from "../components/CategorySwitch.vue";
import { CardArea } from "@/components/card";
import ShoppingRegisterForm from "../components/ShoppingRegisterForm.vue";

const {
  defineField,
  errors,
  helloMessage,
  items,
  // category,
  onClickAdd,
  onClickItemDelete,
  onClickSwitchCategory,
} = useInteract();

const [category, categoryProps] = defineField("category");
const [description, descriptionProps] = defineField("description");
</script>

<template>
  <ShoppingRegisterForm
    v-model:category="category"
    v-model:description="description"
    v-bind:category-props="categoryProps"
    v-bind:description-props="descriptionProps"
    :error-message="errors.description"
    @click="onClickAdd"
  ></ShoppingRegisterForm>
  <CardArea>
    <div>
      <div class="flex mb-3 mt-3">
        <Category name="食費" />
        <div class="m-4"></div>
        <Category name="日用品" />
      </div>
    </div>
  </CardArea>
  <CardArea>
    <ul
      class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400"
      v-for="item in items"
      :key="item.id"
    >
      <ShoppingItem :item="item" @click="onClickItemDelete" />
    </ul>
  </CardArea>
</template>
