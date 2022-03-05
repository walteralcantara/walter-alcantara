import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

type WrapperProps = {
  colormode: "dark" | "light";
};

const wrapperModifiers = {
  dark: () => css`
    border: 1px solid rgba(255, 255, 255, 0.2);
    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.9);
    }
  `,

  light: () => css`
    border: 1px solid rgba(0, 0, 0, 0.2);
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.9);
    }
  `,
};

export const Wrapper = styled(Link)<WrapperProps>`
  max-width: 400px;
  border-radius: 1rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.4);

  ${({ colormode }) => css`
    ${wrapperModifiers[colormode]()}
  `}
`;

type CoverImageProps = {
  src: string;
};

export const CoverImage = styled(Box)<CoverImageProps>`
  ${({ src }) => css`
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    width: 100%;
    height: 10rem;
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
  `}
`;

export const Info = styled(Box)`
  padding: 1rem;
  border-radius: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Text)``;

export const Excerpt = styled(Text)`
  font-size: 14px;
`;

export const AuthorContainer = styled(Flex)`
  margin-top: 1rem;
  align-items: flex-end;
  flex: 1;
`;

export const AuthorInfo = styled(Flex)`
  flex-direction: column;
  text-align: left;
  margin-left: 0.5rem;
`;
