import { createRouter, createWebHistory } from "vue-router";
import { PublicLayout, PrivateLayout } from "@/components/layout";
import { LoginPage } from "@/features/login";
import { ShoppingMemoPage } from "@/features/shopping/list";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginPage,
      meta: {
        layout: PublicLayout
      }
    },
    {
      path: "/memo",
      name: "memo",
      component: ShoppingMemoPage,
      meta: {
        layout: PrivateLayout
      }
    },
  ]
});

export default router;
