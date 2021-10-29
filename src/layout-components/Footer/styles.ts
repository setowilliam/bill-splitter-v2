import { Button } from "@global-components";
import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.background};
  backdrop-filter: blur(4px);
`;
