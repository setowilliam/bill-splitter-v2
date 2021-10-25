import { FC } from "react";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { IoPersonCircleSharp } from "react-icons/io5";

import { peopleAtom } from "@atoms";
import { Button, Card, Input } from "@global-components";

import { globalScope } from "utils/constants";
import { StyledForm } from "./styles";
import Header from "./Header";

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
    <Card header={<Header />} borderless>
      <StyledForm
        layout
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Input
          {...register("person")}
          label="Name"
          leadingIcon={<IoPersonCircleSharp />}
        />
        <Button disabled={!Boolean(name)}>Add</Button>
      </StyledForm>
    </Card>
  );
};

export default AddPersonForm;
