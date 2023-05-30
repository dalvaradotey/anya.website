import { IPage } from "@/interfaces/page"
import { IPost } from "@/interfaces/post"
import PageService from "@/services/PageService"
import PostService from "@/services/PostService"
import MarkdownIt from 'markdown-it'

export interface IBlogProvider {
  page: IPage
  posts: IPost[]
}

class BlogProvider {
  constructor() {}

  async getData(): Promise<IBlogProvider> {
    const postService = new PostService
    const posts = await postService.get({
      'populate[0]': 'image',
    })
    const pageService = new PageService
    const pages = await pageService.get({
      'filters[slug][$eq]': 'blog'
    })
    const page: IPage = pages?.data[0]
    const md = new MarkdownIt({ html: true });
    page.attributes.description = md.render(page?.attributes?.description || '')

    return {
      page,
      posts: posts?.data,
    }
  }
}

export default BlogProvider
