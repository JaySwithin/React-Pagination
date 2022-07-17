import React from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  const numbers = Math.ceil(totalPosts / postsPerPage);
  for (let i = 1; i <= numbers; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="text-blue-500 font-bold">
      <ul className="flex flex-row justify-between border p-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="!#" className="">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
