import { IImage } from "./image"

export interface IPage {
  id: number
  attributes: {
    slug: string
    title?: string
    description?: string
    metaTitle?: string
    metaDescription?: string
    content?: string
    sections?: any
    updatedAt: string
    image?: {
      data?: IImage
    }
  }
}
