import {
  Badge,
  Button,
  IconButton,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { ExternalLinkIcon, TriangleUpIcon } from "@chakra-ui/icons";
import * as S from "./styled";
import { useState } from "react";

type PortfolioItemProps = {
  project: {
    img: string;
    name: string;
    description: string;
    link: string;
    techs: string[];
  };
};

export const PortfolioItem = ({
  project: { img, name, description, link, techs },
}: PortfolioItemProps) => {
  const [active, setActive] = useState(false);

  const { colorMode } = useColorMode();

  const handleToggleInfo = () => setActive(!active);

  return (
    <S.PortfolioItem colormode={colorMode}>
      <S.Image src={img} width="inherit" height="inherit" />

      <S.PortfolioItemInfo active={active ? "active" : ""}>
        <S.PortfolioHeader colormode={colorMode}>
          <Text as="h3">{name}</Text>
          <IconButton
            aria-label="Toggle description"
            icon={<TriangleUpIcon />}
            onClick={handleToggleInfo}
          />
        </S.PortfolioHeader>
        <S.PortfolioContent colormode={colorMode}>
          <Text mb="2">{description}</Text>

          {techs.map((tech) => (
            <Badge key={tech} mr="2">
              {tech}
            </Badge>
          ))}

          <br />
          <Link href={link} target="_blank" pos="absolute" bottom="20px">
            <Button>
              <Text as="span">{name}</Text>
              <ExternalLinkIcon ml="2" />
            </Button>
          </Link>
        </S.PortfolioContent>
      </S.PortfolioItemInfo>
    </S.PortfolioItem>
  );
};
