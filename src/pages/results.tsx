import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";

import { Button } from "@global-components";

const Results: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push("/")}>Go home</Button>
    </>
  );
};

export default Results;
