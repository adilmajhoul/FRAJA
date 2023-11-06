import React, { useState } from "react";

// ---------------------
import { AiOutlineArrowDown } from "react-icons/ai";
// ---------------------
import List from "./micro components/List";
import axios from "axios";
export default function ProfilePrototype() {
  const [isListOpen, setIsListOpen] = useState(true);

  //TODO: build prototype (without fetching ) around this user object
  // ask gpt whats the best strategy for storing user data
  // should i fetch it everytime he inters to his profile or i should cache it
  // fetch is easy though no complexity over head
  const currentUser = {
    _id: "654170e693dc3bcf415f9a02",
    name: "adil ma",
    password: "$2b$10$VFqUKUZFDhYrS/TnhWTy8Oh5g3.4DcBSOD4nhBBYQKgsHihAe5nV2",
    email: "adil1@gmail.com",
    watched: [
      {
        _id: "6545a0ab151f3b9529ca116e",
        tmdbId: "parasite",
        comments: [],
        createdAt: "2023-11-04T01:38:51.789Z",
        updatedAt: "2023-11-04T01:38:51.789Z",
        __v: 0,
      },
    ],
    watchLater: [
      {
        _id: "6545a053151f3b9529ca1159",
        tmdbId: "the expanse",
        comments: [],
        createdAt: "2023-11-04T01:37:23.088Z",
        updatedAt: "2023-11-04T01:37:23.088Z",
        __v: 0,
      },
    ],
    // -----------------------
    collections: [
      {
        name: "my secret collection",
        isPublic: false,

        shows: [
          {
            _id: "6545a069151f3b9529ca1160",
            tmdbId: "437109",
            comments: [],
            createdAt: "2023-11-04T01:37:45.029Z",
            updatedAt: "2023-11-04T01:37:45.029Z",
            __v: 0,
          },
          {
            _id: "6545a069151f3b9529ca1160",
            tmdbId: "629017",
            comments: [],
            createdAt: "2023-11-04T01:37:45.029Z",
            updatedAt: "2023-11-04T01:37:45.029Z",
            __v: 0,
          },
          {
            _id: "6545a069151f3b9529ca1160",
            tmdbId: "762968",
            comments: [],
            createdAt: "2023-11-04T01:37:45.029Z",
            updatedAt: "2023-11-04T01:37:45.029Z",
            __v: 0,
          },
        ],
      },
    ],
    // -------------------------
    comments: [],
    friends: [],
    history: [],
    createdAt: "2023-10-31T21:25:58.321Z",
    updatedAt: "2023-11-04T01:38:52.076Z",
    __v: 3,
  };
  // ---------------------------------------------------------------------------------------
  const user = {
    collections: [
      {
        name: "my secret collection",
        isPublic: false,
        shows: [
          "437109",
          "629017",
          "437109",
          "437109",
          "629017",
          "437109",
          "437109",
          "629017",
          "437109",
          "437109",
          "629017",
          "437109",
        ],
      },
      {
        name: "my public collection",
        isPublic: false,
        shows: ["629017", "437109"],
      },
    ],
  };
  const [collections, setCollections] = useState();

  // const extractCollections = (user) => {
  //   const collections = user.collections.map((collection) => {});

  //   return [name, collections];
  // };

  return (
    <div>
      <div className="mx-10 rounded-md border border-gray-600 bg-[#393939] text-white">
        <img
          className="h-52 w-full object-cover"
          src="https://www.wallpaperup.com/uploads/wallpapers/2016/11/22/1051612/7347241fa5b8d0ef87baabadc497d5a8.jpg"
          alt="background-img"
        />

        <div className="mx-10 flex h-36 flex-row items-center justify-between">
          {/* -------------------------------- */}
          <div className="flex">
            <img
              className="mx-4 h-24 w-24 rounded-md object-cover"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
              alt=""
            />

            <div className="flex flex-col space-y-3">
              <div>
                <span className="text-xl font-semibold">demo account</span>
                <span className="ml-1 rounded border px-2 py-1 text-xs text-gray-400">
                  Superstar Helper
                </span>
              </div>

              <div className="space-x-1 text-xs text-gray-300">
                <span>@josephphillips</span>
                <span>•</span>
                <span>Joined : December 25, 2020</span>
              </div>

              <div className="space-x-2 text-sm text-gray-300">
                <b className="text-base">8</b> Followers
                <b className="text-base">9</b> Following
                <b className="text-base">0</b> Points
              </div>
            </div>
          </div>

          {/* -------------------------------- */}
          <div className="text-white ml-80 md:ml-96 space-x-3 text-base font-semibold">
            <button className="border-4 border-gray-500 rounded-md active:border-4 active:bg-transparent active:border-gray-500 bg-gray-500 px-2 py-1 hover:bg-gray-500 ">
              + Follow
            </button>
            <button className="border-4 border-red-600 rounded-md active:border-4 active:bg-transparent active:border-red-600 bg-red-600 px-2 py-1  ">
              + Add friend
            </button>
            <button className="rounded-md border-4 border-gray-500 px-2 py-1 active:bg-gray-500 ">
              + Message
            </button>
          </div>
        </div>

        <div className=" flex font-semibold h-12 items-center justify-center rounded-b-md border-t border-gray-600 text-[#aaa] text-lg ">
          <button
            onClick={() => setIsListOpen((prev) => !prev)}
            className={`mx-5 hover:text-red-600 hover:border-b-4 hover:border-red-600 ${
              isListOpen ? "border-b-4 border-red-600" : ""
            }`}
          >
            Lists
          </button>

          <button className="mx-5 hover:text-red-600 hover:border-b-4 hover:border-red-600">
            Collections
          </button>

          <button className="mx-5 hover:text-red-600 hover:border-b-4 hover:border-red-600">
            Friends
          </button>

          <button className="mx-5 hover:text-red-600 hover:border-b-4 hover:border-red-600">
            Comments
          </button>

          <button className="mx-5 hover:text-red-600 hover:border-b-4 hover:border-red-600 ">
            History
          </button>
        </div>
      </div>

      {/* ----------------------- */}

      {isListOpen && (
        <div
          id="container"
          className="mt-5 py-4 mx-10 flex flex-col  rounded-md border border-gray-600 text-white"
        >
          {user.collections.map((collection) => (
            <List
              title={collection.name}
              shows={collection.shows.map((show) => show)}
            />
          ))}
          {/* -------------------------- */}
        </div>
      )}
    </div>
  );
}
