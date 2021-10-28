import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useAtom } from "jotai";

import { Button, CardContainer } from "@global-components";
import { itemsAtom, peopleAtom } from "@atoms";
import { globalScope } from "utils/constants";
import {
  AddItemForm,
  AddPersonForm,
  ItemCard,
  PersonCard,
} from "page-components/home";

const Home: NextPage = () => {
  const router = useRouter();
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

      <AnimatePresence>
        {Boolean(items.length || people.length) && (
          <motion.hr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          />
        )}
      </AnimatePresence>

      <AddPersonForm />
      <AddItemForm />
    </AnimateSharedLayout>
  );
};

export default Home;
