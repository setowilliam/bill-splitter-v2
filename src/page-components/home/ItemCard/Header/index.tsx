import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import { IoMdPeople } from "react-icons/io";
import { formatMoney } from "utils/functions";
import useTranslation from "utils/hooks/useTranslation";
import { ItemType } from "utils/typings";

import { HeaderContainer } from "./styles";

type HeaderProps = {
  item: ItemType;
};

const Header: FC<HeaderProps> = (props) => {
  const { item } = props;
  const { pages } = useTranslation();
  const { locale } = useRouter();

  return (
    <HeaderContainer layout>
      <span className="name">{item.item}</span>
      <span className="price">{formatMoney(item.price, locale)}</span>
      <span className="count">
        <IoMdPeople />
        {item.people.length || pages.home.items.shared}
      </span>
    </HeaderContainer>
  );
};

export default Header;
