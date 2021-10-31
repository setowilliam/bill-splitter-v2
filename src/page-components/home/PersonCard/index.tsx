import { FC } from "react";

import { PersonType } from "utils/typings";

import Header from "./Header";
import HomeCard from "../HomeCard";
import { useAtom } from "jotai";
import { itemsAtom, peopleAtom } from "@atoms";
import { globalScope } from "utils/constants";
import { getItem } from "utils/functions";
import { AnimatePresence } from "framer-motion";
import AssignItemsForm from "../AssignItemsForm";

type PersonCardProps = {
  person: PersonType;
  index: number;
};

const PersonCard: FC<PersonCardProps> = (props) => {
  const { person, index } = props;
  const [people, setPeople] = useAtom(peopleAtom, globalScope);
  const [items, setItems] = useAtom(itemsAtom, globalScope);

  const handleDeleteClick = () => {
    const targetPerson = people[index];

    targetPerson.items.forEach((itemId) => {
      const targetItem = getItem(itemId, items);

      if (targetItem) {
        const targetIndex = targetItem.people.findIndex(
          (targetPersonId) => targetPersonId === person.personId
        );

        if (targetIndex !== -1) {
          targetItem.people.splice(targetIndex, 1);

          const newItems = [...items];
          setItems(newItems);
        }
      }
    });

    const newPeople = [...people];
    newPeople.splice(index, 1);
    setPeople(newPeople);
  };

  return (
    <HomeCard
      header={<Header person={person} />}
      onDeleteClick={handleDeleteClick}
    >
      <AnimatePresence>
        {Boolean(items.length) && (
          <AssignItemsForm personId={person.personId} />
        )}
      </AnimatePresence>
    </HomeCard>
  );
};

export default PersonCard;
