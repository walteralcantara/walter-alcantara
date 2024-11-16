import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { Link } from "./components/Link";

export const NavDesktop = () => {
  const { t } = useTranslation(["header"]);
  return (
    <Box display={{ base: "none", md: "block" }}>
      <Link href="/">{t("home")}</Link>
      <Link href="/skills">{t("skills")}</Link>
      <Link href="/qualifications">{t("qualifications")}</Link>
      <Link href="/portfolio">{t("portfolio")}</Link>
      <Link href="/contact">{t("contact")}</Link>
      <Link href="/blog">Blog</Link>
    </Box>
  );
};
