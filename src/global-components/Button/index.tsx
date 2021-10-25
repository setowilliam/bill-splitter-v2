import { forwardRef } from "react";

import { ButtonProps } from "./typings";
import { StyledButton } from "./styles";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <StyledButton ref={ref} {...rest}>
      {children}
    </StyledButton>
  );
});

Button.displayName = "Button";

export default Button;
