import { FC } from "react";
import { formatMoney } from "utils/functions";
import { ItemType } from "utils/typings";

import { HeaderContainer } from "./styles";

type HeaderProps = {
  item: ItemType;
};

const Header: FC<HeaderProps> = (props) => {
  const { item } = props;

  return (
    <HeaderContainer layout>
      <span>{item.item}</span>
      <span>{formatMoney(item.price)}</span>
    </HeaderContainer>
  );
};

export default Header;
