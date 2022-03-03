import { Box, Text } from "@chakra-ui/react";

import * as S from "./styled";

type HeadingProps = {
  title: string;
  subtitle?: string;
};

export const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <S.HeadingWrapper>
      <Text as="h1">{title}</Text>
      {!!subtitle && <Text as="h3">{subtitle}</Text>}
    </S.HeadingWrapper>
  );
};
