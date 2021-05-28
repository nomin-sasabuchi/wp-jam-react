import Head from "next/head";
import {Header} from "../organismus/layaouts/Header";
import {Footer} from "../organismus/layaouts/Footer";

export const DefaltLayout = (props) => {
  const { children,title = "HP BY Next.js" } = props;
  return (
    <>
      <div className="flex flex-col items-center justify-center | min-h-screen | text-[1.4rem]">
        <Head>
          <title>{title}</title>
        </Head>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </div>
    </>
  );
}