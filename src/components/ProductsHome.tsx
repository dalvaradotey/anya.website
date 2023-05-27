"use client"

import { useState } from 'react'
import Product from './Product'
import { ICategory } from '@/interfaces/category'
import { IProduct } from '@/interfaces/product'

interface IProps {
  categories: ICategory[]
}

const ProductsHome = ({ categories }: IProps) => {
  const [filter, setFilter] = useState<number>(0)

  const filterHandler = (e: any) => setFilter(parseInt(e?.target?.value))

  return (
    <div className="py-28 pl-12 md:pl-28">
      <h3 className="font-bold text-5xl leading-10 mb-4">Nuestra tienda</h3>
      <p className="mb-12 text-2xl">Revisa nuestro <strong>catálogo de accesorios</strong>.</p>
      <div className="flex mb-3">
        <p>Filtrar por categoría:&nbsp;</p>
        <select value={filter} onChange={filterHandler}>
          <option value={0}>Todos</option>
          {categories.map((item: ICategory, key: any) => (
            !!item?.attributes?.products?.data?.length && <option key={key} value={item?.id}>{item?.attributes?.name}</option>
          ))}
        </select>
      </div>
      <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14" style={{ zIndex: 0 }}>
        {categories.map((category: ICategory, _: any) => 
          category?.attributes?.products?.data?.map((product: IProduct, productKey: any) => (
            (filter === 0 || filter === category.id) && <Product key={productKey} product={product} />            
          ))
        )}
      </div>
    </div>
  )
}

export default ProductsHome
