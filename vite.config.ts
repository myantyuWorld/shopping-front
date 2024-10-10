import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: "My App",
        short_name: "My App",
        description: "My App",
        icons: [
          {
            src: "app_icon/icon-192.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "app_icon/icon-512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "app_icon/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
        start_url: "index.html",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        lang: "ja"
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
