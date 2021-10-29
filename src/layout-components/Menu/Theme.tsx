import { themeAtom } from "@atoms";
import { Checkbox } from "@global-components";
import { useAtom } from "jotai";
import { FC, FormEventHandler } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { globalScope } from "utils/constants";
import { MenuItemContainer } from "./styles";

type ThemeProps = {};

const Theme: FC<ThemeProps> = (props) => {
  const {} = props;
  const [theme, setTheme] = useAtom(themeAtom, globalScope);

  const handleChange: FormEventHandler<HTMLInputElement> = (event) => {
    setTheme(event.currentTarget.checked ? "dark" : "light");
  };

  return (
    <MenuItemContainer>
      <h3>Theme</h3>
      <div className="toggle-container">
        <BsSunFill className="icon" />
        <Checkbox checked={theme === "dark"} onChange={handleChange} />
        <BsFillMoonFill className="icon" />
      </div>
    </MenuItemContainer>
  );
};

export default Theme;
