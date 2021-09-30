import React from 'react';
import { objButton } from '@/types/button';

export const SquareButton = React.forwardRef<any, objButton>(
  ({ ExtraClass, children, href }: objButton, ref) => {
    return (
      <a
        className={`flex-center | mx-auto mt-[6rem] | w-[23rem] h-[5rem] | text-white bg-yellow ${ExtraClass}`}
        ref={ref}
        {...(href ? { href } : {})}
      >
        {children}
      </a>
    );
  })
