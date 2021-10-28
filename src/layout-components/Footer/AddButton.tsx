import { Button } from "@global-components";
import { FC } from "react";

type AddButtonProps = {};

const AddButton: FC<AddButtonProps> = (props) => {
  const {} = props;

  return <Button variant="borderless">Add</Button>;
};

export default AddButton;
