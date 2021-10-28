import { Checkbox } from "@global-components";
import { FC } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { MenuItemContainer } from "./styles";

type ThemeProps = {};

const Theme: FC<ThemeProps> = (props) => {
  const {} = props;

  return (
    <MenuItemContainer>
      <h3>Theme</h3>
      <div className="toggle-container">
        <BsSunFill className="icon" />
        <Checkbox />
        <BsFillMoonFill className="icon" />
      </div>
    </MenuItemContainer>
  );
};

export default Theme;
