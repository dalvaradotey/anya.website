import Hero from '../components/Hero'
import AboutOurProducts from '../components/AboutOurProducts'
import Footer from '../components/Footer'
import Products from '../components/Products'

export default function Home() {
  return (
    <main className="h-full">
      <Hero />
      <AboutOurProducts />
      <Products />
      <Footer />
    </main>
  )
}
