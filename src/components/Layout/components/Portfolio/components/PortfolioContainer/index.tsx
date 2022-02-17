import { useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";
import * as S from "./styled";

export const PortfolioContainer = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useColorMode();

  return (
    <S.PortfolioContainer colormode={colorMode}>
      {children}
    </S.PortfolioContainer>
  );
};
