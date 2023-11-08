import { gql } from "@apollo/client";

export const QUERY_AUTHOR = gql`
  query QueryAuthor($locale: [Locale!]!) {
    author(where: { id: "cl0bmqyxigtn70clqv8fxf76s" }, locales: $locale) {
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
