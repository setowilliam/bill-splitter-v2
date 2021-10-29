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

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [theme] = useAtom(themeAtom, globalScope);

  return (
    <ThemeProvider theme={THEME_MAPPING[theme]}>
      <GlobalStyles />
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
