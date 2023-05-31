"use client"

import { useState } from 'react'
import ProductCard from './ProductCard'
import { ICategory } from '@/interfaces/category'
import { IProduct } from '@/interfaces/product'
import CategorySelector from './CategorySelector'

interface IProps {
  categories: ICategory[]
  products: IProduct[]
}

const ProductsHome = ({ categories, products }: IProps) => {
  const [filter, setFilter] = useState<number>(0)

  const filterHandler = (e: any) => setFilter(parseInt(e?.target?.value))
  const showProduct = (product: IProduct) => (filter === 0 || filter === product?.attributes?.category?.data?.id)

  return (
    <div className="py-28 pl-12 md:pl-28">
      <h3 className="font-bold text-5xl leading-10 mb-4">Nuestra tienda</h3>
      <p className="mb-12 text-2xl">Revisa nuestro <strong>catálogo de accesorios</strong>.</p>
      <div className="flex mb-3">
        <p>Filtrar por categoría:&nbsp;</p>
        <CategorySelector
          value={filter}
          onChange={filterHandler}
          categories={categories}
        />
      </div>
      <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14" style={{ zIndex: 0 }}>
        {products.map((product: IProduct, productKey: any) => (
          showProduct(product) && <ProductCard key={productKey} product={product} />            
        ))}
      </div>
    </div>
  )
}

export default ProductsHome
