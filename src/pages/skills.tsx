import { LOCALES } from "../constants";
import { QUERY_SKILLS } from "graphql/queries/technology";
import apolloClient from "lib/apollo";
import type { GetStaticProps, NextPage } from "next";

import Skills, { SkillTemplateProps } from "templates/Skills";
import serverSideTranslations from "utils/server-side-translation";

import { TTechnology } from "types";

const SkillsPage: NextPage<SkillTemplateProps> = (props) => {
  return <Skills {...props} />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const {
    data: { technologies: skills },
  } = await apolloClient.query<{ technologies: TTechnology[] }>({
    query: QUERY_SKILLS,
    variables: { locale: [LOCALES[locale! as keyof typeof LOCALES]] },
  });

  const serverSideTranslation = await serverSideTranslations(locale!, [
    "skills",
    "header",
  ]);

  const technologies = skills.filter((s) => s.type === "tech");
  const tools = skills.filter((s) => s.type === "tool");

  return {
    props: {
      technologies,
      tools,
      ...serverSideTranslation,
    },
    revalidate: 60, // 1 minute
  };
};

export default SkillsPage;
