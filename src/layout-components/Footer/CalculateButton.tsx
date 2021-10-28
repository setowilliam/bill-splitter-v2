import { FC } from "react";

import { Button } from "@global-components";
import { useRouter } from "next/dist/client/router";
import { useAtom } from "jotai";
import { itemsAtom, peopleAtom } from "@atoms";
import { globalScope } from "utils/constants";

const CalculateButton: FC = () => {
  const router = useRouter();
  const [items] = useAtom(itemsAtom, globalScope);
  const [people] = useAtom(peopleAtom, globalScope);

  return (
    <Button
      layout
      onClick={() => router.push("/results")}
      disabled={!(items.length && people.length)}
      variant="borderless"
    >
      Calculate
    </Button>
  );
};

export default CalculateButton;
