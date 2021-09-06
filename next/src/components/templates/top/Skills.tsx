import React from 'react';
import { Section } from '@/components/molecules/outer/Section';
import Image from 'next/image';
import { SkillsCard } from '@/components/molecules/card/SkillsCard';

export const Skills = ({ posts }) => {
  const skillsTitle = [
    { imgPath: '/top/level-icon3.svg', text: '実務経験があるもの' },
    { imgPath: '/top/level-icon2.svg', text: '個人で開発経験があるもの' },
    { imgPath: '/top/level-icon1.svg', text: 'プロゲート等で学習済み' },
  ];
  console.log(posts);
  return (
    <Section text="スキル" imgPath="/top/ttl-skills.svg">
      <div className="relative | mt-[6rem]">
        <h3 className="absolute top-[0] left-[50%] | transform-center | text-[2rem] | bg-white | px-[4.5rem]">
          LEVELについて
        </h3>
        <ul className="flex justify-center | border border-gray">
          {skillsTitle.map(({ imgPath, text }) => {
            return (
              <li key={text}>
                <div className="flex items-center | p-[3rem]">
                  <div className="relative | w-[2.6rem] h-[3.1rem]">
                    <Image src={imgPath} layout="fill" />
                  </div>
                  <p className="ml-[1.5rem]">{text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-[6rem]">
        <ul className="flex justify-between">
          {Array.from(Array(2).keys()).map((_, i) => {
            return (
              <li
                className="w-[calc(50%-2rem)] | flex | px-[4rem] py-[2rem] | border-b border-gray"
                key={i}
              >
                <p className="w-[80%] text-center">SKILL</p>
                <p className="w-[20%] text-center">LEVEL</p>
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-wrap justify-between">
          {posts &&
            posts.map(({ title, icon, level }) => {
              return (
                <li
                  className="w-[calc(50%-2rem)] | | border-b border-gray"
                  key={title}
                >
                  <SkillsCard title={title} icon={icon} level={level} />
                </li>
              );
            })}
        </ul>
      </div>
    </Section>
  );
};
