import { SlidePage } from "components/Layout/components/SlidePage";
import { PageContainer } from "components/Layout/components/PageContainer";
import { PageContent } from "components/Layout/components/PageContent";
import { Heading } from "components/Layout/components/Heading";

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
        <Heading
          title="Portfolio."
          subtitle="Some projects that I am developing now or it's already done."
        />

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
