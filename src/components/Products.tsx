"use client"

import { products, IProduct } from '@/data/products';
import { categories } from '@/data/categories';
import { useState } from 'react';

const PRODUCT_WHATSAPP_MESSAGE = 'Hola! Estoy viendo la tienda anyaeco.com y me interesa el siguiente producto: ';

const setWhatsAppMessage = (item: IProduct) => `${PRODUCT_WHATSAPP_MESSAGE} ${item?.name} (ID:${item?.id})`

const ProductItem = (props: { item: IProduct }) => (
  <a
    href={`https://api.whatsapp.com/send/?phone=56981429016&text=${setWhatsAppMessage(props?.item)}`}
    target="_blank"
    className={`snap-center shrink-0 fill-img bg-cover product-card drop-shadow-md hover:drop-shadow-xl cursor-pointer`} 
    style={{
      backgroundImage: `url('${props?.item?.imagePath}')`
    }}>
    <div className="relative h-full">
      <div
        className={`absolute top-0 right-0 bg-thistle text-white font-bold py-1 px-3`}
      >
        {props?.item?.name}
      </div>
      <div
        className={`absolute left-0 right-0 bg-gray-400 text-white py-1 px-3 text-xs`}
        style={{ width: '40px' }}
      >
        #{props?.item?.id}
      </div>
      <div className="flex absolute bottom-4 left-3">
        <button
          className="px-4 py-2 font-semibold text-sm bg-lavender-blush  text-gray-700 rounded-md shadow-sm opacity-100"
        >
          Comprar
        </button>
        <div>
          <p className="uppercase font-bold mb-0 text-xs ml-4">Precio</p>
          <p className="text-2xl ml-3 mt-0 text-right" style={{ marginTop: '-4px'}}>{props?.item?.price}</p>
        </div>
      </div>
    </div>
  </a>
)

const Products = () => {
  const [filter, setFilter] = useState<string>("all")

  const filterHandler = (e: any) => setFilter(e?.target?.value)

  return (
    <div className="py-28 pl-12 md:pl-28">
      <h3 className="font-bold text-5xl leading-10 mb-4">Nuestra tienda</h3>
      <p className="mb-12 text-2xl">Revisa nuestro <strong>catálogo de accesorios</strong>.</p>
      <div className="flex mb-3">
        <p>Filtrar por categoría:&nbsp;</p>
        <select value={filter} onChange={filterHandler}>
          <option value="all">Todos</option>
          {categories.map((item, key) => 
            <option key={key} value={item?.key}>{item?.name}</option>
          )}
        </select>
      </div>
      <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14">
        {products.map((item, key) => (
          (filter === 'all' || filter === item.category) && <ProductItem key={key} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Products
