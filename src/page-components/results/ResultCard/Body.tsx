import { FC } from "react";
import { useAtom } from "jotai";
import { motion } from "framer-motion";

import { taxAtom, tipAtom } from "@atoms";
import { globalScope } from "utils/constants";
import { formatMoney, includeTaxTip, roundNumber } from "utils/functions";
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

          const formattedPrice = formatMoney(
            includeTaxTip(resultItem.splitPrice, tax, tip),
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
