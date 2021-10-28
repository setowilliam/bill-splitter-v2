import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderContainer = styled(motion.div)`
  display: grid;
  grid-template-areas: "name price" "count .";
  justify-content: space-between;
  width: 100%;
  z-index: 4;
  gap: 0.25rem;

  .name {
    grid-area: name;
    display: flex;
    justify-content: flex-start;
  }

  .price {
    grid-area: price;
    display: flex;
    justify-content: flex-end;
  }

  .count {
    grid-area: count;
    display: flex;
    width: fit-content;
    align-items: flex-end;
    gap: 0.125rem;
    font-size: 0.75rem;
  }
`;
