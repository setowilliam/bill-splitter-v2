import { motion } from "framer-motion";
import styled from "styled-components";

export const PageLayoutContainer = styled(motion.div)`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "navbar" "main" "footer";
  height: 100%;
`;
