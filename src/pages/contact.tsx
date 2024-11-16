import type { GetStaticProps, NextPage } from "next";

import Contact from "templates/Contact";
import serverSideTranslations from "utils/server-side-translation";

const ContactPage: NextPage = () => {
  return <Contact />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const serverSideTranslation = await serverSideTranslations(locale!, [
    "contact",
    "header",
  ]);

  return {
    props: {
      ...serverSideTranslation,
    },
    revalidate: 60, // 1 minute
  };
};

export default ContactPage;
