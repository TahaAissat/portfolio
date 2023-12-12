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
    p3 : 'User journey : ',
    p4 : 'Links to the repositories of this MVP :'
  };
  const frData = {
    h1: "Projets",
    p1: "Une application web qui permet de rechercher le rapport météo d'une ville et de l'ajouter à vos favoris afin de l'afficher sur l'écran d'acceuil lorsque vous vous connectez.",
    p2: "Une application mobile créee en collaboration avec deux collègues lors de mon bootcamp. Elle permet aux gérants d'entreprises d'ambulances privées de gérer plus éfficacement leurs interventions et patients.",
    p3 : 'User journey : ',
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
        <h1 className="font-bold text-white text-2xl ">{data.h1}</h1>
      </div>
      <a href="https://weather-report-front.vercel.app/" target="_blank">
        <div className="hover:bg-slate-800 text-white hover:text-cyan-400 p-2 rounded-lg my-1">
          <h2 className="text-lg font-semibold">Your weather report</h2>
          <p className=" text-sm">{data.p1}</p>
        </div>
      </a>
      <div className="space-x-2 p-2 mb-5">
        <span className="text-sm bg-slate-800 text-cyan-400  p-1.5">
          Express
        </span>
        <span className="text-sm bg-slate-800 text-cyan-400  p-1.5">Node</span>
        <span className="text-sm bg-slate-800 text-cyan-400 p-1.5">React</span>
        <span className="text-sm bg-slate-800 text-cyan-400  p-1.5">
          NextJS
        </span>
        <span className="text-sm bg-slate-800 text-cyan-400 p-1.5">
          Tailwind
        </span>
      </div>
      <div
        className="hover:bg-slate-800 text-white hover:text-cyan-400 p-2 rounded-lg my-2"
        onClick={() => setIsPopoeverOpen(!isPopoverOpen)}
      >
        <h2 className="text-lg font-semibold">ECNA</h2>
        <p className=" text-sm">{data.p2}</p>
      </div>
      <div className="space-x-2 p-2">
        <span className="text-sm bg-slate-800 text-cyan-400  p-1.5">
          Express
        </span>
        <span className="text-sm bg-slate-800 text-cyan-400 p-1.5">Node</span>
        <span className="text-sm bg-slate-800 text-cyan-400  p-1.5">
          React Native
        </span>
      </div>
      {isPopoverOpen ? (
        <div className="flex fixed flex-col  justify-center items-center inset-0 z-50 bg-[#334155] bg-opacity-50">
          <div className="w-auto h-auto bg-gray-100 flex flex-row border-2 rounded border-slate-900 ">
            <div className="flex flex-col w-1/2 items-center">
              <iframe
                width="300"
                height="315"
                src="ECNAMVP.mp4"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="flex flex-col w-1/2 ">
              <span className="flex flex-row justify-end pr-1 pt-1">
                <FontAwesomeIcon
                  icon={faXmarkCircle}
                  size="xl"
                  onClick={() => setIsPopoeverOpen(false)}
                />
              </span>
              <div className="flex flex-col h-full justify-center items-center">
                <div className="space-x-5">
                  <a
                    className="text-sm bg-slate-800 text-cyan-400 rounded-sm p-2"
                    href="https://github.com/TahaAissat/ECNABack"
                    target='_blank'
                  >
                    Backend
                  </a>
                  <a
                    className="text-sm bg-slate-800 text-cyan-400 rounded-sm p-2"
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
