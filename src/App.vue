<template>
  app

  <JzButton type="primary" debounce @click="handleClick">按钮</JzButton>
</template>

<script setup lang="ts">
import { JzButton } from "./index";

const handleClick = () => {
  console.log("click");
};
</script>
