import { FC } from "react";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { IoPersonCircleSharp } from "react-icons/io5";

import { peopleAtom } from "@atoms";
import { Button, Input } from "@global-components";

import { globalScope } from "utils/constants";
import { StyledForm } from "./styles";

type AddPersonFormProps = {
  onSubmit?: () => void;
};

const AddPersonForm: FC<AddPersonFormProps> = (props) => {
  const { onSubmit: onSubmitCallback } = props;
  const [people, setPeople] = useAtom(peopleAtom, globalScope);
  const { register, handleSubmit, reset, watch } =
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
    <StyledForm
      layout
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Add New People</h2>
      <Input
        {...register("person")}
        label="Name"
        leadingIcon={<IoPersonCircleSharp />}
      />
      <Button disabled={!Boolean(name)}>Add</Button>
    </StyledForm>
  );
};

export default AddPersonForm;
