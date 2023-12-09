import LeftSide from "./LeftSide";
import Header from "./Header";
import RightSide from "./RightSide";

function Home() {
  return (
    <div className="w-full h-full bg-slate-950 scroll-smooth">
      <Header />
      <div className='flex flex-row'>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default Home;
