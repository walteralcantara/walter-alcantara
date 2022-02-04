import type { NextPage } from "next";

import { SlidePage } from "../components/Layout/components/SlidePage";
import { PageContainer } from "../components/Layout/components/PageContainer";
import { PageContent } from "../components/Layout/components/PageContent";

const Skills: NextPage = () => {

  return (
    <PageContainer>
      <SlidePage
        direction="left"
        href="/"
      >
        Home
      </SlidePage>

      <PageContent>
        <h1>Skills</h1>
      </PageContent>

      <SlidePage
        direction="right"
        href="/qualifications"
      >
        Qualifications
      </SlidePage>
    </PageContainer>
  );
};

export default Skills;
