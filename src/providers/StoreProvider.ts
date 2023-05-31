import { ICategory } from "@/interfaces/category"
import { IColor } from "@/interfaces/color"
import { IPage } from "@/interfaces/page"
import { IProduct } from "@/interfaces/product"
import CategoryService from "@/services/CategoryService"
import PageService from "@/services/PageService"
import MarkdownIt from 'markdown-it'

export interface IStoreProvider {
  categories: ICategory[]
  colors: IColor[]
  page: IPage
  products: IProduct[]
}

class StoreProvider {
  constructor() {}

  async getData(): Promise<IStoreProvider> {
    const categoryService = new CategoryService
    const categories = await categoryService.get({
      'populate[0]': 'products',
      'populate[1]': 'products.image,products.category,products.colors',
      'filters[products][isTop][$eq]': true,
    })
    const colors = categoryService.setColorList(categories?.data)
    const products = categoryService.setProductList(categories?.data)
  
    const pageService = new PageService
    const pages = await pageService.get({
      'filters[slug][$eq]': 'tienda'
    })
    const page: IPage = pages?.data[0]
    const md = new MarkdownIt({ html: true });
    page.attributes.description = md.render(page?.attributes?.description || '')
  

    return {
      colors,
      page,
      products,
      categories: categories?.data
    }
  }
}

export default StoreProvider
