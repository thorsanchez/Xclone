import { MdHomeFilled } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";
import { RiNotification2Line } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Link from "next/link";

//https://react-icons.github.io/react-icons/
const navigation_items = [
  {
    title: "Home",
    icon: MdHomeFilled,
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
        <section className="fixed w-72 flex flex-col">
          {navigation_items.map((item) => (
            <Link
              className="bg-white/50 rounded-3xl p-4 flex items-center justify-center"
              href={`/${item.title.toLowerCase}`}
              key={item.title}
            >
              <div>
                <item.icon />
              </div>
              <div>{item.title}</div>
            </Link>
          ))}
        </section>
        <main>home</main>
        <section>right sidebar</section>
      </div>
    </div>
  );
};

export default Home;
