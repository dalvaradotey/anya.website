import { IPost } from "@/interfaces/post"
import moment from 'moment'
import { publisherStructuredData } from "./publisher"

export function setPostStructuredData(post: IPost, convertToString: boolean = false) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "BlogPosting",
    "mainEntityOfPage": `https://anyaeco.com/blog/${post?.attributes?.slug}`,
    "headline": post?.attributes?.title,
    "name": post?.attributes?.title,
    "description": post?.attributes?.description,
    "datePublished": moment(post?.attributes?.publishedAt).format("YYYY-MM-DD"),
    "dateModified": moment(post?.attributes?.updatedAt).format("YYYY-MM-DD"),
    "author": {
      "@type": "Person",
      "name": post?.attributes?.author?.data?.attributes?.name,
      "image": {
        "@type": "ImageObject",
        "@id": post?.attributes?.author?.data?.attributes?.image?.data?.attributes?.url,
        "url": post?.attributes?.author?.data?.attributes?.image?.data?.attributes?.url,
        "height": post?.attributes?.author?.data?.attributes?.image?.data?.attributes?.height,
        "width": post?.attributes?.author?.data?.attributes?.image?.data?.attributes?.width
      }
    },
    "publisher": publisherStructuredData,
    "image": {
      "@type": "ImageObject",
      "@id": post?.attributes?.image?.data?.attributes?.url,
      "url": post?.attributes?.image?.data?.attributes?.url,
      "height": post?.attributes?.image?.data?.attributes?.height,
      "width": post?.attributes?.image?.data?.attributes?.width
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

export function setPostListStructuredData(posts: IPost[], convertToString: boolean = false) {
  let structuredData: any = {
    "@context": "https://schema.org/",
    "@type": "Blog",
    "@id": "https://anyaeco.com/blog",
    "mainEntityOfPage": "https://anyaeco.com/blog",
    "name": "Anya Blog",
    "description": "Si te interesa conocer más sobre la práctica de reutilización de telas en desuso y cómo se puede contribuir al movimiento de consumo consciente, te invitamos a leer algunos artículos relacionados.",
    "publisher": publisherStructuredData,
    "blogPost": []
  }

  for (const post of posts) {
    structuredData.blogPost.push(setPostStructuredData(post))
  }

  return (convertToString)
    ? JSON.stringify(structuredData)
    : structuredData
}
