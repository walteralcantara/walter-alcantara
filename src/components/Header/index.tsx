import { Flex } from '@chakra-ui/react';

import { Logo } from "./components/Logo"
import { NavDesktop } from './components/NavDesktop';
import { NavMobile } from './components/NavMobile';
import { ToggleTheme } from './components/ToggleTheme';

import * as S from "./styled";

const Header = () => {
  
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Logo />

        <NavDesktop />

        <Flex>
          <NavMobile />
          <ToggleTheme />
        </Flex>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
