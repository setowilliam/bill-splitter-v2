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
import { ListContainer } from "page-components/home/styles";

const Home: NextPage = () => {
  const router = useRouter();
  const [items] = useAtom(itemsAtom, globalScope);
  const [people] = useAtom(peopleAtom, globalScope);

  return (
    <AnimateSharedLayout>
      <ListContainer layout>
        <motion.div layout>
          <AnimatePresence>
            {Boolean(people.length) && (
              <CardContainer key="people" header="People">
                {people.map((person, index) => (
                  <PersonCard
                    key={person.personId}
                    person={person}
                    index={index}
                  />
                ))}
              </CardContainer>
            )}
          </AnimatePresence>
          <AddPersonForm />
        </motion.div>

        <motion.div layout>
          <AnimatePresence>
            {Boolean(items.length) && (
              <CardContainer key="items" header="Items">
                {items.map((item, index) => (
                  <ItemCard key={item.itemId} item={item} index={index} />
                ))}
              </CardContainer>
            )}
          </AnimatePresence>
          <AddItemForm />
        </motion.div>
      </ListContainer>

      <motion.hr layout />

      <Button layout onClick={() => router.push("/results")}>
        Calculate
      </Button>
    </AnimateSharedLayout>
  );
};

export default Home;
