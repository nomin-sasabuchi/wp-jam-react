import { FC } from 'react';
import { Section } from '@/components/molecules/outer/Section';
import Confirm from '@/components/templates/contact/Confirm';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

type FormType = {
  yourName: string;
};

export const Index: FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormType>();

  const onSubmitData = () => {
    router.push('?confirm');
  };

  const [confirmSwitch, setConfirmSwitch] = useState(false);
  useEffect(() => {
    setConfirmSwitch(location.search == '?confirm');
  }, [onSubmitData]);

  // useEffect(() => {
  //   console.log(getValues())
  // })
  return (
    <Section text="お問い合わせ" imgPath="/top/ttl-skills.svg">
      {confirmSwitch || (
        <form className="mt-[5rem]" onSubmit={handleSubmit(onSubmitData)}>
          <dl className="flex">
            <dt className="mr-[1rem]">
              <label htmlFor="yourname">氏名</label>
            </dt>
            <dd>
              <input
                placeholder="氏名を入力"
                {...register('yourname', { required: true })}
              />
              {errors.yourname && (
                <p className="text-red">名字を入力して下さい</p>
              )}
            </dd>
          </dl>
          <input
            className="block text-white bg-yellow p-[1rem] mt-[5rem] mx-auto"
            value="入力内容を確認"
            type="submit"
          />
        </form>
      )}
      {confirmSwitch && <Confirm values={{ ...getValues() }} />}
    </Section>
  );
};
