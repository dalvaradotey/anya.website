export interface IImage {
  id: number
  attributes?: {
    name?: string
    alternativeText?: string
    caption?: string
    width?: number
    heigth?: number
    formats?: any
    ext?: string
    mime?: string
    url: string
  }
}
