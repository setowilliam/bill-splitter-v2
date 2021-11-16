import { useRouter } from "next/dist/client/router";
import { FC } from "react";

import { Button } from "@global-components";
import useTranslation from "utils/hooks/useTranslation";

type DoneButtonProps = {
  route?: string;
};

const DoneButton: FC<DoneButtonProps> = (props) => {
  const { route = "/" } = props;
  const router = useRouter();
  const { footer } = useTranslation();

  return (
    <Button variant="primary" onClick={() => router.push(route)}>
      {footer.done}
    </Button>
  );
};

export default DoneButton;
