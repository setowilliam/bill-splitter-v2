import { AddItemForm, AddPersonForm } from "@page-components/add";
import { AnimateSharedLayout } from "framer-motion";
import { NextPage } from "next";

const Add: NextPage = () => {
  return (
    <AnimateSharedLayout>
      <AddPersonForm />
      <AddItemForm />
    </AnimateSharedLayout>
  );
};

export default Add;
