import { tipTypeAtom } from "@atoms";
import { Card, Checkbox } from "@global-components";
import { useAtom } from "jotai";
import { FC } from "react";
import { IoOptions } from "react-icons/io5";
import { globalScope } from "utils/constants";
import { TipType } from "utils/typings";
import { Container, Header } from "./styles";

type TipOptionsCardProps = {};

const TipOptionsCard: FC<TipOptionsCardProps> = (props) => {
  const {} = props;
  const [tipType, setTipType] = useAtom(tipTypeAtom, globalScope);

  const handleClick = (nextTipType: TipType) => {
    setTipType(nextTipType);
  };

  return (
    <Card
      header={
        <Header>
          <IoOptions className="icon" />
          Tip Options
        </Header>
      }
      open
    >
      <Container>
        <Checkbox
          label="Before Tax (%)"
          checked={tipType === "before"}
          onChange={() => handleClick("before")}
        />
        <Checkbox
          label="After Tax (%)"
          checked={tipType === "after"}
          onChange={() => handleClick("after")}
        />
        <Checkbox
          label="Fixed"
          checked={tipType === "fixed"}
          onChange={() => handleClick("fixed")}
        />
      </Container>
    </Card>
  );
};

export default TipOptionsCard;
