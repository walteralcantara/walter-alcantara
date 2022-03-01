import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

import { SlidePage } from "components/Layout/components/SlidePage";
import { PageContainer } from "components/Layout/components/PageContainer";
import { PageContent } from "components/Layout/components/PageContent";
import { Button } from "components/Layout/components/Button";
import { ScrollDown } from "components/Layout/components/ScrollDown";

const Home = () => {
  return (
    <PageContainer>
      <SlidePage direction="left" href="/contact">
        Contact
      </SlidePage>

      <PageContent>
        <Flex
          align="center"
          justify="space-between"
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <VStack align="left" lineHeight="40px" mt={{ base: "10", sm: "0" }}>
            <Text as="h1">Hi,</Text>
            <Text as="h1">I&apos;m Walter</Text>

            <Text as="h3">A Front-end Developer.</Text>
          </VStack>

          <Box w={[300, 400, 500]} h="auto" pos="relative">
            <Image
              src="/assets/img/me-1.png"
              alt="In this picture, it's me using a Hawaiian shirt, and the sand, ocean, and skies in the background demonstrate that I am on the beach."
              width={500}
              height={500}
            />
            <ScrollDown />
          </Box>
        </Flex>

        <Flex
          mt="60"
          align="center"
          justify="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <VStack>
            <VStack
              align="left"
              lineHeight="8"
              textAlign={{ base: "center", md: "left" }}
            >
              <Text as="h1">About me</Text>
              <Text as="h3">An introduction about who I am</Text>
            </VStack>

            <Box w={[300, 400, 500]} h="auto">
              <Image
                src="/assets/img/me-2.png"
                alt="In this picture, it's me using a suit on my wedding, and some trees in the background."
                width={500}
                height={500}
              />
            </Box>
          </VStack>

          <VStack
            align="flex-start"
            maxWidth={{ base: "300", md: "400s" }}
            mt={{ base: "10", md: "0" }}
          >
            <Text as="p">
              Hello, I&apos;m Walter, I&apos;m 24 and I&apos;m a Front-end
              Developer located in Brazil, passionate about web development
            </Text>
            <Link
              href="https://docs.google.com/document/d/12X6yrg2Wa338Sj8pbruF9JZQkskyemEuxXt5dAp7q6U/edit?usp=sharing"
              target="_blank"
            >
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
