import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="  px-6 mt-16 space-y-6">
        <p className="text-center text-text-color font-barlow-condensed leading-5 tracking-even-wider">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <p className="text-white font-bellefair text-center text-7.5xl leading-long">
          SPACE
        </p>
        <p className="text-center text-text-color text-above-base font-barlow leading-6">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="bg-white mt-20 h-40 w-40 mx-auto rounded-full grid place-items-center">
        <p className="text-xl font-bellefair">EXPLORE</p>
      </div>
    </>
  );
}
