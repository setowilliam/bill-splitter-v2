import { FC } from "react";

import { Card } from "@global-components";
import { ItemType } from "utils/typings";

import Header from "./Header";
import Body from "./Body";

type TotalCardProps = { items: ItemType[] };

const TotalCard: FC<TotalCardProps> = (props) => {
  const { items } = props;

  const total = items.reduce((prev, curr) => prev + curr.price, 0);

  return (
    <Card header={<Header total={total} />} borderless>
      <Body total={total} />
    </Card>
  );
};

export default TotalCard;
