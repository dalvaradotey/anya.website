import { ICategory } from "@/interfaces/category"
import { IProduct } from "@/interfaces/product"
import CategoryService from "@/services/CategoryService"

export interface IHomeProvider {
  categories: ICategory[]
  products: IProduct[]
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

    const products = categoryService.setProductList(categories?.data)

    return {
      products,
      categories: categories?.data
    }
  }
}

export default HomeProvider
