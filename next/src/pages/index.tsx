import { DefaltLayout } from '@/components/templates/DefaltLayout';
import { FC } from 'react';

export const Home: FC<string> = () => {
  return (
    <DefaltLayout title="home">
      <h2>トップページ</h2>
    </DefaltLayout>
  );
}
