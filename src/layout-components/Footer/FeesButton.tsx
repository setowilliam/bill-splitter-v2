import { Button } from "@global-components";
import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import useTranslation from "utils/hooks/useTranslation";

type FeesButtonProps = {};

const FeesButton: FC<FeesButtonProps> = (props) => {
  const {} = props;

  const router = useRouter();
  const { footer } = useTranslation();

  return (
    <Button variant="primary" onClick={() => router.push("/fees")}>
      {footer.fees}
    </Button>
  );
};

export default FeesButton;
