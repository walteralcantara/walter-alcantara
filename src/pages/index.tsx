import apolloClient from "lib/apollo";
import { QUERY_AUTHOR } from "graphql/queries/author";

import type { GetServerSideProps, NextPage } from "next";

import Home, { HomeTemplateProps } from "templates/Home";

const Index: NextPage<HomeTemplateProps> = (props) => {
  return <Home {...props} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { author },
  } = await apolloClient.query<HomeTemplateProps>({
    query: QUERY_AUTHOR,
  });

  return {
    props: {
      author,
    },
  };
};

export default Index;
