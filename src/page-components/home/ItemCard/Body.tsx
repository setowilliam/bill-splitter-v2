import { useAtom } from "jotai";
import { FC } from "react";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { RiEditFill } from "react-icons/ri";

import { itemsAtom, peopleAtom } from "@atoms";
import { Button } from "@global-components";
import { globalScope } from "utils/constants";

import { getPerson } from "utils/functions";
import { AnimatePresence } from "framer-motion";
import AssignPeopleForm from "../AssignPeopleForm";
import { StyledBody } from "./styles";

type BodyProps = { itemId: string; index: number };

const Body: FC<BodyProps> = (props) => {
  const { itemId, index } = props;
  const [items, setItems] = useAtom(itemsAtom, globalScope);
  const [people, setPeople] = useAtom(peopleAtom, globalScope);

  const handleDeleteClick = () => {
    const targetItem = items[index];
    targetItem.people.forEach((personId) => {
      const targetPerson = getPerson(personId, people);
      if (targetPerson) {
        const targetIndex = targetPerson.items.findIndex(
          (targetItemId) => targetItemId === itemId
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
    <StyledBody>
      <AnimatePresence>
        {people.length && <AssignPeopleForm itemId={itemId} />}
      </AnimatePresence>
      <Button layout variant="borderless">
        <RiEditFill />
        Edit
      </Button>
      <Button layout variant="borderless" onClick={handleDeleteClick}>
        <RiDeleteBin4Fill />
        Delete
      </Button>
    </StyledBody>
  );
};

export default Body;
