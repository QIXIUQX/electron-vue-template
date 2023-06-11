import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// 安装以下包
// yarn add -D unplugin-element-plus
// yarn add -D unplugin-vue-components
// yarn add -D unplugin-auto-import
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ["vue", "vue-router"],
      dts: "src/types/auto-imports.d.ts",
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ["src/components"],
      dts: "src/types/components.d.ts",
    }),
    ElementPlus({}),
  ],
  server: {
    open: false, // 启动时候打开浏览器
    hmr: true, // 打开热加载
    host: true, // 监听所有端口
    port: 8088, // 端口号
    proxy: {
      "/devApiServer": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/devApiServer/, ""),
      },
    },
  },
});
