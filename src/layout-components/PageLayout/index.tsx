import { FC } from "react";

import { PageLayoutContainer } from "./styles";

type PageLayoutProps = {};

const PageLayout: FC<PageLayoutProps> = (props) => {
  const { children } = props;

  return <PageLayoutContainer>{children}</PageLayoutContainer>;
};

export default PageLayout;
