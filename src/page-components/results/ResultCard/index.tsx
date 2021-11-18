import { FC, useMemo } from "react";

import { ResultType } from "utils/typings";
import Header from "./Header";
import Body from "./Body";
import { StyledCard } from "./styles";
import { getFees, roundNumber } from "utils/functions";
import { useAtom } from "jotai";
import { taxAtom, tipAtom, tipTypeAtom } from "@atoms";
import { globalScope } from "utils/constants";
import { ChartData } from "chart.js";
import { Pie } from "react-chartjs-2";

type ResultCardProps = {
  result: ResultType;
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ResultCard: FC<ResultCardProps> = (props) => {
  const [tax] = useAtom(taxAtom, globalScope);
  const [tip] = useAtom(tipAtom, globalScope);
  const [tipType] = useAtom(tipTypeAtom, globalScope);
  const { result } = props;

  const pieData: ChartData<"pie"> = useMemo(() => {
    const data = Object.values(result.resultItems)
      .sort((a, b) => b.splitPrice - a.splitPrice)
      .map((resultItem, index) => {
        const percentage = roundNumber(
          (resultItem.splitPrice / result.total) * 100,
          1
        );
        const fees = getFees(resultItem.splitPrice, tax, tip, tipType);

        return {
          name: resultItem.item,
          value: resultItem.splitPrice + fees.tax + fees.tip,
        };
      });

    return {
      datasets: [
        {
          data: data.map(({ value }) => value),
          backgroundColor: COLORS,
        },
      ],
    };
  }, [result]);

  return (
    <StyledCard header={<Header name={result.name} total={result.total} />}>
      <Pie data={pieData} height={150} />
      <Body resultItems={result.resultItems} total={result.total} />
    </StyledCard>
  );
};

export default ResultCard;
