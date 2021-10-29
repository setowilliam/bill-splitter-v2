import type { NextPage } from "next";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useAtom } from "jotai";

import { itemsAtom, peopleAtom } from "@atoms";
import { globalScope } from "utils/constants";
import { ItemCard, PersonCard, Welcome } from "page-components/home";
import { Title } from "@page-components";
import { BsPeopleFill } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import { fadeVariants } from "utils/animations";

const Home: NextPage = () => {
  const [items] = useAtom(itemsAtom, globalScope);
  const [people] = useAtom(peopleAtom, globalScope);

  const showWelcome = !(items.length || people.length);

  return (
    <>
      <AnimateSharedLayout>
        <AnimatePresence>
          {showWelcome && <Welcome />}
          {Boolean(people.length) && (
            <Title
              layout
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <BsPeopleFill className="icon" />
              People
            </Title>
          )}
          {people.map((person, index) => (
            <PersonCard key={person.personId} person={person} index={index} />
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {Boolean(items.length) && (
            <Title
              layout
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <MdFastfood className="icon" />
              Items
            </Title>
          )}
          {items.map((item, index) => (
            <ItemCard key={item.itemId} item={item} index={index} />
          ))}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
};

export default Home;
