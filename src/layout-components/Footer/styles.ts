import { Button } from "@global-components";
import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterContainer = styled(motion.div)`
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  button {
    padding: 0;
  }
`;

export const StyledButton = styled(Button)`
  background-color: transparent;
  color: rgb(0, 122, 255);

  .icon {
    font-size: 1.5rem;
  }
`;
