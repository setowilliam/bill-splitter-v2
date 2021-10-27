import { motion } from "framer-motion";
import {
  FormEventHandler,
  forwardRef,
  HTMLProps,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { CheckboxContainer } from "./styles";

type CheckboxProps = HTMLProps<HTMLInputElement> & {
  label?: ReactNode;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { label, ...rest } = props;
  const [checked, setChecked] = useState(rest.checked || false);

  const handleChange: FormEventHandler<HTMLInputElement> = (event) => {
    setChecked(event.currentTarget.checked);
    rest.onChange?.(event);
  };

  useEffect(() => {
    setChecked(rest.checked || false);
  }, [rest.checked]);

  return (
    <CheckboxContainer layout $checked={checked}>
      <input ref={ref} type="checkbox" {...rest} onChange={handleChange} />
      <motion.div
        className="switch"
        layout
        animate={{ backgroundColor: checked ? "#77dd77" : "#cfcfcf" }}
      >
        <motion.div className="toggle" layout />
      </motion.div>
      <motion.span className="text" layout>
        {label}
      </motion.span>
    </CheckboxContainer>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
