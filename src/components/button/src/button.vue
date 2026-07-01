<template>
  <el-button
    class="jz-button"
    v-bind.prop="props"
    :style="buttonStyle"
    @click="handleClick"
  >
    <slot></slot>
  </el-button>
</template>

<script setup>
import { defineProps } from "vue";
import { ElButton } from "element-plus";

defineOptions({
  name: "ZkiButton",
});

const emits = defineEmits(["click"]);

const props = defineProps(
  Object.assign({}, ElButton.props, {
    // 开启防抖
    debounce: {
      type: Boolean,
      default: false,
    },
    // 防抖时间
    debounceTime: {
      type: Number,
      default: 300,
    },
    // 开启节流
    throttle: {
      type: Boolean,
      default: false,
    },
    // 节流时间
    throttleTime: {
      type: Number,
      default: 300,
    },
    immediate: {
      type: Boolean,
      default: false,
    },
    margin: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "",
    },
  }),
);

const buttonStyle = computed(() => {
  return {
    width: props.width,
    margin: props.margin,
  };
});

const handleClick = () => {
  // 是否开启防抖
  if (props.debounce) {
    debounce();
  } else if (props.throttle) {
    // 是否开启节流
    throttle();
  } else {
    emits("click");
  }
};

// 防抖时间器
let timer = null;

let isImmediate = false;

// 防抖函数
const debounce = (fn) => {
  if (timer) {
    clearTimeout(timer);
  }

  if (props.immediate && !isImmediate) {
    isImmediate = true;
    emits("click");
  }

  timer = setTimeout(() => {
    isImmediate = false;
    emits("click");
  }, props.debounceTime);
};

// 防抖时间器
let immediateTimer = null;

// 节流函数
const throttle = () => {
  if (props.immediate) {
    if (!isImmediate) {
      isImmediate = true;
      emits("click");
    } else {
      if (immediateTimer) {
        clearTimeout(immediateTimer);
      }
      immediateTimer = setTimeout(() => {
        isImmediate = false;
      }, props.throttleTime);
    }
  }

  if (!timer) {
    timer = setTimeout(() => {
      timer = null;
      emits("click");
    }, props.throttleTime);
  }
};
</script>

<style lang="scss" scoped>
.jz-button {
  font-family:
    PingFang HK-Semibold,
    PingFang HK;
}
</style>
