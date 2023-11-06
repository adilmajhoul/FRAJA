import React from "react";
import { FiMoreVertical } from "react-icons/fi";

export default function PosterCardMore() {
  return (
    <button className="p-1 rounded-full hover:bg-[#303030]">
      <FiMoreVertical className="text-white font-extrabold text-2xl" />
    </button>
  );
}
