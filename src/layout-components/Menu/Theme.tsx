import { themeAtom } from "@atoms";
import { Checkbox } from "@global-components";
import { useAtom } from "jotai";
import { FC, FormEventHandler } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { globalScope } from "utils/constants";
import useTranslation from "utils/hooks/useTranslation";
import { MenuItemContainer } from "./styles";

type ThemeProps = {};

const Theme: FC<ThemeProps> = (props) => {
  const {} = props;
  const [theme, setTheme] = useAtom(themeAtom, globalScope);
  const translations = useTranslation();

  const handleChange: FormEventHandler<HTMLInputElement> = (event) => {
    setTheme(event.currentTarget.checked ? "dark" : "light");
  };

  return (
    <MenuItemContainer>
      <h3>{translations.menu.theme}</h3>
      <div className="toggle-container">
        <BsSunFill className="icon" />
        <Checkbox checked={theme === "dark"} onChange={handleChange} />
        <BsFillMoonFill className="icon" />
      </div>
    </MenuItemContainer>
  );
};

export default Theme;
