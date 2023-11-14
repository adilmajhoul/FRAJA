import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { englishGenresNameFirst as genres } from '../../data/englishGenresNameFirst';
import { useAtom } from 'jotai';
import { isTitleFiltering } from '../search/atoms';

export default function NewDropDown({ title, showType, menuItems }) {
  let [isOverButton, setIsOverButton] = useState(false);
  let [isOverList, setIsOverList] = useState(false);
  let [isOpen, setIsOpen] = useState();
  let [isTouchInput, setIsTouchInput] = useState();
  let [hasClicked, setHasClicked] = useState();
  let button = useRef(null);

  const navigate = useNavigate();

  const [titleFiltering, setTitleFiltering] = useAtom(isTitleFiltering);

  useLayoutEffect(() => {
    if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
      button.current.click();
      setIsOpen(false);
    } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
      button.current.click();
      setIsOpen(true);
    }
  }, [isOverButton, isOverList]);

  useEffect(() => {
    setIsTouchInput(false);
    setHasClicked(false);
  }, [hasClicked]);

  const englishGenresList = Object.keys(genres);

  return (
    <div className='z-10 relative inline-block text-right'>
      <button
        className={`flex flex-row items-center rounded  px-3 py-2 text-lg font-medium  text-white ${
          isOpen ? 'text-red-500' : ''
        }`}
        ref={button}
        onTouchStart={() => {
          setIsTouchInput(true);
        }}
        onMouseEnter={(event) => {
          setIsOverButton(true);
        }}
        onMouseLeave={(event) => {
          setIsOverButton(false);
        }}
        onClick={() => {
          setHasClicked(true);
          setIsOpen(!isOpen);
        }}
        onKeyDown={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className='mr-2 flex items-center justify-between font-semibold'>
          {title}
        </span>
        <span className='text-sm'>▾</span>
      </button>
      {isOpen && (
        <ul
          className='absolute left-0  w-40 rounded border bg-white py-2 shadow-lg'
          onMouseEnter={() => {
            setIsOverList(true);
          }}
          onMouseLeave={() => {
            setIsOverList(false);
          }}
        >
          {Object.keys(menuItems).map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setIsOpen(false);

                setTitleFiltering(false);

                navigate(`/top/${showType}/${englishGenresList[index]}/1/`);
              }}
              className='cursor-pointer px-4 py-2 hover:text-red-600'
            >
              {/* <Link to={`/top/${showType}/${englishGenresList[index]}/1`}> */}
              {item}
              {/* </Link> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
