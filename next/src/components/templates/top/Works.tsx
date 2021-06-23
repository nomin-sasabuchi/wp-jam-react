import React from 'react'
import Link from 'next/link';
import { Section } from '@/components/molecules/outer/Section';
import { WorksCard } from '@/components/molecules/card/WorksCard';

export const Works = ({ posts }) => {
  return (
    <Section text="制作実績" imgPath="/top/ttl-work.svg" bgColor="bg-navy" textColor="text-white">
      <div className="mt-[6rem]">
        <ul className="grid grid-cols-2 gap-x-[4rem] gap-y-[4rem]">
          {posts && Array.from(Array(4).keys()).map((_, i) => {
            const { id, title, thumbnail, startData, endData } = posts[i];
            return (
              <li className="relative" key={id}>
                <Link href={`/works/posts/${id}/`}>
                  <a>
                    <WorksCard
                      title={title}
                      thumbnail={thumbnail}
                      startData={startData}
                      endData={endData}
                    />
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
        <Link href="/works">
          <a className="flex-center | mx-auto mt-[6rem] | w-[23rem] h-[5rem] | text-white bg-yellow">一覧を見る</a>
        </Link>
      </div>
    </Section>
  )
}
