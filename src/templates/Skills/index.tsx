import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";

import { SlidePage } from "components/Layout/components/SlidePage";
import { PageContainer } from "components/Layout/components/PageContainer";
import { PageContent } from "components/Layout/components/PageContent";
import { Modal } from "components/Layout/components/Modal";

import fakeApi from "services/fakeApi.json";

import { useState } from "react";
import Image from "next/image";

const Skills = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const openModal = (skill: any) => {
    setModalOpen(true);
    setModalProps(skill);
  };

  return (
    <PageContainer>
      <SlidePage direction="left" href="/">
        Home
      </SlidePage>

      <PageContent>
        <Box maxWidth="350" textAlign="left">
          <Text as="h1">Skills &amp; Tools</Text>
          <Text as="h3">
            Some technologies and tools that I study and supports me in
            development
          </Text>
        </Box>

        <Flex justify="space-between" flexDir={{ base: "column", md: "row" }}>
          <VStack align="flex-start" mt="20">
            <Text as="h3">Technologies</Text>
            <Flex
              maxWidth={{ base: "unset", md: "400" }}
              flexWrap="wrap"
              gap="2"
              justifyContent={{ base: "flex-start", md: "unset" }}
            >
              {fakeApi.techs.map((tech) => (
                <Button
                  key={tech.name}
                  cursor="pointer"
                  w="80px"
                  h="80px"
                  onClick={() => openModal(tech)}
                >
                  <Image
                    width={50}
                    height={50}
                    src={tech.img}
                    alt={tech.name}
                  />
                </Button>
              ))}
            </Flex>
          </VStack>

          <VStack align="flex-start" mt="20">
            <Text as="h3">Tools</Text>
            <Flex
              maxWidth={{ base: "unset", md: "400" }}
              flexWrap="wrap"
              gap="2"
              justifyContent={{ base: "flex-start", md: "unset" }}
            >
              {fakeApi.tools.map((tool) => (
                <Button
                  key={tool.name}
                  cursor="pointer"
                  w="80px"
                  h="80px"
                  onClick={() => openModal(tool)}
                >
                  <Image
                    width={50}
                    height={50}
                    src={tool.img}
                    alt={tool.name}
                  />
                </Button>
              ))}
            </Flex>
          </VStack>
        </Flex>

        <Modal modalState={{ isModalOpen, setModalOpen, modalProps }} />
      </PageContent>

      <SlidePage direction="right" href="/qualifications">
        Qualifications
      </SlidePage>
    </PageContainer>
  );
};

export default Skills;
