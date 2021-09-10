import Router from 'next/router';
import Link from 'next/link';

export const Pagination = ({ totalCount, PER_PAGE = 5 }) => {

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul className="text-center">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link shallow href={`/works/?page=${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};