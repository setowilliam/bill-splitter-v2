import { Variants } from "framer-motion";

export const mainVariants: Variants = {
  neutral: { x: 0, transition: { ease: "easeInOut" } },
  left: { x: "-100%", transition: { ease: "easeInOut" } },
  right: { x: "100%", transition: { ease: "easeInOut" } },
};
