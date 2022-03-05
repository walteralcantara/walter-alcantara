import { gql } from "@apollo/client";
import apolloClient from "lib/apollo";
import { GetStaticPaths, GetStaticProps } from "next";

import BlogPost, { BlogPostTemplateProps } from "templates/Blog/post";

export default function Post(props: BlogPostTemplateProps) {
  return <BlogPost {...props} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;

  const {
    data: { post },
  } = await apolloClient.query({
    query: gql`
      query Post($slug: String!) {
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
    `,
    variables: { slug },
  });

  const postFormat = {
    ...post,
    createdAt: new Date(post.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };

  return {
    props: {
      ...postFormat,
    },
  };
};
