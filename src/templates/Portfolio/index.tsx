import { SlidePage } from "components/Layout/components/SlidePage";
import { PageContainer } from "components/Layout/components/PageContainer";
import { PageContent } from "components/Layout/components/PageContent";
import { Heading } from "components/Layout/components/Heading";
import { PortfolioItem } from "components/Layout/components/Portfolio/components/PortfolioItem";
import { PortfolioContainer } from "components/Layout/components/Portfolio/components/PortfolioContainer";

import { Portfolio } from "types";

export type PortfolioTemplateProps = {
  portfolios: Portfolio[];
};

const Portfolio = ({ portfolios }: PortfolioTemplateProps) => {
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
          {portfolios.map((project) => (
            <PortfolioItem key={project.name} {...project} />
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
