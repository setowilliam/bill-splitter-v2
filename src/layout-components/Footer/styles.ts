import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterContainer = styled(motion.div)`
  padding: 1rem;
  position: fixed;
  bottom: 0;
  background-color: white;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 0;
  }
`;
