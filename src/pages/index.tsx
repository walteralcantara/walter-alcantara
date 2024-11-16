import apolloClient from "lib/apollo";
import { QUERY_AUTHOR } from "graphql/queries/author";

import type { GetStaticProps, NextPage } from "next";

import { LOCALES } from "../constants";
import Home, { HomeTemplateProps } from "templates/Home";

import serverSideTranslations from "utils/server-side-translation";

const Index: NextPage<HomeTemplateProps> = (props) => {
  return <Home {...props} />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const {
    data: { author },
  } = await apolloClient.query<HomeTemplateProps>({
    query: QUERY_AUTHOR,
    variables: { locale: [LOCALES[locale! as keyof typeof LOCALES]] },
  });

  const serverSideTranslation = await serverSideTranslations(locale!, [
    "home",
    "header",
  ]);

  return {
    props: {
      author,
      ...serverSideTranslation,
    },
    revalidate: 60, // 1 minute
  };
};

export default Index;
