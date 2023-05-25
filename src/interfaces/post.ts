import { IAuthor } from "./author"
import { IImage } from "./image"

export interface IPost {
  id: number
  attributes: {
    slug: string
    title: string
    metaTitle: string
    metaDescription: string
    author: {
      data: IAuthor
    }
    image: {
      data: IImage
    }
    createdAt: string
    description: string
    content: string
  }
}
