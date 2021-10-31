import { AddItemForm, AddPersonForm } from "@page-components/add";
import { AnimateSharedLayout } from "framer-motion";
import { NextPage } from "next";

const Add: NextPage = () => {
  return (
    <div className="full-page">
      <AnimateSharedLayout>
        <AddPersonForm />
        <AddItemForm />
      </AnimateSharedLayout>
    </div>
  );
};

export default Add;
