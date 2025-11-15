import React from "react";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { LuShare } from "react-icons/lu";

const MainComponent = () => {
  return (
    <main className="ml-[205px] flex w-[700px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <h1 className="text-xl font-bold my-4 p-6 backdrop-blur bg-white/10 sticky top-0">
        Following
      </h1>
      <div className="border-t-[0.5px] border-b-[0.5px] px-4 flex items-stretch space-x-2 py-6 border-gray-600 relative">
        <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
        <div className="flex flex-col w-full">
          <input
            type="text"
            className="w-full h-full bg-transparent placeholder:text-2xl placeholder:text-gray-500 border-t-[0.5px] border-b-[0.5px] border-gray-600 outline-none border-none"
            placeholder="What's happening?"
          />

          <div className="w-full justify-between items-center flex"></div>
          <div></div>
          <div className="w-full max-w-[100px] ml-auto">
            <button className="w-full rounded-3xl bg-white px-4 py-2 text-2xl text-center hover:bg-opacity-70 transition duration-200 text-black font-bold">
              Post
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="border-b-[0.5px] border-gray-600 p-4 flex space-x-4"
          >
            <div className="w-10 h-10 bg-slate-200 rounded-full flex-shrink-0"></div>
            <div className="flex flex-col">
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center space-x-1 w-full">
                  <div className="font-bold">Thor test</div>
                  <div className="text-gray-500">@thor</div>
                  <div className="text-gray-500">
                    <BsDot />
                  </div>
                  <div className="text-gray-500">1 hour ago</div>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              <div className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                dolor, quibusdam eum quam minima, enim possimus deserunt dicta
                assumenda repellendus eaque laboriosam.
              </div>
              <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl"></div>
              <div className="flex items-center justify-between space-x-2 w-full text-gray-500">
                <div className="rounded-full hover:bg-white/50 p-3 cursor-pointer duration-200">
                  <FaRegComment />
                </div>
                <div className="rounded-full hover:bg-white/50 p-3 cursor-pointer duration-200">
                  <BiRepost />
                </div>
                <div className="rounded-full hover:bg-white/50 p-3 cursor-pointer duration-200">
                  <FaRegHeart />
                </div>
                <div className="rounded-full hover:bg-white/50 p-3 cursor-pointer duration-200">
                  <IoStatsChart />
                </div>
                <div className="rounded-full hover:bg-white/50 p-3 cursor-pointer duration-200">
                  <CiBookmark />
                </div>
                <div className="rounded-full hover:bg-white/50 p-3 cursor-pointer duration-200">
                  <LuShare />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainComponent;
