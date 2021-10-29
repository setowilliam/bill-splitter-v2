import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledForm = styled(motion.form)`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  .icon {
    font-size: 1rem;
  }
`;
