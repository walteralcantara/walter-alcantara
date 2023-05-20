import type { GetServerSideProps, NextPage } from "next";
import { QUERY_PORTFOLIO } from "graphql/queries/portfolio";
import apolloClient from "lib/apollo";

import Portfolio, { PortfolioTemplateProps } from "templates/Portfolio";

const PortfolioPage: NextPage<PortfolioTemplateProps> = (props) => {
  return <Portfolio {...props} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { portfolios },
  } = await apolloClient.query({
    query: QUERY_PORTFOLIO,
  });

  return {
    props: {
      portfolios,
    },
  };
};

export default PortfolioPage;
