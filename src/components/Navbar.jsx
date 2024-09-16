import {Link} from "react-router-dom";
 
const Navbar = () => {
  return (
    <nav className=" w-screen absolute z-50 backdrop-blur-sm">
      <div className="navbar text-white w-[80vw] h-24 flex justify-around m-auto items-center ">
        <a
          href="/#about"
          className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          ABOUT
        </a>

        <a
          href="/events"
          className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          EVENTS
        </a>

        <a
          href="/#workshops"
          className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          WORKSHOPS
        </a>

        <Link to="/">
          <img src="/assets/logo/logo_nav.png" height={350} width={350} />
        </Link>

        <a
          href="/#speakers"
          className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          SPEAKERS
        </a>

        <a
          href="/team"
          className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          TEAM
        </a>
        <a
          href="/#contact"
          className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
