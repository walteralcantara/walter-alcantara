import { useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";
import * as S from "./styled";

type TimelineProps = {
  children: ReactNode;
  direction: string;
};

export const Timeline = ({ children, direction }: TimelineProps) => {
  const { colorMode } = useColorMode();

  return (
    <S.TimelineWrapper colormode={colorMode}>
      <S.TimelineContainer direction={direction}>
        <S.TimelineContent colormode={colorMode}>{children}</S.TimelineContent>
      </S.TimelineContainer>
    </S.TimelineWrapper>
  );
};
