import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const ScrollDown = styled(Flex)`
  align-items: center;
  position: absolute;
  right: 0;
  bottom: -2.6rem;
  animation: scrollDown .7s ease alternate infinite;

  @keyframes scrollDown {
    from {
      bottom: -2.6rem;
    }

    to {
      bottom: -3rem;
    }
  }
`