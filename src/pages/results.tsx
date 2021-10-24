import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";

const Results: NextPage = () => {
  const router = useRouter();

  return (
    <>
      Results Page
      <button onClick={() => router.push("/")}>Go home</button>
    </>
  );
};

export default Results;
