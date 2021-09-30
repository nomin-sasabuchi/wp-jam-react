import Link from 'next/link';
import Image from 'next/image';
import { IconMail } from '@/components/atoms/svg/IconMail';
import React from 'react';

export const Header = () => {
  const HeaderLink = [
    // { link: "about", text: "About" },
    { link: 'works', text: 'Works' },
    // { link: "skills", text: "Skills" },
    // { link: "blog", text: "Blog" }
  ];
  return (
    <>
      <header className="flex justify-end | w-full | relative">
        <h1 className="px-[6rem] py-[4rem] absolute top-0 left-0 z-[99] bg-white">
          <Link href="/">
            <a className="w-[9rem] block">
              <Image
                src="/common/logo.svg"
                alt="joint core"
                width={90}
                height={91}
              />
              <Image
                className="mt-[1rem]"
                src="/common/logo-text.svg"
                alt="joint core"
                width={89}
                height={18}
              />
            </a>
          </Link>
        </h1>
        <nav>
          <ul className="flex items-center | h-[10rem]">
            {HeaderLink.map(({ link, text }: { link: string, text: string }) => (
              <li className="mr-[7rem]" key={text}>
                <Link href={`/${link}`}>
                  <a>{text}</a>
                </Link>
              </li>
            ))}
            <li className="w-[10rem] h-[10rem]">
              <Link href="/contact">
                <a className="flex justify-center items-center | w-full h-full | bg-yellow">
                  <div>
                    <IconMail ExtraClass="text-white fill-current | mx-auto | w-[3rem]" />
                    <span className="text-white | block | mt-[0.5rem]">
                      Contact
                    </span>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
