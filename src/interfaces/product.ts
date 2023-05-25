import { IAuthor } from "./author"
import { ICategory } from "./category"
import { IImage } from "./image"

export interface IProduct {
  id: number
  attributes: {
    name: string
    price: number
    isTop: boolean
    createdAt: string
    image: {
      data: IImage
    }
    category: {
      data: ICategory
    }
  }
}
