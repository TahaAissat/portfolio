import About from "./About";
import Projects from "./Projects";

function RightSide() {
  return (
    <div className="w-1/2 h-screen overflow-x-hidden overflow-y-auto px-16 pt-10 ">
      <div className="border-b border-white mb-10 pb-10 ">
        <About />
      </div>
      <div>
          <Projects />
      </div>
    </div>
  );
}
export default RightSide;
