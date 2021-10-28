import { Checkbox } from "@global-components";
import { FC } from "react";
import { MenuItemContainer } from "./styles";

type LanguageProps = {};

const Language: FC<LanguageProps> = (props) => {
  const {} = props;

  return (
    <MenuItemContainer>
      <h3>Language</h3>
      <div className="toggle-container">
        en
        <Checkbox />
        ja
      </div>
    </MenuItemContainer>
  );
};

export default Language;
