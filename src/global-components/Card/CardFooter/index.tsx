import { FC } from "react";
import { StyledCardFooter } from "./styles";

type CardFooterProps = {};

const CardFooter: FC<CardFooterProps> = (props) => {
  const { children } = props;

  return <StyledCardFooter>{children}</StyledCardFooter>;
};

export default CardFooter;
