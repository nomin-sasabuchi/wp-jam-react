import React from 'react';
import Image from 'next/image';

type PropsSkillsCard = {
  title: string;
  icon: string;
  level: string;
};

export const SkillsCard = ({ title, icon, level }: PropsSkillsCard) => {
  return (
    <div className="flex px-[4rem] py-[2rem]">
      <div className="flex items-center | w-[80%]">
        <div className="w-[35%] flex-center">
          <img className="max-h-[5rem]" src={icon} alt={title} />
        </div>
        <p className="w-[55%] text-center">{title}</p>
      </div>
      <div className="w-[20%]">
        <div className="relative | w-[4rem] h-[5rem]">
          {level === '1' && (
            <Image src="/top/level-icon1.svg" alt="level1" layout="fill" />
          )}
          {level === '2' && (
            <Image src="/top/level-icon2.svg" alt="level2" layout="fill" />
          )}
          {level === '3' && (
            <Image src="/top/level-icon3.svg" alt="level3" layout="fill" />
          )}
        </div>
      </div>
    </div>
  );
};
