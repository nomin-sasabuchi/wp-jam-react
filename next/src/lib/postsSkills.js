import axios from 'axios'
const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/skills`;

export async function getPostsSkills(){
  const res = await axios.get(apiUrl);
  const posts = await res.data;
  return posts;
}
