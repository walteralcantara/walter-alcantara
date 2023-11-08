import { LOCALES } from "../constants";
import { QUERY_SKILLS } from "graphql/queries/technology";
import apolloClient from "lib/apollo";
import type { GetStaticProps, NextPage } from "next";

import Skills, { SkillTemplateProps } from "templates/Skills";
import { Technology } from "types";

const SkillsPage: NextPage<SkillTemplateProps> = (props) => {
  return <Skills {...props} />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const {
    data: { technologies: skills },
  } = await apolloClient.query<{ technologies: Technology[] }>({
    query: QUERY_SKILLS,
    variables: { locale: [LOCALES[locale! as keyof typeof LOCALES]] },
  });

  const technologies = skills.filter((s) => s.type === "tech");
  const tools = skills.filter((s) => s.type === "tool");

  return {
    props: {
      technologies,
      tools,
    },
    revalidate: 60, // 1 minute
  };
};

export default SkillsPage;
