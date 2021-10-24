import { motion } from "framer-motion";
import styled from "styled-components";

export const MainLayoutContainer = styled(motion.main)`
  padding: 1rem;
  /* padding-top: calc(38px + 3 * 1rem); */
  background-color: yellow;
  grid-area: main;
  overflow-y: scroll;
`;
