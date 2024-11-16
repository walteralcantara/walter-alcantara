import { format } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";
import { QUERY_QUALIFICATIONS } from "graphql/queries/qualification";
import apolloClient from "lib/apollo";
import type { GetStaticProps, NextPage } from "next";

import { TQualification } from "../types";

import serverSideTranslations from "utils/server-side-translation";

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
  } = await apolloClient.query<{ qualifications: TQualification[] }>({
    query: QUERY_QUALIFICATIONS,
    variables: { locale: [LOCALES[locale! as keyof typeof LOCALES]] },
  });

  const localeMap: {
    [key: string]: Locale;
  } = {
    en: enUS,
    br: ptBR,
  };

  const formatedQualifications = qualifications.map(
    ({ startdate, enddate, ...q }) => ({
      ...q,
      startdate: format(new Date(startdate), "MMM yyyy", {
        locale: localeMap[locale!],
      }),
      enddate: enddate
        ? format(new Date(enddate), "MMM yyyy", { locale: localeMap[locale!] })
        : locale === "en"
					? "Present"
					: "Até o momento",
    })
  );

  const education = formatedQualifications.filter(
    (q) => q.type === "education"
  );
  const experience = formatedQualifications.filter(
    (q) => q.type === "experience"
  );

  const serverSideTranslation = await serverSideTranslations(locale!, [
    "qualifications",
    "header",
  ]);

  return {
    props: {
      education,
      experience,
      ...serverSideTranslation,
    },
    revalidate: 60, // 1 minute
  };
};

export default QualificationsPage;
