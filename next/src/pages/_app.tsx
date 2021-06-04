import '/styles/globals.css';
import 'tailwindcss/tailwind.css';
import { FC } from 'react';

const MyApp: FC<any> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default MyApp;
