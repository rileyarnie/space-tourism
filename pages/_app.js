import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head></Head>
      {/* <div className="h-full bg-red-500 absolute">home</div> */}

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
