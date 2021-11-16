import { FC } from "react";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { RiEditFill } from "react-icons/ri";

import { Button } from "@global-components";

import { AnimatePresence } from "framer-motion";
import { StyledBody } from "./styles";
import useTranslation from "utils/hooks/useTranslation";

type BodyProps = { onDeleteClick?: () => void };

const Body: FC<BodyProps> = (props) => {
  const { onDeleteClick, children } = props;
  const { pages } = useTranslation();

  return (
    <StyledBody>
      <AnimatePresence>{children}</AnimatePresence>
      <Button layout variant="borderless">
        <RiEditFill />
        {pages.home.edit}
      </Button>
      <Button layout variant="borderless" onClick={onDeleteClick}>
        <RiDeleteBin4Fill />
        {pages.home.delete}
      </Button>
    </StyledBody>
  );
};

export default Body;
