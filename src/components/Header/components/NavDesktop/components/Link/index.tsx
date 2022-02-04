import NextLink from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { useNavigationContext } from "../../../../../../contexts/NavigationContext";

import * as S from "./styled";

type LinkProps = {
  href: string;
  children: ReactNode;
};

export const Link = ({ href, children }: LinkProps) => {
  const { setDirection } = useNavigationContext();

  const [isHighlighted, setIsHighlighted] = useState(false);

  const { asPath } = useRouter();

  useEffect(() => setIsHighlighted(asPath === href), [href, asPath]);

  return (
    <NextLink href={href} passHref>
      <S.StyledLink
        isHighlighted={isHighlighted}
        onClick={() => setDirection({ eventType: "fade" })}
      >
        {children}
      </S.StyledLink>
    </NextLink>
  );
};
