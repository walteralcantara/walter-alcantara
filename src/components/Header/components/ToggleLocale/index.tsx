import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Portal, Box, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

import { useRouter } from "next/router";
import { useLocalStorage } from "hooks/useLocalStorage";

import * as S from "./styled";

const locales = {
  ["en"]: (
    <Image
      alt="USA Flag"
      src="/assets/icons/flags/usa-flag.png"
      width={48}
      height={48}
    />
  ),
  ["br"]: (
    <Image
      alt="Brazil Flag"
      src="/assets/icons/flags/brazil-flag.png"
      width={48}
      height={48}
    />
  ),
};

type Locales = keyof typeof locales;

function ToggleLocale() {
  const [locale, setLocale] = useState<Locales>("en");
  const [currentLocale, setCurrentLocale] = useLocalStorage<Locales>("locale");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (currentLocale) {
      setLocale(currentLocale);
    }
  }, [currentLocale]);

  const handleClickLocale = useCallback(
    (locale: Locales) => {
      // setShowPopover(!showPopover);
      setIsOpen(false);
      setLocale(locale);
      setCurrentLocale(locale);
      router.push(
        `/${locale}/${router.pathname}`,
        `/${locale}/${router.pathname}`,
        { locale }
      );
      // onClose();
    },
    [router, setCurrentLocale]
  );

  const renderLocales = useMemo(() => {
    const otherlocales: string[] = Object.keys(locales).filter((key) => {
      return key !== locale;
    });

    return otherlocales.map((key) => (
      <Button key={key} onClick={() => handleClickLocale(key as Locales)}>
        {locales[key as Locales]}
      </Button>
    ));
  }, [handleClickLocale, locale]);

  const handleOpenPopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Portal>
      <S.Container ml="2" colormode={colorMode}>
        <S.Content>
          {isOpen && <Box id="popover">{renderLocales}</Box>}
          <Button onClick={handleOpenPopover}>{locales[locale]}</Button>
        </S.Content>
      </S.Container>
    </Portal>
  );
}

export { ToggleLocale };
