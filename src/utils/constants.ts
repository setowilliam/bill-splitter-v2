import { darkTheme, lightTheme } from "styles/themes";

export const globalScope = Symbol("global");

export const THEME_MAPPING = {
  light: lightTheme,
  dark: darkTheme,
};
