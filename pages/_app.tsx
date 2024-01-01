import type { AppProps } from "next/app";
import GlobalStyle from "../globalStyle";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  //@ts-ignore
  if (typeof Kakao !== "undefined") {
    //@ts-ignore
    if (!Kakao.isInitialized()) {
      //@ts-ignore
      Kakao.init("6e3c263d4c0db34a0644c6b5fab6dac3");
    }
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
