import { Text } from "@chakra-ui/react";

import { SlidePage } from "components/Layout/components/SlidePage";
import { PageContainer } from "components/Layout/components/PageContainer";
import { PageContent } from "components/Layout/components/PageContent";

import { PortfolioItem } from "components/Layout/components/Portfolio/components/PortfolioItem";
import { PortfolioContainer } from "components/Layout/components/Portfolio/components/PortfolioContainer";

import api from "services/api.json";

const Portfolio = () => {
  return (
    <PageContainer>
      <SlidePage direction="left" href="/qualifications">
        Qualifications
      </SlidePage>

      <PageContent>
        <Text as="h1" mb="8">
          Portfolio
        </Text>

        <PortfolioContainer>
          {api.portfolios.map((project) => (
            <PortfolioItem key={project.name} project={project} />
          ))}
        </PortfolioContainer>
      </PageContent>

      <SlidePage direction="right" href="/contact">
        Contact
      </SlidePage>
    </PageContainer>
  );
};

export default Portfolio;
