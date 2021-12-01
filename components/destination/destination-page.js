import Head from "next/head";
import Navbar from "../Navbar";
import DestinationNav from "./destination-nav";
import DestinationDescription from "./destination-description";

const DestinationPage = (props) => {
  const { destination, destinations } = props;

  return (
    <div className=" bg-destination-mobile bg-no-repeat bg-cover lg:bg-destination-tablet xl:bg-destination-desktop ">
      <Head>
        <title>Destination - {destination.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="text-white flex space-x-4.5 justify-center font-barlow-condensed">
        <p className="font-bold mix-blend-difference text-gray-500 tracking-even-wider">
          01
        </p>
        <p className="uppercase"> Pick your destination</p>
      </div>
      <div className="mt-8 grid place-items-center z">
        <img src={destination.image} height="170" width="170" />
      </div>
      <DestinationNav names={destinations} />
      <DestinationDescription destination={destination} />
    </div>
  );
};

export default DestinationPage;
