import Layout from "@/components/Layout";
import Head from "next/head";
import Hero from "@/components/Hero";
import AboutOurProducts from "@/components/AboutOurProducts";
import ProductsHome from "@/components/ProductsHome";
import CategoryService from "@/services/CategoryService";
import { ICategory } from "@/interfaces/category";

interface IProps {
  categories: ICategory[]
}

export default function Home({ categories }: IProps) {
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
      <ProductsHome categories={categories} />
    </Layout>
  )
}

export async function getStaticProps({ params }: any) {
  const categoryService = new CategoryService
  const categories = await categoryService.get({
    'populate[0]': 'products',
    'populate[1]': 'products.image,products.category',
    'filters[products][isTop][$eq]': true,
  })

  return { props: { categories: categories?.data }, revalidate: 60 };
}
