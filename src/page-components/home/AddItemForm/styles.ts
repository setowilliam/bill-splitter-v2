import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledForm = styled(motion.form)`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 1rem;
  }
`;
