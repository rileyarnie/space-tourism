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
      <div className="text-white flex space-x-4.5 justify-center font-barlow-condensed md:mt-10 md:justify-start md:pl-10">
        <p className="font-bold mix-blend-difference text-gray-500 tracking-even-wider">
          01
        </p>
        <p className="uppercase"> Pick your destination</p>
      </div>
      {/* TODO: change height for tablets to be 300px and for mobile to be 170px */}
      <div className="mt-8 grid relative place-items-center z w-44h h-44 md:w-full md:h-80">
        <img
          src={destination.image}
          // height="170"
          // width="170"
          class="w-full h-full  absolute inset-0 object-contain"
        />
      </div>
      <DestinationNav names={destinations} />
      <DestinationDescription destination={destination} />
    </div>
  );
};

export default DestinationPage;
