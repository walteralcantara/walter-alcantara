import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";

import { NavigationContextProvider } from "../contexts/NavigationContext";

import theme from "../styles/theme";

import Header from "../components/Header";
import { Head } from "../components/Head";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head />

      <NavigationContextProvider>
        <Header />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </NavigationContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
