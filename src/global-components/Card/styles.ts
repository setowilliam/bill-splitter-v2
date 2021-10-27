import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled(motion.div)<{ $borderless?: boolean }>`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;
