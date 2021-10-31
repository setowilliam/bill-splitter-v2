import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .count {
    display: grid;
    gap: 0.25rem;
    grid-template-areas: "number icon";

    .number {
      grid-area: number;
    }

    .icon {
      grid-area: icon;
    }
  }
`;
