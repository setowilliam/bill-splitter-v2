import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";

const Results: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.push("/")}>Go home</button>
    </>
  );
};

export default Results;
