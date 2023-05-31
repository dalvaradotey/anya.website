import Hero from '../components/Hero'
import AboutOurProducts from '../components/AboutOurProducts'
import ProductsHome from '@/components/ProductsHome'
import { openGraphMetadata } from './shared-metadata'
import { Metadata } from 'next'
import PageService from '@/services/PageService'
import { IPage } from '@/interfaces/page'
import HomeProvider, { IHomeProvider } from '@/providers/HomeProvider'

export async function generateMetadata(): Promise<Metadata> {
  const pageService = new PageService
  const pages = await pageService.get({
    'filters[slug][$eq]': 'home'
  })
  const page: IPage = pages?.data[0]
 
  return {
    title: page?.attributes?.metaTitle,
    description: page?.attributes?.metaDescription,
    openGraph: {
      ...openGraphMetadata,
      title: page?.attributes?.metaTitle,
      description: page?.attributes?.metaDescription,
      url: 'https://anyaeco.com/blog',
      images: [
        {
          url: '/avatar.png',
          width: 662,
          height: 692,
        },
      ],
    },
  }
}

export default async function Page() {
  const pageProvider = new HomeProvider
  const { categories, products }: IHomeProvider = await pageProvider?.getData()

  return (
    <>
      <Hero />
      <AboutOurProducts />
      <ProductsHome categories={categories} products={products} />
    </>
  )
}
