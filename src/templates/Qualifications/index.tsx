import {
  Badge,
  Flex,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon, CalendarIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

import EducationIcon from "assets/icons/education-icon.svg";
import JobIcon from "assets/icons/job-icon.svg";

import { PageContainer } from "components/Layout/components/PageContainer";
import { PageContent } from "components/Layout/components/PageContent";
import { SlidePage } from "components/Layout/components/SlidePage";
import { Timeline } from "components/Layout/components/Timeline";
import { Heading } from "components/Layout/components/Heading";

import { TQualification } from "types";

export type QualificationsTemplateProps = {
  experience: TQualification[];
  education: TQualification[];
};

const Qualifications = ({
  education,
  experience,
}: QualificationsTemplateProps) => {
  const { t } = useTranslation(["qualifications", "header"]);
  return (
    <PageContainer>
      <SlidePage direction="left" href="/skills">
        {t("header:skills")}
      </SlidePage>

      <PageContent>
        <Heading
          title={t("qualifications:title")}
          subtitle={t("qualifications:subtitle") as string}
        />

        <Tabs variant="soft-rounded">
          <Flex justify="center">
            <TabList gap={{ base: "2", sm: "10" }}>
              <Tab>
                <EducationIcon width={30} />
                <Text ml="2">{t("qualifications:education")}</Text>
              </Tab>
              <Tab>
                <JobIcon width={30} />
                <Text ml="2">{t("qualifications:experience")}</Text>
              </Tab>
            </TabList>
          </Flex>

          <TabPanels>
            <TabPanel>
              {education.map((edu) => (
                <Timeline key={edu.id} direction={edu.direction}>
                  <Link href={edu.link} target="_blank" d="flex">
                    <Text as="h6">{edu.title}</Text>
                    <ExternalLinkIcon ml="2" />
                  </Link>
                  <Text mb="2">{edu.subtitle}</Text>
                  <Text as="span">
                    <CalendarIcon mr="2" />
                    {edu.startdate} - {edu.enddate}
                  </Text>
                </Timeline>
              ))}
            </TabPanel>

            <TabPanel>
              {experience.map((exp) => (
                <Timeline key={exp.id} direction={exp.direction}>
                  <Link href={exp.link} target="_blank" d="flex">
                    <Text as="h6">{exp.title}</Text>
                    <ExternalLinkIcon ml="2" />
                  </Link>
                  <Text mb="2">{exp.subtitle}</Text>
                  <Text as="span">
                    <CalendarIcon mr="2" />
                    {exp.startdate} - {exp.enddate}
                  </Text>
                  <Flex flexWrap="wrap" gap="1" mt="2">
                    {exp.technologies.map((t) => (
                      <Badge key={t.id}>{t.title}</Badge>
                    ))}
                  </Flex>
                </Timeline>
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </PageContent>

      <SlidePage direction="right" href="/portfolio">
        {t("header:portfolio")}
      </SlidePage>
    </PageContainer>
  );
};

export default Qualifications;
