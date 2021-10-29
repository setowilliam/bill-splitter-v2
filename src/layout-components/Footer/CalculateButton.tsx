import { FC } from "react";
import { useRouter } from "next/dist/client/router";
import { useAtom } from "jotai";

import { Button } from "@global-components";
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
      variant="primary"
    >
      Calculate
    </Button>
  );
};

export default CalculateButton;
