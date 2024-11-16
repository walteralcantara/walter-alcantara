import apolloClient from "lib/apollo";
import { GetServerSideProps } from "next";

import { QUERY_POSTS } from "graphql/queries/posts";

import Blog, { BlogTemplateProps } from "templates/Blog";
import serverSideTranslations from "utils/server-side-translation";

import { format } from "date-fns";

type BlogPageProps = BlogTemplateProps;

export default function BlogPage(props: BlogPageProps) {
  return <Blog {...props} />;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
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

  const serverSideTranslation = await serverSideTranslations(locale!, [
    "blog",
    "header",
  ]);

  return {
    props: {
      posts: [...formatedPosts],
      ...serverSideTranslation,
    },
  };
};
