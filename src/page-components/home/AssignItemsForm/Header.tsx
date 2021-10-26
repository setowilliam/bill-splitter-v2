import { FC } from "react";
import { MdFastfood } from "react-icons/md";
import { HeaderContainer } from "./styles";

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  const {} = props;

  return (
    <HeaderContainer>
      <MdFastfood />
      Assign to items
    </HeaderContainer>
  );
};

export default Header;
