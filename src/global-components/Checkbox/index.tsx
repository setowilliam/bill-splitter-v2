import { forwardRef, HTMLProps, ReactNode } from "react";
import { CheckboxContainer } from "./styles";

type CheckboxProps = HTMLProps<HTMLInputElement> & {
  label?: ReactNode;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { label, ...rest } = props;

  return (
    <CheckboxContainer>
      <input ref={ref} type="checkbox" {...rest} />
      {label}
    </CheckboxContainer>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
