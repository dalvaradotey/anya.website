import WhatsAppIcon from '../../public/icons/whatsapp.svg'
import EmailIcon from '../../public/icons/email.svg'
import LogoIcon from '../../public/icons/logo.svg'
import FollowUs from './FollowUs'

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
                target="_blank"
              >
                <span className="inline-flex">
                  <WhatsAppIcon width="35" fill="#48c857" />
                  <span style={{ marginTop: '8px' }}>&nbsp;&nbsp;WhatsApp: +56 9 8142 9016</span>
                </span>
              </a>
            </li>
            <li className="py-2">
              <a
                href="mailto:anyaecontacto@gmail.com"
                className="flex bg-white font-bold text-sm rounded-md px-2 py-2 hover:drop-shadow-sm transition duration-700 ease-in-out"
                target="_blank"
              >
                <span className="inline-flex">
                  <EmailIcon width="35"/>
                  <span style={{ marginTop: '7px' }}>&nbsp;&nbsp;Correo: anyaecontacto@gmail.com</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 text-center flex flex-wrap justify-center">
          <LogoIcon className="logo-footer" />
          <div className="w-full mt-0">
            <p className="uppercase font-bold tracking-wide text-xs mt-0">Accesorios hecho a mano</p>
            <p className="text-xs">desde el sur de Chile 2023 ©</p>
          </div>
        </div>
      </div>
    </div>
    <div className="md:w-full flex py-5 md:px-64 bg-gray-50">
      <div className="w-full md:flex text-center">
        <FollowUs />
      </div>
    </div>
  </>
);

export default Footer
