import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

// 自定义指令
import * as directive from "./directive";
Object.keys(directive).forEach((key) => {
  app.directive(key, directive[key]);
});

app.mount("#app");
