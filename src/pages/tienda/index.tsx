import Layout from "@/components/Layout";
import Head from "next/head";
import CategoryService from "@/services/CategoryService";
import { ICategory } from "@/interfaces/category";
import ShopContainer from "@/components/ShopContainer";

interface IProps {
  categories: ICategory[]
}

export default function Tienda({ categories }: IProps) {
  return (
    <Layout>
      <Head>
        <title>Anya | Revisa nuestro catálogo de accesorios</title>
        <meta name="description" content="Revisa nuestro catálogo de accesorios únicos confeccionados con telas reutilizadas." key="desc" />
        <meta property="og:title" content="Anya | Revisa nuestro catálogo de accesorios" />
        <meta property="og:description" content="Revisa nuestro catálogo de accesorios únicos confeccionados con telas reutilizadas." />
        <meta property="og:image" content="https://anyaeco.com/avatar.png" />
        <meta property="og:url" content="https://anyaeco.com/tienda" />
      </Head>
      <ShopContainer categories={categories} />
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

  return {
    props: {
      categories: categories?.data,
    }
  };
}
