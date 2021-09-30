import { DefaltLayout } from '@/components/organismus/layaouts/DefaltLayout';
import { getPostsWorksIds, getPostData } from '@/lib/postsWorks';
import { objWorks } from '@/types/Works';

const Post = ({ post }: { post: objWorks }) => {
  const addBreadcrumb = [
    { link: "/works", text: "制作一覧" }
  ]
  return (
    <DefaltLayout title={post.title} addBreadcrumb={addBreadcrumb}>
      <h1 className="text-[5rem] text-center">{post.title}</h1>
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

export const getStaticProps = async ({ params, context }) => {
  console.log(context);
  const post = await getPostData({ params, context });
  return {
    props: post,
  };
};

