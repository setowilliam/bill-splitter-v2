import { useAtom } from "jotai";
import { FC } from "react";

import { taxAtom, tipAtom } from "@atoms";

import { globalScope } from "utils/constants";
import { formatMoney, includeTaxTip } from "utils/functions";
import { LineContainer } from "./styles";

type HeaderProps = {
  total: number;
};

const Header: FC<HeaderProps> = (props) => {
  const { total } = props;
  const [tax] = useAtom(taxAtom, globalScope);
  const [tip] = useAtom(tipAtom, globalScope);

  return (
    <LineContainer>
      <h1>Total</h1>
      <h1>{formatMoney(includeTaxTip(total, tax, tip))}</h1>
    </LineContainer>
  );
};

export default Header;
