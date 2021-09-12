import { DefaltLayout } from '@/components/organismus/layaouts/DefaltLayout';
import { getPostsWorksIds, getPostData } from '@/lib/postsWorks';

const Post = ({ post }: any) => {
  const addBreadcrumb = [
    { link: "/works", text: "制作一覧" }
  ]
  return (
    <DefaltLayout title={post.title} addBreadcrumb={addBreadcrumb}>

    </DefaltLayout>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const paths = await getPostsWorksIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = await getPostData(params.id);
  return {
    props: post,
  };
};
