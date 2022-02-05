import * as S from "./styled";

import { Text } from "@chakra-ui/react";

import ScrollDownIcon from "../../../../assets/icons/scroll-down-icon.svg";

export const ScrollDown = () => {
  return (
    <S.ScrollDown>
      <Text mr="2">Scroll Down</Text>
      <ScrollDownIcon />
    </S.ScrollDown>
  );
};
