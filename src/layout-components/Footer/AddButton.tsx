import { FC } from "react";
import { useRouter } from "next/dist/client/router";

import { Button } from "@global-components";
import useTranslation from "utils/hooks/useTranslation";

const AddButton: FC = () => {
  const router = useRouter();
  const { footer } = useTranslation();

  return (
    <Button layout variant="primary" onClick={() => router.push("/add")}>
      {footer.add}
    </Button>
  );
};

export default AddButton;
