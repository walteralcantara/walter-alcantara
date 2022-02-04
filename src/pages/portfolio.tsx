import type { NextPage } from "next";

import { SlidePage } from "../components/Layout/components/SlidePage";
import { PageContainer } from "../components/Layout/components/PageContainer";
import { PageContent } from "../components/Layout/components/PageContent";

const Portfolio: NextPage = () => {

  return (
    <PageContainer>
      <SlidePage
        direction="left"
        href="/qualifications"
      >
        Qualifications
      </SlidePage>

      <PageContent>
        <h1>Portfolio</h1>
      </PageContent>

      <SlidePage
        direction="right"
        href="/contact"
      >
        Contact
      </SlidePage>
    </PageContainer>
  );
};

export default Portfolio;
