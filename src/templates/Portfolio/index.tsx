import { SlidePage } from "components/Layout/components/SlidePage";
import { PageContainer } from "components/Layout/components/PageContainer";
import { PageContent } from "components/Layout/components/PageContent";
import { Heading } from "components/Layout/components/Heading";
import { PortfolioItem } from "components/Layout/components/Portfolio/components/PortfolioItem";
import { PortfolioContainer } from "components/Layout/components/Portfolio/components/PortfolioContainer";

import { useTranslation } from "react-i18next";

import { TPortfolio } from "types";

export type PortfolioTemplateProps = {
  portfolios: TPortfolio[];
};

const Portfolio = ({ portfolios }: PortfolioTemplateProps) => {
  const { t } = useTranslation(["portfolio", "header"]);

  return (
    <PageContainer>
      <SlidePage direction="left" href="/qualifications">
        {t("header:qualifications")}
      </SlidePage>

      <PageContent>
        <Heading
          title={t("portfolio:title")}
          subtitle={t("portfolio:subtitle") as string}
        />

        <PortfolioContainer>
          {portfolios.map((project) => (
            <PortfolioItem key={project.name} {...project} />
          ))}
        </PortfolioContainer>
      </PageContent>

      <SlidePage direction="right" href="/contact">
        {t("header:contact")}
      </SlidePage>
    </PageContainer>
  );
};

export default Portfolio;
