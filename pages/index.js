import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen py-2 bg-mobile bg-no-repeat bg-contain lg:bg-tablet xl:bg-desktop ">
      <Head>
        <title>Space Tourism</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
