import { FC } from "react";

import Header from "./Header";
import { ItemCardProps } from "./typings";
import HomeCard from "../HomeCard";
import AssignPeopleForm from "../AssignPeopleForm";
import { useAtom } from "jotai";
import { itemsAtom, peopleAtom } from "@atoms";
import { globalScope } from "utils/constants";
import { getPerson } from "utils/functions";
import { AnimatePresence } from "framer-motion";

const ItemCard: FC<ItemCardProps> = (props) => {
  const { item, index } = props;

  const [items, setItems] = useAtom(itemsAtom, globalScope);
  const [people, setPeople] = useAtom(peopleAtom, globalScope);

  const handleDeleteClick = () => {
    const targetItem = items[index];
    targetItem.people.forEach((personId) => {
      const targetPerson = getPerson(personId, people);
      if (targetPerson) {
        const targetIndex = targetPerson.items.findIndex(
          (targetItemId) => targetItemId === item.itemId
        );

        if (targetIndex !== -1) {
          targetPerson.items.splice(targetIndex, 1);

          const newPeople = [...people];
          setPeople(newPeople);
        }
      }
    });

    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <HomeCard header={<Header item={item} />} onDeleteClick={handleDeleteClick}>
      <AnimatePresence>
        {Boolean(people.length) && <AssignPeopleForm itemId={item.itemId} />}
      </AnimatePresence>
    </HomeCard>
  );
};

export default ItemCard;
