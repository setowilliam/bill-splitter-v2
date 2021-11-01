import { motion } from "framer-motion";
import styled from "styled-components";

export const PageLayoutContainer = styled(motion.div)`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas: "navbar" "main";
  height: 100%;
`;
