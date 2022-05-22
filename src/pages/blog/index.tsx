import apolloClient from "lib/apollo";
import { GetServerSideProps } from "next";

import { QUERY_POSTS } from "graphql/queries/posts";

import Blog, { BlogTemplateProps } from "templates/Blog";

type BlogPageProps = BlogTemplateProps;

export default function BlogPage(props: BlogPageProps) {
  return <Blog {...props} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { posts },
  } = await apolloClient.query({
    query: QUERY_POSTS,
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
  };
};
