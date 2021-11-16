import { tipTypeAtom } from "@atoms";
import { Card, Checkbox } from "@global-components";
import { useAtom } from "jotai";
import { FC } from "react";
import { IoOptions } from "react-icons/io5";
import { globalScope } from "utils/constants";
import useTranslation from "utils/hooks/useTranslation";
import { TipType } from "utils/typings";
import { Container, Header } from "./styles";

type TipOptionsCardProps = {};

const TipOptionsCard: FC<TipOptionsCardProps> = (props) => {
  const {} = props;
  const [tipType, setTipType] = useAtom(tipTypeAtom, globalScope);
  const { pages } = useTranslation();

  const handleClick = (nextTipType: TipType) => {
    setTipType(nextTipType);
  };

  return (
    <Card
      header={
        <Header>
          <IoOptions className="icon" />
          {pages.fees.tipOptions}
        </Header>
      }
      open
    >
      <Container>
        <Checkbox
          label={pages.fees.beforeTax}
          checked={tipType === "before"}
          onChange={() => handleClick("before")}
        />
        <Checkbox
          label={pages.fees.afterTax}
          checked={tipType === "after"}
          onChange={() => handleClick("after")}
        />
        <Checkbox
          label={pages.fees.fixed}
          checked={tipType === "fixed"}
          onChange={() => handleClick("fixed")}
        />
      </Container>
    </Card>
  );
};

export default TipOptionsCard;
