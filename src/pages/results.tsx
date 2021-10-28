import { useEffect } from "react";
import { NextPage } from "next";
import { useAtom } from "jotai";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";

import { itemsAtom, peopleAtom } from "@atoms";
import { globalScope } from "utils/constants";
import { getResults } from "utils/functions";
import { CardContainer } from "@global-components";
import { ResultCard, TotalCard } from "page-components/results";
import { BackButton } from "@page-components";

const Results: NextPage = () => {
  const [items] = useAtom(itemsAtom, globalScope);
  const [people] = useAtom(peopleAtom, globalScope);
  const router = useRouter();

  useEffect(() => {
    if (!Boolean(items.length && people.length)) {
      router.push("/");
    }
  }, [items, people, router]);

  const results = getResults(items, people);

  return (
    <>
      <BackButton />
      <AnimateSharedLayout>
        <CardContainer header="Results" open={true}>
          {Object.values(results).map((result) => {
            return <ResultCard key={result.personId} result={result} />;
          })}
        </CardContainer>
        <motion.hr layout />
        <TotalCard items={items} />
      </AnimateSharedLayout>
    </>
  );
};

export default Results;
