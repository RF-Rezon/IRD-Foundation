import Body from "./components/Body/Body";
import Nav from "./components/Nav/Nav";


export default function Home() {
  
  return (
    <main>
      <div className="h-screen w-full flex flex-col-reverse md:flex-row bg-customBg xl:p-10 gap-x-6 fixed">
        <div className="basis-[6%] h-full">
          <Nav />
        </div>
        <div className="basis-[94%] h-full"><Body /></div>
      </div>
    </main>
  );
}
