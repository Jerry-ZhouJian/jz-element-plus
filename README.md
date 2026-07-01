# jz-element-plus

基于 element-plus，从个人喜好角度出发，用配置文件驱动的组件

## 安装

```bash
pnpm add jz-element-plus
```

## 使用

### 全量导入

main.ts

````ts
import { createApp } from "vue"; 
import App from "./App.vue"; 
import "element-plus/dist/index.css"; 
import JzElementPlus from "jz-element-plus";

const APP = createApp(App);
APP.use(JzElementPlus);
APP.mount("#app");

````

### 按需导入

````vue
<template>
  <jz-button type="primary">按钮</jz-button>
</template>

<script setup lang="ts">
import { JzButton } from 'jz-element-plus'

````

### 自动导入
vite.config.ts

````ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { JzElementPlusResolver } from "jz-element-plus";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [JzElementPlusResolver()],
    }),
    Components({
      resolvers: [JzElementPlusResolver()],
    }),
  ],
});
````

### 样式

因为本项目是基于 element-plus，所以样式文件需要根据 element-plus 的用法使用


## 组件说明

### JzButton

完全兼容 [el-button](https://element-plus.org/zh-CN/component/button) 的属性，详情点击查看

#### 拓展内容

##### 属性

| 属性名       | 类型    | 说明                       | 默认值 |
| :----------- | :------ | :------------------------- | :----- |
| width        | string  | 宽度                       | -      |
| margin       | string  | 外边距                     | -      |
| debounce     | boolean | 开启防抖                   | false  |
| debounceTime | number  | 防抖的间隔时间， ms        | 300    |
| throttle     | boolean | 开启节流                   | false  |
| throttleTime | number  | 节流的间隔时间，ms         | 300    |
| immediate    | boolean | 防抖和节流是否立即触发一次 | false  |