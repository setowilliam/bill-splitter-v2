import { useRouter } from "next/dist/client/router";
import { FC } from "react";

import { Button } from "@global-components";

type DoneButtonProps = {
  route?: string;
};

const DoneButton: FC<DoneButtonProps> = (props) => {
  const { route = "/" } = props;
  const router = useRouter();

  return (
    <Button variant="primary" onClick={() => router.push(route)}>
      Done
    </Button>
  );
};

export default DoneButton;
