import "./styles/dark.css";
import "./styles/main.css";

import { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import Layout from "./Layout.vue";

const theme: Theme = {
  ...DefaultTheme,
  Layout: Layout,
};

export default theme;
