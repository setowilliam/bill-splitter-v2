import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import AddButton from "./AddButton";
import CalculateButton from "./CalculateButton";
import DoneButton from "./DoneButton";
import { FooterContainer } from "./styles";

type FooterProps = {};

const Footer: FC<FooterProps> = (props) => {
  const {} = props;
  const router = useRouter();

  return (
    <AnimatePresence>
      <FooterContainer
        transition={{ bounce: 0 }}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
      >
        {router.pathname === "/" && (
          <>
            <AddButton />
            <CalculateButton />
          </>
        )}
        {router.pathname === "/add" && <DoneButton />}
        {router.pathname === "/results" && (
          <>
            <div />
            <DoneButton />
          </>
        )}
      </FooterContainer>
    </AnimatePresence>
  );
};

export default Footer;
