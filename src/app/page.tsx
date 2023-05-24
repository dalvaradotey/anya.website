import Hero from '../components/Hero'
import AboutOurProducts from '../components/AboutOurProducts'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="h-full">
      <Navbar />
      <Hero />
      <AboutOurProducts />
      <Products />
      <Footer />
    </main>
  )
}
