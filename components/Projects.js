import { useSelector } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const language = useSelector((state) => state.language.value);
  const engData = {
    h1: "Projects",
    p1: "A webapp I built that allows you to search and add a city's weather report to your favorites so that you may have it available anytime you log in.",
    p2: "A mobile application we built with two other collegues during my bootcamp. It allows ambulance company owners to track more effiently their interventions and patients",
    p3 : 'On the left a demonstration of the user journey of our MVP',
    p4 : 'Links to the repositories of this MVP :'
  };
  const frData = {
    h1: "Projets",
    p1: "Une application web qui permet de rechercher le rapport météo d'une ville et de l'ajouter à vos favoris afin de l'afficher sur l'écran d'acceuil lorsque vous vous connectez.",
    p2: "Une application mobile créee en collaboration avec deux collègues lors de mon bootcamp. Elle permet aux gérants d'entreprises d'ambulances privées de gérer plus éfficacement leurs interventions et patients.",
    p3 : 'Sur la gauche une démonstration du user journey du MVP',
    p4 : 'Liens vers les repositoires du MVP : '
  };
  let data = {};
  if (language === "english") {
    data = engData;
  } else {
    data = frData;
  }
  const [isPopoverOpen, setIsPopoeverOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-row justify-center mb-5">
        <h1 className="font-bold text-white text-3xl ">{data.h1}</h1>
      </div>
      <a href="https://weather-report-front.vercel.app/" target="_blank">
        <div className="hover:bg-slate-800 text-white hover:text-cyan-400 p-2 rounded-lg my-1">
          <h2 className="text-2xl font-semibold ">Your weather report</h2>
          <p className=" text-m">{data.p1}</p>
        </div>
      </a>
      <div className="space-x-2 p-2 mb-5">
        <span className="text-sm bg-slate-800 text-cyan-400 p-2 rounded-xl">
          Express
        </span>
        <span className="text-sm bg-slate-800 text-cyan-400 p-2 rounded-xl">
          Node
        </span>
        <span className="text-sm bg-slate-800 text-cyan-400 p-2 rounded-xl">
          React
        </span>
        <span className="text-sm bg-slate-800 text-cyan-400 p-2 rounded-xl">
          NextJS
        </span>
        <span className="text-sm bg-slate-800 text-cyan-400 p-2 rounded-xl">
          Tailwind
        </span>
      </div>
      <div
        className="hover:bg-slate-800 hover:cursor-pointer text-white hover:text-cyan-400 p-2 rounded-lg my-2"
        onClick={() => setIsPopoeverOpen(!isPopoverOpen)}
      >
        <h2 className="text-2xl font-semibold">ECNA</h2>
        <p className=" text-m">{data.p2}</p>
      </div>
      <div className="space-x-2 p-2">
        <span className="text-sm bg-slate-800 text-cyan-400 p-2 rounded-xl">
          Express
        </span>
        <span className="text-sm bg-slate-800 text-cyan-400 p-2 rounded-xl">
          Node
        </span>
        <span className="text-sm bg-slate-800 text-cyan-400 p-2 rounded-xl">
          React Native
        </span>
      </div>
      {isPopoverOpen ? (
        <div className="flex fixed flex-col  justify-center items-center inset-0 z-50 bg-[#334155] bg-opacity-90">
          <div className="w-1/2 h-1/2  flex flex-row border-2 rounded-xl border-slate-900 ">
            <div className="flex flex-col w-1/2 items-center bg-gray-100">
              <iframe
                width="100%"
                height="100%"
                src="ECNAMVP.mp4"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="flex flex-col w-1/2 bg-slate-900">
              <span className="flex flex-row justify-end pr-1.5 pt-1.5">
                <FontAwesomeIcon
                  icon={faXmarkCircle}
                  size="xl"
                  color='white'
                  onClick={() => setIsPopoeverOpen(false)}
                />
              </span>
              <div className="flex flex-col h-full justify-evenly items-center  ">
                <p className="text-m text-white">{data.p3}</p>
                <div className="flex flex-col space-x-5 space-y-4">
                  <p className="text-m text-white">{data.p4}</p>
                  <a
                    className="flex justify-center text-sm bg-slate-800 text-cyan-400 rounded-2xl p-3"
                    href="https://github.com/TahaAissat/ECNABack"
                    target="_blank"
                  >
                    Backend
                  </a>
                  <a
                    className="flex justify-center text-sm bg-slate-800 text-cyan-400 rounded-2xl p-3"
                    href="https://github.com/TahaAissat/ECNAFront"
                    target="_blank"
                  >
                    Frontend
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default Projects;
