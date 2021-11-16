import { FC } from "react";
import { useAtom } from "jotai";
import { motion } from "framer-motion";

import { taxAtom, tipAtom, tipTypeAtom } from "@atoms";
import { globalScope } from "utils/constants";
import { formatMoney, getFees, roundNumber } from "utils/functions";
import { ResultItemType } from "utils/typings";
import { useRouter } from "next/dist/client/router";

type BodyProps = {
  resultItems: Record<string, ResultItemType>;
  total: number;
};


const Body: FC<BodyProps> = (props) => {
  const { resultItems, total } = props;
  const [tax] = useAtom(taxAtom, globalScope);
  const [tip] = useAtom(tipAtom, globalScope);
  const [tipType] = useAtom(tipTypeAtom, globalScope);
  const { locale } = useRouter();

  return (
    <motion.div layout>
      {Object.values(resultItems)
        .sort((a, b) => b.splitPrice - a.splitPrice)
        .map((resultItem) => {
          const percentage = roundNumber(
            (resultItem.splitPrice / total) * 100,
            1
          );

          const fees = getFees(resultItem.splitPrice, tax, tip, tipType);

          const formattedPrice = formatMoney(
            resultItem.splitPrice + fees.tax + fees.tip,
            locale
          );

          return (
            <div key={resultItem.itemId}>
              <span>{resultItem.item}</span>
              <span>{`: ${formattedPrice} (${percentage}%)`}</span>
            </div>
          );
        })}
    </motion.div>
  );
};

export default Body;
