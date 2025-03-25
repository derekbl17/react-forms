import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Paginator({ currentPage, perPage, total }) {
  const [page, setPage] = useState([]);
  const [leftArrow, setLeftArrow] = useState(0);
  const [rightArrow, setRightArrow] = useState(0);

  useEffect(() => {
    const howManyPages = Math.ceil(total / perPage);
    const pages = [];
    for (let i = 0; i < howManyPages; i++) pages.push(i + 1);
    setPage(pages);
  }, [total, perPage]);

  useEffect(() => {
    const currPage = parseInt(currentPage);
    currPage === 1 ? setLeftArrow(0) : setLeftArrow(currPage - 1);
    const howManyPages = Math.ceil(total / perPage);
    currPage === howManyPages ? setRightArrow(0) : setRightArrow(currPage + 1);
  }, [currentPage, total, perPage]);

  return (
    <>
      {" "}
      <Link
        to={"/" + leftArrow}
        style={{ visibility: leftArrow ? "visible" : "hidden" }}
      >
        ---
      </Link>
      {page.map((el) => (
        <Link key={el} to={"/" + el}>
          {el}
        </Link>
      ))}
      <Link
        to={"/" + rightArrow}
        style={{ visibility: rightArrow ? "visible" : "hidden" }}
      >
        +++
      </Link>
    </>
  );
}
