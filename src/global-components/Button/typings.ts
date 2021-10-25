import { HTMLMotionProps } from "framer-motion";

export type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "borderless";
};
