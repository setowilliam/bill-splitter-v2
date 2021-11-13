import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { ThemeProvider } from "styled-components";

import {
  Footer,
  MainLayout,
  Menu,
  NavBar,
  PageLayout,
} from "@layout-components";

import { GlobalStyles } from "styles";
import { useAtom } from "jotai";
import { themeAtom } from "@atoms";
import { globalScope, THEME_MAPPING } from "utils/constants";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { scrollToTop } from "utils/functions";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [theme] = useAtom(themeAtom, globalScope);

  useEffect(() => {
    window.addEventListener("scroll", scrollToTop);

    return () => {
      window.removeEventListener("scroll", scrollToTop);
    };
  }, []);

  return (
    <ThemeProvider theme={THEME_MAPPING[theme]}>
      <GlobalStyles />
      <ToastContainer limit={1} />
      <PageLayout>
        <NavBar />
        <Menu />
        <AnimatePresence>
          <MainLayout key={router.pathname}>
            <Component {...pageProps} />
          </MainLayout>
        </AnimatePresence>
        <Footer />
      </PageLayout>
    </ThemeProvider>
  );
}
export default MyApp;
