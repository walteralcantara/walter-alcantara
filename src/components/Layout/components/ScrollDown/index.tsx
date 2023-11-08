import { useTranslation } from "react-i18next";
import { Text } from "@chakra-ui/react";

import ScrollDownIcon from "assets/icons/scroll-down-icon.svg";

import * as S from "./styled";

export const ScrollDown = () => {
  const { t } = useTranslation('home');
  return (
    <S.ScrollDown>
      <Text mr="2">{t('scroll-down')}</Text>
      <ScrollDownIcon />
    </S.ScrollDown>
  );
};
