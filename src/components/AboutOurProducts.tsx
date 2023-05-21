import Image from 'next/image'

import Product1 from '../../public/producto-1.jpg'
import Product2 from '../../public/producto-2.jpg'
import Product3 from '../../public/producto-3.jpg'
import Product4 from '../../public/producto-4.jpg'

const AboutOurProducts = () => (
  <div className="md:flex bg-thistle px-8 py-28 md:px-44">
    <div className="md:hidden">
      <div className="mb-10">
        <h2 className="font-bold text-5xl mb-4 leading-10">Moda consciente, telas reutilizadas.</h2>
        <p className="mt-2 text-lg">Tenemos una variedad de productos. Reutilizamos telas para darle un nuevo uso y crear accesorios únicos.</p>
      </div>
    </div>
    <div className="md:w-3/5">
      <div className="columns-3xs">
        <Image
          className="w-full aspect-video object-cover rounded-lg mb-4 border-4 border-platinum"
          src={Product1}
          alt="Producto 1"
        />
        <Image
          className="w-full aspect-square object-cover rounded-lg border-4 border-platinum"
          src={Product2}
          alt="Producto 2"
        />
        <Image
          className="w-full aspect-square object-cover rounded-lg mb-4 mt-4 md:mt-0 border-4 border-platinum"
          src={Product3}
          alt="Producto 3"
        />
        <Image
          className="w-full aspect-video object-cover rounded-lg border-4 border-platinum"
          src={Product4}
          alt="Producto 4"
        />
      </div>
    </div>
    <div className="w-2/5 hidden md:flex items-center">
      <div className="px-10">
        <h2 className="font-bold text-5xl mb-4 leading-10">Moda consciente, telas reutilizadas.</h2>
        <p className="mt-2 text-lg">Tenemos una variedad de productos. Reutilizamos telas para darle un nuevo uso y crear accesorios únicos.</p>
      </div>
    </div>
  </div>
)

export default AboutOurProducts
