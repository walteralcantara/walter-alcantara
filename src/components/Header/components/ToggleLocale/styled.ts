import { Box, IconButton, PopoverContent } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Container = styled(Box)`
  margin-left: 8px;
  /* width: 40px;
  height: 40px; */
  border: 1px solid #ddd;
  border-radius: 0.375rem; 

  .chakra-popover__body {
    padding: 0;
  }

  .chakra-button {
    border-radius: 0;
    & + .chakra-button {
      border-top: 1px solid #ddd;
    }
  }
`;

export const Content = styled.div``;

export const Popover = styled.div`
  position: absolute;
`;

