import { motion } from "framer-motion";
import styled from "styled-components";

export const Title = styled(motion.h2)`
  font-size: 1.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  .icon {
    font-size: 2rem;
  }
`;
