import { ReactNode } from "react";
import { HTMLMotionProps } from "framer-motion";

export type CardProps = HTMLMotionProps<"div"> & {
  header?: ReactNode;
  footer?: ReactNode;
  borderless?: boolean;
  id?: string;
  open?: boolean;
};
