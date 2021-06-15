import Image from 'next/image';
import { PropsTitleH2 } from "types/TitleH2";

export const TitleH2: React.VFC<Readonly<PropsTitleH2>> = ({ text, imgPath, textColor }) => {
  return (
    <h2 className={`${textColor} before before:bg-yellow before:h-[4rem] before:w-[0.1rem] before:block before:mx-auto`}>
      <p className="mt-[2rem] | text-center">{text}</p>
      <div className="flex justify-center | mt-[2rem] | h-[3.85rem] | relative">
        <Image src={imgPath} layout='fill' />
      </div>
    </h2>
  );
}