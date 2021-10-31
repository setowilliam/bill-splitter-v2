import { Button } from "@global-components";
import { useRouter } from "next/dist/client/router";
import { FC } from "react";

type FeesButtonProps = {};

const FeesButton: FC<FeesButtonProps> = (props) => {
  const {} = props;

  const router = useRouter();

  return (
    <Button variant="primary" onClick={() => router.push("/fees")}>
      Fees
    </Button>
  );
};

export default FeesButton;
