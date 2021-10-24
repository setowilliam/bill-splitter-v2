export type ItemType = {
  item: string;
  price: number;
  itemId: string;
  people: string[];
};

export type PersonType = {
  name: string;
  personId: string;
  items: string[];
};

export type ResultItemType = ItemType & { splitPrice: number };

export type ResultType = PersonType & {
  total: number;
  resultItems: Record<string, ResultItemType>;
};
