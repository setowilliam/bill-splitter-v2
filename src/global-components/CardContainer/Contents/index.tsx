import { FC } from "react";
import { useAtom } from "jotai";

import { AnimatePresence } from "framer-motion";
import { toggleAtom } from "@atoms";

type ContentsProps = {};

const Contents: FC<ContentsProps> = (props) => {
  const { children } = props;
  const [open] = useAtom(toggleAtom);

  return <AnimatePresence>{open && children}</AnimatePresence>;
};

export default Contents;
