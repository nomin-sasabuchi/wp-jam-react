import '/styles/globals.css';
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app'
import { Provider } from "react-redux";
import store from "@/stores/";

export default function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
//FC 型つけ

//https://interrupt.co.jp/blog/entry/2021/03/05/133925