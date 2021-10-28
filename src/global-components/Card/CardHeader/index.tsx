import { forwardRef, ReactNode } from "react";
import { useAtom } from "jotai";

import { toggleAtom } from "@atoms";

import { StyledCardHeader } from "./styles";

type CardHeaderProps = { children?: ReactNode; disabled?: boolean };

const CardHeader = forwardRef<HTMLButtonElement, CardHeaderProps>(
  (props, ref) => {
    const { children, disabled } = props;
    const [closed, setClosed] = useAtom(toggleAtom);

    const handleClick = () => {
      setClosed(!closed);
    };

    return (
      <StyledCardHeader
        disabled={disabled}
        ref={ref}
        variant="borderless"
        onClick={handleClick}
      >
        {children}
      </StyledCardHeader>
    );
  }
);

CardHeader.displayName = "CardHeader";

export default CardHeader;
