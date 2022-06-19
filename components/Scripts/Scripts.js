import React from "react";
import Script from "next/script";
import { GTAG } from "../../constants";

const Scripts = React.memo(() => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`}
        strategy="afterInteractive"
      />
      <Script strategy="afterInteractive" id="gtag-config">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${GTAG}');
        `}
      </Script>
    </>
  );
});

Scripts.displayName = "Scripts";

export default Scripts;
