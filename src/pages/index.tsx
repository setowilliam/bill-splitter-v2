import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";

import { Input } from "@global-components";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.push("/results")}>Go to results</button>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </>
  );
};

export default Home;
