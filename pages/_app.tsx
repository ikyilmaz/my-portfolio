import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import React from "react";
import { theme } from "../shared/theme";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { TransitionProvider } from "../components/TransitionProvider";
import { TransitionLayout } from "../components/TransitionLayout";

const GlobalStyle = createGlobalStyle`

  * {
    cursor: none;
    box-sizing: border-box;
    color: white;
  }

  html body {
    background-color: ${props => props.theme.colors.bgColor};
    font-family: "JetBrains Mono", sans-serif;
    margin: 0;
  }


  html {
    font-size: 10px;
  }

  body {
    overflow-x: hidden;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransitionProvider>
      <TransitionLayout>
        <Provider store={store}>
          <React.Fragment>
            <Head>
              <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Component {...pageProps} />
            </ThemeProvider>
          </React.Fragment>
        </Provider>
      </TransitionLayout>
    </TransitionProvider>
  );
}

export default MyApp;
