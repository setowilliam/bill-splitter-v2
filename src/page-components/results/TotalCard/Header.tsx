import { useAtom } from "jotai";
import { FC } from "react";

import { taxAtom, tipAtom, tipTypeAtom } from "@atoms";

import { globalScope } from "utils/constants";
import { formatMoney, getFees } from "utils/functions";
import { LineContainer } from "./styles";
import { useRouter } from "next/dist/client/router";
import useTranslation from "utils/hooks/useTranslation";

type HeaderProps = {
  total: number;
};

const Header: FC<HeaderProps> = (props) => {
  const { total } = props;
  const [tax] = useAtom(taxAtom, globalScope);
  const [tip] = useAtom(tipAtom, globalScope);
  const [tipType] = useAtom(tipTypeAtom, globalScope);
  const { locale } = useRouter();
  const { pages } = useTranslation();

  const fees = getFees(total, tax, tip, tipType);

  return (
    <LineContainer>
      <h1>{pages.results.total}</h1>
      <h1>{formatMoney(total + fees.tax + fees.tip, locale)}</h1>
    </LineContainer>
  );
};

export default Header;
