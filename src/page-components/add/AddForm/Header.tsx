import { toggleAtom } from "@atoms";
import { useAtom } from "jotai";
import { FC } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

import { HeaderContainer } from "./styles";

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  const { children } = props;
  const [closed] = useAtom(toggleAtom);

  return (
    <HeaderContainer>
      {closed ? (
        <FaPlusCircle className="icon" />
      ) : (
        <FaMinusCircle className="icon" />
      )}
      {children}
    </HeaderContainer>
  );
};

export default Header;
