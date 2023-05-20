import { Avatar, Text, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

import { Post } from "types";

import * as S from "./styled";

export type PostProps = Post;

export const PostPage = ({
  title,
  excerpt,
  slug,
  coverImage,
  author,
  createdAt,
}: Post) => {
  const { colorMode } = useColorMode();

  return (
    <Link href={`/blog/${slug}`} passHref>
      <S.Wrapper colormode={colorMode}>
        <S.CoverImage src={coverImage.url} />
        <S.Info>
          <S.Title as="strong">{title}</S.Title>
          <S.Excerpt>{excerpt}</S.Excerpt>

          <S.AuthorContainer>
            <Avatar name={author?.name} src={author?.pictures[0].image.url} />
            <S.AuthorInfo>
              <Text as="strong">{author?.name}</Text>
              <Text>{createdAt}</Text>
            </S.AuthorInfo>
          </S.AuthorContainer>
        </S.Info>
      </S.Wrapper>
    </Link>
  );
};
