import { DefaltLayout } from '@/components/templates/DefaltLayout';
import { FC } from 'react';

export const About: FC<string> = () => {
  return (
    <DefaltLayout title="About">
      <h2>About</h2>
    </DefaltLayout>
  );
}
