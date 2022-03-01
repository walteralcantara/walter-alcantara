import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

type ColorModeProps = {
  readonly colormode: string;
};

export const Image = styled.img`
  width: inherit;
  height: inherit;
  border-radius: inherit;
  object-fit: cover;
`;

export const PortfolioItem = styled(Box)<ColorModeProps>`
  border-radius: 10px;
  width: 300px;
  height: 275px;
  min-width: 300px;
  margin: 0 1.5rem 1rem 1.5rem;
  position: relative;
  overflow: hidden;
  border: ${({ colormode }) =>
    colormode === "dark" ? "3px solid #454158" : "3px solid #edf2f7"};
`;

export const PortfolioItemInfo = styled(Box)`
  background: #1f1b2e;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  transform: translateY(75%);
  position: absolute;
  top: 0;
  transition: all 0.7s ease-in-out;

  ${({ active }) =>
    active === "active" &&
    css`
      transform: translateY(05%);

      header button svg {
        transform: rotate(-180deg);
      }
    `}
`;

export const PortfolioHeader = styled.header<ColorModeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  color: #fcfbff;
  button {
    color: ${({ colormode }) => (colormode === "dark" ? "#edf2f7" : "#1f1b2e")};
  }
`;

export const PortfolioContent = styled.article<ColorModeProps>`
  padding: 0.5rem 1rem;
  color: #fff;

  button {
    color: ${({ colormode }) => (colormode === "dark" ? "#edf2f7" : "#1f1b2e")};
  }
`;
