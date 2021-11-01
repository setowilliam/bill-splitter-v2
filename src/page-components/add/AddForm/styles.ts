import { Button } from "@global-components";
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
  justify-content: space-between;
  width: 100%;
  gap: 0.25rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  .icon {
    font-size: 1.5rem;
  }
`;

export const StyledButton = styled(Button)`
  padding: 0.5rem 1rem;
`;
