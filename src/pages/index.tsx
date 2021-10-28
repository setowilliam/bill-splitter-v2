import type { NextPage } from "next";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useAtom } from "jotai";

import { CardContainer } from "@global-components";
import { itemsAtom, peopleAtom } from "@atoms";
import { globalScope } from "utils/constants";
import { ItemCard, PersonCard } from "page-components/home";

const Home: NextPage = () => {
  const [items] = useAtom(itemsAtom, globalScope);
  const [people] = useAtom(peopleAtom, globalScope);

  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        {Boolean(people.length) && (
          <CardContainer key="people" header="People" open={true}>
            {people.map((person, index) => (
              <PersonCard key={person.personId} person={person} index={index} />
            ))}
          </CardContainer>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {Boolean(items.length) && (
          <CardContainer key="items" header="Items" open={true}>
            {items.map((item, index) => (
              <ItemCard key={item.itemId} item={item} index={index} />
            ))}
          </CardContainer>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Home;
