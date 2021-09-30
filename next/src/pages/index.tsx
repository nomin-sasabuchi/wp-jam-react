import { DefaltLayout } from '@/components/organismus/layaouts/DefaltLayout';
import { MainVisual } from '@/components/templates/top/MainVisual';
import { About } from '@/components/templates/top/About';
import { Works } from '@/components/templates/top/Works';
import { Skills } from '@/components/templates/top/Skills';

//apiデータ
import { getPostsWorks } from '@/lib/postsWorks';
import { getPostsSkills } from '@/lib/postsSkills';

import { GetStaticProps } from 'next'
import { objWorks } from '@/types/Works';
import { objSkill } from '@/types/skill';
type WorksCard = Pick<objWorks, 'id' | 'title' | 'thumbnail' | 'startData' | 'endData' | 'category'>

const Home = ({ worksPosts, skillsPosts }: { worksPosts: WorksCard[], skillsPosts: objSkill[] }) => {
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
