import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";

import { Input } from "@global-components";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.push("/results")}>Go to results</button>
      <Input leadingIcon={<AiFillDollarCircle />} />
      <Input leadingIcon={<BsPersonCircle />} />
    </>
  );
};

export default Home;
