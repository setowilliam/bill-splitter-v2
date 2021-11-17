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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Body: FC<BodyProps> = (props) => {
  const { resultItems, total } = props;
  const [tax] = useAtom(taxAtom, globalScope);
  const [tip] = useAtom(tipAtom, globalScope);
  const [tipType] = useAtom(tipTypeAtom, globalScope);
  const { locale } = useRouter();

  const pieData = Object.values(resultItems)
    .sort((a, b) => b.splitPrice - a.splitPrice)
    .map((resultItem) => {
      const percentage = roundNumber((resultItem.splitPrice / total) * 100, 1);

      const fees = getFees(resultItem.splitPrice, tax, tip, tipType);

      const formattedPrice = formatMoney(
        resultItem.splitPrice + fees.tax + fees.tip,
        locale
      );

      return {
        name: resultItem.item,
        value: resultItem.splitPrice + fees.tax + fees.tip,
      };
    });

  return (
    <motion.div
      layout
      style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
    >
      {Object.values(resultItems)
        .sort((a, b) => b.splitPrice - a.splitPrice)
        .map((resultItem, index) => {
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
            <div
              key={resultItem.itemId}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <div
                  style={{
                    backgroundColor: COLORS[index % COLORS.length],
                    height: "1rem",
                    width: "1rem",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.8rem",
                  }}
                >{`${resultItem.item} (${percentage}%)`}</span>
              </span>
              <span
                style={{
                  fontSize: "0.8rem",
                }}
              >{`${formattedPrice}`}</span>
            </div>
          );
        })}
    </motion.div>
  );
};

export default Body;
