import { FC, ReactNode } from "react";

import {
  CheckboxContainer,
  HeaderContainer,
  StyledCardContainer,
} from "./styles";

type AssignFormProps = { header: ReactNode };

const AssignForm: FC<AssignFormProps> = (props) => {
  const { children, header } = props;

  return (
    <StyledCardContainer
      className="assign"
      header={<HeaderContainer>{header}</HeaderContainer>}
      open={true}
    >
      <CheckboxContainer layout>{children}</CheckboxContainer>
    </StyledCardContainer>
  );
};

export default AssignForm;
