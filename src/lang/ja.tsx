import { TranslationLibrary } from "./typings";

export const ja: TranslationLibrary = {
  global: {
    title: "ビル・スプリッター",
  },
  footer: {
    add: "追加する",
    done: "完了",
    calculate: "計算する",
    fees: "料金",
  },
  menu: {
    theme: "テーマ",
    language: "言語",
  },
  pages: {
    home: {
      welcome: {
        title: "ビル・スプリッターへようこそ",
        description: (
          <p>
            <b>追加する</b>
            を押して、新しいアイテムまたは人を追加することから始めます。
          </p>
        ),
      },
    },
    add: {
      title: "人／アイテムを追加する",
      newPerson: {
        title: "新しい人",
        name: "名前",
      },
      newItem: {
        title: "新しいアイテム",
        item: "アイテム",
        price: "値段",
        priceLogo: "￥",
      },
      add: "追加する",
    },
  },
};
