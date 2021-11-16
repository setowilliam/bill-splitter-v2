import { taxAtom, tipAtom, tipTypeAtom } from "@atoms";
import { Input } from "@global-components";
import { Title } from "@page-components";
import { LayoutGroup } from "framer-motion";
import { useAtom } from "jotai";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import FeesForm from "page-components/fees/FeesForm";
import TipOptionsCard from "page-components/fees/TipOptionsCard";
import { AiFillMoneyCollect } from "react-icons/ai";
import { globalScope } from "utils/constants";
import useTranslation from "utils/hooks/useTranslation";

const Fees: NextPage = () => {
  const [tax, setTax] = useAtom(taxAtom, globalScope);
  const [tip, setTip] = useAtom(tipAtom, globalScope);
  const [tipType] = useAtom(tipTypeAtom, globalScope);
  const { pages } = useTranslation();
  const { locale } = useRouter();

  return (
    <div className="full-page">
      <LayoutGroup>
        <Title layout>
          <AiFillMoneyCollect className="icon" />
          {pages.fees.title}
        </Title>
        <FeesForm>
          <Input
            label={pages.fees.tax}
            type="number"
            inputMode="decimal"
            defaultValue={tax || ""}
            leadingIcon="%"
            onChange={(event) => setTax(parseFloat(event.currentTarget.value))}
            width="2rem"
            setValue={(value) => setTax(parseFloat(value))}
          />
          <Input
            label={pages.fees.tip}
            type="number"
            inputMode="decimal"
            defaultValue={tip || ""}
            leadingIcon={
              tipType === "fixed" ? (locale === "en" ? "$" : "￥") : "%"
            }
            onChange={(event) => setTip(parseFloat(event.currentTarget.value))}
            width="5rem"
            setValue={(value) => setTip(parseFloat(value))}
          />
        </FeesForm>
        <TipOptionsCard />
      </LayoutGroup>
    </div>
  );
};

export default Fees;
