function LeftSide() {
  const engData = {
    h1: "Hi and welcome to my Portfolio, I'm Aissat Taha ! ",
    h2: "Junior fullstack developer",
  };
  const frData = {
    h1: "Bonjour et bienvenue sur mon Portfolio, je suis Aissat Taha !",
    h2: "Développeur junior fullstack",
  };

  return (
    <div className="w-1/2 h-screen">
      <h1 className="text-white">{engData.h1}</h1>
      <h2 className="text-white">{engData.h2}</h2>
    </div>
  );
}

export default LeftSide;
