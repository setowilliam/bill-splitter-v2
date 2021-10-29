import { Card } from "@global-components";
import styled from "styled-components";

export const AssignContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const StyledCard = styled(Card)`
  /* background-color: #ededed; */
  background-color: ${(props) => props.theme.card};
`;

export const StyledBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "assign assign" "edit delete";
  gap: 0.5rem;

  .assign {
    grid-area: assign;
  }
`;
