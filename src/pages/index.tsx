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
import useTranslation from "utils/hooks/useTranslation";

const Home: NextPage = () => {
  const [items] = useAtom(itemsAtom, globalScope);
  const [people] = useAtom(peopleAtom, globalScope);
  const { pages } = useTranslation();

  const showWelcome = !(items.length || people.length);

  return (
    <div className="full-page">
      <AnimateSharedLayout>
        <AnimatePresence>{showWelcome && <Welcome />}</AnimatePresence>
        <AnimatePresence>
          {Boolean(people.length) && (
            <Title
              layout
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <BsPeopleFill className="icon" />
              {pages.home.people.title}
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
              {pages.home.items.title}
            </Title>
          )}
          {items.map((item, index) => (
            <ItemCard key={item.itemId} item={item} index={index} />
          ))}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
};

export default Home;
