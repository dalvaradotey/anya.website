"use client"

import { useState } from 'react'
import ProductCard from './ProductCard'
import { ICategory } from '@/interfaces/category'
import { IProduct } from '@/interfaces/product'
import { IColor } from '@/interfaces/color'
import { IPage } from '@/interfaces/page'
import CategorySelector from './CategorySelector'
import ColorSelector from './ColorSelector'

interface IProps {
  page: IPage
  categories: ICategory[]
  colors: IColor[]
}

const StoreContainer = ({ page, categories, colors }: IProps) => {
  const [filter, setFilter] = useState<number>(0)
  const [colorsFilter, setColorFilter] = useState<number[]>([])

  const filterHandler = (e: any) => setFilter(parseInt(e?.target?.value))
  const handlerColorFilter = (id: number) => {
    if (colorsFilter.includes(id)) {
      setColorFilter(colorsFilter.filter(i => i !== id))
    } else {
      setColorFilter([...colorsFilter, id])
    }
  }
  const showProduct = (product: IProduct) => {
    if (filter === 0 && colorsFilter?.length === 0) return true
    if (
      filter !== 0
      && !colorsFilter?.length
      && product?.attributes?.category?.data?.id === filter
    ) return true
    if (
      filter !== 0
      && !!colorsFilter?.length
      && product?.attributes?.category?.data?.id === filter
      && product?.attributes?.colors?.data?.find(i => colorsFilter.find(colorId => i.id === colorId))
    ) return true
    if (
      filter === 0
      && !!colorsFilter?.length
      && product?.attributes?.colors?.data?.find(i => colorsFilter.find(colorId => i.id === colorId))
    ) return true

    return false
  }

  return (
    <div className="py-28 pl-12 md:pl-28 mt-8 md:mt-0">
      <h3 className="font-bold text-5xl leading-10 mb-4">{page?.attributes?.title}</h3>
      <div
        className="mb-12 text-2xl"
        dangerouslySetInnerHTML={{ __html: page?.attributes?.description || '' }}
      />
      <div className="md:flex mb-3 gap-6 mb-6">
        <div className="mb-6">
          <p className="text-xs uppercase font-bold">Categorías</p>
          <CategorySelector
            value={filter}
            onChange={filterHandler}
            categories={categories}
          />
        </div>
        <div className="snap-x snap-mandatory overflow-x-auto">
          <p className="text-xs uppercase font-bold mb-1" style={{ marginTop: '-3px' }}>Colores</p>
          <div className="flex flex-wrap md:flex-nowrap gap-3">
            {colors.map((color, key) => (
              <ColorSelector
                key={key}
                color={color}
                selectedIds={colorsFilter}
                onClick={() => handlerColorFilter(color?.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-wrap md:gap-4 gap-y-4 pb-14" style={{ zIndex: 0 }}>
        {categories.map((category: ICategory, _: any) => 
          category?.attributes?.products?.data?.map((product: IProduct, productKey: any) => (
            showProduct(product) && <ProductCard key={productKey} product={product} />            
          ))
        )}
      </div>
    </div>
  )
}

export default StoreContainer
