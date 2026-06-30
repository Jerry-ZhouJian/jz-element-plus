import type { App } from "vue";
import { JzButton } from "./components/button";

// 只保留命名导出
export { JzButton };

// 把install挂载到单独变量，不再作为default导出
const JzElementPlus = {
  install(app: App) {
    app.component("JzButton", JzButton);
  },
};

export default JzElementPlus;
