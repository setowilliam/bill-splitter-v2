import { FC } from "react";
import { BsPersonPlusFill } from "react-icons/bs";
import { HeaderContainer } from "./styles";

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  const {} = props;

  return (
    <HeaderContainer>
      <BsPersonPlusFill />
      Assign to people
    </HeaderContainer>
  );
};

export default Header;
