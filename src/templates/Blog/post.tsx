import { Avatar, Text } from "@chakra-ui/react";

import { PageContainer } from "components/Layout/components/PageContainer";
import { PageContent } from "components/Layout/components/PageContent";
import { PostProps } from "components/Layout/components/Post";

import * as S from "./styled";

export type BlogPostTemplateProps = {
  content: {
    html: string;
  };
} & PostProps;

const BlogPost = ({
  author,
  content,
  coverImage,
  excerpt,
  title,
  createdAt,
}: BlogPostTemplateProps) => {
  return (
    <PageContainer>
      <PageContent>
        <S.AuthorContainer>
          <Avatar name={author.name} src={author.picture.url} />
          <S.AuthorInfo>
            <Text as="strong">{author.name}</Text>
            <Text>{createdAt}</Text>
          </S.AuthorInfo>
        </S.AuthorContainer>

        <S.Title>{title}</S.Title>

        <S.BannerCoverImage src={coverImage.url} />
        <S.Excerpt>{excerpt}</S.Excerpt>

        <S.Content dangerouslySetInnerHTML={{ __html: content.html }} />
      </PageContent>
    </PageContainer>
  );
};

export default BlogPost;
