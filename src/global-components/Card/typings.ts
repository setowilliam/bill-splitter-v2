import { ReactNode } from "react";
import { HTMLMotionProps } from "framer-motion";

export type CardProps = HTMLMotionProps<"div"> & {
  header?: ReactNode;
  footer?: ReactNode;
  id?: string;
};
