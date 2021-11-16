import { FC } from "react";
import { useAtom } from "jotai";

import { taxAtom, tipAtom } from "@atoms";
import { globalScope } from "utils/constants";
import { formatMoney, includeTaxTip } from "utils/functions";

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
  const { locale } = useRouter();

  return (
    <HeaderContainer>
      <h2>{name}</h2>
      <span>{formatMoney(includeTaxTip(total, tax, tip), locale)}</span>
    </HeaderContainer>
  );
};

export default Header;
