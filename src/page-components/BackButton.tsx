import { Button } from "@global-components";
import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import { FaChevronLeft } from "react-icons/fa";
import styled from "styled-components";

const StyledButton = styled(Button)`
  align-self: flex-start;
  align-items: center;
  color: rgb(0, 122, 255);

  .icon {
    color: rgb(0, 122, 255);
  }
`;

const BackButton: FC = () => {
  const router = useRouter();

  return (
    <StyledButton variant="borderless" onClick={() => router.push("/")}>
      <FaChevronLeft className="icon" />
      Go Back
    </StyledButton>
  );
};

export default BackButton;
