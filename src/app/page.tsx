import { MdHomeFilled } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";
import { RiNotification2Line } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Link from "next/link";
import { LuCross } from "react-icons/lu";
import { PiHouse } from "react-icons/pi";

//https://react-icons.github.io/react-icons/
const navigation_items = [
  {
    title: "x",
    icon: LuCross,
  },
  {
    title: "Home",
    icon: PiHouse,
  },
  {
    title: "Explore",
    icon: SlMagnifier,
  },
  {
    title: "Notification",
    icon: RiNotification2Line,
  },
  {
    title: "Messages",
    icon: CiMail,
  },
  {
    title: "Bookmark",
    icon: CiBookmark,
  },
  {
    title: "Profile",
    icon: CiUser,
  },
];
const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* left sidebar*/}
        <section className="fixed w-72 flex flex-col item-stretch h-screen space-y-4">
          <div className="flex flex-col item-stretch h-screen space-y-4 mt-4">
            {navigation_items.map((item) => (
              <Link
                className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-6 rounded-3xl py-2 px-6"
                href={`/${item.title.toLowerCase}`}
                key={item.title}
              >
                <div>
                  <item.icon />
                </div>
                {item.title !== "x" && <div>{item.title}</div>}
              </Link>
            ))}
            <button className="w-full rounded-3xl bg-white px-6 py-4 text-2xl text-center hover:bg-opacity-70 transition duration-200 text-black">
              Post
            </button>
          </div>
          <div> this is bottom</div>
        </section>
        <main></main>
        <section></section>
      </div>
    </div>
  );
};

export default Home;
