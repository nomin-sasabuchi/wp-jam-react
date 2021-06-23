import { DefaltLayout } from '@/components/organismus/layaouts/DefaltLayout';
import { getPostsWorksIds, getPostData } from '@/lib/postsWorks';

const Post = ({ post }) => {
  console.log(post);
  return (
    <DefaltLayout>
      <p>テスト</p>
    </DefaltLayout>
  )
}

export default Post;

export const getStaticPaths = async () => {
  const paths = await getPostsWorksIds();
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await getPostData(params.id);
  return {
    props: { post }
  }
}