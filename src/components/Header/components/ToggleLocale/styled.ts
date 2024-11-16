import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

type ContainerProps = {
  colorMode: "light" | "dark";
};

export const Container = styled(Box)<ContainerProps>`
  border: 1px solid #ddd;
  border-radius: 0.375rem;

  position: fixed;
  bottom: 1rem;
  right: 1rem;

  #popover {
    border-bottom: 1px solid #ddd;
  }

  ${({ theme, colorMode }) => css`
    .chakra-button {
      padding: 0.25rem;
      background-color: ${colorMode === "light"
        ? theme.colors.light
        : theme.colors.dark};

      &:hover {
        transition: filter 0.3s;
        filter: brightness(0.7);
      }
    }
  `}

  @media screen and (max-width: 768px) {
    bottom: 4rem;
  }
`;

export const Content = styled(Box)``;
