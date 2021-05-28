import Link from "next/link";
import Image from 'next/image';

export const Header = () => {
  return (
    <>
      <header className="flex | w-screen | mb-auto">
        <h1 className="px-[6rem] py-[4rem]">
          <Link href="/">
            <a className="w-[90px] block">
              <Image src="/logo.svg" alt="joint core" width={90} height={91}/>
              <Image className="mt-[1rem]" src="/logo-text.svg" alt="joint core" width={89} height={18}/>
            </a>
          </Link>
        </h1>
        <nav>
          <ul className="flex">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}