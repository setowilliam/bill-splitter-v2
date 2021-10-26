import { FC, ReactNode } from "react";
import { AnimatePresence, HTMLMotionProps } from "framer-motion";

import { Card } from "@global-components";

import { ContentContainer } from "./styles";
import Header from "./Header";

type CardContainerProps = HTMLMotionProps<"div"> & {
  header?: ReactNode;
};

const CardContainer: FC<CardContainerProps> = (props) => {
  const { children, header, ...rest } = props;

  return (
    <Card
      header={<Header>{header}</Header>}
      borderless
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...rest}
    >
      <ContentContainer>
        <AnimatePresence>{children}</AnimatePresence>
      </ContentContainer>
    </Card>
  );
};

export default CardContainer;
