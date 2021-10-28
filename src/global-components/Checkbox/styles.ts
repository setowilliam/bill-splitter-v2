import { motion } from "framer-motion";
import styled from "styled-components";

export const CheckboxContainer = styled(motion.label)<{ $checked: boolean }>`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  input {
    all: unset;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .switch {
    height: 2rem;
    width: 3.5rem;
    border-radius: 2.5rem;
    display: flex;
    align-items: center;
    padding: 0.25rem;
    justify-content: ${(props) => (props.$checked ? "flex-end" : "flex-start")};

    .toggle {
      background-color: white;
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 1rem;
    }
  }

  .text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 0.25rem;
  }
`;
