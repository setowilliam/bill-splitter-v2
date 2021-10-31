import { FC, ReactNode } from "react";

import Body from "./Body";
import { StyledCard } from "./styles";

export type HomeCardProps = {
  header: ReactNode;
  onDeleteClick?: () => void;
};

const HomeCard: FC<HomeCardProps> = (props) => {
  const { header, children, onDeleteClick } = props;

  return (
    <StyledCard header={header}>
      <Body onDeleteClick={onDeleteClick}>{children}</Body>
    </StyledCard>
  );
};

export default HomeCard;
