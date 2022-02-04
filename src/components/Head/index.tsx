import NextHead from "next/head";

export const Head = () => {
  return (
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Walters's homepage" />
      <meta name="author" content="Walter Alcantara" />

      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />

      <meta property="og:site_name" content="Walter Alcantara's Homepage" />
      <meta property="og:type" content="website" />
      {/* <meta property="og:image" content="/card.png" /> */}
      <title>Walter Alcantara</title>
    </NextHead>
  );
};
