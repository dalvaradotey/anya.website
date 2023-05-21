import Image from 'next/image'

import Facebook from '../../../public/facebook.svg'
import Instagram from '../../../public/instagram.svg'
import WhatsApp from '../../../public/whatsapp.svg'
import Email from '../../../public/email.svg'
import LogoSVG from '../../../public/logo.svg'

const Footer = () => (
  <>
    <div className="bg-platinum px-8 py-28 md:px-64 md:py-24">
      <div className="md:flex">
        <div className="md:w-1/2">
          <p className="text-center text-lg">Contáctanos</p>
          <ul className="py-4">
            <li className="py-2">
              <a
                href="https://api.whatsapp.com/send/?phone=56981429016&text=¡Hola! Tengo la siguiente consulta:"
                className="flex bg-white font-bold rounded-md px-2 py-2 inline text-sm hover:drop-shadow-sm transition duration-700 ease-in-out"
              >
                <span className="inline-flex">
                  <Image src={WhatsApp} alt="WhatsApp" width="35" />
                  <span style={{ marginTop: '8px' }}>&nbsp;&nbsp;WhatsApp: +56 9 8142 9016</span>
                </span>
              </a>
            </li>
            <li className="py-2">
              <a
                href="mailto:anyaecontacto@gmail.com"
                className="flex bg-white font-bold text-sm rounded-md px-2 py-2 hover:drop-shadow-sm transition duration-700 ease-in-out"
              >
                <span className="inline-flex">
                  <Image src={Email} alt="Emial" width="35" />
                  <span style={{ marginTop: '7px' }}>&nbsp;&nbsp;Correo: anyaecontacto@gmail.com</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 text-center flex flex-wrap justify-center">
          <Image src={LogoSVG} className="logo-footer" alt="Logo footer" />
          <div className="w-full mt-0">
            <p className="uppercase font-bold tracking-wide text-sm mt-0">Hecho a mano</p>
          </div>
        </div>
      </div>
    </div>
    <div className="md:w-full flex py-5 md:px-64 bg-gray-50">
      <div className="w-full md:flex text-center">
        <p className="mt-2 tracking-wide text-sm">Síguenos en nuestras redes sociales</p>
        <ul className="flex justify-center mt-4 md:mt-0 ml-5">
          <li className="px-4 md:px-2">
            <a
              href="https://www.facebook.com/profile.php?id=100092200394347"
              target="_blank"
              className="hover:drop-shadow-sm transition duration-700 ease-in-out"
            >
              <Image src={Facebook} alt="Facebook" width="35" />
            </a>
          </li>
          <li className="px-4 md:px-2">
            <a
              target="_blank"
              className="hover:drop-shadow-sm transition duration-700 ease-in-out"
            >
              <Image src={Instagram} alt="Instagram" width="35" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Footer
