import { IColor } from "@/interfaces/color"
import { FC } from "react"

interface IProps {
  color: IColor
  onClick: (id: number) => void
  selectedIds: number[]
}

const ColorSelector: FC<IProps> = ({ color, onClick, selectedIds }) => (
  <button
    className="rounded-full"
    style={{
      backgroundColor: color?.attributes?.code,
      width: 25,
      height: 25,
    }}
    onClick={() => onClick(color?.id)}
  >
    <span
      className={`${selectedIds.includes(color?.id) ? 'text-white' : 'text-transparent'}`}
    >
      &#10003;
    </span>
  </button>
)

export default ColorSelector
