import React from 'react';
import Image from 'next/image';

export const MainVisual = () => {
  return (
    <div className="relative | flex | h-[calc(100vh-10rem)] | before before:absolute before:w-full before:bottom-0 before:left-0 before:h-[50vh] before:bg-navy before:block">
      {/* left-item */}
      <div className="w-[10rem] | flex justify-center items-center">
        <Image src="/top/side-copy.svg" width={11} height={281} />
      </div>
      {/* slider */}
      <div className="relative | overflow-hidden | mx-auto | w-full h-[calc(100vh-20rem)] | flex-1">
        <Image
          layout={'fill'}
          className="object-cover w-full h-full"
          src="/top/mv1-pc.jpg"
        />
      </div>
      {/* right-item  */}
      <div className="w-[10rem] | relative">
        <span className="absolute top-[50%] left-[50%] | transform translate-y-[-50%] translate-x-[-50%] | w-[0.1rem] h-[22rem] | bg-gray | before before:absolute"></span>
      </div>
    </div>
  );
};
