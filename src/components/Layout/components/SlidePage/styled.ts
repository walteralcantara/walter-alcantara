import { Link as ChakraLink } from '@chakra-ui/react';

import styled from '@emotion/styled';
import { css } from "@emotion/react";

type SlidePageContainerProps = {
  readonly direction: "left" | "right";
  readonly colormode: "dark" | "light";
}

export const SlidePageContainer = styled(ChakraLink)<SlidePageContainerProps>`
  position: sticky;
  top: 0;
  height: calc(100vh - 75px);
  width: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
  font-weight: 800;
  padding: 0 1rem;
  background: ${({ colormode }) => colormode === "dark" ? "#1f1b2e" : "#fcfbff"};
  
  ${({ direction }) => direction === "right" && css`
    right: 0;
    justify-self: flex-end;
  `}
    
  ${({ direction }) => direction === "left" && css`
    left: 0;
    justify-self: flex-start;

    svg {
      transform: rotate(180deg);
    }
  `}
    
    @media screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;
    top: unset;
    height: 55px;
    width: 50%;
    font-size: 16px;
    box-shadow: -1px -7px 16px -4px rgba(0,0,0,0.75);

    svg {
      width: 25px;
    }
  }
`;

export const SlidePageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1rem;
  color: inherit;
`;