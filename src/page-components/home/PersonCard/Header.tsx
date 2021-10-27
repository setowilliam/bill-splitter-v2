import { FC } from "react";
import { MdFastfood } from "react-icons/md";

import { PersonType } from "utils/typings";

import { HeaderContainer } from "./styles";

type HeaderProps = {
  person: PersonType;
};

const Header: FC<HeaderProps> = (props) => {
  const { person } = props;

  return (
    <HeaderContainer layout>
      <span>{person.name}</span>
      <span className="count">
        {person.items.length}
        <MdFastfood />
      </span>
    </HeaderContainer>
  );
};

export default Header;
