import type { NextPage } from "next";

import Me1 from "../assets/images/me-1.svg";

import { SlidePage } from "../components/Layout/components/SlidePage";
import { PageContainer } from "../components/Layout/components/PageContainer";
import { PageContent } from "../components/Layout/components/PageContent";

const Home: NextPage = () => {

  return (
    <PageContainer>
      <SlidePage
        direction="left"
        href="/contact"
      >
        Contact
      </SlidePage>

      <PageContent>
        <h1>Home</h1>
      </PageContent>

      <SlidePage
        direction="right"
        href="/skills"
      >
        Skills
      </SlidePage>
    </PageContainer>
  );
};

export default Home;
