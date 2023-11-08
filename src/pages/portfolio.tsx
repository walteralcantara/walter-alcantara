import type { GetStaticProps, NextPage } from "next";
import { QUERY_PORTFOLIO } from "graphql/queries/portfolio";
import apolloClient from "lib/apollo";

import Portfolio, { PortfolioTemplateProps } from "templates/Portfolio";
import { LOCALES } from "../constants";

const PortfolioPage: NextPage<PortfolioTemplateProps> = (props) => {
  return <Portfolio {...props} />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const {
    data: { portfolios },
  } = await apolloClient.query({
    query: QUERY_PORTFOLIO,
    variables: { locale: [LOCALES[locale! as keyof typeof LOCALES]] },
  });

  return {
    props: {
      portfolios,
    },
    revalidate: 60, // 1 minute
  };
};

export default PortfolioPage;
