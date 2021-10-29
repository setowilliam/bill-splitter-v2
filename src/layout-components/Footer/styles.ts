import { Button } from "@global-components";
import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.background};
  backdrop-filter: blur(4px);
`;

export const StyledButton = styled(Button)`
  background-color: transparent;
  color: rgb(0, 122, 255);
  font-size: 1.1rem;

  .icon {
    font-size: 1.5rem;
  }
`;
