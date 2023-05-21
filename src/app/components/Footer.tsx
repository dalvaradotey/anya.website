import Image from 'next/image'

import Facebook from '../../../public/facebook.svg'
import Instagram from '../../../public/instagram.svg'
import WhatsApp from '../../../public/whatsapp.svg'
import Email from '../../../public/email.svg'

const Footer = () => (
  <div className="md:flex bg-platinum px-8 py-28 md:px-64 md:py-48">
    <div className="md:w-1/2">
      <p className="text-center text-lg">Contáctanos</p>
      <ul className="py-4">
        <li className="py-2">
          <a
            href="https://api.whatsapp.com/send/?phone=56981429016&text=¡Hola! Tengo la siguiente consulta:"
            className="flex bg-white font-bold rounded-md px-2 py-2 inline text-sm"
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
            className="flex bg-white font-bold text-sm rounded-md px-2 py-2"
          >
            <span className="inline-flex">
              <Image src={Email} alt="Emial" width="35" />
              <span style={{ marginTop: '7px' }}>&nbsp;&nbsp;Correo: anyaecontacto@gmail.com</span>
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
);

export default Footer
