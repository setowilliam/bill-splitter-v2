import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledInput = styled.input<{ $transparent: boolean }>`
  all: unset;
  font-size: 1rem;
  opacity: ${(props) => (props.$transparent ? 0 : 1)};
`;

export const InputContainer = styled(motion.div)`
  background-color: ${(props) => props.theme.background};
  border-radius: 0.5rem;
  border: 1px solid #9f9f9f;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
`;

export const LeadingIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ParentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const LabelContainer = styled.label`
  font-size: 0.75rem;
`;
