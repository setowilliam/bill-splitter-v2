import { inputAtom } from "@atoms";
import { useAtom } from "jotai";
import {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  HTMLProps,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { scrollToTop } from "utils/functions";
import {
  CloseButton,
  InputContainer,
  LabelContainer,
  LeadingIconContainer,
  ParentContainer,
  StyledInput,
} from "./styles";

type InputProps = Omit<HTMLProps<HTMLInputElement>, "ref" | "as"> & {
  leadingIcon?: ReactNode;
  label?: ReactNode;
  setValue?: (value: string) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { leadingIcon, label, setValue, width, ...rest } = props;
  const [hasValue, setHasValue] = useState(
    Boolean(rest.value || rest.defaultValue)
  );

  const [inputFocus, setInputFocus] = useAtom(inputAtom);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTop = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!inputFocus) {
      scrollTop.current = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.addEventListener("scroll", scrollToTop);
      }, 100);
    } else {
      scrollTop.current && clearTimeout(scrollTop.current);
      scrollTop.current = null;
      window.removeEventListener("scroll", scrollToTop);
    }
  }, [inputFocus]);

  // useEffect(() => {
  //   setHasValue(Boolean(rest.value));
  // }, [rest.value]);

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    setInputFocus(false);
    props.onBlur?.(event);
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    setInputFocus(true);
    props.onFocus?.(event);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setHasValue(Boolean(event.currentTarget.value));
    props.onChange?.(event);
  };

  const handleClearClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    const inputElement = containerRef.current?.querySelector("input");

    if (inputElement) {
      setValue?.("");
      inputElement.value = "";
      setHasValue(false);
    }
  };

  return (
    <ParentContainer layout>
      {label && <LabelContainer>{label}</LabelContainer>}
      <InputContainer ref={containerRef}>
        {leadingIcon && (
          <LeadingIconContainer>{leadingIcon}</LeadingIconContainer>
        )}
        <StyledInput
          ref={ref}
          {...rest}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          $width={width}
        />
        <CloseButton
          variant="borderless"
          onClick={handleClearClick}
          disabled={!hasValue || inputFocus}
          transition={{ duration: 0.2 }}
          animate={{ opacity: hasValue ? 1 : 0 }}
        >
          <AiFillCloseCircle />
        </CloseButton>
      </InputContainer>
    </ParentContainer>
  );
});

Input.displayName = "Input";

export default Input;
