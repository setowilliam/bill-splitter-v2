import { taxAtom, tipAtom } from "@atoms";
import { Input } from "@global-components";
import { Title } from "@page-components";
import { useAtom } from "jotai";
import { NextPage } from "next";
import FeesForm from "page-components/fees/FeesForm";
import { globalScope } from "utils/constants";

const Fees: NextPage = () => {
  const [tax, setTax] = useAtom(taxAtom, globalScope);
  const [tip, setTip] = useAtom(tipAtom, globalScope);

  return (
    <>
      <FeesForm>
        <Title layout>Fees</Title>
        <Input
          label="Tax"
          type="number"
          inputMode="decimal"
          defaultValue={tax}
          leadingIcon="%"
          onChange={(event) => setTax(parseFloat(event.currentTarget.value))}
        />
        <Input
          label="Tip"
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
