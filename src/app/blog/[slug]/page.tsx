import FollowUs from "@/components/FollowUs"
import MarkdownIt from 'markdown-it'

import PageContainer from "@/components/PageContainer"
import ReadTime from "@/components/ReadTime"
import Author from "@/components/Author"
import PostService from "@/services/PostService"
import Image from "next/image"

import { setPostStructuredData } from "@/structured-data/post"
import { Metadata, ResolvingMetadata } from "next"
import { openGraphMetadata } from "@/app/shared-metadata"

interface IProps {
  params: { 
    slug: string 
  }
}

export async function generateMetadata(
  { params }: IProps
): Promise<Metadata> {
  const postService = new PostService
  const posts = await postService.get({
    'filters[slug][$eq]': params?.slug,
    'populate[0]': 'image',
    'populate[1]': 'author.image',
  })
  const post = posts?.data[0]
 
  return {
    title: post?.attributes.metaTitle,
    description: post?.attributes?.metaDescription,
    openGraph: {
      ...openGraphMetadata,
      title: post?.attributes.metaTitle,
      description: post?.attributes?.metaDescription,
      url: `https://anyaeco.com/blog/${post?.attributes?.slug}`,
      images: [
        {
          url: post?.attributes?.image?.data?.attributes?.formats?.large?.url,
          width: post?.attributes?.image?.data?.attributes?.formats?.large?.width,
          height: post?.attributes?.image?.data?.attributes?.formats?.large?.height,
        },
      ],
    },
  };
}

export default async function Post({ params }: IProps) {
  const postService = new PostService
  const posts = await postService.get({
    'filters[slug][$eq]': params?.slug,
    'populate[0]': 'image',
    'populate[1]': 'author.image',
  })

  const md = new MarkdownIt({ html: true });
  const post = posts?.data[0]
  post.attributes.content = md.render(post?.attributes?.content)

  return (
    <>
      <PageContainer>
        <h1 className="text-5xl mb-5 mx-4 text-gray-600 mt-4 md:mt-0">{post?.attributes?.title}</h1>
        <p className="mx-4 mb-4 text-xl md:text-lg italic text-gray-600">{post?.attributes?.description}</p>  
        <ReadTime />
        <div className="relative w-full h-96">
          <Image
            src={post?.attributes?.image?.data?.attributes?.formats?.large?.url || ''}
            fill={true}
            className="object-fit w-100"
            alt={post?.attributes?.image?.data?.attributes?.alternativeText || ''}
            quality={100}
          />
        </div>
        <Author post={post} />
        <div className="px-5 md:px-8">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post?.attributes?.content }}
          />
        </div>
        <div className="w-full md:flex text-center md:mx-8 mt-12">
          <FollowUs />
        </div>
      </PageContainer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: setPostStructuredData(post?.data, true) }}
      />
    </>
  )
}

export async function generateStaticParams() {
  const postService = new PostService
  const posts = await postService.get()

  if (!posts?.data?.length) return { paths: [], fallback: false  }

  return posts?.data?.map((post: any) => ({
    slug: post?.attributes?.slug
  }));
}

