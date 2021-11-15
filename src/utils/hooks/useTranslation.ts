import { translations } from "lang";
import { useRouter } from "next/dist/client/router";

const useTranslation = () => {
  const { locale } = useRouter();

  if (locale !== "ja" && locale !== "en") {
    return translations.en;
  }

  return translations[locale];
};

export default useTranslation;
