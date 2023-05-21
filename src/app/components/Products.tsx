import Image from 'next/image'

import Product1 from '../../../public/producto-1.jpg'
import Product2 from '../../../public/producto-2.jpg'
import Product3 from '../../../public/producto-3.jpg'
import Product4 from '../../../public/producto-4.jpg'

const Products = () => (
  <div className="bg-thistle px-8 py-28 md:px-64 md:py-48">
    <div>
      <h2 className="font-bold text-5xl">Moda consciente, telas reutilizadas.</h2>
      <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className="py-6 md:flex">
      <div className="mb-12 md:px-4">
        <Image src={Product1} className="rounded-lg" alt="producto 1" />
      </div>
      <div className="mb-12 md:px-4">
        <Image src={Product2} className="rounded-lg" alt="producto 2" />
      </div>
      <div className="mb-12 md:px-4">
        <Image src={Product3} className="rounded-lg" alt="producto 3" />
      </div>
      <div className="mb-12 md:px-4">
        <Image src={Product4} className="rounded-lg" alt="producto 4" />
      </div>
    </div>
  </div>
)

export default Products
