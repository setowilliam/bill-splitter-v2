import { FC, FormEventHandler } from "react";
import { Checkbox } from "@global-components";
import { MenuItemContainer } from "./styles";
import useTranslation from "utils/hooks/useTranslation";
import { useRouter } from "next/dist/client/router";

type LanguageProps = {};

const Language: FC<LanguageProps> = (props) => {
  const {} = props;
  const { locale, pathname, push, asPath } = useRouter();
  const translations = useTranslation();

  const handleChange: FormEventHandler<HTMLInputElement> = (event) => {
    const { checked } = event.currentTarget;

    let nextLocale;

    if (checked) {
      nextLocale = "ja";
    } else {
      nextLocale = "en";
    }

    push({ pathname }, asPath, { locale: nextLocale });
  };

  return (
    <MenuItemContainer>
      <h3>{translations.menu.language}</h3>
      <div className="toggle-container">
        en
        <Checkbox checked={locale === "ja"} onChange={handleChange} />
        ja
      </div>
    </MenuItemContainer>
  );
};

export default Language;
