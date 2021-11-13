import { motion } from "framer-motion";
import styled from "styled-components";

export const MainLayoutContainer = styled(motion.main)`
  overflow-y: scroll;
  min-height: var(--height);
  padding: 1rem;
  padding-top: calc(1rem + 57px);
  padding-bottom: calc(1rem + 57px);
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
