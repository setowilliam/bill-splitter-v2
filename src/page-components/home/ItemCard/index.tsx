import { FC } from "react";

import { Card } from "@global-components";

import Header from "./Header";
import Body from "./Body";
import { ItemCardProps } from "./typings";

const ItemCard: FC<ItemCardProps> = (props) => {
  const { item, index } = props;

  return (
    <Card header={<Header item={item} />}>
      <Body index={index} itemId={item.itemId} />
    </Card>
  );
};

export default ItemCard;
