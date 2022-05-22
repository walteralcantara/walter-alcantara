import apolloClient from "lib/apollo";
import { GetStaticPaths, GetStaticProps } from "next";

import { QUERY_POST_BY_SLUG } from "graphql/queries/posts";

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
    query: QUERY_POST_BY_SLUG,
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
    revalidate: 60 * 10, // 10 minutes
  };
};
