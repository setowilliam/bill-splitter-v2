import { taxAtom, tipAtom } from "@atoms";
import { Input } from "@global-components";
import { Title } from "@page-components";
import { useAtom } from "jotai";
import { NextPage } from "next";
import FeesForm from "page-components/fees/FeesForm";
import { globalScope } from "utils/constants";
import useTranslation from "utils/hooks/useTranslation";

const Fees: NextPage = () => {
  const [tax, setTax] = useAtom(taxAtom, globalScope);
  const [tip, setTip] = useAtom(tipAtom, globalScope);
  const { pages } = useTranslation();

  return (
    <>
      <FeesForm>
        <Title layout>{pages.fees.title}</Title>
        <Input
          label={pages.fees.tax}
          type="number"
          inputMode="decimal"
          defaultValue={tax}
          leadingIcon="%"
          onChange={(event) => setTax(parseFloat(event.currentTarget.value))}
        />
        <Input
          label={pages.fees.tip}
          type="number"
          inputMode="decimal"
          defaultValue={tip}
          leadingIcon="%"
          onChange={(event) => setTip(parseFloat(event.currentTarget.value))}
        />
      </FeesForm>
    </>
  );
};

export default Fees;
