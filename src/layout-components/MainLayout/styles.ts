import { motion } from "framer-motion";
import styled from "styled-components";

export const MainLayoutContainer = styled(motion.main)`
  grid-area: main;
  overflow-y: scroll;

  > div {
    padding: 1rem;
    padding-bottom: calc(53px + 1rem);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 100%;
  }
`;
