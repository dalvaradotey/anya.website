import Hero from '../components/Hero'
import AboutOurProducts from '../components/AboutOurProducts'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Anya | Transformando telas olvidadas en creaciones renovadas" />
        <meta property="og:description" content="Transformando telas olvidadas en creaciones renovadas" />
        <meta property="og:image" content="/avatar.png" />
      </Head>
      <main className="h-full">
        <Hero />
        <AboutOurProducts />
        <Products />
        <Footer />
      </main>
    </>
  )
}
