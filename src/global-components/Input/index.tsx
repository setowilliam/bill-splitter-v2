import { FC, FocusEventHandler, HTMLAttributes, useRef, useState } from "react";
import { StyledInput } from "./styles";

type InputProps = HTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    props.onBlur?.(event);
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    props.onFocus?.(event);
  };

  return (
    <StyledInput
      ref={inputRef}
      {...props}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default Input;
