import { ReactNode } from "react";

export type TranslationLibrary = {
  global: {
    title: string;
  };
  menu: {
    theme: string;
    language: string;
  };
  footer: {
    add: string;
    done: string;
    calculate: string;
    fees: string;
  };
  pages: {
    home: {
      welcome: {
        title: string;
        description: ReactNode;
      };
    };
    add: {
      title: string;
      newPerson: {
        title: string;
        name: string;
      };
      newItem: {
        title: string;
        item: string;
        price: string;
        priceLogo: ReactNode;
      };
    };
  };
};
