import { FC } from "react";

import { Card } from "@global-components";
import { ResultType } from "utils/typings";
import Header from "./Header";
import Body from "./Body";

type ResultCardProps = {
  result: ResultType;
};

const ResultCard: FC<ResultCardProps> = (props) => {
  const { result } = props;

  return (
    <Card header={<Header name={result.name} total={result.total} />}>
      <Body resultItems={result.resultItems} total={result.total} />
    </Card>
  );
};

export default ResultCard;
