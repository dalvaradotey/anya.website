export interface IPost {
  id: number
  attributes: {
    slug: string
    title: string
    metaTitle: string
    metaDescription: string
    author: any
    image: any
    createdAt: string
    description: string
    content: string
  }
}

/*
export const posts: IPost[] = [
  {
    id: 1,
    slug: 'compromiso-consumo-consciente',
    title: 'Anya y su compromiso con el consumo consciente',
    imageName: 'sentadas-frente-al-mar',
    author: 'Yohana Riquelme',
    createdAt: '23 de mayo 2023',
    description: 'Descubre la historia detrás de la reutilización de telas en desuso y cómo Anya crea accesorios únicos y atemporales con cariño. Únete al movimiento de consumo consciente y minimiza el impacto ambiental al considerar productos que tienen una segunda oportunidad.',
    content: '## ¿Te pasó alguna vez?\nNo se ustedes pero de niña en más de una oportunidad mi mamá sacó tijera y se puso a cortar mis vestidos sin piedad. En su primer momento fue pura  curiosidad saber que tramaba porque las telas de algunas eran muy lindas pero por sobre todo porque cada prenda tenía una mini historia en la que  yo era la protagonista. Y también ahí entendí un tanto sobre esa manía de las mamás de guardar por tanto tiempo ciertas cosas. ¿Y el resultado de todos esos tijeretazos?, la verdad es que fueron hermosos regalos, la diferencia fue que esos resultados fueron hechos con dedicación y amor para mi, había historias y afecto detrás de hacer ese rescate para dar esas segundas oportunidades.\n\n¿Y esta historia te la crees? Dejame confesarte que **Anya** es precisamente eso de dar nuevas posibilidades a **textiles en desuso**, **telas** que se convierten en accesorios únicos atemporales **confeccionados a mano** con cariño. Es rescatar viejas prácticas de **reutilización** y por sobre todo es mi manera de ser parte de este movimiento de consumo consciente el que invita a descartar la idea de usar y tirar porque las posibilidades de crear son infinitas.\n\nTe invito a sumarte a la iniciativa de consumir productos que al ser creados **minimizan impacto ambiental** involucrado en su confección.',
  }
]
*/
