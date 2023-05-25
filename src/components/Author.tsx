import { IPost } from "@/interfaces/post"
import { getHumanDate } from "@/helpers/dates"
import Image from "next/image"

interface IProps {
  post: IPost
}

const Author = ({ post }: IProps) => (
  <div
    className="ml-4 overflow-hidden relative max-w-sm rounded-xl flex items-center gap-6 bg-lavender-blush mt-4 mr-4"
    style={{ zIndex: '-1' }}
  >
    <Image
      className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
      src={post?.attributes?.author?.data?.attributes?.image?.data?.attributes?.url || ''}
      width={200}
      height={400}
      alt="Sentadas frente al mar"
    />
    <div className="flex flex-col py-5 pl-24">
      <strong className="text-gray-900 font-bold text-sm">{post?.attributes?.author?.data?.attributes?.name}</strong>
      <span className="text-gray-500 text-sm font-medium">Publicado el {getHumanDate(post?.attributes?.createdAt)}</span>
    </div>
  </div>
)

export default Author
