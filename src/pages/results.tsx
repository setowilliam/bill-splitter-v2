import { useEffect } from "react";
import { NextPage } from "next";
import { useAtom } from "jotai";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";

import { itemsAtom, peopleAtom } from "@atoms";
import { globalScope } from "utils/constants";
import { getResults } from "utils/functions";
import { ResultCard, TotalCard } from "page-components/results";
import { Title } from "@page-components";
import useTranslation from "utils/hooks/useTranslation";

const Results: NextPage = () => {
  const [items] = useAtom(itemsAtom, globalScope);
  const [people] = useAtom(peopleAtom, globalScope);
  const router = useRouter();
  const { pages } = useTranslation();

  useEffect(() => {
    if (!Boolean(items.length && people.length)) {
      router.push("/");
    }
  }, [items, people, router]);

  const results = getResults(items, people);

  return (
    <div className="full-page">
      <AnimateSharedLayout>
        <Title layout>{pages.results.title}</Title>
        {Object.values(results).map((result) => {
          return <ResultCard key={result.personId} result={result} />;
        })}
        <motion.hr layout />
        <TotalCard items={items} />
      </AnimateSharedLayout>
    </div>
  );
};

export default Results;
