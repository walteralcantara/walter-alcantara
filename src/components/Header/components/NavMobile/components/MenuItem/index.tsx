import NextLink from "next/link";
import { useNavigationContext } from "../../../../../../contexts/NavigationContext";

import * as S from "./styled";

type MenuItemProps = {
  href: string;
  children: string;
};

export const MenuItem = ({ href, children }: MenuItemProps) => {
  const { setDirection } = useNavigationContext();

  return (
    <NextLink href={href}>
      <S.MenuItem onClick={() => setDirection({ eventType: "fade" })}>
        {children}
      </S.MenuItem>
    </NextLink>
  );
};
