import Layout from "@/components/Layout"

import Head from "next/head"
import PageContainer from "@/components/PageContainer"
import Image from "next/image"
import FollowUs from "@/components/FollowUs"

export default function Post({}: any) {
  return (
    <Layout>
      <Head>
        <title>Anya | Acerca de nosotros</title>
        <meta name="description" content="Accesorios hechos con amor y prendas reutilizadas, regalando confecciones únicas y rescatando historias. Descubre más aquí." key="desc" />
        <meta property="og:title" content="Anya | Acerca de nosotros" />
        <meta property="og:description" content="Accesorios hechos con amor y prendas reutilizadas, regalando confecciones únicas y rescatando historias. Descubre más aquí." />
        <meta property="og:image" content="https://anyaeco.com/avatar.png" />
        <meta property="og:url" content="https://anyaeco.com/nosotros" />
      </Head>
      <PageContainer>
        <div>
          <div className="relative w-full h-96">
            <Image
              src="https://anyaeco.s3.us-west-2.amazonaws.com/large_sentadas_frente_al_mar_d4a47d938a.jpg"
              alt=""
              className="object-fit"
              fill={true}
            />
          </div>
          <div className="text-lg justify">
            <div className="bg-lavender-blush px-8 py-8">
              <h1 className="font-bold text-5xl mb-4 leading-10">Acerca de nosotros</h1>
              <p className="italic text-xl text-gray-600 leading-8">Anya nació de la necesidad de una pequeña niña desordenada y de su mamá que vio la bonita posibilidad de regalarle un básico hecho con dedicación y amor, rescatando historias de prendas que ya no podia usar pero que ahora era posible al darle segunda oportunidad.</p>
            </div>
            <div className="px-8 blog-content">
              <p>Desde este sur en donde pareciera que la vida en ocasiones no avanza como en esos otros lugares donde va todo a prisa, te  saludo por estar  aqui para conocer un poquito de Anya. </p>
              <p className="justify">Soy mamá de una niña curiosa y alegre, mi  cototito como suelo llamarla desde que nació. Cototito como dice ella es su nombre de amor pero en realidad y para esta realidad en la que  todos existimos ella es Anais. Cuando Anais comenzó con sus trabalenguas, porque así suenan los primeros  intentos de los niños, respondia a la pregunta ¿cómo se llama tu mama?, ella en esa tierna vocecita repetia: ¡Yana!. Pasó el tiempo que  tenía que pasar hasta que ya pudo decirlo como realmente es, Yohana. Ese es mi nombre, Yohana. Y por que ANYA?...super simple Anya son nuestros nombres en la vocecita de cototito AN de Anais y YA de Yana.</p>
              <div className="relative float-right mx-4 mb-4 md:mb-0" style={{ width: 300, height: 200 }}>
                <Image
                  src="https://anyaeco.s3.us-west-2.amazonaws.com/large_telas_reutilizadas_a81dab3b0c.jpg"
                  alt=""
                  className="object-fit"
                  fill={true}
                />
              </div>
              <p className="justify">Anya porque cototito perdía siempre sus moños o colets y en una ocasión en particular que la peine no había ninguno a la vista. No intente siquiera salir a los pocos negocios y tiendas del pueblo por unos nuevos moños, sabía que las opciones eran las mismas  y para entonces ya estaba cansada de dar el mal ejemplo de usar y tirar. Fue así como de esa costumbre de guardar sus vestidos para regalarlos después, vi la infinita posibilidad de hacerle nuevos moños.</p>
              <p>Obviamente hice tantos que pude regalar y entre esas chácharas de reutilizar mi mamá sugirió intentar  vender. Desde esos primeros resultados han pasado ya unos años y hasta ahora siguen con todas sus costuras donde las puse.</p>
              <p>Anya nació así de la necesidad de una pequeña niña desordenada y de su mamá que vio la bonita posibilidad de regalarle un básico hecho con dedicación y amor, rescatando historias de prendas que ya no podia usar pero que ahora era posible al darle segunda oportunidad.</p>
              <p className="mb-8">Te invito a conocer esta iniciativa con foco sustentable y a sumarte al consumo coincidente. Sigueme en Instagram y Facebook para  ver las nuevas cositas que van surgiendo y con mucho gusto conversar un poquito. Como dije en  mi saludo inicial, te saludo desde este sur que con esta pequeña acción tambien es cuidar.</p>
              <p className="italic">Cariños Anya</p>
            </div>
          </div>
        </div>
        <div className="w-full md:flex text-center md:mx-8 mt-12">
          <FollowUs />
        </div>
      </PageContainer>
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

  return { props: {} };
}
