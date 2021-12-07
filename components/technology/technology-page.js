import Head from "next/head";
import Navbar from "../Navbar";

import TechnologyDescription from "./technology-description";

const TechnologyPage = ({ technologies, technology }) => {
  return (
    <div className="h-screen max-h-screen bg-technology-mobile bg-no-repeat bg-cover lg:bg-technology-tablet xl:bg-technology-desktop ">
      <Head>
        <title>Technology - </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="text-white flex space-x-4.5 justify-center font-barlow-condensed">
        <p className="font-bold mix-blend-difference text-gray-500 tracking-even-wider">
          03
        </p>
        <p className="uppercase "> SPACE LAUNCH 101</p>
      </div>
      <TechnologyDescription
        technology={technology}
        technologies={technologies}
      />
    </div>
  );
};

export default TechnologyPage;
