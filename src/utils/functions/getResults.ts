import {
  ItemType,
  PersonType,
  ResultItemType,
  ResultType,
} from "utils/typings";
import getItem from "./getItem";

const getResults = (
  items: ItemType[],
  people: PersonType[]
): Record<string, ResultType> => {
  const resultObj: Record<string, ResultType> = people.reduce(
    (previousValue, currentValue) => {
      let sum = 0;
      const resultItems: Record<string, ResultItemType> = {};

      currentValue.items.forEach((itemId) => {
        const item = getItem(itemId, items);
        if (item) {
          const splitPrice = item.price / item.people.length;
          resultItems[itemId] = { ...item, splitPrice };
          sum += splitPrice;
        }
      });

      const personObject = {
        [currentValue.personId]: { total: sum, ...currentValue, resultItems },
      };

      return { ...previousValue, ...personObject };
    },
    {}
  );

  const unassigned = items.filter((item) => !item.people.length);

  unassigned.forEach((item) => {
    const splitPrice = item.price / people.length;

    Object.values(resultObj).forEach((result) => {
      resultObj[result.personId].total += splitPrice;
      resultObj[result.personId].resultItems[item.itemId] = {
        ...item,
        splitPrice,
      };
    });
  });

  return resultObj;
};

export default getResults;
