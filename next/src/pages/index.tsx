import { DefaltLayout } from '@/components/organismus/layaouts/DefaltLayout';
import { MainVisual } from '@/components/templates/top/MainVisual';
import { About } from '@/components/templates/top/About';
import { Works } from '@/components/templates/top/Works';
import { Skills } from '@/components/templates/top/Skills';

//apiデータ
import { getPostsWorks } from '@/lib/postsWorks';
import { getPostsSkills } from '@/lib/postsSkills';

import { GetStaticProps } from 'next';

//redux
// import { jsonApi } from '@/stores/worksPosts';
// import { useDispatch, useSelector } from 'react-redux';

const Home: React.FC = ({ worksPosts, skillsPosts }: any) => {
  // const dispatch = useDispatch();
  // const selector = useSelector((state) => state);
  // dispatch(
  //   worksPostsAction({
  //     title: "テスト"
  //   })
  // )
  // const dispatch = useDispatch();
  // (() => dispatch(jsonApi()))();
  // const selector = useSelector((state) => state);
  // console.log(selector);
  return (
    <DefaltLayout title="home">
      <MainVisual />
      <About />
      <Works posts={worksPosts} />
      <Skills posts={skillsPosts} />
    </DefaltLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const worksPosts = await getPostsWorks();
  const skillsPosts = await getPostsSkills();
  return {
    props: {
      worksPosts,
      skillsPosts,
    },
  };
};
