import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";

import Me1 from "../assets/images/me-1.svg";
import Me2 from "../assets/images/me-2.svg";

import { SlidePage } from "../components/Layout/components/SlidePage";
import { PageContainer } from "../components/Layout/components/PageContainer";
import { PageContent } from "../components/Layout/components/PageContent";
import { Button } from "../components/Layout/components/Button";
import { ScrollDown } from "../components/Layout/components/ScrollDown";

const Home: NextPage = () => {
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
            <Me1 />
            <ScrollDown />
          </Box>
        </Flex>

        <Flex
          mt="60"
          align="center"
          justify="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <VStack >
            <VStack align="left" lineHeight="8" textAlign={{ base: "center", md: "left"}}>
              <Text as="h1">About me</Text>
              <Text as="h3">An introduction about who I am</Text>
            </VStack>

            <Box w={[300, 400, 500]} h="auto">
              <Me2 />
            </Box>
          </VStack>

          <VStack
            align="flex-start"
            maxWidth={{ base: "300", md: "400s"}}
            mt={{ base: "10", md: "0" }}
          >
            <Text as="p">
              Hello, I&apos;m Walter, I&apos;m 24 and I&apos;m a Front-end
              Developer located in Brazil, passionate about web development
            </Text>
            <Button>Resume</Button>
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
