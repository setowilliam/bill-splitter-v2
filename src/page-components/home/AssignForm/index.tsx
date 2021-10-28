import { FC, ReactNode } from "react";

import { CardContainer } from "@global-components";

import { CheckboxContainer, HeaderContainer } from "./styles";

type AssignFormProps = { header: ReactNode };

const AssignForm: FC<AssignFormProps> = (props) => {
  const { children, header } = props;

  return (
    <CardContainer
      className="assign"
      header={<HeaderContainer>{header}</HeaderContainer>}
      open={true}
    >
      <CheckboxContainer layout>{children}</CheckboxContainer>
    </CardContainer>
  );
};

export default AssignForm;
