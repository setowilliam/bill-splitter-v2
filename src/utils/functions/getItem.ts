import { ItemType } from "utils/typings";

const getItem = (itemId: string, items: ItemType[]) => {
  return items.find((item) => item.itemId === itemId);
};

export default getItem;
