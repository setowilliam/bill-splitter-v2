import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/dist/client/router";

import { MainLayout, NavBar, PageLayout } from "@layout-components";

import "../styles/globals.css";
import { useEffect } from "react";

const scrollFix = () => {
  window.scrollTo(0, 0);
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollFix);

  //   return () => {
  //     window.removeEventListener("scroll", scrollFix);
  //   };
  // }, []);

  return (
    <PageLayout>
      <NavBar />
      <AnimatePresence initial={false}>
        <MainLayout key={router.pathname}>
          <Component {...pageProps} />
        </MainLayout>
      </AnimatePresence>
    </PageLayout>
  );
}
export default MyApp;
