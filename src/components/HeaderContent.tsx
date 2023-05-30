interface IProps {
  title: string
  description: string
}

const HeaderContent = ({ title, description }: IProps) => (
  <div className="bg-lavender-blush px-8 py-8">
    <h1 className="font-bold text-5xl mb-4 leading-10">{title}</h1>
    <div
      className="italic text-xl text-gray-600 leading-8"
      dangerouslySetInnerHTML={{ __html: description || '' }}
    />
  </div>
)

export default HeaderContent
