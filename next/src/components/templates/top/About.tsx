import React from 'react'
import Image from 'next/image';
import { Section } from '@/components/molecules/outer/Section';


export const About = () => {
  return (
    <Section text="自己紹介" imgPath="/top/ttl-about.svg">
      <div className="mt-[6rem] mx-auto | flex justify-between items-center">
        <div className="w-[34rem] h-[34rem]">
          <Image src="/top/about-1.png" width="340" height="340" />
        </div>
        <div className="w-[56%]">
          <h3>
            <Image src="/top/about-copy.svg" width="457" height="78" />
          </h3>
          <p className="mt-[4rem] leading-loose">1996年福岡県生まれの山育ち。高校卒業後、大手印刷会社に入社。<br />その後、職業訓練校で半年間DTP・Webデザインを学び、2017年2月よりWeb制作会社で勤務を開始。在職中はチームリーダーの経験もあり、ディレクション・デザイン・コーディング全ての業務に携わっていました。2020年6月末にWebエンジニアを目指すために、退職をする。<br />現在は独学でプログラミングの学習・開発等をしています。</p>
        </div>
      </div>
    </Section>
  )
}
