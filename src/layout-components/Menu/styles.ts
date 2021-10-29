import { motion } from "framer-motion";
import styled from "styled-components";

export const MenuContainer = styled(motion.div)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  grid-area: main;
  gap: 1rem;
  height: fit-content;

  background-color: ${(props) => props.theme.background};
  box-shadow: 0 1px 4px 0 ${(props) => props.theme.border};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 2;
`;

export const MenuItemContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;

  .toggle-container {
    display: grid;
    grid-template-columns: 1.5rem auto 1.5rem;
    justify-items: center;
    gap: 0.25rem;
    align-items: center;
  }
`;
