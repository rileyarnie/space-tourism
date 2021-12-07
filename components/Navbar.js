import Logo from "./icons/Logo";
import IconHamburger from "./icons/IconHamburger";
import IconClose from "./icons/IconClose";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
          <div className="z-10 md:hidden" onClick={handleToggle}>
            <IconClose />
          </div>
        )}
        <div className="">
          <div className="text-white   md:absolute md:top-0 md:right-0 bg-nav-background font-barlow-condensed flex uppercase space-x-9 py-10 px-12 tracking-wider">
            <p className="">
              <span className="font-bold mr-2 md:hidden">00</span>
              <span className="tracking-even-wider leading-5">Home</span>
            </p>
            <p className="">
              <span className="font-bold mr-2 md:hidden">01</span>
              <span className="tracking-even-wider leading-5">Destination</span>
            </p>
            <p className="">
              <span className="font-bold mr-2 md:hidden">02</span>
              <span className="tracking-even-wider leading-5">Crew</span>
            </p>
            <p className="">
              <span className="font-bold mr-2 md:hidden">03</span>
              <span className="tracking-even-wider leading-5">Technology</span>
            </p>
          </div>
        </div>
      </nav>

      {open && (
        <div className=" h-full backdrop-blur-xl absolute top-0 right-0 w-64 duration-1000 ease-in-out">
          <div className="text-white font-barlow-condensed mt-40 flex flex-col uppercase space-y-8 tracking-wider ml-7">
            <p className="">
              <span className="font-bold mr-2">00</span>
              <span className="tracking-even-wider leading-5">Home</span>
            </p>
            <p className="">
              <span className="font-bold mr-2">01</span>
              <span className="tracking-even-wider leading-5">Destination</span>
            </p>
            <p className="">
              <span className="font-bold mr-2">02</span>
              <span className="tracking-even-wider leading-5">Crew</span>
            </p>
            <p className="">
              <span className="font-bold mr-2">03</span>
              <span className="tracking-even-wider leading-5">Technology</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
