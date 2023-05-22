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
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.GTAG_ID}');
            `}
          </Script>
        </>
      )}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
