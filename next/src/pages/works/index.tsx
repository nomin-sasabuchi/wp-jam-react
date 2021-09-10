import { DefaltLayout } from '@/components/organismus/layaouts/DefaltLayout';
import { useRouter } from 'next/router'
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getPostsWorks } from '@/lib/postsWorks';
import { WorksCard } from '@/components/molecules/card/WorksCard';
import { Pagination } from '@/components/organismus/layaouts/Pagination';


type postsType = {
  id: number, title: string, thumbnail: string, startData: string, endData: string
};

const Works = ({ posts }) => {
  const { query: { page = 1 } } = useRouter();
  const perpage = 2;
  const viewPost = posts.slice(
    (+page - 1) * perpage, // 先頭位置
    ((+page - 1) * perpage) + perpage// 先頭位置か何番目までを切り取るか
  )
  return (
    <DefaltLayout title="制作実績">
      <div className="relative | h-[24rem] w-full | before before:bg-navy before:overlay before:bg-opacity-50 before:z-[1]">
        <Image
          className="object-cover"
          src="/common/works_bg.jpg"
          alt="level1"
          layout="fill"
        />
        <h1 className="absolute-center z-[9] | text-white font-oswald font-bold">
          <span className="text-[4rem] | block | text-center | tracking-[1rem] | mr-[-1rem]">
            WORKS
          </span>
          <span className="block | text-center tracking-[0.2rem] | mr-[-0.2rem]">
            制作実績
          </span>
        </h1>
      </div>
      <ul className="container | grid grid-cols-2 gap-x-[4rem] gap-y-[4rem] | mt-[6rem]">
        {viewPost &&
          viewPost.map(({ id, title, thumbnail, startData, endData }: postsType) => {
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
            );
          })}
      </ul>
      <Pagination totalCount={posts.length} PER_PAGE={perpage} />
    </DefaltLayout>
  );
};

export default Works;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsWorks();
  return {
    props: {
      posts,
    },
  };
};
