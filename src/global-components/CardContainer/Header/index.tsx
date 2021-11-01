import { FC } from "react";
import { FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";

import { HeaderContainer } from "./styles";

type HeaderProps = { open?: boolean };

const Header: FC<HeaderProps> = (props) => {
  const { children, open } = props;

  return (
    <HeaderContainer>
      <h2>{children}</h2>
      <motion.div animate={{ rotate: open ? 180 : 0 }}>
        <FiChevronUp className="icon" />
      </motion.div>
    </HeaderContainer>
  );
};

export default Header;
