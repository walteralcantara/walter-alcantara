// import { Link as ChakraLink, Button } from '@chakra-ui/react';
import styled from 'styled-components';

type StyledLinkProps = {
  readonly isHighlighted: boolean;
}

export const StyledLink = styled.a<StyledLinkProps>`
  background: ${props => props.isHighlighted ?  '#682ae9': undefined};
  color: ${props => props.isHighlighted ? "#fff !important" : "inherit"};

  padding: .5rem 1rem;
  border-radius: .3rem;
  position: relative;
  transition: all .3s;
  top: 0;
  font-weight: 800;

  &:hover {
    text-decoration: underline;
  }
`;