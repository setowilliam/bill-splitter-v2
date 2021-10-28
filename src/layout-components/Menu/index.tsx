import { menuAtom } from "@atoms";
import { AnimatePresence } from "framer-motion";
import { useAtom } from "jotai";
import { FC } from "react";
import { globalScope } from "utils/constants";
import Language from "./Language";
import { MenuContainer } from "./styles";
import Theme from "./Theme";

type MenuProps = {};

const Menu: FC<MenuProps> = (props) => {
  const {} = props;
  const [menu] = useAtom(menuAtom, globalScope);

  return (
    <AnimatePresence>
      {menu && (
        <MenuContainer
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ bounce: 0 }}
        >
          <Theme />
          <Language />
        </MenuContainer>
      )}
    </AnimatePresence>
  );
};

export default Menu;
