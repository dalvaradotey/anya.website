import { ICategory } from "@/interfaces/category"
import CategoryService from "@/services/CategoryService"

export interface IHomeProvider {
  categories: ICategory[]
}

class HomeProvider {
  constructor() {}

  async getData(): Promise<IHomeProvider> {
    const categoryService = new CategoryService
    const categories = await categoryService.get({
      'populate[0]': 'products',
      'populate[1]': 'products.image,products.category',
      'filters[products][isTop][$eq]': true,
    })

    return {
      categories: categories?.data
    }
  }
}

export default HomeProvider
