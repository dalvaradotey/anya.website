"use client"

import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { useState } from 'react';
import ProductItem from './ProductItem';

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
      <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14" style={{ zIndex: 0 }}>
        {products.map((item, key) => (
          (filter === 'all' || filter === item.category) && <ProductItem key={key} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Products
