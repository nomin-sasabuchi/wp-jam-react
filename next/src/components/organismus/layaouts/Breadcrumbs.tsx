import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  blogPageInfo?: {
    categoryId: string;
    categoryName: string;
    blogTitle: string;
  };
  pageTitle?: string;
}

const Breadcrumb: React.FC<Props> = ({ blogPageInfo, pageTitle }) => {
  const router = useRouter();
  const path = router.asPath;

  const isBlogPage = /\/blogs\/.+$/.test(path);

  return (
    <ul>
      <li>
        <Link href="/">
          <a>サイト名</a>
        </Link>
      </li>
      {isBlogPage && (
        <>
          <li>
            <Link
              href="/category/[id]"
              as={`/category/${blogPageInfo?.categoryId}`}
            >
              <a>{blogPageInfo?.categoryName}</a>
            </Link>
          </li>
          <li>{blogPageInfo?.blogTitle}</li>
        </>
      )}
      {pageTitle && <li>{pageTitle}</li>}
    </ul>
  );
};

export default Breadcrumb;
