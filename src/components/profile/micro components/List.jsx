import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

import SimplePosterCard from "../simplePosterCard";

export default function ListDropDown(props) {
  const [isListOpen, setIsListOpen] = useState(undefined);

  return (
    <div className=" px-10 w-full pt-4">
      <div
        onClick={() => setIsListOpen((prev) => !prev)}
        className={`cursor-pointer h-10 flex justify-between items-center rounded-md felx  bg-[#404040] text-[#170170170] font-semibold text-xl `}
      >
        <span className="mx-8">{props.title}</span>
        <AiOutlineArrowDown className="mx-8 " />
      </div>
      {isListOpen && (
        <div className="flex flex-wrap justify-center">
          {props.shows.map((showId) => (
            <SimplePosterCard showId={showId} />
          ))}
        </div>
      )}
    </div>
  );
}
