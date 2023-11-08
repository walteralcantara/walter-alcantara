import { useEffect, useState } from "react";

import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

import * as S from "./styled";
import { useLocalStorage } from "hooks/useLocalStorage";

const locales = {
  ["en"]: "🇺🇸",
  ["br"]: "🇧🇷",
};

type Locales = keyof typeof locales;

function ToggleLocale() {
  const [locale, setLocale] = useState<Locales>("en");
  const [showPopover, setShowPopover] = useState(false);

  const [currentLocale, setCurrentLocale] = useLocalStorage<Locales>('locale');
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();
  // 🇧🇷
  // 🇺🇸

  // implements custom hook using localstorage

  useEffect(() => {
    if (currentLocale) {
      setLocale(currentLocale);
    }
  }, [currentLocale]);


  function handleClickLocale(locale: Locales) {
    setShowPopover(!showPopover);
    setLocale(locale);
    setCurrentLocale(locale);
    router.push(`/${locale}/${router.pathname}`, `/${locale}/${router.pathname}`, { locale });
    onClose();
  }

  return (
    <S.Container ml="2">
      <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <PopoverTrigger>
          <Button>{locales[locale]}</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody display="flex" flexDirection="column">
            <Button onClick={() => handleClickLocale("en")}>
              🇺🇸 English
            </Button>
            <Button onClick={() => handleClickLocale("br")}>
              🇧🇷 Português
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </S.Container>
  );
}

export { ToggleLocale }
