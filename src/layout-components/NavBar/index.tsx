import { menuAtom } from "@atoms";
import { Button } from "@global-components";
import { useAtom } from "jotai";
import { FC } from "react";
import { FaBars, FaReceipt } from "react-icons/fa";
import { globalScope } from "utils/constants";
import useTranslation from "utils/hooks/useTranslation";

import { NavBarContainer, Title } from "./styles";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = (props) => {
  const {} = props;
  const translations = useTranslation();

  const [menu, setMenu] = useAtom(menuAtom, globalScope);

  return (
    <NavBarContainer>
      <Title>
        <FaReceipt className="receipt-icon" />
        <h1>{translations.global.title}</h1>
      </Title>
      <Button variant="borderless" onClick={() => setMenu(!menu)}>
        <FaBars className="menu-icon" />
      </Button>
    </NavBarContainer>
  );
};

export default NavBar;
