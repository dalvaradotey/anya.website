import { IPage } from "@/interfaces/page"
import PageService from "@/services/PageService"
import MarkdownIt from 'markdown-it'

export interface IAboutProvider {
  page: IPage
}

class AboutProvider {
  constructor() {}

  async getData(): Promise<IAboutProvider> {
    const pageService = new PageService
    const pages = await pageService.get({
      'populate[0]': 'image',
      'filters[slug][$eq]': 'nosotros'
    })
    const page: IPage = pages?.data[0]
    const md = new MarkdownIt({ html: true });
    page.attributes.description = md.render(page?.attributes?.description || '')

    return {
      page,
    }
  }
}

export default AboutProvider
