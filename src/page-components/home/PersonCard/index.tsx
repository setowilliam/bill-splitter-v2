import { FC } from "react";

import { PersonType } from "utils/typings";

import Header from "./Header";
import Body from "./Body";
import { StyledCard } from "./styles";

type PersonCardProps = {
  person: PersonType;
  index: number;
};

const PersonCard: FC<PersonCardProps> = (props) => {
  const { person, index } = props;

  return (
    <StyledCard header={<Header person={person} />}>
      <Body index={index} personId={person.personId} />
    </StyledCard>
  );
};

export default PersonCard;
