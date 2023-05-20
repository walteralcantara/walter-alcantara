import { SlidePage } from "components/Layout/components/SlidePage";
import { PageContainer } from "components/Layout/components/PageContainer";
import { Heading } from "components/Layout/components/Heading";
import { PageContent } from "components/Layout/components/PageContent";
import { PostPage } from "components/Layout/components/Post";
import { Post } from "types";

import * as S from "./styled";

export type BlogTemplateProps = {
  posts: Post[];
};

const Blog = ({ posts }: BlogTemplateProps) => {
  return (
    <PageContainer>
      <SlidePage direction="left" href="/contact">
        Contact
      </SlidePage>

      <PageContent>
        <Heading title="Blog" />

        <S.Posts>
          {posts.map((post) => {
            return <PostPage key={post.title} {...post} />;
          })}
        </S.Posts>
      </PageContent>

      <SlidePage direction="right" href="/">
        Home
      </SlidePage>
    </PageContainer>
  );
};

export default Blog;
