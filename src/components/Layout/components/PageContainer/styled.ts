import { motion } from "framer-motion";
import styled from "@emotion/styled";

export const PageContainer = styled(motion.main)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`;