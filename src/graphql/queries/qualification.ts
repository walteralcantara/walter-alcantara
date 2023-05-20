import { gql } from "@apollo/client";

export const QUERY_QUALIFICATIONS = gql`
  query QueryQualification {
    qualifications(orderBy: startdate_DESC) {
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
