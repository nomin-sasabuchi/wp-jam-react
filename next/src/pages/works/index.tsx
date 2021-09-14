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
  //ページャー
  const { query: { page = 1, filter = "All", keyword = "" } } = useRouter();
  const perpage = 2;

  //絞り込み
  posts.filter((item) => {
    if (item.title.indexOf(keyword) != -1) return item
  });

  const fillterData = filter === "All" ? posts : posts.filter((item) => {
    const categories = item.category ? item.category.map((cat) => cat.name) : [];
    return categories.includes(filter);
  });

  const postsData = fillterData.filter((item) => {
    if (item.title.indexOf(keyword) != -1) return item
  });
  console.log(postsData);

  const viewPost = postsData.slice(
    (+page - 1) * perpage, // 先頭位置
    ((+page - 1) * perpage) + perpage// 先頭位置か何番目までを切り取るか
  )
  //カテゴリー抽出
  const catsName = posts.reduce((prev, value) => {
    const categories = value.category ? value.category.map((cat) => cat.name) : [];
    return ["All", ...prev, ...categories];
  }, []);
  const catsNameList = Array.from(new Set(catsName));
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
      {/*  検索エリア */}
      <form
        method="get"
        action="/works"
        target="_top"
        className="flex-center"
      >
        <input
          type="text"
          name="keyword"
          className="border"
        />
        <button>検索</button>
      </form>
      <ul className="container flex space-x-[2rem] mt-[5rem]">
        {catsNameList.map((catName) => {
          return (
            <li>
              <Link href={{
                pathname: '/works',
                query: { page: 1, filter: catName }
              }}>
                <a>{catName}</a>
              </Link>
            </li>
          );
        })}
      </ul>
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
      <Pagination totalCount={postsData.length} PER_PAGE={perpage} querPathname="/works" queryFilter={filter} />
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
