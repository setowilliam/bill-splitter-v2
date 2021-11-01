import { FC } from "react";

import { HeaderContainer } from "./styles";

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  const { children } = props;

  return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
