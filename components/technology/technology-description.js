import TechnologyNav from "./technology-nav";

const TechnologyDescription = ({ technology, technologies }) => {
  //TODO: make the margin botton 34px instead of 32px
  return (
    <div>
      <div className="mt-8 mb-8  ">
        <img src={technology.imageLandscape} />
      </div>
      <div className="flex flex-col px-6">
        <TechnologyNav technologies={technologies} />
        <div className="mt-7 text-sm leading-4 tracking-even-wide uppercase text-center font-barlow-condensed text-white">
          {" "}
          The Terminology...
        </div>
        <div className="mt-2 text-center font-bellefair text-2xl uppercase text-white">
          {technology.name}
        </div>
        <div className="mt-4 text-text-color text-center font-barlow text-above-base leading-6">
          {technology.description}
        </div>
      </div>
    </div>
  );
};

export default TechnologyDescription;
