import { useState } from "react";
import Image from "next/image";
import { Button, Flex, Text, VStack } from "@chakra-ui/react";

import { SlidePage } from "components/Layout/components/SlidePage";
import { PageContainer } from "components/Layout/components/PageContainer";
import { PageContent } from "components/Layout/components/PageContent";
import { Modal } from "components/Layout/components/Modal";
import { Heading } from "components/Layout/components/Heading";

import api from "services/api.json";

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
        <Heading
          title="Techs &amp; Tools."
          subtitle="Some technologies that I am studying, and tools that support me
          during development."
        />

        <Flex
          justify="space-between"
          flexDir={{ base: "column", md: "row" }}
        >
          <VStack align="flex-start">
            <Text as="h3">Technologies</Text>
            <Flex
              gap="2"
              flexWrap="wrap"
              maxWidth={{ base: "unset", md: "400" }}
              justifyContent={{ base: "flex-start", md: "unset" }}
            >
              {api.techs.map((tech) => (
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

          <VStack align="flex-start">
            <Text as="h3">Tools</Text>
            <Flex
              gap="2"
              flexWrap="wrap"
              maxWidth={{ base: "unset", md: "400" }}
              justifyContent={{ base: "flex-start", md: "unset" }}
            >
              {api.tools.map((tool) => (
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

        <Modal
          modalState={{ isModalOpen, setModalOpen, modalProps }}
        />
      </PageContent>

      <SlidePage direction="right" href="/qualifications">
        Qualifications
      </SlidePage>
    </PageContainer>
  );
};

export default Skills;
