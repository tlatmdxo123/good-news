import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            property="og:title"
            content="콤케드와 함께 하는 2024년 새해 약속의 말씀"
          />
          <meta
            property="og:url"
            content="https://good-news-gamma.vercel.app/"
          />
          <meta
            property="og:image"
            content="https://github.com/tlatmdxo123/good-news/blob/main/public/og.png?raw=true"
          />
        </Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function (d) {
          var config = {
              kitId: "pny6mch",
              scriptTimeout: 3000,
              async: true,
            },
            h = d.documentElement,
            t = setTimeout(function () {
              h.className =
                h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
            }, config.scriptTimeout),
            tk = d.createElement("script"),
            f = false,
            s = d.getElementsByTagName("script")[0],
            a;
          h.className += " wf-loading";
          tk.src = "https://use.typekit.net/" + config.kitId + ".js";
          tk.async = true;
          tk.onload = tk.onreadystatechange = function () {
            a = this.readyState;
            if (f || (a && a != "complete" && a != "loaded")) return;
            f = true;
            clearTimeout(t);
            try {
              Typekit.load(config);
            } catch (e) {}
          };
          s.parentNode.insertBefore(tk, s);
        })(document)`,
          }}
        ></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
