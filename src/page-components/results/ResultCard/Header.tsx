import { FC } from "react";
import { useAtom } from "jotai";

import { taxAtom, tipAtom, tipTypeAtom } from "@atoms";
import { globalScope } from "utils/constants";
import { formatMoney, getFees } from "utils/functions";

import { HeaderContainer } from "./styles";
import { useRouter } from "next/dist/client/router";

type HeaderProps = {
  name: string;
  total: number;
};

const Header: FC<HeaderProps> = (props) => {
  const { name, total } = props;
  const [tax] = useAtom(taxAtom, globalScope);
  const [tip] = useAtom(tipAtom, globalScope);
  const [tipType] = useAtom(tipTypeAtom, globalScope);
  const { locale } = useRouter();

  const fees = getFees(total, tax, tip, tipType);

  return (
    <HeaderContainer>
      <h2>{name}</h2>
      <span>{formatMoney(total + fees.tax + fees.tip, locale)}</span>
    </HeaderContainer>
  );
};

export default Header;
