import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import AddButton from "./AddButton";
import CalculateButton from "./CalculateButton";
import DoneButton from "./DoneButton";
import { FooterContainer } from "./styles";
import { fadeVariants } from "./utils";

type FooterProps = {};

const Footer: FC<FooterProps> = (props) => {
  const {} = props;
  const router = useRouter();

  return (
    <AnimatePresence>
      <FooterContainer
        key={router.pathname}
        variants={fadeVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
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
