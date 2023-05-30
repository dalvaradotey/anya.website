import { ICategory } from "@/interfaces/category"
import { IColor } from "@/interfaces/color"
import { IPage } from "@/interfaces/page"
import CategoryService from "@/services/CategoryService"
import PageService from "@/services/PageService"
import MarkdownIt from 'markdown-it'

export interface IStoreProvider {
  categories: ICategory[]
  colors: IColor[]
  page: IPage
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
    const colors = this._setColorList(categories?.data)
  
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
      categories: categories?.data
    }
  }

  _setColorList(categories: ICategory[]) {
    const colors: IColor[] = []

    for (const category of categories) {
      for (const product of category?.attributes?.products?.data) {
        for (const color of product?.attributes?.colors?.data) {
          if (colors.findIndex(i => i.id === color.id) === -1) {
            colors.push(color)
          }
        }
      }
    }

    return colors
  }
}

export default StoreProvider
