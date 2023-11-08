import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

import { SlidePage } from "components/Layout/components/SlidePage";
import { PageContainer } from "components/Layout/components/PageContainer";
import { PageContent } from "components/Layout/components/PageContent";
import { Button } from "components/Layout/components/Button";
import { ScrollDown } from "components/Layout/components/ScrollDown";
import { Heading } from "components/Layout/components/Heading";

import { Author } from "types";

import * as S from "./styled";
import { useTranslation } from "react-i18next";

export type HomeTemplateProps = {
  author: Author;
};

const Home = ({ author }: HomeTemplateProps) => {
  const { t } = useTranslation('home');

  if (!author) {
    return null;
  }


  return (
    <PageContainer>
      <SlidePage direction="left" href="/blog">
        Blog
      </SlidePage>

      <PageContent>
        <Flex
          align="center"
          justify="space-between"
          flexDirection={{ base: "column-reverse", md: "row" }}
          mb="60"
        >
          <VStack align="left" lineHeight="40px" mt={{ base: "10", sm: "0" }}>
            <Text as="h1">{t('hello-1')}</Text>
            <Text as="h1">{t('hello-2')} {author?.name}</Text>

            <Text as="h3">{author?.title}.</Text>
          </VStack>

          <Box w={[300, 400, 500]} h="auto" pos="relative">
            <Image
              src={author?.pictures[1]?.image?.url || "/assets/img/me-1.png"}
              alt={author?.pictures[1]?.alternative || ""}
              width={500}
              height={500}
            />
            <ScrollDown />
          </Box>
        </Flex>

        <Heading title={t('title')} subtitle={t('subtitle')} />

        <Flex
          align="center"
          justify="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <VStack>
            <Box w={[300, 400, 500]} h="auto">
              <Image
                src={author?.pictures[2]?.image?.url || "/assets/img/me-2.png"}
                alt={author?.pictures[2]?.alternative || ""}
                width={500}
                height={500}
              />
            </Box>
          </VStack>

          <VStack
            align="flex-start"
            maxWidth="400"
            mt={{ base: "10", md: "0" }}
          >
            <S.Content
              dangerouslySetInnerHTML={{ __html: author.about.html }}
            />
            <Link href={author.resume} target="_blank">
              <Button>Resume</Button>
            </Link>
          </VStack>
        </Flex>
      </PageContent>

      <SlidePage direction="right" href="/skills">
        Skills
      </SlidePage>
    </PageContainer>
  );
};

export default Home;
