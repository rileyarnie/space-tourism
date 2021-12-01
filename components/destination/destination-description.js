const DestinationDescription = ({ destination }) => {
  return (
    <>
      <div className="mt-5 text-white px-6">
        <h1 className="uppercase text-5.5xl text-center font-bellefair">
          {destination.name}
        </h1>
        <p className="font-barlow text-center text-above-base">
          {destination.description}
        </p>
        <div className="mt-8 h-thin-line bg-divider-color"></div>
      </div>
      <div className="mt-8 text-white mx-20">
        <h3 className="uppercase text-center text-sm font-barlow-condensed mb-3">
          avg. distance
        </h3>
        <p className="text-2.5xl text-center font-bellefair">
          {destination.distance} KM
        </p>
      </div>
      <div className="mt-8 text-white mx-20">
        <h3 className="uppercase text-center text-sm font-barlow-condensed mb-3">
          est. travel time
        </h3>
        <p className="text-2.5xl text-center font-bellefair uppercase">
          {destination.travelTime}
        </p>
      </div>
    </>
  );
};

export default DestinationDescription;
