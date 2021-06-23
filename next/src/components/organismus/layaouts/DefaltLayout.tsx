import Head from 'next/head';
import { Header } from '@/components/organismus/layaouts/Header';
import { Footer } from '@/components/organismus/layaouts/Footer';
import { FC } from 'react';



export const DefaltLayout: FC<{ title: string }> = ({ children, title = 'HP BY Next.js' }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center | min-h-screen | text-[1.6rem] font-yu-gothic">
        <Head>
          <title>{title}</title>
        </Head>
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </div>
    </>
  );
};
