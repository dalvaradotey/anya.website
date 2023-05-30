import { ICategory } from "@/interfaces/category";
import { IColor } from "@/interfaces/color";

class CategoryProvider {
  constructor() {}

  setColorList(categories: ICategory[]) {
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

export default CategoryProvider
