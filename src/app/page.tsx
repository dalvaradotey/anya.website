import Image from 'next/image'
import LogoPNG from '../../public/logo.svg'
import Product1 from '../../public/producto-1.jpg';
import Product2 from '../../public/producto-2.jpg';
import Product3 from '../../public/producto-3.jpg';
import Product4 from '../../public/producto-4.jpg';
import Facebook from '../../public/facebook.svg';
import Instagram from '../../public/instagram.svg';
import WhatsApp from '../../public/whatsapp.svg';
import Email from '../../public/email.svg';

export default function Home() {
  return (
    <main className="h-full">
      <div
        className="relative bg-[url('/bg-1.jpg')] md:bg-[url('/bg-2.jpg')] bg-cover w-full h-screen"
      >
        <div className="md:hidden absolute w-full h-full" style={{ background: 'rgba(0, 0, 0, 0.6)' }} />
        <div className="z-3 relative w-full md:w-1/2 inline-block align-middle hero-content-1">
          <div className="flex flex-wrap justify-center md:justify-self-auto">
            <div className="text-center md:text-right">
              <Image src={LogoPNG} className="text-white fill-white logo-hero" alt="Logo ANYA" />
            </div>
            <div className="w-full text-center px-8">
              <h1 className="text-2xl text-gray-300 md:text-black text-xlg tracking-wide">Transformando telas olvidadas en <strong>creaciones renovadas</strong>.</h1>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full text-center" style={{ zIndex: '2' }}>
          <div className="arrow-container" style={{ marginLeft: '48%' }}>
            <div className="arrow-down"></div>
          </div>
          <p className="text-gray-300 md:text-gray-500 mt-4 mb-3 uppercase font-bold tracking-wide text-sm">Productos hecho a mano</p>
        </div>
      </div>
      <div className="bg-thistle px-8 py-12 md:px-30">
        <div>
          <h2 className="font-bold text-2xl">Moda consciente, telas reutilizadas.</h2>
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
      <div className="md:flex bg-platinum px-8 py-12">
        <div className="md:w-1/2">
          <p className="text-center text-lg">Contáctanos</p>
          <ul className="py-4">
            <li className="py-2">
              <a href="https://api.whatsapp.com/send/?phone=56981429016&text=¡Hola! Tengo la siguiente consulta:" className="flex bg-white font-bold rounded-md px-2 py-2 inline">
                <span className="inline-flex">
                  <Image src={WhatsApp} alt="WhatsApp" width="35" />
                  <span style={{ marginTop: '7px' }}>&nbsp;&nbsp;+56 9 8142 9016</span>
                </span>
              </a>
            </li>
            <li className="py-2">
              <a href="mailto:anya@gmail.com" className="flex bg-white font-bold rounded-md px-2 py-2">
                <span className="inline-flex">
                  <Image src={Email} alt="Emial" width="35" />
                  <span style={{ marginTop: '7px' }}>&nbsp;&nbsp;anya@gmail.com</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <p className="text-center">Síguenos en nuestras redes sociales</p>
          <ul className="flex justify-center py-4">
            <li className="px-2">
              <a>
                <Image src={Facebook} alt="Facebook" width="45" />
              </a>
            </li>
            <li className="px-2">
              <a>
                <Image src={Instagram} alt="Instagram" width="45" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
