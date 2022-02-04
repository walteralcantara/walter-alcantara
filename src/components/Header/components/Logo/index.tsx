import NextLink from 'next/link';
import { Text } from '@chakra-ui/react';

import Logomark from '../../../../assets/logo.svg'

import * as S from './styled';

export const Logo = () => {
  
  return (
    <NextLink href="/" passHref>
      <S.LogoContainer>
        <Logomark />
        <Text fontSize="16" fontWeight={800}>Walter Alcantara</Text>
      </S.LogoContainer>
    </NextLink>
  )
}