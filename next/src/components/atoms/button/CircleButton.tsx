import React from 'react';

type PropsType = {
  ExtraClass: string;
  href?: string;
}

export const CircleButton = React.forwardRef<any, PropsType>(
  ({ ExtraClass, children, href }, ref) => {
    return (
      <a
        className={`rounded-full | flex-center ${ExtraClass}`}
        ref={ref}
        {...(href ? { href } : {})}
      >
        {children}
      </a>
    )
  },
)