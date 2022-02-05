import type { NextPage } from "next";

import { PageContainer } from "../components/Layout/components/PageContainer";
import { PageContent } from "../components/Layout/components/PageContent";
import { SlidePage } from "../components/Layout/components/SlidePage";

const Qualifications: NextPage = () => {
  // const { setDirection } = useNavigationContext();

  return (
    <PageContainer>
      <SlidePage direction="left" href="/skills">
        Skills
      </SlidePage>

      <PageContent>
        <h1>Qualifications</h1>
      </PageContent>

      <SlidePage direction="right" href="/portfolio">
        Portfolio
      </SlidePage>
    </PageContainer>
  );
};

export default Qualifications;
