import apolloClient from "lib/apollo";
import { GetServerSideProps } from "next";

import { QUERY_POSTS } from "graphql/queries/posts";

import Blog, { BlogTemplateProps } from "templates/Blog";
import { format } from "date-fns";

type BlogPageProps = BlogTemplateProps;

export default function BlogPage(props: BlogPageProps) {
  return <Blog {...props} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { posts },
  } = await apolloClient.query<BlogPageProps>({
    query: QUERY_POSTS,
  });

  const formatedPosts = posts.map((post) => {
    return {
      ...post,
      createdAt: format(new Date(post.createdAt), "MMMM dd, yyyy"),
    };
  });

  return {
    props: {
      posts: [...formatedPosts],
    },
  };
};
