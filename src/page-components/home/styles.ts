import { motion } from "framer-motion";
import styled from "styled-components";

export const ListContainer = styled(motion.div)`
  display: grid;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const WelcomeContainer = styled(motion.div)`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    font-size: 0.9rem;
  }
`;
