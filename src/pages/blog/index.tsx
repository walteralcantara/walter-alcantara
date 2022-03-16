import { gql } from "@apollo/client";
import apolloClient from "lib/apollo";
import { GetStaticProps } from "next";

import Blog, { BlogTemplateProps } from "templates/Blog";

type BlogPageProps = BlogTemplateProps;

export default function BlogPage(props: BlogPageProps) {
  return <Blog {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { posts },
  } = await apolloClient.query({
    query: gql`
      query {
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
    `,
  });

  const formatPosts = posts.map((post: any) => {
    return {
      ...post,
      createdAt: new Date(post.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
  });

  return {
    props: {
      posts: [...formatPosts],
    },
    revalidate: 60 * 60 // 1 hour
  };
};
