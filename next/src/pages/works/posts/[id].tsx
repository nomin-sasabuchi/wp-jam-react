import { DefaltLayout } from '@/components/templates/DefaltLayout';
import { getPostsWorksIds, getPostData } from '../../../../lib/postsWorks';

const Post = ({ post }) => {
  return (
    <DefaltLayout title={post.title.rendered}>
      <p>{post.title.rendered}</p>
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
    post
  }
}