import { Box } from "@chakra-ui/react";
import { Link } from "./components/Link";

export const NavDesktop = () => {
  return (
    <Box d={{ base: "none", md: "block" }}>
      <Link href="/">Home</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/qualifications">Qualifications</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/contact">Contact</Link>
    </Box>
  );
};
