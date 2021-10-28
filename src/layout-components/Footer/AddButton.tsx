import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import { StyledButton } from "./styles";

type AddButtonProps = {};

const AddButton: FC<AddButtonProps> = (props) => {
  const {} = props;
  const router = useRouter();

  return (
    <StyledButton
      layout
      variant="borderless"
      onClick={() => router.push("/add")}
    >
      Add
    </StyledButton>
  );
};

export default AddButton;
