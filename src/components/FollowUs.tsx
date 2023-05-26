import FacebookIcon from '../../public/icons/facebook.svg'
import InstagramIcon from '../../public/icons/instagram.svg'

const FollowUs = () => (
  <>
    <p className="mt-2 tracking-wide text-sm">Síguenos en nuestras redes sociales</p>
    <ul className="flex justify-center mt-4 md:mt-0 ml-5">
      <li className="md:px-4 md:px-2">
        <a
          href="https://www.facebook.com/anya.accesorio"
          target="_blank"
          className="hover:drop-shadow-sm transition duration-700 ease-in-out"
          aria-label="Síguenos en Facebook"
        >
          <FacebookIcon width="35" fill="#515151" />
        </a>
      </li>
      <li className="px-4 md:px-2">
        <a
          href="https://www.instagram.com/anya.accesorio"
          target="_blank"
          className="hover:drop-shadow-sm transition duration-700 ease-in-out"
          aria-label="Síguenos en Instagram"
        >
          <InstagramIcon width="35" fill="#515151" />
        </a>
      </li>
    </ul>
  </>
)

export default FollowUs