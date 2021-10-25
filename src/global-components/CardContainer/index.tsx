import { FC, ReactNode } from "react";
import { HTMLMotionProps } from "framer-motion";

import { Card } from "@global-components";

import { ContentContainer } from "./styles";
import Header from "./Header";

type CardContainerProps = HTMLMotionProps<"div"> & {
  header?: ReactNode;
};

const CardContainer: FC<CardContainerProps> = (props) => {
  const { children, header, ...rest } = props;

  return (
    <Card header={<Header>{header}</Header>} borderless {...rest}>
      <ContentContainer>{children}</ContentContainer>
    </Card>
  );
};

export default CardContainer;
