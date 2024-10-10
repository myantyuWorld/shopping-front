<script setup lang="ts">
import { useInteract } from "@/features/shopping/list";

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
  ShoppingList

  <div>
    {{ helloMessage }}
  </div>
  <div>
    {{ items }}
  </div>
</template>
