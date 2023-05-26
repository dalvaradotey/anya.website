import FollowUs from "@/components/FollowUs";
import Layout from "@/components/Layout";
import { IPost } from "@/interfaces/post"

import Head from "next/head";
import PageContainer from "@/components/PageContainer";
import PostCard from "@/components/PostCard";
import PostService from "@/services/PostService";
import { setPostListStructuredData } from "@/structured-data/post";

interface IProps {
  posts: IPost[]
}

export default function Post({ posts }: IProps) {
  return (
    <Layout>
      <Head>
        <title>Anya | Blog</title>
        <meta name="description" content="Si te interesa conocer más sobre la práctica de reutilización de telas en desuso y cómo se puede contribuir al movimiento de consumo consciente, te invitamos a leer algunos artículos relacionados." key="desc" />
        <meta property="og:title" content="Anya | Blog" />
        <meta property="og:description" content="Si te interesa conocer más sobre la práctica de reutilización de telas en desuso y cómo se puede contribuir al movimiento de consumo consciente, te invitamos a leer algunos artículos relacionados." />
        <meta property="og:image" content="https://anyaeco.com/avatar.png" />
        <meta property="og:url" content="https://anyaeco.com/blog" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: setPostListStructuredData(posts, true) }}
          key="product-jsonld"
        />
      </Head>
      <PageContainer>
        <h1 className="text-5xl mb-5 mx-4 text-gray-600 mt-4 md:mt-0">El blog de Anya</h1>
        <p className="mb-8 mx-4 md:mb-4 text-xl md:text-lg italic text-gray-600">Si te interesa conocer más sobre la práctica de reutilización de telas en desuso y cómo se puede contribuir al movimiento de consumo consciente, te invitamos a leer algunos artículos relacionados.</p>
        <div className="flex flex-wrap md:flex-nowrap mx-4 md:mx-8 gap-4 gap-x-4">
          {posts.map((post: IPost, key: any) => (
            <div key={key} className="md:w-72">
              <PostCard post={post} />
            </div>
          ))}
        </div>  
        <div className="w-full md:flex text-center md:mx-8 mt-12">
          <FollowUs />
        </div>
      </PageContainer>
    </Layout>
  )
}

export async function getStaticProps({ params }: any) {
  const postService = new PostService
  const posts = await postService.get({
    'populate[0]': 'image',
  })

  return { props: { posts: posts?.data }, revalidate: 60 };
}
