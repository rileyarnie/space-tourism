import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="h-screen max-h-screen bg-mobile bg-no-repeat bg-cover lg:bg-tablet xl:bg-desktop ">
      <Head>
        <title>Space Tourism</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="  px-6 mt-16 space-y-6 md:mt-26 md:flex md:flex-col md:space-y-10 md:px-0 md:w-really-huge mx-auto">
        <p className="text-center text-text-color font-barlow-condensed leading-5 tracking-even-wider md:text-xl">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <p className="text-white font-bellefair text-center text-7.5xl leading-long md:text-10xl">
          SPACE
        </p>
        <p className="text-center text-text-color text-above-base font-barlow leading-6 md:text-base md:leading-7">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="bg-white mt-20 h-40 w-40 mx-auto rounded-full grid place-items-center md:w-61.5 md:h-61.5 md:text-3.5xl md:mt-40">
        <p className="text-xl font-bellefair">EXPLORE</p>
      </div>
    </div>
  );
}
