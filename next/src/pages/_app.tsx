import '/styles/globals.css';
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}
//FC 型つけ

//https://interrupt.co.jp/blog/entry/2021/03/05/133925
