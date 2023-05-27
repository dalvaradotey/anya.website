import Navbar from '@/components/Navbar'
import './global.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://anyaeco.com'),
  themeColor: '#CEB1BE',
  manifest: '/manifest.json',
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
        <main className="h-full">
          <Navbar />
          {children}
          <Footer />
        </main>
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
