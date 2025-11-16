import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-start relative bg-black">
      <div className="max-w-[80vw] w-full flex relative">
        <LeftSidebar />
        <MainComponent />
        <section className="w-[30%] sticky top-0 h-screen flex flex-col items-stretch px-6">
          <div>
            <div className="relative w-full h-full">
              <div className="absolute left-0 top-0 h-full flex items-center justify-center p-4">
                <CiSearch className="w-5 h-5 text-gray-500 " />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full focus:border-twitter focus:border rounded-full py-3 pl-12 pr-4 px-8 outline-none bg-transparent border border-gray-600"
              ></input>
            </div>
          </div>
          <div className="flex flex-col rounded-xl border-[0.5px] border-gray-600 mt-4">
            <h3 className="font-bold text-2xl my-2 p-2">What’s happening</h3>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="hover:bg-white/5">
                <div className="fond-bold text-lg p-4">
                  {" "}
                  trending nuna {i + 1}
                </div>
                <div className="text-xs text-neutral-400 p-4">6,942 posts</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col rounded-xl border-[0.5px] border-gray-600 mt-4">
            <h3 className="font-bold text-2xl my-2 p-2">Who to follow</h3>
            <div>
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className="hover:bg-white/5 flex items-center space-x-4 px-4 py-3"
                >
                  <div className="w-10 h-10 bg-neutral-600 rounded-full"></div>
                  <div className="flex flex-col">
                    <div className="font-bold">Other user</div>
                    <div className="text-gray-500">@user</div>
                  </div>
                  <div className="ml-auto">
                    <button className="rounded-full px-6 py-2 bg-white text-neutral-950">
                      follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
