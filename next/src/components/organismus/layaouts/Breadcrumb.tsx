import Link from 'next/link';
import { useRouter } from 'next/router';

import React from 'react'

export const Breadcrumb = ({ title }) => {
  const { asPath } = useRouter();
  const slicedPath = asPath.split('/');
  const convertWord = 'posts';
  let tmp = '/';
  console.log(asPath);
  const breadCrumbsList = slicedPath.map((path) => {
    if (path === convertWord) {
      tmp += `/${convertWord}/`;
      return null;
    }
    return (tmp += path);
  }).filter(Boolean);
  return (
    <ul className="flex">
      {asPath == '/' || breadCrumbsList.map((link) => {
        return (
          <li>
            <Link href={link}><a>{title}</a></Link>
          </li>
        )
      })}
    </ul>
  )
}
