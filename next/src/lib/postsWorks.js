import axios from 'axios'
const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/works`;

export async function getPostsWorks(){
  const res = await axios.get(apiUrl);
  const postsWorks = await res.data;
  return postsWorks;
}


//動的↓
export async function getPostsWorksIds(){
  const res = await axios.get(apiUrl);
  const postsWorks = await res.data;
  return postsWorks.map((post)=>{
    return{ 
      params:{
        id:String(post.id)
      }
    }
  })
}

export async function getPostData(id){
  const post = await axios.get(`${apiUrl}/${id}/`);
  return { 
    post:post.data
  }
}