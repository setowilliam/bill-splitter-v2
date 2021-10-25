import { motion } from "framer-motion";
import styled from "styled-components";

export const ListContainer = styled(motion.div)`
  display: grid;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
