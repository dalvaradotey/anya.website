import Hero from '../components/Hero'
import AboutOurProducts from '../components/AboutOurProducts'
import ProductsHome from '@/components/ProductsHome'
import CategoryService from '@/services/CategoryService'
import { openGraphMetadata } from './shared-metadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anya | Transformando telas olvidadas en creaciones renovadas',
  description: 'Transformando telas olvidadas en creaciones renovadas',
  openGraph: {
    ...openGraphMetadata,
    title: 'Anya | Transformando telas olvidadas en creaciones renovadas',
    description: 'Transformando telas olvidadas en creaciones renovadas',
    url: 'https://anyaeco.com',
    images: [
      {
        url: '/avatar.png',
        width: 662,
        height: 692,
      },
    ],
  },
}

export default async function Home() {
  const categoryService = new CategoryService
  const categories = await categoryService.get({
    'populate[0]': 'products',
    'populate[1]': 'products.image,products.category',
    'filters[products][isTop][$eq]': true,
  })

  return (
    <>
      <Hero />
      <AboutOurProducts />
      <ProductsHome categories={categories?.data} />
    </>
  )
}
