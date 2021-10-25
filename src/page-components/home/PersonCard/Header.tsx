import { FC } from "react";
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
      <span>{person.items.length}</span>
    </HeaderContainer>
  );
};

export default Header;
