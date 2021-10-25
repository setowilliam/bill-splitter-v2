import {
  FocusEventHandler,
  forwardRef,
  HTMLProps,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { InputContainer, LeadingIconContainer, StyledInput } from "./styles";

type InputProps = Omit<HTMLProps<HTMLInputElement>, "ref" | "as"> & {
  leadingIcon?: ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { leadingIcon, ...rest } = props;

  const [transparent, setTransparent] = useState(false);

  useEffect(() => {
    if (transparent) {
      setTimeout(() => setTransparent(false), 200);
    }
  }, [transparent]);

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    props.onBlur?.(event);
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    setTransparent(true);
    props.onFocus?.(event);
  };

  return (
    <InputContainer>
      {leadingIcon && (
        <LeadingIconContainer>{leadingIcon}</LeadingIconContainer>
      )}
      <StyledInput
        $transparent={transparent}
        ref={ref}
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </InputContainer>
  );
});

Input.displayName = "Input";

export default Input;
