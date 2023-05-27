export interface IImageFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string
  size: number
  width: number
  height: number
}

export interface IImage {
  id: number
  attributes?: {
    name?: string
    alternativeText?: string
    caption?: string
    width?: number
    height?: number
    formats?: {
      large?: IImageFormat
      small?: IImageFormat
      medium?: IImageFormat
      thumbnail?: IImageFormat
    }
    ext?: string
    mime?: string
    url: string
  }
}
