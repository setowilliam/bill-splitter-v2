import { Button } from "@global-components";
import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled(Button)`
  align-self: flex-start;
  align-items: center;
  padding: 0;
  color: rgb(0, 122, 255);
  font-size: 1.1rem;
`;

const BackButton: FC = () => {
  const router = useRouter();

  return (
    <StyledButton variant="borderless" onClick={() => router.push("/")}>
      Done
    </StyledButton>
  );
};

export default BackButton;
