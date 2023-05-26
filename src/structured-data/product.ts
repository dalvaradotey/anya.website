import { ICategory } from "@/interfaces/category"
import { IProduct } from "@/interfaces/product"

export function setProductStructuredData(product: IProduct, convertToString: boolean = false) {
  const structuredData = {
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

export function setProductListStructuredData(products: IProduct[], convertToString: boolean = false) {
  let structuredData: any = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "url": "http://anyaeco.com/tienda",
    "numberOfItems": products?.length,
    "itemListElement": []
  }

  for (const item of products) {
    structuredData.itemListElement.push(setProductStructuredData(item))
  }

  return (convertToString)
    ? JSON.stringify(structuredData)
    : structuredData
}

export function setCategoryProductListStructuredData(categories: ICategory[], convertToString: boolean = false) {
  let products: IProduct[] = []

  for (const category of categories) {
    products = products.concat(category?.attributes?.products?.data)
  }

  return setProductListStructuredData(products, convertToString)
}
