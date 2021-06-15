type PropsType = {
  ExtraClass: string;
  href?: string;
}

export const CircleButton: React.FC<Readonly<PropsType>> = ({ ExtraClass, children, href }) => {
  return (
    <a
      className={`rounded-full | flex-center ${ExtraClass}`}
      {...(!!href ? { href } : {})}
    >
      {children}
    </a>
  );
};
