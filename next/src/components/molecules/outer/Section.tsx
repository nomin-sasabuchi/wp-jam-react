import { TitleH2 } from '@/components/atoms/title/TitleH2';
import { objTitleH2 } from '@/types/TitleH2';
interface Section extends objTitleH2 {
  bgColor?: string;
  children: React.ReactNode;
};
export const Section = ({
  text,
  imgPath,
  textColor,
  bgColor,
  children,
}: Section) => {
  return (
    <section className={`pt-[8rem] pb-[12rem] ${bgColor}`}>
      <div className="container">
        <TitleH2 text={text} imgPath={imgPath} textColor={textColor} />
        {children}
      </div>
    </section>
  );
};
