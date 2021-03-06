import { useAtom } from "jotai";
import { FC, useState } from "react";

import { toggleAtom } from "@atoms";

import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import { CardContainer } from "./styles";
import { CardProps } from "./typings";

const Content: FC<CardProps> = (props) => {
  const {
    header,
    footer,
    children,
    borderless,
    open,
    disabled,
    onToggle,
    ...rest
  } = props;
  const [headerRef, setHeaderRef] = useState<HTMLButtonElement | null>(null);
  const [closed] = useAtom(toggleAtom);

  return (
    <CardContainer
      layout
      initial={{ opacity: 0, borderRadius: "0.5rem" }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        height: !open && closed ? headerRef?.clientHeight || "auto" : "auto",
        width: !open && closed ? headerRef?.clientWidth || "auto" : "100%",
      }}
      $borderless={borderless}
      {...rest}
    >
      <CardHeader
        ref={(node) => setHeaderRef(node)}
        disabled={disabled}
        onToggle={onToggle}
        open={open}
      >
        {header}
      </CardHeader>
      {headerRef && (
        <>
          {children && <CardBody>{children}</CardBody>}
          {footer && <CardFooter>{footer}</CardFooter>}
        </>
      )}
    </CardContainer>
  );
};

export default Content;
