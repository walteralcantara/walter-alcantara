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

import EducationIcon from "assets/icons/education-icon.svg";
import JobIcon from "assets/icons/job-icon.svg";

import { PageContainer } from "components/Layout/components/PageContainer";
import { PageContent } from "components/Layout/components/PageContent";
import { SlidePage } from "components/Layout/components/SlidePage";
import { Timeline } from "components/Layout/components/Timeline";
import { Heading } from "components/Layout/components/Heading";

import api from "services/api.json";

const Qualifications = () => {
  return (
    <PageContainer>
      <SlidePage direction="left" href="/skills">
        Skills
      </SlidePage>

      <PageContent>
        <Heading 
          title="Qualifications"
          subtitle="My journey until here."
        />

        <Tabs variant="soft-rounded">
          <Flex justify="center">
            <TabList gap={{ base: "2", sm: "10" }}>
              <Tab>
                <EducationIcon width={30} />
                <Text ml="2">Education</Text>
              </Tab>
              <Tab>
                <JobIcon width={30} />
                <Text ml="2">Experience</Text>
              </Tab>
            </TabList>
          </Flex>

          <TabPanels>
            <TabPanel>
              {api.education.map(
                ({ institution, link, course, time, direction }) => (
                  <Timeline key={institution} direction={direction}>
                    <Link href={link} target="_blank" d="flex">
                      <Text as="h6">{institution}</Text>
                      <ExternalLinkIcon ml="2" />
                    </Link>
                    <Text mb="2">{course}</Text>
                    <Text as="span">
                      <CalendarIcon mr="2" />
                      {time}
                    </Text>
                  </Timeline>
                )
              )}
            </TabPanel>

            <TabPanel>
              {api.experience.map(
                ({ company, link, role, time, keywords, direction }) => (
                  <Timeline key={company} direction={direction}>
                    <Link href={link} target="_blank" d="flex">
                      <Text as="h6">{company}</Text>
                      <ExternalLinkIcon ml="2" />
                    </Link>
                    <Text mb="2">{role}</Text>
                    <Text as="span">
                      <CalendarIcon mr="2" />
                      {time}
                    </Text>
                    <Flex flexWrap="wrap" gap="1" mt="2">
                      {keywords.map((kw) => (
                        <Badge key={kw}>{kw}</Badge>
                      ))}
                    </Flex>
                  </Timeline>
                )
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </PageContent>

      <SlidePage direction="right" href="/portfolio">
        Portfolio
      </SlidePage>
    </PageContainer>
  );
};

export default Qualifications;
