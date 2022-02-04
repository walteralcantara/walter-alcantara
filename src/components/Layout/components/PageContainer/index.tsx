import { ReactNode } from "react";
import { useNavigationContext } from "../../../../contexts/NavigationContext";

import * as S from "./styled";

type PageContainerProps = {
  children: ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  const { direction, variants } = useNavigationContext();

  return (
    <S.PageContainer
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
        opacity: {
          duration: 0.2,
        },
      }}
    >
      {children}
    </S.PageContainer>
  );
};
