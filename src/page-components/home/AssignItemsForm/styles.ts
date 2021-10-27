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
    grid-template-columns: repeat(auto-fill, minmax(auto, 6rem));
    gap: 1rem;
  }
`;
