import '@/app/globals.css'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      {process.env.ENVIRONMENT === 'production' && (
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.GTAG_MANAGER_ID}')
          `}
        </Script>
      )}
      <Component {...pageProps} />
    </>
  )
}
