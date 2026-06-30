import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: "dist/types",
      insertTypesEntry: true,
      staticImport: true,
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
