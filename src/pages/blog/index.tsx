import FollowUs from "@/components/FollowUs";
import Layout from "@/components/Layout";
import { posts, IPost } from "@/data/posts"

import Head from "next/head";
import PageContainer from "@/components/PageContainer";
import PostCard from "@/components/PostCard";

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
        <meta property="og:image" content="/avatar.png" />
      </Head>
      <PageContainer>
        <h1 className="text-5xl mb-5 mx-4 text-gray-600 mt-4 md:mt-0">El blog de Anya</h1>
        <p className="mb-8 mx-4 md:mb-4 text-xl md:text-lg italic text-gray-600">Si te interesa conocer más sobre la práctica de reutilización de telas en desuso y cómo se puede contribuir al movimiento de consumo consciente, te invitamos a leer algunos artículos relacionados.</p>
        <div className="flex mx-4 md:mx-8">
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
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  //const res = await fetch(`https://.../posts/${params.id}`);
  //const post = await res.json();
 
  // Pass post data to the page via props
  return { props: { posts } };
}
