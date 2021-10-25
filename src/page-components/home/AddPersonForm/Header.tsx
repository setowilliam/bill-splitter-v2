import { FC } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

import { HeaderContainer } from "./styles";

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  const {} = props;

  return (
    <HeaderContainer>
      <BsPlusCircleFill className="icon" />
      <span>New Person</span>
    </HeaderContainer>
  );
};

export default Header;
