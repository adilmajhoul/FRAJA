import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { englishGenresIdFirst } from "../../data/englishGenresIdFirst";
import axios from "axios";

const imageConfig = {
  base_url: "http://image.tmdb.org/t/p/",
  secure_base_url: "https://image.tmdb.org/t/p/",
  poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
};

import { apiKey } from "../../data/apiKey";
import * as tmdb from "../../services/tmdbApi/tmdb";

export default function SimplePosterCard({ showId }) {
  const [isOpen, setIsOpen] = useState(false);
  const { genre, page, showType } = useParams();
  const [show, setShow] = useState(null);

  const getPoster = (posterId) => {
    return `${imageConfig.base_url}${imageConfig.poster_sizes[3]}${posterId}`;
  };

  const getGenres = (ids) => {
    return ids.map((id) => englishGenresIdFirst[id]);
  };

  const parseYear = (yearString) => {
    return yearString.split("-")[0];
  };

  // const fetchData = async () => {
  //   try {
  //     const res = await axios.get(
  //       `https://api.themoviedb.org/3/movie/${showId}?api_key=${apiKey}`,
  //     );
  //     const data = res.data;

  //     if (data) {
  //       setShow(data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const fetchData = async () => {
    const data = await tmdb.fetchSingleMovie(showId, apiKey);

    setShow(data);
  };

  useEffect(() => {
    fetchData();
  }, [showId]);

  return (
    <Link
      to={`/top/${showType || "movie"}/${
        genre || englishGenresIdFirst[show?.genres[0]?.id] || ""
      }/${page || ""}/${showId || ""}`}
    >
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`group m-4 flex h-[400px] w-[300px] flex-col justify-between rounded-xl text-right hover:cursor-pointer`}
      >
        <div
          className="h-full w-full rounded-xl bg-contain bg-cover"
          style={{
            backgroundImage: `url(${show ? getPoster(show.poster_path) : ""}`,
          }}
        >
          {isOpen && show && (
            <div className="h-full flex-col rounded-xl bg-red-900 bg-opacity-0 text-sm font-semibold text-white group-hover:bg-opacity-70">
              <div className="p-2 flex h-full flex-col justify-between">
                <div className="flex flex-col text-sm font-semibold">
                  <div className="flex flex-col items-end">
                    {show.genres?.map((genre) => (
                      <span
                        key={genre.id}
                        className="whitespace-nowrap h-fit rounded-full my-[1px] px-[3px] text-black bg-[#ffcc26] w-min"
                      >
                        {englishGenresIdFirst[genre.id]}
                      </span>
                    ))}

                    <span className="whitespace-nowrap w-fit h-fit rounded-full my-[1px] py-[1px] px-[3px] text-black bg-[#ffcc26] w-min">
                      Votes: {show.vote_count}
                    </span>

                    <span className="whitespace-nowrap flex items-center h-min rounded-full my-[1px] py-[1px] px-[3px] font-extrabold text-black bg-[#ffcc26] w-min">
                      {show.vote_average}
                    </span>

                    <span className="whitespace-nowrap w-fit h-fit rounded-full my-[1px] py-[1px] px-[3px] text-black bg-[#ffcc26] w-min">
                      Year:{" "}
                      {parseYear(show.release_date || show.first_air_date)}
                    </span>
                  </div>
                </div>
                <div className="w-full px-2 pb-4 flex justify-center text-left text-xl font-extrabold">
                  <div>{show.title}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
