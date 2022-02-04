import { ReactNode } from 'react';

import * as S from './styled';

type PageContentProps = {
  children: ReactNode;
} 

export const PageContent = ({ children }: PageContentProps) => <S.PageContent>{children}</S.PageContent>