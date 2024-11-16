import { gql } from "@apollo/client";

export const QUERY_QUALIFICATIONS = gql`
  query QueryQualification($locale: [Locale!]!) {
    qualifications(orderBy: startdate_DESC, locales: $locale) {
      id
      title
      subtitle
      link
      startdate
      enddate
      type
      direction
      technologies {
        id
        title
      }
    }
  }
`;
