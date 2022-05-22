import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query QueryPosts {
    posts(orderBy: publishedAt_DESC) {
      title
      excerpt
      createdAt
      slug
      coverImage {
        url
      }
      author {
        picture {
          url
        }
        name
        title
      }
    }
  }
`;

export const QUERY_POST_BY_SLUG = gql`
  query QueryPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      title
      excerpt
      createdAt
      coverImage {
        url
      }
      author {
        picture {
          url
        }
        name
        title
      }
      content {
        html
      }
    }
  }
`;
