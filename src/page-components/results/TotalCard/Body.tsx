import { AnimatePresence } from "framer-motion";
import { useAtom } from "jotai";
import { FC } from "react";

import { taxAtom, tipAtom } from "@atoms";

import { globalScope } from "utils/constants";
import { formatMoney } from "utils/functions";
import { LineContainer } from "./styles";

type BodyProps = { total: number };

const Body: FC<BodyProps> = (props) => {
  const { total } = props;
  const [tax] = useAtom(taxAtom, globalScope);
  const [tip] = useAtom(tipAtom, globalScope);

  return (
    <>
      <LineContainer layout>
        <span>Subtotal</span>
        <span>{formatMoney(total)}</span>
      </LineContainer>
      <AnimatePresence exitBeforeEnter>
        {Boolean(tax) && (
          <LineContainer
            layout
            transition={{ bounce: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span>Tax</span>
            <span>{formatMoney((total * (tax || 0)) / 100)}</span>
          </LineContainer>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {Boolean(tip) && (
          <LineContainer
            layout
            transition={{ bounce: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span>Tip</span>
            <span>{formatMoney((total * (tip || 0)) / 100)}</span>
          </LineContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Body;
