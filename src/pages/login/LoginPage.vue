<script setup lang="ts">
import { RouterLink } from "vue-router";
import { PageTitle } from "@/components/elements/header";
import { CardArea } from "@/components/elements/card";
import { TextInput } from "@/components/elements/form";
import { useLogin } from "@/features/auth";
import PageActionButton from "@/components/elements/button/PageActionButton.vue";

const { defineField, errors, onClickSignIn } = useLogin();

const [email, emailProps] = defineField("email");
const [password, passwordProps] = defineField("password");
</script>

<template>
  <PageTitle title="ログイン"></PageTitle>
  <CardArea>
    <TextInput
      id="email"
      type="text"
      placeholder="name@sample.jp"
      v-model="email"
      v-bind="emailProps"
      :error-message="errors.email"
      >メールアドレス</TextInput
    >
    <TextInput
      id="password"
      type="password"
      placeholder="••••••••"
      v-model="password"
      v-bind="passwordProps"
      :error-message="errors.password"
      >パスワード</TextInput
    >
    <div class="flex items-center justify-between">
      <RouterLink
        :to="{ name: 'forgot-password' }"
        class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >パスワードを忘れた方はこちらから
      </RouterLink>
    </div>
    <div class="flex flex-wrap">
      <PageActionButton :primary="true" @click="onClickSignIn">Sign in</PageActionButton>
      <!-- LINE LOGIN APIへリクエストし、リダイレクトさせる（hooksで定義して、200だったら、リダイレクトするっていう処理の認識であっている？） -->
      <a href="">
        <img class="btn_line" src="@/assets/btn_login_base.png" />
        <img class="btn_line" src="@/assets/btn_login_hover.png" />
      </a>
    </div>
    <hr />
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      <RouterLink
        :to="{ name: 'signup' }"
        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >利用申し込みはこちら
      </RouterLink>
    </p>
  </CardArea>
</template>

<style scoped>
a img:last-child {
  display: none;
}

a:hover img:last-child {
  display: block;
}

a:hover img:first-child {
  display: none;
}
</style>
