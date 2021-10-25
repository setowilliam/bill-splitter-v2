import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

import { Button, Input } from "@global-components";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push("/results")}>Go to results</Button>
      <Input leadingIcon={<AiFillDollarCircle />} label="Price" />
      <Input leadingIcon={<BsPersonCircle />} label="Name" />
    </>
  );
};

export default Home;
