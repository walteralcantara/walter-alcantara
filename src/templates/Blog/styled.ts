import { Box, Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { CoverImage } from "components/Layout/components/Post/styled";

export const Posts = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  a {
    justify-self: center;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const AuthorContainer = styled(Flex)`
  margin: 2rem 0 1rem;
`;

export const AuthorInfo = styled(Flex)`
  flex-direction: column;
  text-align: left;
  margin-left: 0.5rem;
`;

export const Title = styled(Text)`
  margin: 2rem 0;
  line-height: 3.5rem;
`;

Title.defaultProps = { as: "h1" };

export const Excerpt = styled(Text)`
  text-align: center;
  margin: 0.5rem 0 4rem;
`;

export const BannerCoverImage = styled(CoverImage)`
  height: 25rem;
`;

export const Content = styled(Box)`
  margin: 1rem 0;

  p {
    margin: inherit;
  }
`;
