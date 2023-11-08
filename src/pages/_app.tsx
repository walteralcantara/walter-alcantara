import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";

import type { AppProps } from "next/app";

import { NavigationContextProvider } from "contexts/NavigationContext";

import theme from "styles/theme";

import Header from "components/Header";
import { Head } from "components/Head";

import { ApolloProvider } from "@apollo/client";
import apolloClient from "lib/apollo";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head />

      <NavigationContextProvider>
        <Header />

        <AnimatePresence exitBeforeEnter initial={false}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} key={router.route} />
          </ApolloProvider>
        </AnimatePresence>
      </NavigationContextProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
