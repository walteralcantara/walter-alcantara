import { gql } from "@apollo/client";

export const QUERY_AUTHOR = gql`
  query QueryAuthor {
    author(where: { id: "cl0bmqyxigtn70clqv8fxf76s" }) {
      name
      title
      resume
      about {
        html
      }
      pictures {
        alternative
        image {
          url
        }
      }
    }
  }
`;
