import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const HeadingWrapper = styled(Box)`
  max-width: 400px;
  text-align: left;
  margin-bottom: 4rem;

  h1 {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 2.5rem;
    margin-bottom: 1rem;

    :before {
      content: "";
      display: block;
      background: #682ae9;
      height: 2.7rem;
      min-width: 8px;
      display: block;
      margin-right: 0.8rem;
    }

    @media screen and (max-width: 425px) {
      font-size: 36px;
    }
  }

  h3 {
    margin-top: -0.3rem;
    line-height: 1.8rem;
  }
`;
