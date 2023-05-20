import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

export const Content = styled(Box)`
  margin: 1rem 0;

  p {
    margin: inherit;
  }

  img {
    margin: 2rem auto;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  pre {
    background: #090e24;
    padding: 1rem;

    code {
      color: #fff;
    }
  }
`;
