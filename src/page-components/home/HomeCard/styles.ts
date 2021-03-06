import { Card } from "@global-components";
import styled from "styled-components";

export const AssignContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.card2};

  > div {
    background-color: ${(props) => props.theme.card2};
  }
`;

export const StyledBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "assign assign" "edit delete";
  gap: 1rem;

  .assign {
    grid-area: assign;
  }
`;
