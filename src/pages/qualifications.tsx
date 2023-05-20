import { format } from "date-fns";
import { QUERY_QUALIFICATIONS } from "graphql/queries/qualification";
import apolloClient from "lib/apollo";
import type { GetServerSideProps, NextPage } from "next";
import { Qualification } from "../types";
import Qualifications, {
  QualificationsTemplateProps,
} from "templates/Qualifications";

const QualificationsPage: NextPage<QualificationsTemplateProps> = (props) => {
  return <Qualifications {...props} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { qualifications },
  } = await apolloClient.query<{ qualifications: Qualification[] }>({
    query: QUERY_QUALIFICATIONS,
  });

  const formatedQualifications = qualifications
    .map(({ startdate, enddate, ...q }) => ({
      ...q,
      startdate: format(new Date(startdate), "MMM yyyy"),
      enddate: enddate ? format(new Date(enddate), "MMM yyyy") : "Present",
    }))
    .sort((a, b) => (a.startdate > b.startdate ? -1 : 1));

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
  };
};

export default QualificationsPage;
