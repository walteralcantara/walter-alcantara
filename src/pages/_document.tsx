import { ColorModeScript } from "@chakra-ui/react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

import theme from "styles/theme";
export default class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <style>{`#__next { overflow-x: hidden; }`}</style>

          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
