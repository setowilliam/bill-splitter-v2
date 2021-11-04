import { motion } from "framer-motion";
import styled from "styled-components";

export const MainLayoutContainer = styled(motion.main)`
  overflow-y: scroll;
  min-height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  .full-page {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
