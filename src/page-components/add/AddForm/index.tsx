import { FC, FormEventHandler, ReactNode } from "react";

import { Card } from "@global-components";

import { StyledButton, StyledForm } from "./styles";
import Header from "./Header";
import { useAtom } from "jotai";
import { addAtom } from "../utils";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

type AddFormProps = {
  disabled?: boolean;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  header: ReactNode;
  open?: boolean;
  name: "items" | "people";
};

const AddForm: FC<AddFormProps> = (props) => {
  const { disabled, onSubmit, header, children, open, name } = props;

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    if (disabled) {
      event.preventDefault();
    } else {
      onSubmit?.(event);
    }
  };

  const [, setAddState] = useAtom(addAtom);

  const handleToggle = (open: boolean) => {
    if (open) {
      setAddState(name);
    } else {
      setAddState(null);
    }
  };

  return (
    <Card
      header={
        <Header>
          {header}
          <motion.div
            animate={{ rotate: open ? 180 : 0, transition: { bounce: 0 } }}
          >
            <FaChevronDown />
          </motion.div>
        </Header>
      }
      open={open}
      onToggle={handleToggle}
    >
      <StyledForm
        layout
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
        <StyledButton disabled={disabled}>Add</StyledButton>
      </StyledForm>
    </Card>
  );
};

export default AddForm;
