import { TitleH2 } from '@/components/atoms/title/TitleH2';
import { PropsTitleH2 } from "types/TitleH2";
type PropsSection = PropsTitleH2 & {
  bgColor?: string;
}
export const Section: React.FC<Readonly<PropsSection>> = ({ text, imgPath, textColor, bgColor, children }) => {
  return (
    <section className={`pt-[8rem] pb-[12rem] ${bgColor}`}>
      <div className="container">
        <TitleH2 text={text} imgPath={imgPath} textColor={textColor} />
        {children}
      </div>
    </section>
  )
}