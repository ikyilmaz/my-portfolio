import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import React from "react";
import { theme } from "../shared/theme";

const GlobalStyle = createGlobalStyle`
  html body {
    background-color: ${(props) => props.theme.colors.bgColor};
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
