import styled, { css } from "styled-components";

type TimelineWrapperProps = {
  readonly colormode: string;
};
type TimelineContentProps = {
  readonly colormode: string;
};

type TimelineContainerProps = {
  readonly direction: string;
};

export const TimelineWrapper = styled.section<TimelineWrapperProps>`
  position: relative;
  max-width: 960px;
  margin: 0px auto;

  &:after {
    content: "";
    position: absolute;
    width: 3px;
    background: ${({ colormode }) =>
      colormode === "dark" ? "#312c45" : "#EDF2F7"};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    height: 110%;

    @media screen and (max-width: 768px) {
      left: unset;
      right: 0%;
    }
  }
`;

export const TimelineContainer = styled.div<TimelineContainerProps>`
  padding: 10px 40px;
  position: relative;
  background: transparent;
  width: 50%;

  &:after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    right: -6px;
    background: #682ae9;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  ${({ direction }) =>
    direction === "left" &&
    css`
      left: 0;

      @media screen and (max-width: 768px) {
        padding: unset;
        padding-right: 1.5rem;
      }
    `}

  ${({ direction }) =>
    direction === "right" &&
    css`
      left: 50%;

      &:after {
        left: -9px;
      }

      @media screen and (max-width: 768px) {
        padding: unset;
        padding-left: unset;
        padding-right: 1.5rem;
        left: unset;

        &:after {
          left: unset;
        }
      }
    `}

    @media screen and (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
`;

export const TimelineContent = styled.div<TimelineContentProps>`
  background: ${({ colormode }) =>
    colormode === "dark" ? "#312c45" : "#EDF2F7"};
  padding: 1rem;
`;
