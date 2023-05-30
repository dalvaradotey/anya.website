"use client"

import { useState } from 'react'
import Product from './Product'
import { ICategory } from '@/interfaces/category'
import { IProduct } from '@/interfaces/product'
import { IColor } from '@/interfaces/color'
import { IPage } from '@/interfaces/page'

interface IProps {
  page: IPage
  categories: ICategory[]
  colors: IColor[]
}

const ShopContainer = ({ page, categories, colors }: IProps) => {
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
          <select value={filter} onChange={filterHandler}>
            <option value={0}>Todas</option>
            {categories.map((item: ICategory, key: any) => (
              !!item?.attributes?.products?.data?.length && <option key={key} value={item?.id}>{item?.attributes?.name}</option>
            ))}
          </select>
        </div>
        <div className="snap-x snap-mandatory overflow-x-auto">
          <p className="text-xs uppercase font-bold mb-1" style={{ marginTop: '-3px' }}>Colores</p>
          <div className="flex gap-3">
            {colors.map((color, key) => (
              <button
                key={key}
                className="rounded-full"
                style={{
                  backgroundColor: color?.attributes?.code,
                  width: 25,
                  height: 25,
                }}
                onClick={() => handlerColorFilter(color?.id)}
              >
                <span
                  className={`${colorsFilter.includes(color?.id) ? 'text-white' : 'text-transparent'}`}
                >
                  &#10003;
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-wrap md:gap-4 gap-y-4 pb-14" style={{ zIndex: 0 }}>
        {categories.map((category: ICategory, _: any) => 
          category?.attributes?.products?.data?.map((product: IProduct, productKey: any) => (
            showProduct(product) && <Product key={productKey} product={product} />            
          ))
        )}
      </div>
    </div>
  )
}

export default ShopContainer
