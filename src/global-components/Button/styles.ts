import { motion } from "framer-motion";
import styled, { css } from "styled-components";

import { ButtonProps } from "./typings";

export const StyledButton = styled(motion.button)<ButtonProps>`
  background-color: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0.5rem;
  padding: 1rem;
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
      case "primary":
        return css`
          border: none;
          box-shadow: none;
          background-color: transparent;
          color: rgb(0, 122, 255);
          font-weight: bold;
          font-size: 1.2rem;
        `;
      default:
        return;
    }
  }}
`;
