import CategoryService from "@/services/CategoryService"
import ShopContainer from "@/components/ShopContainer"
import { setCategoryProductListStructuredData } from "@/structured-data/product"
import { openGraphMetadata } from "../shared-metadata"
import { Metadata } from "next"
import CategoryProvider from "@/providers/CategoryProvider"

export const metadata: Metadata = {
  title: 'Anya | Revisa nuestro catálogo de accesorios',
  description: 'Revisa nuestro catálogo de accesorios únicos confeccionados con telas reutilizadas.',
  openGraph: {
    ...openGraphMetadata,
    title: 'Anya | Revisa nuestro catálogo de accesorios',
    description: 'Revisa nuestro catálogo de accesorios únicos confeccionados con telas reutilizadas.',
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
export default async function Tienda() {
  const categoryService = new CategoryService
  const categories = await categoryService.get({
    'populate[0]': 'products',
    'populate[1]': 'products.image,products.category,products.colors',
    'filters[products][isTop][$eq]': true,
  })
  const categoryProvider = new CategoryProvider
  const colors = categoryProvider.setColorList(categories?.data)

  return (
    <>
      <ShopContainer categories={categories?.data} colors={colors} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: setCategoryProductListStructuredData(categories?.data, true) }}
        key="product-jsonld"
      />
    </>
  )
}
