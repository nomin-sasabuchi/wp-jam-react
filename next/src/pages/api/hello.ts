// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { FC } from 'react';

export default (req: string, res: string): FC<string> => {
  res.status(200).json({ name: 'John Doe' });
};
