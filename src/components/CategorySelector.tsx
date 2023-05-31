import { ICategory } from "@/interfaces/category"
import { FC } from "react"

interface IProps {
  value: number
  onChange: (e: any) => void
  categories: ICategory[]
}

const CategorySelector: FC<IProps> = ({ value, onChange, categories }) => (
  <select value={value} onChange={onChange}>
    <option value={0}>Todas</option>
    {categories.map((item: ICategory, key: any) => (
      !!item?.attributes?.products?.data?.length && <option key={key} value={item?.id}>{item?.attributes?.name}</option>
    ))}
  </select>
)

export default CategorySelector
