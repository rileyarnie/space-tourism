const DestinationDescription = ({ destination }) => {
  return (
    <>
      <div className="mt-5 text-white px-6">
        <h1 className="uppercase text-5.5xl text-center font-bellefair">
          {destination.name}
        </h1>
        <div className=" md:max-w-xl md:mx-auto">
          <p className="font-barlow text-center text-above-base md:text-base md:leading-7">
            {destination.description}
          </p>
        </div>
        <div className="mt-8 h-thin-line bg-divider-color  md:max-w-2xl md:mx-auto"></div>
      </div>
      <div className="md:flex md:max-w-xl md:mx-auto md:pb-16 md:justify-around">
        <div className="mt-8 text-white mx-20 md:mx-0 ">
          <h3 className="uppercase text-center text-sm font-barlow-condensed mb-3">
            avg. distance
          </h3>
          <p className="text-2.5xl text-center font-bellefair">
            {destination.distance} KM
          </p>
        </div>
        <div className="mt-8 text-white mx-20 md:mx-0">
          <h3 className="uppercase text-center text-sm font-barlow-condensed mb-3">
            est. travel time
          </h3>
          <p className="text-2.5xl text-center font-bellefair uppercase">
            {destination.travelTime}
          </p>
        </div>
      </div>
    </>
  );
};

export default DestinationDescription;
