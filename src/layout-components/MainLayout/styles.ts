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
    justify-content: center;
    align-items: center;
    gap: 1rem;
    min-height: 100%;

    .full-page {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
