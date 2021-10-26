import { Card } from "@global-components";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const StyledCard = styled(Card)`
  button {
    align-self: flex-start;
  }

  .checkbox-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;
