import { FC } from "react";
import { IoMdPeople } from "react-icons/io";
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
      <span className="name">{item.item}</span>
      <span className="price">{formatMoney(item.price)}</span>
      <span className="count">
        <IoMdPeople />
        {item.people.length || "Shared"}
      </span>
    </HeaderContainer>
  );
};

export default Header;
