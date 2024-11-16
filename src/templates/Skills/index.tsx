import { useState } from "react";
import Image from "next/image";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";

import { SlidePage } from "components/Layout/components/SlidePage";
import { PageContainer } from "components/Layout/components/PageContainer";
import { PageContent } from "components/Layout/components/PageContent";
import { Modal } from "components/Layout/components/Modal";
import { Heading } from "components/Layout/components/Heading";

import { TTechnology } from "types";
import { useTranslation } from "react-i18next";

export type SkillTemplateProps = {
  technologies: TTechnology[];
  tools: TTechnology[];
};

const Skills = ({ technologies, tools }: SkillTemplateProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [skill, setSkill] = useState<TTechnology | null>();

  const { t } = useTranslation(["skills", "header"]);

  function handleOpenSkill(skill: TTechnology) {
    setIsModalVisible(true);
    setSkill(skill);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSkill(null);
  }

  return (
    <PageContainer>
      <SlidePage direction="left" href="/">
        {t("header:home")}
      </SlidePage>

      <PageContent>
        <Heading title={t("title")} subtitle={t("subtitle") as string} />

        <Flex justify="space-between" flexDir={{ base: "column", md: "row" }}>
          <VStack align="flex-start">
            <Text as="h3">{t("technologies")}</Text>
            <Flex
              gap="2"
              flexWrap="wrap"
              maxWidth={{ base: "unset", md: "400" }}
              justifyContent={{ base: "flex-start", md: "unset" }}
            >
              {technologies.map(({ picture, ...tech }) => (
                <Button
                  key={tech.title}
                  cursor="pointer"
                  w="80px"
                  h="80px"
                  onClick={() => handleOpenSkill({ picture, ...tech })}
                >
                  {picture && (
                    <Image
                      width={50}
                      height={50}
                      src={picture.image.url}
                      alt={picture.alternative}
                    />
                  )}
                </Button>
              ))}
            </Flex>
          </VStack>

          <VStack align="flex-start">
            <Text as="h3">{t("tools")}</Text>
            <Flex
              gap="2"
              flexWrap="wrap"
              maxWidth={{ base: "unset", md: "400" }}
              justifyContent={{ base: "flex-start", md: "unset" }}
            >
              {tools.map(({ picture, ...tool }) => (
                <Button
                  key={tool.title}
                  cursor="pointer"
                  w="80px"
                  h="80px"
                  onClick={() => handleOpenSkill({ picture, ...tool })}
                >
                  <Image
                    width={50}
                    height={50}
                    src={picture.image.url}
                    alt={picture.alternative}
                  />
                </Button>
              ))}
            </Flex>
          </VStack>
        </Flex>

        <Modal
          title={skill?.title}
          onCloseLabel="Close"
          isModalVisible={isModalVisible}
          onClose={handleCloseModal}
        >
          <Flex alignItems="center" gap={4}>
            <Box style={{ minWidth: 50 }}>
              {skill?.picture.image.url && (
                <Image
                  src={skill?.picture.image.url}
                  alt={skill?.picture.alternative}
                  width={50}
                  height={50}
                />
              )}
            </Box>
            <Text ml="2">{skill?.description}</Text>
          </Flex>
        </Modal>
      </PageContent>

      <SlidePage direction="right" href="/qualifications">
        {t("header:qualifications")}
      </SlidePage>
    </PageContainer>
  );
};

export default Skills;
