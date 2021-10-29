import { FC, FormEventHandler, ReactNode } from "react";

import { Button, Card } from "@global-components";

import { StyledForm } from "./styles";
import Header from "./Header";

type AddFormProps = {
  disabled?: boolean;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  header: ReactNode;
};

const AddForm: FC<AddFormProps> = (props) => {
  const { disabled, onSubmit, header, children } = props;

  return (
    <Card header={<Header>{header}</Header>}>
      <StyledForm
        layout
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
        <Button disabled={disabled}>Add</Button>
      </StyledForm>
    </Card>
  );
};

export default AddForm;
