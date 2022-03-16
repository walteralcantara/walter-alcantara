import { Avatar, Text, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

import * as S from "./styled";

export type PostProps = {
  title: string;
  excerpt: string;
  slug: string;
  coverImage: {
    url: string;
  };
  author: {
    picture: {
      url: string;
    };
    name: string;
    title: string;
  };
  createdAt: string;
};

export const Post = ({
  title,
  excerpt,
  slug,
  coverImage,
  author,
  createdAt,
}: PostProps) => {
  const { colorMode } = useColorMode();

  return (
    <Link href={`/blog/${slug}`} passHref>
      <S.Wrapper colormode={colorMode}>
        <S.CoverImage src={coverImage.url} />
        <S.Info>
          <S.Title as="strong">{title}</S.Title>
          <S.Excerpt>{excerpt}</S.Excerpt>

          <S.AuthorContainer>
            <Avatar name={author?.name} src={author?.picture.url} />
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
