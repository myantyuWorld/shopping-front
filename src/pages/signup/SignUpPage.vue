<script setup lang="ts">
import PageActionButton from "@/components/elements/button/PageActionButton.vue";
import { CardArea } from "@/components/elements/card";
import { TextInput } from "@/components/elements/form";
import { PageTitle } from "@/components/elements/header";
import { useSignUp } from "@/features/auth/useSignUp";

const { defineField, errors, onClickSignUp } = useSignUp();

const [email, emailProps] = defineField("email");
const [password, passwordProps] = defineField("password");
const [name, nameProps] = defineField("name");
</script>

<template>
  <PageTitle title="利用申し込み">
    <p>ユーザー登録して、利用を開始しましょう！</p>
  </PageTitle>
  <CardArea>
    <TextInput
      id="userName"
      type="text"
      placeholder="userName"
      v-model="name"
      v-bind="nameProps"
      :error-message="errors.name"
    >
      ユーザ名
    </TextInput>
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
    <div class="flex flex-wrap">
      <PageActionButton :primary="true" @click="onClickSignUp">登録</PageActionButton>
    </div>
  </CardArea>
</template>
