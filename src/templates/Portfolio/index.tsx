import { SlidePage } from "components/Layout/components/SlidePage";
import { PageContainer } from "components/Layout/components/PageContainer";
import { PageContent } from "components/Layout/components/PageContent";
import { Heading } from "components/Layout/components/Heading";
import { PortfolioItem } from "components/Layout/components/Portfolio/components/PortfolioItem";
import { PortfolioContainer } from "components/Layout/components/Portfolio/components/PortfolioContainer";

import { useTranslation } from "react-i18next";

import { TPortfolio } from "types";
import { Text } from "@chakra-ui/react";

export type PortfolioTemplateProps = {
  portfolios: TPortfolio[];
};

const Portfolio = ({ portfolios }: PortfolioTemplateProps) => {
  const { t } = useTranslation(["portfolio", "header"]);
  const isPortfolioEmpty = portfolios.length === 0;

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
          {!isPortfolioEmpty &&
            portfolios.map((project) => (
              <PortfolioItem key={project.name} {...project} />
            ))}

          {isPortfolioEmpty && (
            <Text
              as="h1"
              style={{
                textAlign: "center",
                margin: "4rem auto 0px auto",
                fontSize: "2.5rem",
                opacity: 0.8,
              }}
            >
              {t("portfolio:title-wip")}
            </Text>
          )}
        </PortfolioContainer>
      </PageContent>

      <SlidePage direction="right" href="/contact">
        {t("header:contact")}
      </SlidePage>
    </PageContainer>
  );
};

export default Portfolio;
