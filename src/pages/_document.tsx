import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        {process.env.ENVIRONMENT === 'production' && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process?.env?.GTAG_MANGER_ID}" height="0" width="0" style="display: none; visibility: hidden;" />`,
            }}
          />
        )}
      </body>
    </Html>
  );
}
