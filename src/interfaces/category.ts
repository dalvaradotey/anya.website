
import { IImage } from "./image"
import { IProduct } from "./product"

export interface ICategory {
  id: number
  attributes: {
    slug: string
    name: string
    image: {
      data: IImage
    }
    createdAt: string
    products: {
      data: IProduct[]
    }
  }
}
