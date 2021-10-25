import { FC } from "react";
import { Provider } from "jotai";

import { CardProps } from "./typings";
import Content from "./Content";

const Card: FC<CardProps> = (props) => {
  return (
    <Provider>
      <Content {...props} />
    </Provider>
  );
};

export default Card;
