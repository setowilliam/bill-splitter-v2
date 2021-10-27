import { Card } from "@global-components";
import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .count {
    display: flex;
    gap: 0.25rem;
  }
`;

export const StyledCard = styled(Card)`
  background-color: #ddd;
`;

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`;
