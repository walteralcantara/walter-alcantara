import { gql } from "@apollo/client";

export const QUERY_QUALIFICATIONS = gql`
  query QueryQualification {
    qualifications {
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
