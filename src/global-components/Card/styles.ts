import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled(motion.div)<{ $borderless?: boolean }>`
  border: ${(props) => (props.$borderless ? "none" : "1px solid #9f9f9f")};
  border-radius: 0.5rem;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;
