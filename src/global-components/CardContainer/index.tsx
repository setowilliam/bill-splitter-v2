import { FC, ReactNode } from "react";
import { AnimatePresence, HTMLMotionProps } from "framer-motion";

import { Card } from "@global-components";

import { ContentContainer } from "./styles";
import Header from "./Header";

type CardContainerProps = HTMLMotionProps<"div"> & {
  header?: ReactNode;
  open?: boolean;
};

const CardContainer: FC<CardContainerProps> = (props) => {
  const { children, header, open, ...rest } = props;

  return (
    <Card
      header={<Header>{header}</Header>}
      initial={{ opacity: 0, borderRadius: "0.5rem" }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      open={open}
      {...rest}
    >
      <ContentContainer>
        <AnimatePresence>{children}</AnimatePresence>
      </ContentContainer>
    </Card>
  );
};

export default CardContainer;
