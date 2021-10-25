import { useAtom } from "jotai";
import { FC } from "react";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { BsPersonPlusFill } from "react-icons/bs";
import { RiEditFill } from "react-icons/ri";

import { itemsAtom, peopleAtom } from "@atoms";
import { Button } from "@global-components";
import { globalScope } from "utils/constants";

import { assignAtom } from "./utils";
import { getPerson } from "utils/functions";

type BodyProps = { itemId: string; index: number };

const Body: FC<BodyProps> = (props) => {
  const { itemId, index } = props;
  const [items, setItems] = useAtom(itemsAtom, globalScope);
  const [people, setPeople] = useAtom(peopleAtom, globalScope);
  const [assignToggle, setAssignToggle] = useAtom(assignAtom);

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

  const disabled = !people.some((person) => !person.items.includes(itemId));

  return (
    <>
      <Button
        layout
        variant="borderless"
        onClick={() => setAssignToggle(!assignToggle)}
        disabled={disabled}
      >
        <BsPersonPlusFill />
        Assign
      </Button>
      <Button layout variant="borderless">
        <RiEditFill />
        Edit
      </Button>
      <Button layout variant="borderless" onClick={handleDeleteClick}>
        <RiDeleteBin4Fill />
        Delete
      </Button>
      {/* <AssignForm itemId={itemId} /> */}
    </>
  );
};

export default Body;
