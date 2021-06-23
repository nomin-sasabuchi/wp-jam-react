import { DefaltLayout } from '@/components/templates/DefaltLayout';
import { Section } from '@/components/molecules/outer/Section';
//apiデータ
import { getPostsWorks } from '@/lib/postsWorks'
import { getPostsSkills } from '@/lib/postsSkills'
import { GetStaticProps } from 'next'

import Link from 'next/link';
import Image from 'next/image';

const Home: React.FC = ({ worksPosts, skillsPosts }) => {
  const skillsTitle = [
    { imgPath: "/top/level-icon3.svg", text: "実務経験があるもの" },
    { imgPath: "/top/level-icon2.svg", text: "個人で開発経験があるもの" },
    { imgPath: "/top/level-icon1.svg", text: "プロゲート等で学習済み" }
  ]
  return (
    <DefaltLayout title="home">
      <div className="relative | flex | h-[calc(100vh-10rem)] | before before:absolute before:w-full before:bottom-0 before:left-0 before:h-[50vh] before:bg-navy before:block">
        {/* left-item */}
        <div className="w-[10rem] | flex justify-center items-center">
          <Image src="/top/side-copy.svg" width={11} height={281} />
        </div>
        {/* slider */}
        <div className="relative | overflow-hidden | mx-auto | w-full h-[calc(100vh-20rem)] | flex-1">
          <Image layout={"fill"} className="object-cover w-full h-full" src="/top/mv1-pc.jpg" />
        </div>
        {/* right-item  */}
        <div className="w-[10rem] | relative">
          <span className="absolute top-[50%] left-[50%] | transform translate-y-[-50%] translate-x-[-50%] | w-[0.1rem] h-[22rem] | bg-gray | before before:absolute"></span>
        </div>
      </div>
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
      <Section text="制作実績" imgPath="/top/ttl-work.svg" bgColor="bg-navy" textColor="text-white">
        <div className="mt-[6rem]">
          <ul className="grid grid-cols-2 gap-x-[4rem] gap-y-[4rem]">
            {worksPosts && Array.from(Array(4).keys()).map((_, i) => {
              const { id, title, thumbnail, startData, endData } = worksPosts[i];
              return (
                <li className="relative" key={id}>
                  <Link href={`/works/posts/${id}/`}>
                    <a>
                      <div className="relative h-[28.9rem]">
                        <img src={thumbnail} alt="" />
                      </div>
                      <div className="text-white mt-[1.5rem]">
                        <span className="bg-yellow inline-block px-[1rem] py-[0.2rem]">{`${startData} ~ ${endData}`}</span>
                        <p className="text-[1.8rem] mt-[0.5rem] font-bold">{title}</p>
                      </div>
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
      </Section >
      <Section text="スキル" imgPath="/top/ttl-skills.svg">
        <div className="relative | mt-[6rem]">
          <h3 className="absolute top-[0] left-[50%] | transform-center | text-[2rem] | bg-white | px-[4.5rem]">LEVELについて</h3>
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
              )
            })}
          </ul>
        </div>
        <div className="mt-[6rem]">
          <ul className="flex justify-between">
            {
              Array.from(Array(2).keys()).map((_, i) => {
                return (
                  <li className="w-[calc(50%-2rem)] | flex | px-[4rem] py-[2rem] | border-b border-gray" key={i}>
                    <p className="w-[80%] text-center">SKILL</p>
                    <p className="w-[20%] text-center">LEVEL</p>
                  </li>
                )
              })
            }
          </ul>
          <ul className="flex flex-wrap justify-between">
            {skillsPosts && skillsPosts.map(({ title, icon, level }) => {
              return (
                <li className="w-[calc(50%-2rem)] | | border-b border-gray" key={title}>
                  <div className="flex px-[4rem] py-[2rem]">
                    <div className="flex items-center | w-[80%]">
                      <div className="w-[35%] flex-center">
                        <img className="max-h-[5rem]" src={icon} alt={title} />
                      </div>
                      <p className="w-[55%] text-center">{title}</p>
                    </div>
                    <div className="w-[20%]">
                      <div className="relative | w-[4rem] h-[5rem]">
                        {level === "1" && <Image src="/top/level-icon1.svg" alt='level1' layout="fill" />
                        }{level === "2" && <Image src="/top/level-icon2.svg" alt='level2' layout="fill" />
                        }{level === "3" && <Image src="/top/level-icon3.svg" alt='level3' layout="fill" />}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </Section >
      <Section text="お問い合わせ" imgPath="/top/ttl-contact.svg" bgColor="bg-gray"></Section>
    </DefaltLayout>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const worksPosts = await getPostsWorks();
  const skillsPosts = await getPostsSkills();
  return {
    props: {
      worksPosts,
      skillsPosts
    },
  }
}