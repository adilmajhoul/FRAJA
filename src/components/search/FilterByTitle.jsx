import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { apiAuthToken } from '../apiAuthToken';
import { useAtom } from 'jotai';
import { isTitleFiltering, shows, titles, title_query } from './atoms';

export default function FilterByTitle() {
  const [isTyping, setIsTyping] = useState(false);

  const [titleQuery, setTitleQuery] = useAtom(title_query);
  const [showsTitles, setShowsTitles] = useAtom(titles);
  const [showsList, setShowsList] = useAtom(shows);
  const [titleFiltering, setTitleFiltering] = useAtom(isTitleFiltering);

  if (titleQuery == '') {
    setTitleFiltering(false);
  }

  const dropRef = useRef();

  function handleClickOutside(event) {
    if (!dropRef.current.contains(event.target)) {
      setIsTyping(false);
    }
  }

  useEffect(() => {
    if (isTyping) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div className='w-1/5 '>
      <input
        className='mx-2 my-2 text-xl rounded-md '
        value={titleQuery}
        onChange={(e) => {
          setTitleFiltering(true);
          setIsTyping(true);
          setTitleQuery(e.target.value);
        }}
        // ----------
        onClick={() => setIsTyping(true)}
        onKeyDown={() => setIsTyping(false)}
        placeholder='filter by title'
        type='text'
      />
      {isTyping && (
        <div className=' border-2 rounded-md absolute ' ref={dropRef}>
          {showsTitles.map((title) => (
            <div
              className='py-1 px-2 bg-white text-black cursor-pointer hover:bg-gray-300'
              onClick={() => {
                setIsTyping(false);
                setTitleFiltering(true);

                setTitleQuery(title);
              }}
            >
              {title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
