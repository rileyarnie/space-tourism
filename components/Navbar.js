import { useState } from "react";
import Logo from "./icons/Logo";
import IconHamburger from "./icons/IconHamburger";
import IconClose from "./icons/IconClose";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { pathname } = useRouter();

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className=" p-6 flex justify-between items-center md:px-10">
        <div className="">
          <Logo />
        </div>
        {!open ? (
          <div className="md:hidden" onClick={handleToggle}>
            <IconHamburger />
          </div>
        ) : (
          <div className="z-20 md:hidden" onClick={handleToggle}>
            <IconClose />
          </div>
        )}
        {/* <div className=""> */}
        <div className="text-white hidden  md:absolute md:top-0 md:right-0 bg-nav-background font-barlow-condensed md:flex uppercase space-x-9  px-12 tracking-wider">
          <div
            className={`${pathname === "/" ? "border-b-2" : ""} py-10
            `}
          >
            {" "}
            <span className="font-bold mr-2 md:hidden">00</span>
            <Link href="/" className="tracking-even-wider leading-5 ">
              Home
            </Link>
          </div>
          <div
            className={`${
              pathname.includes("destination") ? "border-b-2" : ""
            } py-10
            `}
          >
            <span className="font-bold mr-2 md:hidden">01</span>
            <Link
              href="/destination/moon"
              className="tracking-even-wider leading-5"
            >
              Destination
            </Link>
          </div>
          <div
            className={`${pathname.includes("crew") ? "border-b-2" : ""} py-10
            `}
          >
            <span className="font-bold mr-2 md:hidden">02</span>
            <Link href="/crew/1" className="tracking-even-wider leading-5">
              Crew
            </Link>
          </div>
          <div
            className={`${
              pathname.includes("technology") ? "border-b-2" : ""
            } py-10
            `}
          >
            <span className="font-bold mr-2 md:hidden">03</span>
            <Link
              href="/technology/1"
              className="tracking-even-wider leading-5"
            >
              Technology
            </Link>
          </div>
          {/* </div> */}
        </div>
      </nav>

      {open && (
        <div className=" h-full backdrop-blur-xl bg-black bg-opacity-75 z-10 absolute top-0 right-0 w-64 duration-1000 ease-in-out">
          <div className="text-white font-barlow-condensed mt-40 flex flex-col uppercase space-y-8 tracking-wider ml-7">
            <p className="">
              <span className="font-bold mr-2">00</span>
              <Link href="/" className="tracking-even-wider leading-5 ">
                Home
              </Link>
            </p>
            <p className="">
              <span className="font-bold mr-2">01</span>
              <Link
                href="/destination/moon"
                className="tracking-even-wider leading-5"
              >
                Destination
              </Link>
            </p>
            <p className="">
              <span className="font-bold mr-2">02</span>
              <Link href="/crew/1" className="tracking-even-wider leading-5">
                Crew
              </Link>
            </p>
            <p className="">
              <span className="font-bold mr-2">03</span>
              <Link
                href="/technology/1"
                className="tracking-even-wider leading-5"
              >
                Technology
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
