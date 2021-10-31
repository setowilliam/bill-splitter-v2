import { FC } from "react";
import { FeesFormContainer } from "./styles";

type FeesFormProps = {};

const FeesForm: FC<FeesFormProps> = (props) => {
  const { children } = props;

  return <FeesFormContainer>{children}</FeesFormContainer>;
};

export default FeesForm;
