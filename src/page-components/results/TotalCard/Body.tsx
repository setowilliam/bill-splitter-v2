import { AnimatePresence } from "framer-motion";
import { useAtom } from "jotai";
import { FC } from "react";

import { taxAtom, tipAtom, tipTypeAtom } from "@atoms";

import { globalScope } from "utils/constants";
import { formatMoney, getFees } from "utils/functions";
import { LineContainer } from "./styles";
import { useRouter } from "next/dist/client/router";
import useTranslation from "utils/hooks/useTranslation";

type BodyProps = { total: number };

const Body: FC<BodyProps> = (props) => {
  const { total } = props;
  const [tax] = useAtom(taxAtom, globalScope);
  const [tip] = useAtom(tipAtom, globalScope);
  const [tipType] = useAtom(tipTypeAtom, globalScope);
  const { locale } = useRouter();
  const { pages } = useTranslation();

  const fees = getFees(total, tax, tip, tipType);

  return (
    <>
      <LineContainer layout>
        <span>{pages.results.subtotal}</span>
        <span>{formatMoney(total, locale)}</span>
      </LineContainer>
      <AnimatePresence>
        {Boolean(tax) && (
          <LineContainer
            layout
            transition={{ bounce: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span>{pages.results.tax}</span>
            <span>{formatMoney(fees.tax, locale)}</span>
          </LineContainer>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {Boolean(tip) && (
          <LineContainer
            layout
            transition={{ bounce: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span>{pages.results.tip}</span>
            <span>{formatMoney(fees.tip, locale)}</span>
          </LineContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Body;
