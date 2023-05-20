import { QUERY_SKILLS } from "graphql/queries/technology";
import apolloClient from "lib/apollo";
import type { GetServerSideProps, NextPage } from "next";

import Skills, { SkillTemplateProps } from "templates/Skills";
import { Technology } from "types";

const SkillsPage: NextPage<SkillTemplateProps> = (props) => {
  return <Skills {...props} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { technologies: skills },
  } = await apolloClient.query<{ technologies: Technology[] }>({
    query: QUERY_SKILLS,
  });

  const technologies = skills.filter((s) => s.type === "tech");
  const tools = skills.filter((s) => s.type === "tool");

  return {
    props: {
      technologies,
      tools,
    },
  };
};

export default SkillsPage;
