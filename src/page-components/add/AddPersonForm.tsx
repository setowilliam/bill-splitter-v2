import { FC } from "react";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { IoPersonCircleSharp } from "react-icons/io5";

import { peopleAtom } from "@atoms";
import { Input } from "@global-components";

import { globalScope } from "utils/constants";
import AddForm from "./AddForm";

type AddPersonFormProps = {
  onSubmit?: () => void;
};

const AddPersonForm: FC<AddPersonFormProps> = (props) => {
  const { onSubmit: onSubmitCallback } = props;
  const [people, setPeople] = useAtom(peopleAtom, globalScope);
  const { register, handleSubmit, reset, watch, setValue } =
    useForm<{ person: string }>();

  const name = watch("person");

  const onSubmit = (data: { person: string }) => {
    const { person } = data;
    const personId = nanoid();

    setPeople([...people, { name: person, personId, items: [] }]);
    reset();
    onSubmitCallback?.();
  };

  return (
    <AddForm
      header="New Person"
      onSubmit={handleSubmit(onSubmit)}
      disabled={!Boolean(name)}
    >
      <Input
        {...register("person")}
        label="Name"
        leadingIcon={<IoPersonCircleSharp />}
        value={name}
        setValue={(value) => setValue("person", value)}
      />
    </AddForm>
  );
};

export default AddPersonForm;
