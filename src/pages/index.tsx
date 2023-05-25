import FollowUs from "@/components/FollowUs";
import Layout from "@/components/Layout";
import { IPost } from "@/interfaces/post"

import Head from "next/head";
import PageContainer from "@/components/PageContainer";
import PostCard from "@/components/PostCard";
import PostService from "@/services/PostService";
import Hero from "@/components/Hero";
import AboutOurProducts from "@/components/AboutOurProducts";
import Products from "@/components/Products";

interface IProps {
  posts: IPost[]
}

export default function Home({ products }: any) {
  return (
    <Layout>
      <Head>
        <title>Anya | Transformando telas olvidadas en creaciones renovadas</title>
        <meta name="description" content="Transformando telas olvidadas en creaciones renovada." key="desc" />
        <meta property="og:title" content="Anya | Transformando telas olvidadas en creaciones renovadas" />
        <meta property="og:description" content="Transformando telas olvidadas en creaciones renovada." />
        <meta property="og:image" content="https://anyaeco.com/avatar.png" />
        <meta property="og:url" content="https://anyaeco.com" />
      </Head>
      <Hero />
      <AboutOurProducts />
      <Products />
    </Layout>
  )
}

export async function getStaticProps({ params }: any) {
  /*
  const postService = new PostService
  const posts = await postService.get({
    'populate[0]': 'image',
  })
  */

  return { props: { products: [] }, revalidate: 60 };
}
