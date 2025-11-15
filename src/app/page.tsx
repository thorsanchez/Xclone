import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar />
        <MainComponent />
        <section className="fixed flex flex-col space-y-4 right-0">
          <div>
            <div className="relative w-full h-full">
              <div className="absolute left-0 top-0 h-full flex items-center justify-center">
                <CiSearch className="w-5 h-5 text-gray-500 " />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full rounded-xl py-4 px-8 outline-none bg-transparent border-none"
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
