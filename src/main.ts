import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/index.css";

const app = createApp(App);

app.use(router);

const enableMocking = async () => {
  if (import.meta.env.PROD) {
    return
  }

  // TODO : `npm run build`した時、以下のエラーが発生しているので直したい
  // src/main.ts:17:35 - error TS7016: Could not find a declaration file for module './mocks/browser'. '/Users/ohbay/Documents/2_leo-twins/shopping/shopping-front/src/mocks/browser.js' implicitly has an 'any' type.

  // TODO : ローカルで開発する際には必要だが、↑のエラーがあるので、npm run build（vercelへのデプロイも）に失敗する
  // const { worker } = await import("./mocks/browser")
  // return worker.start({ onUnhandledRequest: "bypass" })
}

enableMocking().then(() => {
  app.mount("#app")
})

