import Router from 'next/router';
import Link from 'next/link';

export const Pagination = (
  { totalCount,
    PER_PAGE,
    querPathname,
    queryFilter = "All" }
) => {

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i)
  return (
    <ul className="flex-center space-x-[1rem]">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index} className="leading-none h-[3.6rem] w-[3.6rem] flex-center border-navy border">
          <Link shallow href={{
            pathname: querPathname,
            query: { page: number, filter: queryFilter }
          }}>
            <a className="w-full h-full flex-center">{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};