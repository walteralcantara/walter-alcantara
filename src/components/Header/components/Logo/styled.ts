import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const LogoContainer = styled(Flex)`
  align-items: center;
  cursor: pointer;
  position: relative;

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

  &:after {
    content: "";
    position: absolute;
    width: 80%;
    text-align: right;
    right: 0;
    background: #682ae9;
    height: .02rem;
    opacity: .5;
    bottom: 3px;
    animation: animateLine 2s ease infinite alternate;
  }

  @keyframes animateLine {
    0% {
      width: 0;
      stroke-dasharray: 1 100;
      fill: transparent;
    }
    25% {
      width: 1;
      fill: transparent;
      stroke-dasharray: 100 0;
    }
    60%,
    100% { width: 0.5; }
  }
`;
