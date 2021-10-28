import { BackButton } from "@page-components";
import { AddItemForm, AddPersonForm } from "@page-components/add";
import { AnimateSharedLayout } from "framer-motion";
import { NextPage } from "next";

const Add: NextPage = () => {
  return (
    <AnimateSharedLayout>
      <BackButton />
      <AddPersonForm />
      <AddItemForm />
    </AnimateSharedLayout>
  );
};

export default Add;
