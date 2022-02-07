import Head from "next/head";
import Navbar from "../Navbar";
import CrewMemberDescription from "./crew-member-description";
import CrewNav from "./crew-nav";

const CrewMemberPage = ({ crewMember, wholeCrew }) => {
  return (
    <div className="h-screen max-h-screen bg-crew-mobile bg-no-repeat bg-cover lg:bg-crew-tablet xl:bg-crew-desktop ">
      <Head>
        <title>Crew - {crewMember.name} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="text-white flex space-x-4.5 justify-center font-barlow-condensed md:mt-10 md:justify-start md:pl-10">
        <p className="font-bold mix-blend-difference text-gray-500 tracking-even-wider">
          02
        </p>
        <p className="uppercase"> Meet your Crew</p>
      </div>
      <CrewMemberDescription wholeCrew={wholeCrew} crewMember={crewMember} />
    </div>
  );
};

export default CrewMemberPage;
