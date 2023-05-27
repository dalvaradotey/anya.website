import LogoSVG from '../../public/icons/logo.svg'
import Link from 'next/link'

const navbarLinks = [
  {
    name: 'Tienda',
    path: 'tienda'
  },
  {
    name: 'Nosotros',
    path: 'nosotros'
  },
  {
    name: 'Blog',
    path: 'blog',
  },
]

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 bg-white px-3 py-2 md:px-32" style={{ zIndex: 1000 }}>
      <div className="flex flex-wrap">
        <div className="flex w-full md:w-1/5">
          <Link
            href="/"
          >
            <LogoSVG width="120px" />
            <p className="text-xs font-bold uppercase" style={{ fontSize: '0.5rem', marginTop: '-5px' }}>Accesorios hecho a mano</p>
          </Link>
        </div>
        <div className="w-full md:w-4/5 text-center md:text-right relative">
          <div className="inline-block align-middle mt-2 mb-2 md:mt-4 md:mb-0">
            {navbarLinks.map((link, key) =>
              <Link
                key={key}
                href={`/${link?.path}`}
                className="px-4 link-border mx-4 md:mx-2"
              >
                {link?.name}
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
