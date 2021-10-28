import { Card } from "@global-components";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h2 {
    font-size: 1rem;
  }
`;

export const StyledCard = styled(Card)`
  background-color: #fcfcfc;
`;
