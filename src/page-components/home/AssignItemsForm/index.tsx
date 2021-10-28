import { useAtom } from "jotai";
import { FC } from "react";
import { MdFastfood } from "react-icons/md";

import { itemsAtom, peopleAtom } from "@atoms";
import { Checkbox } from "@global-components";
import { globalScope } from "utils/constants";
import { getItem, getPerson } from "utils/functions";
import AssignForm from "../AssignForm";

type AssignItemsFormProps = {
  personId: string;
};

const AssignItemsForm: FC<AssignItemsFormProps> = (props) => {
  const { personId } = props;
  const [people, setPeople] = useAtom(peopleAtom, globalScope);
  const [items, setItems] = useAtom(itemsAtom, globalScope);

  const handleItemClick = (itemId: string, checked: boolean) => {
    const targetPerson = getPerson(personId, people);
    const targetItem = getItem(itemId, items);

    if (targetPerson && targetItem) {
      if (checked) {
        targetPerson.items.push(itemId);
        targetItem.people.push(targetPerson.personId);
      } else {
        const targetItemIndex = targetPerson.items.findIndex(
          (personItemId) => personItemId === itemId
        );
        const targetPersonIndex = targetItem.people.findIndex(
          (itemPersonId) => itemPersonId === personId
        );

        if (targetItemIndex !== -1 && targetPersonIndex !== -1) {
          targetPerson.items.splice(targetItemIndex, 1);
          targetItem.people.splice(targetPersonIndex, 1);
        }
      }

      const newItems = [...items];
      const newPeople = [...people];
      setPeople(newPeople);
      setItems(newItems);
    }
  };

  return (
    <AssignForm
      header={
        <>
          <MdFastfood />
          Assign to items
        </>
      }
    >
      {items.map((item) => (
        <Checkbox
          key={item.itemId}
          label={item.item}
          checked={getItem(item.itemId, items)?.people.includes(personId)}
          onChange={(event) =>
            handleItemClick(item.itemId, event.currentTarget.checked)
          }
        />
      ))}
    </AssignForm>
  );
};

export default AssignItemsForm;
