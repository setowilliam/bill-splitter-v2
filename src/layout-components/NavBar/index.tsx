import { FC } from "react";
import { FaBars, FaReceipt } from "react-icons/fa";

import { NavBarContainer, Title } from "./styles";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = (props) => {
  const {} = props;

  return (
    <NavBarContainer>
      <Title>
        <FaReceipt className="receipt-icon" />
        <h1>Bill Splitter</h1>
      </Title>
      <FaBars className="menu-icon" />
    </NavBarContainer>
  );
};

export default NavBar;
