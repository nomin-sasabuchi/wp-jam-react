import { DefaltLayout } from '@/components/templates/DefaltLayout';
import Image from 'next/image';
import { Section } from '@/components/molecules/outer/Section';
import dayjs from 'dayjs';
import { getPostsWorks } from '../../lib/postsWorks'
import { GetStaticProps } from 'next'

const Home: React.FC = ({ posts }) => {
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
        <div className="mt-[6rem] mx-auto | flex justify-between">
          <div className="w-[34rem] h-[34rem]">
            <Image src="/top/about-1.png" width="340" height="340" />
          </div>
          <div className="w-[56%]">
            <h3 className="">
              <Image src="/top/about-copy.svg" width="457" height="78" />
            </h3>
            <p className="mt-[4rem]">1996年福岡県生まれの山育ち。高校卒業後、大手印刷会社に入社。<br />その後、職業訓練校で半年間DTP・Webデザインを学び、2017年2月よりWeb制作会社で勤務を開始。在職中はチームリーダーの経験もあり、ディレクション・デザイン・コーディング全ての業務に携わっていました。2020年6月末にWebエンジニアを目指すために、退職をする。<br />現在は独学でプログラミングの学習・開発等をしています。</p>
          </div>
        </div>
      </Section>
      <Section text="制作実績" imgPath="/top/ttl-work.svg" bgColor="bg-navy" textColor="text-white">
        <div className="mt-[6rem]">
          <ul className="grid grid-cols-2 gap-x-[4rem] gap-y-[4rem]">
            {posts && Array.from(Array(4).keys()).map((_, i) => {
              const { id, works_meta, title } = posts[i];
              return (
                <li className="relative" key={id}>
                  <div className="relative h-[28.9rem]">
                    <img src={posts[i].thumbnail.url} alt="" />
                  </div>
                  <div className="text-white mt-[1.5rem]">
                    <dl className="flex space-x-[1rem] text-yellow">
                      <dt>作成期間</dt>
                      <dd>
                        {`${dayjs(works_meta.startData).format('YYYY.MM.DD')} ~ ${dayjs(works_meta.endData).format('YYYY.MM.DD')}`}
                      </dd>
                    </dl>
                    <p className="text-[1.8rem] mt-[0.5rem] font-bold">{title.rendered}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </Section >
      <Section text="スキル" imgPath="/top/ttl-skills.svg"></Section>
    </DefaltLayout >
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsWorks();
  return {
    props: {
      posts
    },
  }
}