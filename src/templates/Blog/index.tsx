import { useTranslation } from "react-i18next";

import { SlidePage } from "components/Layout/components/SlidePage";
import { PageContainer } from "components/Layout/components/PageContainer";
import { Heading } from "components/Layout/components/Heading";
import { PageContent } from "components/Layout/components/PageContent";
import { PostPage } from "components/Layout/components/Post";
import { TPost } from "types";

import * as S from "./styled";

export type BlogTemplateProps = {
  posts: TPost[];
};

const Blog = ({ posts }: BlogTemplateProps) => {
  const { t } = useTranslation(["blog", "header"]);

  return (
    <PageContainer>
      <SlidePage direction="left" href="/contact">
        {t("header:contact")}
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
        {t("header:home")}
      </SlidePage>
    </PageContainer>
  );
};

export default Blog;
