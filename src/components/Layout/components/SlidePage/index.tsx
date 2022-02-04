import { Portal } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

import { useNavigationContext } from "../../../../contexts/NavigationContext";

import ArrowIcon from "../../../../assets/icons/arrow-solid.svg";

import * as S from "./styled";

type SlidePageProps = {
  href: string;
  children: ReactNode;
  direction: "left" | "right";
};

export const SlidePage = ({
  href,
  direction,
  children,
  ...rest
}: SlidePageProps) => {
  const { setDirection } = useNavigationContext();
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  if (isMobile) {
    return (
      <Portal>
        <Link href={href} passHref>
          <S.SlidePageContainer
            direction={direction}
            onClick={() => setDirection({ direction: direction, eventType: "slide" })}
            {...rest}
            borderTop="1px solid"
          >
            <S.SlidePageContent>
              <ArrowIcon width={40} />
              {children}
            </S.SlidePageContent>
          </S.SlidePageContainer>
        </Link>
      </Portal>
    );
  }

  return ( // return desktop version
    <Link href={href} passHref>
      <S.SlidePageContainer
        direction={direction}
        onClick={() => setDirection({ direction: direction, eventType: "slide" })}
        {...rest}
      >
        <S.SlidePageContent>
          <ArrowIcon width={40} />
          {children}
        </S.SlidePageContent>
      </S.SlidePageContainer>
    </Link>
  );
};
