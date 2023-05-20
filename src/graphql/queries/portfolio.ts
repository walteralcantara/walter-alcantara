import { gql } from "@apollo/client";

export const QUERY_PORTFOLIO = gql`
  query QueryPortfolio {
    portfolios {
      name
      description
      link
      technologies {
        id
        title
      }
      image {
        url
      }
    }
  }
`;
