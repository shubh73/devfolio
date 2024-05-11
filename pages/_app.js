import "../styles/globals.scss";
import { calibre, jetbrains_mono } from "public/fonts";

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${calibre.variable} font-sans ${jetbrains_mono.variable} font-mono`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
