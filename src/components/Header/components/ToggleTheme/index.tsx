import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import * as S from "./styled";

export const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <S.ToggleThemeContainer>
      <IconButton
        aria-label="Toggle theme"
        colorScheme={useColorModeValue('purple', 'orange')}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      /> 
    </S.ToggleThemeContainer>
  )
}