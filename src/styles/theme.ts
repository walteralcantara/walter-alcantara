import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("light", "dark")(props),
      color: mode("dark", "light")(props),
      overflowX: "hidden",
    },
    h1: {
      fontSize: 48,
      fontWeight: 800,
    },
    h3: {
      fontSize: 24,
    },
    h6: {
      fontSize: 16,
      fontWeight: 800,
    },
  }),
};

const colors = {
  purpleHighlighted: "#682ae9",
  dark: "#1f1b2e",
  light: "#fcfbff",
};

const fonts = {
  heading:
    "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  body: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
};

const components = {
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: "none",
      },
    },
  },
  Button: {
    variants: {
      highlighted: {
        bg: "#682ae9",
        color: "#fff",
      }
    },
  },
  Tabs: {
    parts: ["tabs", "tablist", "tab", "tabpanels", "tabpanel"],
    variants: {
      "soft-rounded": (props: any) => ({
        tab: {
          fill: mode("dark", "light")(props),
          color: mode("dark", "light")(props),
          _selected: {
            bg: "purpleHighlighted",
            color: "light",
            fill: "light",
          },
        },
      }),
    },
  },
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors, components, fonts });

export default theme;
