
import { getPreviewPost } from '@/lib/api'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  const { secret, id, slug, preview_nonce } = req.query

  if (secret !== process.env.WORDPRESS_PREVIEW_SECRET || !id) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const post = await getPreviewPost({ id, slug, preview_nonce })
  if (!post) {
    return res.status(401).json({ message: 'Post not found' })
  }
  console.log(post);

  res.setPreviewData({})

  res.redirect(`${slug}posts/${id}`)
}