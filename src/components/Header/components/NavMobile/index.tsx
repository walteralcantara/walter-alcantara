import { Box, IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { MenuItem } from "./components/MenuItem";

export const NavMobile = () => {
  return (
    <Box d={{ base: "block", md: "none" }} mr="2">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/skills">Skills</MenuItem>
          <MenuItem href="/qualifications">Qualifications</MenuItem>
          <MenuItem href="/portfolio">Portfolio</MenuItem>
          <MenuItem href="/contact">Contact</MenuItem>
          <MenuItem href="/blog">Blog</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
