import { FC } from "react";
import { useRouter } from "next/dist/client/router";

import { MainLayoutContainer } from "./styles";
import { mainVariants } from "./utils";

type MainLayoutProps = {};

const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children } = props;
  const router = useRouter();

  return (
    <MainLayoutContainer
      variants={mainVariants}
      transition={{ bounce: 0 }}
      animate="neutral"
      initial={router.pathname === "/" ? "left" : "right"}
      exit={router.pathname === "/" ? "right" : "left"}
    >
      {children}
    </MainLayoutContainer>
  );
};

export default MainLayout;
