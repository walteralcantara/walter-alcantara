import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fcfbff;
    --dark: #000;

    --primary: #1d1d1d;
    --secondary: #682ae9;

    --white-400: #eee;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 62.5% because, 1rem is equal to 10px, so 1.6rem is 16px.
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  
  body {
    font: 400 16px 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: all .3s;
    /* background: ${props => props.theme.colors.background}; */
    background: #1f1b2e;
    /* color: ${props => props.theme.colors.text}; */
    color: #fff;
    /* overflow-x: hidden; */
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  b,
  strong,
  a,
  button {
    margin: 0;
    padding: 0;
    font: 400 1.6rem;
  }
  
  h4,
  span,
  p {
    font: 300 1.6rem;
  }
`