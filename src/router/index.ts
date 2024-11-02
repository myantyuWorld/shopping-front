import { createRouter, createWebHistory } from "vue-router";
import { PublicLayout, PrivateLayout } from "@/components/layout";
import LoginPage from "@/pages/login/LoginPage.vue";
import SignUpPage from "@/pages/signup/SignUpPage.vue";
import ShoppingMemoPage from "@/pages/shopping-memo/ShoppingMemoPage.vue";

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
      path: "/signup",
      name: "signup",
      component: SignUpPage, 
      meta: {
        layout: PublicLayout
      }
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: LoginPage, // TODO : forgot-password画面に差し替え
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
