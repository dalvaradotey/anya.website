import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';
import Script from 'next/script';

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="w-full h-full">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
