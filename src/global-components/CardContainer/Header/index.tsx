import { FC } from "react";
import { useAtom } from "jotai";
import { FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";

import { toggleAtom } from "@atoms";

import { HeaderContainer } from "./styles";

type HeaderProps = {};

const Header: FC<HeaderProps> = (props) => {
  const { children } = props;
  const [open, setOpen] = useAtom(toggleAtom);

  return (
    <HeaderContainer layout onClick={() => setOpen(!open)} variant="borderless">
      <h2>{children}</h2>
      <motion.div animate={{ rotate: open ? 180 : 0 }}>
        <FiChevronUp className="icon" />
      </motion.div>
    </HeaderContainer>
  );
};

export default Header;
