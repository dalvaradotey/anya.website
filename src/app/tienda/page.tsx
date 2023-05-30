import CategoryService from "@/services/CategoryService"
import MarkdownIt from 'markdown-it'
import ShopContainer from "@/components/ShopContainer"
import { setCategoryProductListStructuredData } from "@/structured-data/product"
import { openGraphMetadata } from "../shared-metadata"
import { Metadata } from "next"
import CategoryProvider from "@/providers/CategoryProvider"
import PageService from "@/services/PageService"
import { IPage } from "@/interfaces/page"

export async function generateMetadata(): Promise<Metadata> {
  const pageService = new PageService
  const pages = await pageService.get({
    'filters[slug][$eq]': 'tienda'
  })
  const page: IPage = pages?.data[0]
 
  return {
    title: page?.attributes?.metaTitle,
    description: page?.attributes?.metaDescription,
    openGraph: {
      ...openGraphMetadata,
      title: page?.attributes?.metaTitle,
      description: page?.attributes?.metaDescription,
      url: 'https://anyaeco.com/tienda',
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

export default async function Tienda() {
  const categoryService = new CategoryService
  const categories = await categoryService.get({
    'populate[0]': 'products',
    'populate[1]': 'products.image,products.category,products.colors',
    'filters[products][isTop][$eq]': true,
  })
  const categoryProvider = new CategoryProvider
  const colors = categoryProvider.setColorList(categories?.data)

  const pageService = new PageService
  const pages = await pageService.get({
    'filters[slug][$eq]': 'tienda'
  })
  const page: IPage = pages?.data[0]
  const md = new MarkdownIt({ html: true });
  page.attributes.description = md.render(page?.attributes?.description || '')

  return (
    <>
      <ShopContainer
        page={page}
        categories={categories?.data}
        colors={colors}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: setCategoryProductListStructuredData(categories?.data, true) }}
        key="product-jsonld"
      />
    </>
  )
}
