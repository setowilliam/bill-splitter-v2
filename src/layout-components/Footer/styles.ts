import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: footer;
  position: sticky;
  bottom: 0;

  background-color: ${(props) => props.theme.background};
  backdrop-filter: blur(4px);
`;
