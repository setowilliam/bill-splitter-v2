import { FC } from "react";
import { FaBars } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";

import { NavBarContainer, Title } from "./styles";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = (props) => {
  const {} = props;

  return (
    <NavBarContainer>
      <Title>
        <RiBillFill />
        <h1>Bill Splitter</h1>
      </Title>
      <FaBars />
    </NavBarContainer>
  );
};

export default NavBar;
