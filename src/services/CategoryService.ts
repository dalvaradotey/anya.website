import { IColor } from "@/interfaces/color";
import Service from "./Service";
import { ICategory } from "@/interfaces/category";
import { IProduct } from "@/interfaces/product";

class CategoryService extends Service {
  constructor() {
    super('categories')
  }

  setProductList(categories: ICategory[]): IProduct[] {
    const products: IProduct[] = []

    for (const category of categories) {
      for (const product of category?.attributes?.products?.data) {
        products.push(product)
      }
    }

    return products
  }

  setColorList(categories: ICategory[]): IColor[] {
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

export default CategoryService
