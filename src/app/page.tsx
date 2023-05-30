import Hero from '../components/Hero'
import AboutOurProducts from '../components/AboutOurProducts'
import ProductsHome from '@/components/ProductsHome'
import CategoryService from '@/services/CategoryService'
import { openGraphMetadata } from './shared-metadata'
import { Metadata } from 'next'
import PageService from '@/services/PageService'
import { IPage } from '@/interfaces/page'

export async function generateMetadata(): Promise<Metadata> {
  const pageService = new PageService
  const pages = await pageService.get({
    'filters[slug][$eq]': 'blog'
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
