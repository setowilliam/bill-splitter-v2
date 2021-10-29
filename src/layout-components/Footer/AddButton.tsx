import { FC } from "react";
import { useRouter } from "next/dist/client/router";

import { Button } from "@global-components";

const AddButton: FC = () => {
  const router = useRouter();

  return (
    <Button layout variant="primary" onClick={() => router.push("/add")}>
      Add
    </Button>
  );
};

export default AddButton;
