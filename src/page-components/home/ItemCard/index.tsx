import { FC } from "react";

import Header from "./Header";
import Body from "./Body";
import { ItemCardProps } from "./typings";
import { StyledCard } from "./styles";

const ItemCard: FC<ItemCardProps> = (props) => {
  const { item, index } = props;

  return (
    <StyledCard header={<Header item={item} />}>
      <Body index={index} itemId={item.itemId} />
    </StyledCard>
  );
};

export default ItemCard;
