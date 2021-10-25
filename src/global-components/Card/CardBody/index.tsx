import { FC } from "react";

import { StyledCardBody } from "./styles";

type CardBodyProps = {};

const CardBody: FC<CardBodyProps> = (props) => {
  const { children } = props;

  return <StyledCardBody layout>{children}</StyledCardBody>;
};

export default CardBody;
