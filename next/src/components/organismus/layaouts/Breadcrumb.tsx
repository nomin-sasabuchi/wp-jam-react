import Link from 'next/link';
import { useRouter } from 'next/router';

import React from 'react'

export const Breadcrumb = ({ title, addBreadcrumb }) => {
  const defaultBreadcrumbList = [
    { link: "/", text: "Home" }
  ]
  const breadcrumbList = addBreadcrumb ? defaultBreadcrumbList.concat(addBreadcrumb) : defaultBreadcrumbList;
  const { pathname } = useRouter();
  return (
    <>
      { pathname == "/" ||
        <ul className="flex">
          {breadcrumbList.map(({ link, text }) => {
            return (
              <li key={text}> <Link href={link}>{text}</Link></li>
            )
          })}
          <li>
            {title}
          </li>
        </ul>
      }
    </>
  )
}
