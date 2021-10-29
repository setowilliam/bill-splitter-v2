import { useRouter } from "next/dist/client/router";
import { FC } from "react";

import { Button } from "@global-components";

const DoneButton: FC = () => {
  const router = useRouter();

  return (
    <Button variant="primary" onClick={() => router.push("/")}>
      Done
    </Button>
  );
};

export default DoneButton;
