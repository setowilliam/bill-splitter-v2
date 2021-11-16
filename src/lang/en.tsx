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
      people: {
        title: "People",
        assign: "Assign to people",
      },
      items: {
        title: "Items",
        assign: "Assign to items",
        shared: "Shared",
      },
      edit: "Edit",
      delete: "Delete",
    },
    add: {
      title: "Add People/Items",
      newPerson: {
        title: "New Person",
        name: "Name",
      },
      newItem: {
        title: "New Item",
        item: "Item",
        price: "Price",
        priceLogo: "$",
      },
      add: "Add",
      addedMessage: (name) => (
        <span>
          <b>{name}</b> added!
        </span>
      ),
    },
    results: {
      title: "Results",
      total: "Total",
      subtotal: "Subtotal",
      tax: "Tax",
      tip: "Tip",
    },
    fees: {
      title: "Fees",
      tax: "Tax",
      tip: "Tip",
      tipOptions: "Tip Options",
      beforeTax: "Before Tax (%)",
      afterTax: "After Tax (%)",
      fixed: "Fixed ($)",
    },
  },
};
