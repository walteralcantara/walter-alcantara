import { format } from "date-fns";
import { QUERY_QUALIFICATIONS } from "graphql/queries/qualification";
import apolloClient from "lib/apollo";
import type { GetStaticProps, NextPage } from "next";
import { Qualification } from "../types";
import Qualifications, {
  QualificationsTemplateProps,
} from "templates/Qualifications";
import { LOCALES } from "../constants";

const QualificationsPage: NextPage<QualificationsTemplateProps> = (props) => {
  return <Qualifications {...props} />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const {
    data: { qualifications },
  } = await apolloClient.query<{ qualifications: Qualification[] }>({
    query: QUERY_QUALIFICATIONS,
    variables: { locale: [LOCALES[locale! as keyof typeof LOCALES]] },
  });

  const formatedQualifications = qualifications.map(
    ({ startdate, enddate, ...q }) => ({
      ...q,
      startdate: format(new Date(startdate), "MMM yyyy"),
      enddate: enddate ? format(new Date(enddate), "MMM yyyy") : "Present",
    })
  );

  const education = formatedQualifications.filter(
    (q) => q.type === "education"
  );
  const experience = formatedQualifications.filter(
    (q) => q.type === "experience"
  );

  return {
    props: {
      education,
      experience,
    },
    revalidate: 60, // 1 minute
  };
};

export default QualificationsPage;
