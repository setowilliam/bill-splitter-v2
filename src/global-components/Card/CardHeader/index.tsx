import { forwardRef, ReactNode } from "react";
import { useAtom } from "jotai";

import { toggleAtom } from "@atoms";

import { StyledCardHeader } from "./styles";

type CardHeaderProps = { children?: ReactNode };

const CardHeader = forwardRef<HTMLButtonElement, CardHeaderProps>(
  (props, ref) => {
    const { children } = props;
    const [closed, setClosed] = useAtom(toggleAtom);

    return (
      <StyledCardHeader
        ref={ref}
        layout
        variant="borderless"
        onClick={() => setClosed(!closed)}
      >
        {children}
      </StyledCardHeader>
    );
  }
);

CardHeader.displayName = "CardHeader";

export default CardHeader;
