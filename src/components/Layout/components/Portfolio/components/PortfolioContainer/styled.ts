import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const PortfolioContainer = styled(Flex)`
  max-width: 100%;
  overflow-y: hidden;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 10px;
    height: 1rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ colormode }) =>
      colormode === "dark" ? "#454158" : "#edf2f7"};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ colormode }) =>
      colormode === "dark" ? "#1f1b2e" : "#1f1b2e"};
    border: ${({ colormode }) =>
      colormode === "dark" ? "3px solid #454158" : "4px solid #edf2f7"};
    border-radius: 0.3rem;
  }
`;
