import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }: any) {
  return (
    <>
      <main className="w-full h-full">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
