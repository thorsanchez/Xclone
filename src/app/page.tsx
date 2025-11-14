import LeftSidebar from "@/components/LeftSidebar";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar*/}
        <LeftSidebar />
        <main className="ml-[205px] flex w-[700px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold my-4 p-6">home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] px-4 flex items-stretch space-x-2 py-4 border-gray-600 h-32 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
            <div className="flex flex-col w-full">
              <input
                type="text"
                className="w-full h-full bg-transparent border-t-[0.5px] border-b-[0.5px] border-gray-600 outline-none border-none"
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
        </main>
      </div>
    </div>
  );
};

export default Home;
