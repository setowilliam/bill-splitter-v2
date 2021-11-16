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
      people: {
        title: string;
        assign: string;
      };
      items: {
        title: string;
        assign: string;
        shared: string;
      };
      edit: string;
      delete: string;
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
      add: string;
      addedMessage: (name: string) => ReactNode;
    };
    results: {
      title: string;
      total: string;
      subtotal: string;
      tax: string;
      tip: string;
    };
    fees: {
      title: string;
      tax: string;
      tip: string;
      tipOptions: string;
      beforeTax: string;
      afterTax: string;
      fixed: string;
    };
  };
};
