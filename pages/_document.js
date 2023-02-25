import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#7000FF" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html:
                'window.loadContentPromise = new Promise((resolve)=>{window.addEventListener("DOMContentLoaded", resolve);});',
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
