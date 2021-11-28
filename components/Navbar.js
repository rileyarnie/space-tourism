import Logo from "./icons/Logo";
import IconHamburger from "./icons/IconHamburger";
import IconClose from "./icons/IconClose";

const Navbar = () => {
  return (
    <div className=" p-6 flex justify-between items-center">
      <div className="">
        <Logo />
      </div>
      <div className="">
        <IconHamburger />
      </div>
    </div>
  );
};

export default Navbar;
