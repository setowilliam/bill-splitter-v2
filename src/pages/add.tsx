import { Title } from "@page-components";
import { AddItemForm, AddPersonForm } from "@page-components/add";
import { AnimateSharedLayout } from "framer-motion";
import { Provider } from "jotai";
import { NextPage } from "next";
import useTranslation from "utils/hooks/useTranslation";

const Add: NextPage = () => {
  const { pages } = useTranslation();

  return (
    <div className="full-page">
      <AnimateSharedLayout>
        <Title layout>{pages.add.title}</Title>
        <Provider>
          <AddPersonForm />
          <AddItemForm />
        </Provider>
      </AnimateSharedLayout>
    </div>
  );
};

export default Add;
