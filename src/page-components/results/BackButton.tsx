import { Button } from "@global-components";
import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import styled from "styled-components";

type BackButtonProps = {};

const StyledButton = styled(Button)`
  align-self: flex-start;
  color: rgb(0, 122, 255);
`;

const BackButton: FC<BackButtonProps> = (props) => {
  const router = useRouter();

  return (
    <StyledButton variant="borderless" onClick={() => router.push("/")}>
      Go Back
    </StyledButton>
  );
};

export default BackButton;
