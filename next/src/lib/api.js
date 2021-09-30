import axios from 'axios';

export async function getPreviewPost({ id, slug,preview_nonce}) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${slug}?id=${id}/preview`;
  console.log(apiUrl);
  const res = await axios.get(apiUrl);
  const postsWorks = await res.data;
  return postsWorks;
}
