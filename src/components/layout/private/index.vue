<script setup lang="ts">
import { inject, onMounted, ref } from "vue"
defineOptions({ inheritAttrs: false, name: "PublicLayout" });

// const userName = inject("userName")
</script>

<template>
  <div id="wrapper">
    <ul class="flex justify-center bg-indigo-950/75 p-3">
      <li class="mr-6">
        <RouterLink
              :to="{ name: 'memo' }"
              class="text-blue-500 hover:text-blue-800"
            >memo</RouterLink>
      </li>
      <li class="mr-6">
        <a class="text-gray-400 cursor-not-allowed" href="#">{{ userName }}</a>
      </li>
    </ul>
    <aside
      id="default-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="md:h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li>
            <RouterLink
              :to="{ name: 'login' }"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </aside>
    <div class="m-4">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
