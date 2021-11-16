import { FC } from "react";
import { useRouter } from "next/dist/client/router";
import { useAtom } from "jotai";

import { Button } from "@global-components";
import { itemsAtom, peopleAtom } from "@atoms";

import { globalScope } from "utils/constants";
import useTranslation from "utils/hooks/useTranslation";

const CalculateButton: FC = () => {
  const router = useRouter();
  const [items] = useAtom(itemsAtom, globalScope);
  const [people] = useAtom(peopleAtom, globalScope);
  const { footer } = useTranslation();

  return (
    <Button
      layout
      onClick={() => router.push("/results")}
      disabled={!(items.length && people.length)}
      variant="primary"
    >
      {footer.calculate}
    </Button>
  );
};

export default CalculateButton;
