import { TranslationLibrary } from "./typings";

export const en: TranslationLibrary = {
  global: {
    title: "Bill Splitter",
  },
  menu: {
    theme: "Theme",
    language: "Language",
  },
  footer: {
    add: "Add",
    done: "Done",
    calculate: "Calculate",
    fees: "Fees",
  },
  pages: {
    home: {
      welcome: {
        title: "Welcome to Bill Splitter",
        description: (
          <p>
            Start by adding a new item or person by clicking <b>Add</b>.
          </p>
        ),
      },
    },
  },
};
