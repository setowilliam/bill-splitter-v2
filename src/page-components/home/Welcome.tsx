import { FC } from "react";
import { WelcomeContainer } from "./styles";

type WelcomeProps = {};

const Welcome: FC<WelcomeProps> = (props) => {
  const {} = props;

  return (
    <WelcomeContainer
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Welcome to Bill Splitter</h2>
      <p>
        Start by adding a new item or person by clicking <b>Add</b>.
      </p>
    </WelcomeContainer>
  );
};

export default Welcome;
