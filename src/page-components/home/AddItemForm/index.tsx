import { FC } from "react";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { MdFastfood } from "react-icons/md";

import { Button, Card, Input } from "@global-components";
import { itemsAtom } from "@atoms";

import { globalScope } from "utils/constants";
import { ItemType } from "utils/typings";
import { StyledForm } from "./styles";
import Header from "./Header";

type AddItemFormProps = {
  onSubmit?: () => void;
};

const AddItemForm: FC<AddItemFormProps> = (props) => {
  const { onSubmit: onSubmitCallback } = props;
  const [items, setItems] = useAtom(itemsAtom, globalScope);
  const { register, handleSubmit, reset, watch } = useForm<ItemType>();

  const item = watch("item");
  const price = watch("price");

  const onSubmit = (data: ItemType) => {
    const { item, price } = data;
    const itemId = nanoid();
    setItems([...items, { item, price, itemId, people: [] }]);
    reset();
    onSubmitCallback?.();
  };

  return (
    <Card header={<Header />}>
      <StyledForm
        layout
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Input
          {...register("item")}
          label="Item"
          leadingIcon={<MdFastfood />}
        />
        <Input
          {...register("price", { valueAsNumber: true })}
          label="Price"
          leadingIcon="$"
          type="number"
          step=".01"
          inputMode="decimal"
        />
        <Button disabled={!Boolean(item && price)}>Add</Button>
      </StyledForm>
    </Card>
  );
};

export default AddItemForm;
