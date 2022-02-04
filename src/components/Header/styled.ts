import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
`;

export const HeaderContent = styled(Flex)`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  height: 75px;
  padding: 0rem .5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    gap: 1rem;

    li a {
      font-size: 20px;
      font-weight: 800;
    }
  }
`;
