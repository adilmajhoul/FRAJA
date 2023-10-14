import { Route, Link, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function PaginationButtons({ currentPage, currentGenre }) {
  const [visiblePages, setVisiblePages] = useState([]);
  const [currentPageState, setCurrentPageState] = useState(null);

  useEffect(() => {
    let pagesButtonsToShow = [];
    if (currentPage >= 3) {
      for (let i = -2, j = 0; i < 3; i++, j++) {
        pagesButtonsToShow[j] = parseInt(currentPage) + i;
      }
      setVisiblePages([...pagesButtonsToShow]);
    } else if (currentPage <= 2 && currentPage > 0) {
      setVisiblePages([1, 2, 3, 4, 5]);
    }

    setCurrentPageState(currentPage);
    console.log("visible pages now ->", visiblePages);
  }, [currentPage, currentGenre]);

  return (
    <div className='mt-4 flex justify-center space-x-2'>
      <button
        onClick={() => handleClickPrev()}
        className='mb-5 rounded-full bg-red-500 px-4 py-2 text-xl font-bold  text-white active:border-2 active:border-red-500 active:bg-white active:text-red-500'
      >
        <Link
          to={`/popular/${currentGenre}/${
            currentPage > 1 && !(currentPage < 1)
              ? parseInt(currentPageState) - 1
              : 1
          }`}
        >
          Prev
        </Link>
      </button>
      {visiblePages.map((pageNumber, index) => (
        <button
          key={pageNumber}
          // onClick={() => handlePageChange(page)}
          className={`mb-5 rounded-full px-4 py-2 text-xl font-bold active:border-2 active:border-red-500 active:bg-white active:bg-red-500 active:text-white
          ${
            index === 2
              ? "border-2 border-red-500  text-red-500 "
              : "bg-white text-red-500"
          }`}
        >
          <Link to={`/popular/${currentGenre}/${pageNumber}`}>
            {pageNumber}
          </Link>
        </button>
      ))}
      <button
        onClick={() => handleClickNext()}
        className='mb-5 rounded-full bg-red-500 px-4 py-2 text-xl font-bold  text-white active:border-2 active:border-red-500 active:bg-white active:text-red-500'
      >
        <Link to={`/popular/${currentGenre}/${parseInt(currentPageState) + 1}`}>
          Next
        </Link>
      </button>
    </div>
  );
}
