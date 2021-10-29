import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCardBody = styled(motion.div)`
  padding: 1rem;
  background-color: ${(props) => props.theme.card};
`;
