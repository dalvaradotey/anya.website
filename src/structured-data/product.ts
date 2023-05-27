import { Product, ItemList, WithContext } from 'schema-dts'
import { ICategory } from "@/interfaces/category"
import { IProduct } from "@/interfaces/product"

export function setProductStructuredData(
  product: IProduct,
  convertToString: boolean = false
): WithContext<Product> | string {
  const structuredData: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "description": product?.attributes?.name,
    "name": product?.attributes?.name,
    "image": product?.attributes?.image?.data?.attributes?.url,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": product?.attributes?.price,
      "priceCurrency": "CLP"
    },
  }

  return (convertToString)
    ? JSON.stringify(structuredData)
    : structuredData
}

export function setProductListStructuredData(
  products: IProduct[],
  convertToString: boolean = false
): WithContext<ItemList> | string {
  const itemListElement = []

  for (const item of products) {
    itemListElement.push(setProductStructuredData(item))
  }

  const structuredData: WithContext<ItemList> = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "url": "http://anyaeco.com/tienda",
    "numberOfItems": products?.length,
    "itemListElement": itemListElement
  }

  return (convertToString)
    ? JSON.stringify(structuredData)
    : structuredData
}

export function setCategoryProductListStructuredData(
  categories: ICategory[],
  convertToString: boolean = false
): WithContext<ItemList> | string {
  let products: IProduct[] = []

  for (const category of categories) {
    products = products.concat(category?.attributes?.products?.data)
  }

  return setProductListStructuredData(products, convertToString)
}
