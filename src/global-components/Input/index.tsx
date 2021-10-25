import {
  FocusEventHandler,
  forwardRef,
  HTMLProps,
  useEffect,
  useState,
} from "react";
import { InputContainer, StyledInput } from "./styles";

type InputProps = Omit<HTMLProps<HTMLInputElement>, "ref" | "as">;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
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
      <StyledInput
        $transparent={transparent}
        ref={ref}
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </InputContainer>
  );
});

Input.displayName = "Input";

export default Input;
