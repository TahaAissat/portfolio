import { useSelector } from "react-redux";

function About() {
  const language = useSelector((state) => state.language.value);
  let data = {};

  const engData = {
    p1: `After a few years of eyeing the prospect, 2023 is when I took my leap of faith and decided to start my developer career.`,
    p2: "Being able to learn and evolve on a daily basis, the rush I feel every time I manage to solve a problem are the things that make me certain I'll never grow tired of coding !",
    p3:
      'After an intense bootcamp of 10 weeks at ',
     p4 : 'at the end of which I obtained my RNCP certification, I\'m currently looking for job opportunities to learn even more !'
  };
  const frData = {
    p1: "Après plusieurs années passées à considerer la perspective, j'ai finalement decidé de débuter ma carrière de développeur web en 2023.",
    p2 : "Pouvoir apprendre et évoluer au quotidien, la satisfaction ressentie lorsque je résous un problème sont les elements qui m'assurent que je me lasserais jamais de coder !",
    p3 : 'Après un bootcamp intense de 10 semaines à ',
    p4 : 'au terme duquel j\'ai obtenu une certification RNCP, je suis actuellement en recherche d\'un poste.'
  };

  if (language === "english") {
    data = engData;
  } else {
    data = frData;
  }
  return (
    <div className="opacity-80">
      <p className="text-white text-xl mb-3">{data.p1}</p>
      <p className="text-white text-xl mb-3">{data.p2}</p>
      <p className="text-white text-xl">
        {data.p3}
        <a className='text-cyan-400 hover:text-cyan-700 font-semibold' href="https://www.lacapsule.academy" target='_blank'>La Capsule</a> {data.p4}
      </p>
    </div>
  );
}

export default About;
