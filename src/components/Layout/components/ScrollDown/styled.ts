import { Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

type ScrollDownProps = {
  colorMode: string;
};

export const ScrollDown = styled(Flex)<ScrollDownProps>`
  align-items: center;
  position: absolute;
  right: 0;
  bottom: -2.6rem;
  animation: scrollDown 0.7s ease alternate infinite;

  ${({ colorMode }) => css`
    svg path {
      fill: ${colorMode};
    }
  `}

  @keyframes scrollDown {
    from {
      bottom: -2.6rem;
    }

    to {
      bottom: -3rem;
    }
  }
`;
