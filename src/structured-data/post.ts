import { BlogPosting, Blog, WithContext } from 'schema-dts'
import { IPost } from "@/interfaces/post"
import moment from 'moment'
import { publisherStructuredData } from "./publisher"

export function setPostStructuredData(
  post: IPost,
  convertToString: boolean = false
): WithContext<BlogPosting> | string {
  const structuredData: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://anyaeco.com/blog/${post?.attributes?.slug}`,
    "mainEntityOfPage": `https://anyaeco.com/blog/${post?.attributes?.slug}`,
    "headline": post?.attributes?.title,
    "name": post?.attributes?.title,
    "description": post?.attributes?.description,
    "datePublished": moment(post?.attributes?.publishedAt).format("YYYY-MM-DD").toString(),
    "dateModified": moment(post?.attributes?.updatedAt).format("YYYY-MM-DD").toString(),
    "author": {
      "@type": "Person",
      "name": post?.attributes?.author?.data?.attributes?.name,
      "image": {
        "@type": "ImageObject",
        "@id": post?.attributes?.author?.data?.attributes?.image?.data?.attributes?.url,
        "url": post?.attributes?.author?.data?.attributes?.image?.data?.attributes?.url,
        "height": post?.attributes?.author?.data?.attributes?.image?.data?.attributes?.height?.toString(),
        "width": post?.attributes?.author?.data?.attributes?.image?.data?.attributes?.width?.toString()
      }
    },
    "publisher": publisherStructuredData,
    "image": {
      "@type": "ImageObject",
      "@id": post?.attributes?.image?.data?.attributes?.url,
      "url": post?.attributes?.image?.data?.attributes?.url,
      "height": post?.attributes?.image?.data?.attributes?.height?.toString(),
      "width": post?.attributes?.image?.data?.attributes?.width?.toString()
    },
    "url": `https://anyaeco.com/blog/${post?.attributes?.slug}`,
    "isPartOf": {
      "@type" : "Blog",
        "@id": "https://anyaeco.com/blog",
        "name": "Anya Blog",
        "publisher": {
          "@type": "Organization",
          "@id": "https://anyaeco.com",
          "name": "Anya"
        }
     },
    "wordCount": post?.attributes?.content?.length
  }

  return (convertToString)
    ? JSON.stringify(structuredData)
    : structuredData
}

export function setPostListStructuredData(
  posts: IPost[],
  convertToString: boolean = false
) {
  const blogPost = []

  for (const post of posts) {
    blogPost.push(setPostStructuredData(post))
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://anyaeco.com/blog",
    "mainEntityOfPage": "https://anyaeco.com/blog",
    "name": "Anya Blog",
    "description": "Si te interesa conocer más sobre la práctica de reutilización de telas en desuso y cómo se puede contribuir al movimiento de consumo consciente, te invitamos a leer algunos artículos relacionados.",
    "publisher": publisherStructuredData,
    "blogPost": blogPost,
  }

  return (convertToString)
    ? JSON.stringify(structuredData)
    : structuredData
}
