import { gql } from "@apollo/client";

export const QUERY_SKILLS = gql`
  query QuerySkills {
    technologies {
      id
      title
      description
      type
      picture {
        image {
          url
        }
        alternative
      }
    }
  }
`;
