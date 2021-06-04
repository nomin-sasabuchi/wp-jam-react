import { DefaltLayout } from '@/components/templates/DefaltLayout';
import { FC } from 'react';

export const Blog: FC<string> = () => {
  return (
    <DefaltLayout title="Blog">
      <h2>Blog</h2>
    </DefaltLayout>
  );
}
