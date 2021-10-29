import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled(motion.div)<{ $borderless?: boolean }>`
  /* background-color: #f6f6f6; */
  background-color: ${(props) => props.theme.card};
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;
