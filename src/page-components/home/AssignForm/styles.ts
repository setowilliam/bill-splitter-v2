import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const CheckboxContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
  gap: 1rem;
`;
