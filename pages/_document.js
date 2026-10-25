import { Html, Head, Main, NextScript } from "next/document";
import { introScript } from "utils/intro";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
