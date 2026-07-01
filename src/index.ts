import type { App } from "vue";
import type { ComponentResolver } from "unplugin-vue-components";
import { JzButton } from "./components/button";

// 组件自动导入解析器 ElementPlusResolver
const JzElementPlusResolver: () => ComponentResolver = () => {
  return (name: string) => {
    if (name.startsWith("Jz")) {
      return {
        name,
        from: "jz-element-plus",
      };
    }
    // 不匹配必须返回 undefined，不要return null
    return undefined;
  };
};

// 只保留命名导出
export { JzButton, JzElementPlusResolver };

// 把install挂载到单独变量，不再作为default导出
const JzElementPlus = {
  install(app: App) {
    app.component("JzButton", JzButton);
  },
};

export default JzElementPlus;
