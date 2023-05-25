import LogoIcon from '../../public/icons/logo.svg'
import Image from "next/image"

const Hero = () => (
  <div
    className="relative w-full h-screen"
    style={{ zIndex: 5000 }}
  >
    <Image
      src="/bg-1.jpg"
      fill={true}
      className="object-fit w-100 md:hidden"
      alt="Foto de portada de accesorios Anya"
      quality={100}
    />
    <Image
      src="/bg-2.jpg"
      fill={true}
      className="object-fit w-100 hidden md:block"
      alt="Foto de portada de accesorios Anya"
      quality={100}
    />
    <div className="md:hidden absolute w-full h-full" style={{ background: 'rgba(0, 0, 0, 0.6)' }} />
    <div className="z-3 relative w-full md:w-1/2 inline-block align-middle hero-content-1">
      <div className="flex flex-wrap justify-center md:justify-self-auto">
        <div className="text-center md:text-right">
          <LogoIcon className="logo-hero"/>
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
      <p className="text-gray-300 md:text-gray-500 mt-4 mb-3 uppercase font-bold tracking-wide text-sm">Accesorios hecho a mano</p>
    </div>
  </div>
);

export default Hero
