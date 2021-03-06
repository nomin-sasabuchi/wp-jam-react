import { objWorks } from '@/types/Works';

type WorksCard = Pick<objWorks, 'title' | 'thumbnail' | 'startData' | 'endData'>

export const WorksCard = ({ title, thumbnail, startData, endData }: WorksCard) => {
  return (
    <>
      <div className="relative h-[28.9rem]">
        <img src={thumbnail} alt="" />
      </div>
      <div className="text-white mt-[1.5rem]">
        <span className="bg-yellow inline-block px-[1rem] py-[0.2rem]">{`${startData} ~ ${endData}`}</span>
        <p className="text-[1.8rem] mt-[0.5rem] font-bold">{title}</p>
      </div>
    </>
  );
};
