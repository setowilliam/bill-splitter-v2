import { FC } from "react";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { MdFastfood } from "react-icons/md";

import { Input } from "@global-components";
import { itemsAtom } from "@atoms";

import { globalScope } from "utils/constants";
import { ItemType } from "utils/typings";
import AddForm from "./AddForm";

type AddItemFormProps = {
  onSubmit?: () => void;
};

const AddItemForm: FC<AddItemFormProps> = (props) => {
  const { onSubmit: onSubmitCallback } = props;
  const [items, setItems] = useAtom(itemsAtom, globalScope);
  const { register, handleSubmit, reset, watch, setValue } =
    useForm<Pick<ItemType, "item" | "price">>();

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
    <AddForm
      header="New Item"
      onSubmit={handleSubmit(onSubmit)}
      disabled={!Boolean(item && price)}
    >
      <Input
        {...register("item")}
        label="Item"
        leadingIcon={<MdFastfood />}
        value={item}
        setValue={(value) => setValue("item", value)}
      />
      <Input
        {...register("price", { valueAsNumber: true })}
        label="Price"
        leadingIcon="$"
        type="number"
        step=".01"
        inputMode="decimal"
        value={price}
        setValue={(value) => setValue("price", parseInt(value))}
      />
    </AddForm>
  );
};

export default AddItemForm;
