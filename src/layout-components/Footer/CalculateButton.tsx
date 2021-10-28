import { FC } from "react";

import { useRouter } from "next/dist/client/router";
import { useAtom } from "jotai";
import { itemsAtom, peopleAtom } from "@atoms";
import { globalScope } from "utils/constants";
import { StyledButton } from "./styles";

const CalculateButton: FC = () => {
  const router = useRouter();
  const [items] = useAtom(itemsAtom, globalScope);
  const [people] = useAtom(peopleAtom, globalScope);

  return (
    <StyledButton
      layout
      onClick={() => router.push("/results")}
      disabled={!(items.length && people.length)}
      variant="borderless"
    >
      Calculate
    </StyledButton>
  );
};

export default CalculateButton;
