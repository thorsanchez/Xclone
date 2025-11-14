import LeftSidebar from "@/components/LeftSidebar";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar*/}
        <LeftSidebar />
          <main className="ml-[205px] p-6 flex w-[700px] h-full min-h-screen flex-col border-l border-r border-gray-600">
            <h1 className="text-2xl font-bold">home</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nunc at placerat cursus, nibh libero hendrerit libero, ac
            dignissim sapien lorem sed odio. Integer id nisl vitae arcu suscipit
            molestie. Suspendisse id risus semper, egestas magna vel, fringilla
            arcu. Vestibulum ut augue nec risus tempus finibus. Donec
            condimentum libero vel libero sollicitudin, at placerat purus
            gravida. Morbi in purus sit amet leo posuere hendrerit. Suspendisse
            ac aliquet mauris. Donec tincidunt, tortor sed facilisis sagittis,
            purus est luctus metus, non aliquam augue neque sit amet urna. Sed
            dictum aliquet velit, at dapibus dolor ornare a. Quisque sed nunc
            vulputate, dictum ipsum id, bibendum nisl. Suspendisse vehicula
            faucibus lectus a volutpat. Vivamus posuere, ex a ullamcorper
            placerat, magna sem interdum arcu, et scelerisque magna velit id
            sapien. Sed efficitur massa eget erat hendrerit, vitae tincidunt
            nulla vulputate. Mauris arcu quam, malesuada a suscipit non, varius
            non purus. Phasellus porta eget eros a posuere. Aliquam a
            scelerisque elit. Vestibulum sed bibendum libero. Pellentesque
            luctus laorue venenatis. Donec iaculis nibh turpis, et tristique
            metus dapibus sed. Aliquam neque dolor, finibus eu imperdiet nec,
            condimentum sed velit. Sed pharetra dolor eu quam tincidunt, sed
            tincidunt arcu tristique. Vivamus non venenatis magna. Phasellus
            consectetur urna vitae ornare consectetur. Donec malesuada libero
            consequat, convallis massa a, pellentesque risus. Sed et consectetur
            tellus. Curabitur vulputate risus placerat turpis aliquet
            ullamcorper. Quisque eu accumsan leo, in sollicitudin libero.
            Integer maximus pharetra velit. Mauris lobortis urna augue, in
            hendrerit nisl volutpat vel. Donec et finibus Doneclibero, at
            maximus nulla. Vestibulum eu imperdiet tortor. In rhoncus nibh non
            suscipit tempor. Donec ut nunc sodales, volutpat lorem non, ultrices
            lectus. Nulla mattis vel nisi sit amet pulvinar. Mauris sodales nisi
            sed magna semper, eget tempus erat varius. Donec mattis libero at
            faucibus faucibus. Suspendisse tempor porttitor sagittis. Maecenas
            tristique, justo id feugiat viverra, sem arcu faucibus ante, eget
            fermentum neque sapien sit amet erat. Pellentesque id pulvinar leo.
            Mauris sagittis nisl lectus, accumsan sodales nisi auctor vel.
            Suspendisse gravida vestibulum sodales. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Vivamus ultricies volutpat nisl, vel cursus mi finibus a. Nulla
            vitae rhoncus orci. Suspendisse aliquam nibh sed neque cursus
            tincidunt. Sed tincidunt sodales risus et hendrerit. Praesent
            pharetra sapien lectus, a vulputate mauris bibendum congue. Aliquam
            erat volutpat. Vestibulum hendrerit non sem sed ornare. Donec
            pellentesque, velit non condimentum varius, lacus nulla commodo
            eros, eu lacinia leo sapien sollicitudin ligula. Vestibulum eleifend
            volutpat iaculis.
          </main>
      </div>
    </div>
  );
};

export default Home;
