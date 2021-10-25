import { FC, ReactNode } from "react";
import { Provider } from "jotai";
import { HTMLMotionProps } from "framer-motion";

import { StyledCardContainer } from "./styles";
import Header from "./Header";

import Contents from "./Contents";
import { containerVariants } from "./utils";

type CardContainerProps = HTMLMotionProps<"div"> & {
  header?: ReactNode;
};

const CardContainer: FC<CardContainerProps> = (props) => {
  const { children, header, ...rest } = props;

  return (
    <Provider>
      <StyledCardContainer
        layout="position"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        {...rest}
      >
        <Header>{header}</Header>
        <Contents>{children}</Contents>
      </StyledCardContainer>
    </Provider>
  );
};

export default CardContainer;
