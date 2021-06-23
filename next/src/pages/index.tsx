import { DefaltLayout } from '@/components/organismus/layaouts/DefaltLayout';
import { Mv } from '@/components/templates/top/Mv';
import { About } from '@/components/templates/top/About';
import { Works } from '@/components/templates/top/Works';
import { Skills } from '@/components/templates/top/Skills';
import { Contact } from '@/components/templates/top/Contact';

//apiデータ
import { getPostsWorks } from '@/lib/postsWorks'
import { getPostsSkills } from '@/lib/postsSkills'
import { GetStaticProps } from 'next'

const Home: React.FC = ({ worksPosts, skillsPosts }) => {
  return (
    <DefaltLayout title="home">
      <Mv />
      <About />
      <Works posts={worksPosts} />
      <Skills posts={skillsPosts} />
      <Contact />
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