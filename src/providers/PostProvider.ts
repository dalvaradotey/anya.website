import { IPost } from "@/interfaces/post"
import PostService from "@/services/PostService"
import MarkdownIt from 'markdown-it'

export interface IPostProvider {
  post: IPost
}

class PostProvider {
  constructor() {}

  async getData({ params }: { params: { slug: string }}): Promise<IPostProvider> {
    const postService = new PostService
    const posts = await postService.get({
      'filters[slug][$eq]': params?.slug,
      'populate[0]': 'image',
      'populate[1]': 'author.image',
    })
  
    const md = new MarkdownIt({ html: true });
    const post = posts?.data[0]
    post.attributes.content = md.render(post?.attributes?.content)

    return {
      post,
    }
  }
}

export default PostProvider
