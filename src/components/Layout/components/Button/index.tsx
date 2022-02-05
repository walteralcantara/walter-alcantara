import { ReactNode } from "react"

import * as S from "./styled";

type ButtonProps = {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {

  return (
    <S.Button>
      {children}
    </S.Button>
  )
}