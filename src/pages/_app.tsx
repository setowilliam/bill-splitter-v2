import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/dist/client/router";

import { Footer, MainLayout, NavBar, PageLayout } from "@layout-components";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <PageLayout>
      <NavBar />
      <AnimatePresence>
        <MainLayout key={router.pathname}>
          <Component {...pageProps} />
        </MainLayout>
      </AnimatePresence>
      <Footer />
    </PageLayout>
  );
}
export default MyApp;
