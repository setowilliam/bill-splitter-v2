import { taxAtom, tipAtom } from "@atoms";
import { Input } from "@global-components";
import { Title } from "@page-components";
import { useAtom } from "jotai";
import { NextPage } from "next";
import FeesForm from "page-components/fees/FeesForm";
import { AiFillMoneyCollect } from "react-icons/ai";
import { globalScope } from "utils/constants";
import useTranslation from "utils/hooks/useTranslation";

const Fees: NextPage = () => {
  const [tax, setTax] = useAtom(taxAtom, globalScope);
  const [tip, setTip] = useAtom(tipAtom, globalScope);
  const { pages } = useTranslation();

  return (
    <>
      <Title layout>
        <AiFillMoneyCollect className="icon" />
        {pages.fees.title}
      </Title>
      <FeesForm>
        <Input
          label={pages.fees.tax}
          type="number"
          inputMode="decimal"
          defaultValue={tax}
          leadingIcon="%"
          onChange={(event) => setTax(parseFloat(event.currentTarget.value))}
          width="2rem"
        />
        <Input
          label={pages.fees.tip}
          type="number"
          inputMode="decimal"
          defaultValue={tip}
          leadingIcon="%"
          onChange={(event) => setTip(parseFloat(event.currentTarget.value))}
          width="2rem"
        />
      </FeesForm>
    </>
  );
};

export default Fees;
