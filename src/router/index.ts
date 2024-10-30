import { createRouter, createWebHistory } from "vue-router";
import { PublicLayout, PrivateLayout } from "@/components/layout";
import { ShoppingMemoPage } from "@/features/shopping/list";
import { LoginPage } from "@/features/login";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
      meta: {
        layout: PublicLayout
      }
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
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
