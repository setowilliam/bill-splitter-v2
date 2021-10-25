import { FC } from "react";

import { Card } from "@global-components";
import { PersonType } from "utils/typings";

import Header from "./Header";
import Body from "./Body";

type PersonCardProps = {
  person: PersonType;
  index: number;
};

const PersonCard: FC<PersonCardProps> = (props) => {
  const { person, index } = props;

  return (
    <Card header={<Header person={person} />}>
      <Body index={index} personId={person.personId} />
    </Card>
  );
};

export default PersonCard;
