import { FC } from 'react';
import { DefaltLayout } from '@/components/organismus/layaouts/DefaltLayout';
import { Index } from '@/components/templates/contact/Index';

const Contact: FC = () => {
  return (
    <DefaltLayout title="Contact">
      <Index />
    </DefaltLayout>
  );
};

export default Contact;
