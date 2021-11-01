import { FC, ReactNode, useState } from "react";
import { AnimatePresence, HTMLMotionProps } from "framer-motion";

import { Card } from "@global-components";

import { ContentContainer } from "./styles";
import Header from "./Header";

type CardContainerProps = HTMLMotionProps<"div"> & {
  header?: ReactNode;
  defaultOpen?: boolean;
};

const CardContainer: FC<CardContainerProps> = (props) => {
  const { children, header, defaultOpen, ...rest } = props;

  const [open, setOpen] = useState(defaultOpen);

  return (
    <Card
      header={<Header open={open}>{header}</Header>}
      initial={{ opacity: 0, borderRadius: "0.5rem" }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      open={open}
      onToggle={(open) => setOpen(open)}
      {...rest}
    >
      <ContentContainer>
        <AnimatePresence>{children}</AnimatePresence>
      </ContentContainer>
    </Card>
  );
};

export default CardContainer;
