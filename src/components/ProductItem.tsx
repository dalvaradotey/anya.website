import { IProduct } from "@/data/products"
import Image from "next/image"

const PRODUCT_WHATSAPP_MESSAGE = 'Hola! Estoy viendo la tienda anyaeco.com y me interesa el siguiente producto: ';

const setWhatsAppMessage = (item: IProduct) => `${PRODUCT_WHATSAPP_MESSAGE} ${item?.name} (ID:${item?.id})`

const ProductItem = (props: { item: IProduct }) => (
  <a
    href={`https://api.whatsapp.com/send/?phone=56981429016&text=${setWhatsAppMessage(props?.item)}`}
    target="_blank"
    className={`relative snap-center shrink-0 fill-img bg-cover product-card drop-shadow-md hover:drop-shadow-xl cursor-pointer`} 
  >
    <Image
      src={props?.item?.imagePath}
      fill={true}
      className="object-fit w-100"
      alt=""
      quality={100}
    />
    <div className="relative h-full">
      <div
        className={`absolute top-0 right-0 bg-thistle text-white font-bold py-1 px-3`}
      >
        {props?.item?.name}
      </div>
      <div
        className={`absolute left-0 right-0 bg-gray-400 text-white py-1 px-3 text-xs`}
        style={{ width: '40px' }}
      >
        #{props?.item?.id}
      </div>
      <div className="flex absolute bottom-4 left-3">
        <button
          className="px-4 py-2 font-semibold text-sm bg-lavender-blush  text-gray-700 rounded-md shadow-sm opacity-100"
        >
          Comprar
        </button>
        <div>
          <p className="uppercase font-bold mb-0 text-xs ml-4">Precio</p>
          <p className="text-2xl ml-3 mt-0 text-right" style={{ marginTop: '-4px'}}>{props?.item?.price}</p>
        </div>
      </div>
    </div>
  </a>
)

export default ProductItem
