import { FC } from "react";
import useTranslation from "utils/hooks/useTranslation";
import { WelcomeContainer } from "./styles";

type WelcomeProps = {};

const Welcome: FC<WelcomeProps> = (props) => {
  const {} = props;
  const { pages } = useTranslation();

  return (
    <WelcomeContainer
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>{pages.home.welcome.title}</h2>
      {pages.home.welcome.description}
    </WelcomeContainer>
  );
};

export default Welcome;
