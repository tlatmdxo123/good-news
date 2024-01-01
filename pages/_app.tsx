import type { AppProps } from "next/app";
import GlobalStyle from "../globalStyle";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
