import { forwardRef, HTMLProps, ReactNode } from "react";
import { CheckboxContainer } from "./styles";

type CheckboxProps = HTMLProps<HTMLInputElement> & {
  label?: ReactNode;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { label, ...rest } = props;

  return (
    <CheckboxContainer layout>
      <input ref={ref} type="checkbox" {...rest} />
      <span className="text">{label}</span>
    </CheckboxContainer>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
