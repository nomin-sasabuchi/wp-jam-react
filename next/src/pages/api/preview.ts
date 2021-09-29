
import { getPreviewPost } from '@/lib/api'

export default async function preview(req, res) {
  const { secret, id, slug } = req.query

  if (secret !== process.env.WORDPRESS_PREVIEW_SECRET || !id) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const post = await getPreviewPost({ id, slug })
  if (!post) {
    return res.status(401).json({ message: 'Post not found' })
  }
  console.log(post);

  res.setPreviewData({})
  res.redirect(`${slug}posts/${id}`)
}