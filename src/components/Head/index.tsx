import NextHead from "next/head";

export const Head = () => {
  return (
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="title" content="Walter Alcantara" />
      <meta name="description" content="Walter's Homepage" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://walteralcantara.vercel.app/" />
      <meta property="og:title" content="Walter Alcantara" />
      <meta property="og:description" content="Walter's Homepage" />
      <meta
        property="og:image"
        content="https://walteralcantara.vercel.app/card.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://walteralcantara.vercel.app/"
      />
      <meta property="twitter:title" content="Walter Alcantara" />
      <meta property="twitter:description" content="Walter's Homepage" />
      <meta
        property="twitter:image"
        content="https://walteralcantara.vercel.app/card.png"
      />
      
      <title>Walter Alcantara</title>
    </NextHead>
  );
};
