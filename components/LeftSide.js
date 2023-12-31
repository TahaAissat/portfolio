import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function LeftSide() {
  const language = useSelector((state) => state.language.value);
  let data = {};
  const engData = {
    h1: "Hello I'm Taha, welcome to my Portfolio ! ",
    h2: "Junior fullstack developer",
    h3: "My current skillset",
    ul: "Languages",
    tools: "Tools",
  };
  const frData = {
    h1: "Bonjour je suis Taha, bienvenue sur mon Portfolio !",
    h2: "Développeur junior fullstack",
    h3: "Mes compétences actuelles",
    ul: "Langages",
    tools: "Outils",
  };
  if (language === "english") {
    data = engData;
  } else {
    data = frData;
  }
  return (
    <div className="flex flex-col justify-evenly items-center w-1/2 h-screen pl-20 pt-1 pb-20">
      <div className="flex flex-col w-full items-start">
        <h1 className="text-white text-4xl opacity-90">{data.h1}</h1>
        <h2 className="text-white text-2xl opacity-50">{data.h2}</h2>
      </div>
      <div className="w-full flex flex-col  items-center space-y-4">
        <h3 className="flex flex-row w-full justify-start text-cyan-400 text-2xl opacity-90 pl-42">{data.h3}</h3>
        <div className="flex flex-row w-full justify-start space-x-16 text-white pb-10">
          <ul>
            <h4 className="font-semibold text-xl">{data.ul}</h4>
            <li>Javascript(ES6)</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <ul>
            <h4 className="font-semibold text-xl">Frameworks</h4>
            <li>Express</li>
            <li>Node</li>
            <li>React/Next</li>
            <li>React Native</li>
          </ul>
          <ul>
            <h4 className="font-semibold text-xl">{data.tools}</h4>
            <li>Git & GitHub</li>
            <li>MongoDB/Mongoose</li>
            <li>Tailwind</li>
            <li>Postman</li>
          </ul>
        </div>
        <div className="w-full flex flex-row justify-start text-white space-x-4 mt-8">
          <a
            className="hover:text-cyan-400"
            href="https://github.com/TahaAissat"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
          <a
            className="hover:text-cyan-400"
            href="https://www.linkedin.com/in/tahaaissat/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
