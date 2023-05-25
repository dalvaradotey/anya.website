import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anya | Transformando telas olvidadas en creaciones renovadas',
  description: 'Transformando telas olvidadas en creaciones renovadas',
  themeColor: '#CEB1BE',
  openGraph: {
    title: 'Anya | Transformando telas olvidadas en creaciones renovadas',
    description: 'Transformando telas olvidadas en creaciones renovadas',
    url: 'https://anyaeco.com',
    siteName: 'Anya',
    images: [
      {
        url: '/avatar.png',
        width: 662,
        height: 692,
      },
    ],
    locale: 'es-CL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      {process.env.ENVIRONMENT === 'production' && (
        <>
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.GTAG_MANAGER_ID}')
            `}
          </Script>
        </>
      )}
      <body className={inter.className}>
        {children}
        {process.env.ENVIRONMENT === 'production' && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process?.env?.GTAG_MANAGER_ID}" height="0" width="0" style="display: none; visibility: hidden;" />`,
            }}
          />
        )}
      </body>
    </html>
  )
}
