import { motion } from "framer-motion";
import styled, { css } from "styled-components";

import { ButtonProps } from "./typings";

export const StyledButton = styled(motion.button)<ButtonProps>`
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  white-space: nowrap;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  ${(p) => {
    switch (p.variant) {
      case "borderless":
        return css`
          border: none;
          box-shadow: none;
        `;
      default:
        return;
    }
  }}
`;
