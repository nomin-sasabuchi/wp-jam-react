import axios from 'axios'
const apiUrl = 'http://localhost:8080/wp-json/wp/v2/works';

export async function getPostsWorks(){
  const res = await axios.get(apiUrl);
  const postsWorks = await res.data;
  return postsWorks;
}

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
  const res = await axios.get(new URL(`${apiUrl}/${id}/`));
  return { 
    post
  }
}