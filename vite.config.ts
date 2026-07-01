import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ["src/**/*"],
      outDir: "dist/types",
      insertTypesEntry: true,
      staticImport: true,
    }),
    AutoImport({
      imports: ["vue"],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "JzElementPlus",
      fileName: (format) => `jz-element-plus.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // 外部依赖，不打包进库
      external: ["vue", "element-plus"],
      output: {
        globals: {
          vue: "Vue",
          "element-plus": "ElementPlus",
        },
        exports: "named",
      },
    },
  },
});
