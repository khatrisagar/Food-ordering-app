import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

//vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9999,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
});
