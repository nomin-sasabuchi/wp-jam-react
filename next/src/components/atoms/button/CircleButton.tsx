import React from 'react';
import { objButton } from '@/types/button';

export const CircleButton = React.forwardRef<any, objButton>(
  ({ ExtraClass, children, href }: objButton, ref) => {
    return (
      <a
        className={`rounded-full | flex-center ${ExtraClass}`}
        ref={ref}
        {...(href ? { href } : {})}
      >
        {children}
      </a>
    );
  },
);
