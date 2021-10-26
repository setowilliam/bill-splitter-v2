import { itemsAtom, peopleAtom } from "@atoms";
import { Button } from "@global-components";
import { useAtom } from "jotai";
import { FC } from "react";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { globalScope } from "utils/constants";
import { getItem } from "utils/functions";
import AssignItemsForm from "../AssignItemsForm";

type BodyProps = { index: number; personId: string };

const Body: FC<BodyProps> = (props) => {
  const { index, personId } = props;
  const [people, setPeople] = useAtom(peopleAtom, globalScope);
  const [items, setItems] = useAtom(itemsAtom, globalScope);

  const handleDeleteClick = () => {
    const targetPerson = people[index];

    targetPerson.items.forEach((itemId) => {
      const targetItem = getItem(itemId, items);

      if (targetItem) {
        const targetIndex = targetItem.people.findIndex(
          (targetPersonId) => targetPersonId === personId
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
    <>
      <AssignItemsForm personId={personId} />
      <Button layout variant="borderless" onClick={handleDeleteClick}>
        <RiDeleteBin4Fill />
        Delete
      </Button>
    </>
  );
};

export default Body;
