import { ColorModeScript } from "@chakra-ui/react";
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

import theme from "../styles/theme";
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style>{`#__next { overflow-x: hidden; }`}</style>

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="title" content="Walter Alcantara" />
          <meta name="description" content="Walter's Homepage" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://walteralcantara.vercel.app/" />
          <meta property="og:title" content="Walter Alcantara" />
          <meta property="og:description" content="Walter's Homepage" />
          <meta property="og:image" content="https://walteralcantara.vercel.app/card.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://walteralcantara.vercel.app/" />
          <meta property="twitter:title" content="Walter Alcantara" />
          <meta property="twitter:description" content="Walter's Homepage" />
          <meta property="twitter:image" content="https://walteralcantara.vercel.app/card.png" />

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
