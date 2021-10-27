import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { MdFastfood } from "react-icons/md";

import { PersonType } from "utils/typings";

import { HeaderContainer } from "./styles";

type HeaderProps = {
  person: PersonType;
};

const Header: FC<HeaderProps> = (props) => {
  const { person } = props;

  return (
    <HeaderContainer layout>
      <span>{person.name}</span>
      <span className="count">
        <AnimatePresence initial={false}>
          <motion.span
            key={person.items.length}
            className="number"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0, scale: 0 }}
          >
            {person.items.length}
          </motion.span>
        </AnimatePresence>
        <MdFastfood className="icon" />
      </span>
    </HeaderContainer>
  );
};

export default Header;
