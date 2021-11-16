import { FC } from "react";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { IoPersonCircleSharp } from "react-icons/io5";

import { peopleAtom, themeAtom } from "@atoms";
import { Input } from "@global-components";

import { globalScope } from "utils/constants";
import AddForm from "./AddForm";
import { Slide, toast } from "react-toastify";
import { addAtom } from "./utils";
import { AnimatePresence } from "framer-motion";
import useTranslation from "utils/hooks/useTranslation";

type AddPersonFormProps = {
  onSubmit?: () => void;
};

const AddPersonForm: FC<AddPersonFormProps> = (props) => {
  const { onSubmit: onSubmitCallback } = props;
  const [people, setPeople] = useAtom(peopleAtom, globalScope);
  const { register, handleSubmit, reset, watch, setValue } =
    useForm<{ person: string }>();
  const [theme] = useAtom(themeAtom, globalScope);
  const notify = (person: string) =>
    toast(pages.add.addedMessage(person), {
      type: "success",
      theme,
      pauseOnFocusLoss: false,
      transition: Slide,
      autoClose: 3000,
      hideProgressBar: true,
    });
  const { pages } = useTranslation();

  const name = watch("person");

  const onSubmit = (data: { person: string }) => {
    const { person } = data;
    const personId = nanoid();

    setPeople([...people, { name: person, personId, items: [] }]);
    reset();
    notify(person);
    onSubmitCallback?.();
  };

  const [addState] = useAtom(addAtom);

  return (
    <AddForm
      header={
        <span>
          <IoPersonCircleSharp className="icon" />
          {pages.add.newPerson.title}
        </span>
      }
      onSubmit={handleSubmit(onSubmit)}
      disabled={!Boolean(name)}
      name="people"
      open={addState === "people"}
    >
      <Input
        {...register("person")}
        label={pages.add.newPerson.name}
        leadingIcon={<IoPersonCircleSharp />}
        value={name}
        setValue={(value) => setValue("person", value)}
        disabled={addState !== "people"}
      />
    </AddForm>
  );
};

export default AddPersonForm;
