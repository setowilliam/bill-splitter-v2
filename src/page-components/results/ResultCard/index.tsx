import { FC } from "react";

import { Card } from "@global-components";
import { ResultType } from "utils/typings";
import Header from "./Header";
import Body from "./Body";
import { StyledCard } from "./styles";

type ResultCardProps = {
  result: ResultType;
};

const ResultCard: FC<ResultCardProps> = (props) => {
  const { result } = props;

  return (
    <StyledCard header={<Header name={result.name} total={result.total} />}>
      <Body resultItems={result.resultItems} total={result.total} />
    </StyledCard>
  );
};

export default ResultCard;
