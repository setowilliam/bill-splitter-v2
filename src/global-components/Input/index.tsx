import { FC, FocusEventHandler, HTMLAttributes, useRef } from "react";
import { InputContainer, StyledInput } from "./styles";

type InputProps = HTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    props.onBlur?.(event);
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    const { current } = inputRef;
    if (current) {
      current.style.opacity = "0";
      setTimeout(() => {
        current.style.opacity = "1";
      }, 200);
    }

    props.onFocus?.(event);
  };

  return (
    <InputContainer>
      <StyledInput
        ref={inputRef}
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </InputContainer>
  );
};

export default Input;
