import Image from 'next/image'

import LogoPNG from '../../../public/logo.svg'
import LogoWhitePNG from '../../../public/logo-white.svg'

const Hero = () => (
  <div
    className="relative bg-[url('/bg-1.jpg')] md:bg-[url('/bg-2.jpg')] bg-cover w-full h-screen"
  >
    <div className="md:hidden absolute w-full h-full" style={{ background: 'rgba(0, 0, 0, 0.6)' }} />
    <div className="z-3 relative w-full md:w-1/2 inline-block align-middle hero-content-1">
      <div className="flex flex-wrap justify-center md:justify-self-auto">
        <div className="text-center md:text-right">
          <Image src={LogoWhitePNG} className="md:hidden text-white logo-hero" alt="Logo ANYA" />
          <Image src={LogoPNG} className="hidden md:block text-white logo-hero" alt="Logo ANYA" />
        </div>
        <div className="w-full text-center px-8">
          <h1 className="text-2xl md:text-4xl text-gray-300 md:text-black text-xlg tracking-wide">Transformando telas olvidadas en <strong>creaciones renovadas</strong>.</h1>
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
);

export default Hero
