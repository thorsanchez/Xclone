import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full flex relative">
        <LeftSidebar />
        <MainComponent />
        <section className="w-[30%] sticky top-0 mt-2 h-screen flex flex-col items-stretch px-6">
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
          <div></div>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default Home;
