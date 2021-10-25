import { Variants } from "framer-motion";
import { atom } from "jotai";
import { createContext, Dispatch, SetStateAction } from "react";

type CardContainerContextProps = {
  dragging: boolean;
  setDragging: Dispatch<SetStateAction<boolean>>;
};

export const CardContainerContext = createContext<CardContainerContextProps>({
  dragging: false,
  setDragging: () => {},
});

export const openAtom = atom(true);

export const containerVariants: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};
