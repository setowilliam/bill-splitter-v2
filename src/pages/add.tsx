import { Title } from "@page-components";
import { AddItemForm, AddPersonForm } from "@page-components/add";
import { AnimateSharedLayout } from "framer-motion";
import { Provider } from "jotai";
import { NextPage } from "next";

const Add: NextPage = () => {
  return (
    <div className="full-page">
      <AnimateSharedLayout>
        <Title layout>Add People/Items</Title>
        <Provider>
          <AddPersonForm />
          <AddItemForm />
        </Provider>
      </AnimateSharedLayout>
    </div>
  );
};

export default Add;
