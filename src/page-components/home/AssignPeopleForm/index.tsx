import { useAtom } from "jotai";
import { FC } from "react";
import { BsPersonPlusFill } from "react-icons/bs";

import { itemsAtom, peopleAtom } from "@atoms";
import { Checkbox } from "@global-components";
import { globalScope } from "utils/constants";
import { getItem, getPerson } from "utils/functions";

import AssignForm from "../AssignForm";

type AssignPeopleFormProps = {
  itemId: string;
  disabled?: boolean;
};

const AssignPeopleForm: FC<AssignPeopleFormProps> = (props) => {
  const { itemId } = props;
  const [people, setPeople] = useAtom(peopleAtom, globalScope);
  const [items, setItems] = useAtom(itemsAtom, globalScope);

  const handlePersonClick = (personId: string, checked: boolean) => {
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
          <BsPersonPlusFill />
          Assign to people
        </>
      }
    >
      {people.map((person) => (
        <Checkbox
          key={person.personId}
          label={person.name}
          checked={getPerson(person.personId, people)?.items.includes(itemId)}
          onChange={(event) =>
            handlePersonClick(person.personId, event.currentTarget.checked)
          }
        />
      ))}
    </AssignForm>
  );
};

export default AssignPeopleForm;
