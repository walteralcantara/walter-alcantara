import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const LogoContainer = styled(Flex)`
  align-items: center;
  cursor: pointer;

  svg path {
    animation: animateLogo 2s ease infinite alternate;
    stroke: #682ae9;
  }

  @keyframes animateLogo {
    0% {
      stroke-width: 0;
      stroke-dasharray: 1 100;
      fill: transparent;
    }
    25% {
      stroke-width: 1;
      fill: transparent;
      stroke-dasharray: 100 0;
    }
    60%,
    100% {
      stroke-width: 0.5;
      /* fill: #682ae9; */
    }
  }
`;
