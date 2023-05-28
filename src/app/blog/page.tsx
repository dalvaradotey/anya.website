import FollowUs from "@/components/FollowUs"
import { IPost } from "@/interfaces/post"
import PageContainer from "@/components/PageContainer"
import PostCard from "@/components/PostCard"
import PostService from "@/services/PostService";
import { setPostListStructuredData } from "@/structured-data/post"
import { openGraphMetadata } from "../shared-metadata"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Anya | Blog',
  description: 'Si te interesa conocer más sobre la práctica de reutilización de telas en desuso y cómo se puede contribuir al movimiento de consumo consciente, te invitamos a leer algunos artículos relacionados.',
  openGraph: {
    ...openGraphMetadata,
    title: 'Anya | Blog',
    description: 'Si te interesa conocer más sobre la práctica de reutilización de telas en desuso y cómo se puede contribuir al movimiento de consumo consciente, te invitamos a leer algunos artículos relacionados.',
    url: 'https://anyaeco.com/blog',
    images: [
      {
        url: '/avatar.png',
        width: 662,
        height: 692,
      },
    ],
  },
}

export default async function Post() {
  const postService = new PostService
  const posts = await postService.get({
    'populate[0]': 'image',
  })

  return (
    <>
      <PageContainer>
        <div className="mx-3">
          <h1 className="text-5xl mb-5 mx-4 text-gray-600 mt-4 md:mt-0 font-bold leading-10">Nuestro Blog</h1>
          <p className="mb-8 mx-4 md:mb-4 text-xl md:text-lg italic text-gray-600">Si te interesa conocer más sobre la práctica de reutilización de telas en desuso y cómo se puede contribuir al movimiento de consumo consciente, te invitamos a leer algunos artículos relacionados.</p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap mx-4 md:mx-8 gap-4 gap-x-4">
          {posts?.data.map((post: IPost, key: any) => (
            <div key={key} className="md:w-72">
              <PostCard post={post} />
            </div>
          ))}
        </div>  
        <div className="w-full md:flex text-center md:mx-8 mt-12">
          <FollowUs />
        </div>
      </PageContainer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: setPostListStructuredData(posts?.data, true) }}
      />
    </>
  )
}
