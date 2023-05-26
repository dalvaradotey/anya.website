export default function PageContainer({ children }: any) {
  return (
    <div className="md:container md:mx-auto mt-32 md:mt-24">
      <div className="md:mt-2 md:mb-16 md:mx-44 shadow-xl pb-8 rounded-md">
        {children}
      </div>
    </div>
  )
}
