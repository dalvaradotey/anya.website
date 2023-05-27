
import { setCurrencyFormat } from "@/helpers/amounts";
import { IProduct } from "@/interfaces/product";
import Image from "next/image"

interface IProps {
  product: IProduct
}

const PRODUCT_WHATSAPP_MESSAGE = 'Hola! Estoy viendo la tienda anyaeco.com y me interesa el siguiente producto: ';

const setWhatsAppMessage = (product: IProduct) => `${PRODUCT_WHATSAPP_MESSAGE} ${product?.attributes?.name} (ID:${product?.id})`

const Product = ({ product }: IProps) => (
  <a
    href={`https://api.whatsapp.com/send/?phone=56981429016&text=${setWhatsAppMessage(product)}`}
    target="_blank"
    className={`relative snap-center shrink-0 fill-img bg-cover w-72 h-96 drop-shadow-md hover:drop-shadow-xl cursor-pointer`} 
  >
    <Image
      src={product?.attributes?.image?.data?.attributes?.formats?.small?.url || ''}
      fill={true}
      className="object-fit w-100"
      alt=""
      quality={100}
    />
    <div className="relative h-full">
      <div
        className={`absolute top-0 right-0 bg-thistle text-white font-bold py-1 px-3`}
      >
        {product?.attributes?.name}
      </div>
      <div
        className={`absolute left-0 right-0 bg-gray-400 text-white py-1 px-3 text-xs`}
        style={{ width: '40px' }}
      >
        #{product?.id}
      </div>
      <div className="flex absolute bottom-4 left-3">
        <button
          className="px-4 py-2 font-semibold text-sm bg-lavender-blush  text-gray-700 rounded-md shadow-sm opacity-100"
        >
          Comprar
        </button>
        <div>
          <p className="uppercase font-bold mb-0 text-xs ml-4">Precio</p>
          <p className="text-2xl ml-3 mt-0 text-right" style={{ marginTop: '-4px'}}>{setCurrencyFormat(product?.attributes?.price, 'CLP')}</p>
        </div>
      </div>
    </div>
  </a>
)

export default Product
