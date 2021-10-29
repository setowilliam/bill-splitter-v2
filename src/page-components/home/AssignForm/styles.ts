import { CardContainer } from "@global-components";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledCardContainer = styled(CardContainer)`
  background-color: ${(props) => props.theme.card3};

  > div {
    background-color: ${(props) => props.theme.card3};
  }
`;

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
