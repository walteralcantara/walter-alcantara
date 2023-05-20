import apolloClient from "lib/apollo";
import { QUERY_AUTHOR } from "graphql/queries/author";

import type { GetStaticProps, NextPage } from "next";

import Home, { HomeTemplateProps } from "templates/Home";

const Index: NextPage<HomeTemplateProps> = (props) => {
  return <Home {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { author },
  } = await apolloClient.query<HomeTemplateProps>({
    query: QUERY_AUTHOR,
  });

  return {
    props: {
      author,
    },
    revalidate: 60, // 1 minute
  };
};

export default Index;
