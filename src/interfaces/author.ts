import { IImage } from "./image"

export interface IAuthor {
  id: number
  attributes: {
    name: string
    image: {
      data: IImage
    }
  }
}
