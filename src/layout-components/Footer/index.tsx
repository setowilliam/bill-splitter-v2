import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import AddButton from "./AddButton";
import CalculateButton from "./CalculateButton";
import { FooterContainer } from "./styles";

type FooterProps = {};

const Footer: FC<FooterProps> = (props) => {
  const {} = props;
  const router = useRouter();

  return (
    <AnimatePresence>
      {router.pathname === "/" && (
        <FooterContainer
          transition={{ bounce: 0 }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
        >
          <AddButton />
          <CalculateButton />
        </FooterContainer>
      )}
    </AnimatePresence>
  );
};

export default Footer;
