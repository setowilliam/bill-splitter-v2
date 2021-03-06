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
      people: {
        title: "人々",
        assign: "人々に割り当てる",
      },
      items: {
        title: "アイテム",
        assign: "アイテムに割り当てる",
        shared: "共有した",
      },
      edit: "編集する",
      delete: "削除する",
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
      addedMessage: (name) => (
        <span>
          <b>{name}</b>が追加されました！
        </span>
      ),
    },
    results: {
      title: "結果",
      total: "全額",
      subtotal: "小計",
      tax: "税金",
      tip: "チップ",
    },
    fees: {
      title: "料金",
      tax: "税金",
      tip: "チップ",
      tipOptions: "チップオプション",
      beforeTax: "税金前（％）",
      afterTax: "税金後（％）",
      fixed: "一定（￥）",
    },
  },
};
