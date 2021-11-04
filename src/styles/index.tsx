import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    height: var(--height);
    /* overflow: hidden; */
    position: relative;
    background-color: ${(props) => props.theme.background};
  }

  #__next {
    /* height: 100%; */
    /* height: var(--height); */
    /* background-color: ${(props) => props.theme.background}; */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    color: ${(props) => props.theme.text};
    font-size: 1rem;
  }
`;
