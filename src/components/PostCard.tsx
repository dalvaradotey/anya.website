import { IPost } from "@/interfaces/post"
import { getHumanDate } from "@/helpers/dates"
import Link from "next/link"

interface IProps {
  post: IPost
}

const PostCard = ({ post }: IProps) => (
  <div className="w-full border-solid border-4 border-gray-100 rounded-md pb-5">
    <h2 className="mb-2 font-medium text-gray-900 px-3 pt-2">{post?.attributes?.title}</h2>
    <p className="px-3 text-xs mb-2 text-gray-500">Publicado el {getHumanDate(post?.attributes?.createdAt)}</p>
    <div
      className="bg-cover bg-center h-44"
      style={{
        backgroundImage: `url('${post?.attributes?.image?.data?.attributes?.formats?.large?.url}')`
      }}
    />
    <p className="text-sm my-3 px-3 text-gray-600">{post?.attributes?.description?.substring(0,150)}...</p>
    <Link
      href={`/blog/${post?.attributes?.slug}`}
      className="px-4 py-2 font-semibold text-sm bg-lavender-blush text-gray-700 rounded-md shadow-sm opacity-100 ml-3"
    >
      Leer artículo
    </Link>
  </div>
)

export default PostCard
