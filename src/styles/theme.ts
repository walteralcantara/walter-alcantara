import { extendTheme, ThemeConfig  } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: { light: string, dark: string }) => ({
    body: {
      bg: mode('#fcfbff', '#1f1b2e')(props),
      color: mode('#1d1d1d', '#fff')(props),
      overflowX: 'hidden'
    },
    h1: {
      fontSize: 48,
      fontWeight: 800
    },
    h3: {
      fontSize: 24,
    }
  })
}

const fonts = {
  heading: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  body: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
}

const colors = {
  "purpleHighlighted": '#682ae9'
}

const components = {
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: 'none'
      }
    },
  },
}

const config: ThemeConfig  = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, styles, colors, components, fonts });

export default theme;