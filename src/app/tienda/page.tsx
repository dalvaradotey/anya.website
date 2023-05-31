import StoreContainer from "@/components/StoreContainer"
import { setCategoryProductListStructuredData } from "@/structured-data/product"
import { openGraphMetadata } from "../shared-metadata"
import { Metadata } from "next"
import PageService from "@/services/PageService"
import { IPage } from "@/interfaces/page"
import StoreProvider, { IStoreProvider } from "@/providers/StoreProvider"

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

export default async function Page() {
  const pageProvider = new StoreProvider
  const {
    page,
    categories,
    colors,
    products
  }: IStoreProvider = await pageProvider?.getData()

  return (
    <>
      <StoreContainer
        page={page}
        categories={categories}
        colors={colors}
        products={products}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: setCategoryProductListStructuredData(categories, true) }}
        key="product-jsonld"
      />
    </>
  )
}
