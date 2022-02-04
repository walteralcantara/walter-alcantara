import type { NextPage } from "next";

import { SlidePage } from "../components/Layout/components/SlidePage";
import { PageContainer } from "../components/Layout/components/PageContainer";
import { PageContent } from "../components/Layout/components/PageContent";

const Contact: NextPage = () => {

  return (
    <PageContainer>
      <SlidePage
        direction="left"
        href="/portfolio"
      >
        Portfolio
      </SlidePage>

      <PageContent>
        <h1>Contact</h1>
      </PageContent>

      <SlidePage
        direction="right"
        href="/"
      >
        Home
      </SlidePage>
    </PageContainer>
  );
};

export default Contact;
