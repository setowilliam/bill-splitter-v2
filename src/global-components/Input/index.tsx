import { inputAtom } from "@atoms";
import { useAtom } from "jotai";
import {
  FocusEventHandler,
  forwardRef,
  HTMLProps,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  InputContainer,
  LabelContainer,
  LeadingIconContainer,
  ParentContainer,
  StyledInput,
} from "./styles";

type InputProps = Omit<HTMLProps<HTMLInputElement>, "ref" | "as"> & {
  leadingIcon?: ReactNode;
  label?: ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { leadingIcon, label, ...rest } = props;

  const [transparent, setTransparent] = useState(false);
  const [inputFocus, setInputFocus] = useAtom(inputAtom);

  const scrollTop = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (transparent) {
      setTimeout(() => setTransparent(false), 200);
    }
  }, [transparent]);

  useEffect(() => {
    if (!inputFocus) {
      scrollTop.current = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    } else {
      scrollTop.current && clearTimeout(scrollTop.current);
      scrollTop.current = null;
    }
  }, [inputFocus]);

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    setInputFocus(false);
    props.onBlur?.(event);
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    // setTransparent(true);
    setInputFocus(true);
    props.onFocus?.(event);
  };

  return (
    <ParentContainer layout>
      {label && <LabelContainer>{label}</LabelContainer>}
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
    </ParentContainer>
  );
});

Input.displayName = "Input";

export default Input;
