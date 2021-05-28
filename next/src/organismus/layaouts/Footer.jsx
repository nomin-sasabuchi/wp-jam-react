import Link from "next/link";
import Image from 'next/image';
import {IconMail} from '../../components/atoms/svg/IconMail';
import {CircleButton} from '../../components/atoms/button/CircleButton';

export const Footer = () => {
  return (
    <>
      <footer className="w-full | mt-auto | text-white bg-navy | py-[4.5rem] px-[6%]">
        <div className="flex justify-center | space-x-[2rem]">
          <Link href="/contact">
            <CircleButton ExtraClass="bg-white | w-[50px] h-[50px]">
              <IconMail ExtraClass="w-[25px]"/>
            </CircleButton>
          </Link>
          <CircleButton ExtraClass="bg-white | w-[50px] h-[50px]" target="blank" href="https://github.com/sei12356">
            <Image src="/icon-github.png" alt="github" width="34" height="32" />
          </CircleButton>
        </div>
        <p className="mt-[3rem] | text-center">©Joint Core All rights reserved.</p>
        <a className="mt-[1.5rem] | text-center | block" target="_blank" href="https://icons8.jp/">icons8ライセンス</a>
      </footer>
    </>
  );
}