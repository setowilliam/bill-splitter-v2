import { FC } from "react";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { RiEditFill } from "react-icons/ri";

import { Button } from "@global-components";

import { AnimatePresence } from "framer-motion";
import { StyledBody } from "./styles";

type BodyProps = { onDeleteClick?: () => void };

const Body: FC<BodyProps> = (props) => {
  const { onDeleteClick, children } = props;

  return (
    <StyledBody>
      <AnimatePresence>{children}</AnimatePresence>
      <Button layout variant="borderless">
        <RiEditFill />
        Edit
      </Button>
      <Button layout variant="borderless" onClick={onDeleteClick}>
        <RiDeleteBin4Fill />
        Delete
      </Button>
    </StyledBody>
  );
};

export default Body;
