import Head from 'next/head';
import { Header } from '@/components/organismus/layaouts/Header';
import { Footer } from '@/components/organismus/layaouts/Footer';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Breadcrumb } from '@/components/organismus/layaouts/Breadcrumb';

export const DefaltLayout = ({
  children,
  title = 'HP BY Next.js',
  addBreadcrumb
}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center | min-h-screen | text-[1.6rem] font-yu-gothic">
        <Head>
          <title>{title}</title>
        </Head>

        <Header />
        <Breadcrumb title={title} addBreadcrumb={addBreadcrumb} />
        <main className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            {children}
          </motion.div>
        </main>
        <Footer />
      </div>
    </>
  );
};
